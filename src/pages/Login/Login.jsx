import React, { useState } from "react";
import "../../common/styles/form.css";
import { Link, useNavigate } from "react-router-dom";

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[3].files[0]);
    const email = e.target[0].value;
    const password = e.target[1].value;

    // const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>WOW Chat</h1>
        <h2>Login</h2>
        {err && <span>Something Went Wrong</span>}
        <input type="email" name="" id="" placeholder="Enter Your Email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Create Your Password"
        />

        <input type="submit" value="Sign In" />

        <hr />
        <p>
          If you don't have an account <Link to="/register">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
