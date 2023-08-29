import Map from ".";
import { MapDirection } from "../..";
import { mapsStore } from "../../store/maps";
import { gameUi } from "../../ui/game";

export class Portal {
  public mapEl: HTMLDivElement;
  public direction: MapDirection;
  public currentMapId: string = "";
  public nextMapId: string = "";
  constructor(
    mapEl: HTMLDivElement,
    direction: MapDirection,
    currentMapId: string,
    nextMapId: string
  ) {
    this.mapEl = mapEl;
    this.direction = direction;
    this.currentMapId = currentMapId;
    this.nextMapId = nextMapId;

    const el = document.createElement("div");
    el.classList.add("portal");
    el.classList.add(direction);
    mapEl.appendChild(el);
    el.addEventListener("click", () => {
      this.moveToNextMap(this.nextMapId);
    });
  }
  moveToNextMap(id: string) {
    const mapContainerEl = document.getElementById("map-container");
    // mapContainerEl?.removeChild(document.getElementById(this.currentMapId)!);
    document.getElementById(this.currentMapId)!.style.display = "none";
    const isDuplicated = mapsStore.mapsList.find((map) => map.id === id);
    if (!isDuplicated) {
      const map = new Map(
        id,
        this.direction === "south" ? this.currentMapId : undefined,
        this.direction === "west" ? this.currentMapId : undefined,
        this.direction === "north" ? this.currentMapId : undefined,
        this.direction === "east" ? this.currentMapId : undefined
      );

      mapsStore.addMap(map);
    }
    console.log(mapsStore.mapsList);
    mapsStore.setCurrentMap(id);
    this.changeMap();
  }

  changeMap() {
    document.getElementById(
      "map-id"
    )!.innerHTML = `현재 맵 ID : ${this.nextMapId}`;
    gameUi.changeMap();
    document.getElementById(this.currentMapId)!.style.display = "none";
    document.getElementById(this.nextMapId)!.style.display = "block";
  }
}
