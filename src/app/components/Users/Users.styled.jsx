import styled from "styled-components";
// import theme from "../../config/theme"; // couldnt use in exported styles, receiving undefined
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";

export const StyledUsersWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled.div``;

export const StyledUserTile = styled.div`
  display: flex;
  padding: 0 50px 0 50px;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  border: 1px grey solid;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f4f4f4;
  cursor:pointer;
  p {
    margin-left: 8px;
    font-family: helvetica;
  }
  @media (max-width: 849px) {
    max-width: 530px;
  }
  @media (max-width: 617px) {
    max-width: 420px;
  }
  @media (max-width: 617px) {
    max-width: 300px;
  }
`;

export const Button = styled.button`
  background-image: url(${circleArrowIcon});
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 0;
  height: 50px;
  width: 49px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledAvatarBorder = styled.img`
  border-radius: 50%;
  position: relative;
  border: 5px solid white;
`;

export const StyledAvatarBorder2 = styled.img`
  border-radius: 50%;
  position: relative;
  border: 5px solid white;
`;

export const StyledError = styled.p`
  color: red;
  font-weight: bold;
  font-size: 25px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  padding: 0;
  margin-top: 2%;
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  li {
    display: flex;
    word-wrap: break-word;
  }
  p{
    word-wrap: break-word;
  }
  img {
    height: 20px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    li {
      display: block;
    }
  }
`;
