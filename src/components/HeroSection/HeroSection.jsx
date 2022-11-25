import React from "react";
import { ButtonPage } from "../Button/styled";
import { Container, Title, TitleContainer } from "./styles";

function HeroSection() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>Olá, meu nome é</span>
          <h1>Gabriel Fernandes</h1>
          <h2>Eu sou web developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus lobortis erat vel tempus. Nunc cursus viverra ante vitae
            aliquam. Sed elementum tellus qui
          </p>
          <ButtonPage href="mailto:email@provedor.com.br">Vamos conversar!</ButtonPage>
        </Title>
      </TitleContainer>
    </Container>
  );
}

export default HeroSection;
