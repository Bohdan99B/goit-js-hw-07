const ulList = document.querySelectorAll(`#categories .item`);
console.log(`Categories: ${ulList.length}`);

ulList.forEach(category => {
  const title = category.querySelector(`h2`);
  const items = category.querySelectorAll(`ul li`);
  const mainTitle = title.textContent;
  const mainItems = items.length;
  console.log(`Category: ${mainTitle}`);
  console.log(`Elements: ${mainItems}`);
});
