import { useContext, useState } from "react";
import "./Write.css";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/api/upload/", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/api/posts/", newPost);
      window.location.replace(`/post/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FaPlus className="writeIcon" />
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
