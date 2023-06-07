// function expression = function without a name (anonymous function) 

let count=0;

document.getElementById("incr").onclick = function(){
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}
document.getElementById("decr").onclick = function(){
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}