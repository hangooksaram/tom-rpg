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
  const overlay = document.createElement('div');
  overlay.id = "overlay";
  const isInventoryHidden = document.getElementById("inventory")?.classList.contains('hidden');
  const toggle = ()=> document.getElementById("inventory")?.classList.toggle("hidden");

  if(isInventoryHidden){
    toggle();
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    overlay.addEventListener("click", ()=> {
      toggleInventory();
    })

    return;
  }
  
  toggle();
  document.body.removeChild(document.getElementById('overlay')!);  
};
