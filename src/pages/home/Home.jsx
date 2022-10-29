
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";



const Home=()=>{
getRecipes=()=>{
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${id}&app_key=${api_key}&mealType=${time}`;


}

    return (

        <div>
           
            <Header/>
            <RecipeCard/>
          
            </div>
    )
}
export default Home;