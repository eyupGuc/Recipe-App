import { Button } from "../home/style";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate=useNavigate();
  const { state: item } = useLocation();
  console.log(item);
  return (
    <div>
      <p>{item.recipe.label}</p>
      <img src={item.recipe.image} alt="" />
    <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
  );
};

export default Details;
