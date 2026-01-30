const noTaskScreen = document.querySelector(".no-tasks");
const completedTasks = document.querySelector("#completed-tasks");


window.onload = () => {
  spinup();
};

completedTasks.addEventListener("change", (event) => {
  const hiddenkey = event.target.dataset.userId; 
  uncompleteTaskhandler(hiddenkey);
});


function spinup() {
    noTaskScreen.style.display = "none";
    completedTasks.style.display = "block";
    completedTasks.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      const task = JSON.parse(localStorage.getItem(key));
      if (task.isComplete == true) {
        completedTasks.innerHTML += `
                <div>
                    <input type="checkbox" checked data-user-id="${key}">
                    <span style="text-decoration:line-through">${task.content}</span>
                    <svg data-user-id="${key}" id="#delete-btn" onclick="deletetask(this.dataset.userId)"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>

                </div>`;
    }
    }
    if (completedTasks.innerHTML == "") {
      noTaskScreen.style.display = "block";
      completedTasks.style.display = "none";
      document.body.style.overflow="hidden";
    }else{
      document.body.style.overflow="unset";

    }
    if(Array.from(document.body.classList).includes("darkmode")){
    removeAllBorders();
  }

  }
  

function uncompleteTaskhandler(hiddenkey) {
  setTimeout(()=>{
    let task = JSON.parse(localStorage.getItem(hiddenkey));
    task.isComplete = false;
    localStorage.setItem(hiddenkey, JSON.stringify(task));
    spinup();
  },200 )
}

function deletetask(key){
  setTimeout(()=>{
      localStorage.removeItem(key);
      spinup();
  },200)
      
}