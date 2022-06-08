import { combineReducers } from "redux";
import RrbillReducer from "./rrbillReducer";
import RrReducer from "./rrReducer";
import ExpenseReducer from "./expenseReducer"
import ExpensebillReducer from "./expensebillReducer";
import OpdReducer from "./opdReducer";
import EmployeeReducer from "./employeeReducer";
import opdamountReducer from "./opdamountReducer";


const rootReducer=combineReducers({
    rrReducer:RrReducer,
    rrbillReducer:RrbillReducer,
    expenseReducer:ExpenseReducer,
    expensebillReducer:ExpensebillReducer,
    opdReducer:OpdReducer,
    employeeReducer:EmployeeReducer,
    OpdamountReducer:opdamountReducer

})


export default rootReducer;