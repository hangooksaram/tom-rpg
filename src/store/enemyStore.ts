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
        }
      });
    },
    addEnemy: (state: Enemy[], action) => {
      return (state = [...state, action.payload]);
    },
    deleteEnemy: (state: Enemy[], action) => {
      return state.filter((enemy) => enemy.id !== action.payload.id);
    },
    hit: (state: Enemy[], action) => {
      state.map((enemy) => {
        if (enemy.id === action.payload.id) {
          enemy.health -= 5;
          enemy.isHit = true;
        }
      });
    },
    afterHit: (state: Enemy[], action) => {
      state.map((enemy) => {
        if (enemy.id === action.payload.id) {
          enemy.isHit = false;
        }
      });
    },
  },
});

const enemyActions = enemySlice.actions;
const enemyReducers = enemySlice.reducer;
export default enemySlice;

export { enemyActions, enemyReducers };
