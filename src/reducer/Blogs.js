import { GETDATA } from "../actions/types";

const initialState = {
  posts: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETDATA:
      return { ...state, posts: action.payload, loading: false };
    default:
      return state;
  }
}
