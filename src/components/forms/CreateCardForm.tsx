import React, { FC, useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorSpan from "./errorSpan/ErrorSpan";
import CircleLoader from "../loader/CircleLoader";
import { INewCardProps } from "./interface";
import { zeroAddress } from "../../helpers/dataHelpers";

const re = new RegExp(/0x[a-fA-F0-9]{40}/);

const schema = yup.object({
    title: yup.string().min(5,"Le titre doit faire au moins 5 caractères").max(30,"Le titre ne peut pas faire plus de 30 caractères").trim().ensure().required("Un titre est obligatoire"),
    description: yup.string().min(5,"La description doit faire au moins 5 caractères").max(100,"La description ne peut pas faire plus de 100 caractères").trim().ensure().required("Une description est obligatoire"),
    goal: yup.number(),
    releaseDate: yup.number().required("Si la carte peut être débloquée directement après la création, écrire 0"),
    beneficiary: yup.string().length(42,"L'adresse doit être de 42 caractères").matches(re,"Le format 0x doit être utilisé").trim().ensure().required("Il faut renseigner un bénéficiaire (l'adresse 0 si aucun n'est défini)"),
    amount: yup.number().min(0.001,"Vous devez donner au moins 0.001 ether").required("Vous ne pouvez pas ne rien donner"),
  }).required()

  type formProp = {
    func?: (card: INewCardProps) => void,
  }
  

const AddCardForm: FC<formProp> = ({ func }) => {

    const { register, handleSubmit, setFocus, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<INewCardProps>({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data: INewCardProps) => handleFormSubmission(data)
    
    const [btnState, setBtnState] = useState({ 
        hasSubmitted: false,
        btnTxt: "Créer la carte",
        displayLoader: false,
        optionsBtnCss: "w-64 h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
        submitBtnCss: "btnForm mt-4",
    })
    const cssLoader = "animate-spin h-7 w-7"
    const loaderCss = `${cssLoader} text-white`
    const handleClick = () => {
        btnState.displayLoader ? setBtnState({
            hasSubmitted: true,
            btnTxt: "Créer la carte",
            displayLoader: false,
            optionsBtnCss: btnState.optionsBtnCss,
            submitBtnCss: btnState.submitBtnCss,
        }) : setBtnState({
            hasSubmitted: true,
            btnTxt: "",
            displayLoader: true,
            optionsBtnCss: btnState.optionsBtnCss,
            submitBtnCss: `${btnState.submitBtnCss} flexJIC`,
        })
    }

    const handleFormSubmission = (data: INewCardProps) => {
        if(!btnState.hasSubmitted){
            handleClick()
            func && func(data)   
        }        
    }

    // const handleFormSubmission = async (data) => {
    //     const trimmedData = data.idInput.toString().trim();
    //     let returnValue;
    //     try {
    //         if(elt.func.mode === "send"){
    //             // !errors.idInput?.message && await contract.methods[elt.func.name](trimmedData).send({ from: accounts[0] });
    //             returnValue = !errors.idInput?.message && await contract.methods[elt.func.name](trimmedData ?? trimmedData).send({ from: accounts[0] });
    //         } else {
    //             // await contract.methods[elt.func.name](trimmedData ?? trimmedData).call({ from: accounts[0] });   
    //             returnValue = !errors.idInput?.message && await contract.methods[elt.func.name](trimmedData ?? trimmedData).call({ from: accounts[0] });   
    //             switch (elt.func.name) {
    //                 case solidityFunctionsList.voter.getOneProposal:
    //                     const proposalInformations = `Proposal n°${trimmedData} -> ${returnValue.description} : ${returnValue.voteCount} votes`;
    //                     updateVotingScreen(proposalInformations, true)
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         }
    //         // returnValue && console.log(returnValue);   
    //     } catch (error) {
    //         switch (elt.func.name) {
    //             case solidityFunctionsList.voter.getOneProposal:
    //                 updateVotingScreen("Invalid id or proposals list empty", false);
    //                 break;
    //             case solidityFunctionsList.voter.setVote:
    //                 updateVotingScreen("Invalid id or already voted", false);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    //     idInputRef.current.value = "";
    //     idInputRef.current.focus();
    // }

    useEffect(() => {
        touchedFields.title && errors.title?.message ? setFocus("title") : touchedFields.description && errors.description?.message ? setFocus("description") : touchedFields.goal && errors.goal?.message ? setFocus("goal") : touchedFields.releaseDate && errors.releaseDate?.message ? setFocus("releaseDate") : touchedFields.beneficiary && errors.beneficiary?.message ? setFocus("beneficiary") : touchedFields.amount && errors.amount?.message && setFocus("amount");
    }, [errors.amount?.message, errors.beneficiary?.message, errors.description?.message, errors.goal?.message, errors.releaseDate?.message, errors.title?.message, setFocus, touchedFields.amount, touchedFields.beneficiary, touchedFields.description, touchedFields.goal, touchedFields.releaseDate, touchedFields.title])

    useEffect(() => {
        setFocus("title");
    }, [setFocus])

    return (
        <div className="w-full h-44 p-2 flex justify-center items-start gap-2">
            {/* <form className="w-[90%] grid grid-cols-2 grid-rows-9 gap-6 items-center mt-3" onSubmit={handleSubmit(onSubmit)}> */}
            <form className="w-[90%] grid grid-cols-2 grid-rows-9 gap-6 items-center mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")}  role="presentation" autoComplete="off" id="titleInput" placeholder="Titre" className="cardInput" />
                {
                    touchedFields.title && dirtyFields.title && errors.title?.message ? <ErrorSpan errorMsg={errors.title?.message} /> : <div className="w-full"></div>
                }
                <input type="text" {...register("goal")}  role="presentation" autoComplete="off" id="goalInput" placeholder="Objectif financier à atteindre (eth)" className="cardInput" />
                {
                    touchedFields.goal && dirtyFields.goal && errors.goal?.message ? <ErrorSpan errorMsg="Vous devez indiquer une somme à atteindre pour débloquer les fonds (écrire 0 si pas d'objectif)" /> : <div className="w-full flexJIC"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss} onClick={() => setValue("goal", 0)}>Pas d'objectif fixé</motion.button></div>
                }
                <input type="text" {...register("releaseDate")}  role="presentation" autoComplete="off" id="releaseDateInput" placeholder="Date de déblocage" className="cardInput" />
                {
                    touchedFields.releaseDate && dirtyFields.releaseDate && errors.releaseDate?.message ? <ErrorSpan errorMsg="Vous devez indiquer une date de déblocage des fonds (écrire 0 s'il n'y en a pas)" /> : <div className="w-full flexJIC"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss} onClick={() => setValue("releaseDate", 0)}>Déblocage immédiat</motion.button></div>
                }
                <input type="text" {...register("beneficiary")}  role="presentation" autoComplete="off" id="beneficiaryInput" placeholder="Bénéficiaire" className="cardInput" />
                {
                    touchedFields.beneficiary && dirtyFields.beneficiary && errors.beneficiary?.message ? <ErrorSpan errorMsg={errors.beneficiary?.message} /> : <div className="w-full flexJIC"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss} onClick={() => setValue("beneficiary", zeroAddress)}>Bénéficiaire non défini</motion.button></div>
                }
                <input type="text" {...register("amount")}  role="presentation" autoComplete="off" id="amountInput" placeholder="Valeur" className="cardInput" />
                {
                    touchedFields.amount && dirtyFields.amount && errors.amount?.message ? <ErrorSpan errorMsg="Vous devez donner au moins 0.001 ether" /> : <div className="w-full flexJIC"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss} onClick={() => setValue("amount", 0.001)}>Valeur minimale</motion.button></div>
                }
                <input type="text" {...register("description")}  role="presentation" autoComplete="off" id="descriptionInput" placeholder="Description" className="cardInput" />
                {
                    touchedFields.description && dirtyFields.description && errors.description?.message ? <ErrorSpan errorMsg={errors.description?.message} /> : <div className="w-full"></div>
                }
                <div className="w-full flexJIC col-span-2">
                    {
                        errors ? <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.submitBtnCss}>
                            { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
                        </motion.button> : <div className="h-[4.75rem]"></div>
                    }
                </div>
            </form>
        </div>
    )
}

export default AddCardForm;