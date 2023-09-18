function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const OnClick = () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  span.textContent = randomColor;
};

btn.addEventListener("click", OnClick);
