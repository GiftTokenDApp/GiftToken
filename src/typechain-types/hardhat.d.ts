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
      name: "GiftCardDAO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftCardDAO__factory>;
    getContractFactory(
      name: "GiftFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftFactory__factory>;
    getContractFactory(
      name: "GiftNetwork",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GiftNetwork__factory>;

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
      name: "GiftCardDAO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GiftCardDAO>;
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
