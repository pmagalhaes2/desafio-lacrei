import { NavLink } from "react-router-dom";
import "./footer.css";
import footerItems from "./footerItems";
import facebook from "../../assets/FacebookLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import linkedin from "../../assets/LinkedinLogo.svg";

const Footer = () => {
  const footerLinkStyle = ({ isActive }) => {
    return {
      color: "#1f1f1f",
      fontWeight: isActive ? "700" : "400"
    };
  };
  return (
    <footer>
      <nav>
        <ul className="footer-container">
          {footerItems.map((footerItem) => {
            return (
              <li key={footerItem.id}>
                <NavLink to={footerItem.path} style={footerLinkStyle}>
                  {footerItem.name}
                </NavLink>
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
      <p className="copyright">Desafio Front-end Lacrei</p>
    </footer>
  );
};

export default Footer;
