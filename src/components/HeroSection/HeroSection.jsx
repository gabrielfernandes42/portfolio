import React from "react";
import { ButtonPage } from "../Button/styled";
import { Container, Title, TitleContainer } from "./styles";

function HeroSection() {
  return (
    <Container id="hero">
      <TitleContainer>
        <Title>
          <span>Olá, meu nome é</span>
          <h1>Gabriel Fernandes</h1>
          <h2>Eu sou web developer</h2>

          <ButtonPage href="mailto:email@provedor.com.br">
            Vamos conversar!
          </ButtonPage>
        </Title>
      </TitleContainer>
    </Container>
  );
}

export default HeroSection;
