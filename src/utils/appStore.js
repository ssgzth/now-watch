import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    menu: appSlice,
    search: searchSlice,
    videos: videoSlice,
    chat: chatSlice,
  },
});

export default appStore;
