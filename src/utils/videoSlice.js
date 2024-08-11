import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    searchVideos: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.searchVideos = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;

export default videoSlice.reducer;
