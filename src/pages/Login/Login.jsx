import React, { useState } from "react";
import AuthAnimation from "../../Components/AuthAnimation";

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
  const [passwordShow, isPasswordShow] = useState(false);
  const [isSpining, setIsSpining] = useState(false);
  const [err, setErr] = useState({ status: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[3].files[0]);
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email) {
      setErr({ status: true, msg: "Invalid email or field is empty" });
      setIsSpining(false);
    }

    if (!password) {
      setErr({ status: true, msg: "Please enter password" });
      setIsSpining(false);
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErr({ status: true, msg: "You entered an invalid email" });
      setIsSpining(false);
      return;
    }

    if (email && password) {
      setIsSpining(true);

      // const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        // console.log(error.code);
        setIsSpining(false);

        if (error.code.includes("auth/invalid-email")) {
          setErr({ status: true, msg: "Wrong email or password" });
        }
        if (error.code.includes("auth/wrong-password")) {
          setErr({ status: true, msg: "Wrong email or password" });
        }
      }
    }
  };

  const handleClick = () => {
    isPasswordShow(!passwordShow);
  };
  return (
    <div className="wrapper form">
      <div className="imege">
        <img src={loginPic} alt="" />

        <h1 className="tag">#SHARE YOUR FEELINGS</h1>
      </div>

      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>
            WOW Chat{" "}
            <sup style={{ marginLeft: "10px" }}>
              <h4></h4>
            </sup>
          </h1>
          <h2>Login</h2>
          {/* {isSpining ? <AuthAnimation /> : <></>} */}
          {err.status && <span className="error">{err.msg}</span>}

          <div className="input-group">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
            <label htmlFor="">Email</label>
          </div>

          <div className="input-group">
            <input
              type={passwordShow ? "text" : "password"}
              name=""
              id=""
              autoComplete="off"
              required
            />
            <label htmlFor="">Password</label>
            <span onClick={handleClick}>
              {passwordShow ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group">
            {isSpining ? (
              <AuthAnimation />
            ) : (
              <input type="submit" value="Sign In" />
            )}

            {/* <input type="submit" value="Sign In" /> */}
          </div>

          <hr />
          <p>
            If you don't have an account <Link to="/register">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
