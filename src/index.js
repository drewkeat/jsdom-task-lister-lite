document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let createTaskButton = document.querySelector(
    "#create-task-form > input[type=submit]:nth-child(3)"
  );
  createTaskButton.addEventListener("click", function (e) {
    e.preventDefault();
    let newTask = document.getElementById("new-task-description").value;
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.setAttribute('data-description',newTask);
    listItem.innerText = newTask;
    listItem.appendChild(deleteButton);
    let taskList = document.querySelector("#tasks");
    taskList.appendChild(listItem);
  });
});
