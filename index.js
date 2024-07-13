//Allows the DOM to fully load before allowing any JavaScript manipulation
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#listForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addItemsToArray();
    form.reset();
  });

  let clearBtn = document.querySelector("#clearList");
  clearBtn.addEventListener("click", handleClearList);
});
//Create an empty array to hold items
const items = [];
//Adds items to array from user input
function addItemsToArray() {
  let item = document.querySelector("#item").value;
  items.push(item);
  buildList(items);
}
//Get HTML element to display array content
function buildList(itemsArray) {
  const itemElement = document.querySelector("#buyItems");
  itemElement.textContent = "";
  itemsArray.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item} `;
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("purchased");
    });
    itemElement.appendChild(listItem);
  });
}
//Clears the list and the array as well
function handleClearList() {
  const itemElement = document.querySelector("#buyItems");
  itemElement.textContent = "";
  items.length = 0;
}
