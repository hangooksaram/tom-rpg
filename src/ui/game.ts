export class GameUi {
  private static instance: GameUi;

  public static getInstance() {
    if (!GameUi.instance) {
      GameUi.instance = new GameUi();
    }
    return GameUi.instance;
  }

  get viewport() {
    return {
      horizontal: document.getElementById("map")!.offsetWidth,
      vertical: document.getElementById("map")!.offsetHeight,
    };
  }
}

const gameUi = GameUi.getInstance();

export { gameUi };
