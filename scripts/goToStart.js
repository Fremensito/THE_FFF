function resetGame(){
    clearInterval(id);
    stepCounter = 0;
    ticks = 0;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(132, 204, 225)";
    space.innerHTML = "SPACE TO START";
    space.style.color = "white";
    space.style.fontSize = "25px";
    space.style.display = "none";
    toTry.style.display = "block";
    game.style.maringRight = "unset";
    game.style.marginLeft = "unset";
    game.style.right = "600px";
    
    removeSpaceListener();
}

function removeSpaceListener(){
    console.log("hola")
    space.removeEventListener("click", resetGame);
    toTry.addEventListener("click", pantallaInicio);
}