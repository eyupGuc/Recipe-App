
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { useEffect, useState } from "react";



const Home=()=>{
    const[recipes,setRecipes]=useState([]);
const getRecipes=async()=>{
    const id="7a6a8251";
    const api_key="9253186206ae0d9ef98b6b7f83bb9d31"
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${id}&app_key=${api_key}&mealType=breakfast`;
 const {data}= await axios(url);
 console.log(data.hits[0].recipe.label)
 setRecipes(data.hits)

}


useEffect(()=>{
    getRecipes();

},[])

    return (

        <div>
           
            <Header/>
            <RecipeCard recipes={recipes}/>
          
            </div>
    )
}
export default Home;