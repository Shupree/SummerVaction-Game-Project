//유저와 게임 간 상호작용     
const item01Btn = document.getElementById("item01ImgDiv");
var isInventoryOpened = false;

var keys = [];

document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)

function checkPressed(Btn) {
    event.stopPropagation();
    if (Btn.id == "item01Btn") {
        OpenPopup(1);
    }
    else {
        skipPage();
    }
}

function checkKeyDown(e) {
    keys[e.keyCode] = true;

    if (keys[32]) {
        skipPage();
    }
}

function checkKeyUp(e) {
    //if (keys[32]) {
        //skipPage()
        //onSkipTimer = false;
        //t = 0;
    //}

    keys[e.keyCode] = false;
}

function skipPage() {
    if (textGame._textBarController._textIndex == 0) {
        textGame.nextPage();
    }
    else {
        textGame.skipText();
    }
}

// itemNum: int
function openPopup(itemNum) {
    switch(itemNum) {
        case 1:
            var url = "itemPopup.html"
            var name = "아이템" + itemNum
            var option = "width = 720, height = 480, location = no"
            window.open(url, name, option);
    }
    
}