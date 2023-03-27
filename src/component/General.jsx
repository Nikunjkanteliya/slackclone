import React, { useEffect, useState } from "react";
import style from "./style/general.module.css";
import { Send } from "./http/axios";
import { Get } from "./http/axios";
import { async } from "@firebase/util";

import axios from "axios";
import { useSelector } from "react-redux";

const General = () => {
  let [chatdataall, setchatdata] = useState("");
  let [displaydata, setdisplay] = useState("");

  let allarr = [];

  let useraccnae = useSelector((state) => state.one.names);


  let fun = async () => {
    let responses = await Get();
    if (responses.status == 200) {
      setdisplay(responses.data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    fun();
  }, []);

  for (let key in displaydata) {
    let obj = {
      id: key,
      chat: displaydata[key].chat,
      name: displaydata[key].name,
    };

    allarr.push(obj);
  }

  let chatdata = (event) => {
    setchatdata(event.target.value);
  };
  let submithandler = (event) => {
    event.preventDefault();

    let obj = {
      chat: chatdataall,
      name: useraccnae,
    };

    Send(obj)
      .then(() => {
        fun();
      })
      .catch((error) => {
        console.log(error);
      });

    setchatdata("");
  };

  return (
    <div  className={style.maindivgeneral}>
      <div className={style.datadiv}>
        {allarr.map((item, index) => {
          console.log(item);
          return (
            <ul key={item.id} className={style.fetchdata}>
              <li className={style.lidata}
                title="Double Click To Delete"
                onDoubleClick={() =>
                  axios
                    .delete(
                      `https://slackicon-98d9d-default-rtdb.firebaseio.com/data/${item.id}.json `
                    )
                    .then(() => {
                      fun();
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                }
                style={{ listStyleType: "none" }}
              >
                {item.chat}
                <sup className={style.namesone}>{`User : ${item.name}`}</sup>
              </li>
            </ul>
          );
        })}
      </div>

      <form onSubmit={submithandler} className={style.forms}>
        <input
          type="text"
          className={style.inp}
          onChange={chatdata}
          value={chatdataall}
        />
        <button className={style.sendbutton}> send</button>
      </form>
    </div>
  );
};

export default General;
