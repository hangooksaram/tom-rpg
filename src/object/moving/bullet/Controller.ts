export class BulletController {
  private bullets: HTMLCollection;
  private bulletContainer: DocumentFragment = new DocumentFragment();

  constructor() {
    this.bullets = document.getElementsByClassName('bullet');
  }

  appendBulletEl(el: HTMLDivElement) {
    this.bulletContainer.appendChild(el);
  }

  appendBulletContainer() {
    document.getElementById('root')!.appendChild(this.bulletContainer);
  }

  initializeContainer() {
    this.bulletContainer = new DocumentFragment();
  }

  isBulletFull() {
    return document.getElementsByClassName('bullet').length === 10;
  }

  deleteAllBullets() {
    Array.from(document.getElementById('root')!.getElementsByClassName('bullet')).forEach((node) => node.remove());
    this.bulletContainer = new DocumentFragment();
  }
}
