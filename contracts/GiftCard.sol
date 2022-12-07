// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./enumerations/Role.sol";
import "./enumerations/CardProposalType.sol";
import "./enumerations/CardProposalResult.sol";
import "./interfaces/IGiftCard.sol";
import "./interfaces/IGiftDAO.sol";
import "./interfaces/IGiftNetwork.sol";
import "./structures/Message.sol";
import "./structures/Proposal.sol";
import "./GiftDAO.sol";

/**
 * @title Contract for Gift card
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to create a gift card 
 */
contract GiftCard is Ownable, IGiftCard {

    address internal constant NULLADDRESS = address(0);

    IGiftNetwork private giftNetwork;

    IGiftDAO private giftDAO;

    string public title;

    string public description;

    uint256 public creationDate;

    uint256 public requierementToBeReleased;

    uint256 private dateToBeReleased;

    address private creator;

    address private beneficiary;

    address[] private participants;

    address private cardDAOAddress;

    Message[] private communChat;

    mapping(address => bool[3]) roles;

    mapping(address => uint) holdings;

    CardStatus private status;

    event ProperlyCreated();
    
    event StatusChanged(uint, uint);

    event BeneficiaryChanged(address, address);

    event Participated(address, uint, uint);

    event AmountTransfered(address, uint);

    event SendedMessage(address);

    /**
     * @notice Throws if called by the creator account
     */
    modifier isCreator() {
        require(getIsCreator(msg.sender), "You're not the creator");
        _;
    }

    /**
     * @notice Throws if called by a participant account
     */
    modifier isParticipant() {
        require(getIsParticipant(msg.sender), "You're not a participant");
        _;
    } 

    /**
     * @notice Throws if called by the beneficiary account
     */
    modifier isBeneficiary() {
        require(getIsBeneficiary(msg.sender), "You're not the beneficiary");
        _;
    }

    /**
     * @notice Throws if the sender has an network's user account
     */
    modifier isExistingSenderUser() {
        require(giftNetwork.getUserExists(msg.sender), "Sender doesn't have an user account");
        _;
    }

    /**
     * @notice Throws if the card is withdrawable
     */
    modifier isWithdrawable() {
        require(status > CardStatus.FundingStarted, "Card's requierement isn't reached");
        require(dateToBeReleased <= block.timestamp, "Card's released date isn't reached");
        _;
    }

    /**
     * @notice Throws if the card is not opened
     */
    modifier isCardNotOpened() {
        require(status < CardStatus.PartiallyReleased, "Card is opened");
        _;
    }

    /**
     * @notice Throws if the card is not completly released
     */
    modifier isNotCompletlyReleased() {
        require(status < CardStatus.Released, "Card is completly released");
        _;
    }

    /**
     * @notice Throws if the sender is the GiftCard's DAO contract
     */
    modifier isDAOContract() {
        require(msg.sender == address(giftDAO), "Sender isn'nt the DAO contract");
        _;
    }

    /**
     * @notice Emit if Received value.
     */
    receive() external payable {
        participate(msg.sender, msg.value);
    }

    /**
     * @notice Emit if Received value and data.
     */
    fallback() external payable {
        participate(msg.sender, msg.value);
    }

    /**
     * @notice Construct a card
     * @param _giftNetwork Gift's network
     * @param _creator Card's creator address
     * @param _title Card's title
     * @param _description Card's title (optional)
     * @param _requierementToBeReleased Card's requierement value to be released (optional)
     * @param _dateToBeReleased Card's date value to be released (optional)
     * @param _beneficiary Card's beneficiary address (optional)
     */
    constructor(
        address _giftNetwork,
        address _creator, 
        string memory _title,
        string memory _description,
        uint _requierementToBeReleased,
        uint _dateToBeReleased,
        address _beneficiary
    ) payable {
        require(_creator != NULLADDRESS, "Creator's address is mandatory");
        require(bytes(_title).length > 0, "Title is mandatory");

        giftNetwork = IGiftNetwork(_giftNetwork);
        status = CardStatus.FundingStarted;
        creationDate = block.timestamp;
        creator = _creator;
        title = _title;
        description = _description;
        requierementToBeReleased  = _requierementToBeReleased;
        dateToBeReleased  = _dateToBeReleased;
        beneficiary = _beneficiary; 

        if (beneficiary != NULLADDRESS) {
            addRole(beneficiary, Role.Beneficiary);
        }

        addRole(_creator, Role.Creator);
        participate(_creator, msg.value);

        giftDAO = new GiftDAO(address(this));
        cardDAOAddress = address(giftDAO);

        emit ProperlyCreated();
    }

    /**
     * @notice Get if address is the creator
     * @param _address Role's address
     * @return bool
     */
    function getIsCreator(address _address) public view returns(bool) {
        return hasRole(_address, Role.Creator);
    }

    /**
     * @notice Get if address is the creator
     * @return address
     */
    function getCardDAOAddress() public view returns(address) {
        return cardDAOAddress;
    }

    /**
     * @notice Get if address is a participant
     * @param _address Role's address
     * @return bool
     */
    function getIsParticipant(address _address) public view returns(bool) {
        return hasRole(_address, Role.Participant);
    }

    /**
     * @notice Get if address is the beneficiary
     * @param _address Role's address
     * @return bool
     */
    function getIsBeneficiary(address _address) public view returns(bool) {
        return hasRole(_address, Role.Beneficiary);
    }

    /**
     * @notice Get card's status
     * @return uint
     */
    function getStatus() public view returns(uint) {
        return uint(status);
    }

    /**
     * @notice Get card's date to be released
     * @return uint
     */
    function getDateToBeReleased() external view returns(uint) {
        return dateToBeReleased;
    }

    /**
     * @notice Get card's creator
     * @return address
     */
    function getCreator() external view returns(address) {
        return creator;
    }

    /**
     * @notice Get card's beneficiary
     * @return address
     */
    function getBeneficiary() external view returns(address) {
        return beneficiary;
    }

    /**
     * @notice Get participants's count
     * @return uint
     */
    function getParticipantsCount() external view returns(uint) {
        return participants.length;
    }

    /**
     * @notice Get participants's list
     * @return address[]
     */
    function getParticipants() external view returns(address[] memory) {
        return participants;
    }

    /**
     * @notice Get participants's list after a start index
     * @param _startIndex The start index
     * @return address[]
     */
    function getParticipants(uint _startIndex) external view returns(address[] memory) {

        require(_startIndex <= participants.length, "Read index out of bounds");

        address[] memory result = new address[](participants.length-_startIndex);

        for (uint cpt = _startIndex; cpt < participants.length; cpt++) {
            result[cpt] = participants[_startIndex + cpt];
        }

        return result;
    }

    /**
     * @notice Get participants's list with pagination
     * @param _startIndex The start index
     * @param _pageSize The page size
     * @return address[]
     */
    function getParticipants(uint _startIndex, uint _pageSize) external view returns(address[] memory) {
        uint lastIndex = _startIndex + _pageSize;
        require(lastIndex <= participants.length, "Read index out of bounds");

        address[] memory result = new address[](_pageSize);

        for (uint cpt = _startIndex; cpt < lastIndex; cpt++) {
            result[cpt] = participants[_startIndex + cpt];
        }

        return result;
    }

    /**
     * @notice Release all card content
     * @param _to Participant's address
     */
    function releaseAll(address payable _to) external isBeneficiary isNotCompletlyReleased isWithdrawable {
        transfer(_to, address(this).balance);
    }

    /**
     * @notice Release all or part of card content
     * @param _to Participant's address
     * @param _value Participant's address
     */
    function release(address payable _to, uint _value) external isBeneficiary isNotCompletlyReleased isWithdrawable {
        require(_value <= address(this).balance, "Transfered's value exceeds the card's content");
        transfer(_to, _value);
    }

    /**
     * @notice Set status by DAO
     * @param _newStatus New status
     */
    function setStatusByDAO(CardStatus _newStatus) external isDAOContract isCardNotOpened {
        changeStatus(_newStatus);
    }

    /**
     * @notice Set beneficiary by DAO
     * @param _newBeneficiary New beneficiary
     */
    function setBeneficiaryDAO(address _newBeneficiary) external isDAOContract isCardNotOpened {
        changeBeneficiary(_newBeneficiary);
    }

    /**
     * @notice Send a message
     * @param _message Message
     */
    function sendMessage(string calldata _message) isExistingSenderUser external {

        Message memory message = Message(msg.sender, block.timestamp, _message);
        communChat.push(message);

        emit SendedMessage(msg.sender);
    }

    /**
     * @notice Read messages from commun chat
     * @return Message[]
     */
    function readMessage() external view returns(Message[] memory) {
        return communChat;
    }

    /**
     * @notice Read messages from commun chat after a start index
     * @param _startIndex The start index
     * @return Message[]
     */
    function readMessage(uint _startIndex) external view returns(Message[] memory) {

        require(_startIndex <= communChat.length, "Read index out of bounds");

        Message[] memory result = new Message[](participants.length-_startIndex);

        for (uint cpt = _startIndex; cpt < participants.length; cpt++) {
            result[cpt] = communChat[_startIndex + cpt];
        }

        return result;
    }

    /**
     * @notice Read messages from commun chat with pagination
     * @param _startIndex The start index
     * @param _pageSize The page size
     * @return Message[]
     */
    function readMessage(uint _startIndex, uint _pageSize) external view returns(Message[] memory) {
        uint lastIndex = _startIndex + _pageSize;
        require(lastIndex <= participants.length, "Read index out of bounds");

        Message[] memory result = new Message[](_pageSize);

        for (uint cpt = _startIndex; cpt < lastIndex; cpt++) {
            result[cpt] = communChat[_startIndex + cpt];
        }

        return result;
    }

    /**
     * @notice Get if address has role
     * @dev Internal function without access restriction
     * @param _address Role's address
     * @param _role The role
     * @return bool
     */
    function hasRole(address _address, Role _role) internal view returns(bool) {
        return roles[_address][uint(_role)-1];
    }

    /**
     * @notice Change status of this card
     * @dev Internal function without access restriction
     * @param _newStatus New status
     */
    function changeStatus(CardStatus _newStatus) internal {

        if (status != _newStatus) {
            return;
        }

        status = _newStatus;

        emit StatusChanged(uint(_newStatus)-1, uint(_newStatus));
    }

    /**
     * @notice Change beneficiary of this card
     * @param _newBeneficiary New beneficiary
     */
    function changeBeneficiary(address _newBeneficiary) internal {
        require(_newBeneficiary == NULLADDRESS, "A beneficiary address is necessary");

        address oldBeneficiary = beneficiary;
        beneficiary = _newBeneficiary;
        emit BeneficiaryChanged(oldBeneficiary, _newBeneficiary);
    }

    /**
     * @notice Add a role for an adress
     * @dev Internal function without access restriction
     * @param _address Role's address
     * @param _role The role
     */
    function addRole(address _address, Role _role) internal {
        roles[_address][uint(_role)-1] = true;
    }

    /**
     * @notice Participates for this card
     * @dev Internal function without access restriction
     * @param _participant Participant's address
     * @param _value Participation's value
     */
    function participate(address _participant, uint _value) internal isCardNotOpened {
        
        if (requierementToBeReleased <= address(this).balance) {
            changeStatus(CardStatus.FundingReached);
        }
        
        holdings[_participant] += _value;
        addRole(_participant, Role.Participant);
        participants.push(_participant);

        emit Participated(_participant, _value, block.timestamp);
    }

    /**
     * @notice Transfer all or part of card content
     * @dev Internal function without access restriction
     * @param _to Receiver's address
     * @param _value A custom value
     */
    function transfer(address payable _to, uint _value) internal {

        if (_value < address(this).balance) {
            changeStatus(CardStatus.PartiallyReleased);
        }

        (bool sent, ) = _to.call{value: _value}("");
        require(sent, "Failed to send value");

        emit AmountTransfered(_to, _value);

        if (address(this).balance == 0) {
            changeStatus(CardStatus.Released);
        }
    }
}