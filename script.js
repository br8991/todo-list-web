const task = document.getElementById("task");
const taskContainer = document.getElementById("container-list-tasks");

function addTask(){
    if(task.value === ''){
        alert("You need to write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        taskContainer.appendChild(li);
    }
    task.value = "";
}