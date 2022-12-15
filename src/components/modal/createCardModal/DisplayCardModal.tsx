import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../../elements/giftCard/giftCard.module.css";
import { formatETHAddress } from "../../../helpers/functionsHelpers";
import Logo from "../../elements/logo/Logo";
import { flip } from "./data";
import { DAOTypes, useDappContext } from "../../../contexts/DappContext";
import { addressZero } from "../../../helpers/dataHelpers";
import { Address } from "../../../helpers/typesHelpers";
import DisplayCardModalButton from "../../elements/buttons/displayCardModalButton/DisplayCardModalButton";
import CloseDAOButton from "../../elements/buttons/displayCardModalButton/CloseDAOButton";
import UnlockCardForm from "../../elements/forms/UnlockCardForm";
import ChangeCardBeneficiaryForm from "../../elements/forms/ChangeCardBeneficiaryForm";
import FundCardForm from "../../elements/forms/FundCardForm";

type ModalProps = {
  handleClose : () => void,
}

enum modalMode {
  MODAL_MENU,
  DAO_MENU,
  FUND,
  DAO_UNLOCK,
  DAO_SWITCH
}

const Modal: FC<ModalProps> = ({ handleClose }) => {

    const { dappContextState, giveToCard, hideEventData, setNewDAOProposal, setDAOVote, releaseAllToCurrent, endDAO } = useDappContext();
    const [cardMode, setCardMode] = useState(modalMode.MODAL_MENU);
    const [daoType, setDaoType] = useState<DAOTypes | null>(null);    
    const [hasSubmittedVote, setHasSubmittedVote] = useState(false);

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[600px] flex items-center justify-between flex-col gap-6 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`;
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${css.model}`;
    const btnCss = 'btnForm';

    const shortenedCardAddress = formatETHAddress(dappContextState?.currentCard?.address ?? "");
    const shortenedCreatorAddress = formatETHAddress(dappContextState?.currentCard?.creator ?? "");
    const shortenedFoundersAddresses = dappContextState?.currentCard?.funders?.map((addr, index) => index === 0 ? formatETHAddress(addr) : ` ${formatETHAddress(addr)}`);
    const shortenedBeneficiaryAddress = formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "") ? `Elle est pour ${formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "")}` : "Pas de bénéficiaire désigné";  
    const isBeneficiary = dappContextState?.currentCard?.beneficiary?.toLowerCase() === dappContextState.currentAccount;

    const currentCoinsAmount = dappContextState?.currentCard?.coinsAmount && dappContextState?.currentCard?.coinsAmount <= 0 ? "Elle ne contient pas de fonds" : dappContextState?.currentCard?.coinsAmount && dappContextState?.currentCard?.coinsAmount < 2 ? `Elle contient ${dappContextState?.currentCard?.coinsAmount} ether` : `Elle contient ${dappContextState?.currentCard?.coinsAmount} ethers`;

    const fund = (amountToSend: number) => {
      giveToCard(amountToSend);      
    }

    const setDAO = ( daoType: DAOTypes, beneficiary: Address | null, description: string) => {
      setNewDAOProposal(daoType, beneficiary, description);   
    }

    const setVote = ( vote: boolean) => {
      setHasSubmittedVote(true);
      setDAOVote(vote);   
    }

    const closeDAO = () => {
      setHasSubmittedVote(true);
      endDAO();   
    }

    const showChangeBeneficiaryMenu = (daoType: DAOTypes) => {
      setCardMode(modalMode.DAO_SWITCH);
      setDaoType(daoType);
    }
    
    const withdraw = async () => {
      if (dappContextState?.currentCard?.address != null) {
        await releaseAllToCurrent();
        handleClose();
      }
    }

    useEffect(() => {
      // const getVote = async() => {
      //   const vote = await getDAOVote();
      //   setUserVote(vote);
      // }
      // dappContextState && console.log(dappContextState.cardDAOData);
      // dappContextState && console.log("lastEvent",dappContextState.lastEvent);
      // dappContextState && console.log(dappContextState.cardDAOData?.currentProposal);
      // dappContextState && console.log(dappContextState.cardDAOData?.proposalBeneficiary);
      // console.log(dappContextState.displayEvent);
      // console.log(cardMode);
      // console.log("vote", getDAOVote());
      // getDAOVote();
      // getVote()
      // console.log("voteAAAA",dappContextState.cardDAOData?.currentProposalUserVote);
      // dappContextState.cardDAOData?.currentProposalUserVote?.toString() === "0" ? console.log("OUI") : console.log("non");
      // ;
      
      // console.log(dappContextState.currentCard?.cardDAOAddress);
      // console.log(dappContextState.cardDAOData?.currentProposal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dappContextState])  

    useEffect(() => {
        hideEventData();
        return () => {
          setDaoType(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={cardCss}
            variants={flip}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
           <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='absolute w-12 p-3 bg-slate-500 top-5 right-5 text-white rounded-full cursor-pointer' onClick={handleClose}>X</motion.button>
           <div className="flexJIC flex-col gap-6">
              <h2 className='text-3xl'>{ dappContextState?.currentCard?.title }</h2>
              <h3 className='text-2xl'>{ shortenedCardAddress }</h3>
              <p className='text-2xl'>{ dappContextState?.currentCard?.description }</p>
           </div>
            { cardMode === modalMode.MODAL_MENU && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl px-12'>
                  <span>{`Cette carte a été créée par ${ shortenedCreatorAddress }`}</span>
                  <span>{`Elle a été financée par ${ shortenedFoundersAddresses }`}</span>
                  <span>{ shortenedBeneficiaryAddress }</span>
                  <span>{ currentCoinsAmount }</span>
                </div>
                {
                  dappContextState.currentCard?.coinsAmount === 0 ? <div className="w-full flexJIC mb-12">
                    <span className="text-center text-3xl text-red-400">Cette carte a déjà été utilisée</span>
                  </div> : !isBeneficiary ? <div className="w-full flexJIC gap-16 mb-12">
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(modalMode.DAO_MENU)}>DAO</motion.button>
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(modalMode.FUND)}>Abonder la carte</motion.button>
                  </div> : <div className="w-full flexJIC flex-col gap-0 mb-12">
                    <div className="w-full flexJIC gap-16 mb-8">
                      <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(modalMode.DAO_MENU)}>DAO</motion.button>
                      <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(modalMode.FUND)}>Abonder la carte</motion.button>
                    </div>
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => withdraw()}>Retirer mes fonds</motion.button>
                  </div>
                }
              </>}
            { cardMode === modalMode.DAO_MENU && <>
                { !dappContextState.displayEvent ? <>
                    <div className='h-full w-full flex justify-center items-start flex-col mb-20 px-12 gap-6 text-xl'>
                      {
                        dappContextState.cardDAOData?.currentProposal[4] === 0 ? <div className="h-full w-full flex justify-start items-center flex-col gap-20 py-12 text-center">
                          <span className="text-2xl">Pas de DAO en cours</span>
                          <div className="w-full h-full flex justify-around items-center">
                            <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss}`} onClick={() => setCardMode(modalMode.DAO_UNLOCK)}>Proposer de débloquer la carte</motion.button>
                            {
                              dappContextState?.currentCard?.beneficiary === addressZero ? <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss}`} onClick={() => showChangeBeneficiaryMenu(DAOTypes.DECLARE_BENEFICIARY)}>Proposer un bénéficiaire</motion.button> :
                              <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss}`} onClick={() => showChangeBeneficiaryMenu(DAOTypes.CHANGE_BENEFICIARY)}>Proposer de changer le bénéficiaire</motion.button>
                            }
                          </div>
                        </div> : <div className="w-full flex justify-center items-start flex-col text-2xl gap-8">
                          {
                            dappContextState.cardDAOData?.currentProposal[4] === 1 && <>
                              <span>Une demande de déblocage anticipé a été formulée par : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[1]}</span></span>
                              <span>Voici le motif invoqué : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[5]}</span></span>
                            </>
                          }
                          {
                            dappContextState.cardDAOData?.currentProposal[4] === 2 && <>
                              <span>Une demande d'attribution de la carte à été formulée par : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[1]}</span></span>
                              <span>Voici le motif invoqué : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[5]}</span></span>
                              <span>Voici l'adresse proposée en tant que nouveau bénéficiaire : <span className="text-white">{dappContextState.cardDAOData?.proposalBeneficiary}</span></span>
                            </>
                          }
                          {
                            dappContextState.cardDAOData?.currentProposal[4] === 3 && <>
                              <span>Une demande de changement de bénéficiaire a été formulée par : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[1]}</span></span>
                              <span>Voici le motif invoqué : <span className="text-white">{dappContextState.cardDAOData?.currentProposal[5]}</span></span>
                              <span>Voici l'adresse proposée en tant que nouveau bénéficiaire : <span className="text-white">{dappContextState.cardDAOData?.proposalBeneficiary}</span></span>
                            </>
                          }
                          {
                            dappContextState.cardDAOData?.currentProposalUserVote === '0' ? <div className="w-full flexJIC gap-12">
                              <DisplayCardModalButton title="Voter contre" css="bg-red-400" vote={false} setVote={setVote} hasSubmittedVote={hasSubmittedVote} />
                              <DisplayCardModalButton title="Voter pour" css="bg-emerald-400" vote={true} setVote={setVote} hasSubmittedVote={hasSubmittedVote} />
                            </div> : 
                            dappContextState.cardDAOData?.currentProposal.proposalResult === 1 && dappContextState?.lastEvent?.name !== "PropositionClosed" ? <div className="w-full flexJIC gap-8 mt-4 text-3xl">
                              <span>Vous avez voté {dappContextState.cardDAOData?.currentProposalUserVote === '1' ? <span className="text-emerald-400">POUR</span>:<span className="text-red-400">CONTRE</span>}</span>
                              <CloseDAOButton title="Clôturer la DAO" css="bg-slate-500" closeDAO={closeDAO} hasSubmitted={hasSubmittedVote} />
                            </div> : <div className="w-full flexJIC gap-8 mt-4 text-3xl">
                              <span>La proposition a été {dappContextState.cardDAOData?.currentProposal[6] <= 3 ? <span className="text-emerald-400">ACCEPTÉE</span>:<span className="text-red-400">REJETÉE</span>}</span>
                            </div>
                          }
                        </div>
                      }
                    </div>
                  </> : <> 
                    { (dappContextState?.lastEvent?.name === "PropositionClosed" || dappContextState?.lastEvent?.name === "BeneficiaryChanged") ? <>
                        <div className="w-full h-full flexJIC mb-24 px-12 text-3xl text-center">
                          <span>La proposition a été {dappContextState.cardDAOData?.currentProposal[6] <= 3 ? <span className="text-emerald-400">ACCEPTÉE</span>:<span className="text-red-400">REJETÉE</span>}</span>
                        </div>
                      </> : <>
                        <div className='h-full flexJIC mb-24 px-12 text-3xl text-center'>
                            <h3>Votre choix a bien été enregistré</h3>
                        </div>
                      </>
                    }
                  </> }
              </> }
            { cardMode === modalMode.FUND && <>
                { !dappContextState.displayEvent ? <>
                    <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                    <span>{`Combien voulez-vous donner ?`}</span>
                    </div>
                    {
                      dappContextState.currentCard && <FundCardForm func={fund} />
                    }
                  </> : <>
                    <div className='flexJIC flex-col mb-52 gap-12 text-3xl text-center'>
                      <h3>La carte a bien été créditée de <span className="text-white">{ dappContextState.lastEvent?.amount }</span> eth</h3>
                    </div>
                  </> }          
              </> }
            { cardMode === modalMode.DAO_UNLOCK && <>
                { !dappContextState.displayEvent ? <>
                    <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                      <span>Pour quelle raison souhaitez-vous débloquer la carte de manière anticipée ?</span>
                    </div>
                    {
                      dappContextState.currentCard && <UnlockCardForm func={setDAO}/>
                    }
                  </> : <>
                    <div className='h-full flexJIC mb-24 px-12 text-3xl text-center'>
                      <h3>Votre proposition a bien été enregistrée et est désormais ouverte au vote</h3>
                    </div>
                  </> }
              </> }
            { cardMode === modalMode.DAO_SWITCH && <>
                { !dappContextState.displayEvent ? <>
                    <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                      <span>Qui souhaitez-vous proposer comme bénéficiaire de la carte ?</span>
                    </div>
                    {
                      dappContextState.currentCard && <ChangeCardBeneficiaryForm daoType={daoType} func={setDAO}/>
                    }
                  </> : <>
                    <div className='h-full flexJIC mb-24 px-12 text-3xl text-center'>
                      <h3>Votre proposition a bien été enregistrée et est désormais ouverte au vote</h3>
                    </div>
                  </> }          
              </> }
           <div className={cardGTLogo}>
              <Logo css="" />
            </div>
          </motion.div>
      </Backdrop>
    );
  };
  
  export default Modal;