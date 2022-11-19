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

  @media screen and (max-width: 480px) {
    & {
      padding: 0 25px !important;
      span {
        font-size: 14px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & {
      min-height: 70vh;
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 1080px) {
    & {
      padding: 0 100px;
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
    font-size: clamp(40px, 8vw, 4rem);
  }

  h2 {
    color: #d0d0d0ad;
    font-size: clamp(30px, 8vw, 4rem);
  }
  p {
    color: #fff;
    max-width: 500px;
    margin: 1.2rem 0;
  }
`;
