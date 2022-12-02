// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

enum CardProposalResult {
    Unknown,
    Pending,
    Approved,
    ApprovedWithCreatorWeight,
    Refused,
    RefusedWithCreatorWeight,
    Equality
}