import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

// Container
export const CardsContainer = styled.li`
  list-style: none;
`;

//div list
export const Cardslist = styled.div``;

//Overlay
export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  /* border-radius: 4px; */
  background-color: #1a1a1b;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;

  h3 {
    font-size: 1em;
    margin: 0 0 0.3rem;
    color: white;
  }

  span {
    font-size: 0.8em;
    color: #64ffda;
    font-family: "Roboto Mono", monospace;
  }
`;

//header
export const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #1a1a1b;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

//Card
export const Card = styled.div`
  position: relative;
  display: block;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover ${CardOverlay} {
    transform: translateY(0);
  }

  &:hover ${CardHeader} {
    transform: translateY(0);
  }
`;
//img
export const CardImg = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const CardHeaderText = styled.div``;

export const CardIcons = styled.div`
  color: white;
  margin-top: 0.5rem;
`;
export const CardDescription = styled.div`
  p {
    padding: 0 2rem 2rem;
    color: #d0d0d0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

export const ExternalLink = styled.a`
  margin-right: 10px;
  font-size: 17px;
  &:hover {
    color: #64ffda;
    transition: 0.2s ease-in-out;
  }
`;
export const GitLink = styled(FaGithub)`
  font-size: 17px;
  &:hover {
    color: #64ffda;
    transition: 0.2s ease-in-out;
  }
`;
