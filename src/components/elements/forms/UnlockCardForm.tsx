import React, { FC, useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { DAOTypes, useDappContext } from "../../../contexts/DappContext";
import { Address } from "../../../helpers/typesHelpers";
import CircleLoader from "../loader/CircleLoader";

const schema = yup.object({
    description: yup.string().min(5,"La description doit faire au moins 5 caractères").max(100,"La description ne peut pas faire plus de 100 caractères").trim().ensure().required("Une description est obligatoire"),
  }).required()

  type UserSubmitForm = {
    description: string
  };

  type formProp = {
    func?: (daoType: DAOTypes, beneficiary: Address | null, description: string) => void,
  }

const UnlockCardForm: FC<formProp> = ({ func }) => {

    const { setNewDAOProposal } = useDappContext();
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data: UserSubmitForm) => handleFormSubmission(data)

    const [btnState, setBtnState] = useState({ 
        hasSubmitted: false,
        btnTxt: "Demander le déblocage",
        displayLoader: false,
        optionsBtnCss: "w-64 h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
        submitBtnCss: "w-72 px-6 py-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer mt-4",
    })
    const cssLoader = "animate-spin h-7 w-7"
    const loaderCss = `${cssLoader} text-white`
    const handleClick = () => {
        btnState.displayLoader ? setBtnState({
            hasSubmitted: true,
            btnTxt: "Demander le déblocage",
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
        if(!btnState.hasSubmitted){
            handleClick()
            func && func(DAOTypes.UNLOCK, null, "Débloquer ma carte")
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
        setFocus("description");
    }, [setFocus])

    return (
        <div className="w-[34rem] p-2 flex justify-start items-center flex-col gap-8 mb-4">
            <form className="w-full flexJIC flex-col gap-10 mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("description")}  role="presentation" autoComplete="off" id="descriptionInput" placeholder="Motif de la demande" className="cardInput" />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.submitBtnCss}>
                    { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
                </motion.button>
            </form>
            {
                errors.description?.message ? <>
                    <span className="w-full h-12 flexJIC text-center">
                        <p className="w-full text-xl text-red-500">{errors.description?.message && "Une description entre 5 et 100 caractères est nécessaire"}</p>
                    </span>
                </> : <div className="w-full h-12"></div>
            }
        </div>
    )
}

export default UnlockCardForm;