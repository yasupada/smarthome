const { combineReducers } = require("redux");
import jsonReducer from "./jsonfeedscreen.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({jsonReducer, loginReducer})