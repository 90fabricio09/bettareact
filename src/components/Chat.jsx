import { ChatBubbleOutline, SendOutlined } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import useCreateChat from "../hooks/useCreateChat";
import { SyncLoader } from "react-spinners";
import 'bootstrap-icons/font/bootstrap-icons.css';

import botImage from '../assets/bettina.jpg'
import userImage from '../assets/usuario.png'

const Chat = () => {
  const [chatOpened, setChatOpened] = useState(false);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const { sendMessage, messages, loading } = useCreateChat();

  const botName = 'Bettina'; 
  const userName = 'Você'; 

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div className="fixed right-0 w-full px-4 bottom-4 flex flex-col items-end gap-2">
      {chatOpened && (
        <div className="bg-light-white max-w-full h-72 md:h-96 w-full md:w-96 rounded flex flex-col overflow-auto relative justify-between shadow-2xl">
          <ul className="flex flex-col gap-2 pb-4 p-4 items-end">
            {messages &&
              messages.map((msg, index) => {
                if (index > 0) {
                  let styles = "rounded p-4 border flex items-start";

                  switch (msg.role) {
                    case "user":
                      styles += " bg-secondary-blue text-light-white border-secondary-blue";
                      return (
                        <li key={index} className={styles}>
                          <img src={userImage} alt="User" className="w-8 h-8 rounded-full mr-2" />
                          <div>
                            <strong>{userName}:</strong> {msg.parts[0].text}
                          </div>
                        </li>
                      );
                    case "model":
                      styles += " self-start";
                      return (
                        <li key={index} className={styles}>
                          <img src={botImage} alt="Betta" className="w-8 h-8 rounded-full mr-2" />
                          <div>
                            <strong>{botName}:</strong> {msg.parts[0].text}
                          </div>
                        </li>
                      );
                  }
                }
                return null;
              })}
            {loading && (
              <li className="flex justify-center w-full mt-4">
                <SyncLoader color="#0084ff"/>
              </li>
            )}
            <div ref={messagesEndRef} />
          </ul>

          <form
            onSubmit={handleSendMessage}
            className="p-4 w-full flex bg-light-white sticky bottom-0"
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Digite sua mensagem"
              className="flex-1 px-4 py-2 outline-none bg-transparent"
            />
            <button className="bg-secondary-blue p-2 text-light-white rounded hover:bg-hover-blue">
              <SendOutlined className="icon-blue" />
            </button>
          </form>
        </div>
      )}
      <div
        className="cursor-pointer w-8 flex justify-center items-center bg-secondary-blue text-center transition text-light-white px-6 py-3 rounded hover:bg-hover-blue font-bold"
        onClick={() => setChatOpened(!chatOpened)}
      >
        <ChatBubbleOutline className="icon-blue" />
      </div>
    </div>
  );
};

export default Chat;
