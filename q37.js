document.addEventListener("mousemove",funct,true);
function funct(event){
    let x=event.clientX;
    let y=event.clientY;
    document.getElementById("mouse").innerHTML=x+" "+y;
}