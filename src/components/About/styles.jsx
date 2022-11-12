import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 10rem 0;
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
`;

export const AboutInfo = styled.div`
  & {
    display: flex;
    gap: 10rem;
    margin-top: 1rem;
  }
`;

export const AboutImage = styled.div`
  img {
    border-radius: 5px;
    max-width: 290px;
  }
`;

export const AboutInfoText = styled.div`
  p {
    font-size: 19px;
    color: #d0d0d0;
    margin-top: 1rem;
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
