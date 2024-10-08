export type EnemyType = "slime" | "goblin";

export interface IEnemy {
    className: string;
    id: string; 
    type: EnemyType; 
    gold:number; 
    health:number;
    power:number;
    includedMapId:string;
  }