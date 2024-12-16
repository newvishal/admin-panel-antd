import { combineReducers } from "redux";
import loginPageReducer from "../containers/LoginPage/reducer";

export default function createReducer(
    injectedReducers = {}
) {
    const rootReducer = combineReducers({
        login: loginPageReducer,
        ...injectedReducers
    });

    return rootReducer;
}