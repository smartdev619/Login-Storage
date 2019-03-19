import { INIT, LOADING, SUCCESS, ERROR } from "../../utils/constants";
import { actionType, userType } from "../../utils/types";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "./actionTypes";


const initialState = {
  phase: INIT,
  user: null,
  error: null,
};

const authStore = (state = initialState, action: actionType) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        user: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        phase: ERROR,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export const loginUser = (user: userType) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export default authStore;
