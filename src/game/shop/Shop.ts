import { auth } from '../../auth/GoogleAuth';
import { player } from '../../object/moving/player/Player';
import { http } from '../../server/http';
import { server } from '../../server/server';
import { inventory } from '../inventory/Inventory';
import { setWeaponItems } from './animation';

export interface IWeapon {
  name: string;
  price: number;
  power: number;
}

interface IItem {
  weapon: {
    [key: string]: IWeapon;
  };
}

class Shop {
  private static instance: Shop;
  #weapons: IWeapon[] = [];

  public static getInstance() {
    if (!Shop.instance) {
      Shop.instance = new Shop();
    }
    return Shop.instance;
  }

  initialize() {
    (async () => {
      this.#weapons = await this.fetchWeapons();

      setWeaponItems();
    })();
  }

  async fetchWeapons() {
    const idToken = await auth.user?.getIdToken();
    const shopItems = await http.fetch<IItem>({
      method: 'GET',
      param: `items.json?auth=${idToken}`,
    });
    const weapons = Object.values(shopItems.weapon);

    return weapons;
  }

  getWeapons() {
    return this.#weapons;
  }

  setWeapons(weapons: IWeapon[]) {
    this.#weapons = [...weapons];
  }

  buy(name: string) {
    const boughtWeapon = this.#weapons.find((weapon) => weapon.name === name)!;

    inventory.useGold(boughtWeapon.price);
    document.getElementById('gold')!.innerHTML = `${inventory.getGold()}G`;

    inventory.setWeapon(boughtWeapon);
    player.setPower(boughtWeapon.power);
    server.saveData();
  }
}

const shop = Shop.getInstance();

export default shop;
