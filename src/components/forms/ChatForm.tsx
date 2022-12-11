import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CircleLoader from "../loader/CircleLoader";
import { IUserProps } from "./IUserProps";

const schema = yup.object({
    address: yup.string().min(42,"L'adresse doit faire caractères").max(42,"L'adresse doit faire caractères").trim().ensure().required("L'adresse est obligatoire"),
}).required()

type formProp = {
    user: IUserProps | null
}

interface IButtonState {
    hasSubmitted: boolean,
    btnTxt: string,
    displayLoader: boolean,
    optionsBtnCss: string,
    submitBtnCss: string,
}

interface IChatForm {
    address: string
}

const ChatForm: FC<formProp> = ({ user }) => {

    const [btnState, setBtnState] = useState<IButtonState>({} as IButtonState);

    const cssLoader = "animate-spin h-7 w-7";
    const loaderCss = `${cssLoader} text-white`;

    const { register, handleSubmit, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<IChatForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IChatForm) => handleFormSubmission(data);

    const handleFormSubmission = async (data: IChatForm): Promise<void> => {
        if(!btnState.hasSubmitted){

        }        
    }

    useEffect(() => {
        init();
    }, [user]);
      
    const init = async() => {
        let submitBtnCss:string = "btnForm mt-4";
        submitBtnCss = btnState.displayLoader ? submitBtnCss: `${submitBtnCss} flexJIC`;
        let buttonLib: string = "";

        if (user != null) {
            buttonLib = "Mettre à jour";
            // setValue("pseudo", user.pseudo);
            // setValue("ipfsLink", user.ipfsLink);
        }
        else {
            buttonLib = "Créer";
            // setValue("pseudo", "");
            // setValue("ipfsLink", "");
        }

        setBtnState({
            hasSubmitted: btnState.displayLoader,
            btnTxt: buttonLib,
            displayLoader: btnState.displayLoader,
            optionsBtnCss: "w-64 h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
            submitBtnCss: submitBtnCss,
        });
    };

    return (
        <div className="w-full h-44 p-2 flex justify-center items-start gap-2">
            <form className="w-[90%] grid grid-cols-2 grid-rows-3 gap-6 items-center mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input disabled type="text" {...register("address")}  role="presentation" autoComplete="off" id="addressInput" placeholder="Addresse du contact" className="cardInput" />
                {
                    <motion.button disabled={true} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.optionsBtnCss}>Ajouter l'avatar</motion.button>
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
    );
};

export default ChatForm;