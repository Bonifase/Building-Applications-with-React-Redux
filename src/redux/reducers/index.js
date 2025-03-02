import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootRducer = combineReducers({
    courses
});

export default rootRducer; //root reducer
