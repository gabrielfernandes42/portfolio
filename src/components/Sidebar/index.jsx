import React from "react";
import resume from "../../assets/pdf/resume.pdf";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrapper,
  SidebarMenu,
} from "./styles";

function Sidebar({ isOpen, closeButon }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={closeButon}>
        <Icon>
          <CloseIcon onClick={closeButon} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              onClick={closeButon}
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <span>01</span>.Sobre
            </SidebarLink>
            <SidebarLink
              onClick={closeButon}
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span>02</span>.Projetos
            </SidebarLink>
            <SidebarLink
              onClick={closeButon}
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <span>03</span>.Contato
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrapper href={resume} target="_blank" rel="noreferrer">
            Currículo
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
