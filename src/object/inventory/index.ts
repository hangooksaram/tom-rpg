class Inventory {
  private static instance: Inventory;
  public gold: number = 0;
  public static getInstance() {
    if (!Inventory.instance) {
      Inventory.instance = new Inventory();
    }
    return Inventory.instance;
  }
  constructor() {}

  addGold(gold: number) {
    this.gold += gold;
  }
}

export const inventory = Inventory.getInstance();
