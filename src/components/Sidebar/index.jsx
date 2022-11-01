import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrapper,
  SidebarMenu,
} from "./styles";

function Sidebar({ isOpen, handleToggler }) {

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={handleToggler}>
        <Icon onClick={handleToggler}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/sobre">
              <span>01</span>.Sobre
            </SidebarLink>
            <SidebarLink to="/projetos">
              <span>02</span>.Projetos
            </SidebarLink>
            <SidebarLink to="/contato">
              <span>03</span>.Contato
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrapper to="/">Currículo</SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
