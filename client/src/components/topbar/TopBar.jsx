import "./TopBar.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <FaSquareFacebook className="topIcon" />
        <FaInstagram className="topIcon" />
        <FaGithub className="topIcon" />
        <FaLinkedin className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/login">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to='/settings'>
          <img
            className="topImg"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile-picture"
            />
            </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
};

export default TopBar;
