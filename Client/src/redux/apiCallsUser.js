import { publicRequest } from "../requestmethods";
import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import "dotenv/config";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess({ ...data, registeredOrLogin: "login" }));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess({ ...data, registeredOrLogin: "registered" }));
  } catch (error) {
    dispatch(loginFailure());
  }
};
