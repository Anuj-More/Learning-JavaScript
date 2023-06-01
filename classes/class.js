// class = A blueprint for creating objects
//         define what properties and methods they have 
//         use a construstor for unique properties

class Player{
    score = 0;

    pause(){
        console.log(`You paused the game`);
    }
    exit(){
        console.log(`You exited  the game`);
    }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();

Player1.score = 40;
Player2.score = 20;
Player3.score = 50;

console.log(Player1.score);
console.log(Player2.score);
console.log(Player3.score);
console.log(Player4.score);

Player1.pause()