import navItems from "./navItems";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#018762" : "#1f1f1f",
      fontSize: "1rem",
      fontWeight: "700",
    };
  };

  return (
    <header>
      <Link to="/" className="logo">
        Lacrei
      </Link>
      <nav>
        <ul className="nav-container">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <NavLink to={navItem.path} style={navLinkStyle}>
                  {navItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
