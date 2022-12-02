import React, { FC, useCallback, useMemo, useReducer, useEffect, useState } from "react"
import EthContext from "./EthContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer, actions } from "./state";
import { IEthContextProps, StateTypes } from "./interfaces";
// import { ethers } from "ethers";
// import GiftFactory from '../../artifacts/contracts/GiftFactory.sol/GiftFactory.json'

let FactoryAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const EthContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [mainContextState, mainContextDispatch] = useReducer(reducer, initialState);
  // const [cardAddress, setCardAddress] = useState(null);
  // const [error, setError] = useState('');

  // async function getBalance() {
  //   if(typeof window.ethereum !== 'undefined') {
  //     const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(FactoryAddress, GiftFactory.abi, provider);
  //     try {
  //       let overrides = {
  //         from: accounts[0]
  //       }
  //       const data = await contract.links(overrides,0);
  //       setCardAddress(data.toString());
  //     } catch (err) {
  //       setError('Une erreur est survenue.');
  //     }
  //   }
  // }

  // async function transfer(amount: any) {
  //   console.log("AAAA");
  //   if(!amount) {
  //     return;
  //   }
  //   if(typeof window.ethereum !== 'undefined') {
  //     const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     try {
  //       console.log('CCC');
  //       const tx = {
  //         from: accounts[0],
  //         to: FactoryAddress,
  //         value: ethers.utils.parseEther(amount)
  //       }
  //       const transaction = await signer.sendTransaction(tx);
  //       await transaction.wait();
  //       console.log('DDD');
  //       getBalance();
  //       console.log('Transfert effectué.');
  //     } catch (err) {
  //       setError('Une erreur est survenue.');
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getBalance()
  //   // transfer(22);
  // }, [])
  
  // useEffect(() => {
  //   console.log(cardAddress);
  // }, [cardAddress])
  

  // const init = useCallback(
  //   async artifact => {
  //     if (artifact) {
  //       // const web3 = new ethers.providers.Web3Provider(window.ethereum);
  //       // const accounts = await web3.eth.requestAccounts();
  //       // const networkID = await web3.eth.net.getId();
  //       // const { abi } = artifact;
  //       const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       // let address, contract;
  //       const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
  //       let contract;
  //       const { abi } = artifact;
  //       try {
  //         contract = new ethers.Contract(contractAddress, abi, provider);
  //         // address = artifact.networks[networkID].address;
  //       } catch (err) {
  //         // console.error(err?.data.data);
  //         console.log(err);
  //       }
  //       mainContextDispatch({
  //         type: StateTypes.UPDATE,
  //         payload: { artifact, accounts, contract }
  //         // data: { artifact, web3, accounts, networkID, contract }
  //       });
  //     }
  //   }, []);

  // useEffect(() => {
  //   const tryInit = async () => {
  //     try {
  //       const artifact = require("../../artifacts/contracts/GiftFactory.sol");
  //       init(artifact);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   tryInit();
  // }, [init]);

  // useEffect(() => {
  //   const events = ["chainChanged", "accountsChanged"];
  //   const handleChange = () => {
  //     init(mainContextState.artifact);
  //   };

  //   console.log(mainContextState);

  //   events.forEach(e => window.ethereum.on(e, handleChange));
  //   return () => {
  //     events.forEach(e => window.ethereum.removeListener(e, handleChange));
  //   };
  // }, [init, mainContextState.artifact]);

  const contextValues: IEthContextProps = useMemo(
    () => ({
      mainContextState,
      mainContextDispatch,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      mainContextState,
    ]
  )

  return <EthContext.Provider value={contextValues}>{children}</EthContext.Provider>;
}

export default EthContextProvider;