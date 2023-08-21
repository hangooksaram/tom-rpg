import { Player } from "..";

class LocalData {
  get() {
    return JSON.parse(window.localStorage.getItem("player")!);
  }

  set(playerData: Player) {
    window.localStorage.setItem("player", JSON.stringify(playerData));
  }
}

const localData = new LocalData();

export default localData;
