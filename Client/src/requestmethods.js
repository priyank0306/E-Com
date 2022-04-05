import axios from "axios";
require("dotenv").config();

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/";
// console.log(process.env.REACT_APP_BASE_URL);

// const { currentUser } = useSelector((state) => state.user);

const TOKEN =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
    ?.currentUser?.accessToken;
// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
