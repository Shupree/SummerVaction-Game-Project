//유저와 게임 간 상호작용     
//const item01Btn = document.getElementById("item01ImgDiv");
//var isInventoryOpened = false;

var keys = [];

document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)

function checkPressed(Btn) {
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

//itemType: string
function openPopup(itemType) {
    switch(itemType) {
        case ItemType.Map:
            var url = "popupScripts/Map_Popup.html"
            var name = "지도"
            var option = "width = 720, height = 480, location = no"
            window.open(url, name, option);
            break;

        case ItemType.MasterKey:
            var url = "popupScripts/MasterKey_Popup.html"
            var name = "마스터 키"
            var option = "width = 720, height = 480, location = no"
            window.open(url, name, option);
            break;
            
        case ItemType.USB:
            var url = "popupScripts/USB_Popup.html"
            var name = "USB"
            var option = "width = 720, heiaght = 480, location = no"
            window.open(url, name, option);
            break;

        case ItemType.Knife:
            var url = "popupScripts/knife_Popup.html"
            var name = "나이프"
            var option = "width = 720, height = 480, location = no"
            window.open(url, name, option);
            break;

        case ItemType.Acid:
            var url = "popupScripts/Acid_Popup.html"
            var name = "산성 용액"
            var option = "width = 720, height = 480, location = no"
            window.open(url, name, option);
            break;

        default:
            break;
    }
}

//ItemType: string
const ItemType = {
	Map: "Map",
    MasterKey: "MasterKey",
    USB: "USB",
    Knife: "Knife",
    Acid: "Acid"
}