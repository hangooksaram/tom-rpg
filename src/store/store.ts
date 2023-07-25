import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import enemies from "./enemySlice";

const store = configureStore({
  reducer: { enemies },
});

const dispatch = store.dispatch;
export default store;

export { dispatch };
