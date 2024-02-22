import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div class="title">
        <h1 className="logo">
          <FontAwesomeIcon icon={faMasksTheater} /> dramaChecks
        </h1>
        <Link className="link" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
