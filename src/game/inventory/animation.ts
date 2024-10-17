import { IWeapon } from '../shop/Shop';
import { inventory } from './Inventory';

export const setAddGoldAnimation = (id: string, gold: number) => {
  const goldEl = document.createElement('div');
  goldEl.innerHTML = `+ ${gold}`;
  goldEl.classList.add('add-gold');
  const el = document.getElementById(`hit-animation-container-${id}`)!;
  el.appendChild(goldEl);

  document.getElementById('gold')!.innerHTML = `${inventory.getGold()}G`;
};

export const setEquipmentText = (weapon: IWeapon) => {
  document.getElementById('equipment-weapon')!.innerText = weapon.name;
};
