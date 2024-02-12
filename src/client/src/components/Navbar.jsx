import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Hello</h1>
      <Link to="/Home">Home</Link>
    </div>
  );
};

export default NavBar;
