//엑셀, 스크립트 데이터 TEST
//이미지 삭제가 필요할 시 자리에 "투명.png"를 넣어주세요.
//배경을 유지해야할땐 
// Backgrounds_Group : null,
// Backgrounds : 0, 
// 을 입력해주세요.
const DATA_01 = [
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
        그림 : ["투명", "민재", "은주"],//정민재/허은주
        teller : "정민재",
        script : "여어~ 허언!"
    },
];
