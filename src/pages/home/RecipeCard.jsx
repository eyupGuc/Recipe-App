import { useNavigate } from "react-router-dom";
import { Button, CardDiv, CardHeader, CardImage } from "./style";

const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();

  //   console.log(recipes);
  return (
    <div className=" mt-4  ">
      {recipes.map((item, index) => {
        return (
          <CardDiv key={index}>
            <CardHeader>{item?.recipe?.label}</CardHeader>
            <CardImage src={item?.recipe?.image} alt="" />
            <Button
              onClick={() => {
                navigate(`/details`, { state: item });
              }}
            >
             View More
            </Button>
          </CardDiv>
        );
      })}
    </div>
  );
};
export default RecipeCard;
