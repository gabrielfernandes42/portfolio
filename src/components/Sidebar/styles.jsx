import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  background: #0d0d0d;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #64ffda;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 2rem;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #d0d0d0;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;

  span {
    color: #64ffda;
  }

  &:hover {
    color: #64ffda;
  }
`;

export const SideBtnWrapper = styled.div`
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 1px solid #64ffda;
  max-width: 150px;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 0.6rem;
`;
