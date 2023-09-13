//인벤토리 시스템 엔진
class InventorySystem {
    //생성자
    constructor() {
        this._options = textGame._optionController._options;
        this._itemList = textGame._itemController._items;
        this._itemSrcList = textGame._itemController._srcList;
        this._itemImg01 = null;
        this._itemImg02 = null;
        this._itemImg03 = null;
        this._itemImg04 = null;
        this._itemImgList = [
            this._itemImg01,
            this._itemImg02,
            this._itemImg03,
            this._itemImg04
        ]
        this._itemDetailImg = null;
    }

    //canvasImg: HTMLElement, leftImg: HTMLElement, centerImg: HTMLElement, rightImg: HTMLElement
    init(itemImg01, itemImg02, itemImg03, itemImg04, itemDetailImg) {
        this._itemImgList[0] = itemImg01;
        this._itemImgList[1] = itemImg02;
        this._itemImgList[2] = itemImg03;
        this._itemImgList[3] = itemImg04;
        this._itemDetailImg = itemDetailImg;
        const img = document.getElementById('canvasDiv').getElementsByClassName('img');
        for(let i = 0; i < 5; i++){
            img[i].style.opacity = 0;
        }
    }

    AddItemImage() {
        for (var i = 0; i < this._items.length; i++) {
            if (i > 3) {
                console.log("Error");
                break;
            }
            this._itemImgList[i].src = this._itemSrcList[i];
            this._itemImgList[i].class = this._itemList[i];
            this._itemImgList[i].width = "60px";

            this._itemImgList[i].style.transition = 'all 0s';
            this._itemImgList[i].style.opacity = '1';
        }
    }

    // <<필요한 기능>>
    // 아이템 이미지 생성
    // 아이템 상세 이미지 및 내용 변경
    // engine.js에서 선택지 변수 받기
}

//EventType: Number
const imgNumber = {
	itemImg01: 0,
    itemImg02: 1,
    itemImg03: 2,
    itemImg04: 3
}

//const inventorySystem = new InventorySystem();

//inventorySystem.AddItemImage();