import React from "react";
import { ButtonPage } from "../Button/styled";
import Cards from "../Cards/Cards";
import projectsData from "../../data/data.json";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsCard,
  SeeMore,
} from "./styles";

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
          {projectsData.projects.map((project) => (
            <Cards
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              tags={project.tags} 
            />
          ))}
        </ProjectsCard>
        <SeeMore>
          <ButtonPage>Ver todos</ButtonPage>
        </SeeMore>
      </ProjectsContainer>
    </>
  );
}

export default ProjectSection;
