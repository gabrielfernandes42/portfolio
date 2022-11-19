import styled from "styled-components";
import {
  FaGithub,
  FaLinkedinIn,
  FaRegSquare,
  FaInstagram,
} from "react-icons/fa";

export const SocialContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;

  @media screen and (max-width: 768px)  {
    & {
      display: none;
    }
  }
`;
export const IconsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: white;
  list-style: none;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
  }
`;
export const Icon = styled.li`
  padding: 8px;
  &:hover {
    color: #64ffda;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateY(-3px);
  }
`;
export const GitIcon = styled(FaGithub)`
  &::after {
    content: "asdasd";
  }
`;
export const LinkedinIcon = styled(FaLinkedinIn)``;
export const SendBoxIcon = styled(FaRegSquare)``;
export const InstagramIcon = styled(FaInstagram)``;
