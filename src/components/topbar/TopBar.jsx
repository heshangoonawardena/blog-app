import "./TopBar.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";

const TopBar = () => {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile-picture"
        />
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
};

export default TopBar;
