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


function App() {
  return (
    <div >
           <Router>
             <Routes>
                <Route exact path="/" element={<ClaimType />} />

                <Route path='/rr' element={<Rr />} />
                <Route path='/addrr' element={<AddRr />} />
                <Route path='/addrrbill' element={<AddRrbill />} />
                <Route path="/edit-rr/:id" element={<AddRr />} />
                <Route path="/edit-rrbill/:idd" element={<AddRrbill />} />

                <Route path='/expense' element={<Expense />} />
                <Route path='/addexpense' element={<AddExpense />} />
                <Route path='/addexpensebill' element={<AddExpensebill />} />

                <Route path='/opd' element={<Opd />} />
                
             </Routes>
           </Router>
    </div>
  );
}

export default App;
