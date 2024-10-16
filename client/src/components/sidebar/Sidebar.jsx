import { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    fetchCats();
  }, []);

  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={user?.profilePic && `${PF}${user.profilePic}`} alt="" />
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
          {cats.map((cat) => (
            <Link key={cat._id} className="link" to={`/?cat=${cat.name}`}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Heshan-Goonawardena/pfbid02dTXp4cgNELqsuww3paCAJX8vqUae8P53wrsyQf1np7vnof7wDu531nPyf2KmqtXkl/"
          >
            <FaSquareFacebook className="sidebarIcon" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/heshan.goonawardena/"
          >
            <FaInstagram className="sidebarIcon" />
          </a>
          <a target="_blank" href="https://github.com/heshangoonawardena">
            <FaGithub className="sidebarIcon" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/heshan-goonawardena-037851184/"
          >
            <FaLinkedin className="sidebarIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
