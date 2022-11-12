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