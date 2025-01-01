const task = document.getElementById("task");
const taskContainer = document.getElementById("container-list-tasks");

function addTask(){
    if(task.value === ''){
        alert("You need to write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    task.value = "";
    saveState();
}

taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("task-checked")
        saveState();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveState();
    }
}, false);

function saveState(){
    localStorage.setItem("data", taskContainer.innerHTML);
}

function loadState(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
loadState();