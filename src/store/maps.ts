import Map from "../object/map";

export class MapsStore {
  private static instance: MapsStore;
  private maps: Map[] = [];
  public currentMap: Map | undefined = undefined;
  public prevMap: Map | undefined = undefined;
  public isChanging: boolean = false;
  public static getInstance() {
    if (!MapsStore.instance) {
      MapsStore.instance = new MapsStore();
    }
    return MapsStore.instance;
  }

  get mapsList() {
    return this.maps;
  }

  addMap(newMap: Map) {
    this.maps.push(newMap);
  }

  setPrevMap(id: string) {
    this.prevMap = this.maps.find((item) => item.id === id)!;
  }

  setCurrentMap(id: string) {
    this.currentMap = this.maps.find((item) => item.id === id)!;
  }
}

const mapsStore = MapsStore.getInstance();

export { mapsStore };
