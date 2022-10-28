import recipe from "../../assets/recipes.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <img style={{ width: "200px" }} src={recipe} alt="recipe" />{" "}
      </div>
      <div>
        <NavLink to="/" className="nav-link active" aria-current="page">
          HOME
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink to="/about" className="nav-link active" aria-current="page">
          ABOUT
        </NavLink>
        
      </div>
    </>
  );
};
export default NavBar;
