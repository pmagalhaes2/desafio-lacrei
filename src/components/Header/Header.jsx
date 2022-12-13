import navItems from "./navItems";
import { Link, NavLink } from "react-router-dom";
import { HeaderContainer } from "../Container/styles";
import { HeaderContent } from "../Header/styles";

const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#018762" : "#1f1f1f",
      fontSize: "1rem",
      fontWeight: "700",
    };
  };

  const MouseOver = (event) =>
    event.target.classList.contains("active")
      ? (event.target.style.color = "#49a68c")
      : (event.target.style.color = "#515151");

  const MouseOut = (event) =>
    event.target.classList.contains("active")
      ? (event.target.style.color = "#018762")
      : (event.target.style.color = "#1f1f1f");

  return (
    <HeaderContent>
      <Link to="/">Lacrei</Link>
      <nav>
        <HeaderContainer>
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <NavLink
                  to={navItem.path}
                  style={navLinkStyle}
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                >
                  {navItem.name}
                </NavLink>
              </li>
            );
          })}
        </HeaderContainer>
      </nav>
    </HeaderContent>
  );
};

export default Header;
