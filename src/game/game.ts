import { inventory } from "../object/inventory/Inventory";
import Map from "../object/map";
import { player } from "../object/moving/player/Player";
import { mapsStore } from "../store/maps";
import { eventListeners } from "../util";
import { mapId } from "../util/generateRandomId";
import { createLowEnemyObject } from "../util/object";

export class Game {
  private static instance: Game;

  public initialize() {
    const initialMap = new Map(mapId());
    mapsStore.addMap(initialMap);
    mapsStore.setCurrentMap(initialMap.id);
    player.init();
    player.initializeData();
    inventory.initializeData();
    eventListeners.forEach((fn) => fn());
    setInterval(() => {
      createLowEnemyObject();
    }, 50);
  }

  public static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}

const game = Game.getInstance();

export { game };
