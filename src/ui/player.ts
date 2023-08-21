import { ObjectId } from "..";
import { player } from "../object/moving/Player";

export class PlayerUi {
  private static instance: PlayerUi;

  public static getInstance() {
    if (!PlayerUi.instance) {
      PlayerUi.instance = new PlayerUi();
    }
    return PlayerUi.instance;
  }

  setHpStatus() {
    (document.getElementsByClassName(
      "hp"
    )[0] as HTMLDivElement)!.style.height = `${
      (player.health / player.maxHealth) * 150
    }px`;
  }
}

const playerUi = PlayerUi.getInstance();

export { playerUi };
