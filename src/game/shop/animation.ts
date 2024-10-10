import shop from './Shop';

export const setWeaponItems = () => {
  shop.getWeapons().forEach((weapon) => {
    const { name, price, power } = weapon;
    const weaponContainerEl = document.createElement('tr');
    const nameEl = document.createElement('td');
    const priceEl = document.createElement('td');

    const buyBtnEl = document.createElement('button');

    nameEl.innerText = name;
    priceEl.innerText = price.toString();
    buyBtnEl.innerText = 'BUY';

    buyBtnEl.addEventListener('click', () => {
      shop.buy(name);
    });

    weaponContainerEl.appendChild(nameEl);
    weaponContainerEl.appendChild(priceEl);

    weaponContainerEl.appendChild(buyBtnEl);

    document.getElementById('shop-container')?.appendChild(weaponContainerEl);
  });
};
