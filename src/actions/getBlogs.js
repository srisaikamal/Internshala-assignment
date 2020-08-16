import { GETDATA } from "./types";

import axios from "axios";
export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://internshala-project.firebaseio.com/blogs.json"
    );
    dispatch({
      type: GETDATA,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};
