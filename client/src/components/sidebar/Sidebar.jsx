import "./Sidebar.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          accusantium accusamus perspiciatis numquam tenetur ipsa quam placeat
          in, quae distinctio omnis aperiam autem laboriosam incidunt
          voluptatibus corrupti nulla rem blanditiis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaSquareFacebook className="sidebarIcon" />
          <FaInstagram className="sidebarIcon" />
          <FaGithub className="sidebarIcon" />
          <FaLinkedin className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
