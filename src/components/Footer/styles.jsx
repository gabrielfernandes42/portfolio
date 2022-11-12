import styled from "styled-components";

export const FooterContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 10rem 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  span {
    color: #64ffda;
    font-size: 15px;
    font-family: "Roboto Mono", monospace;
  }

  h2 {
    color: #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-top: 0.4rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #d0d0d0;
    margin-bottom: 1.5rem;
  }
`;

export const Teste = styled.div`
  text-align: center;
  color: #d0d0d0;
  font-size: 14px;
  padding-bottom: 1.3rem;
  font-family: "Roboto Mono", monospace;

  &:hover {
    color: #64ffda;
    transition: 0.8s all ease;
  }
`;
