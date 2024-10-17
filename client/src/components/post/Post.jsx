import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <Link className="link" to={`/post/${post._id}`}>
      <div className="post">
        <img
          className="postImg"
          src={
            post.photo
              ? `${PF}${post.photo}`
              : "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            {post?.categories.map((cat, index) => (
              <span key={index} className="postCat">
                {cat}
              </span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </Link>
  );
};

export default Post;
