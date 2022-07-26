
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
       <h1>welcome to the app</h1>
       <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link to="/"> </Link>
        </nav>
    </div>
  );
}

export default App;
