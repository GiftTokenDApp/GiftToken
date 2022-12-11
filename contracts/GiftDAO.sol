// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./enumerations/CardProposalType.sol";
import "./enumerations/CardProposalResult.sol";
import "./enumerations/VoteResult.sol";
import "./interfaces/IGiftCard.sol";
import "./interfaces/IGiftDAO.sol";

/**
 * @title Contract for a Gift card with DAO
 * @author Fabien D. & Etienne B.
 * @notice You can use this contract to create a base gift card DAO
 */
contract GiftDAO is Ownable, IGiftDAO {

    address internal constant NULLADDRESS = address(0);

    IGiftCard private giftCard;

    Proposal public currentProposal;

    address public proposalBeneficiary;

    Proposal[10] private lastProposals;

    mapping(address => mapping(uint => VoteResult)) votes;

    event Funding(address, uint);

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
     * @notice Throws if a given address param is address zero
     */
    modifier isAddressParamAddress(address _beneficiary) {
        require(_beneficiary != NULLADDRESS, "A beneficiary address is necessary");
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
     * @notice Throws if the card is not opened
     */
    modifier isCardNotOpened() {
        require(giftCard.getStatus() < uint(CardStatus.PartiallyReleased), "Card is opened");
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
     * @notice Construct a gift DAO
     * @param _giftCard GiftCard's address
     */
    constructor(address _giftCard) 
    {
        giftCard = IGiftCard(_giftCard);
    }

    /**
     * @notice Create a proposal to outpass requierements
     * @param _description Role's address
     */
    function createOutpassedRequierementsProposal(string memory _description) external isCardNotOpened() isOpenableProposal() {
        require(giftCard.getStatus() < uint(CardStatus.FundingReached) || giftCard.getDateToBeReleased() > block.timestamp, "Card's requierements are already reached");

        proposalBeneficiary = NULLADDRESS;
        addProposal(CardProposalType.AskOutpassedRequierements, _description);
    }

    /**
     * @notice Create a proposal to declare a beneficiary
     * @param _description Role's address
     */
    function createDeclaredBeneficiaryProposal(address _beneficiary, string memory _description) external isCardNotOpened() isOpenableProposal() isAddressParamAddress(_beneficiary) {
        require(giftCard.getBeneficiary() == NULLADDRESS, "This fonction can only be called when no beneficiary is choosen");

        proposalBeneficiary = _beneficiary;
        addProposal(CardProposalType.DeclaredBeneficiary, _description);
    }

    /**
     * @notice Create a proposal to change a beneficiary
     * @param _description Role's address
     */
    function changeBeneficiary(address _beneficiary, string memory _description) external isCardNotOpened() isOpenableProposal() isAddressParamAddress(_beneficiary) {
        require(giftCard.getBeneficiary() != NULLADDRESS, "Need a previous choosen beneficiary to call this fonction");

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
            Proposal memory proposal = lastProposals[cpt];
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
            VoteResult creatorVote = VoteResult(getVote(giftCard.getCreator()));

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
            giftCard.setStatusByDAO(CardStatus.RequirementsOutpassed);
        }
        else {
            emit BeneficiaryChanged(giftCard.getBeneficiary(), proposalBeneficiary);
            giftCard.setBeneficiaryDAO(proposalBeneficiary);
        }
    }
}