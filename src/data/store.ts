import { configureStore } from "@reduxjs/toolkit";
import messageReducer, { type MessageStoreData } from "./message-reducer";
import userReducer from "./user-reducer";

export interface StoreState {
  messageLayer: MessageStoreData,
  userLayer: never,
}

const messageStore = configureStore({
  reducer: {
    messageLayer: messageReducer,
    userLayer: userReducer,
  },
});

export default messageStore;
