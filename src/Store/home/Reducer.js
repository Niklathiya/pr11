// import { HYDRATE } from "next-redux-wrapper";
import {
  GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILED,
} from "./Actiontypes";

const initState = {
  loading: false,
  error: null,
  homePageData: null,
  userInformation: null,
};

export default (state = initState, action) => {
  switch (action.type) {

    case GET_HOME_DATA_REQUEST:
      state = { ...state, loading: true };
      break;
    case GET_HOME_DATA_SUCCESS:
      state = {
        ...state,
        loading: false,
        homePageData: action.payload,
      };
      break;
    case GET_HOME_DATA_FAILED:
      state = { ...state, loading: false, error: action.payload };
      break;

    default:
      break;
  }
  return state;
};
