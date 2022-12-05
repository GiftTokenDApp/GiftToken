// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./GiftCard.sol";
import "./enumerations/CardProposalType.sol";
import "./enumerations/CardProposalResult.sol";
import "./enumerations/VoteResult.sol";
import "./structures/Proposal.sol";

/**
 * @title Contract for a Gift card with DAO
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract for create a base gift card DAO
 */
contract GiftCardDAO is GiftCard {

    Proposal public currentProposal;

    address public proposalBeneficiary;

    Proposal[10] public lastProposals;

    mapping(address => mapping(uint => VoteResult)) votes;

    event BeneficiaryChanged(address, address);

    event RequirementsOutpassed();

    event ParticipantVoted(uint, address, bool);

    event PropositionOpened(uint, address);

    event PropositionClosed(uint, uint);

    /**
     * @notice Throws if a new proposal can't be opened
     */
    modifier isOpenableProposal() {
        require(currentProposal.proposalResult != CardProposalResult.Pending, "A proposal is already in progress");
        _;
    }

    /**
     * @notice Throws if voting isn't opened
     */
    modifier isVoteOpenedProposal() {
        require(currentProposal.proposalResult == CardProposalResult.Pending, "Current proposal status not allows voting");
        _;
    }

    /**
     * @notice Throws if the current proposal is closable
     */
    modifier isClosableProposal() {
        require(currentProposal.closureDate > block.timestamp, "Current proposal can't be closed");
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
    function createOutpassedRequierementsProposal(string memory _description) external isCardNotOpened() isOpenableProposal() {
        require(status < CardStatus.FundingReached || dateToBeReleased > block.timestamp, "Card's requierements are already reached");

        proposalBeneficiary = NULLADDRESS;
        addProposal(CardProposalType.AskOutpassedRequierements, _description);
    }

    /**
     * @notice Create a proposal to declare a beneficiary
     * @param _description Role's address
     */
    function createDeclaredBeneficiaryProposal(address _beneficiary, string memory _description) external isCardNotOpened() isOpenableProposal() {
        require(beneficiary == NULLADDRESS, "A beneficiary already exists");

        proposalBeneficiary = _beneficiary;
        addProposal(CardProposalType.DeclaredBeneficiary, _description);
    }

    /**
     * @notice Create a proposal to change a beneficiary
     * @param _description Role's address
     */
    function changeBeneficiary(address _beneficiary, string memory _description) external isCardNotOpened() isOpenableProposal() {
        require(beneficiary != NULLADDRESS, "No beneficiary exists");

        proposalBeneficiary = _beneficiary;
        addProposal(CardProposalType.ChangedBeneficiary, _description);
    }

    /**
     * @notice Get last proposal's list
     * @return Proposal[]
     */
    function getProposals() external view returns(Proposal[] memory) {

        Proposal[] memory results = new Proposal[](10);
        uint8 cpt = 0;

        while (cpt < lastProposals.length-1 && lastProposals[cpt].id > 0) {
            Proposal storage proposal = lastProposals[cpt];
            results[cpt] = proposal;
            cpt++;
        }

        return results;
    }

    /**
     * @notice Get voter's vote for current proposal
     * @param _voter Voter's address
     * @return Proposal[]
     */
    function getVote(address _voter) public view returns(uint) {
        return uint(votes[_voter][currentProposal.id]);
    }

    /**
     * @notice Vote for current proposal
     * @param _isApproved Vote
     */
    function vote(bool _isApproved) external isVoteOpenedProposal {
        require(getVote(msg.sender) == uint(VoteResult.Unknown), "You already have vote");

        if (_isApproved) {
            currentProposal.approvedCount++;
        }
        else {
            currentProposal.refusedCount++;
        }

        emit ParticipantVoted(currentProposal.id, msg.sender, _isApproved);
    }

    /**
     * @notice Determinate proposal result
     */
    function determinateProposalResult() external isClosableProposal {

        currentProposal.closedDate = block.timestamp;

        if (currentProposal.approvedCount > currentProposal.refusedCount) {
            currentProposal.proposalResult == CardProposalResult.Approved;
        }
        else if (currentProposal.approvedCount < currentProposal.refusedCount) {
            currentProposal.proposalResult == CardProposalResult.Refused;
        }
        else {
            VoteResult creatorVote = VoteResult(getVote(creator));

            if (creatorVote == VoteResult.Approved) {
                currentProposal.proposalResult == CardProposalResult.ApprovedWithCreatorWeight;
            }
            else if (creatorVote == VoteResult.Approved) {
                currentProposal.proposalResult == CardProposalResult.RefusedWithCreatorWeight;
            }
            else {
                currentProposal.proposalResult == CardProposalResult.Equality; 
            }
        }

        if (currentProposal.proposalResult == CardProposalResult.Approved || currentProposal.proposalResult == CardProposalResult.ApprovedWithCreatorWeight) {
            manageProposalAccepted();
        }

        emit PropositionClosed(currentProposal.id, uint(currentProposal.proposalResult));
    }

    /**
     * @notice Add a proposal
     * @dev Internal function without access restriction
     * @param _proposalType Proposal's type
     * @param _description The description
     */
    function addProposal(CardProposalType _proposalType, string memory _description) internal {

        uint8 cpt = 0;

        while (cpt < lastProposals.length-1 && lastProposals[cpt].id > 0) {
            lastProposals[cpt+1] = lastProposals[cpt];
            cpt++;
        }

        lastProposals[0] = currentProposal;
        currentProposal = Proposal(currentProposal.id++, msg.sender, block.timestamp, block.timestamp + 2 weeks, _proposalType, _description, CardProposalResult.Pending, 0, 0, 0);

        emit PropositionOpened(currentProposal.id, msg.sender);
    }

    /**
     * @notice Manage proposal accepted
     * @dev Internal function without access restriction
     */
    function manageProposalAccepted() internal {
            
        if (currentProposal.proposalType == CardProposalType.AskOutpassedRequierements) {
            emit RequirementsOutpassed();
            status = CardStatus.RequirementsOutpassed;
        }
        else {
            emit BeneficiaryChanged(beneficiary, proposalBeneficiary);
            beneficiary = proposalBeneficiary;
        }
    }
}