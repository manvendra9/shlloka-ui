import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import commonReducer from "./common/reducer";


export const rootReducer = combineReducers({
    userReducer,
    commonReducer
});