import Map from ".";
import { MapDirection } from "../..";
import { enemyStore } from "../../store/enemy";
import { mapsStore } from "../../store/maps";
import { createRandomEnemies, deleteAllEnemies } from "../../util/object";

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

      setTimeout(()=>{
        createRandomEnemies();      
      },500)
      this.changeMap(true);
    } else this.changeMap(false);

    mapsStore.setCurrentMap(id);
  }

  changeMap(createNew: boolean) {
    document.getElementById(
      "map-id"
    )!.innerHTML = `현재 맵 ID : ${this.nextMapId}`;

    const changingMapUi = document.createElement("div");
    document.getElementById("root")?.appendChild(changingMapUi);
    changingMapUi.classList.add("change-map-ui");

    mapsStore.isChanging = true;


    setTimeout(() => {
      document.getElementById("root")?.removeChild(changingMapUi);
      mapsStore.isChanging = false;
    }, 1000);

    
    

    document.getElementById(this.currentMapId)!.style.display = "none";
    document.getElementById(this.nextMapId)!.style.display = "block";
  }
}
