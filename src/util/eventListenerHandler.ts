import { auth } from '../auth/GoogleAuth';
import { game } from '../game/game';
import shop from '../game/shop/Shop';
import { toggleBuyStatus } from '../game/shop/animation';
import { player } from '../object/moving/player/Player';
import { setClickTargetAnimation } from '../object/moving/player/animation';
import { mapsStore } from '../store/maps';

const addInventoryToggleEvent = () => {
  document.getElementById('inventory-toggle-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('inventory')! as HTMLDialogElement;
    modal.showModal();
  });

  document.getElementById('inventory-close-btn')!.addEventListener('click', () => {
    const modal = document.getElementById('inventory')! as HTMLDialogElement;
    modal.close();
  });
};

const addShopToggleEvent = () => {
  document.getElementById('shop-toggle-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('shop')! as HTMLDialogElement;
    modal.showModal();
    toggleBuyStatus();
  });

  document.getElementById('shop-close-btn')!.addEventListener('click', () => {
    const modal = document.getElementById('shop')! as HTMLDialogElement;
    modal.close();
  });
};

const addPlayerAttackEvent = () => {
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (e.key.toLowerCase() === 'a' || e.key === 'ㅁ') {
      player.attack();
    }
  });
};

const addSignInEvent = () => {
  document.getElementById('signin-button')!.addEventListener('click', () => {
    auth.signIn();
  });
};

const addEnterGameEvent = () => {
  document.getElementById('enter-game-button')?.addEventListener('click', () => {
    game.start();
  });
};

export const eventListeners = [
  addInventoryToggleEvent,
  addPlayerAttackEvent,
  addSignInEvent,
  addEnterGameEvent,
  addShopToggleEvent,
];
