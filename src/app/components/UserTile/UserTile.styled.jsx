import styled from "styled-components";
export const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  background-color: #f4f4f4;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.1rem ${({ theme }) => theme.colors.grey});
  border: 1px ${({ theme }) => theme.colors.grey} solid;
  :hover {
    filter: drop-shadow(0 0 0.2rem ${({ theme }) => theme.colors.darkShade.light});
    transition: ease-in-out 0.15s;
  }
`;
