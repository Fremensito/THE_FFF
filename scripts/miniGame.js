var stepCounter = 0;
var ticks = 0;
var backgroundAnimation;

function playGame(e){
    if(stepCounter == 0 && e.key == " "){
        clearInterval(id);
        instructions[2].style.display = "none";
        space.innerHTML = "";
        stepCounter++;
    }
    if(stepCounter == 1 && e.key == "ArrowUp"){
        space.style.fontSize = "1.75rem";
        fishing();
    }
    if(stepCounter == 2 && e.key == "ArrowDown"){
        clearInterval(id);
        instructions[0].style.display = "none";
        instructions[2].style.display = "none";
        space.style.fontSize = "25px";
        space.style.position = "relative";
        space.innerHTML = "YOU GOT A SWOOORD FIIIIIISH !!!!!!"
        stepCounter++;
        document.body.style.backgroundImage = "url('../img/swordFish.png')";
        document.body.style.backgroundSize = "80px";
        space.style.cursor = "pointer";
        document.body.removeEventListener("keydown", playGame);
        space.addEventListener("click", resetGame);
        id = setInterval(winAnimation, 50);
    }
}

function fishing (){
    ticks++;
    switch(ticks){
        case 1: 
            space.innerHTML = "Fishing .";
            id = setInterval(fishing, 2000);
            break;
        case 2: space.innerHTML = "Fishing . ."; break;
        case 3: space.innerHTML = "Fishing . . ."; break;
        case 4: 
            space.innerHTML = "Something has bitten !!!";
            stepCounter++;
            instructions[2].style.display = "block";
            clearInterval(id);
            ticks = 0;
            id = setInterval(spaceSize, 50);
    }
}