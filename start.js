//게임에 필요한 기초 세팅 활성화
textGame.setTextBarElement(document.getElementById('chatBox'), document.getElementById('nameBox'));
textGame.setLogElement(document.getElementById('logTextBox'));
textGame.setCanvasElement(document.getElementById('backgroundImg'), document.getElementById('leftImg'), document.getElementById('centerImg'), document.getElementById('rightImg'));
textGame.setItemElement(document.getElementById('item01Img'), document.getElementById('item02Img'), document.getElementById('item03Img'), document.getElementById('item04Img')) 
//게임 스타트
textGame.start(branch_1);