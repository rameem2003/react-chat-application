import React from "react";
import "../../common/styles/form.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="" method="post">
        <h1>WOW Chat</h1>
        <h2>Login</h2>
        <input type="email" name="" id="" placeholder="Enter Your Email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Create Your Password"
        />

        <input type="submit" value="Sign In" />

        <hr />
        <p>If you don't have an account Go SignUp</p>
      </form>
    </div>
  );
};

export default Login;
