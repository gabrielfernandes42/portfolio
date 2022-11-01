import React from "react";
import { Container, Title, TitleContainer, ButtonHero } from "./styles";

function HeroSection() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>Olá, meu nome é</span>
          <h1>Gabriel Fernandes.</h1>
          <h2>Eu construo sites para a web.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus lobortis erat vel tempus. Nunc cursus viverra ante vitae
            aliquam. Sed elementum tellus qui
          </p>
          <ButtonHero onclick="location.href='mailto:vinoth@email.com';">
            Vamos conversar!
          </ButtonHero>
        </Title>
      </TitleContainer>
    </Container>
  );
}

export default HeroSection;
