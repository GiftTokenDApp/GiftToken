import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CircleLoader from "../loader/CircleLoader";
import { IUserProps } from "./IUserProps";
import { useDappContext } from "../../contexts/DappContext";

const schema = yup.object({
    address: yup.string().min(42,"L'adresse doit faire caractères").max(42,"L'adresse doit faire caractères").trim().ensure().required("L'adresse est obligatoire"),
}).required()

type formProp = {
    func?: (contactName: string) => void,
}

interface IButtonState {
    hasSubmitted: boolean,
    btnTxt: string,
    displayLoader: boolean,
    optionsBtnCss: string,
    submitBtnCss: string,
}

interface IContactForm {
    address: string
}

const ChatContactForm: FC<formProp> = ({ func}) => {

    const [btnState, setBtnState] = useState<IButtonState>({} as IButtonState);

    const { dappContextState, getUser} = useDappContext();

    const cssLoader = "animate-spin h-7 w-7";
    const loaderCss = `${cssLoader} text-white`;

    const { register, handleSubmit, watch, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<IContactForm>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IContactForm) => handleFormSubmission(data);

    const handleFormSubmission = async (data: IContactForm): Promise<void> => {

        if(!btnState.hasSubmitted){
            const user: IUserProps | null = await getUser(watch("address"));
            console.log(user)
            if (user?.pseudo != null) {
                func && func(user.pseudo);
            }
        }        
    }

    useEffect(() => {
        init();
    }, []);
      
    const init = async() => {
        const submitBtnCss:string = "btnForm";

        setBtnState({
            hasSubmitted: btnState.displayLoader,
            btnTxt: "Changer de contact",
            displayLoader: btnState.displayLoader,
            optionsBtnCss: "w-64 h-14 p-4 bg-slate-500 text-xl text-white rounded-full cursor-pointer",
            submitBtnCss: btnState.displayLoader ? submitBtnCss: `${submitBtnCss} flexJIC`,
        });
    };

    return (
        <div className="w-full h-44 p-2 flex justify-center items-start gap-2">
            <form className="w-[90%] grid grid-cols-2 grid-rows-1 gap-6 items-center mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("address")} role="presentation" autoComplete="off" id="addressInput" placeholder="Addresse du contact" className="cardInput" />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className={btnState.submitBtnCss}>
                    { btnState.displayLoader ? <CircleLoader loaderCss={loaderCss} /> : btnState.btnTxt }
                </motion.button>
            </form>
        </div>
    );
};

export default ChatContactForm;