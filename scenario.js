const textGame = new TextGame();

const branch_1 = new Branch("branch_1", null)   // 시나리오 불러오기
  .addEventsAsPage([
    CanvasEvent.changeBackGround("이미지 url"), // 배경 이미지 변경(url)
    DelayEvent.delay(0),  // 딜레이(int)
    SoundEvent.sfx("사운드 url"),  // 효과음 사운드(url)
    TextBarEvent.text(
      "캐릭터 이름",  // 캐릭터 이름
      "대사"  // 대사(text)
    ),
    SoundEvent.background(""),  // 배경 음악(url)
    SoundEvent.stopbackground(),   // 배경 음악 제거

    CanvasEvent.addImage(   // 이미지 추가
      "이미지 이름", // 이미지 이름
      "이미지 url", // 이미지 url
      modelPosition.center, // 이미지 위치 조정
      imageShowType.FadeIn
    ),
    CanvasEvent.removeObject("이미지 이름", imageHideType.Disappear), // 이미지 제거
    TextBarEvent.branch([   // 분기점 생성
      new BranchPair("선택지 1", "branch_1_1"),
      new BranchPair("선택지 2", "branch_1_2")
    ])
  ])

  .addTextPage(
    null,  // 캐릭터 이름
    "Bye, World!"  // 대사(text)
  )

textGame.addBranch(branch_1);   // 실행

const branch_1_1 = new Branch("branch_1_1", "branch_2")   // 분기점 1
  //.addTextPage("주인공", "그리고 나는 정신을 잃었다.")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("https://marketplace.canva.com/EAD2xI0GoM0/1/0/1600w/canva-%ED%95%98%EB%8A%98-%EC%95%BC%EC%99%B8-%EC%9E%90%EC%97%B0-%EC%98%81%EA%B0%90-%EC%9D%B8%EC%9A%A9%EB%AC%B8-%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1-%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4-rssvAb9JL4I.jpg")
  ])
  .addEventsAsPage([
    DelayEvent.delay(1000),
    CanvasEvent.addImage("히로인", "https://cdn.imweb.me/upload/S202010013208049566f15/0d0db0f9ef891.gif",
    modelPosition.center,
    imageShowType.FadeIn),
    TextBarEvent.text("히로인", "저런,. 친구들이 다 죽었지만 괜찮아!")
    
  ])
  .addTextPage("히로인", "힘내, 주인공 군!")
  .addEventsAsPage([
    TextBarEvent.text("주인공", "안괜찮아"),
    CanvasEvent.removeObject("히로인", imageHideType.Disappear) // 이미지 제거
  ])
  .addEventsAsPage([
    TextBarEvent.text("주인공", "그리고 다시 정신을 잃었다.")
  ])
textGame.addBranch(branch_1_1);

const branch_1_2 = new Branch("branch_1_2", "branch_2")   // 분기점 2

  .addEventsAsPage([CanvasEvent.changeBackGround("C:\Users\eunje\Desktop\자료실블러 1.jpg")])
  .addTextPage("주인공", "나는 (히로인)이/가 좋아!")
  .addEventsAsPage([
    TextBarEvent.text("히로인", "나도 (주인공)이/가 정말 좋아!"),
  ])
  .addEventsAsPage([
    TextBarEvent.text("캐릭터 이름", "대사"),
    CanvasEvent.showEnding(   // 엔딩
      "엔딩 멘트 - HappyEnd"
    )
  ])
  
textGame.addBranch(branch_1_2);

const branch_2 = new Branch("branch_2", "branch_3")
  .addTextPage("캐릭터 이름", "대사")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("https://blog.kakaocdn.net/dn/bqPYzR/btraWSj02cT/HnIasx6vc09IszobY6Fwe0/img.jpg"),
    TextBarEvent.text("캐릭터 이름", "대사"),
  ])

textGame.addBranch(branch_2);