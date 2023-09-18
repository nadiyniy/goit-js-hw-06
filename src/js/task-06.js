const input = document.querySelector("#validation-input");

const OnFocus = (e) => {
  console.log(e.target.value.length);

  if (e.target.value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", OnFocus);
