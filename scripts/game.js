var stepCounter = 0;
var ticks = 0;
var backgroundAnimation;
var downArrow = document.getElementById("downArrow");
var upArrow = document.getElementById("upArrow");

function playGame(e){
    if(stepCounter == 0 && e.key == " "){
        clearInterval(id);
        downArrow.innerHTML = "";
        space.innerHTML = "";
        stepCounter++;
    }
    if(stepCounter == 1 && e.key == "ArrowUp"){
        space.style.fontSize = "1.75rem";
        fishing();
    }
    if(stepCounter == 2 && e.key == "ArrowDown"){
        clearInterval(id);
        downArrow.innerHTML = "";
        upArrow.innerHTML = "";
        space.style.fontSize = "1.9rem";
        space.style.marginTop = "220px";
        space.style.position = "relative";
        space.innerHTML = "YOU GOT A SWOOORD FIIIIIISH !!!!!!"
        stepCounter++;
        document.body.style.backgroundImage = "url('../img/swordFish.png')";
        document.body.style.backgroundSize = "80px";
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
            downArrow.innerHTML = "Press DownArrow to take out the fishing rod";
            clearInterval(id);
            ticks = 0;
            id = setInterval(spaceSize, 50);
    }
}