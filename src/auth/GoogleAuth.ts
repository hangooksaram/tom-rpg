import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  browserSessionPersistence,
  signInWithRedirect,
  indexedDBLocalPersistence,
} from 'firebase/auth';
import { app, provider } from '../server/firebase';
import { game } from '../game/game';
import { server } from '../server/server';

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
  async initialize() {
    onAuthStateChanged(this.#auth, async (user) => {
      document.getElementById('auth')?.classList.remove('hidden');

      if (user) {
        this.#user = user;

        game.start();
      }
      game.setLandingScreen();
    });
  }

  signIn() {
    setPersistence(this.#auth, browserLocalPersistence).then(() => {
      return signInWithPopup(this.#auth, provider)
        .then(async (result) => {
          this.#user = result.user;
          const userData = await server.getServerData();

          if (!userData) {
            (async () => {
              await server.saveData();
            })();
          }
          game.start();
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
