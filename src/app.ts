import { Auth, auth } from "./auth/Auth";
import { game } from "./game/game";

game.initialize();
auth.initialize();

document.getElementById("signin-button")!.addEventListener("click", () => {
  auth.signIn();
});
document.getElementById("signout-button")!.addEventListener("click", () => {
  auth.signOutFn();
});
