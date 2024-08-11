import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "menu",
  initialState: {
    menubtn: true,
  },
  reducers: {
    toggleBtn: (state) => {
      state.menubtn = !state.menubtn;
    },
    closeMenu: (state) => {
      state.menubtn = false;
    },
    openMenu: (state) => {
      state.menubtn = true;
    },
  },
});

export const { toggleBtn, closeMenu, openMenu } = appSlice.actions;
export default appSlice.reducer;
