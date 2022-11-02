import styled from "styled-components";

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;

`;

export const TitleContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    & {
      height: 70vh;
    }
  }
`;

export const Title = styled.div`
  span {
    color: #64ffda;
    font-size: 1.1rem;
    margin-bottom: 7px;
    display: block;
    font-family: "Roboto Mono", monospace;
  }

  h1 {
    color: #ffffff;
    font-size: 4rem;
  }

  h2 {
    color: #d0d0d0ad;
    font-size: 4rem;
  }
  p {
    color: #fff;
    max-width: 500px;
    margin: 1.2rem 0;
  }

  @media screen and (max-width: 768px) {
    h1,
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ButtonHero = styled.button`
  background-color: transparent;
  border: 1px solid #64ffda;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  color: #64ffda;
  border-radius: 5px;
  margin: 1rem 0;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;

  &:hover {
    background-color: #64ffdb3e;
    transition: 0.8s all ease;
  }
`;
