export class Modal {
  el: HTMLDialogElement = document.createElement("dialog");
  textEl;
  buttonsEl;

  constructor() {
    this.el.id = "modal";
    this.textEl = document.createElement("div");
    document.getElementById("root")?.appendChild(this.el);
    this.textEl.id = "text";
    this.buttonsEl = document.createElement("div");
    this.buttonsEl.id = "buttons";
    this.el.appendChild(this.textEl);
    this.el.appendChild(this.buttonsEl);

    this.el.showModal();
  }

  setText(text: string) {
    this.textEl.innerHTML = text;
  }

  setButtons(buttons: HTMLButtonElement[]) {
    buttons.forEach((button) => {
      this.buttonsEl.appendChild(button);
    });
  }
}
