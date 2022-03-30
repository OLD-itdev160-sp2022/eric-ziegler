//array to hold tasks
var tasks = [];

// task status enumlike
var taskStatus = {
    active: 'active'
    ,completed: 'completed'
};

// task constructor
function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

// create new task element and place in the DOM
function addTaskElement(task) {
    // make elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // set attr
    taskEl.setAttribute('id', task.id);

    // add text to element
    taskEl.appendChild(textEl);

    // add element to list
    listEl.appendChild(taskEl);
}

// click handler to add new
function addTask(event){
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== ''){
        // unique id
        var id = 'item-' + tasks.length;

        //make new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add task to DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

// click handler complete
function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    // find task in array to update status
    // for (var i = 0; i < tasks.length; i++){
    //     if (tasks[i].id === id){
    //         tasks[i].status = taskStatus.completed;
    //         break;
    //     }
    // }
    
    var index = id.slice(-1);
    tasks[index].status = taskStatus.completed;

    // move to other list element
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// key press handler for ENTER input
function clickButtonOnEnter(event) {
    if (event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

// initialize
function init() {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButtonOnEnter;
}

init();