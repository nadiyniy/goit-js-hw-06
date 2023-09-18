function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");
let myElems = [];

function onCreateClick(amount) {
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");

    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;

    myElems.push(element);
    size += 10;
  }
  container.append(...myElems);
}

function onDestroyClick() {
  container.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = input.value;
  onCreateClick(amount);
});
destroyButton.addEventListener("click", onDestroyClick);
