import React from "react";
import { SocialContainer, IconsList, Icon } from "./styles";
import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";

function SocialMedia() {
  return (
    <>
      <SocialContainer>
        <IconsList>
          <Icon>
            <a
              href="https://github.com/gabrielfernandes42?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.linkedin.com/in/gabriel-fernandes254/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </Icon>
          <Icon>
            <a
              href="https://codepen.io/collection/VYNOEG"
              target="_blank"
              rel="noreferrer"
            >
              <FaCodepen />
            </a>
          </Icon>
        </IconsList>
      </SocialContainer>
    </>
  );
}

export default SocialMedia;
