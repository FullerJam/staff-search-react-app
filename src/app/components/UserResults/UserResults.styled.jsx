import styled from "styled-components";
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
`;

export const StyledUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  @media (max-width: 680px) {
    padding: 25px;
  }
`;

export const Button = styled.button`
  background-image: url(${circleArrowIcon});
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 0;
  height: 50px;
  width: 49px;
  padding-right: 38px;
  outline: none;
  cursor: pointer;
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
  color: ${({ theme }) => theme.colors.deepRed};
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
      p {
        margin: 0px;
      }
    }
  }
`;

/**
 * Modal styles
 */
export const modalContentStyle = {
  content: {
    inset:"20px 20px 20px 0px",
    position: "relative",
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
    height: "95vh",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    overflowX: "hidden",
    padding:"0 20px"
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
  div img:first-of-type {
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    li {
      display: block;
    }
  }
`;
