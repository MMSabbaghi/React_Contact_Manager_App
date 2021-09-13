import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="page_title">
          <Link to="/">Contact Manager</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
