import styled from "styled-components";

export const Button = styled.button`
  background-color: green;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
margin-top: 0.5rem;
  border-radius: 0.5rem;
  border-color: black;
  &:hover {
    transform: scale(0.9);
  }
`;

export const HomeStyle = styled.div`
 
 height: 100%;
  background-color: tomato;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  font-size: 1rem;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  width: 20rem;
  height: 23rem;
  border-radius: 2rem;
  
  
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 2px solid black;
  margin-bottom: 2rem;
  background-color: crimson;
  position: relative;
  flex-direction: column;
  gap: 1rem;

`;


export const CardImage = styled.img`
  width:200px;
  border-radius: 0.7rem;

 
`;

export const CardHeader=styled.h4`
text-align: center;
display: flex;
align-items: center;
margin-top: 1rem;

font-size: 1.5rem;



`;

export const Input=styled.input`
margin: 0.5rem 0 ;
height: 3rem;
width: 100%;
border-radius: 0.7rem;
border: none;
font-size: 1.2rem;
padding-left: 1rem;
margin-right:1rem;
`;

export const SearchButton=styled.button`
margin: 0.5rem 0 ;
height: 3rem;
width: 100%;
border-radius: 0.7rem;
border: none;
font-size: 1.2rem;
padding-left: 1rem;

margin-right: 0.5rem;

background-color: green;
`;


export const SelectButton=styled.select`
margin: 0.5rem 0 ;
height: 3rem;
width: 100%;
border-radius: 0.7rem;
border: none;
font-size: 1.2rem;
padding-left: 1rem;

background-color: aqua;


`;



