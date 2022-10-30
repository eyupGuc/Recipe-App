import {  CardHeader, CardImage } from "../home/style";
import React from "react";
import { useLocation } from "react-router-dom";
import { CardDetail, DetailPage } from "./style";

const Details = () => {

  const { state: item } = useLocation();
  console.log(item);
  return (
    <DetailPage>
      <CardDetail>
        <CardHeader>{item.recipe.label}</CardHeader>
       
        <CardImage src={item.recipe.image} alt="" />
        <div><p>Nutrients</p>
          <p>
            {item.recipe.totalNutrients.CA.label}:
            {item.recipe.totalNutrients.CA.quantity.toFixed(2)}
            {item.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOCDF.label}:
            {item.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
            {item.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.CHOLE.label}:
            {item.recipe.totalNutrients.CHOLE.quantity.toFixed(2)}
            {item.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.ENERC_KCAL.label}:
            {item.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
            {item.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.FAT.label}:
            {item.recipe.totalNutrients.FAT.quantity.toFixed(2)}
            {item.recipe.totalNutrients.FAT.unit}
          </p>
          <p>
            {item.recipe.totalNutrients.PROCNT.label}:
            {item.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}
            {item.recipe.totalNutrients.PROCNT.unit}
          </p></div>
       
      </CardDetail>
    </DetailPage>
  );
};

export default Details;
