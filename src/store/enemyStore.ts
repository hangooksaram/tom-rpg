import { createSlice } from "@reduxjs/toolkit";

import { Enemy } from "../index";

const enemyId = new Date().toISOString();
const initialState: Enemy[] = [];

const enemySlice = createSlice({
  name: "enemy",
  initialState: initialState,
  reducers: {
    setEnemyPos: (state: Enemy[], action) => {
      state.map((enemy) => {
        if (action.payload?.id === enemy.id) {
          enemy.position = action.payload.position;
        } else {
          state.push(action.payload);
        }
      });
    },
  },
});

const enemyActions = enemySlice.actions;
const enemyReducers = enemySlice.reducer;
export default enemySlice;

export { enemyActions, enemyReducers };
