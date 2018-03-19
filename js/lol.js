
var task = document.getElementById("tasksToDo").addEventListener('keypress', addToDoList); // create an event in the input id


// event function to fill the id to do
function addToDoList(e) {
  if (e.keyCode == 13) { // control that is only activated if we press the enter key
    e.preventDefault(); // prevents the default effect of the input type text
    var task = document.getElementById('tasksToDo').value; // take the value of the input
    if (task.trim() != "") { // check that the chain is not empty
      var liElement = document.createElement('li'); // create element li
      var taskText = document.createTextNode(capitalizeFirstLetter(task)); // add the text
      liElement.appendChild(taskText);
      liElement.classList.add('todo-element'); // add class
      liElement.classList.add('p-1');
      liElement.classList.add('m-1');
      liElement.addEventListener('click', changeDoneList); // add eventListener
      document.getElementById('toDo').appendChild(liElement); // add children in #toDo
      document.getElementById("tasksToDo").value = ""; // reset the input
    }
  }
}

function changeDoneList(e) {
  var elementClicked = e.target; // check that the click element is the same as the event element
  if (elementClicked.classList.contains('todo-element')) { // the click element contains the class todo-element
    elementClicked.classList.remove('todo-element'); // remove the class
    elementClicked.classList.add('done-element');
    document.getElementById('done').appendChild(elementClicked);
  } else if (elementClicked.classList.contains('done-element')) {
    elementClicked.classList.remove('done-element');
    elementClicked.classList.add('todo-element');
    document.getElementById('toDo').appendChild(elementClicked)
  }
}
// function capitalize text
function capitalizeFirstLetter(task) {
  return task.charAt(0).toUpperCase() + task.slice(1);
}

// function clear To Do List
function clearToDoList() {
  var toDoList = document.getElementById('toDo');
  toDoList.innerHTML = '';
}

// function clear Done List
function clearDoneList() {
  var doneList = document.getElementById('done');
  doneList.innerHTML = '';
}

// function clear all List
function clearAll() {
  clearToDoList();
  clearDoneList();
}




