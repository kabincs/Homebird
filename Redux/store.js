import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeBirdShopping from "./reducer";
const rootReducer = combineReducers({ homeBirdShopping });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
