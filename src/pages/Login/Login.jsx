import React, { useState } from "react";
// Styles and icons
import "../../common/styles/form.css";
import loginPic from "../../assets/undraw_work_chat_re_qes4.svg";
// react router dom
import { Link, useNavigate } from "react-router-dom";

// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// react icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

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
    <div className="wrapper form">
      <div className="imege">
        <img src={loginPic} alt="" />
      </div>

      <form onSubmit={handleSubmit}>
        <h1>
          WOW Chat{" "}
          <sup style={{ marginLeft: "10px" }}>
            <h4>v0.2 BETA</h4>
          </sup>
        </h1>
        <h2>Login</h2>
        {err && <span className="error">Invalid Email & Password</span>}

        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
          <label htmlFor="">Email</label>
        </div>

        <div className="input-group">
          <input type="password" name="" id="" autoComplete="off" required />
          <label htmlFor="">Password</label>
        </div>

        <div className="input-group">
          <input type="submit" value="Sign In" />
        </div>

        <hr />
        <p>
          If you don't have an account <Link to="/register">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
