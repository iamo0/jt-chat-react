import { createAction, createReducer } from "@reduxjs/toolkit";
import type Message from "../types/message";

const createMessage = createAction<{ text: string }>("CREATE");
const deleteMessage = createAction<{ id: number }>("DELETE");

const messageReducer = createReducer([], function (builder) {
  builder
    .addCase(createMessage, function (messages: Message[], action) {
      messages.push({
        text: action.payload.text,
        author: "me",
        date: Date.now(),
      });
    })
    .addCase(deleteMessage, function (messages: Message[], action) {
      messages.splice(action.payload.id, 1);
    });
});

export default messageReducer;
export { createMessage, deleteMessage };
