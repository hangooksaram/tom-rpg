class Storage {
  private static instance: Storage;
  public gold: number = 0;
  public static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
  constructor() {}

  addGold(gold: number) {
    this.gold += gold;
  }
}

export const storage = Storage.getInstance();
