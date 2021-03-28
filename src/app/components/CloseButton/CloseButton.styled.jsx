import styled from "styled-components";

export const StyledCloseButton = styled.button`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  line-height: 15px;
  border-radius: 100%;
  color: white;
  font-weight: bold;
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors.deepRed};
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  cursor: pointer;
  outline: none;
  z-index: 1000000;
  border: 2px solid ${({ theme }) => theme.colors.deepRed};
  :hover {
    background-color: white;
    color: black;
  }
`;
