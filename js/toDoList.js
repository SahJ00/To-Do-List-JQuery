var task = $('#tasksToDo').keypress(addToDoList);

function addToDoList(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var task = $('#tasksToDo').val();
    if (task.trim() != "") {
      //var liElement = $('#toDo');
      //liElement.append('<li>' + capitalizeFirstLetter(task));
      var liElement = $('<li>' + capitalizeFirstLetter(task) + '</li>');
      //var taskText = $('li').text(task);
      //var taskText = $();
      //liElement.append(taskText);
      liElement.addClass('todo-element');
      liElement.addClass('p-1');
      liElement.addClass('m-1');
      liElement.click(changeDoneList);
      $('#toDo').append(liElement);
      $('#tasksToDo').val('');
    }
  }
}

function changeDoneList(e) {
  var currentDOMElement = $(e.currentTarget);
  if (currentDOMElement.hasClass('todo-element')) {
    currentDOMElement.removeClass('todo-element');
    currentDOMElement.addClass('done-element');
    $('#done').append(currentDOMElement).slideToggle("slow");
    $('#done').append(currentDOMElement).slideToggle("slow");
  } else if (currentDOMElement.hasClass('done-element')) {
    currentDOMElement.removeClass('done-element');
    currentDOMElement.addClass('todo-element');
    $('#toDo').append(currentDOMElement).slideToggle("slow");
    $('#toDo').append(currentDOMElement).slideToggle("slow");
  }
}

function capitalizeFirstLetter(task) {
  return task.charAt(0).toUpperCase() + task.slice(1);
}

function clearToDoList() {
  var toDoList = $('#toDo');
  toDoList.empty();
}

function clearDoneList() {
  var toDoList = $('#done');
  toDoList.empty();
}

function clearAll() {
  clearToDoList();
  clearDoneList();
}
