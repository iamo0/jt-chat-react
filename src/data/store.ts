import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message-reducer";
import type Message from "../types/message";

export interface StoreState {
  messages: Message[],
}

const messageStore = configureStore({
  reducer: {
    messages: messageReducer,
  },
});

export default messageStore;
