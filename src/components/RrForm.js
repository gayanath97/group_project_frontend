import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { PostRrApiAction, UpdateRrApiAction } from "../redux/action/rrAction";
import { useDispatch, useSelector } from "react-redux";
import { GetRrDetailsById } from "../services/RrsService";

const RrForm = () => {
  const [extensionNo, setextensionNo] = useState("");
  const [customer, setcustomer] = useState("");
  const [location, setlocation] = useState("");
  const [sta_tus, setsta_tus] = useState("");

  const employeeId = localStorage.getItem("userId");
  const [employee, setemployee] = useState(employeeId);

  console.log(employeeId);
  console.log(employee);

  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.rrReducer.isResponse);
  const isUpdateResponse = useSelector(
    (state) => state.rrReducer.isUpdateResponse
  );

  const saveOrUpdateRr = (e) => {
    e.preventDefault();
    const rr = { extensionNo, customer, location, employee };

    if (id) {
      dispatch(UpdateRrApiAction(rr, id));
    } else {
      dispatch(PostRrApiAction(rr));
    }
  };

  if (isUpdateResponse) {
    alert("Your data has been updated!");
    navigate("/rr");
    window.location.reload(false);
  }

  if (isResponse) {
    alert("Your response has been submitted!");
    navigate("/rr");
    window.location.reload(false);
  }

  useEffect(() => {
    GetRrDetailsById(id)
      .then((response) => {
        console.log(response.data.payload[0]);

        setextensionNo(response.data.payload[0].extensionNo);
        setcustomer(response.data.payload[0].customer);
        setlocation(response.data.payload[0].location);
        setsta_tus(response.data.payload[0].sta_tus);
        setemployee(response.data.payload[0].employee);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2>Update Rr</h2>;
    } else {
      return <h2>Add Rr</h2>;
    }
  };

  return (
    <div>
      {title()}
      <div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h1>Welcome Back</h1>
					
				</div>
				<div className="right">
					<form className="container" >
                    <div>
                    <label> EMPLOYEE ID No:{employeeId}</label>
        </div>
        <input
            type="text"
            placeholder="Enter extensionNo"
            name="extensionNo"
            value={extensionNo}
            onChange={(e) => setextensionNo(e.target.value)}
            className="input"
          ></input>
          <input
            type="text"
            placeholder="Enter customer"
            name="customer"
            value={customer}
            onChange={(e) => setcustomer(e.target.value)}
            className="input"
          ></input>
           <input
            type="text"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            className="input"
          ></input>
          <div><Button className="green_btn"
            onClick={(e) => {
              saveOrUpdateRr(e);
            }}
            variant="warning"
            size="lg"
          >
            Submit
          </Button>
          </div>
          <div>
        <Button className="green_btn" variant="danger" size="lg">
          <Link to="/rr"> Cancel </Link>
        </Button>
      </div>
      

      {/* <form>
        <div>
          <label> EMPLOYEE ID No:{employeeId}</label>
        </div>

        <div>
          <label> ExtensionNo :</label>
          <input
            type="text"
            placeholder="Enter extensionNo"
            name="extensionNo"
            value={extensionNo}
            onChange={(e) => setextensionNo(e.target.value)}
          ></input>
        </div>
        <div>
          <label> Customer :</label>
          <input
            type="text"
            placeholder="Enter customer"
            name="customer"
            value={customer}
            onChange={(e) => setcustomer(e.target.value)}
          ></input>
        </div>
        <div>
          <label> Location :</label>
          <input
            type="text"
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          ></input>
        </div>

        <br />
        <br />

        <div>
          <Button
            onClick={(e) => {
              saveOrUpdateRr(e);
            }}
            variant="warning"
            size="lg"
          >
            Submit
          </Button>
        </div>
        <br />
      </form> */}
      </form>
      
      </div>
      </div>
      </div>

    </div>
  );
};

export default RrForm;
