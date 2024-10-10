export const button = (text: string, callback: Function) => {
  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = text;
  buttonEl.addEventListener('click', () => callback());

  return buttonEl;
};
