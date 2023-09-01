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
}

const gameUi = GameUi.getInstance();

export { gameUi };
