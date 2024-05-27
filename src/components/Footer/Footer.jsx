import React from "react";
import { ButtonPage } from "../Button/styled";
import { FooterContainer, FooterContent, Copywriting } from "./styles";

function Footer() {
  return (
    <>
      <FooterContainer id="contact">
        <FooterContent>
          <span>03.Qual próximo passo? </span>
          <h2>Entre em contato</h2>
          <p>
            Atualmente em busca de uma oportunidade de trabalho como
            desenvolvedor front-end. Se você está procurando alguém apaixonado
            por tecnologia e com vontade de aprender, entre em contato
          </p>
          <ButtonPage href="mailto:email@provedor.com.br">
            Entre em contato
          </ButtonPage>
        </FooterContent>
      </FooterContainer>
      <Copywriting>
        <div></div>
        <p>&copy;2024 Gabriel Fernandes.</p>
      </Copywriting>
    </>
  );
}

export default Footer;
