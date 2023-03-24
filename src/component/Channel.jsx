import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style/channel.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import { GoDiffAdded } from "react-icons/go";
import { AiOutlineMinusSquare } from "react-icons/ai";
import General from "./General";

const Channel = () => {
  let [gent, setgent] = useState(false);
  
  return (
    <div>
      <header className={style.header}>
        <form>
          <input type="search" className={style.search} />
        </form>
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
          <span className={style.channel}>
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
      </div>
    </div>
  );
};

export default Channel;
