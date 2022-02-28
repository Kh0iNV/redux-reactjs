import { combineReducers } from "redux";
import hobbyReducer from "./hobby.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;
