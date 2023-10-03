//유저와 게임 간 상호작용   

//index.html 요소 불러오기
const logDiv = document.getElementById("logDiv");
const logTextBox = document.getElementById("logTextBox");
const moveToMainTextBox = document.getElementById("moveToMainTextBox")
//var isInventoryOpened = false;

var keys = [];
var pauseFunction = false;

//키 다운/업 이벤트 수신
document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)

//인터페이스 상의 버튼 및 이미지를 클릭했을 때의 이벤트
function checkPressed(Btn) {
    //정지 상태일 경우 클릭 방지
    if (pauseFunction == true) {
        return;
    }
    event.stopPropagation();
    //아이템 이미지 클릭 이벤트
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
    else if (Btn.id == "item05ImgDiv") {
        openPopup(textGame._itemController._items[4]);
    }
    //엔딩관람 시 '메인화면으로 돌아가기' 텍스트 출력 이벤트
    else if (Btn.id == "moveToMainTextBox") {
        moveToMainTextBox.style.display = "none";
        location.href = "main.html";
    }
    //텍스트 스킵 이벤트
    else {
        skipPage();
    }
}

//키를 눌렀을 때 이벤트 (keycode 사용)
function checkKeyDown(e) {
    keys[e.keyCode] = true;

    if (keys[32]) { //keycode 32 = spaceBar
        if (pauseFunction != true) {
            skipPage();
        }
    }

    if (keys[76]) { //keycode 76 = 'L'
        if (pauseFunction != true) {
            openLogSystem();
        }
        else {
            closeLogSystem();
        }
    }
}

//키를 뗐을 때 이벤트 (keycode 사용)
function checkKeyUp(e) {
    keys[e.keyCode] = false;
}

//텍스트 스킵 기능
function skipPage() {
    if (textGame._textBarController._textIndex == 0) {
        textGame.nextPage();
    }
    else {
        textGame.skipText();
    }
}

//아이템 팝업 생성하기
//새로운 아이템 생성 시 ItemType 명을 조심해서 제작해주시길 바랍니다.
//ItemType 명과 scenario.js에서 추가되는 아이템명은 동일해야 하니 주의 부탁드립니다.
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

        case ItemType.Fire_Extinguisher:
            var url = "popupScripts/Fire_Extinguisher_Popup.html"
            var name = "소화기"
            var option = "width = 770, height = 550, location = no"
            window.open(url, name, option);
            break;

        default:
            break;
    }
}

//로그 시스템 열기
function openLogSystem() {
    pauseFunction = true;
    textGame._isPaused = true;

    logDiv.style.display = 'block';
    logTextBox.style.display = 'block';

    logTextBox.scrollTop = logTextBox.scrollHeight;
}

//로그 시스템 닫기
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
    Acid: "Acid",
    Fire_Extinguisher: "Fire_Extinguisher"
}