import styled from "styled-components";

export const ProjectsContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  & {
    @media screen and (max-width: 1080px) {
      padding: 0 150px;
    }
  }
  & {
    @media screen and (max-width: 768px) {
      padding: 0 50px;
    }
  }
  & {
    @media screen and (max-width: 480px) {
      padding: 0 25px;
    }
  }
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

  @media (max-width: 768px) {
    h2 {
      font-size: 22px;
    }

    h2:after {
      width: 100px;
      margin-left: 7px;
    }
  }
`;

export const ProjectsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;

  & {
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;

export const SeeMore = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

