import React from "react";

import {
  SocialContainer,
  IconsList,
  Icon,
  GitIcon,
  LinkedinIcon,
  SendBoxIcon,
  InstagramIcon
} from "./styles";

function SocialMedia() {
  return (
    <>
      <SocialContainer>
        <IconsList>
          <Icon>
            <GitIcon />
          </Icon>
          <Icon>
            <LinkedinIcon />
          </Icon>
          <Icon>
            <SendBoxIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
        </IconsList>
      </SocialContainer>
    </>
  );
}

export default SocialMedia;
