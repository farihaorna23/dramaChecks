import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div class="title">
        <h1 className="logo">dramaChecks</h1>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
