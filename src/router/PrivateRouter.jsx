import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import AppRouter from "./AppRouter";

const PrivateRouter = () => {
  const user = true;

  return <div>{user ? <AppRouter/> : <Login />}</div>;
};

export default PrivateRouter;
