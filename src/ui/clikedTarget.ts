import { Position } from "..";

export const clickedTarget = (clikedPositon: Position) => {
  const targetEl = document.createElement("div");
  targetEl.style.position = "absolute";
  targetEl.style.zIndex = "999";
  targetEl.style.top = `${clikedPositon.y}px`;
  targetEl.style.left = `${clikedPositon.x}px`;
  targetEl.classList.add("clicked");

  document.getElementById("root")?.appendChild(targetEl);

  setTimeout(() => {
    document.getElementById("root")?.removeChild(targetEl);
  }, 1000);
};
