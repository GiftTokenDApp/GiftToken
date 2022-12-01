import React, { FC, useEffect } from "react"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import IGiftCardProps from "../giftCard/interface";

const schema = yup.object({
    amount: yup.number().min(0.1,"Vous devez donner au moins 0.1 ether").required("Vous ne pouvez pas ne rien donner"),
  }).required()

  type formProp = {
    func?: (card: IGiftCardProps) => void,
    currentCard: IGiftCardProps,
  }

  type UserSubmitForm = {
    amount: number
  };
  

const UintForm: FC<formProp> = ({ func, currentCard }) => {

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data: UserSubmitForm) => handleFormSubmission(data)
    
    const handleFormSubmission = (data: UserSubmitForm) => {
        const newCardData = {...currentCard};
        if (newCardData?.coinsAmount !== null) {           
            newCardData.coinsAmount += data.amount;
            func && func(newCardData)   
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
        setFocus("amount");
    }, [setFocus])

    return (
        <div className="w-[25.5rem] h-44 p-2 flex justify-start items-center flex-col gap-6 mb-4">
            <form className="w-full flexJIC flex-col gap-2 mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("amount")}  role="presentation" autoComplete="off" id="amountInput" placeholder="Valeur" className="w-36 px-3 py-2 mb-3 text-lg rounded-3xl outline-none shadow-xl font-semibold text-neutral-600" />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className='w-44 p-4 bg-slate-500 text-white rounded-full cursor-pointer'>Donner</motion.button>
            </form>
            {
                errors.amount?.message && <>
                    <span className="w-full h-12 mb-2 flexJIC text-center">
                        <p className="w-full text-xl text-red-500">{errors.amount?.message && "Vous devez entrer un nombre supérieur à 0"}</p>
                    </span>
                </>
            }
        </div>
    )
}

export default UintForm