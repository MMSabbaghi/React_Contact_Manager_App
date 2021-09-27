import { Link } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = ({ onToggleMode, isDark }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_items">
          <Link to="/" className="page_title">
            Contact Manager
          </Link>
          <button className="toggle_mode_btn" onClick={onToggleMode}>
            {isDark ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
