import React from "react";
import { FaBars } from "react-icons/fa";
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

function Navbar({ handleToggle}) {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">&lt;/Gf&gt;</NavLogo>
        <MobileIcon onClick={handleToggle}>
          <FaBars />
        </MobileIcon>
        <NavBarMenu>
          <NavItem>
            <NavLinks to="sobre">
              <span>01.</span>Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sobre">
              <span>02.</span>Projetos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sobre">
              <span>03.</span>Contato
            </NavLinks>
          </NavItem>
          <NavBarBtn>Currículo</NavBarBtn>
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
}

export default Navbar;
