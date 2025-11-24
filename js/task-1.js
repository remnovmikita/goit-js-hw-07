const items = document.querySelectorAll(".item");

const x = [...items].map(a => a.textContent).length;

console.log(`Number of categories: ${x}`);


items.forEach(item => {
  // Заголовок
  const title = item.querySelector('h2').textContent;

  // Количество вложенных li
  const count = item.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);  
  console.log(`Elements: ${count}`);
});
