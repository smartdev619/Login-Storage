import { combineReducers } from "redux";
import registerStore from "./register";
import authStore from "./auth";

export const rootReducer = combineReducers({
    registerStore,
    authStore,
});
