import { createSlice } from "@reduxjs/toolkit";

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
    }
});

export const {addTopic} = topicSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicSlice.reducer;