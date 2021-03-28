import styled from 'styled-components';
import theme from "../../config/globalStyle";
import bgImg from "../../../../public/images/background.jpg";
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
background-size:cover;
width: 100%;
height: 50vh;
@media (max-width: 580px) {
  height: 40vh;
  h1 {
    font-size: 35px !important;
  }
}
@media (max-width: 380px) {
  height: 60vh;
  h1 {
    font-size: 35px !important;
  }
}
`;

export const StyledOverlay = styled.div `
display: flex;
justify-content: center;
background-color:rgba(0, 0, 0, 0.5);
width:100%;
height:100%;
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
@media (max-width: 680px) {
  max-width: 380px;
  padding:0 25px;
}
`;
export const StyledInputWrapper = styled.div`
display:flex;
justify-content:center;
margin-left:-4.2%;
`;

export const StyledInput = styled.input`
border-radius: 5px;
padding: 10px;
font-size: 1rem;
font-weight: 700;
width: 90%;
background-color: #efefef;
`;