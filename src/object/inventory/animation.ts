import { inventory } from "./Inventory";

export const setAddGoldAnimation = (id: string, gold: number) => {
  const goldEl = document.createElement("div");
  goldEl.innerHTML = `+ ${gold}`;
  goldEl.classList.add("add-gold");
  const el = document.getElementById(`hit-animation-container-${id}`)!;
  el.appendChild(goldEl);
  setTimeout(() => {
    el.removeChild(goldEl);
  }, 1000);

  document.getElementById("gold")!.innerHTML = `${inventory.gold}G`;
};

export const toggleInventory = () => {
  document.getElementById("inventory")?.classList.toggle("hidden");
};
