import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { state: item } = useLocation();
  console.log(item);
  return (
    <div>
      <p>{item.recipe.label}</p>
      <img src={item.recipe.image} alt="" />
    </div>
  );
};

export default Details;
