localStorage.clear()
//DOM
const form=document.querySelector('.add-task');
const noTaskScreen= document.querySelector('.no-tasks');
//Event Listeners
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    addTask();
    spinup();

})
window.onload=()=>{
    spinup();
}
//functions
function addTask(){
    const task= {
        content:`${form.input.value}`,
        isComplete:false,
        category:"none"
    }
    let isUnique=false;
    let id;
    while(!isUnique){
        isUnique=randomID()[0];
        id=randomID()[1];
    }

    localStorage.setItem(id,JSON.stringify(task))
}

function spinup(){
    if(localStorage.length==0){
        noTaskScreen.style.display="block"
    }else{
        noTaskScreen.style.display="none"

    }
}

function randomID(){
    const num= Math.floor(Math.random()*100000);
    if(localStorage.getItem(num)==null){
        return [true,num];
    }else{
        return [false,num];
    }
    
}




