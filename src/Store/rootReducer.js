import home from "./home/Reducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
