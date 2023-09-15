const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);

item.forEach((el) => {
  const categoryTitle = el.querySelector("h2").textContent;
  const categoryItem = el.querySelectorAll("ul>li");

  console.log(`Category: ${categoryTitle} \nElements: ${categoryItem.length} `);
});
