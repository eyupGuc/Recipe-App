import { useNavigate } from "react-router-dom";
import { Button } from "./style";

const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();

  //   console.log(recipes);
  return (
    <div className=" mt-4  ">
      {recipes.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item?.recipe?.label}</p>
            <img style={{ width: "300px" }} src={item?.recipe?.image} alt="" />
            <button
              onClick={() => {
                navigate(`/details`, { state: item });
              }}
              className="btn btn-success"
            >
              more
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default RecipeCard;
