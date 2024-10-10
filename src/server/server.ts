import Player, { player } from '../object/moving/player/Player';
import { Inventory, inventory } from '../object/inventory/Inventory';
import { http } from './http';
import { User } from 'firebase/auth';
import { auth } from '../auth/GoogleAuth';
import { Modal } from '../game/modal';

export class ServerData {
  private static instance: ServerData;

  public static getInstance() {
    if (!ServerData.instance) {
      ServerData.instance = new ServerData();
    }
    return ServerData.instance;
  }

  async getServerData() {
    const idToken = await auth.user?.getIdToken();
    return await http.fetch<GerServerDataResponse>({
      method: 'GET',
      param: `users/${auth.user?.uid}.json?auth=${idToken}`,
    });
  }

  async saveData() {
    const idToken = await auth.user?.getIdToken();

    try {
      const res = await http.fetch({
        method: 'PUT',
        param: `users/${auth.user?.uid}.json?auth=${idToken}`,
        body: JSON.stringify({
          user: auth.user,
          player,
          inventory,
        }),
      });
    } catch (e) {
      const modal = new Modal();
      modal.setText('저장이 실패하였습니다. 다시 시도해주세요.');

      setTimeout(() => {
        modal.el.close();
      }, 1000);
    }
  }
}

interface GerServerDataResponse {
  player: Player;
  inventory: Inventory;
}

const server = ServerData.getInstance();
export { server };
