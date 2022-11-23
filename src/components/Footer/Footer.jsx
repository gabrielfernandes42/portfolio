import React from "react";
import { ButtonPage } from "../Button/styled";
import { FooterContainer, FooterContent, Copywriting } from "./styles";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <span>03.Qual próximo passo? </span>
          <h2>Entre em contato</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            harum quos odio ratione magni accusantium quod eos voluptas sapiente
            soluta officia possimus molestiae voluptatum, recusandae dolore
            praesentium cumque perspiciatis illo?
          </p>
          <ButtonPage href="mailto:email@provedor.com.br">Entre em contato</ButtonPage>
        </FooterContent>
      </FooterContainer>
      <Copywriting>
        <div></div>
        <p>&copy;2022 Gabriel Fernandes.</p>
      </Copywriting>
    </>
  );
}

export default Footer;
