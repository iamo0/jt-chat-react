import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message-reducer";

const messageStore = configureStore({
  reducer: {
    messages: messageReducer,
  },
});

export default messageStore;
