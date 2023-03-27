import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

import style from "./style/channel.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import app from "./style/Firebase";
import Inp from "./Inp";
import { GoDiffAdded } from "react-icons/go";
import { AiOutlineMinusSquare } from "react-icons/ai";
import General from "./General";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Channel = () => {
  let [gent, setgent] = useState(false);
  let [channel, addchannels] = useState(false);

  let history = useHistory();
  let adddata = useSelector((state) => {
    return state.one.channelname;
  });

  let logoutfun = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let addchanne = () => {
    addchannels((prevstate) => !prevstate);
  };

  // console.log(channelalldata);
  return (
    <div>
      <header className={style.header}>
        <form>
          <input type="search" className={style.search} />
        </form>
        <button className={style.logout} onClick={logoutfun}>
          Logout
        </button>
      </header>
      <div className={style.seconddiv}>
        <span className={style.slack}>
          {" "}
          Slack <AiOutlineDown />
        </span>
        <span className={style.profile}>
          <CgProfile />
        </span>
        <div className={style.borders}> </div>
        <div className={style.connect}>
          <span className={style.sc}>
            {" "}
            <BsFillBuildingsFill />
            Slack Connect
          </span>
          <span className={style.bs}>
            <BsThreeDotsVertical /> Browse Slack
          </span>
        </div>
        <div className={style.borders}> </div>

        <div className={style.connect}>
          <span>
            <BsChevronCompactDown />
            Channels
          </span>
          <span
            className={style.bs}
            onClick={() => setgent((prevstate) => !prevstate)}
          >
            # general
          </span>{" "}
          <span className={style.bs}># random</span>
          <span className={style.bs}># slack-clone</span>
          {adddata.map((item, index) => {
            return (
              <span className={style.bs} key={Math.random()}>
                {" "}
                {`#${item}`}{" "}
              </span>
            );
          })}
          <span className={style.channel} onClick={addchanne}>
            <GoDiffAdded />
            Addchannel
          </span>
          <span className={style.channel}>
            <AiOutlineMinusSquare /> DirectMessage
          </span>
          <span className={style.channel}>
            <CgProfile />
            Slack you
          </span>
          <span className={style.channel}>
            <GoDiffAdded />
            Add coworkers
          </span>
        </div>

        <div className={style.last}>Slack clone</div>
        {gent && <General />}
        {channel && <Inp />}
      </div>
    </div>
  );
};

export default Channel;
