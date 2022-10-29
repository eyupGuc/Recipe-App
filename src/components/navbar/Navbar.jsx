import recipe from "../../assets/recipes.png";
import { NavLink } from "react-router-dom";
import { NavbarDiv } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavbarDiv>
      <div>
        <h1><span>RE</span>CIPE</h1>
      </div>
      <div>
        <div>
          <NavLink to="/" className="nav-link active " aria-current="page">
            HOME
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink
            to="/about"
            className="nav-link active"
            aria-current="page"
          >
            ABOUT
          </NavLink>
        </div>
        <div>
          <a
            href="https://github.com/eyupGuc"
            className="nav-link active "
            aria-current="page"
            target="_blank"
          >
            GİTHUB
          </a>
        </div>
        <div>
          <NavLink to="/" className="nav-link active " aria-current="page">
            LOGOUT
          </NavLink>
        </div>
      </div>
    </NavbarDiv>
  );
};
export default NavBar;
