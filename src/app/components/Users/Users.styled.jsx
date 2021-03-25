import styled from "styled-components";
// import theme from "../../config/theme"; // couldnt use in exported styles, receiving undefined
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  /* border:1px red dotted; */
  margin-top:20px;
`;

export const StyledUsersWrapper = styled.div`
  width:100%;
  padding:0 80px;
  /* border:1px blue dotted; */
  @media (max-width: 768px) {
    /* padding:15px; */
  }
`;


export const Button = styled.button`
  background-image: url(${circleArrowIcon});
  background-repeat: no-repeat;
  background-size:cover;
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

export const StyledUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  p{
    font-family: helvetica;
    font-size:16px;
    margin-left:10px;
  }
  img{

  }
`;

// export const modalContentStyle = {
//   content: {
//     content: {
//       marginTop: "5vh",
//       display: "flex",
//       alignItems: "center",
//       flexDirection: "column",
//       justifyContent: "center",
//       margin: "0 auto",
//       fontFamily: "helvetica",
//       overflowX: "hidden",
//       maxWidth: "1000px",
//     },
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.3)",
//       overflowX: "hidden",
//     },
//   },
// };

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
