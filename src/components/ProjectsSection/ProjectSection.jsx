import React from "react";
import Cards from "../Cards/Cards";
import { ProjectsContainer, ProjectsTitle, ProjectsCard } from "./styles";

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
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </ProjectsCard>
      </ProjectsContainer>
    </>
  );
}

export default ProjectSection;
