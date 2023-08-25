//유저와 게임 간 상호작용     
const inventoryBtn = document.getElementById("inventoryImg");
var isInventoryOpened = false;

var keys = [];
var clicks = [];

document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)

function checkPressed(Btn) {
    event.stopPropagation();
    if (Btn.id == "inventoryImgDiv") {
        useInventory();
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

function useInventory() {
    if (isInventoryOpened == false) {
        inventoryBtn.src = "images/UI/Bag(Open).png";
        isInventoryOpened = true;
    }
    else {
        inventoryBtn.src = "images/UI/Bag.png";
        isInventoryOpened = false;
    }
}