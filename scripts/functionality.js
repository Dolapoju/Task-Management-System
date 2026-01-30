const options=document.querySelector('a[href="#"]');

options.addEventListener('click',(event)=>{
    event.preventDefault();
    dropOptions();
    console.log("this")
})

let isShowing=false;
function navControl(){
    const nav=document.querySelector('nav');
    
    if(isShowing){
        nav.style.left="-500px";
        isShowing=false;
    }else{
        nav.style.left="0px";
        isShowing=true;
    }
    
}
const hamburger=document.querySelector('#hamburger')
hamburger.onclick=navControl;


function darkMode(){
    document.body.classList.toggle('darkmode');
    removeAllBorders()
}

function removeAllBorders(){
        Array.from(document.querySelectorAll('#completed-tasks>div')).map((x)=>{
        x.style.border='none';
    });
}

function dropOptions(){
    const clear= document.querySelector("#clear-btn");
    if (clear.style.display === 'none') {
        clear.style.display = 'inline-block'; 
    } else {
        clear.style.display = 'none';
    }
    
}
function clearalltasks(){
    localStorage.clear();
    spinup();
}