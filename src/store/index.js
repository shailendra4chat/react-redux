import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const myAppStore = createStore(reducers, {}, applyMiddleware(thunk));

export default myAppStore;