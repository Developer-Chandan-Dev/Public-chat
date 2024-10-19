import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  activeConversation: false,
  setActiveConversation: (activeConversation) => set({ activeConversation }),
}));

export default useConversation;
