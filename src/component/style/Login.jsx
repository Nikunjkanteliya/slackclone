import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./Firebase";
import style from "../style/login.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  let [email, setmail] = useState("");
  let [password, setpassword] = useState("");

  let history = useHistory();

  let usermail = (event) => {
    setmail(event.target.value);
  };
  let userpass = (event) => {
    setpassword(event.target.value);
  };

  let submithandler = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/channel")
        

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    setmail("");
    setpassword("");
  };

  return (
    <div className={style.mainlogin}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4908/4908200.png"
        alt=""
        className={style.branch}
      />
      <h2 className={style.loginfont}> Login To ChatApp</h2>

      <div className={style.logininp}>
        <form onSubmit={submithandler}>
          <input
            type="email"
            placeholder="mail"
            onChange={usermail}
            value={email}
          />
          <input
            type="password"
            placeholder="Password "
            onChange={userpass}
            value={password}
          />
          <button className={style.loginbtn}>submit</button>
        </form>
      </div>
      <div className={style.loginuserlog}>
        {" "}
        Don't have an account?
        <span style={{ color: "#6435c9" }}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
