const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amORpm = hours >= 12 ? "pm" : "am";

        hours = (hours%12 || 12);

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amORpm}`;
    } 

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

// My Practice Code

// let mylabel = document.getElementById("mylabel");

// update();
// setInterval(update, 1000);

// function update(){
//     let date = new Date();
//     mylabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let ampm = hours >= 12 ? "pm" : "am";

//         hours = (hours%12 || 12);

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         function formatZeroes(data){
//             return data < 10 ? `0${data}` : `${data}`;
//         }

//         return `${hours}:${minutes}:${seconds} ${ampm}`;
//     }

// }