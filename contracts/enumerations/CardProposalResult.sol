// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

enum CardProposalResult {
    Unknown,
    Pending,
    Validated,
    ValidatedWithCreatorWeight,
    Refused,
    RefusedWithCreatorWeight
}