import { Link } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #313131;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  -webkit-box-shadow: 0px 1px 5px 1px rgba(32 36 36);
  -moz-box-shadow: 0px 1px 5px 1px rgba(32 36 36);
  box-shadow: 0px 1px 5px 1px rgba(32 36 36);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 2.5rem;
`;

export const NavLogo = styled(Link)`
  color: #64ffda;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  text-align: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #64ffda;
  }
`;

export const NavBarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #848484;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 100;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  font-family: "Roboto Mono", monospace;

  span {
    color: #64ffda;
    font-family: "Roboto Mono", monospace;
  }

  &:hover {
    color: #64ffda;
    transition: 0.8s all ease;
  }
`;

export const NavBarBtn = styled.a`
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 0.6rem;
  font-size: 1.1rem;

  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #64ffdb3e;
    transition: 0.8s all ease;
  }
`;
