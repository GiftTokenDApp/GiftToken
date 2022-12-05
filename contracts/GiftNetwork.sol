// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./GiftCard.sol";
import "./enumerations/CardStatus.sol";
import "./structures/Message.sol";
import "./structures/User.sol";

/**
 * @title Contract for GiftNetwork
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a gift card social network
 */
contract GiftNetwork is Ownable {

    mapping(address => User) private users;

    mapping(bytes32 => Message[]) private privateChats;

    event Funding(address, uint);

    event SettedUser(address, string);

    event AddedFriend(address, address);

    event SendedMessage(address);

    /**
     * @notice Throws if the string is ok
     * @param _string String
     */
    modifier isStringOK(string calldata _string) {
        require(bytes(_string).length > 0, "String is empty");
        require(bytes(_string)[0] != " ", "String starts with space");
        _;
    }

    /**
     * @notice Throws if the sender has an user account
     */
    modifier isExistingSenderUser() {
        require(getUserExists(msg.sender), "Sender doesn't have an user account");
        _;
    }

    /**
     * @notice Throws if the friend has an user account
     * @param _friend Friend's address
     */
    modifier isExistingFriendUser(address _friend) {
        require(getUserExists(_friend), "Friend doesn't have an user account");
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
     * @notice Get if adress's user exists
     * @param _user User's address
     */
    function getUserExists(address _user) public view returns(bool) {
        return bytes(users[_user].pseudo).length > 0;
    }

    /**
     * @notice Get adress's user
     * @param _user User's address
     * @return uint
     */
    function getUser(address _user) public view returns(User memory) {
        return users[_user];
    }

    /**
     * @notice Set adress's user
     * @param _pseudo Pseudo
     * @param _ipfsLink IPFS Link
     */
    function setUser(string calldata _pseudo, string calldata _ipfsLink) external isStringOK(_pseudo) isStringOK(_ipfsLink) {
        users[msg.sender] = User(_pseudo, _ipfsLink, users[msg.sender].friends);

        emit SettedUser(msg.sender, _pseudo);
    }

    /**
     * @notice Add a friend for sender
     * @param _friend Friend's address
     */
    function addFriend(address _friend) external isExistingSenderUser isExistingFriendUser(_friend) {
        users[msg.sender].friends.push(_friend);

        emit AddedFriend(msg.sender, _friend);
    }

    /**
     * @notice Get friends's address of sender
     * @return address[]
     */
    function getFriends() external view isExistingSenderUser returns(address[] memory) {
        return users[msg.sender].friends;
    }

    /**
     * @notice Get friends's user of sender
     * @return User[]
     */
    function getFriendsAsUsers() external view isExistingSenderUser returns(User[] memory) {
        
        uint count = users[msg.sender].friends.length ;

        if (count == 0) {
            return new User[](0);
        }

        User[] memory results = new User[](count);

        for (uint cpt = 0; cpt < count; cpt++) {
            User memory user = getUser(users[msg.sender].friends[cpt]);
            results[cpt] = user;
        }

        return results;
    }

    // Sends a new message to a given friend
    function sendMessage(address _friend, string calldata _message) isExistingSenderUser isExistingFriendUser(_friend) external {

        bytes32 chatCode = getChatCode(msg.sender, _friend);
        Message memory message = Message(msg.sender, block.timestamp, _message);
        privateChats[chatCode].push(message);

        emit SendedMessage(msg.sender);
    }

    // Returns all the chat messages communicated in a channel
    function readMessage(address _friend) external view returns(Message[] memory) {
        bytes32 chatCode = getChatCode(msg.sender, _friend);
        return privateChats[chatCode];
    }

     /**
     * @notice Get chat code between two friends
     * @dev Internal function without access restriction
     * @param _friend1 First friend's address
     * @param _friend2 Second friend's address
     */
    function getChatCode(address _friend1, address _friend2) internal pure returns(bytes32) {

        if(_friend1 < _friend2) {
            return keccak256(abi.encodePacked(_friend1, _friend2));
        }

        return keccak256(abi.encodePacked(_friend2, _friend1));
    }
}