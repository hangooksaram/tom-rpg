import { server } from '../../server/server';
import { toggleBuyStatus } from '../shop/animation';

export class Inventory {
  private static instance: Inventory;
  public gold: number = 20;
  public static getInstance() {
    if (!Inventory.instance) {
      Inventory.instance = new Inventory();
    }
    return Inventory.instance;
  }
  constructor() {}

  async initialize() {
    const res = await server.getServerData();

    this.gold = typeof res !== 'string' && Object(res).hasOwnProperty('inventory') ? res.inventory.gold : 20;
    document.getElementById('gold')!.innerHTML = `${this.gold}G`;
  }

  addGold(gold: number) {
    this.gold += gold;
  }

  useGold(gold: number) {
    this.gold -= gold;
    toggleBuyStatus();
  }

  setGold(gold: number) {
    this.gold = gold;
    document.getElementById('gold')!.innerHTML = `${this.gold}G`;
  }
}

export const inventory = Inventory.getInstance();
