import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RrbillForm from "../components/RrbillForm";
import { Button } from "react-bootstrap";

const AddRrbill = () => {
  return (
    <div>
      <Header />
      <RrbillForm />

      {/* <div>
        <Button variant="danger" size="lg">
          <Link to="/rr"> Cancel </Link>
        </Button>
      </div> */}

      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
};

export default AddRrbill;
