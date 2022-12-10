import { Link } from "react-router-dom";
import "./footer.css";
import footerItems from "./footerItems";
import facebook from "../../assets/FacebookLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import linkedin from "../../assets/LinkedinLogo.svg";

const Footer = () => {
  const handleClick = (clickedItem) => {
    const items = document.querySelectorAll(".footer-link");

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
    <footer>
      <nav>
        <ul className="footer-container">
          {footerItems.map((footerItem) => {
            return (
              <li key={footerItem.id}>
                <Link
                  onClick={handleClick}
                  to={footerItem.path}
                  className={footerItem.class}
                >
                  {footerItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="icons-container">
          <a href="https://www.facebook.com/lacrei.saude" target="_blank">
            <img className="icon" src={facebook} alt="Logo verde do Facebook" />
          </a>
          <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
            <img
              className="icon"
              src={instagram}
              alt="Logo verde do Instagrem"
            />
          </a>
          <a href="https://www.linkedin.com/company/lacrei" target="_blank">
            <img className="icon" src={linkedin} alt="Logo verde do LinkedIn" />
          </a>
        </div>
      </nav>
      <p>Desafio Front-end Lacrei</p>
    </footer>
  );
};

export default Footer;
