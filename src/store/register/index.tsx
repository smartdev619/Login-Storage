import { INIT, LOADING, SUCCESS, ERROR } from "../../utils/constants";
import { actionType } from "../../utils/types";
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR
} from "./actionTypes";


const initialState = {
  phase: INIT,
  users: [],
  error: null,
};

const registerStore = (state = initialState, action: actionType) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        users: action.payload,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        phase: ERROR,
      };
    default:
      return state;
  }
};

export const registerUser = (users: any) => ({
  type: REGISTER_USER_SUCCESS,
  payload: users,
});

export default registerStore;
