import { inventory } from '../inventory/Inventory';
import shop, { IWeapon } from './Shop';

const addBuyEvent = () => {
  Array.from(document.getElementsByClassName('buy-weapon-button')).forEach(({ id }) => {
    const buyBtnEl = document.getElementById(id) as HTMLButtonElement;
    const weapon = shop.getWeapons().find((weapon) => weapon.name === id.split('-')[1])!;

    buyBtnEl.addEventListener('click', () => {
      shop.buy(weapon.name);
    });
  });
};

export const setWeaponItems = () => {
  shop.getWeapons().forEach((weapon) => {
    const { name, price } = weapon;
    const weaponContainerEl = document.createElement('tr');
    const nameEl = document.createElement('td');
    const priceEl = document.createElement('td');
    const buyBtnEl = document.createElement('button');

    nameEl.innerText = name;
    priceEl.innerText = `${price.toString()}G`;
    buyBtnEl.innerText = 'BUY';

    buyBtnEl.id = `buy-${weapon.name}`;
    buyBtnEl.className = 'buy-weapon-button';

    weaponContainerEl.appendChild(nameEl);
    weaponContainerEl.appendChild(priceEl);
    weaponContainerEl.appendChild(buyBtnEl);

    document.getElementById('shop-container')?.appendChild(weaponContainerEl);
  });

  addBuyEvent();
  toggleBuyStatus();
};

export const toggleBuyStatus = () => {
  Array.from(document.getElementsByClassName('buy-weapon-button')).forEach(({ id }) => {
    const buyBtnEl = document.getElementById(id) as HTMLButtonElement;
    const weapon = shop.getWeapons().find((weapon) => weapon.name === id.split('-')[1])!;

    if (weapon.price <= inventory.getGold()) {
      buyBtnEl.disabled = false;
    } else {
      buyBtnEl.disabled = true;
    }
  });
};
