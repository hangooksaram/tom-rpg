import { Position } from '..';

export const setClickTargetAnimation = (clickedPosition: Position) => {
  const clickTarget = document.getElementById('click-target');
  const clickTargetWrapper = document.getElementById('click-target-wrapper');

  if (clickTarget && clickTargetWrapper) {
    clickTargetWrapper.style.transform = ` translate(${clickedPosition.x}px, ${clickedPosition.y}px) `;

    clickTarget.classList.remove('clicked');

    setTimeout(() => {
      clickTarget.classList.add('clicked');
    }, 100);
    return;
  }

  createNewClickTargetAnimation(clickedPosition);
};

const createNewClickTargetAnimation = (clickedPosition: Position) => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  const newClickTargetWrapper = document.createElement('div');
  newClickTargetWrapper.id = 'click-target-wrapper';
  const newClickTarget = document.createElement('div');
  newClickTarget.id = 'click-target';

  newClickTarget.classList.add('click-target');
  newClickTarget.classList.add('clicked');
  newClickTargetWrapper.appendChild(newClickTarget);
  newClickTargetWrapper.style.transform = ` translate(${clickedPosition.x}px, ${clickedPosition.y}px) `;

  root.appendChild(newClickTargetWrapper);
};
