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
      game.setLandingScreen(user);
    });
  }

  signIn() {
    signInWithPopup(this.#auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)!;
        const token = credential.accessToken;
        const user = result.user;
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
