import React from "react";
import { EmailContainer, Email } from "./styles";

function EmailIcon() {
  return (
    <>
      <EmailContainer>
        <Email href="mailto:email@provedor.com.br">
          <p>gabrielfernandes254@gmail.com</p>
        </Email>
      </EmailContainer>
    </>
  );
}

export default EmailIcon;
