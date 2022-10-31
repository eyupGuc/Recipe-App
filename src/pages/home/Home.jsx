import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { useState } from "react";
import {
  HomeStyle,
  Input,
  SearchButton,
  SelectButton,
  InputSearchSelectDiv,
  HomeEmptyStyle,
} from "./style";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("");
  const [time, setTime] = useState("Dinner");

  //   const [time, setTime] = useState("time");
  const getRecipes = async () => {
    const id = "7a6a8251";
    const api_key = "9253186206ae0d9ef98b6b7f83bb9d31";
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${meal}&app_id=${id}&app_key=${api_key}&mealType=${time}`;
    const { data } = await axios(url);
    // console.log(data.hits);
    setRecipes(data.hits);
  };

  const handleClick = () => {
    meal && getRecipes();

    // console.log(meal);
    // console.log(time);
    setMeal("");
  };

  if (recipes.length === 0) {
    return (
      <HomeEmptyStyle>
        <Header />
        <InputSearchSelectDiv>
          <Input
            type="text"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            placeholder="Enter a food name"
            id="food"
          />
          <SearchButton onClick={handleClick}>search</SearchButton>
          <SelectButton
            aria-label="Default select example"
            id="times"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </SelectButton>
        </InputSearchSelectDiv>
      </HomeEmptyStyle>
    );
  } else {
    return (
      <HomeStyle>
        <Header />
        <InputSearchSelectDiv>
          <Input
            type="text"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            placeholder="Enter a food name"
            id="food"
          />
          <SearchButton onClick={handleClick}>search</SearchButton>
          <SelectButton
            aria-label="Default select example"
            id="times"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </SelectButton>
        </InputSearchSelectDiv>

        <RecipeCard recipes={recipes} />
      </HomeStyle>
    );
  }
};
export default Home;
