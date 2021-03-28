import styled from "styled-components";

export const StyledCloseButton = styled.button`
line-height:15px;
  border-radius:100%;
  color:white;
  font-weight:bold;
  padding:8px 10px;
  background-color:${({ theme }) => theme.colors.deepRed};
  position:absolute;
  top:15px;
  right:15px;
  border:0;
`;

