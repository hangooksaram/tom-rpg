import Player, { player } from "../object/moving/player/Player";
import { Inventory, inventory } from "../object/inventory/Inventory";
import { http } from "./http";
import { User } from "firebase/auth";
import { auth } from "../auth/GoogleAuth";

export class ServerData {
  private static instance: ServerData;

  public static getInstance() {
    if (!ServerData.instance) {
      ServerData.instance = new ServerData();
    }
    return ServerData.instance;
  }

  async getServerData() {
    const idToken = await auth.user?.getIdToken()
    return await http.fetch<GerServerDataResponse>({
      method:'GET',
      param: `users/${auth.user?.uid}.json?auth=${idToken}`,
    });
  }

  async saveData() {
    const idToken = await auth.user?.getIdToken()
    return await http.fetch({
      method: "PUT",
      param: `users/${auth.user?.uid}.json?auth=${idToken}`,
      body: JSON.stringify({
        user: auth.user,
        player,
        inventory,
      }),
    });
  }
}

interface GerServerDataResponse {
  player: Player;
  inventory: Inventory;
}

const server = ServerData.getInstance();
export { server };
