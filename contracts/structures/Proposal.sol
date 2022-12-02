// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../enumerations/CardProposalType.sol";
import "../enumerations/CardProposalResult.sol";

struct Proposal {
    uint id;
    address initiator;
    uint creationDate;
    CardProposalType proposalType;
    string description;
    CardProposalResult proposalResult;
    uint closedDate;
}