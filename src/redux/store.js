
import {composeWithDevTools} from "redux-devtools-extension"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
 
export default Store;