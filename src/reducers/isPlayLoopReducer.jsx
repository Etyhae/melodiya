import { createSlice } from "@reduxjs/toolkit";

const loopInitialState = false || localStorage.getItem("isLoop");

export const isPlayLoopSlice = createSlice({
  name: "isPlayLoop",
  initialState: {
    value: loopInitialState, // начальное значение
  },
  reducers: {
    toggleLoop: (state) => {
      state.value = !state.value;
      localStorage.setItem("isLoop", state.value);
    },
  },
});

export const { toggleLoop } = isPlayLoopSlice.actions;

export default isPlayLoopSlice.reducer;
