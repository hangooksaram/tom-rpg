import { player } from "../object/moving/Player";
import { mapsStore } from "../store/maps";
import { createEnemyObject, deleteAllEnemies } from "../util/object";

export class GameUi {
  private static instance: GameUi;

  public static getInstance() {
    if (!GameUi.instance) {
      GameUi.instance = new GameUi();
    }
    return GameUi.instance;
  }

  // get viewport() {
  //   return {
  //     horizontal: document.getElementById("map")!.offsetWidth,
  //     vertical: document.getElementById("map")!.offsetHeight,
  //   };
  // }

  changeMap() {
    console.log("changed");
    const el = document.createElement("div");
    document.getElementById("root")?.appendChild(el);
    el.classList.add("change-map-ui");
    mapsStore.isChanging = true;
    setTimeout(() => {
      document.getElementById("root")?.removeChild(el);
      console.log(document.getElementById("root"));
      mapsStore.isChanging = false;
    }, 1000);
    setInterval(() => {
      createEnemyObject();
    }, 50);
  }
}

const gameUi = GameUi.getInstance();

export { gameUi };
