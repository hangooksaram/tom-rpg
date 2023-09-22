export class Modal {
  el: HTMLDivElement = document.getElementById("modal")! as HTMLDivElement;
  textEl;
  buttonsEl;

  constructor() {
    this.el.classList.remove("hidden");
    this.textEl = Array.from(this.el.children)[0];
    this.buttonsEl = Array.from(this.el.children)[1];
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
    this.textEl.innerHTML = "";
    this.buttonsEl.innerHTML = "";
    this.el.classList.add("hidden");
  }
}
