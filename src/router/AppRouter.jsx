import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import NavBar from "../components/navbar/Navbar";


const AppRouter = () => {
  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/:index" element={<Details />} />
      </Routes>
    </>
  );
};
export default AppRouter;
