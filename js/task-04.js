const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;

const OnClick = (e) => {
  console.log(e.target.dataset.action);

  if (e.target.dataset.action === "increment") {
    counterValue += 1;
    spanValue.textContent = counterValue;
    return;
  }
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

btnDecrement.addEventListener("click", OnClick);
btnIncrement.addEventListener("click", OnClick);
