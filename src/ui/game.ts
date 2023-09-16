import { player } from "../object/moving/Player";
import { mapsStore } from "../store/maps";
import { createLowEnemyObject, deleteAllEnemies } from "../util/object";

export class GameUi {
  private static instance: GameUi;

  public static getInstance() {
    if (!GameUi.instance) {
      GameUi.instance = new GameUi();
    }
    return GameUi.instance;
  }

  toggleInventory() {
    document.getElementById("inventory")?.classList.toggle("hidden");
  }
}

const gameUi = GameUi.getInstance();

export { gameUi };
