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

export type ProposalStruct = {
  id: PromiseOrValue<BigNumberish>;
  initiator: PromiseOrValue<string>;
  creationDate: PromiseOrValue<BigNumberish>;
  closureDate: PromiseOrValue<BigNumberish>;
  proposalType: PromiseOrValue<BigNumberish>;
  description: PromiseOrValue<string>;
  proposalResult: PromiseOrValue<BigNumberish>;
  approvedCount: PromiseOrValue<BigNumberish>;
  refusedCount: PromiseOrValue<BigNumberish>;
  closedDate: PromiseOrValue<BigNumberish>;
};

export type ProposalStructOutput = [
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  number,
  string,
  number,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  id: BigNumber;
  initiator: string;
  creationDate: BigNumber;
  closureDate: BigNumber;
  proposalType: number;
  description: string;
  proposalResult: number;
  approvedCount: BigNumber;
  refusedCount: BigNumber;
  closedDate: BigNumber;
};

export interface GiftCardDAOInterface extends utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "changeBeneficiary(address,string)": FunctionFragment;
    "createDeclaredBeneficiaryProposal(address,string)": FunctionFragment;
    "createOutpassedRequierementsProposal(string)": FunctionFragment;
    "creationDate()": FunctionFragment;
    "creator()": FunctionFragment;
    "currentProposal()": FunctionFragment;
    "dateToBeReleased()": FunctionFragment;
    "description()": FunctionFragment;
    "determinateProposalResult()": FunctionFragment;
    "getIsBeneficiary(address)": FunctionFragment;
    "getIsCreator(address)": FunctionFragment;
    "getIsParticipant(address)": FunctionFragment;
    "getParticipants()": FunctionFragment;
    "getParticipants(uint256)": FunctionFragment;
    "getParticipants(uint256,uint256)": FunctionFragment;
    "getParticipantsCount()": FunctionFragment;
    "getProposals()": FunctionFragment;
    "getStatus()": FunctionFragment;
    "getVote(address)": FunctionFragment;
    "lastProposals(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposalBeneficiary()": FunctionFragment;
    "release(address,uint256)": FunctionFragment;
    "releaseAll(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requierementToBeReleased()": FunctionFragment;
    "title()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vote(bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "beneficiary"
      | "changeBeneficiary"
      | "createDeclaredBeneficiaryProposal"
      | "createOutpassedRequierementsProposal"
      | "creationDate"
      | "creator"
      | "currentProposal"
      | "dateToBeReleased"
      | "description"
      | "determinateProposalResult"
      | "getIsBeneficiary"
      | "getIsCreator"
      | "getIsParticipant"
      | "getParticipants()"
      | "getParticipants(uint256)"
      | "getParticipants(uint256,uint256)"
      | "getParticipantsCount"
      | "getProposals"
      | "getStatus"
      | "getVote"
      | "lastProposals"
      | "owner"
      | "proposalBeneficiary"
      | "release"
      | "releaseAll"
      | "renounceOwnership"
      | "requierementToBeReleased"
      | "title"
      | "transferOwnership"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeBeneficiary",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createDeclaredBeneficiaryProposal",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createOutpassedRequierementsProposal",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "creationDate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentProposal",
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
    functionFragment: "determinateProposalResult",
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
  encodeFunctionData(
    functionFragment: "getProposals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVote",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lastProposals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalBeneficiary",
    values?: undefined
  ): string;
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
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDeclaredBeneficiaryProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOutpassedRequierementsProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentProposal",
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
    functionFragment: "determinateProposalResult",
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
  decodeFunctionResult(
    functionFragment: "getProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalBeneficiary",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "AmountTransfered(address,uint256)": EventFragment;
    "BeneficiaryChanged(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ParticipantVoted(uint256,address,bool)": EventFragment;
    "Participated(address,uint256)": EventFragment;
    "ProperlyCreated()": EventFragment;
    "PropositionClosed(uint256,uint256)": EventFragment;
    "PropositionOpened(uint256,address)": EventFragment;
    "RequirementsOutpassed()": EventFragment;
    "StatusChanged(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmountTransfered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParticipantVoted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Participated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProperlyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PropositionClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PropositionOpened"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequirementsOutpassed"): EventFragment;
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

export interface ParticipantVotedEventObject {
  arg0: BigNumber;
  arg1: string;
  arg2: boolean;
}
export type ParticipantVotedEvent = TypedEvent<
  [BigNumber, string, boolean],
  ParticipantVotedEventObject
>;

export type ParticipantVotedEventFilter =
  TypedEventFilter<ParticipantVotedEvent>;

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

export interface PropositionClosedEventObject {
  arg0: BigNumber;
  arg1: BigNumber;
}
export type PropositionClosedEvent = TypedEvent<
  [BigNumber, BigNumber],
  PropositionClosedEventObject
>;

export type PropositionClosedEventFilter =
  TypedEventFilter<PropositionClosedEvent>;

export interface PropositionOpenedEventObject {
  arg0: BigNumber;
  arg1: string;
}
export type PropositionOpenedEvent = TypedEvent<
  [BigNumber, string],
  PropositionOpenedEventObject
>;

export type PropositionOpenedEventFilter =
  TypedEventFilter<PropositionOpenedEvent>;

export interface RequirementsOutpassedEventObject {}
export type RequirementsOutpassedEvent = TypedEvent<
  [],
  RequirementsOutpassedEventObject
>;

export type RequirementsOutpassedEventFilter =
  TypedEventFilter<RequirementsOutpassedEvent>;

export interface StatusChangedEventObject {
  arg0: BigNumber;
  arg1: BigNumber;
}
export type StatusChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  StatusChangedEventObject
>;

export type StatusChangedEventFilter = TypedEventFilter<StatusChangedEvent>;

export interface GiftCardDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GiftCardDAOInterface;

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

    changeBeneficiary(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createDeclaredBeneficiaryProposal(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOutpassedRequierementsProposal(
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    creationDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    currentProposal(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        initiator: string;
        creationDate: BigNumber;
        closureDate: BigNumber;
        proposalType: number;
        description: string;
        proposalResult: number;
        approvedCount: BigNumber;
        refusedCount: BigNumber;
        closedDate: BigNumber;
      }
    >;

    dateToBeReleased(overrides?: CallOverrides): Promise<[BigNumber]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    getProposals(overrides?: CallOverrides): Promise<[ProposalStructOutput[]]>;

    getStatus(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastProposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        initiator: string;
        creationDate: BigNumber;
        closureDate: BigNumber;
        proposalType: number;
        description: string;
        proposalResult: number;
        approvedCount: BigNumber;
        refusedCount: BigNumber;
        closedDate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<[string]>;

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

    vote(
      _isApproved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  changeBeneficiary(
    _beneficiary: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createDeclaredBeneficiaryProposal(
    _beneficiary: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOutpassedRequierementsProposal(
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  creationDate(overrides?: CallOverrides): Promise<BigNumber>;

  creator(overrides?: CallOverrides): Promise<string>;

  currentProposal(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      number,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: BigNumber;
      initiator: string;
      creationDate: BigNumber;
      closureDate: BigNumber;
      proposalType: number;
      description: string;
      proposalResult: number;
      approvedCount: BigNumber;
      refusedCount: BigNumber;
      closedDate: BigNumber;
    }
  >;

  dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

  description(overrides?: CallOverrides): Promise<string>;

  determinateProposalResult(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  getProposals(overrides?: CallOverrides): Promise<ProposalStructOutput[]>;

  getStatus(overrides?: CallOverrides): Promise<BigNumber>;

  getVote(
    _voter: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastProposals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      number,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: BigNumber;
      initiator: string;
      creationDate: BigNumber;
      closureDate: BigNumber;
      proposalType: number;
      description: string;
      proposalResult: number;
      approvedCount: BigNumber;
      refusedCount: BigNumber;
      closedDate: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  proposalBeneficiary(overrides?: CallOverrides): Promise<string>;

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

  vote(
    _isApproved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    changeBeneficiary(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createDeclaredBeneficiaryProposal(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOutpassedRequierementsProposal(
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<string>;

    currentProposal(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        initiator: string;
        creationDate: BigNumber;
        closureDate: BigNumber;
        proposalType: number;
        description: string;
        proposalResult: number;
        approvedCount: BigNumber;
        refusedCount: BigNumber;
        closedDate: BigNumber;
      }
    >;

    dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<string>;

    determinateProposalResult(overrides?: CallOverrides): Promise<void>;

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

    getProposals(overrides?: CallOverrides): Promise<ProposalStructOutput[]>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastProposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        initiator: string;
        creationDate: BigNumber;
        closureDate: BigNumber;
        proposalType: number;
        description: string;
        proposalResult: number;
        approvedCount: BigNumber;
        refusedCount: BigNumber;
        closedDate: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<string>;

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

    vote(
      _isApproved: PromiseOrValue<boolean>,
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

    "ParticipantVoted(uint256,address,bool)"(
      arg0?: null,
      arg1?: null,
      arg2?: null
    ): ParticipantVotedEventFilter;
    ParticipantVoted(
      arg0?: null,
      arg1?: null,
      arg2?: null
    ): ParticipantVotedEventFilter;

    "Participated(address,uint256)"(
      arg0?: null,
      arg1?: null
    ): ParticipatedEventFilter;
    Participated(arg0?: null, arg1?: null): ParticipatedEventFilter;

    "ProperlyCreated()"(): ProperlyCreatedEventFilter;
    ProperlyCreated(): ProperlyCreatedEventFilter;

    "PropositionClosed(uint256,uint256)"(
      arg0?: null,
      arg1?: null
    ): PropositionClosedEventFilter;
    PropositionClosed(arg0?: null, arg1?: null): PropositionClosedEventFilter;

    "PropositionOpened(uint256,address)"(
      arg0?: null,
      arg1?: null
    ): PropositionOpenedEventFilter;
    PropositionOpened(arg0?: null, arg1?: null): PropositionOpenedEventFilter;

    "RequirementsOutpassed()"(): RequirementsOutpassedEventFilter;
    RequirementsOutpassed(): RequirementsOutpassedEventFilter;

    "StatusChanged(uint256,uint256)"(
      arg0?: null,
      arg1?: null
    ): StatusChangedEventFilter;
    StatusChanged(arg0?: null, arg1?: null): StatusChangedEventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    changeBeneficiary(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createDeclaredBeneficiaryProposal(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOutpassedRequierementsProposal(
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    creationDate(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    currentProposal(overrides?: CallOverrides): Promise<BigNumber>;

    dateToBeReleased(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    getProposals(overrides?: CallOverrides): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastProposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

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

    vote(
      _isApproved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeBeneficiary(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createDeclaredBeneficiaryProposal(
      _beneficiary: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOutpassedRequierementsProposal(
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    creationDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dateToBeReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    getProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastProposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalBeneficiary(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    vote(
      _isApproved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
