import React from "react";
import logo from "../../assets/images/svg/logo.svg";

type LogoProps = {
  get css() : string,
}

const Logo: React.FC<LogoProps> = ({css = "w-20"}) => {

  return (
    <img src={logo} alt="logo" className={css}/>
  )
}

export default Logo