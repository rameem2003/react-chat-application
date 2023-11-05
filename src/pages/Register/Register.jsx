import React, { useState } from "react";
// Styles and icons
import "../../common/styles/form.css";
import file from "../../assets/file_icon.png";
import registerPic from "../../assets/undraw_collaborators_re_hont.svg";

// Firebase Auth
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

// react icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import AuthAnimation from "../../Components/AuthAnimation";

const Register = () => {
  const [passwordShow, isPasswordShow] = useState(false);
  const [isSpining, setIsSpining] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[3].files[0]);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    setIsSpining(true);

    // const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      setIsSpining(false);

      const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
          isSpining(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // console.log("File available at", downloadURL);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "alluser", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/");
          });
        }
      );
    } catch (error) {
      setErr(true);
      setIsSpining(false);
    }
  };

  const handleClick = () => {
    isPasswordShow(!passwordShow);
  };

  return (
    <div className="wrapper form">
      <div className="imege">
        <img src={registerPic} alt="" />

        <h1 className="tag">#JOIN THE WORLD OF FEELINGS</h1>
      </div>

      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>
            WOW Chat{" "}
            <sup style={{ marginLeft: "10px" }}>
              <h4></h4>
            </sup>
          </h1>
          <h2>Create an account. It's free!</h2>

          {err && <span className="error">Something Went Wrong</span>}

          <div className="input-group">
            <input type="text" required />
            <label htmlFor="">Enter Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label htmlFor="">Enter Your Email</label>
          </div>
          <div className="input-group">
            <input type={passwordShow ? "text" : "password"} required />
            <label htmlFor="">Create Your Password</label>
            <span onClick={handleClick}>
              {passwordShow ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <input type="file" id="file" hidden />
          <label htmlFor="file" className="file">
            <img src={file} alt="" />
            <span>Upload Your Imege</span>
          </label>

          <div className="input-group">
            {/* <input type="submit" value="Signup" />
            <AuthAnimation /> */}

            {isSpining ? (
              <AuthAnimation />
            ) : (
              <input type="submit" value="Sign In" />
            )}
          </div>

          <hr />
          <p>
            If you have an account <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
