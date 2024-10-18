import { server } from '../../server/server';
import { toggleBuyStatus } from '../shop/animation';
import { IWeapon } from '../shop/Shop';
import { initializeEquipmentTooltipText, setEquipmentText, setEquipmentTooltipText } from './animation';

export class Inventory {
  private static instance: Inventory;
  #gold: number = 20;
  #weapon: IWeapon | {} = {};
  public static getInstance() {
    if (!Inventory.instance) {
      Inventory.instance = new Inventory();
    }
    return Inventory.instance;
  }
  constructor() {}

  async initialize() {
    try {
      const res = await server.getServerData();

      this.#gold = res.inventory.gold ?? 20;
      if (res.inventory.weapon) this.setWeapon(res.inventory.weapon);
      initializeEquipmentTooltipText();
      setEquipmentTooltipText();
      document.getElementById('gold')!.innerHTML = `${this.#gold}G`;
    } catch (e) {
      console.log(e);
    }
  }

  addGold(gold: number) {
    this.#gold += gold;
  }

  useGold(gold: number) {
    this.#gold -= gold;
    toggleBuyStatus();
  }

  setGold(gold: number) {
    this.#gold = gold;
    document.getElementById('gold')!.innerHTML = `${this.#gold}G`;
  }

  getGold() {
    return this.#gold;
  }

  setWeapon(weapon: IWeapon) {
    this.#weapon = weapon;

    setEquipmentText(weapon);
  }

  getWeapon() {
    return this.#weapon;
  }

  getDatas() {
    return {
      gold: this.#gold,
      weapon: this.#weapon,
    };
  }
}

export const inventory = Inventory.getInstance();
