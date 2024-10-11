import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerCard">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Email</label>
          <input
            autoFocus
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
          />
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
