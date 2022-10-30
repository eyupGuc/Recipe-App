
import { NavLink } from "react-router-dom";
import { NavbarDiv, Recipe } from "./NavBar.styled";

function Nav() {
  return (
    <NavbarDiv>
      <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
      <Recipe>RECIPE</Recipe>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                
                })}
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                 
                })}
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                ABOUT
                
              </NavLink>
            </li>

            <li className="nav-item">
            <a
            href="https://github.com/eyupGuc"
            className="nav-link active "
            aria-current="page"
            target="_blank"
          >
            GİTHUB
          </a>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                 
                })}
                to="/login" className="nav-link active " aria-current="page"
              >
                LOGOUT
                {/* Link ile NavLink arasındaki fark NavLink tıklanıldığını biliyor isActive metodu ile */}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </NavbarDiv>
  );
}

export default Nav;
