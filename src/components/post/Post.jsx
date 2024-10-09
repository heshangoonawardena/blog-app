import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos voluptate odio ducimus dolorem quidem expedita quo rem necessitatibus accusamus! Ab, delectus consectetur voluptatibus similique eius maiores corporis pariatur quaerat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio veritatis consequatur corrupti nam reprehenderit, consequuntur corporis pariatur nihil quod eaque rerum debitis reiciendis deserunt voluptas eum nostrum assumenda tempore ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nisi deserunt neque ab accusantium quis, perferendis enim eius nostrum voluptatibus voluptatum ex. Rerum ab quos a magni ea minus doloremque?</p>
    </div>
  );
};

export default Post;
