import { User } from "firebase/auth";
import { inventory } from "../object/inventory/Inventory";
import Map from "../object/map";
import { player } from "../object/moving/player/Player";
import { mapsStore } from "../store/maps";
import { eventListeners } from "../util";
import { mapId } from "../util/generateRandomId";
import { createRandomEnemies } from "../util/object";
import { auth } from "../auth/GoogleAuth";

export class Game {
  private static instance: Game;
  private landingEl: HTMLElement = document.getElementById("landing")!;
  private gameEl: HTMLElement = document.getElementById("root")!;
  public initialMap: Map = new Map(mapId());

  public initialize() {
    mapsStore.addMap(this.initialMap);
    mapsStore.setCurrentMap(this.initialMap.id);
    eventListeners.forEach((fn) => fn());
  }

  public static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public start() {
    this.setLandingScreenAnimation();
    this.initializeObjects();
  }

  public setLandingScreenAnimation() {
    this.landingEl.classList.add("splash-screen");
    setTimeout(() => {
      this.landingEl.classList.add("hidden");
      this.gameEl.classList.remove("not-visible");
    }, 1000);
  }

  public initializeObjects() {
    player.initialize();
    inventory.initialize();
    createRandomEnemies();
  }

  public setLandingScreen() {
    if (auth.user) {
      document.getElementById("auth")?.classList.add("hidden");
      document.getElementById(
        "welcome-user"
      )!.innerHTML = `${auth.user.displayName} 님 다시 만나게되어 반갑습니다`;
      document.getElementById("enter-game-button")!.innerHTML = "이어하기";

      document
    .getElementById("enter-game-button")
    ?.addEventListener("click", () => {
      game.start();
    });
      return;
    }
    document.getElementById("signed-container")?.classList.add("hidden");
  }
}

const game = Game.getInstance();

export { game };
