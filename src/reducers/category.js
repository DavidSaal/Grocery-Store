import { SET_CATEGORY } from "../actions/types";

const initialState = "milk";

export default function setCategory(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORY:
      return payload;

    default:
      return state;
  }
}
