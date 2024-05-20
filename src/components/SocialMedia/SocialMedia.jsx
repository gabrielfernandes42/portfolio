import React from "react";
import { SocialContainer, IconsList, Icon } from "./styles";
import {
  FaGithub,
  FaLinkedinIn,
  FaRegSquare,
  FaInstagram,
} from "react-icons/fa";

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
          {/* <Icon>
            <a
              href="https://codesandbox.io/dashboard/recent?workspace=7233f6a9-e58b-439e-8a5a-3cb2767af523"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegSquare />
            </a>
          </Icon> */}
          {/* <Icon>
            <a
              href="https://www.instagram.com/gabriel_fer42/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </Icon> */}
        </IconsList>
      </SocialContainer>
    </>
  );
}

export default SocialMedia;
