import { server } from "../../server/server";

export class Inventory {
  private static instance: Inventory;
  public gold: number = 0;
  public static getInstance() {
    if (!Inventory.instance) {
      Inventory.instance = new Inventory();
    }
    return Inventory.instance;
  }
  constructor() {}

  async initializeData() {
    const res = await server.getServerData();

    this.gold = typeof res !== "string" ? res.inventory.gold : 20;
    document.getElementById("gold")!.innerHTML = `${this.gold}G`;
  }

  addGold(gold: number) {
    this.gold += gold;
  }
}

export const inventory = Inventory.getInstance();
