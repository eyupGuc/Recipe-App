const RecipeCard = ({ recipes }) => {
  //   console.log(recipes);
  return (
    <div>
      {recipes.map((item) => {
        return (
          <div key={item?.recipe?.label} className="d-flex flex-direction-row">
            <h3>{item?.recipe?.label}</h3>
            <img style={{ width: "100px" }} src={item?.recipe?.image} alt="" />
            <h4> More</h4>
          </div>
        );
      })}
    </div>
  );
};
export default RecipeCard;
