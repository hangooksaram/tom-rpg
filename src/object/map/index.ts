import { mapsStore } from "../../store/maps";
import { mapId } from "../../util/generateRandomId";
import { player } from "../moving/player/Player";
import { setClickTargetAnimation } from "../moving/player/animation";
import { Portal } from "./Portal";

const rootMap = document.getElementById("map-container")!;

export default class Map {
  public el: HTMLCanvasElement;
  public id: string;
  public northId: string;
  public eastId: string;
  public southId: string;
  public westId: string;
  public canvasCtx:CanvasRenderingContext2D | null;

  get viewport() {
    return {
      horizontal: document.getElementById(`${this.id}`)!.offsetWidth,
      vertical: document.getElementById(`${this.id}`)!.offsetHeight,
    };
  }

  constructor(
    id: string,
    northId?: string,
    eastId?: string,
    southId?: string,
    westId?: string
  ) {
    this.id = id;
    this.el = document.createElement("canvas");
    this.canvasCtx = this.el?.getContext('2d');
    this.el.classList.add("map");
    this.el.id = `${this.id}`;
    this.northId = northId ?? mapId();
    this.eastId = eastId ?? mapId();
    this.southId = southId ?? mapId();
    this.westId = westId ?? mapId();

    rootMap.append(this.el);
    document.getElementById(this.id)!.addEventListener("mousedown", (e) => {
      if (!mapsStore.isChanging) {
        player.move(e.clientX, e.clientY);
        setClickTargetAnimation({ x: e.clientX, y: e.clientY });
      }
    });
    this.createPortal();
  }

  createPortal() {
    const northPortal = new Portal(this.el, "north", this.id, this.northId);
    const eastPortal = new Portal(this.el, "east", this.id, this.eastId);
    const southPortal = new Portal(this.el, "south", this.id, this.southId);
    const westPortal = new Portal(this.el, "west", this.id, this.westId);
  }
}
