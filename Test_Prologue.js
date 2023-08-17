// testsfltile 
//BackgroundData : 공통 / 1F / 2F/ 3F 으로 분리 예정, 모듈사용시 String 으로
//쓰여야 하므로 주석 혹은 별도의 데이터 타입으로 분리. 

//목표 : ScriptData split 기능 써서 아래의 꼴로 인식가능하게 만들기
//0/"뉴스앵커"/0/0/0/"다음 뉴스입니다."    
// 거실/"뉴스앵커"/화면왼쪽없음/화면오른쪽없음/화면중앙없음/"다음뉴스입니다."
//& 클릭 딜레이 해소, 주인공 이름 입력시 데이터 타입 변화 고려

//name : String, text : String, src : String
const BackgroundsData =
    [
        "images/backgrounds/강당/강당.png",
        "images/backgrounds/강당/강당_블러.png",
        "images/backgrounds/계단/계단A_레드.png",
        "images/backgrounds/계단/계단A_레드블러.png"
    ]

const NameData =
    {
        주인공 : "주인공",
        이연우 : "이연우",
        허은주 : "허은주",
        정민재 : "정민재",
        강윤호 : "강윤호",
        알수없음 : "???"
    }

const ImageData = 
    {
        Test_Name : "히로인",
        Test_src : "images/charactors/히로인_인간_01.png",
        Test_positon : 2,
        Test_transition : "0"
    }

//임시 테스트용
const LogData = 
    {
        1 : "천일염의 유통기한은 천일",
        2 : "adfa"
    }