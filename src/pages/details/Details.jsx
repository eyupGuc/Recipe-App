import { Button, CardDiv, CardHeader, CardImage } from "../home/style";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailPage } from "./style";

const Details = () => {
  const navigate = useNavigate();
  const { state: item } = useLocation();
  console.log(item);
  return (
    <DetailPage>
      <CardDiv>
        <CardHeader>{item.recipe.label}</CardHeader>
        <CardImage src={item.recipe.image} alt="" />
        <Button onClick={() => navigate(-1)}>Back</Button>
      </CardDiv>
    </DetailPage>
  );
};

export default Details;
