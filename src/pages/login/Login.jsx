
import { useNavigate } from "react-router-dom"; 


const Login = () => {
  const navigate=useNavigate();

const buttonClick=()=>{
  navigate("/")
}

  return (
    <div className="container border border-3 mt-5 w-75 bg-info">
      <h1 className="text-center mt-4">LOGİN</h1>
      <form>
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
         
          />
        </div>
        <div className="text-center">
          <button
            onClick={buttonClick}
            className="btn btn-success mb-4"
          >
            Login
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default Login;
