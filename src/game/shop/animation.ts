import { inventory } from '../inventory/Inventory';
import shop, { IWeapon } from './Shop';

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

  toggleBuyStatus();
};

export const toggleBuyStatus = () => {
  Array.from(document.getElementsByClassName('buy-weapon-button')).forEach((item) => {
    const id = item.id;
    const buyBtnEl = document.getElementById(id) as HTMLButtonElement;
    const boughtWeapon = id.split('-')[1];
    const weapon = shop.getWeapons().find((weapon) => weapon.name === boughtWeapon)!;

    if (weapon.price <= inventory.gold) {
      buyBtnEl.disabled = false;
      buyBtnEl.addEventListener('click', () => {
        shop.buy(weapon.name);
      });
    } else {
      buyBtnEl.disabled = true;
    }
  });
};
