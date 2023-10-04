import { game } from "../game/game";
import { inventory } from "../object/inventory/Inventory";
import { player } from "../object/moving/player/Player";
import { http } from "../server/http";
import { server } from "../server/server";
import { validateForm } from "../util/validate";

interface User {
  id: string;
  password: string;
}

export class Auth {
  private static instance: Auth;
  #id = document.getElementById("id") as HTMLInputElement;
  #password = document.getElementById("password") as HTMLInputElement;
  #userInfo: User | undefined = this.localUserInfo ?? undefined;

  public static getInstance() {
    if (!Auth.instance) {
      Auth.instance = new Auth();
    }
    return Auth.instance;
  }

  constructor() {
    this.#userInfo = this.localUserInfo;
    document
      .getElementById("signin-container")
      ?.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    this.initialize();
  }

  initialize() {
    document.getElementById("auth")?.classList.remove("hidden");
    setTimeout(() => {
      game.setLandingScreen();
    }, 100);
  }

  setLocalUserInfo(userInfo: User) {
    localStorage.setItem("user", JSON.stringify(userInfo));
  }

  get localUserInfo() {
    return JSON.parse(localStorage.getItem("user")!);
  }

  get userInfo() {
    return this.#userInfo;
  }

  signUp() {
    if (validateForm([this.#id!, this.#password!])) {
      http.fetch({
        method: "PUT",
        param: this.#id.value,
        body: JSON.stringify({
          user: { id: this.#id!.value, password: this.#password!.value },
          player,
          inventory,
        }),
      });
      this.setLocalUserInfo({
        id: this.#id!.value,
        password: this.#password!.value,
      });
      game.start();
    }
  }

  async signIn() {
    if (validateForm([this.#id!, this.#password!])) {
      this.#userInfo = {
        ...this.userInfo,
        id: this.#id.value,
        password: this.#password.value,
      };
      const user = await server.getServerData();

      if (user) {
        this.setLocalUserInfo({
          id: this.#id!.value,
          password: this.#password!.value,
        });
        game.start();
      } else {
        alert("해당하는 유저가 없습니다.");
      }
    }
  }

  signOut() {
    localStorage.removeItem("user");
    location.reload();
  }
}

export const auth = Auth.getInstance();
