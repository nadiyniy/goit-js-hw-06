const form = document.querySelector(".login-form");

const OnSubmit = (e) => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Всі поля повинні бути заповнені!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  form.reset();
};

form.addEventListener("submit", OnSubmit);
