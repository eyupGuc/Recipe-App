import recipe from "../../assets/recipes.png";
import { NavLink } from "react-router-dom";
import { NavbarDiv } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavbarDiv>
      <div>
        <img style={{ width: "150px" }} src={recipe} alt="recipe" />{" "}
      </div>
      <div>
        <NavLink to="/" className="nav-link active p-3" aria-current="page">
          HOME
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink
          to="/about"
          className="nav-link active p-3"
          aria-current="page"
        >
          ABOUT
        </NavLink>
      </div>
      <div>
        <a
          href="https://github.com/eyupGuc"
          className="nav-link active p-3"
          aria-current="page"
          target="_blank"
        >
          GİTHUB
        </a>
      </div>
      <div>
        <NavLink to="/" className="nav-link active p-3" aria-current="page">
          LOGOUT
        </NavLink>
      </div>
    </NavbarDiv>
  );
};
export default NavBar;
