import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const topicSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) => {
            //Expected payload {id: '123456', name: 'topicName', icon: 'iconUrl'}
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const {topicId, id} = action.payload;
            state.topics[topicId].quizIds.push(id);
        })
    }
});

export const {addTopic} = topicSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicSlice.reducer;