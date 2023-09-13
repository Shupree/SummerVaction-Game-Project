const textGame = new TextGame();

const branch_1 = new Branch("branch_1", null, null)
  .addEventsAsPage([
    OptionEvent.AddOption("A2"),
    OptionEvent.addItem("Map", "images/items/Map.png"),
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
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("선택지 1", "branch_1_1", null),
      new BranchPair("선택지 2", "branch_1_2", null)
    ]),
  ])

textGame.addBranch(branch_1);

const branch_1_1 = new Branch("branch_1_1", "branch_2", null)   // 분기점 1
  // Test_Module
  .addEventsAsPage([
    CanvasEvent.removeObject("히로인_인간", "images/charactors/히로인_인간_01.png")
  ])
  //+1씩 반복해 넣어주는 코드 작성하기
  .ModuleTest(0)
  .ModuleTest(1)
  .ModuleTest(2)
  .ModuleTest(3)
  .addEventsAsPage([
    SoundEvent.sfx("sounds/효과음/효과음/Door Open.mp3")
  ])
  .ModuleTest(4)
  .ModuleTest(5)
  .ModuleTest(6)
  .ModuleTest(7)
  .ModuleTest(8)
  .ModuleTest(9)
  .ModuleTest(10)

  .ModuleTest(11)
  .ModuleTest(12)
  .ModuleTest(13)
  .ModuleTest(14)
  .ModuleTest(15)
  .ModuleTest(16)
  .ModuleTest(17)
  .ModuleTest(18)
  .ModuleTest(19)
  .ModuleTest(20)

  .ModuleTest(21)
  .ModuleTest(22)
  .ModuleTest(23)
  .ModuleTest(24)
  .addEventsAsPage([
    SoundEvent.sfx("sounds/효과음/인간/발소리.mp3")
  ])
  .ModuleTest(25)
  .ModuleTest(26)
  .ModuleTest(27)
  .addEventsAsPage([
    SoundEvent.sfx("sounds/효과음/인간/웅성웅성1.mp3")
  ])
  .ModuleTest(28)
  .ModuleTest(29)
  .ModuleTest(30)
  
  .ModuleTest(31)
  .ModuleTest(32)
  .ModuleTest(33)
  .ModuleTest(34)
  .ModuleTest(35)
  .ModuleTest(36)
  .ModuleTest(37)
  .ModuleTest(38)
  .ModuleTest(39)
  .ModuleTest(40)

  .ModuleTest(41)
  .ModuleTest(42)
  .ModuleTest(43)
  .addEventsAsPage([
    SoundEvent.sfx("sounds/효과음/효과음/따르르릉 학교종.mp3")
  ])
  .ModuleTest(44)
  .ModuleTest(45)
  .ModuleTest(46)
  .ModuleTest(47)
  .ModuleTest(48)
  .ModuleTest(49)
  .ModuleTest(50)

  // .ModuleTest(51)
  // .ModuleTest(52)
  // .ModuleTest(53)
  // .ModuleTest(54)
  // .ModuleTest(55)
  // .ModuleTest(56)
  // .ModuleTest(57)
  // .ModuleTest(58)
  // .ModuleTest(59)
  // .ModuleTest(60)

  // .ModuleTest(61)
  // .ModuleTest(62)
  // .ModuleTest(63)
  // .ModuleTest(64)
  // .ModuleTest(65)
  // .ModuleTest(66)
  // .ModuleTest(67)
  // .ModuleTest(68)
  // .ModuleTest(69)
  // .ModuleTest(70)

  // .ModuleTest(71)
  // .ModuleTest(72)
  // .ModuleTest(73)
  // .ModuleTest(74)
  // .ModuleTest(75)
  // .ModuleTest(76)
  // .ModuleTest(77)
  // .ModuleTest(78)
  // .ModuleTest(79)
  // .ModuleTest(80)

  // .ModuleTest(81)
  // .ModuleTest(82)
  // .ModuleTest(83)
  // .ModuleTest(84)
  // .ModuleTest(85)
  // .ModuleTest(86)
  // .ModuleTest(87)
  // .ModuleTest(88)
  // .ModuleTest(89)
  // .ModuleTest(90)

  // .ModuleTest(91)
  // .ModuleTest(92)
  // .ModuleTest(93)
  // .ModuleTest(94)
  // .ModuleTest(95)
  // .ModuleTest(96)
  // .ModuleTest(97)
  // .ModuleTest(98)
  // .ModuleTest(99)
  // .ModuleTest(100)

  // .ModuleTest(101)
  // .ModuleTest(102)
  // .ModuleTest(103)
  // .ModuleTest(104)
  // .ModuleTest(105)
  // .ModuleTest(106)
  // .ModuleTest(107)
  // .ModuleTest(108)
  // .ModuleTest(109)
  // .ModuleTest(110)

  // .ModuleTest(111)
  // .ModuleTest(112)
  // .ModuleTest(113)
  // .ModuleTest(114)
  // .ModuleTest(115)
  // .ModuleTest(116)
  // .ModuleTest(117)
  // .ModuleTest(118)
  // .ModuleTest(119)
  // .ModuleTest(120)

  // .ModuleTest(121)
  // .ModuleTest(122)
  // .ModuleTest(123)
  // .ModuleTest(124)
  // .ModuleTest(125)
  // .ModuleTest(126)
  // .ModuleTest(127)
  // .ModuleTest(128)
  // .ModuleTest(129)
  // .ModuleTest(130)
  
  // .ModuleTest(131)
  // .ModuleTest(132)
  // .ModuleTest(133)
  // .ModuleTest(134)
  // .ModuleTest(135)
  // .ModuleTest(136)
  // .ModuleTest(137)
  // .ModuleTest(138)
  // .ModuleTest(139)
  // .ModuleTest(140)
 
  // .ModuleTest(141)
  // .ModuleTest(142)
  // .ModuleTest(143)
  // .ModuleTest(144)
  // .ModuleTest(145)
  // .ModuleTest(146)
  // .ModuleTest(147)
  // .ModuleTest(148)
  // .ModuleTest(149)
  // .ModuleTest(150)

textGame.addBranch(branch_1_1);

const branch_1_2 = new Branch("branch_1_2", "branch_2", null)   // 분기점 2
  .addEventsAsPage([CanvasEvent.changeBackGround("images/backgrounds/자료실/자료실_레드.png")])
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

const branch_2 = new Branch("branch_2", null, null)
  .addEventsAsPage([
    CanvasEvent.removeObject("히로인_인간", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/자료실/자료실_레드블러.png"),
    TextBarEvent.text("히로인", "이전 선택지에서의 선택에 따른 자동 진행 테스트입니다!"),
    TextBarEvent.branch([
      new BranchPair(null, "branch_2_1", "A1"),
      new BranchPair(null, "branch_2_2", "A2")
    ])
  ])

textGame.addBranch(branch_2);

const branch_2_1 = new Branch("branch_2_1", "branch_3", null)
  .addEventsAsPage([
    TextBarEvent.text("히로인", "A1 선택지를 골랐을 경우의 장면입니다."),
  ])

textGame.addBranch(branch_2_1);

const branch_2_2 = new Branch("branch_2_2", "branch_3", null)
  .addEventsAsPage([
    TextBarEvent.text("히로인", "A2 선택지를 골랐을 경우의 장면입니다."),
  ])

textGame.addBranch(branch_2_2);