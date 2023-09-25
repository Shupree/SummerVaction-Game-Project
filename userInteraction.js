//유저와 게임 간 상호작용     
const logDiv = document.getElementById("logDiv");
const logTextBox = document.getElementById("logTextBox");
//var isInventoryOpened = false;

var keys = [];
var pauseFunction = false;

document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)

function checkPressed(Btn) {
    if (pauseFunction == true) {
        console.log("Paused!")
        return;
    }
    event.stopPropagation();
    if (Btn.id == "item01ImgDiv") {
        openPopup(textGame._itemController._items[0]);
    }
    else if (Btn.id == "item02ImgDiv") {
        openPopup(textGame._itemController._items[1]);
    }
    else if (Btn.id == "item03ImgDiv") {
        openPopup(textGame._itemController._items[2]);
    }
    else if (Btn.id == "item04ImgDiv") {
        openPopup(textGame._itemController._items[3]);
    }
    else {
        skipPage();
    }
}

function checkKeyDown(e) {
    keys[e.keyCode] = true;

    if (keys[32]) {
        if (pauseFunction != true) {
            skipPage();
        }
    }

    if (keys[76]) {
        if (pauseFunction != true) {
            openLogSystem();
        }
        else {
            closeLogSystem();
        }
    }
}

function checkKeyUp(e) {
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

//itemType: string
function openPopup(itemType) {
    switch(itemType) {
        case ItemType.Map:
            var url = "popupScripts/Map_Popup.html"
            var name = "지도"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;

        case ItemType.MasterKey:
            var url = "popupScripts/MasterKey_Popup.html"
            var name = "마스터 키"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;
            
        case ItemType.USB:
            var url = "popupScripts/USB_Popup.html"
            var name = "USB"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;

        case ItemType.Knife:
            var url = "popupScripts/knife_Popup.html"
            var name = "나이프"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;

        case ItemType.Acid:
            var url = "popupScripts/Acid_Popup.html"
            var name = "산성 용액"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;

        default:
            break;
    }
}

function openLogSystem() {
    pauseFunction = true;
    textGame._isPaused = true;

    logDiv.style.display = 'block';
    logTextBox.style.display = 'block';

    logTextBox.scrollTop = logTextBox.scrollHeight;
}

function closeLogSystem() {
    pauseFunction = false;
    textGame._isPaused = false;

    logDiv.style.display = 'none';
    logTextBox.style.display = 'none';
}

//ItemType: string
const ItemType = {
	Map: "Map",
    MasterKey: "MasterKey",
    USB: "USB",
    Knife: "Knife",
    Acid: "Acid"
}