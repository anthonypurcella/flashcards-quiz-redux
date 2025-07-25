import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers: {
        addQuiz: (state, action) => {
          //Expected payload {id: '123456', name: 'quizName', topicId: '456', cardIds: ['1', '2', '3', ...]}
          const {id, name, topicId, cardIds} = action.payload;
          state.quizzes[id] = {
            id,
            name,
            topicId,
            cardIds
          }
        }
    },
});

export const {addQuiz} = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;