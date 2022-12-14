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

export type UserStruct = {
  pseudo: PromiseOrValue<string>;
  ipfsLink: PromiseOrValue<string>;
  friends: PromiseOrValue<string>[];
};

export type UserStructOutput = [string, string, string[]] & {
  pseudo: string;
  ipfsLink: string;
  friends: string[];
};

export type MessageStruct = {
  sender: PromiseOrValue<string>;
  sendDate: PromiseOrValue<BigNumberish>;
  message: PromiseOrValue<string>;
};

export type MessageStructOutput = [string, BigNumber, string] & {
  sender: string;
  sendDate: BigNumber;
  message: string;
};

export interface GiftNetworkInterface extends utils.Interface {
  functions: {
    "addFriend(address)": FunctionFragment;
    "getFriends()": FunctionFragment;
    "getFriendsAsUsers()": FunctionFragment;
    "getUser(address)": FunctionFragment;
    "getUserExists(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "readMessage(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendMessage(address,string)": FunctionFragment;
    "setUser(string,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addFriend"
      | "getFriends"
      | "getFriendsAsUsers"
      | "getUser"
      | "getUserExists"
      | "owner"
      | "readMessage"
      | "renounceOwnership"
      | "sendMessage"
      | "setUser"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFriend",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFriends",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFriendsAsUsers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readMessage",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUser",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addFriend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFriends", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFriendsAsUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddedFriend(address,address)": EventFragment;
    "Funding(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SendedMessage(address)": EventFragment;
    "SettedUser(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedFriend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Funding"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SettedUser"): EventFragment;
}

export interface AddedFriendEventObject {
  arg0: string;
  arg1: string;
}
export type AddedFriendEvent = TypedEvent<
  [string, string],
  AddedFriendEventObject
>;

export type AddedFriendEventFilter = TypedEventFilter<AddedFriendEvent>;

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

export interface SendedMessageEventObject {
  arg0: string;
}
export type SendedMessageEvent = TypedEvent<[string], SendedMessageEventObject>;

export type SendedMessageEventFilter = TypedEventFilter<SendedMessageEvent>;

export interface SettedUserEventObject {
  arg0: string;
  arg1: string;
}
export type SettedUserEvent = TypedEvent<
  [string, string],
  SettedUserEventObject
>;

export type SettedUserEventFilter = TypedEventFilter<SettedUserEvent>;

export interface GiftNetwork extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GiftNetworkInterface;

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
    addFriend(
      _friend: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFriends(overrides?: CallOverrides): Promise<[string[]]>;

    getFriendsAsUsers(overrides?: CallOverrides): Promise<[UserStructOutput[]]>;

    getUser(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[UserStructOutput]>;

    getUserExists(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    readMessage(
      _anotherUserAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[MessageStructOutput[]]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUser(
      _pseudo: PromiseOrValue<string>,
      _ipfsLink: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addFriend(
    _friend: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFriends(overrides?: CallOverrides): Promise<string[]>;

  getFriendsAsUsers(overrides?: CallOverrides): Promise<UserStructOutput[]>;

  getUser(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<UserStructOutput>;

  getUserExists(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  readMessage(
    _anotherUserAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<MessageStructOutput[]>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessage(
    _to: PromiseOrValue<string>,
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUser(
    _pseudo: PromiseOrValue<string>,
    _ipfsLink: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addFriend(
      _friend: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFriends(overrides?: CallOverrides): Promise<string[]>;

    getFriendsAsUsers(overrides?: CallOverrides): Promise<UserStructOutput[]>;

    getUser(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<UserStructOutput>;

    getUserExists(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    readMessage(
      _anotherUserAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<MessageStructOutput[]>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUser(
      _pseudo: PromiseOrValue<string>,
      _ipfsLink: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedFriend(address,address)"(
      arg0?: null,
      arg1?: null
    ): AddedFriendEventFilter;
    AddedFriend(arg0?: null, arg1?: null): AddedFriendEventFilter;

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

    "SendedMessage(address)"(arg0?: null): SendedMessageEventFilter;
    SendedMessage(arg0?: null): SendedMessageEventFilter;

    "SettedUser(address,string)"(
      arg0?: null,
      arg1?: null
    ): SettedUserEventFilter;
    SettedUser(arg0?: null, arg1?: null): SettedUserEventFilter;
  };

  estimateGas: {
    addFriend(
      _friend: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFriends(overrides?: CallOverrides): Promise<BigNumber>;

    getFriendsAsUsers(overrides?: CallOverrides): Promise<BigNumber>;

    getUser(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserExists(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    readMessage(
      _anotherUserAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUser(
      _pseudo: PromiseOrValue<string>,
      _ipfsLink: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFriend(
      _friend: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFriends(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFriendsAsUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUser(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserExists(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readMessage(
      _anotherUserAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUser(
      _pseudo: PromiseOrValue<string>,
      _ipfsLink: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
