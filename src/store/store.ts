import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import { enemyReducers as enemy } from "./enemyStore";
import { playerReducers as player } from "./playerStore";

const store = configureStore({
  reducer: { enemy, player },
});

export default store;
