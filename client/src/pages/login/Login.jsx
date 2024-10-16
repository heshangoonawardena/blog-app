import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`/api/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="loginCard">
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
          <label>Username</label>
          <input
            ref={userRef}
            autoFocus
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
          />
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
          />
          <button disabled={isFetching} type="submit" className="loginButton">
            Login
          </button>
        </form>
        <Link className="link" to="/register">
          <button className="loginRegisterButton">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
