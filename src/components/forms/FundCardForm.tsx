import React, { FC, useEffect } from "react"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import IGiftCardProps from "../giftCard/interface";

const schema = yup.object({
    amount: yup.number().min(0.01,"Vous devez donner au moins 0.001 ether").required("Vous ne pouvez pas ne rien donner"),
  }).required()

  type formProp = {
    func?: (amountToSend: number) => void,
    currentCard: IGiftCardProps,
  }

  type UserSubmitForm = {
    amount: number
  };
  

const FundCardForm: FC<formProp> = ({ func, currentCard }) => {

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm<UserSubmitForm>({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data: UserSubmitForm) => handleFormSubmission(data)
    
    const handleFormSubmission = (data: UserSubmitForm) => {
        // const newCardData = {...currentCard};
        // if (newCardData?.coinsAmount !== null) {           
            // newCardData.coinsAmount += data.amount;
            // console.log(newCardData);
            func && func(data.amount)   
        // }
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
        <div className="w-[25.5rem] h-52 p-2 flex justify-start items-center flex-col gap-6 mb-4">
            <form className="w-full flexJIC flex-col gap-8 mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("amount")}  role="presentation" autoComplete="off" id="amountInput" placeholder="Valeur" className="cardInput" />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className='btnForm'>Donner</motion.button>
            </form>
            {
                errors.amount?.message && <>
                    <span className="w-full h-12 mb-2 flexJIC text-center">
                        {/* <p className="w-full text-xl text-red-500">{errors.amount?.message && "Vous devez entrer un nombre supérieur à 0"}</p> */}
                        <p className="w-full text-xl text-red-500">{errors.amount?.message && errors.amount?.message}</p>
                    </span>
                </>
            }
        </div>
    )
}

export default FundCardForm