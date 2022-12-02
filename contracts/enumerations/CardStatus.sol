// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

enum CardStatus {
    Unknown,
    FundingStarted,
    FundingReached,
    OpeningForced,
    PartiallyReleased,
    Released
}