import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ClaimType from "./screens/ClaimType";

import Rr from "./screens/Rr";
import AddRr from "./screens/AddRr";
import AddRrbill from "./screens/AddRrbill";

import Expense from "./screens/Expense";
import AddExpense from "./screens/AddExpense";
import AddExpensebill from "./screens/AddExpensebill";

import Opd from "./screens/Opd";
import AddOpdbill from "./screens/AddOpdBill";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Rrbill from "./screens/Rrbill";
import Expensebill from "./screens/Expensebill";
import Rrs from "./screens/Rrs";
import Opds from "./screens/Opds";
import Expenses from "./screens/Expenses";

import Employees from "./screens/Employees";
import Rrbills from "./screens/Rrbills";
import Expensebills from "./screens/Expensebills";
import Manager from "./screens/Manager";

import Admin from "./screens/Admin";
import RewardAmount from "./screens/RewardAmount";
import OpdAmount from "./screens/OpdAmount";
import AddReward from "./screens/AddReward";
import AddOpdAmount from "./screens/AddOpdAmount";

function App() {

  // const [isLoggedin, setIsLoggeIn] = useState(false);
 
  // useState(()=>{
    
  //   console.log(localStorage.getItem('userId'));
  //   if(localStorage.getItem('userId')=='' || localStorage.getItem('userId')==null){
  //     console.log('not');
  //     setIsLoggeIn(false)
  //   }else{
  //     console.log("logged");
  //     setIsLoggeIn(true)      
  //   }
   
  // },[])

  return (
    <div>
      <Router>
        
        <Routes>
          {/* {isLoggedin ? (
            <> */}
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/" element={<Login />} />
              <Route path="/claimtype" element={<ClaimType />} />

              <Route path="/rr" element={<Rr />} />
              <Route path="/addrr" element={<AddRr />} />
              <Route path="/addrrbill" element={<AddRrbill />} />
              <Route path="/edit-rr/:id" element={<AddRr />} />
              <Route path="/edit-rrbill/:idd" element={<AddRrbill />} />
              <Route path="/rrbilldetails/" element={<Rrbill />} />

              <Route path="/expense" element={<Expense />} />
              <Route path="/addexpense" element={<AddExpense />} />
              <Route path="/addexpensebill" element={<AddExpensebill />} />
              <Route path="/edit-expense/:id" element={<AddExpense />} />
              <Route path="/edit-expensebill/:id" element={<AddExpensebill />} />
              <Route path="/expensebilldetails/" element={<Expensebill />} />

              <Route path="/opd" element={<Opd />} />
              <Route path="/addopd" element={<AddOpdbill />} />
              <Route path="/edit-opdbill/:id" element={<AddOpdbill />} />

              <Route path="/manager" element={<Manager />} />
              <Route path="/rrs" element={<Rrs />} />
              <Route path="/opds" element={<Opds />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/rrbills" element={<Rrbills />} />
              <Route path="/expensebills" element={<Expensebills />} />

              <Route path="/employees" element={<Employees />} />

              <Route path="/admin" element={<Admin />} />
              <Route path="/rewardamount" element={<RewardAmount />} />
              <Route path="/addreward" element={<AddReward />} />
              <Route path="/edit-reward/:id" element={<AddReward />} />
              <Route path="/opdamount" element={<OpdAmount />} />
              <Route path="/addopdamount" element={<AddOpdAmount />} />
              <Route path="/edit-opdamount/:id" element={<AddOpdAmount />} />
            {/* </>
          ) : (
            <> */}
              {/* <Route exact path="/" element={<Login />} /> */}
            {/* </>
          )} */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
