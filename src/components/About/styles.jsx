import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10rem 0;
  & {
    @media screen and (max-width: 1080px) {
      padding: 10rem 100px;
    }
  }

  & {
    @media screen and (max-width: 768px) {
      padding: 6rem 50px;
    }
  }
  & {
    @media screen and (max-width: 480px) {
      padding: 6rem 25px;
    }
  }
`;

export const AboutTitle = styled.div`
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

  @media screen and (max-width: 768px) {
    h2:after {
      width: 100px;
    }
    h2 {
      font-size: 22px;
      margin-bottom: 0px;
    }
  }
`;

export const AboutInfo = styled.div`
  & {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    margin-top: 1rem;
  }

  & {
    @media screen and (max-width: 870px) {
      display: block;
    }
  }
  & {
    @media screen and (max-width: 1080px) {
      gap: 1rem;
    }
  }
`;

export const AboutImage = styled.div`
  text-align: center;
  img {
    border-radius: 5px;
    max-width: 228px;
  }
`;

export const AboutInfoText = styled.div`
  p {
    font-size: 19px;
    color: #d0d0d0;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1080px) {
    p {
      margin-top: 0px;
    }
  }
`;
export const AboutInfoSkills = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0;
    margin: 1rem 0 0;
  }

  @media screen and (max-width: 768px) {
    ul {
      grid-template-columns: repeat(2, minmax(140px, 200px));
      gap: 0px 1.5rem;
    }
  }

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: "Roboto Mono", monospace;
    font-size: 15px;
    color: #d0d0d0;
  }

  li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #64ffda;
  }
`;
