import Enemy from '../object/moving/enemy/Enemy';
import { EnemyType } from '../object/moving/enemy/types';
import { enemyStore } from '../store/enemy';
import { mapsStore } from '../store/maps';

const enemyList: { type: EnemyType; health: number; probability: number; gold: number; power: number }[] = [
  {
    type: 'slime',
    health: 20,
    probability: 0.7,
    gold: 20,
    power: 20,
  },
  {
    type: 'goblin',
    health: 100,
    probability: 0.3,
    gold: 100,
    power: 50,
  },
];

const createRandomEnemyTypeWithProbability = (): EnemyType => {
  const randomNum = Math.random();

  enemyList.sort((a, b) => a.probability - b.probability);

  let enemyType: EnemyType = 'slime';
  let acc = 0;

  for (let i = 0; i < enemyList.length; i++) {
    acc += enemyList[i].probability;
    if (acc >= randomNum) {
      enemyType = enemyList[i].type;

      break;
    }
  }

  return enemyType;
};

export const createRandomEnemies = () => {
  const randomEnemyType = createRandomEnemyTypeWithProbability();

  createEnemyRecursively(randomEnemyType);
};

const createEnemyRecursively = (randomEnemyType: EnemyType) => {
  const isCurrentMapFull = enemyStore.enemiesList.filter((e) => e?.getIsIncludedCurrentMap()).length === 10;

  if (isCurrentMapFull) {
    return;
  }
  createEnemy(randomEnemyType);
  createEnemyRecursively(randomEnemyType);
};

export const createEnemy = (type: EnemyType) => {
  const { health, gold, power } = enemyList.find((e) => e.type === type)!;

  const enemy = new Enemy({
    className: `${type}`,
    id: `${type}-${new Date().toISOString()}`,
    type,
    gold,
    health,
    power,
    includedMapId: mapsStore.currentMap?.id!,
  });
  enemyStore.addEnemy(enemy);
};

export const deleteAllEnemies = () => {
  enemyStore.deleteAllEnemies();
  Array.from(document.getElementsByClassName('enemy')).map((el) => {
    document.getElementById(mapsStore.currentMap!.id)?.removeChild(el);
  });
};
