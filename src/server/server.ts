import Player, { player } from "../object/moving/player/Player";
import { Inventory, inventory } from "../object/inventory/Inventory";
import { http } from "./http";
import { auth } from "../auth/Auth";

export class ServerData {
  private static instance: ServerData;

  public static getInstance() {
    if (!ServerData.instance) {
      ServerData.instance = new ServerData();
    }
    return ServerData.instance;
  }

  async getServerData() {
    return await http.fetch<GerServerDataResponse>({
      param: auth.userInfo?.id,
    });
  }

  saveData() {
    http.fetch({
      method: "PUT",
      param: auth.userInfo?.id,
      body: JSON.stringify({
        user: auth.userInfo,
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
