import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { app, provider } from "../server/firebase";
import { game } from "../game/game";
import { http } from "../server/http";
import { player } from "../object/moving/player/Player";
import { inventory } from "../object/inventory/Inventory";

export class GoogleAuth {
  private static instance: GoogleAuth;
  #auth;
  #user: User | undefined;

  public static getInstance() {
    if (!GoogleAuth.instance) {
      GoogleAuth.instance = new GoogleAuth();
    }
    return GoogleAuth.instance;
  }

  constructor() {
    this.#auth = getAuth(app);
    this.initialize();
  }
  get user() {
    return this.#user;
  }
  initialize() {
    onAuthStateChanged(this.#auth, (user) => {
      document.getElementById("auth")?.classList.remove("hidden");
      if (user) {
        this.#user = user;
      }
      game.setLandingScreen();
    });
  }

  signIn() {
    signInWithPopup(this.#auth, provider)
      .then((result) => {
        const user = result.user;
        http.fetch({
          method: "PUT",
          param: this.#user?.uid,
          body: JSON.stringify({ user, player, inventory }),
        });
        game.enterGame();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  signOutFn() {
    signOut(this.#auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
}

export const auth = GoogleAuth.getInstance();
