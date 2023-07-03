import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import enemies from "./enemySlice";
import player from "./playerSlice";

const store = configureStore({
  reducer: { enemies, player },
});

const dispatch = store.dispatch;
export default store;

export { dispatch };
