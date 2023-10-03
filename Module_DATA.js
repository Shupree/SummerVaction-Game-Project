//엑셀, 스크립트 데이터 TEST
//이미지 삭제가 필요할 시 자리에 "투명.png"를 넣어주세요.
//배경을 유지해야할땐 
// Backgrounds_Group : null,
// Backgrounds : 0, 
// 을 입력해주세요.

//보라색 :조건, 초록:선택

//지속  BGM - 기존 BGM 파일 삭제, 덮어 씌우기
//오늘꿈에 너(일상)
//한치앞도 보이지 않아(비일상)

//2인 시 왼/오 배치로 수정
const DATA_01 = [
    //이미지 CG test
    // {   //3, 0
    //     Backgrounds_Group : 0,
    //     Backgrounds : 3,
    //     그림 : ["투명", "민재_조정", "투명"],
    //     teller : "???",
    //     script : "이미지 CG test",
    // },
    // {   //3, 0
    //     Backgrounds_Group : 0,
    //     Backgrounds : 3,
    //     그림 : ["투명", "연우_조정", "투명"],
    //     teller : "???",
    //     script : "안녕 현수야~ 좋은 아침",
    // },
    // {   //3, 0
    //     Backgrounds_Group : 0,
    //     Backgrounds : 3,
    //     그림 : ["투명", "윤호_조정", "투명"],
    //     teller : "???",
    //     script : "이미지 CG test",
    // },
    // {   //3, 0
    //     Backgrounds_Group : 0,
    //     Backgrounds : 3,
    //     그림 : ["투명", "은주_조정", "투명"],
    //     teller : "???",
    //     script : "이미지 CG test",
    // },

    {   //3, 0
        Backgrounds_Group : 0,
        Backgrounds : 3,
        그림 : ["투명", "투명", "투명"],
        teller : "???",
        script : "...",
    },
    {   //4, 1
        Backgrounds_Group : 0,
        Backgrounds : 1,
        그림 : ["투명", "투명", "투명"],
        teller : "뉴스 앵커",
        script : "다음 뉴스입니다."
    },
    {   //5, 2
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "뉴스 앵커",
        script : "어제 오후 2시경, 예보되었던 운석 MJ-22가 S시 G구에 충돌하였습니다."
    },
    {   //5, 3
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "뉴스 앵커",
        script : "시민들은 미리 대피하여 인명피해는 없었으나 약 50억 원 이상의 재산 피해가 발생하였으며.."
    },
    {   //7, 4
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "나",
        script : "..다녀오겠습니다."
    },
    {   //8, 5
        Backgrounds_Group : 0,
        Backgrounds : 2,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "오늘도 하루가 시작됐다."
    },
    {   //9, 6
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "똑같이 화창한 날씨, 똑같이 조용한 골목길."
    },
    {   //11, 7
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"], //민재 실루엣
        teller : "???",
        script : "서현수!!"
    },
    {   //13, 8
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "똑같이 거지같은 하루"
    },
    {   //15, 9
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],//정민재
        teller : "???",
        script : "하, 이제 무시하기로 한거야?"
    },
    {   //17, 10
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "나",
        script : "미..미안 못 봤어.."
    },
    {   //19, 11
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "얘 이름은 정민재. 보다시피 쓰레기다."
    },
    {   //20, 12
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "학교에서는 '그냥 조금 노는 애' 정도로 평가되고 있지만, 뒤에서는 때리고 삥 뜯는 게 일상인 놈이다."
    },
    {   //21, 13
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "하나 특이한 점은 모든 괴롭힘은 나에게만, 모든 감시도 나에게만 한다는 것"
    },
    {   //22, 14
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "덕분에 나는 정민재에게 반항할 수 없었고,"
    },
    {   //22, 15
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "덕분에 정민재는 단 한명의 적만 만들고 편안한 학교 생활을 이어갈 수 있었다."
    },
    {   //24, 16
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "됐고, 그거 가져왔지?"
    },
    {   //26, 17 
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "나",
        script : "그거..? 아! 여기.."
    },
    {   //28, 18
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "나는 안주머니에서 담배 한 갑을 꺼내서 건넸다."
    },
    {   //30, 19
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "이야 확실하네~ 고맙다?"
    },
    {   //32, 20
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "나",
        script : "..."
    },
    {   //34, 21
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "그래도 고마운 줄 알아~ 니가 주는 걸 내가 비밀로 해주니까 걔네들은 너한테 이런 부탁 안하잖아."
    },
    {   //34, 22
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "그치?"
    },
    {  //35, 23
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "계속 비밀로 해 줄테니까, 앞으로도 잘 부탁해~"
    },
    {  //37, 24
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "정민재의 손이 내 어깨를 툭툭 쳤다. 나의 몸은 본능적으로 움츠러들었다."
    },
    {  //39, 25
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "ㅋㅋ 쫄기는. 약속도 지켰는데 때리면 쓰레기지, 그치?"
    },
    {  //41, 26
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재는 그 말을 마치고는 사라졌다."
    },
    {  //43, 27
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "나",
        script : "..쓰레기"
    },
    {  //45, 28
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "들리지도 않는 분풀이를 하며 나는 학교로 들어갔다."
    },
    {  //46, 29
        Backgrounds_Group : 0,
        Backgrounds : 7,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "학교 생활은 생각보다 나쁘지 않다."
    },
    {  //47, 30
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "혼자인 건 아쉽지만, 정민재가 학교에서는 대놓고 괴롭히진 않았고, 무엇보다 학교엔 \"그 애\"가 있다."
    },
    {  //48, 31
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "나는 고개를 들어 교실 한 쪽을 바라보았다."
    },
    {  //49, 32
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],//이연우CG
        teller : null,
        script : "이연우."
    },
    {  //50, 33
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : null,
        script : "우리반의 반장이면서 공부도 상위권이고, 여러모로 애들을 챙겨주기도 하는 완벽한 아이다."
    },
    {  //51, 34
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : null,
        script : "내가 바라보던 그 때 연우가 갑자기 내 쪽으로 다가 왔다."
    },
    {  //52, 35
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : null,
        script : "나는 반사적으로 고개를 돌렸다."
    },
    {  //54, 36
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "이연우",
        script : "현수야 혹시 역사 숙제 냈었니? 확인하는데 네 이름이 안 보이네?"
    },
    {  //56, 37
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "나",
        script : "아! "
    },
    {  //58, 38
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : null,
        script : "젠장, 정민재 것은 해놓고 정작 내 숙제를 안하다니.."
    },
    {  //60, 39
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "이연우",
        script : "음.. 점심시간 까지는 시간 있으니까 그 전에 꼭 내줘?"
    },
    {  //62, 40
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "나",
        script : "알겠어. 말해줘서 고마워..!"
    },
    {  //64, 41
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],//CG삭제
        teller : null,
        script : "연우는 가볍게 미소를 짓고 자리로 돌아갔다."
    },
    {  //65, 42
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "반장에 역할에 충실한 것 뿐일수도 있지만, 항상 혼자인 나에게 연우는 한 줄기 작은 빛이었다."
    },
    {  //66, 43
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "이런 삶이라도 이어나갈 수 있는 것 또한 연우 덕분일 것이다."
    },
    {  //68, 44
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "(딩동댕동..)"
    },
    {  //70, 45
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "오늘 학교도 이렇게 끝이 났다."
    },
    {  //72, 46
        Backgrounds_Group : 0,
        Backgrounds : 2,
        그림 : ["투명", "민재", "투명"],//정민재
        teller : "정민재",
        script : "어우 드디어 끝났네, 이 지겨운 거"
    },
    {  //74, 47
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "물론 집에 가는 것은 더 나중의 일이다."
    },
    {  //75, 48
        Backgrounds_Group : 0,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "정민재는 나에게 어깨동무를 하며 항상 가던 골목으로 갔다."
    },
    {  //76, 49
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "거기에는 이미 한 명이 담배를 피고 있었다."
    },
    {  //78, 50
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "여어~ 허언!"
    },
    {  //80, 51
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "???",
        script : "너 ㅆ.. 내가 그렇게 부르지 말랬지?"
    },
    {  //82, 52
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "정민재",
        script : "응 어쩔~"
    },
    {  //82, 53
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "???",
        script : "하아.. 내가 니 때문에 담배를 못 끊는다."
    },
    {  //82, 54
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],//허은주
        teller : null,
        script : "정민재와 티격태격하는 얘는 허은주다."
    },
    {  //82, 55
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],//허은주
        teller : null,
        script : "SNS를 즐겨 하고, 항상 화장을 진하게 하고 다닌다."
    },
    {  //82, 56
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],//허은주
        teller : null,
        script : "나한테 심부름을 자주 시켜 귀찮게 군다. 물론 귀찮은 티를 낼 순 없다."
    },
    {  //82, 57
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "정민재",
        script : "야 근데 걔네들은 언제 와?"
    },
    {  //82, 58
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "허은주",
        script : "윤호 오늘 당번이라 좀 늦고, 걔는 윤호 따라 오겠지"
    },
    {  //82, 59
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "정민재",
        script : "어쩐지 니가 대놓고 담배를 피드라 ㅋ"
    },
    {  //82, 60
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],//정민재/허은주
        teller : "허은주",
        script : "..닥쳐"
    },
    {  //82, 61
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "은주", "투명"],//정민재/허은주
        teller : "정민재",
        script : "아니 걔네 사귀는 거 알면서 왜 포기를 안하는 거야?"
    },
    {  //82, 62
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "은주", "투명"],//정민재/허은주
        teller : "허은주",
        script : "니가 뭘 알..어머"
    },
    {  //82, 63
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],//X
        teller : null,
        script : "그 순간, 두 명이 이쪽으로 걸어왔고, 허은주는 황급히 담배를 껐다."
    },
    {  //82, 64
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],//연우
        teller : null,
        script : "한 명은 연우였고, 다른 한 명은.."
    },
    {  //82, 65
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],//X
        teller : "허은주",
        script : "윤호야~~^^"
    },
    {  //82, 66
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "강윤호."
    },
    {  //82, 67
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "공부도 잘하고 운동도 잘하고 돈도 많은, 사실상 왕과 같은 존재다."
    },
    {  //82, 68
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "나를 직접 괴롭히진 않지만 정민재가 윤호를 믿고 나를 괴롭히는 것도 있고, 사실 그냥 두렵다."
    },
    {  //82, 69
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "마치 우두머리 숫사자를 보고 있는 것 같달까.."
    },
    {  //82, 70
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "이런 완벽한 사람과 연우가 사귀는 건 당연한 결과일 것이다."
    },
    {  //82, 71
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "나였어도 윤호를 선택했을 것이 뻔해서 억울하진 않지만 마음이 아프다."
    },
    {  //82, 72
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : null,
        script : "이런 불공평한 세상"
    },
    {  //82, 73
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],//강윤호
        teller : "강윤호",
        script : "어, 가자"
    },
    {  //82, 74
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "윤호는 아주 간결하게 한 마디 하고는, 앞장서서 어디론가로 갔다."
    },
    {  //82, 75
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "뭐, 어디론가라고 해봤자 늘 똑같은 곳이지만."
    },
    {  //82, 76
        Backgrounds_Group : 0,//호텔. 배경교체
        Backgrounds : 5,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "도착한 곳은 어느 호텔이다."
    },
    {  //82, 77
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "평소처럼 윤호는 직원에게 몇 마디 말을 하고, 직원은 방을 안내해준다."
    },
    {  //82, 78
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정말.. 아무리 작은 호텔이라고 해도 고2가 소유주인게 말이 되나?"
    },
    {  //82, 79
        Backgrounds_Group : 0,//호텔방 교체
        Backgrounds : 6,
        그림 : ["투명", "민재", "투명"], //민재
        teller : "정민재",
        script : "이야~ 아늑하기도 하지"
    },
    {  //82, 80
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"], //민재
        teller : "정민재",
        script : "방음 잘 돼, 눈치 볼 필요 없어, 술 마셔도 되는 거 뿐 아니라 아예 냉장고에 술이 있다?"
    },
    {  //82, 81
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"], //민재
        teller : "정민재",
        script : "올때마다 드는 생각인데 진짜 개꿀이다 ㅋㅋ"
    },
    {  //82, 82
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재는 계속 술을 마셨고, 연우와 윤호는 맥주와 함께 시켜 놓은 치킨을 먹었다. 은주는 다이어트를 한다는지 물만 계속 마실 뿐이었다."
    },
    {  //82, 83
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "얼마 안 가 취기가 올라온 정민재가 말을 꺼냈다."
    },
    {  //82, 84
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "아 맞다, 니네 옆 동네에 운석 떨어진 거 알지?"
    },
    {  //82, 85
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "은주"],
        teller : "허은주",
        script : "그렇게 사이렌 들리고 뉴스 나오고 난리를 치는데 모르겠냐?"
    },
    {  //82, 86
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "은주"],
        teller : "정민재",
        script : "씨발 아무튼, 거기 가보자고"
    },
    {  //82, 87
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "연우"],
        teller : "이연우",
        script : "지금..?"
    },
    {  //82, 88
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "윤호"],
        teller : "강윤호",
        script : "..민재 좀 취한 거 같은데"
    },
    {  //82, 89
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "윤호"],
        teller : "정민재",
        script : "아니 씨발 살면서 전날 떨어진 운석을 볼 일이 얼마나 있다고 그래?"
    },
    {  //82, 90
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "윤호"],
        teller : "정민재",
        script : "솔직히 가 볼만 하잖아?"
    },
    {  //82, 91
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "윤호", "투명"],
        teller : "강윤호",
        script : "민재, 욕은 적당히 하고,"
    },
    {  //82, 92
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "아주 잠시 침묵이 흐르고, 윤호가 입을 열었다."
    },
    {  //82, 93
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "윤호", "투명"],
        teller : "강윤호",
        script : "민재, 욕은 적당히 하고,"
    },
    {  //82, 94
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "아주 잠시 침묵이 흐르고, 윤호가 입을 열었다."
    },
    {  //82, 95
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller : "강윤호",
        script : "근데, 좀 끌리긴 하네."
    },
    {  //82, 96
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller : "허은주",
        script : "뭐?"
    },
    {  //82, 97
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "그래~~ 역시 윤호라면 날 이해해 줄 줄 알았어."
    },
    {  //82, 98
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller : "허은주",
        script : "아니 지금 시간도 늦었는데 이게 맞아?"
    },
    {  //82, 99
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "이연우",
        script : "오히려 시간이 늦었으니 우리가 접근하기 쉬울 수도?."
    },
    {  //82, 100
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller : "허은주",
        script : "그..!"
    },
    {  //82, 101
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "허은주는 가기 싫어하는 눈치로 이리저리 애들을 둘러보다 나를 바라보았다."
    },
    {  //82, 102
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "그러고는..."
    },
    {  //82, 103
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "한숨을 쉬더니 다시 돌아섰다."
    },
    {  //82, 104
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller : "허은주",
        script : "그래.. 모두 그렇다면야.."
    },
    {  //82, 105
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "그럼 다 된거지? 간다?"
    },
    {  //82, 106
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재는 그 말을 마치고는 내 어깨를 잡고 밖으로 나갔다."
    },
    {  //82, 107
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "다들 갈 거면서 꼭 튕기더라~ 그치?"
    },
    {  //82, 108
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "나",
        script : "어.. 으응.."
    },
    {  //82, 109
        Backgrounds_Group : 0,
        Backgrounds : 8,
        그림 : ["투명", "투명", "투명"], 
        teller : null,
        script : "윤호의 차를 정민재가 운전하면서 우리는 운석이 떨어진 동네로 들어갔다."
    },
    {  //82, 110
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "당연히 면허는 없지만, 정민재는 생각보다 운전을 잘 하는 놈이었다."
    },
    {  //82, 111
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "얼마 안가 그 동네 근처로 왔지만, 들어가는 도로는 단단히 막혀 있어 우리는 근처에 차를 대고 주위를 돌아다녔다."
    },
    {  //82, 112
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "10분쯤 걸었나.. 연우가 손을 뻗으며 말했다."
    },
    {  //82, 113
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "이연우",
        script : "아, 저쪽은 들어갈 수 있을 것 같은데?"
    },
    {  //82, 114
        Backgrounds_Group : 0, //배경변화, 폴리스라인
        Backgrounds : 4,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "연우가 가리킨 곳은 사람이 없는 흙길이었다. 그 너머에는 급하게 막아놓은 듯, '출입금지' 띠만 쳐져 있었다."
    },
    {  //82, 115
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "가까이 가보니 정말 띠만 쳐져 있고 따로 지키는 사람은 없었다."
    },
    {  //82, 116
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재는 가볍게 띠를 넘어갔다."
    },
    {  //82, 117
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "참나.. 이럴거면 뭐하러 막아둔거야? 뭐, 나야 좋지만"
    },
    {  //82, 118
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재의 뒤를 따라 모두가 띠를 넘어왔고, 운석을 향해 걸어갔다."
    },
    {  //82, 118
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "운석의 여파로 무너진 건물들 때문에 가는 길이 험했고, 허은주가 가끔 불평을 늘어놓았지만 결국엔 운석 앞까지 도착했다."
    },
    {  //82, 119
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "뭐야 생각보다 작네?"
    },
    {  //82, 120
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "약 4m쯤 되는 운석 앞에서 정민재가 말했다."
    },
    {  //82, 121
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "도시가 날라가길래 롯데타워는 될 줄 알았는데 말이야."
    },
    {  //82, 122
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],
        teller : "허은주",
        script : "아오 빡통아 제발 공부 좀 해라.."
    },
    {  //82, 123
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],
        teller : "정민재",
        script : "응~ 니 나랑 성적 비벼~ ㅋㅋ"
    },
    {  //82, 124
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "티격태격하는 둘을 뒤로하고, 나는 잠시 주위를 둘러보았다."
    },
    {  //82, 125
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "윤호와 연우는 같이 다니면서 예뻐 보이는 운석 조각을 찾고 있었고"
    },
    {  //82, 126
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "내가 시선을 아래로 돌린 순간,"
    },
    {  //82, 127
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "나는 무언가를 발견하였다."
    },
    {  //82, 128
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : "나",
        script : "틈..?"
    },
    {  //82, 129
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "운석에 사람 한 명이 간신히 들어갈 법한 틈이 있었다."
    },
    {  //82, 130
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "내가 안 쪽을 확인해보려 몸을 낮췄을 때였다."
    },
    {  //82, 131
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "야!!!"
    },
    {  //82, 132
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "서현수 주제에 혼자 다니네?"
    },
    {  //82, 133
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "정민재는 내 뒤통수를 한 대 때리더니 내가 보던 굴을 바라보았다."
    },
    {  //82, 134
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "뭐야 이건?"
    },
    {  //82, 135
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : null,
        script : "정신차리고 보니 허은주와 강윤호, 그리고 연우도 이 쪽으로 와 있었다. 정민재의 큰 소리를 듣고 온 것 같다."
    },
    {  //82, 136
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["윤호", "투명", "연우"],
        teller : "이연우",
        script : "민재야, 우리 왔다고 광고할 거 아니면 좀 조용히 해줘."
    },
    {  //82, 137
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["윤호", "투명", "연우"],
        teller : null,
        script : "윤호가 틈을 보고 말했다."
    },
    {  //82, 138
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["윤호", "투명", "연우"],
        teller : "강윤호",
        script : "이건 뭐야?"
    },
    {  //82, 139
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["윤호", "투명", "연우"],
        teller : "이연우",
        script : "운석 안에 공간이 있는 건가?"
    },
    {  //82, 140
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "이정도면 사람도 들어가겠는데?"
    },
    {  //82, 141
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller : "허은주",
        script : "야 너 뭐하려ㄱ.."
    },
    {  //82, 142
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller : "정민재",
        script : "들어가보면 알겠지!!"
    },
    {  //82, 143
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "정민재는 그대로 틈 안으로 들어갔다."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller : "이연우",
        script : "참.. 대단해."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller : "강윤호",
        script : "일단 좀 기다려보자."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller : null,
        script : "발소리가 점점 작아지나 싶더니, 정민재의 목소리가 들렸다."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script : "야 여기 개넓은데?? 빨리 들어와봐!!"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "..신났네 아주"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "일단 나 혼자만 들어가 볼 테니까 기다리고 있어."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그 때 저 멀리서 사이렌 소리가 들렸다."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "뭐야 경찰 소리 아니야??"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "설마 민재 소리가 저기까지.."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "하여튼 정민재 이 새끼는 생각이 없어!"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "어쩔 수 없네. 들어가자."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "결국 윤호를 선두로 모두 틈 안으로 들어가게 되었다."
    },
    {  //82, 144
        Backgrounds_Group : null,//동굴안
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "운석의 안은 신비로웠다."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "운석 크기에 비해 엄청나게 큰 공간, 어디서 들어오는 지 모를 불그스름한 빛."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "이런 비현실적인 공간에서 나와 모두는 앞으로 걸어갈 뿐이었다."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "아니 진짜 계속 들어간다고? 걍 적당히 있다가 돌아가면 되잖아!"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "여기 휴대폰도 안터지고 축축해서 오래 있기 싫은데.."
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "정민재",
        script: "경찰이 어디까지 들어올 줄 알고 그래? 그리고 이번에 또 경찰서 가면 진짜 조지는 거 몰라?"
    },
    {  //82, 144
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "정민재",
        script: '뭐, 우리 "허은주"님께서 그렇게 무서우시다면 혼자 돌아가시든가요 ㅋㅋ '
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "허은주",
        script: "씨발 다 너 때문이잖아.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "확실히 경찰들이 언제 돌아갈 지도 모르고, 기왕 들어온 거 끝까지 가 보는 것도 나쁘지 않지."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "운석 안 쪽이 이렇게 넓다는게 신기하잖아."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["윤호", "투명", "은주"],
        teller: "허은주",
        script: "..알겠어"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그 후로 몇 분 동안 걸어갔고, 결국 이 공간에도 끝이 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "어.. 저기.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "뭐야 막다른 길이야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "문이 하나 있는 거 같네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그 앞에는 꽤 오래 된 것 같은 철문이 하나 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "정민재는 고민 없이 문에 다가갔다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "몇 번 손잡이를 돌려보더니.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그대로 몸을 부딪혔고, 의외로 문은 쉽게 열렸다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "뭐야 별 거 아닌데?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],
        teller: "허은주",
        script: "제발 깜빡이좀 키고 행동해.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "정민재는 이미 안으로 들어갔고, 우리도 따라 들어갔다."
    },{  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,//학교 정문
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "여긴.. 학교?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "신기하네. 낡긴 했는데 무너진 것 같지는 않아."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "왠지 모르겠지만 빛도 들어오고.. 꽤나 흥미로운걸"
    },
    
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "아니.. 분명 뭔가 이상한데.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "내가 이상한거야??"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "나는 입구 쪽을 둘러보다가 게시판 같은 곳에서 지도를 발견했다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],//이연우."지도"
        teller: "이연우",
        script: "오, 지도. 확실히 학교인 건 맞나보네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],//이연우."지도"
        teller: "이연우",
        script: "여긴 정문일테고.. 일단 끝에부터 가볼까?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["연우", "투명", "윤호"],
        teller: "강윤호",
        script: "그래, 그럼 강당부터 가보자."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "어째 나보다 더 신난 거 같아?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "이 지도도 챙겨가면 좋을 것 같아. 현수가 가지고 있을래?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "나는 고개를 끄덕이고 지도를 챙겼다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "<SYSTEM>",
        script: "지도를 획득하였습니다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "<SYSTEM>",
        script: "상단의 버튼을 눌러 학교의 전체 지도와 이야기가 진행되고 있는 위치를 확인할 수 있습니다.	상단의 버튼을 눌러 학교의 전체 지도와 이야기가 진행되고 있는 위치를 확인할 수 있습니다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "강당은 정말 넓었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "위에는 큰 조명들이 많이 달려 있었고, 체육관으로도 쓰였는지 농구 골대도 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그런데 하나, 평범한 강당들과 다른 점이 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "저기 가운데.. 돌이야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,//알
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "강당 가운데 사람 정도 크기의 돌이 있었고,"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그 주변을 둘러 작은 돌들이 감싸듯이 놓여 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "배치가 절묘한게.. 꼭 사람이 해 놓은 것 같네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "..조금 쎄하다"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "이런 거 막 영화에서 나오는 거 아냐?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "흐으음..."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "정민재는 잠시 고민하는 듯 하더니 나를 불렀다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "야! 너가 확인해봐."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "나",
        script: "어... 뭐를..?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "확 씨! 뭐긴 뭐야. 저거 돌은 맞나, 위험한 건가 확인해보라고"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "정민재의 눈빛에 나는 어쩔 수 없이 돌에 다가가 만져보았다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "모양은 약간 비석같았고, 겉면의 촉감은 평범한 돌 같았다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "딱히 뭔 일이 일어나진 않네"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "나",
        script: "이걸로 된 거지..?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "나는 돌에서 떨어지려 했다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "에헤이~ 아직이ㅈ... 어라?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "딱히 뭔 일이 일어나진 않네"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "정민재는 나를 돌 쪽으로 살짝 밀었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "나는 발에 작은 돌이 걸려 그대로 돌과 부딫히게 되었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "하아.. 민재야.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["연우", "투명", "민재"],
        teller: "정민재",
        script: "아니 진짜 살짝 밀었는데.. 하여튼 존나 약해가지고 귀찮게"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "어어 저거 돌 쓰러지는데?"
    },
    {  //엑셀 num, 데이터 넘버 , BGS : Crash Rock
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "나의 몸과 부딫힌 그 돌은 천천히 쓰러지더니 바닥에 세게 부딪혔고.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "한 쪽에 크게 금이 갔다.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "허은주",
        script: "돌이.. 깨진 거야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "이래도 아무 일이 없어? 진짜 그냥 돌인가보네"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "에잉 재미없기는."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "현수, 걸을 수 있어?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "어.. 조금 아프긴 한데 괜찮아."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "좋네. 일단 여긴 더 볼 게 없는 것 같으니까 이동하자."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,//알 1인칭
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "나는 돌의 깨진 틈 사이를 보았다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "속에.. 공간이 있는 거 같은데.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "정민재",
        script: "야!! 뭘 멍때리고 앉았어?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,//알 1인칭(돌아봄)
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "아! 지금 갈게, 미안!"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null, //배경변화임시-복도.
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "강당을 나가고, 보건실과 진학 지도실을 확인해봤지만, 딱히 특별할 것은 없었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그리고 다시 정문을 지나 반대편으로 향하던 때였다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "꺄아악!!"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "정민재",
        script: "아 씨 깜짝아, 왜 지랄이야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "허은주",
        script: "저기.. 저기 벌레.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "허은주가 가리킨 쪽을 보니 개미같이 생긴 벌레가 기어가고 있었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "하나 다른 점은 그 벌레는 평소에 보던 개미들과 다르게 거의 2cm 정도 될 만큼 컸다는 점이다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "으.. 조금 크긴 하네.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "대체 어디서 나온 거야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "각자 딱히 행동을 취하진 않은 이 때, 정민재가 성큼성큼 다가갔다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "그리고는 밟아 죽였다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: null,
        script: "콰직, 무언가 터지는 소리가 났다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "뭐 개미가 커봤자 바퀴벌레보다도 작구만."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "이런 거 가지고 내 고막 터트릴려 한 거야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "..벌레 존나 싫어."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "어.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "저기.. 더 있는데.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "나는 앞쪽에 있는 벌레 두 마리를 가리켰다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "아 진짜..."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "나 그냥 나갈래"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "딴 건 몰라도 진짜 이건 아니야!"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "허은주는 누가 잡을 새도 없이 바로 뒤를 돌아 정문 쪽으로 향했다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그리고는.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "꺄아아아악!!!!"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "아 씨발 진짜."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "허은주는 소리를 지르며 다시 돌아왔다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "헉.. 헉... 저기.. 벌레..."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "씨발.. 7마리는 되는 거 같아.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "진짜 짜증난다고..."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "허은주는 거의 울 것 같은 표정이었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "정민재는 살짝 놀라는 듯 하더니, 궁금해 하며 물었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "민재"],
        teller: "정민재",
        script: "아니 근데 벌레 싫은 건 그렇다고 쳐도, 그것들 내가 잡고 있는데 대체 뭐가 문제야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["은주", "투명", "윤호"],
        teller: "강윤호",
        script: "그래. 여기까지 왔는데 벌레때문에 돌아가기엔 아깝잖아."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "..."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "..알겠어"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "윤호까지 그렇게 말한다면 가긴 하겠는데, 나 좀 뒤쪽에 있을 거야. 알았어?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "다행히 합의는 봤네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "그럼 얘들아, 혹시 여기도 좀 봐줄래?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: null,
        script:'연우는 "자료실"이라 써 있는 방의 문을 잡고 있었다.'
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "여기 문이 잠겨 있는 것 같아. 안쪽을 보려고 해도 어두워서 잘 안보이네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "어떻게 할까?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "이름",
        script: "대사"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "이름",
        script: "대사"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "이름",
        script: "대사"
    },
    
];
