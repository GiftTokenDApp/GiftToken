/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "GiftCard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftCard__factory>;
    getContractFactory(
      name: "GiftDAO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftDAO__factory>;
    getContractFactory(
      name: "GiftFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftFactory__factory>;
    getContractFactory(
      name: "GiftNetwork",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftNetwork__factory>;
    getContractFactory(
      name: "IGiftCard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGiftCard__factory>;
    getContractFactory(
      name: "IGiftDAO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGiftDAO__factory>;
    getContractFactory(
      name: "IGiftNetwork",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGiftNetwork__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "GiftCard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GiftCard>;
    getContractAt(
      name: "GiftDAO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GiftDAO>;
    getContractAt(
      name: "GiftFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GiftFactory>;
    getContractAt(
      name: "GiftNetwork",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GiftNetwork>;
    getContractAt(
      name: "IGiftCard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGiftCard>;
    getContractAt(
      name: "IGiftDAO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGiftDAO>;
    getContractAt(
      name: "IGiftNetwork",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGiftNetwork>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
