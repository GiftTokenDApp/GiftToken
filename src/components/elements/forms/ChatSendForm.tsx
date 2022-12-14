import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IChatContactProps } from "./IChatContactProps";
import { useDappContext } from "../../../contexts/DappContext";
import CircleLoader from "../loader/CircleLoader";

const schema = yup.object({
    message: yup.string().min(5,"Le message doit faire au moins 5 caractères").max(255,"Le message ne doit pas faire plus de 255 caractères").trim().ensure().required("L'adresse est obligatoire"),
}).required()

type formProp = {
    contact: IChatContactProps
}

interface IButtonState {
    hasSubmitted: boolean,
    btnTxt: string,
    displayLoader: boolean,
    optionsBtnCss: string,
    submitBtnCss: string,
}

interface IChatSendForm {
    message: string
}

const ChatSendForm: FC<formProp> = ({ contact }) => {

    const [btnState, setBtnState] = useState<IButtonState>({} as IButtonState);

    const cssLoader = "animate-spin h-7 w-7";
    const loaderCss = `${cssLoader} text-white`;

    const { dappContextState, sendMessage } = useDappContext();

    const { register, handleSubmit, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<IChatSendForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IChatSendForm) => handleFormSubmission(data);

    const handleFormSubmission = async (data: IChatSendForm): Promise<void> => {

        if(!btnState.hasSubmitted && data.message != null && data.message !== ''){
            await sendMessage(contact.address, data.message);
        }        
    }

    useEffect(() => {
        init();
    }, []);
      
    const init = async() => {
        const submitBtnCss:string = "btnForm";
        
        setBtnState({
            hasSubmitted: btnState.displayLoader,
            btnTxt: "Envoyer",
            displayLoader: btnState.displayLoader,
            optionsBtnCss: "w-48 h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
            submitBtnCss: btnState.displayLoader ? submitBtnCss: `${submitBtnCss} flexJIC`,
        });
    };

    return (
        <div className="w-full h-44 p-2 flex justify-center items-start gap-2">
            <div>
                <form className="w-[90%] grid grid-cols-3 grid-rows-1 gap-6 items-center mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("message")} role="presentation" autoComplete="off" id="messageInput" placeholder="Ecrire un message..." className="col-span-2 block p-2.5 w-[90%] mx-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.submitBtnCss}>
                        { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default ChatSendForm;