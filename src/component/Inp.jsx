import React from "react";
import { useState } from "react";
import style from "./style/inp.module.css";
import { useDispatch } from "react-redux";
import { uiaction } from "./store/config";

const Inp = () => {
  let [inpdata, setinpdata] = useState(" ");
  let dispatch = useDispatch();

  let getinpdata = (event) => {
    setinpdata(event.target.value);
  };

  let submithandler = (event) => {
    event.preventDefault();
    dispatch(uiaction.channel(inpdata));
  };

  return (
    <div>
      <div className={style.main}>
        <h1> Write Your Channel Name</h1>
        <form onSubmit={submithandler}>
          <input type="text" onChange={getinpdata} />
          <button className={style.btnsubmit}> submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inp;
