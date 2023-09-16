import { inventory } from "../object/inventory";

export const setAddGoldAnimation = (id: string, gold: number) => {
  const goldEl = document.createElement("div");
  goldEl.innerHTML = `+ ${gold}`;
  goldEl.classList.add("add-gold");
  const el = document.getElementById(`hit-animation-container-${id}`)!;
  el.appendChild(goldEl);
  console.log(el);
  setTimeout(() => {
    el.removeChild(goldEl);
  }, 1000);

  document.getElementById("gold")!.innerHTML = `${inventory.gold}G`;
};
