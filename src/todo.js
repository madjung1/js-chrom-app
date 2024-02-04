const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let deleteBtn = document.querySelectorAll("button");
let todos=[];

function todoSubmit(event){
    event.preventDefault;
    const tdValue = todoInput.value;
    todoInput.value = "";
    const newTdObj = {
        text : tdValue,
        id: Date.now(),
    };
    todos.push(newTdObj);
    todoFnc.setTd();
    todoFnc.creatTd(newTdObj);
}
const todoFnc = {
    setTd : function(){
        localStorage.setItem("TD",JSON.stringify(todos));
    },
    creatTd : function(TD){
        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");
        newSpan.innerText = TD.text;
        const newBtn = document.createElement("button");
        newLi.id = TD.id;
        console.log(newLi.id);
        newBtn.innerText = "X";
        newLi.appendChild(newSpan);
        newLi.appendChild(newBtn);
        todoList.appendChild(newLi);
        newBtn.addEventListener("click" , todoFnc.deleteTd);
        
        
    },
    loadTd : function(){
        const loadTodos = localStorage.getItem("TD");
        todos = JSON.parse(loadTodos);
        if(todos == null)
        {
            todos = [];
            localStorage.setItem("TD",JSON.stringify(todos));
        }else{
            todos.forEach(this.creatTd);    
        };
        
    },
    deleteTd : function(event){
        const li = event.target.parentElement;
        li.remove();
        todos = todos.filter(todo => todo.id !== parseInt(li.id));
        localStorage.removeItem("TD");
        localStorage.setItem("TD" , JSON.stringify(todos))
    },
    
}

todoFnc.loadTd();
todoForm.onsubmit = todoSubmit;
const liBtn = document.querySelectorAll("button")
for(var i=0; i<liBtn.length; i++){
    liBtn[i].addEventListener("click" , todoFnc.deleteTd);
}
