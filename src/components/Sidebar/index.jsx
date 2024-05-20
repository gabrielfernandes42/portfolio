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

function Sidebar({ isOpen, handleToggler, closeButon }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={handleToggler}>
        <Icon onClick={handleToggler}>
          <CloseIcon onClick={closeButon} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={closeButon} to="/sobre">
              <span>01</span>.Sobre
            </SidebarLink>
            <SidebarLink onClick={closeButon} to="/projetos">
              <span>02</span>.Projetos
            </SidebarLink>
            <SidebarLink onClick={closeButon} to="/contato">
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
