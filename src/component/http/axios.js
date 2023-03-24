import { async } from "@firebase/util";
import axios from "axios";

export let Send = async (data) => {
  try {
    await axios.post(
      "https://slackicon-98d9d-default-rtdb.firebaseio.com/data.json",
      data
    );
  } catch (error) {
    console.log(error);
  }
};
export let Get = async () => {
  try {
    let response = await axios.get(
      " https://slackicon-98d9d-default-rtdb.firebaseio.com/data.json"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};


