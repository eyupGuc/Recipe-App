import { Route, Routes,BrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import NavBar from "../components/navbar/Navbar";


const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
        
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
