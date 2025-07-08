import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicReducer from "../features/topics/topicSlice"
import quizReducer from "../features/quizzes/quizzesSlice"

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
  },
});
