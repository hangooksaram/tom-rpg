import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import { enemyReducers as enemy } from "./enemyStore";

const store = configureStore({
  reducer: { enemy },
});

export default store;
