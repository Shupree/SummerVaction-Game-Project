//유저와 게임 간 상호작용          
document.addEventListener("keydown", checkKeyDown, false)
document.addEventListener("keyup", checkKeyUp, false)
document.addEventListener("click", skipPage)

var keys = [];
//var onSkipTimer = false;
//let sum = 0;
//let t;

function checkKeyDown(e) {
    keys[e.keyCode] = true;

    /*if (keys[32]) {
        if (onSkipTimer == false) {
            clearInterval(skipScenario);
            console.log("CHECK!")
            var skipScenario = setInterval(function() {
                    t += 0.1
                    if (t == 1) {
                        console.log("SKIP!");
                        if (textGame.skipText) {
                            textGame.nextPage();
                        }
                        textGame.skipText();
                    }
                }
                , 100
            );
            onSkipTimer = true;
        }
    }*/
}

function checkKeyUp(e) {
    if (keys[32]) {
        skipPage()
        //onSkipTimer = false;
        //t = 0;
    }

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