import React from "react";
import style from "./style/regester.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import app from "./style/Firebase";
import { uiaction } from "./store/config";
import { useDispatch } from "react-redux";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  let [email, setmail] = useState("");
  let [password, setpassword] = useState("");
  let [name, setname] = useState("");
  let dispatch = useDispatch();
  let username = (event) => {
    setname(event.target.value);
  };

  let usermail = (event) => {
    setmail(event.target.value);
  };
  let userpass = (event) => {
    setpassword(event.target.value);
  };

  let submithandler = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        alert(" account created successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

    dispatch(uiaction.data(name));
    setmail("");
    setpassword("");
    setname("");
  };

  return (
    <div className={style.main}>
      <img
        src="https://w7.pngwing.com/pngs/984/97/png-transparent-jigsaw-puzzles-puzzle-break-long-island-game-positiv-and-negativ-game-orange-stock-photography.png"
        alt=""
        className={style.puzzle}
      />
      <h2 className={style.chatfont}> Register for ChatApp</h2>

      <div className={style.inp}>
        <form onSubmit={submithandler}>
          <input
            type="text"
            placeholder="Username"
            onChange={username}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Mailid"
            onChange={usermail}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={userpass}
            value={password}
            required
          />
          <input
            type="password"
            placeholder="Password Conformation"
            value={password}
            required
          />
          <button className={style.btn}>submit</button>
        </form>
      </div>
      <div className={style.userlog}>
        {" "}
        Already a user?{" "}
        <span style={{ color: "#037AF2" }}>
          {" "}
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
