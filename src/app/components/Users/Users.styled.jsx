import styled from "styled-components";
// import theme from "../../config/theme"; // couldnt use in exported styles, receiving undefined
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    /* padding:15px; */
  }
`;

export const Button = styled.button`
  background-image: url(${circleArrowIcon});
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 0;
  height: 50px;
  width: 49px;
  padding-right:38px;
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

export const StyledUserInfoWrapper = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  p {
    font-family: helvetica;
    font-size: 16px;
    margin-left: 10px;
    /* word-break: break-word; */
  }
  img {
  }
  div:nth-of-type(2) {
    display: flex;
    align-items: center;
  }
  @media (max-width: 400px) {
    display: block;
    div:nth-of-type(2) {
      
      p{
        margin:0px;
      }
    }
  }
`;

export const modalContentStyle = {
  content: {
    padding: "0px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    fontFamily: "helvetica",
    overflowX: "hidden",
    maxWidth: "1000px",
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflowX: "hidden",
  },
};

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
  p {
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
