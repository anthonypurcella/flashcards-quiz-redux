import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicReducer from "../features/topics/topicSlice"
import quizReducer from "../features/quizzes/quizzesSlice"
import cardReducer from "../features/cards/cardSlice"

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer,
  },
});
