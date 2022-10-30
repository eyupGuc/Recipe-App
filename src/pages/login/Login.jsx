import { useNavigate } from "react-router-dom";
import { CircleDiv, LoginDiv } from "./style";

const Login = () => {


  return (
    <LoginDiv>
      <CircleDiv><h1 >LOGİN</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-success mb-4">Login</button>
        </div>
      </form></CircleDiv>
      
    </LoginDiv>
  );
};

export default Login;
