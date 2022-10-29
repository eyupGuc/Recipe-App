import styled from "styled-components";

export const Button = styled.button`
  background-color: green;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 0.5rem;
  border-color: black;
  &:hover {
    transform: scale(0.9);
  }
`;

export const HomeStyle = styled.div`
 
 max-height: 100%;
  background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  font-size: 1rem;
  padding: 2rem 0;
`;

export const CardDiv = styled.div`
  width: 30rem;
  height: 15rem;
  border-radius: 2rem;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  border: 2px solid black;
  margin-bottom: 2rem;
  background-color: crimson;
`;
export const CardImage = styled.img`
  width:200px;
  border-radius: 0.7rem;
 
`;

export const CardHeader=styled.h4`
text-align: center;
height: 5rem;
display: flex;
align-items: center;



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
margin-right:1rem;
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



