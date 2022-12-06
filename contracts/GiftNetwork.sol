// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IGiftNetwork.sol";

/**
 * @title Contract for GiftNetwork
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to create a gift card social network
 */
contract GiftNetwork is Ownable, IGiftNetwork {

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
     * @notice Throws if the address has an user account
     * @param _address Address
     */
    modifier isExistingUser(address _address) {
        require(getUserExists(_address), "Address doesn't have an user account");
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
    function addFriend(address _friend) external isExistingSenderUser isExistingUser(_friend) {
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

    /**
     * @notice Send a message
     * @param _to Destinataire's address
     * @param _message Message
     */
    function sendMessage(address _to, string calldata _message) isExistingSenderUser isExistingUser(_to) external {

        bytes32 chatCode = getChatCode(msg.sender, _to);
        Message memory message = Message(msg.sender, block.timestamp, _message);
        privateChats[chatCode].push(message);

        emit SendedMessage(msg.sender);
    }

    /**
     * @notice Read messages from an another user
     * @param _from Sender's address
     * @return Message[]
     */
    function readMessage(address _from) external view returns(Message[] memory) {
        bytes32 chatCode = getChatCode(msg.sender, _from);
        return privateChats[chatCode];
    }

     /**
     * @notice Get chat code between two users
     * @dev Internal function without access restriction
     * @param _user1 First user's address
     * @param _user2 Second user's address
     */
    function getChatCode(address _user1, address _user2) internal pure returns(bytes32) {

        if(_user1 < _user2) {
            return keccak256(abi.encodePacked(_user1, _user2));
        }

        return keccak256(abi.encodePacked(_user2, _user1));
    }
}