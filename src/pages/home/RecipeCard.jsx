import pizza from "../../assets/u5ac-hero.jpg";

const RecipeCard =({recipes})=>{
    console.log(recipes)
return(

    <div className="card" style={{width: '8rem'}}>

        {recipes.map((item)=>{
            return <div className="d-flex flex-direction-column">
            <h3>{item?.recipe?.label}</h3>
            <img style={{width:"100px"}} src={item?.recipe?.image} alt="" />
            <h4> More</h4>
           
           
          </div>
        })}
        
      </div>
)

}
export default RecipeCard;