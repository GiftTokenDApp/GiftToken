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

export interface GiftDAOInterface extends utils.Interface {
  functions: {
    "changeBeneficiary(address,string)": FunctionFragment;
    "createDeclaredBeneficiaryProposal(address,string)": FunctionFragment;
    "createOutpassedRequierementsProposal(string)": FunctionFragment;
    "currentProposal()": FunctionFragment;
    "determinateProposalResult()": FunctionFragment;
    "getProposals()": FunctionFragment;
    "getVote(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposalBeneficiary()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vote(bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeBeneficiary"
      | "createDeclaredBeneficiaryProposal"
      | "createOutpassedRequierementsProposal"
      | "currentProposal"
      | "determinateProposalResult"
      | "getProposals"
      | "getVote"
      | "owner"
      | "proposalBeneficiary"
      | "renounceOwnership"
      | "transferOwnership"
      | "vote"
  ): FunctionFragment;

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
    functionFragment: "currentProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "determinateProposalResult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVote",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalBeneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<boolean>]
  ): string;

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
    functionFragment: "currentProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "determinateProposalResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "BeneficiaryChanged(address,address)": EventFragment;
    "Funding(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ParticipantVoted(uint256,address,bool)": EventFragment;
    "PropositionClosed(uint256,uint256)": EventFragment;
    "PropositionOpened(uint256,address)": EventFragment;
    "RequirementsOutpassed()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BeneficiaryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Funding"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParticipantVoted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PropositionClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PropositionOpened"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequirementsOutpassed"): EventFragment;
}

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

export interface FundingEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type FundingEvent = TypedEvent<[string, BigNumber], FundingEventObject>;

export type FundingEventFilter = TypedEventFilter<FundingEvent>;

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

export interface GiftDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GiftDAOInterface;

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

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProposals(overrides?: CallOverrides): Promise<[ProposalStructOutput[]]>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vote(
      _isApproved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

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

  determinateProposalResult(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProposals(overrides?: CallOverrides): Promise<ProposalStructOutput[]>;

  getVote(
    _voter: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposalBeneficiary(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vote(
    _isApproved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
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

    determinateProposalResult(overrides?: CallOverrides): Promise<void>;

    getProposals(overrides?: CallOverrides): Promise<ProposalStructOutput[]>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

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
    "BeneficiaryChanged(address,address)"(
      arg0?: null,
      arg1?: null
    ): BeneficiaryChangedEventFilter;
    BeneficiaryChanged(arg0?: null, arg1?: null): BeneficiaryChangedEventFilter;

    "Funding(address,uint256)"(arg0?: null, arg1?: null): FundingEventFilter;
    Funding(arg0?: null, arg1?: null): FundingEventFilter;

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
  };

  estimateGas: {
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

    currentProposal(overrides?: CallOverrides): Promise<BigNumber>;

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProposals(overrides?: CallOverrides): Promise<BigNumber>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposalBeneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    currentProposal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    determinateProposalResult(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalBeneficiary(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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
