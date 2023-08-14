// 본 파일은 scenario.js 에서 이용가능한 이벤트 스크립트들을 정리한 파일입니다.
// 되도록 수정은 삼가해주시길 바랍니다!

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
  .addEventsAsPage([
    TextBarEvent.text(
      "캐릭터 이름",  // 캐릭터 이름
      "대사"  // 대사(text)
    ),
    CanvasEvent.showEnding(   // 엔딩 (기본으로 제작된 엔딩 구성입니다. 추후 엔딩 연출에 따라 이용되지 않을 수도 있습니다.)
      "엔딩 멘트"
    )
  ])

textGame.addBranch(branch_1_1);

const branch_1_2 = new Branch("branch_1_2", "branch_2")   // 분기점 2
  .addEventsAsPage([
    TextBarEvent.text(
      "캐릭터 이름",  // 캐릭터 이름
      "대사"  // 대사(text)
    ),
    CanvasEvent.showEnding(   // 엔딩 (기본으로 제작된 엔딩 구성입니다. 추후 엔딩 연출에 따라 이용되지 않을 수도 있습니다.)
      "엔딩 멘트"
    )
  ])

textGame.addBranch(branch_1_2);