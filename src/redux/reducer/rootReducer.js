import { combineReducers } from "redux";
import RrbillReducer from "./rrbillReducer";
import RrReducer from "./rrReducer";
import ExpenseReducer from "./expenseReducer"
import ExpensebillReducer from "./expensebillReducer";
import OpdReducer from "./opdReducer";


const rootReducer=combineReducers({
    rrReducer:RrReducer,
    rrbillReducer:RrbillReducer,
    expenseReducer:ExpenseReducer,
    expensebillReducer:ExpensebillReducer,
    opdReducer:OpdReducer


})


export default rootReducer;