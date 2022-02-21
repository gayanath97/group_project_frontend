import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Rr from './screens/Rr'
import ClaimType from './screens/ClaimType';
import AddRr from './screens/AddRr';
import AddRrbill from './screens/AddRrbill';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                
             </Routes>
           </Router>
    </div>
  );
}

export default App;
