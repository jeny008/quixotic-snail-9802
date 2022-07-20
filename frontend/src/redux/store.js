import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers/reducer"

const RootReducer=combineReducers({Products:reducer})
export const Store=legacy_createStore(RootReducer,applyMiddleware(thunk))