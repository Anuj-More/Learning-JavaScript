// setInterval = Invokes a function repeatedly after a number of miliseconds
//               Asynchronous function (deosn't pause execution)

let count = 0;
let max = window.prompt(`Count up to what number?`);
max = Number(max);

let timer1 = setInterval(countUp, 1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(timer1);
    }
}