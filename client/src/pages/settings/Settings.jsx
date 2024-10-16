import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegUserCircle } from "react-icons/fa";
import "./Settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "USER_DELETE" });
      // window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/api/upload/", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/api/users/${user._id}`, updatedUser);
      dispatch({ type: "USER_UPDATE", payload: res.data });
      setSuccess(true);
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span onClick={handleDelete} className="settingsDeleteTitle">
            Delete Account
          </span>
        </div>
        <form onSubmit={handleUpdate} className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            {/* {file  && console.log(URL.createObjectURL(file))} */}
            <img
              src={file ? URL.createObjectURL(file) : `${PF}${user.profilePic}`}
              alt="profile-picture"
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle className="settingsPPIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {success && (
            <p className="settingsSuccess">Profile updated successfully!</p>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
