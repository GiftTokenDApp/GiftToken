import React, { FC, useCallback, useMemo, useReducer, useEffect, useState } from "react"
import DappContext from "./DappContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer } from "./state";
import { IDappContextProps, StateTypes } from "./interfaces";
import { ethers } from "ethers";
import GiftFactory from '../../artifacts/contracts/GiftFactory.sol/GiftFactory.json'
import GiftCard from '../../artifacts/contracts/GiftCard.sol/GiftCard.json'
import GiftDAO from '../../artifacts/contracts/GiftDAO.sol/GiftDAO.json'
import { INewCardProps } from "../../components/forms/interface";
import { Address } from "../../helpers/typesHelpers";
import IGiftCardProps from "../../components/giftCard/interface";

let FactoryAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const DAppContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [dappContextState, dappContextDispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  // const cardsList = await dappContextState.giftFactoryContract.getLinks(dappContextState.accounts[0]);  
  // const cardsList = await dappContextState.giftCardContract.connect(dappContextState.signer)['getLinks(address)'](dappContextState.accounts[0]);  
  
    // const loadCards = (cards: IGiftCardProps[]) => {
  //   const newState = {...mainContextState};
  //   newState.cards = cards;
  //   newState.currentCard = cards[0];
  //   mainContextDispatch({
  //     type: StateTypes.UPDATE,
  //     payload: {...mainContextState, ...newState},
  //   });
  // }

  // const updateCurrentCard = (cardProps: IGiftCardProps) => {
  //   const newState = {...mainContextState};    
  //   newState.currentCard = cardProps;
  //   const newCardsList = newState?.cards?.map(card => {
  //     const newCard = {...card}
  //     if(card.address === cardProps.address){
  //       newCard.coinsAmount = cardProps.coinsAmount
  //     }
  //     return newCard
  //   })
  //   if(newCardsList){
  //     newState.cards = newCardsList;
  //   }
  //   mainContextDispatch({
  //     type: StateTypes.UPDATE,
  //     payload: {...mainContextState, ...newState},
  //   });
  // }  

  async function getCardsAddressesList() {
    if(typeof window.ethereum !== 'undefined') {      
      try {  
          const cardsAddressesList = await dappContextState.giftFactoryContract.connect(dappContextState.signer)['getLinks(address)'](dappContextState.accounts[0]); 
          const cardsDataList: IGiftCardProps[] = [];
          for (let i = 0; i < cardsAddressesList.length; i++) {
            const giftCardContract = new ethers.Contract(cardsAddressesList[i], GiftCard.abi, dappContextState.provider);            
            const cardTitle = await giftCardContract.title();          
            const cardDescription = await giftCardContract.description();          
            const cardCreationDate = await giftCardContract.creationDate();          
            const cardGoal = await giftCardContract.requierementToBeReleased();          
            const cardCreator = await giftCardContract.getCreator();          
            const cardFunders = await giftCardContract.connect(dappContextState.signer)['getParticipants()']();         
            const cardBeneficiary = await giftCardContract.getBeneficiary();          
            const cardStatus = await giftCardContract.getStatus();          
            const cardReleaseDate = await giftCardContract.getDateToBeReleased(); 
            const cardCoinsAmount = await giftCardContract.provider.getBalance(cardsAddressesList[i]);
            const parsedEth = parseInt(cardCoinsAmount.toString()) / 10 ** 18;
            const cardDAOAddress = await giftCardContract.getCardDAOAddress();         
            const newCardData = {
              address: cardsAddressesList[i],
              contract: giftCardContract,
              title: cardTitle,
              description: cardDescription,
              creationDate: cardCreationDate,
              goal: cardGoal,
              creator: cardCreator,
              funders: cardFunders,
              beneficiary: cardBeneficiary,
              status: cardStatus,
              releaseDate: cardReleaseDate,
              coinsAmount: parsedEth,
              cardDAOAddress: cardDAOAddress,
            }    
            cardsDataList.push(newCardData);
          }        
          dappContextDispatch({
            type: StateTypes.UPDATE_CARDS,
            payload: {...dappContextState, cardsAddressesList: cardsAddressesList, cardsDataList: cardsDataList},
          });
      } catch (err) {
          err && setError(err.toString());
      }
    }
  }  
  
  const setCurrentCardFromIndex = (currentCardIndex: number) => {
    if (dappContextState.cardsDataList) {
      const newCurrentCard = dappContextState.cardsDataList[currentCardIndex];
      dappContextDispatch({
        type: StateTypes.SET_CURRENT_CARD,
        payload: {...dappContextState, currentCard: newCurrentCard},
      }); 
    }
  }
  const setCurrentCardFromData = (currentCardData: IGiftCardProps) => {
    dappContextDispatch({
      type: StateTypes.SET_CURRENT_CARD,
      payload: {...dappContextState, currentCard: currentCardData},
    }); 
  }

  async function createCard(newCard: INewCardProps) {
      if(typeof window.ethereum !== 'undefined') {
          try {
              const trx = {
                  from: dappContextState.accounts[0],
                  value: ethers.utils.parseEther(`${newCard.amount}`),
              }
              const transaction = await dappContextState.giftFactoryContract.connect(dappContextState.signer).createCard(newCard.title, newCard.description, newCard.goal, newCard.releaseDate, newCard.beneficiary, trx);               
              await transaction.wait();
              getCardsAddressesList();
          } catch (err) {
              err && setError(err.toString());
          }
      }
  }

  async function giveToCard(amount: number) {
      if(typeof window.ethereum !== 'undefined') {
          try {
              const trx = {
                  from: dappContextState.accounts[0],
                  to: dappContextState.currentCard?.address,
                  value: ethers.utils.parseEther(`${amount}`),
              }
              const transaction = await dappContextState.signer.sendTransaction(trx);               
              await transaction.wait();
              getCardsAddressesList();
          } catch (err) {
            console.log(err);
              err && setError(err.toString());
          }
      }
  }

  const hideEventData = () =>{
    dappContextDispatch({
      type: StateTypes.HIDE_EVENT,
    });
  }

  async function getCardData(cardAddress: Address) {
    if(typeof window.ethereum !== 'undefined') {
      try {
          const giftCardContract = new ethers.Contract(cardAddress, GiftCard.abi, dappContextState.provider);            
          const cardTitle = await giftCardContract.title();          
          const cardDescription = await giftCardContract.description();          
          const cardCreationDate = await giftCardContract.creationDate();          
          const cardGoal = await giftCardContract.requierementToBeReleased();          
          const cardCreator = await giftCardContract.getCreator();          
          const cardFunders = await giftCardContract.connect(dappContextState.signer)['getParticipants()']();         
          const cardBeneficiary = await giftCardContract.getBeneficiary();          
          const cardStatus = await giftCardContract.getStatus();          
          const cardReleaseDate = await giftCardContract.getDateToBeReleased(); 
          const newCardsDataList = dappContextState.cardsDataList;
          const cardCoinsAmount = await giftCardContract.provider.getBalance(cardAddress);
          const parsedEth = parseInt(cardCoinsAmount.toString()) / 10 ** 18;  
          const cardDAOAddress = await giftCardContract.getCardDAOAddress();          
          const newCardData = {
            address: cardAddress,
            contract: giftCardContract,
            title: cardTitle,
            description: cardDescription,
            creationDate: cardCreationDate,
            goal: cardGoal,
            creator: cardCreator,
            funders: cardFunders,
            beneficiary: cardBeneficiary,
            status: cardStatus,
            releaseDate: cardReleaseDate,
            coinsAmount: parsedEth,
            cardDAOAddress: cardDAOAddress,
          }     
          newCardsDataList?.push(newCardData)
          return newCardsDataList;
      } catch (err) {
        console.log("erreur", err);
          err && setError(err.toString());
      }
    }
  }

  async function getCardDAOData() {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard) {    
      try {   
          // const cardDAODataList: any[] = [];
          const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAO.abi, dappContextState.provider);            
          const currentProposal = await cardDAOContract.currentProposal();          
          const proposalBeneficiary = await cardDAOContract.proposalBeneficiary();          
          const lastProposals = await cardDAOContract.getProposals();           
          const newCardDAOData = {
            currentProposal: currentProposal,
            proposalBeneficiary: proposalBeneficiary,
            lastProposals: lastProposals,
          }    
          // cardDAODataList.push(newCardDAOData);     
          dappContextDispatch({
            type: StateTypes.UPDATE_CARD_DAO_DATA,
            payload: {...dappContextState, cardDAOData: newCardDAOData},
          });
      } catch (err) {
          console.log(err);
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

  useEffect(() => {
    if (dappContextState.giftFactoryContract) {
      try {
        dappContextState.giftFactoryContract.on("CardCreated", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "CardCreated",
            address: _address,
            amount: _amount / 10**18,
            timestamp: _timestamp,
          }
          if (lastEvent.address !== dappContextState.lastEvent?.address && lastEvent.timestamp !== dappContextState.lastEvent?.timestamp) {
            const displayEvent = true;
            dappContextDispatch({
              type: StateTypes.UPDATE,
              payload: { ...dappContextState, lastEvent, displayEvent }
            });
            getCardsAddressesList();
            !dappContextState.currentCard && setCurrentCardFromIndex(0); 
          }
        });
        dappContextState.currentCard?.contract.on("Participated", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "Participated",
            address: _address,
            amount: _amount / 10**18,
            timestamp: _timestamp,
          }
          if (lastEvent.address !== dappContextState.lastEvent?.address && lastEvent.timestamp !== dappContextState.lastEvent?.timestamp) {
            const displayEvent = true;
            dappContextDispatch({
              type: StateTypes.UPDATE,
              payload: { ...dappContextState, lastEvent, displayEvent }
            });
            getCardsAddressesList();
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dappContextState])

  useEffect(() => {
    dappContextState.currentCard && getCardDAOData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dappContextState.currentCard])
  

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
      hideEventData,
      getCardsAddressesList,
      getCardData,
      giveToCard,
      setCurrentCardFromIndex,
      setCurrentCardFromData,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      dappContextState,
    ]
  )

  return <DappContext.Provider value={contextValues}>{children}</DappContext.Provider>;
}

export default DAppContextProvider;