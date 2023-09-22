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

export class Auth {
  private static instance: Auth;
  #auth;
  #user: User | undefined;

  public static getInstance() {
    if (!Auth.instance) {
      Auth.instance = new Auth();
    }
    return Auth.instance;
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
          body: JSON.stringify(user),
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

export const auth = Auth.getInstance();
