import { User } from "firebase/auth";
import { auth } from "../auth/Auth";
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

  public enterGame() {
    this.landingEl.classList.add("splash-screen");
    setTimeout(() => {
      this.landingEl.classList.add("hidden");
      this.gameEl.classList.remove("not-visible");
    }, 1000);

    this.startGame();
  }

  public startGame() {
    player.initialize();
    inventory.initialize();
    createEnemies("low");
  }

  public setLandingScreen() {
    if (auth.user) {
      document.getElementById("signin-button")?.classList.add("hidden");
      document.getElementById(
        "welcome-user"
      )!.innerHTML = `${auth.user.email} 님 다시 만나게되어 반갑습니다`;
      document.getElementById("enter-game-button")!.innerHTML = "이어하기";

      return;
    }
    document.getElementById("welcome-user")?.classList.add("hidden");
    document.getElementById("enter-game-button")!.classList.add("hidden");
  }
}

const game = Game.getInstance();

export { game };
