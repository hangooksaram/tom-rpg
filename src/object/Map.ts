const root = document.getElementById("root")!;

export default class {
  el: HTMLDivElement | null = null;
  constructor() {}

  createMap() {
    this.el = document.createElement("div");
    this.el.classList.add("map");

    root.append(this.el);
  }
}
