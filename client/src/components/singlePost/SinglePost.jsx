import "./SinglePost.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <FaTrashAlt className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>name</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eos adipisci optio incidunt beatae ullam doloremque fugiat voluptates
          error, esse delectus tempora! Quae doloribus illo repellat hic veniam
          ab eum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis sit doloremque perspiciatis ad harum amet, itaque fuga
          aliquid. Praesentium, officia. Nisi unde voluptatem laudantium ea nemo
          dolorum quae, nulla provident.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
