//엑셀, 스크립트 데이터 TEST
//이미지 삭제가 필요할 시 자리에 "투명.png"를 넣어주세요.
//배경을 유지해야할땐 
// Backgrounds_Group : null,
// Backgrounds : 0, 
// 을 입력해주세요.
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
        Backgrounds_Group : 3,
        Backgrounds : 3,
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
        그림 : ["투명", "민재", "은주"],//정민재/허은주
        teller : "???",
        script : "너 ㅆ.. 내가 그렇게 부르지 말랬지?"
    },
    {  //82, 52
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "은주"],//정민재/허은주
        teller : "정민재",
        script : "응 어쩔~"
    },
    {  //82, 53
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "은주"],//정민재/허은주
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
        그림 : ["민재", "은주", "투명"],//정민재/허은주
        teller : "정민재",
        script : "야 근데 걔네들은 언제 와?"
    },
    {  //82, 58
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "은주", "투명"],//정민재/허은주
        teller : "허은주",
        script : "윤호 오늘 당번이라 좀 늦고, 걔는 윤호 따라 오겠지"
    },
    {  //82, 59
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "은주", "투명"],//정민재/허은주
        teller : "정민재",
        script : "어쩐지 니가 대놓고 담배를 피드라 ㅋ"
    },
    {  //82, 60
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "은주", "투명"],//정민재/허은주
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
        그림 : ["은주", "연우", "히로인_인간_test"],
        teller : null,
        script : "강윤호."
    },
    {  //82, 83
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "윤호", "투명"],
        teller : null,
        script : "강윤호."
    },

];
