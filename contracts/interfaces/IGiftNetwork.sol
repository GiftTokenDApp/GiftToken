// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../structures/Message.sol";
import "../structures/User.sol";

/**
 * @title Interface for Gift etwork
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to implement a gift Network 
 */
interface IGiftNetwork {

    /**
     * @notice Get if adress's user exists
     * @param _user User's address
     */
    function getUserExists(address _user) external view returns(bool);

    /**
     * @notice Get adress's user
     * @param _user User's address
     * @return uint
     */
    function getUser(address _user) external view returns(User memory);

    /**
     * @notice Set adress's user
     * @param _pseudo Pseudo
     * @param _ipfsLink IPFS Link
     */
    function setUser(string calldata _pseudo, string calldata _ipfsLink) external;

    /**
     * @notice Add a friend for sender
     * @param _friend Friend's address
     */
    function addFriend(address _friend) external;

    /**
     * @notice Get friends's address of sender
     * @return address[]
     */
    function getFriends() external view returns(address[] memory);

    /**
     * @notice Get friends's user of sender
     * @return User[]
     */
    function getFriendsAsUsers() external view returns(User[] memory);

    /**
     * @notice Send a message
     * @param _to Destinataire's address
     * @param _message Message
     */
    function sendMessage(address _to, string calldata _message) external;

    /**
     * @notice Read messages from an another user
     * @param _from Sender's address
     * @return Message[]
     */
    function readMessage(address _from) external view returns(Message[] memory);
}