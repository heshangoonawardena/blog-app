import "./TopBar.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const TopBar = () => {
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  return (
    <div className="top">
      <div className="topLeft">
        <a
          target="_blank"
          href="https://www.facebook.com/people/Heshan-Goonawardena/pfbid02dTXp4cgNELqsuww3paCAJX8vqUae8P53wrsyQf1np7vnof7wDu531nPyf2KmqtXkl/"
        >
          <FaSquareFacebook className="topIcon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/heshan.goonawardena/"
        >
          <FaInstagram className="topIcon" />
        </a>
        <a target="_blank" href="https://github.com/heshangoonawardena">
          <FaGithub className="topIcon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/heshan-goonawardena-037851184/"
        >
          <FaLinkedin className="topIcon" />
        </a>
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
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user?.profilePic && `${PF}${user.profilePic}`}
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
