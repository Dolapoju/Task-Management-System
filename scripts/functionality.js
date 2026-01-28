
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
