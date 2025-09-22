import { createAction, createReducer } from "@reduxjs/toolkit";
import type Message from "../types/message";

const createMessage = createAction<{ text: string }>("CREATE_MESSAGE");
const deleteMessage = createAction<{ id: number }>("DELETE_MESSAGE");

export type MessageStoreData = {
  messages: Message[],
} & ({
  storeState: "failed",
  errorMessage: string,
} | {
  storeState: "idle" | "pending",
  errorMessage: null,
});

const messageReducer = createReducer({
  messages: [],
  storeState: "idle",
  errorMessage: null,
} as MessageStoreData, function (builder) {
  builder
    .addCase(createMessage, function (state: MessageStoreData, action) {
      state.messages.push({
        text: action.payload.text,
        author: "me",
        date: Date.now(),
      });
    })
    .addCase(deleteMessage, function (state: MessageStoreData, action) {
      state.messages.splice(action.payload.id, 1);
    });
});

export default messageReducer;
export { createMessage, deleteMessage };
