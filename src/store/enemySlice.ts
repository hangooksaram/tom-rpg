import { createSlice } from "@reduxjs/toolkit";

import { Enemy } from "../index";

const initialState: Enemy[] = [];

const enemySlice = createSlice({
  name: "enemy",
  initialState: initialState,
  reducers: {
    addEnemy: (state: Enemy[], action) => {
      return (state = [...state, action.payload]);
    },
    setEnemyPos: (state: Enemy[], action) => {
      state.map((enemy) => {
        if (action.payload?.id === enemy.id) {
          enemy.position = action.payload.position;
        }
      });
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
  },
});

export const { addEnemy, setEnemyPos, deleteEnemy, hit } = enemySlice.actions;

export default enemySlice.reducer;
