import React, { useState } from "react";
import chat from "../../assets/images/chat.png";
import ChatModal from '../chatModal/ChatModal';

type ChatProps = {
  get css() : string,
}

const Chat: React.FC<ChatProps> = ({css = "w-16"}) => {

  const [displayChatModal, setDisplayChatModal] = useState(false);

  const handleClick = () => {      
    setDisplayChatModal(true);
  }

  const handleCloseClick = (): void => {
    setDisplayChatModal(false);
};

  return (
    <>
      <button type="button" className={css} onClick={handleClick}>
        <img src={chat} alt="chat"/>
      </button>
      {displayChatModal && <ChatModal handleClose={handleCloseClick} />}
    </>
  )
}

export default Chat