import styled from "styled-components";

export const ProjectsContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

export const ProjectsTitle = styled.div`
  span {
    color: #64ffda;
    font-family: "Roboto Mono", monospace;
  }

  h2 {
    color: #d0d0d0;
    display: flex;
    align-items: center;
    font-size: 28px;
    margin-bottom: 2rem;
  }

  h2:after {
    content: "";
    display: block;
    position: relative;
    top: 2px;
    width: 130px;
    height: 1px;
    margin-left: 20px;
    background-color: #64ffda52;
  }
`;

export const ProjectsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;
`;
