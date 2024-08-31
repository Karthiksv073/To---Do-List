function addTask(){
    let task_1=document.createElement("textarea");
    let task_2=document.createElement("button");
    task_1.className="class_1";
    task_2.className="DelBtn";
    task_2.textContent='🗑';
    b.append(task_1,task_2);
    task_2.onclick=remTask;
}
function remTask(){
    let button = event.target;
    let textarea = button.previousElementSibling;
    b.removeChild(textarea);
    b.removeChild(button);
}
let a=document.getElementById("addTaskBtn");
let b=document.querySelector('main');
a.onclick=addTask;
