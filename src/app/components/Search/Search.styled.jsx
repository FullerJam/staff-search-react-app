import styled from 'styled-components';
// import theme from "../../config/theme";
import bgImg from "../../../../public/images/background.jpg";
import bgImgMobile2 from "../../../../public/images/background_mobile_2.png";
import searchIcon from "../../../../public/icons/search.png";

export const Button = styled.button`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  position: relative;
  background-size: 22px 22px;
  border: 0;
  height: 25px;
  width: 25px;
  top: 8px;
  margin-left: -33px;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none; 
  }
`;

export const StyledBackground = styled.div`
background-image: url(${bgImg});
background-repeat: no-repeat;
background-position: 50% 1%;
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
@media (max-width: 380px) {
  background-image: url(${bgImgMobile2});
  height: 40vh;
  h1 {
    font-size: 40px !important;
  }
}
`;

export const StyledSearchWrapper = styled.div`
color: #f4f4f4;
display: flex;
justify-content: center;
flex-direction: column;
max-width: 600px;
h1 {
  font-size: 4rem;
  font-family: helvetica;
  margin-top: 0;
}
p {
  font-size: 1rem;
  font-family: helvetica;
  font-weight: 700;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
@media (max-width: 674px) {
  max-width: 380px;
}
@media (max-width: 449px) {
  max-width: 300px;
}
`;

export const StyledInputWrapper = styled.div`
display:flex;
justify-content:center;
margin-left:-5%;
padding
`;

export const StyledInput = styled.input`
border-radius: 5px;
padding: 10px;
font-size: 1rem;
font-weight: 700;
width: 90%;
background-color: #efefef;
`;