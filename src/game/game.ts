import { inventory } from "../object/inventory/Inventory";
import Map from "../object/map";
import { player } from "../object/moving/player/Player";
import { mapsStore } from "../store/maps";
import { eventListeners } from "../util";
import { mapId } from "../util/generateRandomId";
import { createEnemies } from "../util/object";

export class Game {
  private static instance: Game;
  private landingEl: HTMLElement = document.getElementById("landing")!;
  private gameEl: HTMLElement = document.getElementById("root")!;
  public initialize() {
    const initialMap = new Map(mapId());
    mapsStore.addMap(initialMap);
    mapsStore.setCurrentMap(initialMap.id);
    player.init();
    player.initializeData();
    inventory.initializeData();
    eventListeners.forEach((fn) => fn());

    createEnemies("low");
    this.showLandingScreen();
  }

  public static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public showLandingScreen() {
    this.gameEl.classList.add("hidden");
  }
}

const game = Game.getInstance();

export { game };
