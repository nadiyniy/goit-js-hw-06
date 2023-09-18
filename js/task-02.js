const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ulList = document.querySelector('#ingredients');
// ingredients.forEach((el) => {
//   const li = document.createElement('li');
//   li.textContent = el;
//   li.classList.add('item');
//   ulList.append(li)

// })

// console.log(ulList);

const ingredientsList = document.querySelector("#ingredients");
const ingredientsItems = [];

ingredients.forEach((item) => {
  
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  ingredientsItems.push(listItem);
});
ingredientsList.append(...ingredientsItems);

console.log(ingredientsItems);
