var turn = 0;
var swordFishPosition = 0;

function winAnimation(){
    document.body.style.backgroundPositionY = swordFishPosition + "px";
    swordFishPosition = swordFishPosition + 10;
    switch(ticks){
        case 0:
            spacePosition(-10, 10, 10, -10);
            space.style.color = "#FF0000";
            document.body.backgroundColor = "#FF0000";
            ticks++;
            break;
        case 1:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#FF7C00";
            document.body.style.backgroundColor = "#FF7C00";
            ticks++;
            break;  
        case 2:
            spacePosition(-10, 0, 10, 0);
            space.style.color = "#FFD100";
            document.body.style.backgroundColor = "#FFD100";
            ticks++;
            break;
        case 3:
            spacePosition(0, 0, 0, 0,);
            space.style.color = "#AAFF00";
            document.body.style.backgroundColor = "#AAFF00";
            ticks++;
            break;
        case 4:
            spacePosition(-10, -10, 10, 10);
            space.style.color = "#1BFF00";
            document.body.style.backgroundColor = "#1BFF00";
            ticks++;
            break;
        case 5:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#00FF42";
            document.body.style.backgroundColor = "#00FF42";
            ticks++;
            break;
        case 6:
            spacePosition(0, -10, 0, 10);
            space.style.color = "#00FFA6";
            document.body.style.backgroundColor = "#00FFA6";
            ticks++;
            break;
        case 7:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#00F7FF";
            document.body.style.backgroundColor = "#00F7FF";
            ticks++;
            break;
        case 8:
            spacePosition(10, -10, 10, 10);
            space.style.color = "#0070FF";
            document.body.style.backgroundColor = "#0070FF";
            ticks++;
            break;
        case 9:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#002BFF";
            document.body.style.backgroundColor = "#002BFF";
            ticks++;
            break;
        case 10:
            spacePosition(10, 0, -10, 0);
            space.style.color = "#1B00FF";
            document.body.style.backgroundColor = "#1B00FF";
            ticks++;
            break;
        case 11:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#6100FF";
            document.body.style.backgroundColor = "#6100FF";
            ticks++;
            break;
        case 12:
            spacePosition(10, 10, -10, -10);
            space.style.color = "#AA00FF";
            document.body.style.backgroundColor = "#AA00FF";
            ticks++;
            break;
        case 13:
            spacePosition(0, 0, 0, 0,);
            space.style.color = "#EC00FF";
            document.body.style.backgroundColor = "#EC00FF";
            ticks++;
            break;
        case 14:
            spacePosition(0, 10, 0, -10);
            space.style.color = "#FF00D8";
            document.body.style.backgroundColor = "#FF00D8";
            ticks++;
            break;
        case 15:
            spacePosition(0, 0, 0, 0);
            space.style.color = "#FF0070";
            document.body.style.backgroundColor = "#FF0070";
            ticks = 0;
            break;
    }
}

function spacePosition (Top, Right, Bottom, Left){
    var top = Top;
    var right = Right;
    var bottom = Bottom;
    var left = Left;

    space.style.top = top + "px";
    space.style.right = right + "px";
    space.style.bottom = bottom + "px";
    space.style.left = left + "px"
}




