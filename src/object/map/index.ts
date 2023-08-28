import { MapDirection } from "../..";
import { mapsStore } from "../../store/maps";
import { Portal } from "./Portal";

const rootMap = document.getElementById("map-container")!;

export default class Map {
  public el: HTMLDivElement;
  public id: string;
  public northId: string = new Date().toISOString();
  public eastId: string = new Date().toISOString();
  public southId: string = new Date().toISOString();
  public westId: string = new Date().toISOString();

  get viewport() {
    return {
      horizontal: document.getElementById(`map-${this.id}`)!.offsetWidth,
      vertical: document.getElementById(`map-${this.id}`)!.offsetHeight,
    };
  }

  constructor(id: string) {
    this.id = id;
    this.el = document.createElement("div");
    this.el.classList.add("map");
    this.el.id = `map-${this.id}`;

    rootMap.append(this.el);
    this.createPortal();
    console.log(this);
  }

  createPortal() {
    const northPortal = new Portal(this.el, "north");
    const eastPortal = new Portal(this.el, "east");
    const southPortal = new Portal(this.el, "south");
    const westPortal = new Portal(this.el, "west");
  }

  setPortalAttribute(direction: MapDirection) {
    const el = document.createElement("div");
    el.classList.add("portal");
    el.classList.add(direction);
    this.el.appendChild(el);
    el.addEventListener("click", () => {});
  }

  moveToNextMap(id: string) {
    const map = new Map(id);
    const isDuplicated = mapsStore.mapsList.find((map) => map.id === id);
    if (!isDuplicated) mapsStore.addMap(map);
    mapsStore.setCurrentMap(id);
  }
}
