import React from "react";
import SigninButton from "../buttons/signinbutton/SigninButton";
import ILandingPageVPProps from "./interface";

const LandingPageVP: React.FC<ILandingPageVPProps> = ({ title, subTitle, img, type, btnTxt, btnCss }) => {

    const mainVP = <div className="w-full h-[65vh] px-5 pb-5 mt-20 flexJIC flex-col gap-12 text-center text-lightBlack md:px-20 lg:flex-row-reverse lg:text-left">
        { img.md }
        <div className="flexJIC flex-col gap-4 lg:items-start">
            <h1 className="font-poppinsBold text-h1 md:text-h1-md">{title}</h1>
            <h3 className="text-h3 md:text-h3-md">{subTitle}</h3>
            { img.xs }
            <SigninButton title={btnTxt} css={btnCss} />
        </div>
    </div>
    const secondVP = <div className="w-full h-[100vh] px-5 pb-3 flexJIC flex-col gap-4 text-center text-lightBlack md:mt-20 md:px-20 lg:flex-row-reverse lg:mt-6 lg:text-left">
        <div className="flexJIC flex-col gap-4 lg:items-start">
            { img.xs }
            <h2 className="font-poppinsBold text-h2 sm:mt-12 md:text-h2-md">{title}</h2>
            <h3 className="text-h3 md:text-h3-md">{subTitle}</h3>
            <SigninButton title={btnTxt} css={btnCss} />
        </div>
        { img.md }
    </div>
    const thirdVP = <div className="w-full h-[100vh] px-5 -mt-24 flexJIC flex-col gap-4 text-center text-lightBlack sm:-mt-12 md:px-20 lg:flex-row lg:-mt-52 lg:text-left">
        <div className="flexJIC w-full flex-col gap-4 lg:items-start">
            { img.xs }
            <h2 className="font-poppinsBold text-h2 sm:mt-14 md:text-h2-md">{title}</h2>
            <h3 className="text-h3 md:text-h3-md">{subTitle}</h3>
            <SigninButton title={btnTxt} css={btnCss} />
        </div>
        { img.md }
    </div>
    const footerVP = <div className="relative h-[100vh] w-full -mt-10 md:mt-0 md:h-[70vh]">
        <div className="absolute w-full h-full px-5 pt-20 bottom-0 flexJIC flex-col gap-4 text-center text-white z-30 md:px-20 lg:px-96 lg:gap-8">
            <h2 className="font-poppinsBold text-h2 -mt-32 md:text-h1-md">{title}</h2>
            <h3 className="text-h3 md:text-h3-md">{subTitle}</h3>
            <SigninButton title={btnTxt} css={btnCss} />
        </div>
        { img.xs }
        { img.md }
        { img.lg }
    </div>

    return (
        <div className="w-full flexJIC flex-col">
            {
                type === "1" && mainVP
            }
            {
                type === "2" && secondVP
            }
            {
                type === "3" && thirdVP
            }
            {
                type === "footer" && footerVP
            }
        </div>
    )
};

export default LandingPageVP;