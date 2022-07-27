import { Link } from "react-router-dom";

function Admin() {
    return (
        <div>
           <h2>you are on the Admin!!!!!!!!!!!!</h2>
           <nav style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}>
            <Link to="/businessDatails">businessDetails</Link> |{" "}
            <Link to="/meetings">meetings</Link> |{" "}
            <Link to="/services">services</Link>
            </nav>
        </div>
      );
  }
  export default Admin;
