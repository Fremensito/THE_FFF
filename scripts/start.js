var toTry = document.getElementById("try");
var id;
var game = document.getElementById("game");
var instructions = document.getElementsByClassName("instructions")
var moveRight = 600;
var maxRightMovement;
var space = document.getElementById("space");
var size = 25;
var sizeIncrease = true;

toTry.addEventListener("click", pantallaInicio)

function pantallaInicio(){
    toTry.style.display = "none";
    id = setInterval(startGame, 5);
}

function startGame(){
    console.log(window.innerWidth);
    moveRight = moveRight -10;
    maxRightMovement = -0.25 * window.innerWidth;
    game.style.right = moveRight + "px";
    if(moveRight <= maxRightMovement){
        game.style.right = "unset";
        game.style.marginLeft = "auto";
        game.style.marginRight = "auto";
        clearInterval(id);
        toTry.removeEventListener("click", pantallaInicio);
        for( i = 0; i < instructions.length; i++)
            instructions[i].style.display = "block";
        id = setInterval (spaceSize, 45);
        sizeIncrease = true;
        document.body.addEventListener("keydown", playGame);
        moveRight = 600;
    }
}

function spaceSize(){
    if(sizeIncrease){
        size += 1;
        if(size > 30){
            sizeIncrease = false;
        }
    }
    if (!sizeIncrease){
        size -= 1;
        if(size < 20)
            sizeIncrease = true;
    }
    space.style.fontSize = size + "px";
}