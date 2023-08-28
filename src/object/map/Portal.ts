import { MapDirection } from "../..";

export class Portal {
  constructor(mapEl: HTMLDivElement, direction: MapDirection) {
    const el = document.createElement("div");
    el.classList.add("portal");
    el.classList.add(direction);
    mapEl.appendChild(el);
    el.addEventListener("click", () => {});
  }
}
