import React, { useEffect, useState } from "react";
import Chat from "../chat/Chat";
import { useDappContext } from "../../../contexts/DappContext";

const Footer = () => {

  const { dappContextState, getCurrentUserExists } = useDappContext();
  const [accountExists, setAccountExists] = useState(false);

  useEffect(() => {
      init();
  }, []);

  const init = async() => {
      const userExists = await getCurrentUserExists();
      setAccountExists(userExists);
  };

  return (
    <footer className="w-full h-20 -mt-10 flexJIC flex-col gap-3 bg-white text-sm font-poppinsLight z-50 sm:-mt-14 md:h-10 md:flex-row md:justify-between md:px-12">
      <span className="cursor-pointer hover:underline">Termes et conditions</span>
      <span className="cursor-pointer hover:underline">Politique de confidentialité</span>
      {accountExists && <Chat css="w-14" />}
    </footer>
  )
}

export default Footer