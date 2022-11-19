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
      <AboutContainer>
        <AboutTitle>
          <h2>
            <span>01.</span> Sobre mim
          </h2>
        </AboutTitle>
        <AboutInfo>
          <AboutInfoText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              finibus lobortis erat vel tempus. Nunc cursus viverra ante vitae
              aliquam. Sed elementum tellus quis nunc tincidunt, sit amet
              laoreet neque molestie. Nullam mauris nunc, eleifend sit amet urna
              in, fermentum fermentum nunc. Donec molestie pellentesque tempus.
              Donec tristique magna vitae dolor pulvinar blandit. Aliquam
              consectetur elit ac mauris eleifend, in auctor tortor fringilla.
              Praesent sit amet risus id nisl gravida consequat ut nec ante.
              Nunc dignissim commodo auctor. Mauris sit amet arcu urna. Nunc sed
              aliquam dui, at volutpat lacus. Morbi condimentum dui id ligula
              ullamcorper, quis blandit libero pharetra.
            </p>
            <AboutInfoSkills>
              <p>Minhas Habilidades</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Styled-componenets</li>
                <li>Bootstrap</li>
                <li>Git</li>
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
