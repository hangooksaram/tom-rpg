import { auth } from "../auth/GoogleAuth";
import { game } from "../game/game";
import { toggleInventory } from "../object/inventory/animation";
import { player } from "../object/moving/player/Player";
import { setClickTargetAnimation } from "../object/moving/player/animation";
import { server } from "../server/server";
import { mapsStore } from "../store/maps";

const addSaveDataEvent = () => {
  document
    .getElementById("save-btn")
    ?.addEventListener("click", () => server.saveData());
};
const addInventoryToggleEvent = () => {
  document
    .getElementById("inventory-toggle-btn")
    ?.addEventListener("click", () => {
      toggleInventory();
    });
};

const addPlayerMoveEvent = () => {
  document
    .getElementById(mapsStore.currentMap?.id!)!
    .addEventListener("mousedown", (e) => {
      if (!mapsStore.isChanging) {
        player.move(e.clientX, e.clientY);
        setClickTargetAnimation({ x: e.clientX, y: e.clientY });
      }
    });
};
const addPlayerAttackEvent = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "a" || e.key === "ㅁ") {
      player.attack();
    }
  });
};

const addSignInEvent = () => {
  document.getElementById("signin-button")!.addEventListener("click", () => {
    auth.signIn();
  });
};

const addSignUpEvent = () => {
  document.getElementById("signup-button")!.addEventListener("click", () => {
    // auth.signUp();
  });
};

const addSignOutEvent = () => {
  document.getElementById("signout-button")!.addEventListener("click", () => {
    // auth.signOut();
  });
};

const addEnterGameEvent = () => {
  document
    .getElementById("enter-game-button")
    ?.addEventListener("click", () => {
      game.start();
    });
};

export const eventListeners = [
  addSaveDataEvent,
  addInventoryToggleEvent,
  addPlayerMoveEvent,
  addPlayerAttackEvent,
  addSignInEvent,
  addSignUpEvent,
  addSignOutEvent,
  addEnterGameEvent,
];
