// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../enumerations/CardStatus.sol";
import "../structures/Proposal.sol";

/**
 * @title Interface for Gift DAO
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to implement a gift DAO 
 */
interface IGiftDAO {

    /**
     * @notice Create a proposal to outpass requierements
     * @param _description Role's address
     */
    function createOutpassedRequierementsProposal(string memory _description) external;

    /**
     * @notice Create a proposal to declare a beneficiary
     * @param _description Role's address
     */
    function createDeclaredBeneficiaryProposal(address _beneficiary, string memory _description) external;

    /**
     * @notice Create a proposal to change a beneficiary
     * @param _description Role's address
     */
    function changeBeneficiary(address _beneficiary, string memory _description) external;

    /**
     * @notice Get last proposal's list
     * @return Proposal[]
     */
    function getProposals() external view returns(Proposal[] memory);

    /**
     * @notice Get voter's vote for current proposal
     * @param _voter Voter's address
     * @return Proposal[]
     */
    function getVote(address _voter) external view returns(uint);

    /**
     * @notice Determinate proposal result
     */
    function determinateProposalResult() external;
}