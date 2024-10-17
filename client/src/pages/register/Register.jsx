import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="registerCard">
        <span className="registerTitle">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
          <label>Email</label>
          <input
            autoFocus
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton">Register</button>
        </form>
        <Link className="link" to="/login">
          <button type="submit" className="registerLoginButton">
            Login
          </button>
        </Link>
        {error && <span className="registerError">Something went wrong!</span>}
      </div>
    </div>
  );
};

export default Register;
