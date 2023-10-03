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
//DATA_02 = 2.옆에 열려있는 행정실부터 가자 선택지.
const DATA_02_02 = [
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "나",
        script: "그냥 행정실부터 가도 될 것 같은데.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "왜? 문도 낡아 보이는구만?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "나",
        script: "아니 그게 아니라.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "나",
        script: "벌레가 가득 있을 수도 있고.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "은주"],
        teller: "허은주",
        script: "..옆 방 가자"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "연우"],
        teller: "이연우",
        script: "민재가 힘이 세잖아. 부탁 좀 할게 ㅎ"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "정민재는 맘에 안드는 듯 나를 살짝 째려보더니, 문을 힘껏 밀었다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "문이 크게 흔들리더니, 얼마 안 가 큰 소리를 내며 열렸다. "
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "..씨발 나만 고생하지"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "윤호"],
        teller: "강윤호",
        script: "민재 수고 많았다. 덕분에 내가 좀 편해졌네."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["민재", "투명", "윤호"],
        teller: "정민재",
        script: "에휴.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null, // 자료실 배경변화
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "다들 자료실로 들어갔고, 나는 정민재의 시선을 애써 피하며 따라 들어갔다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "으.. 먼지.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "다행히 벌레는 없네? ㅎ"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "자료실 안쪽은 꽤 좁았지만, 양 옆의 선반마다 종이로 된 자료들이 가득했다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "하지만.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "뭐야 이거 다 비었는데?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "내 것만 이런 거야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "윤호", "투명"],
        teller: "강윤호",
        script: "아니, 나도 몇 개 봤는데, 하나같이 비어 있어."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "민재", "투명"],
        teller: "정민재",
        script: "아이씨 나 진짜 생고생만 한 거야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "음.. 딱 하나 있긴 한데.."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: null,
        script: "연우는 나에게 USB하나를 건네며 말했다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "저기 책상에 하나 있더라. 현수가 좀 챙겨줄래?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "은주", "투명"],
        teller: "허은주",
        script: "..저거도 비어 있는 거 아니야?"
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "연우", "투명"],
        teller: "이연우",
        script: "그래도 혹시 모르니까 챙겨만 두자."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: "<SYSTEM>",
        script: "알 수 없는 USB를 획득하였습니다."
    },
    {  //엑셀 num, 데이터 넘버
        Backgrounds_Group : null,
        Backgrounds : 0,
        그림 : ["투명", "투명", "투명"],
        teller: null,
        script: "그렇게 USB를 챙기고 자료실을 나와 행정실로 이동할 때였다."
    },
];
