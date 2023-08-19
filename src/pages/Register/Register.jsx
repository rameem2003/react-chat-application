import React from "react";
import "../../common/styles/form.css";

const Register = () => {
  return (
    <div className="wrapper">
      <form action="" method="post">
        <h1>WOW Chat</h1>
        <h2>Register</h2>

        <input type="text" name="" id="" placeholder="Enter Your Name" />
        <input type="email" name="" id="" placeholder="Enter Your Email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Create Your Password"
        />

        <input type="file" name="" id="file" hidden />
        <label htmlFor="file">FILE</label>

        <input type="submit" value="Signup" />

        <hr />
        <p>If you have an account Go SignIn</p>
      </form>
    </div>
  );
};

export default Register;
