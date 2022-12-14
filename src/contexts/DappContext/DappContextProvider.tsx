import React, { FC, useCallback, useMemo, useReducer, useEffect, useState } from "react"
import DappContext from "./DappContext";
import { IChildrenProps } from '../../helpers/interfacesHelpers';
import { initialState, reducer } from "./state";
import { ethers } from "ethers";
import { GiftFactory__factory as GiftFactoryContractFactory} from '../../typechain-types/factories/contracts/GiftFactory__factory';
import { GiftCard__factory as GiftCardContractFactory} from '../../typechain-types/factories/contracts/GiftCard__factory';
import { GiftDAO__factory as GiftDAOContractFactory} from '../../typechain-types/factories/contracts/GiftDAO__factory';
import { GiftNetwork__factory as GiftNetworkContractFactory} from '../../typechain-types/factories/contracts/GiftNetwork__factory';
import { GiftFactory as GiftFactoryContract} from '../../typechain-types/contracts/GiftFactory';
import { GiftNetwork as GiftNetworkContract} from '../../typechain-types/contracts/GiftNetwork';
import { DAOTypes, IDappContextProps, StateTypes } from "./interfaces";
import { Address } from "../../helpers/typesHelpers";
import IGiftCardProps from "../../components/elements/giftCard/interface";
import { MessageStructOutput } from "../../typechain-types/contracts/interfaces/IGiftNetwork";
import { INewCardProps } from "../../components/elements/forms/INewCardProps";
import { IUserProps } from "../../components/elements/forms/IUserProps";

let FactoryAddress: Address = process.env.REACT_APP_CONTRACT_ADDRESS ?? '';

const DAppContextProvider: FC<IChildrenProps> = ({ children }) => {
  const [dappContextState, dappContextDispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  async function getCardsAddressesList(call: string) {
    // console.log(call);
    if(typeof window.ethereum !== 'undefined' && dappContextState.giftFactoryContract != null && dappContextState.currentAccount != null) {      
      try {  
          const cardsAddressesList = await dappContextState.giftFactoryContract.connect(dappContextState.signer)['getLinks(address)'](dappContextState.currentAccount);
          const cardsDataList: IGiftCardProps[] = [];
          // for (let i = 0; i < cardsAddressesList.length; i++) {
          for (let i = cardsAddressesList.length - 1; i >= 0; i--) {
            const giftCardContract = new ethers.Contract(cardsAddressesList[i], GiftCardContractFactory.abi, dappContextState.provider);
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
            payload: { ...dappContextState, cardsAddressesList: cardsAddressesList, cardsDataList: cardsDataList },
          });
      } catch (err) {
        console.log(err);
        err && setError(err.toString());
      }
    }
  }  
  //   if(typeof window.ethereum !== 'undefined' && dappContextState.giftFactoryContract != null && dappContextState.currentAccount != null) {      
  //     try {  
  //         const cardsAddressesList = await dappContextState.giftFactoryContract.connect(dappContextState.signer)['getLinks(address)'](dappContextState.currentAccount);
  //         const cardsDataList: IGiftCardProps[] = [];
  //         for (let i = 0; i < cardsAddressesList.length; i++) {
  //           const giftCardContract = new ethers.Contract(cardsAddressesList[i], GiftCardContractFactory.abi, dappContextState.provider);
  //           const cardTitle = await giftCardContract.title();          
  //           const cardDescription = await giftCardContract.description();          
  //           const cardCreationDate = await giftCardContract.creationDate();          
  //           const cardGoal = await giftCardContract.requierementToBeReleased();
  //           const cardCreator = await giftCardContract.getCreator();          
  //           const cardFunders = await giftCardContract.connect(dappContextState.signer)['getParticipants()']();         
  //           const cardBeneficiary = await giftCardContract.getBeneficiary();          
  //           const cardStatus = await giftCardContract.getStatus();          
  //           const cardReleaseDate = await giftCardContract.getDateToBeReleased(); 
  //           const cardCoinsAmount = await giftCardContract.provider.getBalance(cardsAddressesList[i]);
  //           const parsedEth = parseInt(cardCoinsAmount.toString()) / 10 ** 18;
  //           const cardDAOAddress = await giftCardContract.getCardDAOAddress();         
  //           const newCardData = {
  //             address: cardsAddressesList[i],
  //             contract: giftCardContract,
  //             title: cardTitle,
  //             description: cardDescription,
  //             creationDate: cardCreationDate,
  //             goal: cardGoal,
  //             creator: cardCreator,
  //             funders: cardFunders,
  //             beneficiary: cardBeneficiary,
  //             status: cardStatus,
  //             releaseDate: cardReleaseDate,
  //             coinsAmount: parsedEth,
  //             cardDAOAddress: cardDAOAddress,
  //           }    
  //           cardsDataList.push(newCardData);
  //         }        
  //         dappContextDispatch({
  //           type: StateTypes.UPDATE_CARDS,
  //           payload: {...dappContextState, cardsAddressesList: cardsAddressesList, cardsDataList: cardsDataList},
  //         });
  //     } catch (err) {
  //         console.log(err);
  //         err && setError(err.toString());
  //     }
  //   }
  // }  
  
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
      if(typeof window.ethereum !== 'undefined' && dappContextState.giftFactoryContract != null && dappContextState.currentAccount != null) {
          try {
              const trx = {
                  from: dappContextState.currentAccount,
                  value: ethers.utils.parseEther(`${newCard.amount}`),
              }
              const transaction = await dappContextState.giftFactoryContract.connect(dappContextState.signer).createCard(newCard.title, newCard.description, newCard.goal, newCard.releaseDate, newCard.beneficiary, trx);               
              await transaction.wait();
              getCardsAddressesList("createCard");
          } catch (err) {
              err && setError(err.toString());
          }
      }
  }

  async function releaseAllToCurrent(): Promise<void> {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard != null) {
        try {
            const trx = {
                from: dappContextState.currentCard?.beneficiary,
            }
            const giftCardContract = new ethers.Contract(dappContextState.currentCard.address, GiftCardContractFactory.abi, dappContextState.provider);  
            const transaction = await giftCardContract.connect(dappContextState.signer).releaseAll(dappContextState.currentCard?.beneficiary, trx);               
            await transaction.wait();
            getCardsAddressesList("releaseAllToCurrent");
        } catch (err) {
            console.log(err);
            err && setError(err.toString());
        }
    }
  }

  async function giveToCard(amount: number) {
      if(typeof window.ethereum !== 'undefined') {
          try {
              const trx = {
                  from: dappContextState.currentAccount,
                  to: dappContextState.currentCard?.address,
                  value: ethers.utils.parseEther(`${amount}`),
              }
              const transaction = await dappContextState.signer.sendTransaction(trx);               
              await transaction.wait();
              getCardsAddressesList("giveToCard");
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
          const giftCardContract = new ethers.Contract(cardAddress, GiftCardContractFactory.abi, dappContextState.provider);            
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
        console.log(err);
        err && setError(err.toString());
      }
    }
  }

  async function getCardDAOData() {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard) {    
      try {   
          const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider);            
          const currentProposal = await cardDAOContract.currentProposal();          
          const proposalBeneficiary = await cardDAOContract.proposalBeneficiary();          
          const lastProposals = await cardDAOContract.getProposals();   
          const userVote = await cardDAOContract.getVote(dappContextState.currentAccount);
          const newCardDAOData = {
            currentProposal: currentProposal,
            proposalBeneficiary: proposalBeneficiary,
            lastProposals: lastProposals,
            currentProposalUserVote: userVote.toString(), 
          }    
 
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

  async function getUserExists(address: Address): Promise<boolean> {

    if (dappContextState.giftNetworkContract == null) {
        return false;
    }

    return await dappContextState.giftNetworkContract.getUserExists(address);
  } 

  async function getCurrentUserExists(): Promise<boolean> {

    if (dappContextState.currentAccount == null) {
      return false;
    }

    return await getUserExists(dappContextState.currentAccount);
  } 

  async function getUser(address: Address): Promise<IUserProps | null> {

    if (dappContextState.giftNetworkContract == null) {
        return {
          pseudo: "",
          ipfsLink: ""
        };
    }

    return await dappContextState.giftNetworkContract.getUser(address);
  } 

  async function getCurrentUser(): Promise<IUserProps | null> {

    if (dappContextState.currentAccount == null) {
      return null;
    }

    return await getUser(dappContextState.currentAccount);
  } 

  async function setCurrentUser(pseudo: string, ipfsLink: string): Promise<void> {

    if (dappContextState.giftNetworkContract == null || dappContextState.currentAccount == null) {
      return;
    }

    const trx = {
      from: dappContextState.currentAccount,
    };
    const transaction = await dappContextState.giftNetworkContract.connect(dappContextState.signer).setUser(pseudo, ipfsLink, trx);              
    await transaction.wait();
  }

  async function readMessage(anotherUserAddress:Address): Promise<MessageStructOutput[]> {

    if (dappContextState.giftNetworkContract == null || dappContextState.currentAccount == null) {
      return [];
    }

    const trx = {
      from: dappContextState.currentAccount,
    };
    return await dappContextState.giftNetworkContract.readMessage(anotherUserAddress, trx);              
  }

  async function sendMessage(to:Address, message: string): Promise<void> {

    if (dappContextState.giftNetworkContract == null || dappContextState.currentAccount == null) {
      return;
    }

    const trx = {
      from: dappContextState.currentAccount,
    };
    const transaction = await dappContextState.giftNetworkContract.connect(dappContextState.signer).sendMessage(to, message, trx);              
    await transaction.wait();
  }

  async function setNewDAOProposal(daoType: DAOTypes, beneficiary: Address, description: string) {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard) {    
      try {   
          const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider);       
          switch (daoType) {
            case DAOTypes.UNLOCK:
              await cardDAOContract.connect(dappContextState.signer).createOutpassedRequierementsProposal(description);     
              break;
            case DAOTypes.DECLARE_BENEFICIARY:                 
              await cardDAOContract.connect(dappContextState.signer).createDeclaredBeneficiaryProposal(beneficiary, description);       
              break;
            case DAOTypes.CHANGE_BENEFICIARY:    
              await cardDAOContract.connect(dappContextState.signer).changeBeneficiary(beneficiary, description);     
              break;
            default:
              return;
          }               
      } catch (err) {
          console.log(err);
          err && setError(err.toString());
      }
    }
  }  

  async function setDAOVote(vote: boolean) {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard) {    
      try {   
          const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider);       
          await cardDAOContract.connect(dappContextState.signer).vote(vote);                  
      } catch (err) {
          console.log(err);
          err && setError(err.toString());
      }
    }
  }  

  async function endDAO() {
    if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard) {    
      try {   
          const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider);       
          await cardDAOContract.connect(dappContextState.signer).determinateProposalResult();                  
      } catch (err) {
          console.log(err);
          err && setError(err.toString());
      }
    }
  }  

  // async function getDAOVote() {
  //   if(typeof window.ethereum !== 'undefined' && dappContextState.currentCard && dappContextState.currentAccount) {    
  //     try {   
  //         const cardDAOContract = new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider);       
  //         const userVote = await cardDAOContract.connect(dappContextState.signer).getVote(dappContextState.currentAccount);
  //         const proposal = await cardDAOContract.connect(dappContextState.signer).currentProposal();
  //         console.log("approuv??",proposal.approvedCount.toString());
  //         console.log("refus??",proposal.refusedCount.toString());
  //         if(userVote){
  //           return userVote.toString();    
  //         }       
  //     } catch (err) {
  //         console.log(err);
  //         err && setError(err.toString());
  //     }
  //   }
  // }  

  async function loadData(accounts: Address[] | null): Promise<void> {
    let currentAccount : Address | null = null;
    let provider;
    let giftFactoryContract: GiftFactoryContract | null = null;
    let signer;   
    let giftNetworkContract: GiftNetworkContract | null = null;
    try {
      if (accounts == null) {
        accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      }
      
      currentAccount = accounts != null && accounts.length ? accounts[0] : null;
      provider = new ethers.providers.Web3Provider(window.ethereum);
      giftFactoryContract = new ethers.Contract(FactoryAddress, GiftFactoryContractFactory.abi, provider) as GiftFactoryContract;    
      signer = provider.getSigner();   
      const networkAddress = await giftFactoryContract.getGiftNetwork();
      giftNetworkContract = new ethers.Contract(networkAddress, GiftNetworkContractFactory.abi, provider) as GiftNetworkContract; 
    } catch (err) {
      console.log(err);
      err && setError(err.toString());
    }

    dappContextDispatch({
      type: StateTypes.UPDATE,
      payload: { currentAccount, accounts, provider, giftFactoryContract, signer, giftNetworkContract }
    });
  }

  /**
   * This function is first called with the login function
   * It provides a listener on the account change event
   * It will rerender on each account change
   */
  const init = useCallback(    
    async () => {
      await loadData(null);

      window.ethereum.on('accountsChanged', async (newAccounts: Address[]) => {
        await loadData(newAccounts);
      });
    }, []);

  /**
     * This function is called on click over login button
     * It initialize the DApp
     */
  const login = useCallback(() => {
    const tryInit = async () => {
      try {
        init();
      } catch (err) {
        console.log(err);
        err && setError(err.toString());
      }
    };
    tryInit();
  }, [init])

  /**
   * This function is called whenever the main contract is changed
   * It will add listeners to blockchain events
   */
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
            getCardsAddressesList("CreateCardEvent");
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
            getCardsAddressesList("ParticipatedEvent");
          }
        });
        const cardDAOContract = dappContextState.currentCard?.cardDAOAddress ? new ethers.Contract(dappContextState.currentCard?.cardDAOAddress, GiftDAOContractFactory.abi, dappContextState.provider) : null;  
        cardDAOContract?.on("PropositionOpened", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "PropositionOpened",
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
            getCardsAddressesList("PropositionOpenedEvent");
          }
        }); 
        cardDAOContract?.on("ParticipantVoted", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "ParticipantVoted",
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
            getCardsAddressesList("ParticipantVotedEvent");
          }
        });
        cardDAOContract?.on("PropositionClosed", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "PropositionClosed",
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
            getCardsAddressesList("PropositionClosedEvent");
          }
        });
        cardDAOContract?.on("BeneficiaryChanged", (_address: string, _amount: number, _timestamp: number) => {
          const lastEvent = {
            name: "BeneficiaryChanged",
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
            getCardsAddressesList("BeneficiaryChangedEvent");
          }
        });
      } catch (err) {
        console.log(err);
        err && setError(err.toString());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dappContextState.giftFactoryContract, dappContextState.currentCard])

  /**
   * This useEffect triggers whenever the displayed card changes
   * It calls a blockchain reading on the whole cards list
   * to update the user's view with proper data
   */
  useEffect(() => {
    dappContextState.currentCard && getCardDAOData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dappContextState.currentCard])
  
  const contextValues: IDappContextProps = useMemo(
    () => ({
      dappContextState,
      dappContextDispatch,
      error,
      createCard,
      releaseAllToCurrent,
      hideEventData,
      getCardsAddressesList,
      getCardData,
      giveToCard,
      setCurrentCardFromIndex,
      setCurrentCardFromData,
      getCurrentUserExists,
      getUserExists,
      getCurrentUser,
      getUser,
      setCurrentUser,
      readMessage,
      sendMessage,
      setNewDAOProposal,
      setDAOVote,
      // getDAOVote,
      endDAO,
      login,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      dappContextState,
    ]
  )

  return <DappContext.Provider value={contextValues}>{children}</DappContext.Provider>;
}

export default DAppContextProvider;