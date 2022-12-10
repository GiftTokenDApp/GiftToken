import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorSpan from "../forms/errorSpan/ErrorSpan";
import CircleLoader from "../loader/CircleLoader";
import { IUserProps } from "../forms/IUserProps";

const schema = yup.object({
    pseudo: yup.string().min(5,"Le pseudo doit faire au moins 5 caractères").max(30,"Le pseudo ne peut pas faire plus de 30 caractères").trim().ensure().required("Un pseudo est obligatoire"),
}).required()

type formProp = {
    user: IUserProps | null,
    func?: (card: IUserProps) => void,
}

interface IButtonState {
    hasSubmitted: boolean,
    btnTxt: string,
    displayLoader: boolean,
    optionsBtnCss: string,
    submitBtnCss: string,
}

const AccountForm: FC<formProp> = ({ user, func }) => {

    const [btnState, setBtnState] = useState<IButtonState>({} as IButtonState);

    const cssLoader = "animate-spin h-7 w-7";
    const loaderCss = `${cssLoader} text-white`;

    const { register, handleSubmit, setValue, formState: { errors, touchedFields, dirtyFields } } = useForm<IUserProps>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IUserProps) => handleFormSubmission(data);

    const handleFormSubmission = async (data: IUserProps): Promise<void> => {
        if(!btnState.hasSubmitted){
            func && func(data);
            await init();
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
            setValue("pseudo", user.pseudo);
            setValue("ipfsLink", user.ipfsLink);
        }
        else {
            buttonLib = "Créer";
            setValue("pseudo", "");
            setValue("ipfsLink", "");
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
                <input type="text" {...register("pseudo")}  role="presentation" autoComplete="off" id="pseudoInput" placeholder="Pseudo" className="cardInput" />
                {
                    touchedFields.pseudo && dirtyFields.pseudo && errors.pseudo?.message ? <ErrorSpan errorMsg={errors.pseudo?.message} /> : <div className="w-full"></div>
                }
                <input disabled type="text" {...register("ipfsLink")}  role="presentation" autoComplete="off" id="ipfsInput" placeholder="Lien IPFS de l'avatar" className="cardInput" />
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

export default AccountForm;