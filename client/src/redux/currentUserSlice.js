import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";
const user = window.localStorage.getItem("registeredUserLidl");

const initialState = {
  loggedUser: user ? JSON.parse(user) : null,
  mySocketId: null,
  error: "",
  tokenExpired: false,
};

const currentUSlicer = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    reduxLogout: (state, action) => {
      state.loggedUser = null;
    },
    reduxMakeTokenExpired: (state, action) => {
      state.tokenExpired = action.payload.value;
    },
    reduxRegisterUser: (state, action) => {
      const { id, email, name, picture, status } = action.payload;
      state.loggedUser = { id, name, email, picture, status };
    },
  },
});

export const { reduxLogout, reduxRegisterUser, reduxMakeTokenExpired } =
  currentUSlicer.actions;

export default currentUSlicer.reducer;
