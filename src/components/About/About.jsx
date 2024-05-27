import React from "react";

import {
  AboutContainer,
  AboutTitle,
  AboutInfo,
  AboutImage,
  AboutInfoText,
  AboutInfoSkills,
} from "./styles";

function About() {
  return (
    <>
      <AboutContainer id="about">
        <AboutTitle>
          <h2>
            <span>01.</span> Sobre mim
          </h2>
        </AboutTitle>
        <AboutInfo>
          <AboutInfoText>
            <p>
              Sou um desenvolvedor front-end apaixonado por criar interfaces de
              usuário intuitivas e funcionais. Minha jornada na programação
              começou com um forte interesse em como a tecnologia pode
              transformar ideias em realidades digitais. Desde então, venho me
              dedicando a aprender e aprimorar minhas habilidades em
              desenvolvimento web.
            </p>
            <AboutInfoSkills>
              <p>Linguagens e ferramentas:</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Styled-componenets</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Figma</li>
              </ul>
            </AboutInfoSkills>
          </AboutInfoText>
          <AboutImage>
            <img
              src="https://avatars.githubusercontent.com/u/112595912?v=4"
              alt=""
            />
          </AboutImage>
        </AboutInfo>
      </AboutContainer>
    </>
  );
}

export default About;
