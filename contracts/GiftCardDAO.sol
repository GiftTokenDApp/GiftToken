// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./GiftCard.sol";
import "./enumerations/CardProposalType.sol";
import "./enumerations/CardProposalResult.sol";
import "./structures/Proposal.sol";

/**
 * @title Contract for a Gift card with DAO
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a base gift card DAO
 */
contract GiftCardDAO is GiftCard {

    Proposal public currentProposal;

    address public proposalBeneficiary;

    Proposal[10] public lastProposal;

    event BeneficiaryChanged(address, address); // TODO à utiliser

    event RequirementsOutpassed(); // TODO à utiliser

    event ParticipantVoted(uint, address, bool); // TODO à utiliser

    event PropositionOpened(uint, address);

    event PropositionClosed(uint, address); // TODO à utiliser

    /**
     * @notice Throws if the card is not completly released
     */
    modifier isOpenabledProposal() {
        require(currentProposal.proposalResult != CardProposalResult.Pending, "A proposal is already in progress");
        _;
    }

    /**
     * @notice Construct a card
     * @param _creator Card's creator address
     * @param _title Card's title
     * @param _description Card's title (optional)
     * @param _requierementToBeReleased Card's requierement value to be released (optional)
     * @param _dateToBeReleased Card's date value to be released (optional)
     * @param _beneficiary Card's beneficiary address (optional)
     */
    constructor(
        address _creator, 
        string memory _title,
        string memory _description,
        uint _requierementToBeReleased,
        uint _dateToBeReleased,
        address _beneficiary
    ) GiftCard(_creator, _title, _description, _requierementToBeReleased, _dateToBeReleased, _beneficiary) payable {}

    /**
     * @notice Create a proposal to outpass requierements
     * @param _description Role's address
     */
    function createOutpassedRequierementsProposal(string memory _description) external isNotOpened() isOpenabledProposal() {
        require(status < CardStatus.FundingReached || dateToBeReleased > block.timestamp, "Card's requierements are already reached");

        proposalBeneficiary = NULLADDRESS;
        addProposal(CardProposalType.AskOutpassedRequierements, _description);
    }

    /**
     * @notice Create a proposal to declare a beneficiary
     * @param _description Role's address
     */
    function createDeclaredBeneficiaryProposal(address _beneficiary, string memory _description) external isNotOpened() isOpenabledProposal() {
        require(beneficiary == NULLADDRESS, "A beneficiary already exists");

        proposalBeneficiary = _beneficiary;
        addProposal(CardProposalType.DeclaredBeneficiary, _description);
    }

    /**
     * @notice Create a proposal to change a beneficiary
     * @param _description Role's address
     */
    function changeBeneficiary(address _beneficiary, string memory _description) external isNotOpened() isOpenabledProposal() {
        require(beneficiary != NULLADDRESS, "No beneficiary exists");

        proposalBeneficiary = _beneficiary;
        addProposal(CardProposalType.ChangedBeneficiary, _description);
    }

    /**
     * @notice Add a proposal
     * @dev Internal function without access restriction
     * @param _proposalType Proposal's type
     * @param _description The description
     */
    function addProposal(CardProposalType _proposalType, string memory _description) internal {
        currentProposal = Proposal(currentProposal.id++, msg.sender, block.timestamp, _proposalType, _description, CardProposalResult.Pending, 0);

        emit PropositionOpened(currentProposal.id, msg.sender);
    }
}