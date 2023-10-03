const textGame = new TextGame();

const branch_1 = new Branch("branch_1", null)
  .addEventsAsPage([
    OptionEvent.addOption("A2"),
    OptionEvent.addItem("Map", "images/items/ItemIcon.png"),
    CanvasEvent.changeBackGround("images/backgrounds/도서관/도서관.png"),
    DelayEvent.delay(2500),
    CanvasEvent.addImage(
      "히로인_인간",
      "images/charactors/히로인_인간_01.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    DelayEvent.delay(3000),
    TextBarEvent.text(
      "히로인",
      "임시 구성된 화면입니다."
    ),
  ])
  .addTextPage("히로인","대사 출력 테스트입니다!")
  .addTextPage("히로인","A")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("정문", "branch_1_1", null),
      new BranchPair("컴퓨터실", "branch_1_2", null)
    ]),
  ])

textGame.addBranch(branch_1);

const branch_1_1 = new Branch("branch_1_1", "branch_2")   // 분기점 2
  .addEventsAsPage([
    OptionEvent.addOption("Gate"),
    OptionEvent.addItem("Map", "images/items/ItemIcon.png"),
    CanvasEvent.changeBackGround("images/backgrounds/자료실/자료실_레드.png")
  ])
  .addTextPage("주인공", "나는 (히로인)이/가 좋아!")
  .addEventsAsPage([
    TextBarEvent.text("히로인", "나도 (주인공)이/가 정말 좋아!"),
  ])
  .addEventsAsPage([
    TextBarEvent.text("캐릭터 이름", "대사"),
    /*CanvasEvent.showEnding(   // 엔딩
      "엔딩 멘트 - HappyEnd"
    )*/
  ])
  
textGame.addBranch(branch_1_1);

const branch_1_2 = new Branch("branch_1_2", "branch_2")   // 분기점 2
  .addEventsAsPage([
    OptionEvent.addOption("ComputerRoom"),
    OptionEvent.removeItem("Map"),
    CanvasEvent.changeBackGround("images/backgrounds/자료실/자료실_레드.png")
  ])
  .addTextPage("주인공", "나는 (히로인)이/가 좋아!")
  .addEventsAsPage([
    TextBarEvent.text("히로인", "나도 (주인공)이/가 정말 좋아!"),
  ])
  .addEventsAsPage([
    TextBarEvent.text("캐릭터 이름", "대사"),
    /*CanvasEvent.showEnding(   // 엔딩
      "엔딩 멘트 - HappyEnd"
    )*/
  ])
  
textGame.addBranch(branch_1_2);

const branch_2 = new Branch("branch_2", null)
  .addEventsAsPage([
    CanvasEvent.removeObject("히로인_인간", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/자료실/자료실_레드블러.png"),
    TextBarEvent.text("히로인", "이전 선택지에서의 선택에 따른 자동 진행 테스트입니다!"),
    TextBarEvent.branch([
      new BranchPair(null, "branch_2_1", "Gate"),
      new BranchPair(null, "branch_2_2", "ComputerRoom")
    ])
  ])

textGame.addBranch(branch_2);

const branch_2_1 = new Branch("branch_2_1", "branch_3")
  .addEventsAsPage([
    TextBarEvent.text("히로인", "정문을 갔을 경우의 텍스트입니다."),
  ])

textGame.addBranch(branch_2_1);

const branch_2_2 = new Branch("branch_2_2", "branch_3")
  .addEventsAsPage([
    TextBarEvent.text("히로인", "컴퓨터실을 갔을 경우의 텍스트입니다."),
    CanvasEvent.showEnding(
      "images/items/ItemIcon.png"
    )
  ])

textGame.addBranch(branch_2_2);