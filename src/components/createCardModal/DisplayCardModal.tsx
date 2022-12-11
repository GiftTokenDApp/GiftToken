import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdropModal/ModalBackdrop";
import css from "../giftCard/giftCard.module.css";
import { formatETHAddress } from "../../helpers/functionsHelpers";
import Logo from "../logo/Logo";
import cssLogo from "../giftCard/giftCard.module.css";
import FundCardForm from "../forms/FundCardForm";
import { flip } from "./data";
import { DAOTypes, useDappContext } from "../../contexts/DappContext";
import { addressZero } from "../../helpers/dataHelpers";
import UnlockCardForm from "../forms/UnlockCardForm";
import ChangeCardBeneficiaryForm from "../forms/ChangeCardBeneficiaryForm";
import { Address } from "../../helpers/typesHelpers";
import DisplayCardModalButton from "../buttons/displayCardModalButton/DisplayCardModalButton";

type ModalProps = {
  handleClose : () => void,
}

const Modal: FC<ModalProps> = ({ handleClose }) => {

    const { dappContextState, giveToCard, hideEventData, setNewDAOProposal, setDAOVote } = useDappContext();
    const [cardMode, setCardMode] = useState(0);
    const [daoType, setDaoType] = useState<DAOTypes | null>(null);    
    const [hasSubmittedVote, setHasSubmittedVote] = useState(false);

    //width: clamp(50%, 700px, 90%)
    const cardCss = `w-[800px] h-[600px] flex items-center justify-between flex-col gap-6 relative ${css.card} m-auto px-0 py-8 rounded-3xl text-gtCardLightBLue`;
    const cardGTLogo = `w-24 absolute right-4 bottom-8 ${cssLogo.model}`;
    const btnCss = 'btnForm';

    const shortenedCardAddress = formatETHAddress(dappContextState?.currentCard?.address ?? "");
    const shortenedCreatorAddress = formatETHAddress(dappContextState?.currentCard?.creator ?? "");
    const shortenedFoundersAddresses = dappContextState?.currentCard?.funders?.map((addr, index) => index === 0 ? formatETHAddress(addr) : ` ${formatETHAddress(addr)}`);
    const shortenedBeneficiaryAddress = formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "") ? `Elle est pour ${formatETHAddress(dappContextState?.currentCard?.beneficiary ?? "")}` : "Pas de bénéficiaire désigné";  

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

    const showChangeBeneficiaryMenu = (daoType: DAOTypes) => {
      setCardMode(4)
      setDaoType(daoType)
    }
    
    useEffect(() => {
      // const getVote = async() => {
      //   const vote = await getDAOVote();
      //   setUserVote(vote);
      // }
      // dappContextState && console.log(dappContextState.cardDAOData);
      // dappContextState && console.log(dappContextState.lastEvent);
      // console.log(dappContextState.displayEvent);
      // console.log(cardMode);
      // console.log("vote", getDAOVote());
      // getDAOVote();
      // getVote()
      console.log("voteAAAA",dappContextState.cardDAOData?.currentProposalUserVote);
      
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
            {
              cardMode === 0 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl px-12'>
                  <span>{`Cette carte a été créée par ${ shortenedCreatorAddress }`}</span>
                  <span>{`Elle a été financée par ${ shortenedFoundersAddresses }`}</span>
                  <span>{ shortenedBeneficiaryAddress }</span>
                  <span>{ currentCoinsAmount }</span>
                </div>
                <div className="w-full flexJIC gap-16 mb-12">
                  <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(1)}>DAO</motion.button>
                  <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss} p-4`} onClick={() => setCardMode(2)}>Participer à la carte</motion.button>
                </div>
              </>
            }
            {
              !dappContextState.displayEvent && cardMode === 1 && <>
                <div className='h-full w-full flex justify-center items-start flex-col mb-20 px-12 gap-6 text-xl'>
                  {
                    dappContextState.cardDAOData?.currentProposal[4] === 0 ? <div className="h-full w-full flex justify-start items-center flex-col gap-20 py-12 text-center">
                      <span className="text-2xl">Pas de DAO en cours</span>
                      <div className="w-full h-full flex justify-around items-center">
                        <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`${btnCss}`} onClick={() => setCardMode(3)}>Proposer de débloquer la carte</motion.button>
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
                        dappContextState.cardDAOData?.currentProposalUserVote === 0 ? <div className="w-full flexJIC gap-12">
                          <DisplayCardModalButton title="Voter contre" css="bg-red-400" vote={false} setVote={setVote} hasSubmittedVote={hasSubmittedVote} />
                          <DisplayCardModalButton title="Voter pour" css="bg-emerald-400" vote={true} setVote={setVote} hasSubmittedVote={hasSubmittedVote} />
                        </div> : <div className="w-full flexJIC mt-4 text-3xl">
                          <span>Vous avez voté {dappContextState.cardDAOData?.currentProposalUserVote === 1 ? <span className="text-emerald-400">pour</span>:<span className="text-red-400">contre</span>}</span>
                        </div>
                      }
                    </div>
                  }
                </div>
              </>
            }
            {
              dappContextState.displayEvent && cardMode === 1 && <>
                <div className='h-full flexJIC mb-24 px-12 text-3xl text-center'>
                    <h3>Votre choix a bien été enregistré</h3>
                </div>
              </>
            }
            {
              !dappContextState.displayEvent && cardMode === 2 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Combien voulez-vous donner ?`}</span>
                </div>
                {
                  dappContextState.currentCard && <FundCardForm func={fund} />
                }
              </>
            }
            {
              dappContextState.displayEvent && cardMode === 2 && <>
                <div className='flexJIC flex-col mb-52 gap-12 text-3xl text-center'>
                  <h3>La carte a bien été créditée de <span className="text-white">{ dappContextState.lastEvent?.amount }</span> eth</h3>
                </div>
              </>
            }
            {
              !dappContextState.displayEvent && cardMode === 3 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Pour quelle raison souhaitez-vous débloquer la carte de manière anticipée ?`}</span>
                </div>
                {
                  dappContextState.currentCard && <UnlockCardForm func={setDAO}/>
                }
              </>
            }
            {
              !dappContextState.displayEvent && cardMode === 4 && <>
                <div className='flex justify-center items-start flex-col gap-6 text-xl'>
                  <span>{`Qui souhaitez-vous proposer comme bénéficiaire de la carte ?`}</span>
                </div>
                {
                  dappContextState.currentCard && <ChangeCardBeneficiaryForm daoType={daoType} func={setDAO}/>
                }
              </>
            }
            {
              dappContextState.displayEvent && (cardMode === 3 || cardMode === 4) && <>
                <div className='h-full flexJIC mb-24 px-12 text-3xl text-center'>
                    <h3>Votre proposition a bien été enregistrée et est désormais ouverte au vote</h3>
                </div>
              </>
            }
           <div className={cardGTLogo}>
              <Logo css="" />
            </div>
          </motion.div>
      </Backdrop>
    );
  };
  
  export default Modal;