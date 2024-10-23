## Tom RPG

[시작하기](https://tom-rpg.vercel.app/)

- 브라우저 환경에서 구동되는 RPG 게임 입니다. 무작위 적을 공격해 기사를 성장시켜 주세요.
- 별도의 라이브러리 없이 Vanilla javascript (typescript) 로 진행된 프로젝트 입니다.

## How To Play

- 마우스 클릭 으로 이동 합니다.
- 마우스 포인터 로 몬스터를 조준하여 `A` 키를 눌러 공격합니다.
- 적 과 접촉 시, 적 의 레벨에 따라 일정 HP 가 감소합니다.

## Feature

### 맵

- 4개의 포탈이 존재하며, 클릭 시 다른 맵 으로 이동합니다.
- 무작위 적 이 등장합니다.
    - 맵 에는 고유한 ID 가 존재하기 때문에, 적 은 해당 맵에 유지됩니다.

### 몬스터

- 처치 시 골드 를 얻을 수 있습니다.
- 생성될 확률이 적을 수록 더욱 강력하며, 처치 시 많은 골드 를 줍니다.

### 장비

- 무기
    - 적 에게 더 강한 피해를 입게합니다.
- 투구, 장갑, 신발 : 업데이트 예정

### 상점

- 골드를 소모하여 장비를 구매할 수있습니다.
    - 더 많은 골드 가 소모되는 장비 일수록 성능이 좋습니다.
- 기존의 장비는 현재 구매한 장비로 자동으로 대체됩니다.

### 인벤토리

- 보유한 골드를 확인할 수 있습니다.
- 장착한 장비를 각 부위별로 확인할 수 있습니다.
    - 한 부위당 하나의 장비만 착용할 수 있습니다.

## Built with

### Frontend

- Typescript
- webpack v5

### Database

- Firebase Realtime Database

### License

- player, slime, bullet images by https://imgbin.com/user/Drallert
- font from https://heiroflighteclipse.com2us.com/ko?r=p1