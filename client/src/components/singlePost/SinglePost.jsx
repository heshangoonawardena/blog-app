import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/api/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPosts();
  }, [path]);

  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${path}`, {
        data: { username: user.username },
      });
      
      

      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const updatePost = async () => {
    try {
      await axios.put(`/api/posts/${path}`, {
        title,
        desc,
        username: user.username,
      });
      setUpdateMode(false);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={
            post.photo
              ? `${PF}${post.photo}`
              : "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt=""
        />
        {updateMode ? (
          <input
            className="singlePostTitleInput"
            type="text"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <FaEdit
                  onClick={() => setUpdateMode(true)}
                  className="singlePostIcon"
                />
                <FaTrashAlt onClick={handleDelete} className="singlePostIcon" />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={updatePost}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
