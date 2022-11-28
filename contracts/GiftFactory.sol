// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./GiftCard.sol";

/**
 * @title Contract for GiftFactory
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a gift card factory plateform
 */
contract GiftFactory is Ownable {

    mapping(address => address[]) public links; 

    event Funding(address, uint);

    event CardCreated(address, uint);

    /**
     * @notice Emit if Received value.
     */
    receive() external payable {
        emit Funding(msg.sender, msg.value);
    }

    /**
     * @notice Emit if Received value and data.
     */
    fallback() external payable {
        emit Funding(msg.sender, msg.value);
    }

    /**
     * @notice Construct a card factory
     */
    constructor() { }

    /**
     * @notice Create a card
     * @param _title Card's title
     * @param _description Card's title (optional)
     * @param _goalToBeReleased Card's goal value to be released (optional)
     * @param _dateToBeReleased Card's date value to be released (optional)
     * @param _beneficiary Card's beneficiary address (optional)
     */
    function createCard(
        string memory _title,
        string memory _description,
        uint _goalToBeReleased,
        uint _dateToBeReleased,
        address _beneficiary
    ) payable external {
        require(msg.value > 10 ** 15, "Insufficient found");

        GiftCard card = (new GiftCard){value: msg.value}(msg.sender, _title, _description, _goalToBeReleased, _dateToBeReleased, _beneficiary);
        address cardAddress = address(card);
        links[msg.sender].push(cardAddress);

        emit CardCreated(cardAddress, msg.value);
    }
}