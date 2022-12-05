import React, { FC, useCallback, useMemo, useReducer, useEffect, useState } from "react"
import DappContext from "./DappContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer, actions } from "./state";
import { IDappContextProps, StateTypes } from "./interfaces";
import { ethers } from "ethers";
import GiftFactory from '../../artifacts/contracts/GiftFactory.sol/GiftFactory.json'
import { INewCardProps } from "../../components/forms/interface";

let FactoryAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const DAppContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [dappContextState, dappContextDispatch] = useReducer(reducer, initialState);
  const [cardAddress, setCardAddress] = useState(null);
  const [nb, setNb] = useState(0)
  const [error, setError] = useState('');

//   async function getAddress() {
//     if(typeof window.ethereum !== 'undefined') {
//       const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(FactoryAddress, GiftFactory.abi, provider);        
//       try {
//           const value = await contract.links(accounts[0],nb);
//           console.log(value.toString());
//           setCardAddress(value);
//       } catch (err) {
//           err && setError(err.toString());
//       }
//     }
//   }    

  // async function createCard(_title: string, _description: string, _goalToBeReleased: number, _dateToBeReleased: number, _beneficiary: string, _amount: number) {
  async function createCard(newCard: INewCardProps) {
      if(typeof window.ethereum !== 'undefined') {
          try {
              const trx = {
                  from: dappContextState.accounts[0],
                  value: ethers.utils.parseEther(`${newCard.amount}`),
              }
              const transaction = await dappContextState.giftFactoryContract.connect(dappContextState.signer).createCard(newCard.title, newCard.description, newCard.goal, newCard.releaseDate, newCard.beneficiary, trx);               
              await transaction.wait();
              console.log('Carté créée.');
              setNb(nb => nb + 1);
          } catch (err) {
              err && setError(err.toString());
          }
      }
  }

  const init = useCallback(
    async () => {
      let accounts;
      let provider;
      let giftFactoryContract;
      let signer;   
      try {
        accounts = await window.ethereum.request({method:'eth_requestAccounts'});
        provider = new ethers.providers.Web3Provider(window.ethereum);
        giftFactoryContract = new ethers.Contract(FactoryAddress, GiftFactory.abi, provider);  
        signer = provider.getSigner();   
      } catch (err) {
        console.log(err);
      }
      dappContextDispatch({
        type: StateTypes.UPDATE,
        payload: { accounts, provider, giftFactoryContract, signer }
      });
    }, []);
  
  useEffect(() => {
    const tryInit = async () => {
      try {
        init();
      } catch (err) {
        console.error(err);
      }
    };
    tryInit();
  }, [init]);

  // useEffect(() => {
  //   const events = ["chainChanged", "accountsChanged"];
  //   const handleChange = () => {
  //     init(mainContextState.artifacts);
  //   };
  //   console.log(mainContextState);
  //   events.forEach(e => window.ethereum.on(e, handleChange));
  //   return () => {
  //     events.forEach(e => window.ethereum.removeListener(e, handleChange));
  //   };
  // }, [init, mainContextState.artifacts]);

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

  const contextValues: IDappContextProps = useMemo(
    () => ({
      dappContextState,
      dappContextDispatch,
      createCard,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      dappContextState,
    ]
  )

  return <DappContext.Provider value={contextValues}>{children}</DappContext.Provider>;
}

export default DAppContextProvider;