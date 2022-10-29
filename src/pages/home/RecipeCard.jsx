import pizza from "../../assets/u5ac-hero.jpg";

const RecipeCard =()=>{
return(

    <div className="card" style={{width: '8rem'}}>
        <div className="card-body">
          <h3>Name</h3>
          <img style={{width:"100px"}} src={pizza} alt="" />
          <h4> More</h4>
         
         
        </div>
      </div>
)

}
export default RecipeCard;