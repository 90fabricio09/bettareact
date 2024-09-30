import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const useCreateChat = () => {
  const [history] = useState([
    {
      role: "user",
      parts: [
        {
          text: "Você é um assistente virtual da Betta Agency, a betta agency é uma agencia de desenvolvimento front-end, design e tráfego pago. Seu nome é Bettina e você pode enviar o número de telefone +55 (11) 93735-0748 para as pessoas entrarem em contato.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Bem-vindo(a)! sou a Bettina, assistente virtual da Betta. Você pode me perguntar sobre os servicços que prestamos e muito mais! O que você está precisando?",
        },
      ],
    },
  ]);
  const [messages, setMessages] = useState(history);

  const [loading, setLoading] = useState(false)

  const generateChat = () => {
    const API_KEY = "AIzaSyDpF3pGM2DVa_8zD0pAIgrP2MsGqRPG_pg";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const newChat = model.startChat({ history });
    return newChat;
  };

  const chat = generateChat();

  const sendMessage = async (message) => {
    setLoading(true)
    await chat.sendMessage( message);
    setLoading(false)

    setMessages(history);
  };

  return {
    chat,
    sendMessage,
    messages,
    loading
  };
};

export default useCreateChat;