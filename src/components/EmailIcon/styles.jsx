import styled from "styled-components";

export const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 40px;
  z-index: 10;
  color: white;
`;
export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    margin: 20px auto;
    padding: 10px;
    writing-mode: vertical-rl;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 0.1rem;
    font-family: "Roboto Mono", monospace;
    cursor: pointer;
  }

  &:hover {
    color: #64ffda;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
  }
`;
