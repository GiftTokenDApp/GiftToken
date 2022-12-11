import React from 'react'
import { motion } from "framer-motion";
import { formatETHAddress } from '../../helpers/functionsHelpers';
import IGiftCardProps from './interface'
import css from "./giftCard.module.css";
import Logo from '../logo/Logo';
import { imgScr1, imgSrc2 } from './data';
import { useModalContext } from '../../contexts/ModalContext';
import { addressZero } from '../../helpers/dataHelpers';

const GiftCard: React.FC<IGiftCardProps> = (props) => {

  const { displayCardModal } = useModalContext()

  const cardCss = `w-[500px] h-80 bg-gtCardBg rounded-4xl absolute m-auto left-0 right-0 top-0 bottom-0 text-gtCardLightBLue shadow-2xl ${css.card}`;
  const cardChipGlare = `relative w-[70px] h-14 -mt-[63px] rounded-lg ${css.glare}`;
  const cardGTLogo = `w-24 float-right mr-5 -mt-12 ${css.model}`;

  const shortenedCardAddress = formatETHAddress(props.address ?? "");
  const shortenedBeneficiaryAddress = formatETHAddress(props.beneficiary ?? "");

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={cardCss} onClick={() => displayCardModal(props)}>
      <div className="w-[485px] pt-4 text-right">
        <div className='flex justify-end items-center'>
          <img className='w-12' src={imgScr1} alt="Un logo" />
        </div>
      </div>
      <div className="ml-12 mt-7">
          <img className='w-[70px]' src={imgSrc2} alt="Puce de la carte" />
          <div className={cardChipGlare}/>
      </div>
      <div className='ml-5 mt-5'>
        <div className="text-3xl">{shortenedCardAddress}</div>
        <div>
            <span>Déblocable à partir du : {props.releaseDate && props.releaseDate.toString() === '0' ? "date non définie" : props.releaseDate?.toString() }</span>
        </div>
        <div className="text-xl mt-5">©{props.beneficiary && props.beneficiary === addressZero ? "BÉNÉFICIAIRE NON DÉFINI" : shortenedBeneficiaryAddress }</div>
      </div>
      <div className={cardGTLogo}>
        <Logo css="" />
      </div>
    </motion.div>
  )
}

export default GiftCard