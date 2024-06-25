
document.querySelector("#prev").onclick = prev;
document.querySelector("#next").onclick = next;
var box = 1;


function prev(){
    document.querySelector("#box"+ box).style.display = "none";
    box--;
    if(box<1) box=3;
    document.querySelector("#box"+ box).style.display = "block";
}
function next(){
    document.querySelector("#box"+ box).style.display = "none";
    box++;
    if(box>3) box=1;
    document.querySelector("#box"+ box).style.display = "block";
}
