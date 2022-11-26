// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./enumerations/Role.sol";

/**
 * @title Contract for Gift card
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a gift card 
 */
contract GiftCard is Ownable {

    string public title;

    string public description;

    uint256 public creationDate;

    uint256 public releaseDate;

    uint256 public goalToBeReleased ;

    uint256 public dateToBeReleased ;

    address public creator;

    address public beneficiary;

    address[] private participants;

    uint256 public currentGoal;

    mapping(address => bool[3]) roles;

    mapping(address => uint) holdings;

    event ProperlyCreated();

    event Participated(address, uint);

    event Transfered(address, uint);

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
     * @notice Throws if called by the card is withdrawable
     */
    modifier isWithdrawable() {
        require(goalToBeReleased  <= currentGoal, "Card's goal isn't reached");
        require(dateToBeReleased  <= block.timestamp, "Card's released date isn't reached");
        _;
    }

    /**
     * @notice Throws if called by the card is not released
     */
    modifier isNotReleased() {
        require(releaseDate == 0, "Card's is released");
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
     * @param _creator Card's creator address
     * @param _title Card's title (optional)
     * @param _goalToBeReleased Card's goal value to be released (optional)
     * @param _dateToBeReleased Card's date value to be released (optional)
     * @param _beneficiary Card's beneficiary address (optional)
     */
    constructor(address _creator, 
        string memory _title,
        uint _goalToBeReleased ,
        uint _dateToBeReleased ,
        address _beneficiary
    ) payable {
        require(_creator != address(0), "Creator's address is mandatory");

        creationDate = block.timestamp;
        creator = _creator;
        title = _title;
        goalToBeReleased  = _goalToBeReleased;
        dateToBeReleased  = _dateToBeReleased;
        beneficiary = _beneficiary;

        addRole(_creator, Role.Creator);
        participate(_creator, msg.value);

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
     * @notice Add a role for an adress
     * @dev Internal function without access restriction
     * @param _address Role's address
     * @param _role The role
     */
    function addRole(address _address, Role _role) internal {
        roles[_address][uint(_role)-1] = true;
    }

    /**
     * @notice Get participants's count
     * @return uint
     */
    function getParticipantsCount() external view returns(uint) {
        return participants.length;
    }

    /**
     * @notice Get participants's list with pagination
     * @param _startIndex The Start index
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
    function releaseAll(address payable _to) external isNotReleased isWithdrawable {
        transfer(_to, currentGoal);
    }

    /**
     * @notice Release all or part of card content
     * @param _to Participant's address
     * @param _value Participant's address
     */
    function release(address payable _to, uint _value) external isNotReleased isWithdrawable {
        require(_value <= currentGoal, "Transfered's value exceeds the card's content");
        transfer(_to, _value);
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
     * @notice Participates for this card
     * @dev Internal function without access restriction
     * @param _participant Participant's address
     * @param _value Participation's value
     */
    function participate(address _participant, uint _value) internal isNotReleased {
        currentGoal += _value;
        holdings[_participant] += _value;
        addRole(_participant, Role.Participant);
        participants.push(_participant);

        emit Participated(_participant, _value);
    }

    /**
     * @notice Transfer all or part of card content
     * @dev Internal function without access restriction
     * @param _to Receiver's address
     * @param _value A custom value
     */
    function transfer(address payable _to, uint _value) internal {
        releaseDate = block.timestamp;
        (bool sent, ) = _to.call{value: _value}("");
        require(sent, "Failed to send value");

        emit Transfered(_to, _value);
    }
}