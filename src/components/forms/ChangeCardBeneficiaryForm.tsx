import React, { FC, useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CircleLoader from "../loader/CircleLoader";
import { DAOTypes, useDappContext } from "../../contexts/DappContext";
import { Address } from "../../helpers/typesHelpers";
import { re } from "../../helpers/dataHelpers";
import ErrorSpan from "./errorSpan/ErrorSpan";

const schema = yup.object({
    description: yup.string().min(5,"La description doit faire au moins 5 caractères").max(100,"La description ne peut pas faire plus de 100 caractères").trim().ensure().required("Une description est obligatoire"),
    beneficiary: yup.string().length(42,"L'adresse doit être de 42 caractères").matches(re,"Le format 0x doit être utilisé").trim().ensure().required("Il faut renseigner un bénéficiaire (l'adresse 0 si aucun n'est défini)"),
  }).required()

  type formProp = {
    daoType: DAOTypes | null,
    func?: (daoType: DAOTypes, beneficiary: Address | null, description: string) => void,
  }

  type UserSubmitForm = {
    description: string,
    beneficiary: Address,
  };
  

const ChangeCardBeneficiaryForm: FC<formProp> = ({ daoType, func })  => {

    const { dappContextState, setNewDAOProposal } = useDappContext();
    const { register, handleSubmit, setFocus, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data: UserSubmitForm) => handleFormSubmission(data);

    const [btnState, setBtnState] = useState({ 
        hasSubmitted: false,
        btnTxt: "Proposer le changement",
        displayLoader: false,
        optionsBtnCss: "w-full h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
        submitBtnCss: "w-72 px-6 py-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer mt-4",
    })
    const cssLoader = "animate-spin h-7 w-7"
    const loaderCss = `${cssLoader} text-white`
    const handleClick = () => {
        btnState.displayLoader ? setBtnState({
            hasSubmitted: true,
            btnTxt: "Proposer le changement",
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
    
    const handleFormSubmission = (data: UserSubmitForm) => {
        if(!btnState.hasSubmitted && daoType){
            handleClick();
            func && func(daoType, data.beneficiary, data.description);
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
        touchedFields.beneficiary && errors.beneficiary?.message ? setFocus("beneficiary") : touchedFields.description && errors.description?.message && setFocus("description")
    }, [errors.description?.message, errors.beneficiary?.message, setFocus, touchedFields.description, touchedFields.beneficiary])


    useEffect(() => {
        setFocus("beneficiary");
    }, [setFocus])

    return (
        <div className="w-full h-72 p-2 flex justify-center items-start gap-2">
            <form className="w-[90%] h-full grid grid-cols-2 grid-rows-9 gap-x-12 gap-y-24 items-center mt-6" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("beneficiary")} role="presentation" autoComplete="off" id="beneficiaryInput" placeholder="Nouveau bénéficiaire" className="cardInput" />
                {
                    touchedFields.beneficiary && dirtyFields.beneficiary && errors.beneficiary?.message ? <ErrorSpan errorMsg={errors.beneficiary?.message} /> : <div className="w-full flexJIC"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss} onClick={() => setValue("beneficiary", dappContextState.accounts[0])}>Se proposer comme bénéficiaire</motion.button></div>
                }
                <input type="text" {...register("description")} role="presentation" autoComplete="off" id="descriptionInput" placeholder="Motif de la demande" className="cardInput" />
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

export default ChangeCardBeneficiaryForm;