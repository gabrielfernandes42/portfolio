import React from "react";
import { ButtonPage } from "../Button/styled";
import Cards from "../Cards/Cards";
import { data } from "../../data/data";
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsCard,
  SeeMore,
} from "./styles";

function ProjectSection() {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsTitle>
          <h2>
            <span>02.</span> Alguns projetos que criei
          </h2>
        </ProjectsTitle>
        <ProjectsCard>
          {data.projects.map((project) => (
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
          <ButtonPage
            href="https://github.com/gabrielfernandes42?tab=repositories"
            target="_blank"
          >
            Ver todos
          </ButtonPage>
        </SeeMore>
      </ProjectsContainer>
    </>
  );
}

export default ProjectSection;
