// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./enumerations/CardStatus.sol";
import "./interfaces/IGiftCard.sol";
import "./interfaces/IGiftNetwork.sol";
import "./GiftCard.sol";
import "./GiftNetwork.sol";

/**
 * @title Contract for GiftFactory
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a gift card factory plateform
 */
contract GiftFactory is Ownable {

    IGiftNetwork private giftNetwork;

    mapping(address => bool) private cardsExists;

    mapping(address => address[]) private links; 

    event Funding(address, uint);

    event CardCreated(address, uint, uint);

    /**
     * @notice Throws if the card exists
     * @param _card Card's address
     */
    modifier isExistingCard(address _card) {
        require(cardsExists[_card], "Card not exists");
        _;
    }

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
    constructor() { 
        giftNetwork = new GiftNetwork();
    }

    /**
     * @notice Create a card
     * @param _title Card's title
     * @param _description Card's title (optional)
     * @param _fundingToBeReleased Card's funding value to be released (optional)
     * @param _dateToBeReleased Card's date value to be released (optional)
     * @param _beneficiary Card's beneficiary address (optional)
     */
    function createCard(
        string memory _title,
        string memory _description,
        uint _fundingToBeReleased,
        uint _dateToBeReleased,
        address _beneficiary
    ) payable external {
        require(msg.value >= 10 ** 15, "Insufficient found");

        GiftCard card = (new GiftCard){value: msg.value}(address(giftNetwork), msg.sender, _title, _description, _fundingToBeReleased, _dateToBeReleased, _beneficiary);
        address cardAddress = address(card);
        cardsExists[cardAddress] = true;
        links[msg.sender].push(cardAddress);

        emit CardCreated(cardAddress, msg.value, block.timestamp);
    }

    /**
     * @notice Get for an address its links's count
     * @return uint
     */
    function getLinksCount(address _visitor) external view returns(uint) {
        return links[_visitor].length;
    }

    /**
     * @notice Get for an address its links's list
     * @return address[]
     */
    function getLinks(address _visitor) external view returns(address[] memory) {
        return links[_visitor];
    }

    /**
     * @notice Get for an address its links's list after a start index
     * @param _startIndex The Start index
     * @return address[]
     */
    function getLinks(address _visitor, uint _startIndex) external view returns(address[] memory) {

        require(_startIndex <= links[_visitor].length, "Read index out of bounds");

        address[] memory result = new address[](links[_visitor].length-_startIndex);

        for (uint cpt = _startIndex; cpt < links[_visitor].length; cpt++) {
            result[cpt] = links[_visitor][_startIndex + cpt];
        }

        return result;
    }

    /**
     * @notice Get for an address its links's list with pagination
     * @param _startIndex The Start index
     * @param _pageSize The page size
     * @return address[]
     */
    function getLinks(address _visitor, uint _startIndex, uint _pageSize) external view returns(address[] memory) {
        uint lastIndex = _startIndex + _pageSize;
        require(lastIndex <= links[_visitor].length, "Read index out of bounds");

        address[] memory result = new address[](_pageSize);

        for (uint cpt = _startIndex; cpt < lastIndex; cpt++) {
            result[cpt] = links[_visitor][_startIndex + cpt];
        }

        return result;
    }
}