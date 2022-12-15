import React from "react";
import Header from "../components/elements/header/Header"
import LandingPageVP from "../components/landingPage/LandingPageVP"
import Footer from "../components/elements/footer/Footer"
import { landingPageVPData } from "../components/landingPage";

function LandingPage() {

  const landingPageElementsList = landingPageVPData.map(elt => <LandingPageVP key={elt.title} title={elt.title} subTitle={elt.subTitle} img={elt.img} type={elt.type} btnTxt={elt.btnTxt} btnCss={elt.btnCss} />)

  return (
    <div className="w-full h-full flexJIC flex-col gap-3 font-poppinsRegular">
      <Header headerType="landingPage" />
      <div className="w-full flexJIC flex-col gap-20 md:gap-0">
        { landingPageElementsList }
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage