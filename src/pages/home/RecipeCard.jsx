import { useNavigate } from "react-router-dom";
import { Button, CardDiv, CardHeader, CardImage } from "./style";

const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();

  //   console.log(recipes);
  return (
    <div className=" mt-4  ">
      {recipes.map((item, index) => {
        return (
          <CardDiv key={index} >
            <CardHeader>{item?.recipe?.label}</CardHeader>
            <CardImage style={{ width: "300px" }} src={item?.recipe?.image} alt="" />
            <Button
              onClick={() => {
                navigate(`/details`, { state: item });
              }}
              className="btn btn-success"
            >
              more
            </Button>
          </CardDiv>
        );
      })}
    </div>
  );
};
export default RecipeCard;
