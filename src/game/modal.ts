export class Modal {
  el: HTMLDivElement = document.createElement("div");
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

    this.addHideModalEventToButtons();
  }

  setText(text: string) {
    this.textEl.innerHTML = text;
  }

  setButtons(buttons: HTMLButtonElement[]) {
    buttons.forEach((button) => {
      this.buttonsEl.appendChild(button);
    });
  }

  addHideModalEventToButtons() {
    Array.from(document.getElementsByTagName("button"))?.forEach((button) => {
      button.addEventListener("click", () => {
        this.hideModal();
      });
    });
  }

  hideModal() {
    document.getElementById("root")?.removeChild(this.el);
  }
}
