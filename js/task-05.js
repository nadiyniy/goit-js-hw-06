const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const OnInput = (e) => {
//   e.preventDefault();
  console.log(e.target.value);
  refs.span.textContent = e.target.value.trim() || "Anonymous";
};

refs.input.addEventListener("input", OnInput);
