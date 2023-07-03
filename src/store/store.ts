import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import enemyStore from "./enemyStore";
import playerStore from "./playerStore";

const store = configureStore({
  reducer: { enemyStore, playerStore },
});

const enemies = store.getState().enemyStore;
const player = store.getState().playerStore;

const dispatch = store.dispatch;
export default store;

export { enemies, player, dispatch };
