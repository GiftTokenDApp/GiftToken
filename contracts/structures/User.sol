// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

struct User {
    string pseudo;
    string ipfsLink;

    address[] friends;
}