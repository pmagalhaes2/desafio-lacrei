import navItems from "./navItems";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleClick = (clickedItem) => {
    const items = document.querySelectorAll(".nav-link");

    items.forEach((item) => {
      if (item != clickedItem) {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      }
    });

    clickedItem.target.classList.contains("active")
      ? clickedItem.target.classList.remove("active")
      : clickedItem.target.classList.add("active");
  };
  return (
    <header>
      <li>
        <a href="/" className="logo">
          Lacrei
        </a>
      </li>
      <nav>
        <ul className="nav-container">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link
                  onClick={handleClick}
                  to={navItem.path}
                  className={navItem.class}
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
