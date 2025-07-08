import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {

        }
    },
    reducers: {
        addCard: (state, action) => {
          // expected payload { id: '123', front: 'front of card', back: 'back of card'}
          const {id, front, back} = action.payload;
          state.cards[id] = {
            id,
            front,
            back
          }
        }
    },
});

export const {addCard} = cardSlice.actions;
export const selectCard = (state, id) => state.cards.cards[id];
export default cardSlice.reducer;