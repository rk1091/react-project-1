import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Rk's Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="text" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
