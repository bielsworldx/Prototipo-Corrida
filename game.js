const canvas = document.getElementById("game");
const cxt = canvas.getContext("2d");

let playerX = 20;
let playerY = 140;

let finishLine = 350;

function draw() {
    cxt.clearRect(0, 0, canvas.clientWidth, canvas.height);

    cxt.fillStyle = "red";
    cxt.fillRect(350, 0, 10, canvas.height);

    cxt.fillStyle = "blue";
    cxt.fillRect(playerX, playerY, 30, 30);

}

function update() {
    draw();
    requestAnimationFrame(update);
}

document.addEventListener("keydown",(tecla) =>{
    if(tecla.key === "ArrowRight") playerX += 10;
    if(playerX >= finishLine){
        alert("Você chegou ao final!");
        playerX = 20;
    }
})


update()