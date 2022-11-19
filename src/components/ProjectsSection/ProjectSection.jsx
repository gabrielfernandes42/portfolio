import React from "react";
import { ButtonPage } from "../Button/styled";
import Cards from "../Cards/Cards";
import { ProjectsContainer, ProjectsTitle, ProjectsCard, SeeMore } from "./styles";

function ProjectSection() {
  return (
    <>
      <ProjectsContainer>
        <ProjectsTitle>
          <h2>
            <span>02.</span> Alguns projetos que criei
          </h2>
        </ProjectsTitle>
        <ProjectsCard>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </ProjectsCard>
        <SeeMore>
          <ButtonPage>Ver todos</ButtonPage>
        </SeeMore>
      </ProjectsContainer>
    </>
  );
}

export default ProjectSection;
