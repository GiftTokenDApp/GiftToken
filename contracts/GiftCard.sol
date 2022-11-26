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

    uint256 public goalToBeAchieved;

    uint256 public dateToBeAchieved;

    address public creator;

    address public beneficiary;

    address[] public participants;

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
        require(hasRole(msg.sender, Role.Creator), "You're not the creator");
        _;
    }

    /**
     * @notice Throws if called by a participant account
     */
    modifier isParticipant() {
        require(hasRole(msg.sender, Role.Participant), "You're not a participant");
        _;
    }

    /**
     * @notice Throws if called by the beneficiary account
     */
    modifier isBeneficiary() {
        require(hasRole(msg.sender, Role.Beneficiary), "You're not the beneficiary");
        _;
    }

    /**
     * @notice Throws if called by the card is withdrawable
     */
    modifier isWithdrawable() {
        require(goalToBeAchieved <= currentGoal, "Card's goal isn't reached");
        require(dateToBeAchieved <= block.timestamp, "Card's released date isn't reached");
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
     * @param _creator Creator's address
     */
    constructor(address _creator) payable {
        creationDate = block.timestamp;
        creator = _creator;
        addRole(_creator, Role.Creator);
        participate(_creator, msg.value);

        emit ProperlyCreated();
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
     * @notice Add a role for an adress
     * @dev Internal function without access restriction
     * @param _address Role's address
     * @param _role The role
     */
    function addRole(address _address, Role _role) internal {
        roles[_address][uint(_role)-1] = true;
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
     * @notice Participates for this card
     * @dev Internal function without access restriction
     * @param _participant Participant's address
     * @param _value Participation's value
     */
    function participate(address _participant, uint _value) internal isNotReleased {
        currentGoal += _value;
        holdings[_participant] += _value;
        addRole(_participant, Role.Participant);

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