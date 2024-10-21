import { mapsStore } from '../../store/maps';
import { mapId } from '../../util/generateRandomId';
import { player } from '../moving/player/Player';
import { setClickTargetAnimation } from '../moving/player/animation';
import { Portal } from './Portal';
import { Direction, IPortals } from './type';

const rootMap = document.getElementById('map-container')!;

export default class Map {
  public el: HTMLDivElement;
  public id: string;
  public northId: string;
  public eastId: string;
  public southId: string;
  public westId: string;
  #northPortal: Portal | undefined;
  #southPortal: Portal | undefined;
  #eastPortal: Portal | undefined;
  #westPortal: Portal | undefined;
  #portalToNextMap: { nextMapId: string; direction: string } | undefined;

  get viewport() {
    return {
      horizontal: document.getElementById(`${this.id}`)!.offsetWidth,
      vertical: document.getElementById(`${this.id}`)!.offsetHeight,
    };
  }

  initializePortalToNextMap() {
    this.#portalToNextMap = undefined;
  }

  constructor(id: string, northId?: string, eastId?: string, southId?: string, westId?: string) {
    this.id = id;
    this.el = document.createElement('div');
    this.el.classList.add('map');
    this.el.id = `${this.id}`;
    this.northId = northId ?? mapId();
    this.eastId = eastId ?? mapId();
    this.southId = southId ?? mapId();
    this.westId = westId ?? mapId();

    rootMap.append(this.el);
    document.getElementById(this.id)!.addEventListener('mousedown', (e) => {
      if (!mapsStore.isChanging) {
        player.move(e.clientX, e.clientY);
        setClickTargetAnimation({ x: e.clientX, y: e.clientY });
      }
    });
    this.createPortal();
  }

  createPortal() {
    this.#northPortal = new Portal(this.el, 'north', this.id, this.northId);
    this.#eastPortal = new Portal(this.el, 'east', this.id, this.eastId);
    this.#southPortal = new Portal(this.el, 'south', this.id, this.southId);
    this.#westPortal = new Portal(this.el, 'west', this.id, this.westId);

    this.setPortalToNextMap();
  }

  setPortalToNextMap() {
    [this.#northPortal, this.#eastPortal, this.#southPortal, this.#westPortal].forEach((portal) => {
      portal!.el.addEventListener('click', () => {
        this.#portalToNextMap = { nextMapId: portal!.nextMapId, direction: portal!.direction };
      });
    });
  }

  getPortals(): IPortals {
    return {
      north: this.#northPortal!,
      east: this.#eastPortal!,
      south: this.#southPortal!,
      west: this.#westPortal!,
    };
  }

  change() {
    if (this.#portalToNextMap !== undefined) {
      const direction = this.#portalToNextMap?.direction as Direction;
      this.getPortals()[direction].moveToNextMap(this.#portalToNextMap?.nextMapId!);

      this.initializePortalToNextMap();
    }
  }
}
