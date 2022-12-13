import { NavLink } from "react-router-dom";
import footerItems from "./footerItems";
import facebook from "../../assets/FacebookLogo.svg";
import instagram from "../../assets/InstagramLogo.svg";
import linkedin from "../../assets/LinkedinLogo.svg";
import { FooterContainer, IconsContainer } from "../Container/styles";
import { FooterContent } from "./styles";
import { SmallParagraph } from "../Paragraph/styles";
import { FooterNav } from "../Nav/styles";

const Footer = () => {
  const footerLinkStyle = ({ isActive }) => {
    return {
      color: "#1f1f1f",
      fontWeight: isActive ? "700" : "400"
    };
  };

  const MouseOver = (event) => (event.target.style.color = "#515151");

  const MouseOut = (event) => (event.target.style.color = "#1f1f1f");

  return (
    <FooterContent>
      <FooterNav>
        <FooterContainer>
          {footerItems.map((footerItem) => {
            return (
              <li key={footerItem.id}>
                <NavLink
                  to={footerItem.path}
                  style={footerLinkStyle}
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                >
                  {footerItem.name}
                </NavLink>
              </li>
            );
          })}
        </FooterContainer>
        <IconsContainer>
          <a href="https://www.facebook.com/lacrei.saude" target="_blank">
            <img src={facebook} alt="Logo verde do Facebook" />
          </a>
          <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
            <img src={instagram} alt="Logo verde do Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/lacrei" target="_blank">
            <img src={linkedin} alt="Logo verde do LinkedIn" />
          </a>
        </IconsContainer>
      </FooterNav>
      <SmallParagraph>Desafio Front-end Lacrei</SmallParagraph>
    </FooterContent>
  );
};

export default Footer;
