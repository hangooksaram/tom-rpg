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

export const initializeEquipmentTooltipText = () => {
  Array.from(document.getElementsByClassName('equipment')).forEach((el) => {
    const isDescended = el.getElementsByClassName('equipment-label')[0].classList.contains('fade-out-descending');
    const isAscended = el.getElementsByClassName('equipment-label')[0].classList.contains('fade-in-ascending');
    if (isDescended) {
      el.getElementsByClassName('equipment-label')[0].classList.remove('fade-out-descending');
    }
    if (isAscended) {
      el.getElementsByClassName('equipment-label')[0].classList.add('fade-out-descending');
    }
  });
};

export const setEquipmentTooltipText = () => {
  Array.from(document.getElementsByClassName('equipment')).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.getElementsByClassName('equipment-label')[0].classList.toggle('fade-in-ascending');
    });

    el.addEventListener('mouseleave', () => {
      el.getElementsByClassName('equipment-label')[0].classList.toggle('fade-in-ascending');
      el.getElementsByClassName('equipment-label')[0].classList.toggle('fade-in-descending');
    });
  });
};
