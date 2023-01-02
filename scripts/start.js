var toTry = document.getElementById("try");
var id;
var section = document.getElementsByTagName("section");
var instructions = document.getElementsByClassName("instructions")
var moveRight = 600;
var maxRightMovement;
var space = document.getElementById("space");
var size = 1.0;
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
    section[0].style.right = moveRight + "px";
    if(moveRight <= maxRightMovement){
        section[0].style.position = "normal";
        section[0].style.right = "0px";
        section[0].style.marginLeft = "auto";
        section[0].style.marginRight = "auto";
        clearInterval(id);
        toTry.removeEventListener("click", pantallaInicio);
        for( i = 0; i < instructions.length; i++)
            instructions[i].style.display = "block";
        id = setInterval (spaceSize, 50);
        sizeIncrease = true;
        document.body.addEventListener("keydown", playGame);
    }
}

function spaceSize(){
    if(sizeIncrease){
        size += 0.05;
        if(size > 2.0){
            sizeIncrease = false;
        }
    }
    if (!sizeIncrease){
        size -= 0.05;
        if(size < 1.5)
            sizeIncrease = true;
    }
    space.style.fontSize = size + "rem";
}