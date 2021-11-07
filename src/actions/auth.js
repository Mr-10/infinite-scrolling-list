import * as types from "./types";
import { incrementProgress, decrementProgress } from "./progress";
import history from "../history";

const userLogin = (username) => ({
  type: types.AUTH_LOGIN,
  username,
});

const userLogout = () => ({
  type: types.AUTH_LOGOUT,
});

const fakeLoginRequest = (username, password) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "foo" && password === "bar"
        ? resolve(username)
        : reject("No such user");
    }, 1000)
  );

export const login = (username, password) => async (dispatch) => {
  dispatch(incrementProgress());
  try {
    const userResponse = await fakeLoginRequest(username, password);
    dispatch(userLogin(userResponse));
    history.push("/home");
  } catch (error) {
    alert(error);
  } finally {
    dispatch(decrementProgress());
  }
};

export const logout = () => (dispatch) => {
  dispatch(userLogout());
};
