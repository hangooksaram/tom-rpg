# Tom RPG

브라우저 환경에서 구동되는 RPG 게임 입니다. 몬스터를 공격해 기사를 성장시켜 주세요.

## How To Play

- 마우스 클릭으로 이동 합니다.
- 마우스 포인터로 몬스터를 조준하여 `A` 키를 눌러 공격합니다.

## Getting Started

```
npm install && npm run start
```

## Feature

- 이동 및 공격
    - 원하는 지점을 마우스로 클릭해 이동
    - 몬스터 에 접촉 시 HP 감소
    - A 키를 눌러 마우스 포인터가 위치한 곳으로 공격
    - 포탈을 클릭 시 다음 맵으로 이동

## Built with

- Typescript
- ~~Redux-toolkit~~
    - Sigleton Pattern class 로 구현해 대체 (2023.08.22)
