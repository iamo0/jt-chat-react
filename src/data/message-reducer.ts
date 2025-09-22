import { createSlice, createAsyncThunk, createAction, type PayloadAction } from "@reduxjs/toolkit";
import type Message from "../types/message";

export type MessageStoreData = {
  messages: Message[],
} & ({
  storeState: "failed",
  errorMessage: string,
} | {
  storeState: "idle" | "pending",
  errorMessage: null,
});

const deleteMessage = createAction<{ id: number }>("messages/delete");

const createMessage = createAsyncThunk(
  "messages/createNewMessage",
  async function({ text }: { text: string }) {
    await new Promise((res) => setTimeout(res, 3000));

    if (Math.random() < 0.1) {
      return "Some error";
    }

    return {
      text,
      author: "me",
      date: Date.now(),
    } as Message;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    storeState: "idle",
    errorMessage: null,
  } as MessageStoreData,
  reducers: {
    delete: function(state: MessageStoreData, action: PayloadAction<{ id: number }>) {
      state.messages.splice(action.payload.id, 1);
    }
  },
  extraReducers: function (builder) {
    builder
      .addCase(createMessage.pending, function (state: MessageStoreData) {
        state.storeState = "pending";
        state.errorMessage = null;
      })
      .addCase(createMessage.rejected, function (state: MessageStoreData, action) {
        state.storeState = "failed";
        state.errorMessage = action.payload as string;
      })
      .addCase(createMessage.fulfilled, function(state: MessageStoreData, action) {
        state.storeState = "idle";
        state.errorMessage = null;
        state.messages.push(action.payload as Message);
      })
  }
});


export default messagesSlice.reducer;
export { createMessage, deleteMessage };
