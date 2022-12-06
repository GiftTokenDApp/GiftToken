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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IGiftCardInterface extends utils.Interface {
  functions: {
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
    "release(address,uint256)": FunctionFragment;
    "releaseAll(address)": FunctionFragment;
    "setBeneficiaryDAO(address)": FunctionFragment;
    "setStatusByDAO(uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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
      | "release"
      | "releaseAll"
      | "setBeneficiaryDAO"
      | "setStatusByDAO"
  ): FunctionFragment;

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
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAll",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBeneficiaryDAO",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStatusByDAO",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

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
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "releaseAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBeneficiaryDAO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStatusByDAO",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGiftCard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGiftCardInterface;

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

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBeneficiaryDAO(
      _newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStatusByDAO(
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

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

  release(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releaseAll(
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBeneficiaryDAO(
    _newBeneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStatusByDAO(
    _newStatus: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
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

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBeneficiaryDAO(
      _newBeneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStatusByDAO(
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
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

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBeneficiaryDAO(
      _newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStatusByDAO(
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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

    release(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releaseAll(
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBeneficiaryDAO(
      _newBeneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStatusByDAO(
      _newStatus: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
