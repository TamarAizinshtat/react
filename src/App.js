
import './App.css';
import { Link } from "react-router-dom";
import Customer from './components/customer.js'

function App() {
  return (
    <div>
       <h1>welcome to the app</h1>
       <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        {/* <Link to="/admin">maneger</Link> |{" "} */}
        <Link to="/login">manager</Link>
        
        </nav>
        <Customer></Customer>
    </div>
  );
}

export default App;
