import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: localStorage.getItem("persist:root")
      ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
          ?.currentUser
      : null,
    isFetching: localStorage.getItem("persist:root")
      ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
          .isFetching
      : false,
    error: localStorage.getItem("persist:root")
      ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).error
      : false,
    registeredOrLogin: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      const { registeredOrLogin: registeredOrLoginData, ...currentUserData } = {
        ...action.payload,
      };
      state.currentUser = currentUserData;
      state.registeredOrLogin = registeredOrLoginData;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    errorFalse: (state) => {
      state.error = false;
    },
    resetRegisteredOrLogin: (state) => {
      state.registeredOrLogin = "";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  errorFalse,
  resetRegisteredOrLogin,
} = userSlice.actions;
export default userSlice.reducer;
