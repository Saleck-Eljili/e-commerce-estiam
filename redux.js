import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    addPro: (state, action) => {
      // {type: "card/addPro", payload: text}
      const newPro = {};
      state.push(newPro);
    },
  },
});

export const { addPro } = cardSlice.actions;

export const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});
