import { createSlice } from "@reduxjs/toolkit";
import { Player } from "..";
import { Position } from "..";
const initialState: Player = {
  id: "player",
  position: { x: 0, y: 0 },
  health: 0,
  mana: 0,
  isMoving: false,
  isHit: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    setPlayerPos: (state: Player, action) => {
      state.position = action.payload;
    },
    setIsPlayerMoving: (state: Player, action) => {
      state.isMoving = action.payload;
    },
  },
});

const playerActions = playerSlice.actions;
const playerReducers = playerSlice.reducer;
export default playerSlice;

export { playerActions, playerReducers };
