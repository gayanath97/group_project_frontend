import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



import ClaimType from './screens/ClaimType';

import Rr from './screens/Rr'
import AddRr from './screens/AddRr';
import AddRrbill from './screens/AddRrbill';

import Expense from './screens/Expense';
import AddExpense from './screens/AddExpense';
import AddExpensebill from './screens/AddExpensebill'

import Opd from './screens/Opd';
import AddOpdbill from "./screens/AddOpdBill";

import Login from './screens/Login';
import Signup from './screens/Signup';
import Rrbill from './screens/Rrbill';
import Expensebill from './screens/Expensebill';
import Rrs from './screens/Rrs';
import Opds from './screens/Opds';
import Expenses from './screens/Expenses';
import Admin from './screens/Manager';
import Employees from './screens/Employees';
import Rrbills from './screens/Rrbills';
import Expensebills from './screens/Expensebills'
import Manager from './screens/Manager';


function App() {



  return (
    <div >
           <Router>
             <Routes>

                
                <Route exact path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route  path="/claimtype" element={<ClaimType />} />

                <Route path='/rr' element={<Rr />} />
                <Route path='/addrr' element={<AddRr />} />
                <Route path='/addrrbill' element={<AddRrbill />} />
                <Route path="/edit-rr/:id" element={<AddRr />} />
                <Route path="/edit-rrbill/:idd" element={<AddRrbill />} />
                <Route path="/rrbilldetails/" element={<Rrbill />} />

                <Route path='/expense' element={<Expense />} />
                <Route path='/addexpense' element={<AddExpense />} />
                <Route path='/addexpensebill' element={<AddExpensebill />} />
                <Route path="/edit-expense/:id" element={<AddExpense />} />
                <Route path="/edit-expensebill/:id" element={<AddExpensebill />} />
                <Route path='/expensebilldetails/' element={<Expensebill />} />

                <Route path='/opd' element={<Opd />} />
                <Route path='/addopd' element={<AddOpdbill />} />
                <Route path='/edit-opdbill/:id' element={<AddOpdbill />} />

                <Route path='/manager' element={<Manager />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/rrs' element={<Rrs />} />
                <Route path='/opds' element={<Opds />} />
                <Route path='/expenses' element={<Expenses />} />
                <Route path='/rrbills' element={<Rrbills />} />
                <Route path='/expensebills' element={<Expensebills />} />

                
             </Routes>
           </Router>
    </div>
  );
}

export default App;
