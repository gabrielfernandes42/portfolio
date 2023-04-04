import React from "react";
import { FaAlignRight } from "react-icons/fa";
import resume from '../../assets/pdf/resume.pdf'
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavBarMenu,
  NavItem,
  NavLinks,
  NavBarBtn,
} from "./styles";

function Navbar({ handleToggle }) {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo href="#">&lt;/Gf&gt;</NavLogo>
        <MobileIcon onClick={handleToggle}>
          <FaAlignRight />
        </MobileIcon>
        <NavBarMenu>
          <NavItem>
            <NavLinks href="#about">
              <span>01.</span>Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#projects">
              <span>02.</span>Projetos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#contact">
              <span>03.</span>Contato
            </NavLinks>
          </NavItem>
          <NavBarBtn
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </NavBarBtn>
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
}

export default Navbar;
