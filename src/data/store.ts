import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message-reducer";
import type Message from "../types/message";
import userReducer from "./user-reducer";

export interface StoreState {
  messages: Message[],
}

const messageStore = configureStore({
  reducer: {
    messages: messageReducer,
    user: userReducer,
  },
});

export default messageStore;
