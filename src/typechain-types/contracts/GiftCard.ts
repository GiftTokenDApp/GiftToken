/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface GiftCardInterface extends utils.Interface {
  functions: {
    "creationDate()": FunctionFragment;
    "description()": FunctionFragment;
    "getBeneficiary()": FunctionFragment;
    "getCreator()": FunctionFragment;
    "getDateToBeReleased()": FunctionFragment;
    "getIsBeneficiary(address)": FunctionFragment;
    "getIsCreator(address)": FunctionFragment;
    "getIsParticipant(address)": FunctionFragment;
    "getParticipants()": FunctionFragment;
    "getParticipants(uint256)": FunctionFragment;
    "getParticipants(uint256,uint256)": FunctionFragment;
    "getParticipantsCount()": FunctionFragment;
    "getStatus()": FunctionFragment;
    "owner()": FunctionFragment;
    "release(address,uint256)": FunctionFragment;
    "releaseAll(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requierementToBeReleased()": FunctionFragment;
    "title()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "creationDate"
      | "description"
      | "getBeneficiary"
      | "getCreator"
      | "getDateToBeReleased"
      | "getIsBeneficiary"
      | "getIsCreator"
      | "getIsParticipant"
      | "getParticipants()"
      | "getParticipants(uint256)"
      | "getParticipants(uint256,uint256)"
      | "getParticipantsCount"
      | "getStatus"
      | "owner"
      | "release"
      | "releaseAll"
      | "renounceOwnership"
      | "requierementToBeReleased"
      | "title"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "creationDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDateToBeReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIsBeneficiary",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIsCreator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIsParticipant",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipants()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipants(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipants(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipantsCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAll",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requierementToBeReleased",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "title", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "creationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCreator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDateToBeReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIsBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIsCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIsParticipant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipants()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipants(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipants(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipantsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "releaseAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requierementToBeReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "title", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AmountTransfered(address,uint256)": EventFragment;
    "BeneficiaryChanged(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Participated(address,uint256)": EventFragment;
    "ProperlyCreated()": EventFragment;
    "StatusChanged(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmountTransfered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Participated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProperlyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StatusChanged"): EventFragment;
}

export interface AmountTransferedEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type AmountTransferedEvent = TypedEvent<
  [string, BigNumber],
  AmountTransferedEventObject
>;

export type AmountTransferedEventFilter =
  TypedEventFilter<AmountTransferedEvent>;

export interface BeneficiaryChangedEventObject {
  arg0: string;
  arg1: string;
}
export type BeneficiaryChangedEvent = TypedEvent<
  [string, string],
  BeneficiaryChangedEventObject
>;

export type BeneficiaryChangedEventFilter =
  TypedEventFilter<BeneficiaryChangedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ParticipatedEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type ParticipatedEvent = TypedEvent<
  [string, BigNumber],
  ParticipatedEventObject
>;

export type ParticipatedEventFilter = TypedEventFilter<ParticipatedEvent>;

export interface ProperlyCreatedEventObject {}
export type ProperlyCreatedEvent = TypedEvent<[], ProperlyCreatedEventObject>;

export type ProperlyCreatedEventFilter = TypedEventFilter<ProperlyCreatedEvent>;

export interface StatusChangedEventObject {
  arg0: BigNumber;
  arg1: BigNumber;
}
export type StatusChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  StatusChangedEventObject
>;

export type StatusChangedEventFilter = TypedEventFilter<StatusChangedEvent>;

export interface GiftCard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GiftCardInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    creationDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    getBeneficiary(overrides?: CallOverrides): Promise<[string]>;

    getCreator(overrides?: CallOverrides): Promise<[string]>;

    getDateToBeReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    getIsBeneficiary(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getIsCreator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getIsParticipant(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "getParticipants()"(overrides?: CallOverrides): Promise<[string[]]>;

    "getParticipants(uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "getParticipants(uint256,uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getParticipantsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStatus(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requierementToBeReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    title(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  creationDate(overrides?: CallOverrides): Promise<BigNumber>;

  description(overrides?: CallOverrides): Promise<string>;

  getBeneficiary(overrides?: CallOverrides): Promise<string>;

  getCreator(overrides?: CallOverrides): Promise<string>;

  getDateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

  getIsBeneficiary(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getIsCreator(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getIsParticipant(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "getParticipants()"(overrides?: CallOverrides): Promise<string[]>;

  "getParticipants(uint256)"(
    _startIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getParticipants(uint256,uint256)"(
    _startIndex: PromiseOrValue<BigNumberish>,
    _pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getStatus(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  release(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseAll(
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requierementToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

  title(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<string>;

    getBeneficiary(overrides?: CallOverrides): Promise<string>;

    getCreator(overrides?: CallOverrides): Promise<string>;

    getDateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    getIsBeneficiary(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getIsCreator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getIsParticipant(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "getParticipants()"(overrides?: CallOverrides): Promise<string[]>;

    "getParticipants(uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getParticipants(uint256,uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requierementToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AmountTransfered(address,uint256)"(
      arg0?: null,
      arg1?: null
    ): AmountTransferedEventFilter;
    AmountTransfered(arg0?: null, arg1?: null): AmountTransferedEventFilter;

    "BeneficiaryChanged(address,address)"(
      arg0?: null,
      arg1?: null
    ): BeneficiaryChangedEventFilter;
    BeneficiaryChanged(arg0?: null, arg1?: null): BeneficiaryChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Participated(address,uint256)"(
      arg0?: null,
      arg1?: null
    ): ParticipatedEventFilter;
    Participated(arg0?: null, arg1?: null): ParticipatedEventFilter;

    "ProperlyCreated()"(): ProperlyCreatedEventFilter;
    ProperlyCreated(): ProperlyCreatedEventFilter;

    "StatusChanged(uint256,uint256)"(
      arg0?: null,
      arg1?: null
    ): StatusChangedEventFilter;
    StatusChanged(arg0?: null, arg1?: null): StatusChangedEventFilter;
  };

  estimateGas: {
    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    getBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    getCreator(overrides?: CallOverrides): Promise<BigNumber>;

    getDateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    getIsBeneficiary(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIsCreator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIsParticipant(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParticipants()"(overrides?: CallOverrides): Promise<BigNumber>;

    "getParticipants(uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParticipants(uint256,uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requierementToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    creationDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBeneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDateToBeReleased(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIsBeneficiary(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIsCreator(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIsParticipant(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParticipants()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParticipants(uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParticipants(uint256,uint256)"(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParticipantsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requierementToBeReleased(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    title(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
