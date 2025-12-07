import { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { ChatMessage } from '../types';
import { ScreenType } from '../constants';
import { getAssistantResponse } from '../utils/chatAssistant';

const INITIAL_MESSAGE: ChatMessage = {
  id: '1',
  text: 'Merhaba! Ben TarasMobil asistanınım. Size uygulamada navigasyon yapmanıza ve sorularınızı yanıtlamaya yardımcı olmak için buradayım. Ne yapabilirim?',
  sender: 'assistant',
  timestamp: new Date(),
};

export const useChat = (setScreen: (screen: ScreenType) => void) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [chatInput, setChatInput] = useState('');
  const chatInputRef = useRef<TextInput>(null);

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');

    setTimeout(() => {
      chatInputRef.current?.focus();
    }, 100);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getAssistantResponse(userMessage.text, setScreen),
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 600);
  };

  return { messages, chatInput, chatInputRef, setChatInput, sendMessage };
};
