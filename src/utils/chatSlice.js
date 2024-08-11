import { createSlice } from "@reduxjs/toolkit";
import { LIVE_COMMENTS_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_COMMENTS_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;
