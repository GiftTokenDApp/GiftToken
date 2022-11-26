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
    "beneficiary()": FunctionFragment;
    "creationDate()": FunctionFragment;
    "creator()": FunctionFragment;
    "currentGoal()": FunctionFragment;
    "dateToBeReleased()": FunctionFragment;
    "description()": FunctionFragment;
    "getIsBeneficiary(address)": FunctionFragment;
    "getIsCreator(address)": FunctionFragment;
    "getIsParticipant(address)": FunctionFragment;
    "getParticipants(uint256,uint256)": FunctionFragment;
    "getParticipantsCount()": FunctionFragment;
    "goalToBeReleased()": FunctionFragment;
    "owner()": FunctionFragment;
    "release(address,uint256)": FunctionFragment;
    "releaseAll(address)": FunctionFragment;
    "releaseDate()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "title()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "beneficiary"
      | "creationDate"
      | "creator"
      | "currentGoal"
      | "dateToBeReleased"
      | "description"
      | "getIsBeneficiary"
      | "getIsCreator"
      | "getIsParticipant"
      | "getParticipants"
      | "getParticipantsCount"
      | "goalToBeReleased"
      | "owner"
      | "release"
      | "releaseAll"
      | "releaseDate"
      | "renounceOwnership"
      | "title"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creationDate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentGoal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dateToBeReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
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
    functionFragment: "getParticipants",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParticipantsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "goalToBeReleased",
    values?: undefined
  ): string;
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
    functionFragment: "releaseDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "title", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentGoal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dateToBeReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
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
    functionFragment: "getParticipants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParticipantsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "goalToBeReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "releaseAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "title", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Participated(address,uint256)": EventFragment;
    "ProperlyCreated()": EventFragment;
    "Transfered(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Participated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProperlyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfered"): EventFragment;
}

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

export interface TransferedEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type TransferedEvent = TypedEvent<
  [string, BigNumber],
  TransferedEventObject
>;

export type TransferedEventFilter = TypedEventFilter<TransferedEvent>;

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
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    creationDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    currentGoal(overrides?: CallOverrides): Promise<[BigNumber]>;

    dateToBeReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    description(overrides?: CallOverrides): Promise<[string]>;

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

    getParticipants(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getParticipantsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    goalToBeReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

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

    releaseDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    title(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  creationDate(overrides?: CallOverrides): Promise<BigNumber>;

  creator(overrides?: CallOverrides): Promise<string>;

  currentGoal(overrides?: CallOverrides): Promise<BigNumber>;

  dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

  description(overrides?: CallOverrides): Promise<string>;

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

  getParticipants(
    _startIndex: PromiseOrValue<BigNumberish>,
    _pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

  goalToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

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

  releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  title(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<string>;

    currentGoal(overrides?: CallOverrides): Promise<BigNumber>;

    dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<string>;

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

    getParticipants(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

    goalToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

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

    releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    title(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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

    "Transfered(address,uint256)"(
      arg0?: null,
      arg1?: null
    ): TransferedEventFilter;
    Transfered(arg0?: null, arg1?: null): TransferedEventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    currentGoal(overrides?: CallOverrides): Promise<BigNumber>;

    dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

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

    getParticipants(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParticipantsCount(overrides?: CallOverrides): Promise<BigNumber>;

    goalToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

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

    releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creationDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentGoal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dateToBeReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    getParticipants(
      _startIndex: PromiseOrValue<BigNumberish>,
      _pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParticipantsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    goalToBeReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    releaseDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    title(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
