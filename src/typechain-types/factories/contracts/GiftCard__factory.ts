/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GiftCard, GiftCardInterface } from "../../contracts/GiftCard";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_goalToBeReleased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dateToBeReleased",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
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
    name: "AmountTransfered",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Participated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ProperlyCreated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "beneficiary",
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
    inputs: [],
    name: "creationDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creator",
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
    inputs: [],
    name: "dateToBeReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getIsBeneficiary",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getIsCreator",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getIsParticipant",
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
    name: "getParticipants",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_startIndex",
        type: "uint256",
      },
    ],
    name: "getParticipants",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pageSize",
        type: "uint256",
      },
    ],
    name: "getParticipants",
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
    name: "getParticipantsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goalToBeReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOpen",
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
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "releaseAll",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "title",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
  "0x608060405260405162002c2e38038062002c2e8339818101604052810190620000299190620007a2565b620000496200003d620002a760201b60201c565b620002af60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603620000bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b290620008dd565b60405180910390fd5b600085511162000102576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f9906200094f565b60405180910390fd5b4260038190555085600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600190816200015b919062000bb2565b5083600290816200016d919062000bb2565b50826004819055508160058190555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146200024a5762000249600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036200037360201b60201c565b5b6200025d8660016200037360201b60201c565b6200026f86346200040f60201b60201c565b7fef203b8176093a94d60652a5dc1048d011d880dd2c5fb6e9c1a4bff1e770379660405160405180910390a150505050505062000e5d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001836003811115620003cc57620003cb62000c99565b5b620003d8919062000cf7565b60038110620003ec57620003eb62000d32565b5b602091828204019190066101000a81548160ff0219169083151502179055505050565b600b60009054906101000a900460ff161562000462576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004599062000db1565b60405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620004b3919062000dd3565b92505081905550620004cd8260026200037360201b60201c565b6008829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb198f199c43cc078ad46e5a5fabe03eba401f7417816c86af0bd2e7345c9950682826040516200056392919062000e30565b60405180910390a15050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005b08262000583565b9050919050565b620005c281620005a3565b8114620005ce57600080fd5b50565b600081519050620005e281620005b7565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200063d82620005f2565b810181811067ffffffffffffffff821117156200065f576200065e62000603565b5b80604052505050565b6000620006746200056f565b905062000682828262000632565b919050565b600067ffffffffffffffff821115620006a557620006a462000603565b5b620006b082620005f2565b9050602081019050919050565b60005b83811015620006dd578082015181840152602081019050620006c0565b60008484015250505050565b600062000700620006fa8462000687565b62000668565b9050828152602081018484840111156200071f576200071e620005ed565b5b6200072c848285620006bd565b509392505050565b600082601f8301126200074c576200074b620005e8565b5b81516200075e848260208601620006e9565b91505092915050565b6000819050919050565b6200077c8162000767565b81146200078857600080fd5b50565b6000815190506200079c8162000771565b92915050565b60008060008060008060c08789031215620007c257620007c162000579565b5b6000620007d289828a01620005d1565b965050602087015167ffffffffffffffff811115620007f657620007f56200057e565b5b6200080489828a0162000734565b955050604087015167ffffffffffffffff8111156200082857620008276200057e565b5b6200083689828a0162000734565b94505060606200084989828a016200078b565b93505060806200085c89828a016200078b565b92505060a06200086f89828a01620005d1565b9150509295509295509295565b600082825260208201905092915050565b7f43726561746f7227732061646472657373206973206d616e6461746f72790000600082015250565b6000620008c5601e836200087c565b9150620008d2826200088d565b602082019050919050565b60006020820190508181036000830152620008f881620008b6565b9050919050565b7f5469746c65206973206d616e6461746f72790000000000000000000000000000600082015250565b6000620009376012836200087c565b91506200094482620008ff565b602082019050919050565b600060208201905081810360008301526200096a8162000928565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620009c457607f821691505b602082108103620009da57620009d96200097c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000a447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000a05565b62000a50868362000a05565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000a9362000a8d62000a878462000767565b62000a68565b62000767565b9050919050565b6000819050919050565b62000aaf8362000a72565b62000ac762000abe8262000a9a565b84845462000a12565b825550505050565b600090565b62000ade62000acf565b62000aeb81848462000aa4565b505050565b5b8181101562000b135762000b0760008262000ad4565b60018101905062000af1565b5050565b601f82111562000b625762000b2c81620009e0565b62000b3784620009f5565b8101602085101562000b47578190505b62000b5f62000b5685620009f5565b83018262000af0565b50505b505050565b600082821c905092915050565b600062000b876000198460080262000b67565b1980831691505092915050565b600062000ba2838362000b74565b9150826002028217905092915050565b62000bbd8262000971565b67ffffffffffffffff81111562000bd95762000bd862000603565b5b62000be58254620009ab565b62000bf282828562000b17565b600060209050601f83116001811462000c2a576000841562000c15578287015190505b62000c21858262000b94565b86555062000c91565b601f19841662000c3a86620009e0565b60005b8281101562000c645784890151825560018201915060208501945060208101905062000c3d565b8683101562000c84578489015162000c80601f89168262000b74565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000d048262000767565b915062000d118362000767565b925082820390508181111562000d2c5762000d2b62000cc8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f436172642773206973206f70656e656400000000000000000000000000000000600082015250565b600062000d996010836200087c565b915062000da68262000d61565b602082019050919050565b6000602082019050818103600083015262000dcc8162000d8a565b9050919050565b600062000de08262000767565b915062000ded8362000767565b925082820190508082111562000e085762000e0762000cc8565b5b92915050565b62000e1981620005a3565b82525050565b62000e2a8162000767565b82525050565b600060408201905062000e47600083018562000e0e565b62000e56602083018462000e1f565b9392505050565b611dc18062000e6d6000396000f3fe6080604052600436106101235760003560e01c80637284e416116100a0578063cabfaa1811610064578063cabfaa18146103e3578063ded0ed161461040e578063ed236da71461044b578063f2fde38b14610488578063fe2242aa146104b157610134565b80637284e416146102e85780638da5cb5b1461031357806391282d4e1461033e57806399ae1ec214610369578063c1e3bd3e146103a657610134565b80634a79d50c116100e75780634a79d50c14610215578063577eb60a14610240578063580fc80a1461027d5780635aa68ac0146102a6578063715018a6146102d157610134565b806302d05d3f146101405780630357371d1461016b57806305b344101461019457806338af3eed146101bf57806347535d7b146101ea57610134565b366101345761013233346104dc565b005b61013e33346104dc565b005b34801561014c57600080fd5b5061015561062d565b6040516101629190611265565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d91906112f9565b610653565b005b3480156101a057600080fd5b506101a96107b9565b6040516101b69190611348565b60405180910390f35b3480156101cb57600080fd5b506101d46107bf565b6040516101e19190611265565b60405180910390f35b3480156101f657600080fd5b506101ff6107e5565b60405161020c919061137e565b60405180910390f35b34801561022157600080fd5b5061022a6107f8565b6040516102379190611429565b60405180910390f35b34801561024c57600080fd5b5061026760048036038101906102629190611477565b610886565b604051610274919061137e565b60405180910390f35b34801561028957600080fd5b506102a4600480360381019061029f91906114a4565b61089a565b005b3480156102b257600080fd5b506102bb6109bc565b6040516102c8919061158f565b60405180910390f35b3480156102dd57600080fd5b506102e6610a4a565b005b3480156102f457600080fd5b506102fd610a5e565b60405161030a9190611429565b60405180910390f35b34801561031f57600080fd5b50610328610aec565b6040516103359190611265565b60405180910390f35b34801561034a57600080fd5b50610353610b15565b6040516103609190611348565b60405180910390f35b34801561037557600080fd5b50610390600480360381019061038b9190611477565b610b1b565b60405161039d919061137e565b60405180910390f35b3480156103b257600080fd5b506103cd60048036038101906103c891906115b1565b610b2f565b6040516103da919061158f565b60405180910390f35b3480156103ef57600080fd5b506103f8610c9d565b6040516104059190611348565b60405180910390f35b34801561041a57600080fd5b50610435600480360381019061043091906115de565b610caa565b604051610442919061158f565b60405180910390f35b34801561045757600080fd5b50610472600480360381019061046d9190611477565b610e15565b60405161047f919061137e565b60405180910390f35b34801561049457600080fd5b506104af60048036038101906104aa9190611477565b610e29565b005b3480156104bd57600080fd5b506104c6610eac565b6040516104d39190611348565b60405180910390f35b600b60009054906101000a900460ff161561052c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105239061166a565b60405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057b91906116b9565b9250508190555061058d826002610eb2565b6008829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb198f199c43cc078ad46e5a5fabe03eba401f7417816c86af0bd2e7345c9950682826040516106219291906116ed565b60405180910390a15050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61065c33610886565b61069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069290611762565b60405180910390fd5b600047116106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d5906117ce565b60405180910390fd5b476004541115610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071a9061183a565b60405180910390fd5b426005541115610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f906118cc565b60405180910390fd5b478111156107ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a29061195e565b60405180910390fd5b6107b58282610f46565b5050565b60035481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900460ff1681565b60018054610805906119ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610831906119ad565b801561087e5780601f106108535761010080835404028352916020019161087e565b820191906000526020600020905b81548152906001019060200180831161086157829003601f168201915b505050505081565b600061089382600361104b565b9050919050565b6108a333610886565b6108e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d990611762565b60405180910390fd5b60004711610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091c906117ce565b60405180910390fd5b47600454111561096a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109619061183a565b60405180910390fd5b4260055411156109af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a6906118cc565b60405180910390fd5b6109b98147610f46565b50565b60606008805480602002602001604051908101604052809291908181526020018280548015610a4057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116109f6575b5050505050905090565b610a526110da565b610a5c6000611158565b565b60028054610a6b906119ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610a97906119ad565b8015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b505050505081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60045481565b6000610b2882600261104b565b9050919050565b6060600880549050821115610b79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7090611a2a565b60405180910390fd5b600082600880549050610b8c9190611a4a565b67ffffffffffffffff811115610ba557610ba4611a7e565b5b604051908082528060200260200182016040528015610bd35781602001602082028036833780820191505090505b50905060008390505b600880549050811015610c935760088185610bf791906116b9565b81548110610c0857610c07611aad565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281518110610c4657610c45611aad565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080610c8b90611adc565b915050610bdc565b5080915050919050565b6000600880549050905090565b606060008284610cba91906116b9565b9050600880549050811115610d04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfb90611a2a565b60405180910390fd5b60008367ffffffffffffffff811115610d2057610d1f611a7e565b5b604051908082528060200260200182016040528015610d4e5781602001602082028036833780820191505090505b50905060008590505b82811015610e095760088187610d6d91906116b9565b81548110610d7e57610d7d611aad565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281518110610dbc57610dbb611aad565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080610e0190611adc565b915050610d57565b50809250505092915050565b6000610e2282600161104b565b9050919050565b610e316110da565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ea0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9790611b96565b60405180910390fd5b610ea981611158565b50565b60055481565b6001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001836003811115610f0857610f07611bb6565b5b610f129190611a4a565b60038110610f2357610f22611aad565b5b602091828204019190066101000a81548160ff0219169083151502179055505050565b6001600b60006101000a81548160ff02191690831515021790555060008273ffffffffffffffffffffffffffffffffffffffff1682604051610f8790611c16565b60006040518083038185875af1925050503d8060008114610fc4576040519150601f19603f3d011682016040523d82523d6000602084013e610fc9565b606091505b505090508061100d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100490611c77565b60405180910390fd5b7fc3ce4eeef579533b0a2d7ae2e50eb68dccae3b183dc8cce60267f3c9fa4935c0838360405161103e929190611cf6565b60405180910390a1505050565b6000600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060018360038111156110a1576110a0611bb6565b5b6110ab9190611a4a565b600381106110bc576110bb611aad565b5b602091828204019190069054906101000a900460ff16905092915050565b6110e261121c565b73ffffffffffffffffffffffffffffffffffffffff16611100610aec565b73ffffffffffffffffffffffffffffffffffffffff1614611156576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114d90611d6b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061124f82611224565b9050919050565b61125f81611244565b82525050565b600060208201905061127a6000830184611256565b92915050565b600080fd5b600061129082611224565b9050919050565b6112a081611285565b81146112ab57600080fd5b50565b6000813590506112bd81611297565b92915050565b6000819050919050565b6112d6816112c3565b81146112e157600080fd5b50565b6000813590506112f3816112cd565b92915050565b600080604083850312156113105761130f611280565b5b600061131e858286016112ae565b925050602061132f858286016112e4565b9150509250929050565b611342816112c3565b82525050565b600060208201905061135d6000830184611339565b92915050565b60008115159050919050565b61137881611363565b82525050565b6000602082019050611393600083018461136f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113d35780820151818401526020810190506113b8565b60008484015250505050565b6000601f19601f8301169050919050565b60006113fb82611399565b61140581856113a4565b93506114158185602086016113b5565b61141e816113df565b840191505092915050565b6000602082019050818103600083015261144381846113f0565b905092915050565b61145481611244565b811461145f57600080fd5b50565b6000813590506114718161144b565b92915050565b60006020828403121561148d5761148c611280565b5b600061149b84828501611462565b91505092915050565b6000602082840312156114ba576114b9611280565b5b60006114c8848285016112ae565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61150681611244565b82525050565b600061151883836114fd565b60208301905092915050565b6000602082019050919050565b600061153c826114d1565b61154681856114dc565b9350611551836114ed565b8060005b83811015611582578151611569888261150c565b975061157483611524565b925050600181019050611555565b5085935050505092915050565b600060208201905081810360008301526115a98184611531565b905092915050565b6000602082840312156115c7576115c6611280565b5b60006115d5848285016112e4565b91505092915050565b600080604083850312156115f5576115f4611280565b5b6000611603858286016112e4565b9250506020611614858286016112e4565b9150509250929050565b7f436172642773206973206f70656e656400000000000000000000000000000000600082015250565b60006116546010836113a4565b915061165f8261161e565b602082019050919050565b6000602082019050818103600083015261168381611647565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116c4826112c3565b91506116cf836112c3565b92508282019050808211156116e7576116e661168a565b5b92915050565b60006040820190506117026000830185611256565b61170f6020830184611339565b9392505050565b7f596f75277265206e6f74207468652062656e6566696369617279000000000000600082015250565b600061174c601a836113a4565b915061175782611716565b602082019050919050565b6000602082019050818103600083015261177b8161173f565b9050919050565b7f43617264277320697320636f6d706c65746c792072656c656173656400000000600082015250565b60006117b8601c836113a4565b91506117c382611782565b602082019050919050565b600060208201905081810360008301526117e7816117ab565b9050919050565b7f43617264277320676f616c2069736e2774207265616368656400000000000000600082015250565b60006118246019836113a4565b915061182f826117ee565b602082019050919050565b6000602082019050818103600083015261185381611817565b9050919050565b7f4361726427732072656c656173656420646174652069736e277420726561636860008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b60006118b66022836113a4565b91506118c18261185a565b604082019050919050565b600060208201905081810360008301526118e5816118a9565b9050919050565b7f5472616e73666572656427732076616c7565206578636565647320746865206360008201527f617264277320636f6e74656e7400000000000000000000000000000000000000602082015250565b6000611948602d836113a4565b9150611953826118ec565b604082019050919050565b600060208201905081810360008301526119778161193b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119c557607f821691505b6020821081036119d8576119d761197e565b5b50919050565b7f5265616420696e646578206f7574206f6620626f756e64730000000000000000600082015250565b6000611a146018836113a4565b9150611a1f826119de565b602082019050919050565b60006020820190508181036000830152611a4381611a07565b9050919050565b6000611a55826112c3565b9150611a60836112c3565b9250828203905081811115611a7857611a7761168a565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611ae7826112c3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b1957611b1861168a565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b806026836113a4565b9150611b8b82611b24565b604082019050919050565b60006020820190508181036000830152611baf81611b73565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600081905092915050565b50565b6000611c00600083611be5565b9150611c0b82611bf0565b600082019050919050565b6000611c2182611bf3565b9150819050919050565b7f4661696c656420746f2073656e642076616c7565000000000000000000000000600082015250565b6000611c616014836113a4565b9150611c6c82611c2b565b602082019050919050565b60006020820190508181036000830152611c9081611c54565b9050919050565b6000819050919050565b6000611cbc611cb7611cb284611224565b611c97565b611224565b9050919050565b6000611cce82611ca1565b9050919050565b6000611ce082611cc3565b9050919050565b611cf081611cd5565b82525050565b6000604082019050611d0b6000830185611ce7565b611d186020830184611339565b9392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611d556020836113a4565b9150611d6082611d1f565b602082019050919050565b60006020820190508181036000830152611d8481611d48565b905091905056fea2646970667358221220685bf7294cae8b0ec42fdafb2acf3c9769e5acb880c06142865a8a2278264a7a64736f6c63430008110033";

type GiftCardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GiftCardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GiftCard__factory extends ContractFactory {
  constructor(...args: GiftCardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _creator: PromiseOrValue<string>,
    _title: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _goalToBeReleased: PromiseOrValue<BigNumberish>,
    _dateToBeReleased: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<GiftCard> {
    return super.deploy(
      _creator,
      _title,
      _description,
      _goalToBeReleased,
      _dateToBeReleased,
      _beneficiary,
      overrides || {}
    ) as Promise<GiftCard>;
  }
  override getDeployTransaction(
    _creator: PromiseOrValue<string>,
    _title: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _goalToBeReleased: PromiseOrValue<BigNumberish>,
    _dateToBeReleased: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creator,
      _title,
      _description,
      _goalToBeReleased,
      _dateToBeReleased,
      _beneficiary,
      overrides || {}
    );
  }
  override attach(address: string): GiftCard {
    return super.attach(address) as GiftCard;
  }
  override connect(signer: Signer): GiftCard__factory {
    return super.connect(signer) as GiftCard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GiftCardInterface {
    return new utils.Interface(_abi) as GiftCardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GiftCard {
    return new Contract(address, _abi, signerOrProvider) as GiftCard;
  }
}
