//미연시 게임 엔진
class TextGame {
    //생성자
    constructor() {
        this._textBarController = new TextBarController(this.branchProcess);
        this._canvasController = new CanvasController();
        this._soundController = new SoundController();
        this._optionController = new OptionController();
        this._itemController = new ItemController();
        this._logManager = new LogManager();
        this._branchManager = new BranchManager();
        this._currentBranch = new Branch("Root", "END");
        this._currentPageIndex = 0;
        this._delaytimer = null;
        this._isBranching = false;
        this._isPaused = false;
    }
    
    get textBarController() { return this._textBarController; }
    get canvasController() { return this._canvasController; }

    //'branch' 추가
    //branch: Branch
    addBranch(branch) {
        this._branchManager.addBranch(branch);
    }

    //'set-' 함수: 각 클래스의 기초값 구성 ('start.js'에서 호출)
    setTextBarElement(chatBox, nameBox) {
        this._textBarController.init(chatBox, nameBox);
    }

    setLogElement(logTextBox) {
        this._logManager.init(logTextBox);
    }

    setCanvasElement(canvasImg, leftImg, centerImg, rightImg) {
        this._canvasController.init(canvasImg, leftImg, centerImg, rightImg);
    }

    setItemElement(itemImg01, itemImg02, itemImg03, itemImg04) {
        this._itemController.init(itemImg01, itemImg02, itemImg03, itemImg04);
    }

    //entryBranch: Branch
    start(entryBranch) {
        this._currentBranch = entryBranch;
        this.nextPage();
    }

    //대사 스킵 호출 함수 ('userInteraction.js에서 호출')
    skipText() {
        //class TextBarController의 함수 호출
        this._textBarController._onSkip = true;
    }

    //현재 Branch에서 다음 장면 읽기
    nextPage() {
        if (this._currentBranch.pages.length <= this._currentPageIndex)
            return;

        if (this._isBranching === true)
            return;
            
        if (this._currentPageIndex != 0)

        if (this._delaytimer !== null) {
            if (this._currentPageIndex != 0) {
                if (this._currentBranch.pages[this._currentPageIndex - 1].baseEvents.find(b => {
                    return b.eventType === EventType.TextBar && b.textBarEventType === TextbarEventType.Branch
                }) != undefined)
                    return;
    
                if (this._currentBranch.pages[this._currentPageIndex - 1].baseEvents.find(b => {
                    return b.eventType === EventType.Canvas && b.canvasEventType === CanvasEventType.ChangeBackGround
                }) != undefined)
                    return;
    
                if (this._currentBranch.pages[this._currentPageIndex - 1].baseEvents.find(b => {
                    return b.eventType === EventType.Canvas && b.canvasEventType === CanvasEventType.RemoveObject
                }) != undefined)
                    return;
    
                if (this._currentBranch.pages[this._currentPageIndex - 1].baseEvents.find(b => {
                    return b.eventType === EventType.Sound
                }) != undefined)
                    return;
            }
            
            clearTimeout(this._delaytimer);
            this._delaytimer = null;
        }
        
        //currentPage: Page
        const currentPage = this._currentBranch.pages[this._currentPageIndex];
        //currentEvents: BaseEvent[]
        const currentEvents = currentPage.baseEvents;
        
        this.eventProcess(currentEvents);

        if (this._currentBranch.pages.length <= this._currentPageIndex + 1) {
            const jumpBranch = this._branchManager.getBranch(this._currentBranch.end);
            if (jumpBranch !== null) {
                this._currentBranch = jumpBranch;
                this._currentPageIndex = -1;
            }
        }

        this._currentPageIndex += 1;   
    }

    //'scenario.js'에서 사용하는 함수 분류
    //eventProcess를 통해 작동되는 이벤트는 게임이 진행됨에 따라 실시간으로 실행되는 이벤트입니다.
    //게임 시작과 동시에 구성하고 싶은 이벤트가 있다면 Branch() 파트를 참고해주세요!
    
    //baseEvent: BaseEvent[]
    eventProcess(baseEvent){
        //item: BaseEvent 
        for (let index = 0; index < baseEvent.length; index++) {
            const item = baseEvent[index];
            switch (item.eventType) {
                //TextBarEvent
                case EventType.TextBar:
                    this.textBarProcess(item);
                    break;

                //OptionEvent
                case EventType.Option:
                    this.optionProcess(item);
                    break;

                //CanvasEvent
                case EventType.Canvas:
                    this.canvasProcess(item);
                    break;

                //SoundEvent
                case EventType.Sound:
                    this.soundProcess(item);
                    break;

                //DelayEvent
                case EventType.Delay:
                    this.delayProcess(item, baseEvent, index);
                    return;
            
                default:
                    break;
            }
        }
    }

    //TextBarEvent 세부 분류
    //textBarEvent: TextBarEvent
    textBarProcess(textBarEvent) {
        switch (textBarEvent.textBarEventType) {
            //TextBarEvent.text() 이벤트 처리
            case TextbarEventType.Text:
                this._textBarController.setText(textBarEvent.eventData.name, textBarEvent.eventData.text);
                this._logManager.setLog(textBarEvent.eventData.name, textBarEvent.eventData.text);
                break;

            //TextBarEvent.Branch() 이벤트 처리
            case TextbarEventType.Branch:
                this._isBranching = true;
                let selectedData = [];
                textBarEvent.eventData.forEach((item) => selectedData.push(item.name));
                this._textBarController.showBranch(textBarEvent.eventData, this);
                break;
        
            default:
                break;
        }
    }

    //OptionEvent 세부 분류
    //optionEvent: OptionEvent
    optionProcess(optionEvent) {
        switch (optionEvent.optionEventType) {
            //OptionEvent.addOption() 이벤트 처리
            case OptionEventType.AddOption:
                this._optionController.addOption(optionEvent._eventData);
            
            //OptionEvent.addItem() 이벤트 처리
            case OptionEventType.AddItem:
                this._itemController.addItem(optionEvent._eventData.item, optionEvent._eventData.src);

            //OptionEvent.ramoveItem() 이벤트 처리
            case OptionEventType.RemoveItem:
                this._itemController.removeItem(optionEvent._eventData);
        }
    }

    //CanvasEvent 세부 분류
    //canvasEvent: CanvasEvent
    canvasProcess(canvasEvent) {
        switch (canvasEvent.canvasEventType) {
            //CanvasEvent.addImage() 이벤트 처리
            case CanvasEventType.AddImage:
                this._canvasController.imageShow(
                    canvasEvent._eventData.name, 
                    canvasEvent._eventData.src, 
                    canvasEvent._eventData.positon, 
                    canvasEvent._eventData.transition
                );
                break;

            //CanvasEvent.changeBackGround() 이벤트 처리
            case CanvasEventType.ChangeBackGround:
                this._canvasController.setBackground(
                    canvasEvent._eventData.src
                );
                break;

            //CanvasEvent.drawText() 이벤트 처리
            case CanvasEventType.DrawText:
                this._canvasController.drawtext(
                    canvasEvent._eventData.text
                );
                break;
            
            //CanvasEvent.showEnding() 이벤트 처리
            case CanvasEventType.ShowEnding:
                this._canvasController.endScreen(
                    canvasEvent._eventData.src
                );
                break;
                
            //CanvasEvent.removeObject() 이벤트 처리
            case CanvasEventType.RemoveObject:
                this._canvasController.imageRemove(
                    canvasEvent._eventData.name, 
                    canvasEvent._eventData.transition
                );
                break;

            default:
                break;
        }
    }
    
    //SoundEvent 세부 분류
    //soundEvent: SoundEvent
    soundProcess(soundEvent) {
        switch (soundEvent.soundEventType) {
            //SoundEvent.background() 이벤트 처리
            case SoundEventType.Background:
                if (soundEvent.stop === true)
                    this._soundController.stopBackground();
                else
                    this._soundController.playBackground(soundEvent.src);
                break;
                
            //SoundEvent.sfx() 이벤트 처리
            case SoundEventType.Sfx:
                this._soundController.playSound(soundEvent.src)
                break;
        
            default:
                break;
        }
    }
    
    //delayEvent 세부 분류
    //delayEvent: DelayEvent, baseEvents: BaseEvent[], index: Number
    delayProcess(delayEvent, baseEvents, index) {
        this._delaytimer = setTimeout(() => {
            for (let innerIndex = index + 1; innerIndex < baseEvents.length; innerIndex++) {
                const item = baseEvents[innerIndex];
                switch (item.eventType) {
                    case EventType.TextBar:
                        this.textBarProcess(item);
                        break;
    
                    case EventType.Canvas:
                        this.canvasProcess(item);
                        break;

                    case EventType.Sound:
                        this.soundProcess(item);
                        break;

                    case EventType.Delay:
                        this.delayProcess(item, baseEvents, innerIndex);
                        return;
                
                    default:
                        break;
                }
            }
            this._delaytimer = null;
        }, delayEvent.delay);
    }

    //branchPair: BranchPair
    branchProcess(branchPair, o) {
        const jumpBranch = o._branchManager.getBranch(branchPair.branch);
        //비정상적인 실행이 감지되었을 시 실행됨. (버그감지용이지만 현재 코드를 바꿨기 때문에 실행되지 않을 수 있습니다.)
        if (jumpBranch == null) {
            o._canvasController.endScreen("END (Error)");
            o._isBranching = false;
            return;
        } else {
            o._currentBranch = jumpBranch;
            o._currentPageIndex = 0;
        }
        o._isBranching = false;
    }
}

//이벤트 타입들 정리
//EventType: Number
const EventType = {
	TextBar: 0,
    Canvas: 1,
    Sound: 2,
    Delay: 3,
    Option: 4
}

//TextbarEventType: Number
const TextbarEventType = {
	Text: 0,
	Branch: 1,
    AutoBranch: 2
}

//OptionEventType: Number
const OptionEventType = {
    AddOption: 0,
    AddItem: 1,
    RemoveItem: 2
}

//CanvasEventType: Number
const CanvasEventType = {
	AddImage: 0,
    ChangeBackGround: 1,
    DrawText: 2,
    ShowEnding: 3,
    RemoveObject: 4
}

class Page {
    constructor() {
        //baseEvents: BaseEvent[]
        this._baseEvents = [];
    }

    //baseEvent: BaseEvent, return: Page
    addEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
        return this;
    }
    
    //name: String, text: String, return: Page
    addTextEvent(name, text) {
        this.addEvent(TextBarEvent.text(name, text));
        return this;
    }

    //src: String, return: Branch
    addBackbroundEvent(src){
        this.addEvent(CanvasEvent.changeBackGround(src));
        return this;
    }

    //baseEvent: BaseEvent, return: Page
    removeEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
        return this;
    }

    get baseEvents() { return this._baseEvents; }
}

//BaseEvent: 모든 Event의 기반이 되는 Event (실제 scenario.js에서 사용되는 명령어명을 표기합니다.)
//TextBarEvent, CanvasEvent 등과 같은 Event를 수정할 때 같이 수정해야하는 파트
class BaseEvent {
    //eventType: EventType
    constructor(eventType) {
        //eventType: EventType
        this._eventType = eventType;
    }

    //return: EventType
    get eventType() { return this._eventType; }
}

//TextBarEvent
class TextBarEvent extends BaseEvent {
    //textBarEventType: TextBarEventType, eventData: any
    constructor(textBarEventType, eventData) {
        super(EventType.TextBar);
        //textBarEventType: TextBarEventType
        this._textBarEventType = textBarEventType;
        //eventData: any
        this._eventData = eventData;
    }

    //name: String, text: String, return: TextBarEvent
    static text(name, text) {
        return new TextBarEvent(TextbarEventType.Text, new TextPair(name, text));
    }

    //branchPairs: BranchPair[], return: TextBarEvent
    static branch(branchPairs) {
        return new TextBarEvent(TextbarEventType.Branch, branchPairs);
    }

    //return: TextbarEventType
    get textBarEventType() { return this._textBarEventType; }

    //return: any
    get eventData() { return this._eventData; }
}

//TextBarEvent.text()에 사용되는 자료
class TextPair {
    //name: String, text: String
    constructor(name, text) {
        this._name = name;
        this._text = text;
    }   

    //return: String
    get name() { return this._name; }
    
    //return: String
    get text() { return this._text; }
}

//TextBarEvent.Branch()에 사용되는 자료
class BranchPair {
    //name: String, branch: Branch, condition: Option(String)
    constructor(name, branch, condition) {
        this._name = name;
        this._branch = branch;
        this._condition = condition;
    }   

    //return: String
    get name() { return this._name; }
    
    //return: Branch
    get branch() { return this._branch; }

    //return: Option(String)
    get condition() { return this._condition}
}

//OptoinEvent (따로 제작한 Event 시스템입니다.)
class OptionEvent extends BaseEvent {
    //textBarEventType: TextBarEventType, eventData: any
    constructor(optionEventType, eventData) {
        super(EventType.Option);
        //textBarEventType: TextBarEventType
        this._optionEventType = optionEventType;
        //eventData: any
        this._eventData = eventData;
    }

    //option: String, item: String, return: OptionEvent
    static addOption(option) {
        return new OptionEvent(
            OptionEventType.AddOption,
            option
        );
    }

    static addItem(item, src) {
        return new OptionEvent(
            OptionEventType.AddItem,
            new ItemPair(item, src)
        );
    }

    static removeItem(item) {
        return new OptionEvent(
            OptionEventType.RemoveItem,
            item
        )
    }

    //return: TextbarEventType
    get optionEventType() { return this._optionEventType; }

    //return: any
    get eventData() { return this._eventData; }
}

//OptionEvent.addItem()에 사용되는 자료
class ItemPair {
    //item: String, src: String
    constructor(item, src) {
        this._item = item;
        this._src = src;
    }

    get item() { return this._item; }
    get src() { return this._src; }
}

//CanvasEvent
class CanvasEvent extends BaseEvent {
    //canvasEventType: CanvasEventType
    constructor(canvasEventType, eventData) {
        super(EventType.Canvas);
        this._canvasEventType = canvasEventType;
        this._eventData = eventData;
    }
    
    //기존 이미지 삽입 코드
    //return: CanvasEvent
    static addImage(name, src, position, transition) { 
        return new CanvasEvent(
            CanvasEventType.AddImage, 
            new ImagePair(name, src, position, transition)
        );
        
    }
    
    //return: CanvasEvent
    static changeBackGround(src) { 
        return new CanvasEvent(
            CanvasEventType.ChangeBackGround, 
            new BackGroundPair(src)
        );
    }

    //return: CanvasEvent
    static drawText(text) { 
        return new CanvasEvent(
            CanvasEventType.DrawText, 
            new DrawTextPair(text)
        );
    }
    
    //return: CanvasEvent
    static showEnding(src) {
        return new CanvasEvent(
            CanvasEventType.ShowEnding,
            new EndingImagePair(src)
        );
    }

    //return: CanvasEvent
    static removeObject(name, transition) { 
        return new CanvasEvent(
            CanvasEventType.RemoveObject,
            new RemoveObjectPair(name, transition)
        );
    }

    get canvasEventType() { return this._canvasEventType; }

    //return: any
    get eventData() { return this._eventData; }
}

//OptionEvent.addImage()에 사용되는 자료
class ImagePair {
    //name: String, src: String, position: modelPosition transition: String
    constructor(name, src, positon, transition) {
        this._name = name;
        this._src = src;
        this._positon = positon;
        this._transition = transition;
    }

    get name() { return this._name; }
    get src() { return this._src; }
    get positon() { return this._positon; }
    get transition() { return this._transition; }
}

//OptionEvent.changeBackGround()에 사용되는 자료
class BackGroundPair {
    //src: String
    constructor(src) {
        this._src = src;
    }

    get src() { return this._src; }
}

//OptionEvent.drawText()에 사용되는 자료
class DrawTextPair {
    //text: String
    constructor(text) {
        this._text = text;
    }

    get text() { return this._text; }
}

//OptionEvent.showEnding()에 사용되는 자료
class EndingImagePair {
    //src: String
    constructor(src) {
        this._src = src;
    }

    get src() { return this._src; }
}

//OptionEvent.removeObject()에 사용되는 자료
class RemoveObjectPair {
    //name: String
    constructor(name, transition) {
        this._name = name;
        this._transition = transition;
    }
    get name() { return this._name; }
    get transition() { return this._transition; }
}

//SoundEventType: Number
const SoundEventType = {
    Background: 0,
    Sfx: 1
}

//SoundEvent
class SoundEvent extends BaseEvent {
    //src: String, soundEventType: SoundEventType, stop: bool
    constructor(src, soundEventType, stop) {
        super(EventType.Sound);
        this._src = src;
        this._soundEventType = soundEventType;
        this._stop = stop;
    }

    static background(src) {
        return new SoundEvent(src, SoundEventType.Background, false);
    }

    static stopbackground() {
        return new SoundEvent(null, SoundEventType.Background, true);
    }

    static sfx(src) {
        return new SoundEvent(src, SoundEventType.Sfx, false);
    }

    get src() { return this._src; }
    get soundEventType() { return this._soundEventType; }
    get stop() { return this._stop; }
}

//DelayEvent
class DelayEvent extends BaseEvent {
    //delay: Number
    constructor(delay) {
        super(EventType.Delay);
        this._delay = delay;
    }

    static delay(delay) {
        return new DelayEvent(delay);
    }

    get delay() { return this._delay; }
}

//-Controller는 위의 -Event들의 실질적인 구동부라고 생각하면 됩니다.
//따라서 특정 Event를 수정하거나 Event의 구동 부분을 수정할 때 -Controller를 수정해야 합니다.

//텍스트바 컨트롤러
class TextBarController {
    //생성자
    constructor(callback) {
        this._chatBox = null;
        this._nameBox = null;
        this._callback = callback;

        this._onSkip = false;
        this._textIndex = 0;
    }

    //chatBox: HTMLElement, nameBox: HTMLElement
    init(chatBox, nameBox) {
        this._chatBox = chatBox;
        this._nameBox = nameBox;
    }

    //다음 텍스트 불러오기 및 타이핑 애니메이션 효과 실행
    //name: String, text: String
    setText(name, text) { 
        clearTimeout(tyInt);

        //const chatBox = document.getElementById("chatBox");
        if(name == null) {
            this._nameBox.style.visibility = "hidden";
            this._nameBox.innerHTML = "";
        } else{
            this._nameBox.style.visibility = "visible";
            this._nameBox.innerHTML = name;
        }

        let textList = text.split("")

        //빠른 대사 넘기기(스킵) 기능
        if(this._onSkip == true) {
            this._onSkip = false;
            clearTimeout(tyInt);

            this._chatBox.innerHTML = text + "<br>";
            this._textIndex = 0;
        }

        //타이핑 애니메이션 효과
        else{
            if(this._textIndex == 0){
                var tyInt = setTimeout(() => textGame._textBarController.setText(name, text), 75);
                this._chatBox.innerHTML = textList[this._textIndex];
                this._textIndex += 1;
            }
            else if(this._textIndex < text.length){
                var tyInt = setTimeout(() => textGame._textBarController.setText(name, text), 75);
                this._chatBox.innerHTML += textList[this._textIndex];
                this._textIndex += 1;
            }
            else{
                clearTimeout(tyInt);
                this._chatBox.innerHTML = text + "<br>";
                this._textIndex = 0;
            }
        }
    }

    //Branch()를 통한 선택지 표현 실행
    //options: BranchPair[], o: any, return: String
    showBranch(options, o) { 
        var isAuto = true;
        for(let i = 0; i < options.length; i++){
            if (options[i]._name != null) {
                isAuto = false;
            }
        }
        //이전 선택지의 선택에 따른 자동 선택
        if (isAuto == true) {
            for(let i = 0; i < options.length; i++){
                eventlistener(i).then((resolvedData) => {
                    this._callback(resolvedData, o);
                });
            }
            const tmpThis = this;
            function eventlistener(i) {
                return new Promise(function(resolve, reject) {
                    if (textGame._optionController.checkingOption(options[i]._condition)) {
                        resolve(options[i]);
                        tmpThis.clearTextBar();
                    }
                })
            }
        }
        //플레이어에 의한 수동 선택
        else {
            let button = [];
            let label = [];
            let text = [];
            for(let i = 0; i < options.length; i++){
                label[i] = document.createElement('label');
                button[i] = document.createElement('button');
                text[i] = document.createElement('span');
                this._chatBox.appendChild(label[i]);
                label[i].appendChild(button[i]);
                label[i].appendChild(text[i]);
                label[i].appendChild(document.createElement('br'));
                text[i].innerHTML = "→ " + options[i].name;

                eventlistener(i).then((resolvedData) => {
                    this._callback(resolvedData, o);
                });
            }
            const tmpThis = this;
            function eventlistener(i) {
                return new Promise(function(resolve, reject) {
                    button[i].addEventListener('click', function(event) {
                        resolve(options[i]);
                        tmpThis.clearTextBar();
                        textGame._logManager.setLog("", "→ " + options[i].name);
                    }, false);
                })
            }
        }
    }

    //텍스트바 클리어
    clearTextBar() {
        while(this._chatBox.hasChildNodes()){
            this._chatBox.removeChild(this._chatBox.firstChild);
        }
        this._nameBox.style.visibility = "hidden";
        this._nameBox.innerHTML = "";
    }
}

//imageShowType: Number
const imageShowType = {
	Appear: 0,
    FadeIn: 1
}

//imageHideType: Number
const imageHideType = {
	Disappear: 0,
    FadeOut: 1
}

//modelPosition: Number
const modelPosition = {
    left: 0,
    center: 1,
    right: 2
}

//캔버스컨트롤러
class CanvasController {
    constructor() {
        this._canvasImg = null;
        this._leftImg = null;
        this._centerImg = null;
        this._rightImg = null;
    }

    //canvasImg: HTMLElement, leftImg: HTMLElement, centerImg: HTMLElement, rightImg: HTMLElement
    init(canvasImg, leftImg, centerImg, rightImg) {
        this._canvasImg = canvasImg;
        this._canvasImg.style.opacity = "0";
        this._canvasImg.style.transitionDuration = "1s";
        this._leftImg = leftImg;
        this._centerImg = centerImg;
        this._rightImg = rightImg;
        const img = document.getElementById('canvasDiv').getElementsByClassName('img');
        for(let i = 0; i < 3; i++){
            img[i].style.opacity = 0;
        }
    }

    //이미지 보여주기
    //name: String, src: String, positon: modelPosition transition: imageShowType
    imageShow(name, src, position, transition) { // 
        let img;
        if(position === 0) {
            img = this._leftImg;
        }
        else if(position === 1) {
            img = this._centerImg;
        }
        else if(position === 2) {
            img = this._rightImg;
        }
        img.src = src;
        img.className = name;
        img.style.width = "370px";
        if(transition === 1){
            
            img.style.transition = '2s';
            img.style.opacity = '1';
            //img.classList.add("show");
        }
        else{
            img.style.transition = 'all 0s';
            img.style.opacity = '1';
            //img.classList.add("showImmediately");
        }

    }
    
    //이미지 삭제
    //name: String, transition: imageHideType
    imageRemove(name, transition) { 
        //name으로 이미지를 지울수 있음
        const img = document.getElementById('canvasDiv').getElementsByClassName(name)[0];
        if(img === undefined) return;
        img.className = "";
        if(transition === 1) {
            img.style.transition = '2s';
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = "";
            }, 2000);
        }
        else{
            img.style.transition = '0s';
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = "";
            }, 1000);
        }
    }

    //배경 속도조절
    //src: String
    setBackground(src) {
        this._canvasImg.style.opacity = "0";
        setTimeout(() => {
            this._canvasImg.src = src;
        }, 1000);
        setTimeout(() => {
            this._canvasImg.style.opacity = "1";
        }, 2000);
    }

    //text: String
    drawtext(text){ //null 넣으면 지워짐
        if(text === null){
            this._chatBox.innerHTML = "";
            return;
        }
        this._chatBox.innerHTML = text;
    }

    //엔딩 연출
    //src: String
    endScreen(src) {
        const canvasDiv = document.getElementById('canvasDiv');
        const textBox = document.getElementById('moveToMainTextBox');

        const canvasChildren = Array.from(canvasDiv.children);

        for (let i = 0; i < canvasChildren.length; i++){
            if (canvasChildren[i].id == "moveToMainTextBox") {
                continue;
            }
            if (canvasChildren[i].id == "backgroundImg") {
                continue;
            }
            canvasChildren[i].remove();
        }
        
        setTimeout(() => {
            this._canvasImg.src = src;
            textBox.style.display = "block";
        }, 1000);
        //canvasDiv.style.backgroundColor = "black";
        canvasDiv.classList.add("endScreen");
        //canvasDiv.innerHTML = text;
        //canvasDiv.style.color = "white";
        //canvasDiv.style.paddingTop = "27vw";

        setTimeout(() => {
            textBox.style.display = "block";
            //location.href = "main.html";
        }, 3000);
    }
}

//분기 관리자
class BranchManager {
    constructor() {
        this._branches = [];
    }
    
    //branch: Branch
    addBranch(branch) {
        this._branches.push(branch);
    }

    //branchName: String, return: Branch
    getBranch(branchName) {
        const find = this._branches.find(branch => branch.branchName === branchName);
        if (find === undefined)
            return null;
        else
            return find;
    }
}

//Scenario.js에서 브랜치 구성 요소
//여기서 구현된 이벤트들은 textGame.EventProcess에서 구동되는 이벤트와 달리
//게임 시작과 동시에 저장되고 실행되는 정보들입니다.
//실시간으로 플레이어의 행동에 따라 변화하거나 실행되어야하는 이벤트가 있다면 textGame.EventProcess 파트와 BaseEvent 파트를 참고해주세요!
class Branch {
    //branchName: String, end: String
    constructor(branchName, end, option) {
        this._branchName = branchName;
        this._end = end;
        //pages: Page[]
        this._pages = [];
    }

    ModuleTest(NOW_Num) {
        const NOW = DATA_01[NOW_Num];
        if (NOW.Backgrounds_Group === null) { 
            this.addEventsAsPage([
                DelayEvent.delay(0),
                SoundEvent.sfx("sounds/효과음/효과음/Mouse Click 2.mp3"),
                //CanvasEvent.changeBackGround(BackgroundsData[NOW.background]),
                TextBarEvent.text(NOW.teller, NOW.script),
                CanvasEvent.addImage(
                    NOW.그림[0],
                    ImageData[NOW.그림[0]],
                    modelPosition.left,
                    imageShowType.FadeIn),
                CanvasEvent.addImage(
                    NOW.그림[1],
                    ImageData[NOW.그림[1]],
                    modelPosition.center,
                    imageShowType.FadeIn),
                CanvasEvent.addImage(
                    NOW.그림[2],
                    ImageData[NOW.그림[2]],
                    modelPosition.right,
                    imageShowType.FadeIn),     
            ]);
            return this;
        }
        else {
            this.addEventsAsPage([
                CanvasEvent.changeBackGround(BackgroundsData[NOW.Backgrounds_Group][NOW.Backgrounds]),
                SoundEvent.sfx("sounds/효과음/효과음/Mouse Click 2.mp3"),
                DelayEvent.delay(1000),
                TextBarEvent.text(NOW.teller, NOW.script),
                CanvasEvent.addImage(
                    NOW.그림[0],
                    ImageData[NOW.그림[0]],
                    modelPosition.left,
                    imageShowType.FadeIn),
                CanvasEvent.addImage(
                    NOW.그림[1],
                    ImageData[NOW.그림[1]],
                    modelPosition.center,
                    imageShowType.FadeIn),
                CanvasEvent.addImage(
                    NOW.그림[2],
                    ImageData[NOW.그림[2]],
                    modelPosition.right,
                    imageShowType.FadeIn),     
            ]);
            return this;  
        }
    }

    //page: Page, return: Branch
    addPage(page) {
        this._pages.push(page);
        return this;
    }

    //name: String, text: String, return: Branch
    addTextPage(name, text) {
        this.addPage(new Page().addEvent(TextBarEvent.text(name, text)));
        return this;
    }

    //src: String, return: Branch
    addBackbroundPage(src){
        this.addPage(new Page().addEvent(CanvasEvent.changeBackGround(src)));
        return this;
    }

    //baseEvents: BaseEvent[]
    addEventsAsPage(baseEvents) {
        const page = new Page();
        baseEvents.forEach(element => {
            page.addEvent(element);
        });
        this.addPage(page);
        return this;
    }

    //text: String
    addEndingAsPage(text) {
        this.addPage(new Page().addEvent(CanvasEvent.showEnding(text)));
        return this;
    }

    //return: Page
    removePage() {
        return this._pages.pop();
    }

    //return: String
    get branchName() { return this._branchName; }
    //return: String
    get end() { return this._end; }
    //return: Page[]
    get pages() { return this._pages; }
}

//사운드 컨트롤러
class SoundController {
    constructor() {
        this._backgroundSound = new Audio();
        this._activeSound = new Audio();
        this._backgroundSound.volume = 0.2;
        this._activeSound.volume = 0.2;
    }

    //src: String
    playBackground(src) {
        this._backgroundSound.src = src;
        this._backgroundSound.play();
    }

    stopBackground() {
        this._backgroundSound.pause();
        this._backgroundSound.src = "";
    }

    //src: String
    playSound(src) {
        this._activeSound.src = src;
        this._activeSound.play();
    }
}

//조건 컨트롤러
class OptionController {
    constructor() {
        this._options = [];
    }

    //조건 변수 생성
    addOption(option) {
        this._options.push(option);
        console.log(this._options);
    }

    //조건 변수 확인
    checkingOption(option) {
        for (var i = 0; i < this._options.length; i++) {
            if (option == this._options[i]) {
                return true;
            }
        }
        return false;
    }
}

//아이템 컨트롤러
class ItemController {
    constructor() {
        this._items = [];
        //this._srcList = [];
        this._itemImgList = []
    }

    //itemImg01: HTMLElement, itemImg02: HTMLElement, itemImg03: HTMLElement, itemImg04: HTMLElement
    init(itemImg01, itemImg02, itemImg03, itemImg04) {
        this._items = [null, null, null, null];
        this._itemImgList[0] = itemImg01;
        this._itemImgList[1] = itemImg02;
        this._itemImgList[2] = itemImg03;
        this._itemImgList[3] = itemImg04;
    }

    //아이템 추가 기능
    addItem(item, src) {
        //this._srcList.push(src);
        
        for (var i = 0; i < this._itemImgList.length; i++) {
            if (this._items[i] == null) {
                this._itemImgList[i].src = src;
                this._items[i] = item;
                break;
            }

            if (i == 3) {
                console.log("ERROR: 아이템 리스트 초과")
                break;
            }
        }
    }

    //아이템 제거 기능
    removeItem(item) {
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i] == item) {
                this._items.splice(i, 1);

                this._itemImgList[i].src == "images/items/None.png";
                for (i; i < this._itemImgList.length - 1; i++) {
                    this._itemImgList[i].src = this._itemImgList[i+1].src;
                    this._itemImgList[i+1].src = "images/items/None.png";
                }
                break;
            }
        }
    }
}

//로그 매니저: log시스템의 구성 담당
class LogManager {
    constructor() {
        this._logTextBox = null;
        this._log = "";
    }

    init(logTextBox) {
        this._logTextBox = logTextBox;
    }

    setLog(name, text) {
        if (name == "") {
            this._log = this._log + text + "<br>" + "<br>" + "<br>";
        }
        else if (name == null) {
            this._log = this._log + text + "<br>" + "<br>";

        }
        else {
            this._log = this._log + name + " : " + text + "<br>" + "<br>";
        }
        this._logTextBox.innerHTML = this._log + "<br>" + "<br>";
    }
}