let input = document.getElementById("taskInput");
const btAdd = document.getElementById("addBtn");
let ul = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

btAdd.addEventListener("click", function () {
  let text = input.value;
  if (text !== "") {
    let li = document.createElement("li");
    li.textContent = text;
    tasks.push(text);
    input.value = ""
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ul.appendChild(li);
  } else {
    alert("Te rog completeaza campul");
  }
});

window.onload = function () {
  tasks.forEach((t) => {
    let li = document.createElement("li");
    li.textContent += t;
    ul.appendChild(li);
  });
};
