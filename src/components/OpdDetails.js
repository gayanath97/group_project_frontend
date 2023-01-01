import { useState, useEffect } from "react";
import OpdBillService from "../services/OpdBillService";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOpdbillApiAction,
  DeleteOpdbillApiAction,
} from "../redux/action/opdAction";
import axios from "axios";

import { GetOpdDetailsById } from "../services/GetOpdAmountByEmpId.js";
import PieCharts from "./Pie";

const OpdDetails = () => {
  const [opds, setopds] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.opdReducer.opdbillDetails);
  const isDeleteResponse = useSelector(
    (state) => state.opdReducer.isDeleteResponse
  );

  const [search, setNewSearch] = useState("");
  const [amount, setamount] = useState("");
  const [expireDate, setExpireDate] = useState("");

  useEffect(() => {
    dispatch(GetOpdbillApiAction());
    console.log("response data=====", responseData);
  }, [dispatch]);

  useEffect((e) => {
    console.log(localStorage.getItem("userId"));
    GetOpdDetailsById(localStorage.getItem("userId"))
      .then((res) => {
        console.log(res.data);
        console.log(res.data.payload[0]);
        setamount(res.data.payload[0].amount);
        setExpireDate(res.data.payload[0].expireDate);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //       if(isDeleteResponse){
  //         alert("Your data has been deleted!")
  //         window.location.reload(false)
  // }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const employeeId = localStorage.getItem("userId");

  const filtered = !search
    ? responseData.filter((e) => {
        return e.employee == employeeId;
      })
    : null;

  console.log(filtered);
  let x = filtered.map((item) => Number(item.amount));

  let sum = 0;
  for (let num of x) {
    sum = sum + num;
  }

  let ava = amount - sum;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h5>Your Total opd amount={amount}</h5>
          <h5>Total usage={sum}</h5>
          <h5>Available={ava}</h5>
          <h5>It will expire on {expireDate}.</h5>
        </div>
        <div style={{ marginLeft: "850px", marginTop: "-80px" }}>
          <PieCharts val1={sum} val2={ava} />
        </div>
      </div>

      {/* <br />
          Filter your opd bill by particulars:{" "}
      <input type="text" value={search} onChange={handleSearchChange} />
          <br />
          <br /> */}
      <Table striped borderd hover variant="light">
        <thead>
          <th>Employee Id Id</th>
          <th>Opd Id</th>
          <th>Amount</th>
          <th>Particulars</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {filtered
            ? filtered.map((opd) => {
                return (
                  <tr key={opd.id}>
                    <td>{opd.employee}</td>
                    <td>{opd.id}</td>
                    <td>{opd.amount}</td>
                    <td>{opd.particulars}</td>
                    <td>{opd.date}</td>
                    <td>{opd.sta_tus}</td>
                    <td>
                      {/* <Button className="green_btn" variant="warning">
                        {" "}
                        <Link to={`/edit-opdbill/${opd.id}`}>Update</Link>
                      </Button> */}
                      <Button
                        className="green_btn"
                        variant="warning"
                        onClick={() => {
                          swal({
                            text: "Are you sure you want to update?",
                            buttons: true,
                            dangerMode: true,
                          }).then((willupdate) => {
                            if (willupdate && opd.sta_tus == "pending") {
                              //  <Link to={`/edit-opdbill/${opd.id}`}>Update</Link>
                              navigate(`/edit-opdbill/${opd.id}`);
                            }
                            if (willupdate && opd.sta_tus != "pending") {
                              swal({
                                text: "Can not update ! manager has already gave the final decision.",
                                timer: 2000,
                                buttons: false,
                              });
                            } else {
                              swal({
                                text: "Details are restored !",
                                timer: 2000,
                                buttons: false,
                              });
                            }
                          });
                          // if(opd.sta_tus == "pending"){
                          //  return <Link to={`/edit-opdbill/${opd.id}`}>Update</Link>
                          // }else{
                          //   window.alert("Can not update ! manager has already gave the final decision.");
                          // }
                        }}
                      >
                        Update
                      </Button>
                      {/* <Button
                        className="green_btn"
                        onClick={() => {
                          dispatch(DeleteOpdbillApiAction(opd.id));
                          alert("Your data has been deleted!");
                          window.location.reload(false);
                        }}
                        style={{ marginLeft: "15px" }}
                        variant="danger"
                      >
                        {" "}
                        Delete
                      </Button> */}
                      <Button
                        className="green_btn"
                        onClick={() => {
                          swal({
                            text: "Are you sure you want to delete?",
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete && opd.sta_tus == "pending") {
                              // dispatch(DeleteOpdbillApiAction(opd.id))
                              axios
                                .delete("http://localhost:8080/opd/" + opd.id)
                                .then(() => {
                                  console.log("deleted");
                                  window.location.reload(false);

                                  swal({
                                    title: "Done !",
                                    text: "Detail is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false,
                                  });
                                });
                            }
                            if (opd.sta_tus != "pending") {
                              swal({
                                text: "Can not delete ! manager has already gave the final decision.",
                                timer: 2000,
                                buttons: false,
                              });
                            } else {
                              swal({
                                text: "Details are restored !",
                                timer: 2000,
                                buttons: false,
                              });
                            }
                          });
                        }}
                        style={{ marginLeft: "15px" }}
                        variant="danger"
                      >
                        {" "}
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default OpdDetails;
