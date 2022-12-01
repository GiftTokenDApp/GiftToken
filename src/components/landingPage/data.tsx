import React from "react";
import ILandingPageVPProps from "./interface";
import VPimg1 from "../../assets/images/svg/VP1-Illustration.svg"
import VPimg1_md from "../../assets/images/svg/VP1-Illustration-md.svg"
import VPimg2 from "../../assets/images/svg/VP2-Illustration.svg"
import VPimg3 from "../../assets/images/svg/VP3-Illustration.svg"
import VPimg4 from "../../assets/images/svg/VP4-Illustration.png"
import VPimg4_md from "../../assets/images/svg/VP4-Illustration-md.png"
import VPimg4_lg from "../../assets/images/svg/VP4-Illustration-lg.png"

const VPIllustrations1 = {
    xs: <div className="h-[36vh] w-full flexJIC sm:h-[40vh] md:hidden">
            <img className="h-full w-full" src={VPimg1} alt="Une utilisatrice" />
        </div>,
    md : <div className="hidden w-full md:h-[40vh] md:flex md:justify-center md:items-center lg:h-[75vh]">
            <img className="h-full w-full" src={VPimg1_md} alt="Une utilisatrice" />
        </div>
}
const VPIllustrations2 = {
    xs: <div className="h-[45vh] w-full flexJIC md:hidden">
            <img className="h-full w-full" src={VPimg2} alt="Des amis utilisateurs" />
        </div>,
    md: <div className="hidden h-[55vh] w-full md:flex md:justify-center md:items-center lg:h-[65vh]">
            <img className="h-full w-full" src={VPimg2} alt="Des amis utilisateurs" />
        </div>
}
const VPIllustrations3 = {
    xs: <div className="h-[43vh] w-full flexJIC md:hidden">
            <img className="h-full w-full" src={VPimg3} alt="Un exemple de liste" />
        </div>,
    md: <div className="hidden h-[60vh] w-full md:flex md:justify-center md:items-center md:pt-12">
            <img className="h-full w-full" src={VPimg3} alt="Un exemple de liste" />
        </div>
}
const VPIllustrations4 = {
    xs: <img className="absolute h-[92vh] w-full top-12 z-10 sm:top-8 md:hidden" src={VPimg4} alt="Fond d'écran avec des formes" />,
    md: <div className="absolute flexJIC h-[60vh] w-full z-10 md:-top-6">
            <img className="hidden h-full w-[95%] rounded-3xl mt-32 md:block lg:hidden" src={VPimg4_md} alt="Fond d'écran avec des formes" />
        </div>,
    lg: <div className="absolute flexJIC h-[60vh] w-full z-10 md:-top-6">
            <img className="hidden h-full w-[95%] rounded-3xl mt-32 lg:block" src={VPimg4_lg} alt="Fond d'écran avec des formes" />
        </div>,
}


export const landingPageVPData: Array<ILandingPageVPProps> = [{
    title:'Votre créateur de liste de souhaits en ligne',
    subTitle:'Le meilleur moyen de trouver le cadeau idéal !',
    img: VPIllustrations1,
    type: "1",
    btnTxt: "Je me lance",
    btnCss: 'btnPurple',
}, {
    title:'Créez vos listes de souhaits et partagez-les !',
    subTitle:'C\'est facile et vous décidez qui peut les voir',
    img: VPIllustrations2,
    type: "2",
    btnTxt: "Je crée ma carte",
    btnCss: 'btnTurquoise',
}, {
    title:'Accèdez aux listes de vos amis',
    subTitle:'pour exaucer leurs souhaits',
    img: VPIllustrations3,
    type: "3",
    btnTxt: "J'abonde une carte",
    btnCss: 'btnTurquoise',
}, {
    title:'Fini les cadeaux qui ne vous intéressent pas',
    subTitle:'et le manque d\'idées pour faire plaisir',
    img: VPIllustrations4,
    type: "footer",
    btnTxt: "Me connecter",
    btnCss: 'btnTurquoise',
}]