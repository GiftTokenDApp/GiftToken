/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GiftNetwork,
  GiftNetworkInterface,
} from "../../contracts/GiftNetwork";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AddedFriend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Funding",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "SendedMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "SettedUser",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_friend",
        type: "address",
      },
    ],
    name: "addFriend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFriends",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFriendsAsUsers",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "pseudo",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipfsLink",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "friends",
            type: "address[]",
          },
        ],
        internalType: "struct User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "pseudo",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipfsLink",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "friends",
            type: "address[]",
          },
        ],
        internalType: "struct User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
    ],
    name: "readMessage",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sendDate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_pseudo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ipfsLink",
        type: "string",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6114f88061007e6000396000f3fe6080604052600436106100905760003560e01c80630931d3af146100dd5780631f8f727014610112578063255e9c11146101345780635728b973146101615780636f77926b14610183578063715018a6146101b05780638da5cb5b146101c5578063bab18a49146101e7578063d7a1cfe114610209578063de6f24bb14610229578063f2fde38b14610249576100be565b366100be576000805160206114a383398151915233346040516100b4929190610e3e565b60405180910390a1005b6000805160206114a383398151915233346040516100b4929190610e3e565b3480156100e957600080fd5b506100fd6100f8366004610e73565b610269565b60405190151581526020015b60405180910390f35b34801561011e57600080fd5b50610127610299565b6040516101099190610e95565b34801561014057600080fd5b5061015461014f366004610e73565b610335565b6040516101099190610f28565b34801561016d57600080fd5b5061018161017c366004610ff8565b610468565b005b34801561018f57600080fd5b506101a361019e366004610e73565b6106b1565b60405161010991906110e8565b3480156101bc57600080fd5b50610181610868565b3480156101d157600080fd5b506101da61087c565b60405161010991906110fb565b3480156101f357600080fd5b506101fc61088b565b604051610109919061110f565b34801561021557600080fd5b50610181610224366004610e73565b6109dd565b34801561023557600080fd5b50610181610244366004611171565b610aa1565b34801561025557600080fd5b50610181610264366004610e73565b610bfd565b6001600160a01b0381166000908152600160205260408120805482919061028f906111c3565b9050119050919050565b60606102a433610269565b6102c95760405162461bcd60e51b81526004016102c0906111fd565b60405180910390fd5b336000908152600160209081526040918290206002018054835181840281018401909452808452909183018282801561032b57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161030d575b5050505050905090565b606060006103433384610c76565b905060026000828152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561045c576000848152602090819020604080516060810182526003860290920180546001600160a01b03168352600181015493830193909352600283018054929392918401916103cb906111c3565b80601f01602080910402602001604051908101604052809291908181526020018280546103f7906111c3565b80156104445780601f1061041957610100808354040283529160200191610444565b820191906000526020600020905b81548152906001019060200180831161042757829003601f168201915b50505050508152505081526020019060010190610378565b50505050915050919050565b8383806104875760405162461bcd60e51b81526004016102c090611240565b8181600081811061049a5761049a611269565b909101356001600160f81b031916600160fd1b0390506104cc5760405162461bcd60e51b81526004016102c09061127f565b8383806104eb5760405162461bcd60e51b81526004016102c090611240565b818160008181106104fe576104fe611269565b909101356001600160f81b031916600160fd1b0390506105305760405162461bcd60e51b81526004016102c09061127f565b604051806060016040528089898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a0181900481028201810190925288815291810191908990899081908401838280828437600092018290525093855250503382525060016020908152604091829020600201805483518184028101840190945280845293820193909183018282801561061157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105f3575b505050919092525050336000908152600160205260409020815181906106379082611316565b506020820151600182019061064c9082611316565b5060408201518051610668916002840191602090910190610da3565b509050507fe92ae53938d423e86211c78a26668f1233be4ac33b882e420d3b50b6e461b82c33898960405161069f939291906113d5565b60405180910390a15050505050505050565b6106b9610e08565b6001600160a01b038216600090815260016020526040908190208151606081019092528054829082906106eb906111c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610717906111c3565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b5050505050815260200160018201805461077d906111c3565b80601f01602080910402602001604051908101604052809291908181526020018280546107a9906111c3565b80156107f65780601f106107cb576101008083540402835291602001916107f6565b820191906000526020600020905b8154815290600101906020018083116107d957829003601f168201915b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561085857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161083a575b5050505050815250509050919050565b610870610cf4565b61087a6000610d53565b565b6000546001600160a01b031690565b606061089633610269565b6108b25760405162461bcd60e51b81526004016102c0906111fd565b33600090815260016020526040812060020154908190036109055760408051600080825260208201909252906108fe565b6108eb610e08565b8152602001906001900390816108e35790505b5091505090565b6000816001600160401b0381111561091f5761091f6112b1565b60405190808252806020026020018201604052801561095857816020015b610945610e08565b81526020019060019003908161093d5790505b50905060005b828110156108fe5733600090815260016020526040812060020180546109a991908490811061098f5761098f611269565b6000918252602090912001546001600160a01b03166106b1565b9050808383815181106109be576109be611269565b60200260200101819052505080806109d590611415565b91505061095e565b6109e633610269565b610a025760405162461bcd60e51b81526004016102c0906111fd565b80610a0c81610269565b610a285760405162461bcd60e51b81526004016102c09061143c565b3360008181526001602081815260408084206002018054938401815584529281902090910180546001600160a01b0319166001600160a01b0387169081179091558251938452908301527f0fbde3291bf3d63d0e6eb1ab37390f2d27b3eb91810b3274a9e7e2ea86272094910160405180910390a15050565b610aaa33610269565b610ac65760405162461bcd60e51b81526004016102c0906111fd565b82610ad081610269565b610aec5760405162461bcd60e51b81526004016102c09061143c565b6000610af83386610c76565b905060006040518060600160405280336001600160a01b0316815260200142815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093909452505084815260026020818152604080842080546001808201835591865294839020875160039096020180546001600160a01b0319166001600160a01b0390961695909517855591860151918401919091558401519394508493919250820190610bbb9082611316565b5050507fb0f6b928659c68d77a7b39dbee6f2f977357d6619e7a34725ba447e93be8293433604051610bed91906110fb565b60405180910390a1505050505050565b610c05610cf4565b6001600160a01b038116610c6a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102c0565b610c7381610d53565b50565b6000816001600160a01b0316836001600160a01b03161015610cc2578282604051602001610ca5929190611480565b604051602081830303815290604052805190602001209050610cee565b8183604051602001610cd5929190611480565b6040516020818303038152906040528051906020012090505b92915050565b33610cfd61087c565b6001600160a01b03161461087a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102c0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215610df8579160200282015b82811115610df857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610dc3565b50610e04929150610e29565b5090565b60405180606001604052806060815260200160608152602001606081525090565b5b80821115610e045760008155600101610e2a565b6001600160a01b03929092168252602082015260400190565b80356001600160a01b0381168114610e6e57600080fd5b919050565b600060208284031215610e8557600080fd5b610e8e82610e57565b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015610ed65783516001600160a01b031683529284019291840191600101610eb1565b50909695505050505050565b6000815180845260005b81811015610f0857602081850181015186830182015201610eec565b506000602082860101526020601f19601f83011685010191505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015610fa257888303603f19018552815180516001600160a01b0316845287810151888501528601516060878501819052610f8e81860183610ee2565b968901969450505090860190600101610f4f565b509098975050505050505050565b60008083601f840112610fc257600080fd5b5081356001600160401b03811115610fd957600080fd5b602083019150836020828501011115610ff157600080fd5b9250929050565b6000806000806040858703121561100e57600080fd5b84356001600160401b038082111561102557600080fd5b61103188838901610fb0565b9096509450602087013591508082111561104a57600080fd5b5061105787828801610fb0565b95989497509550505050565b60008151606084526110786060850182610ee2565b9050602080840151858303828701526110918382610ee2565b604086810151888303918901919091528051808352908401945060009250908301905b808310156110dd5784516001600160a01b031682529383019360019290920191908301906110b4565b509695505050505050565b602081526000610e8e6020830184611063565b6001600160a01b0391909116815260200190565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561116457603f19888603018452611152858351611063565b94509285019290850190600101611136565b5092979650505050505050565b60008060006040848603121561118657600080fd5b61118f84610e57565b925060208401356001600160401b038111156111aa57600080fd5b6111b686828701610fb0565b9497909650939450505050565b600181811c908216806111d757607f821691505b6020821081036111f757634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526023908201527f53656e64657220646f65736e2774206861766520616e2075736572206163636f6040820152621d5b9d60ea1b606082015260800190565b6020808252600f908201526e537472696e6720697320656d70747960881b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b602080825260189082015277537472696e6720737461727473207769746820737061636560401b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b601f82111561131157600081815260208120601f850160051c810160208610156112ee5750805b601f850160051c820191505b8181101561130d578281556001016112fa565b5050505b505050565b81516001600160401b0381111561132f5761132f6112b1565b6113438161133d84546111c3565b846112c7565b602080601f83116001811461137857600084156113605750858301515b600019600386901b1c1916600185901b17855561130d565b600085815260208120601f198616915b828110156113a757888601518255948401946001909101908401611388565b50858210156113c55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b03841681526040602082018190528101829052818360608301376000818301606090810191909152601f909201601f1916010192915050565b60006001820161143557634e487b7160e01b600052601160045260246000fd5b5060010190565b60208082526024908201527f4164647265737320646f65736e2774206861766520616e2075736572206163636040820152631bdd5b9d60e21b606082015260800190565b6001600160601b0319606093841b811682529190921b1660148201526028019056fe1af855f8ecf9e2874e8d95b2f5b91f1afa7cea4cfac27e00fb165ebec0e671afa2646970667358221220a8c6334d1e3906586b6655d71d1217e20e3fb8f6efa3f8e76042177be11c8e2f64736f6c63430008110033";

type GiftNetworkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GiftNetworkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GiftNetwork__factory extends ContractFactory {
  constructor(...args: GiftNetworkConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GiftNetwork> {
    return super.deploy(overrides || {}) as Promise<GiftNetwork>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GiftNetwork {
    return super.attach(address) as GiftNetwork;
  }
  override connect(signer: Signer): GiftNetwork__factory {
    return super.connect(signer) as GiftNetwork__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GiftNetworkInterface {
    return new utils.Interface(_abi) as GiftNetworkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GiftNetwork {
    return new Contract(address, _abi, signerOrProvider) as GiftNetwork;
  }
}
