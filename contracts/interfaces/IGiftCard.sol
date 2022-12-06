// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../enumerations/CardStatus.sol";

/**
 * @title Interface for Gift card
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to implement a gift card 
 */
interface IGiftCard {

    /**
     * @notice Get if address is the creator
     * @param _address Role's address
     * @return bool
     */
    function getIsCreator(address _address) external view returns(bool);

    /**
     * @notice Get if address is the beneficiary
     * @param _address Role's address
     * @return bool
     */
    function getIsBeneficiary(address _address) external view returns(bool);

    /**
     * @notice Get if address is a participant
     * @param _address Role's address
     * @return bool
     */
    function getIsParticipant(address _address) external view returns(bool);

    /**
     * @notice Get card's status
     * @return uint
     */
    function getStatus() external view returns(uint);

    /**
     * @notice Get card's date to be released
     * @return uint
     */
    function getDateToBeReleased() external view returns(uint);

    /**
     * @notice Get card's creator
     * @return address
     */
    function getCreator() external view returns(address);

    /**
     * @notice Get card's beneficiary
     * @return address
     */
    function getBeneficiary() external view returns(address);

    /**
     * @notice Get participants's count
     * @return uint
     */
    function getParticipantsCount() external view returns(uint);

    /**
     * @notice Get participants's list
     * @return address[]
     */
    function getParticipants() external view returns(address[] memory);

    /**
     * @notice Get participants's list after a start index
     * @param _startIndex The Start index
     * @return address[]
     */
    function getParticipants(uint _startIndex) external view returns(address[] memory);

    /**
     * @notice Get participants's list with pagination
     * @param _startIndex The Start index
     * @param _pageSize The page size
     * @return address[]
     */
    function getParticipants(uint _startIndex, uint _pageSize) external view returns(address[] memory);

    /**
     * @notice Release all card content
     * @param _to Participant's address
     */
    function releaseAll(address payable _to) external;

    /**
     * @notice Release all or part of card content
     * @param _to Participant's address
     * @param _value Participant's address
     */
    function release(address payable _to, uint _value) external;

    /**
     * @notice Set status by DAO
     * @param _newStatus New status
     */
    function setStatusByDAO(CardStatus _newStatus) external;

    /**
     * @notice Set beneficiary by DAO
     * @param _newBeneficiary New beneficiary
     */
    function setBeneficiaryDAO(address _newBeneficiary) external;
}