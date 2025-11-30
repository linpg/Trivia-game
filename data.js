let triviaDB = [
    // ============ ⚾ 傳奇球星 & 紀錄 (40題) ============
    {
        id: 1,
        q: "中職史上的「全壘打王」是誰（截至2024）？",
        options: ["張泰山", "林智勝", "彭政閔", "林益全"],
        a: 1,
        note: "正確！林智勝以300+轟位居全壘打王寶座",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 2,
        q: "「台灣巨砲」是指哪位球員？",
        options: ["陳金鋒", "林智勝", "張泰山", "陳義信"],
        a: 0,
        note: "正確！陳金鋒是永遠的台灣巨砲",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 3,
        q: "中職第一位達成「千安、百轟、百盜」的球員是？",
        options: ["彭政閔", "黃忠義", "張泰山", "林易增"],
        a: 2,
        note: "正確！張泰山是首位達成此紀錄的球員",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 4,
        q: "綽號「恰恰」的球星是？",
        options: ["彭政閔", "王建民", "林智勝", "高國輝"],
        a: 0,
        note: "正確！彭政閔是中信兄弟的傳奇球星",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 5,
        q: "中職史上勝投最多的投手是？",
        options: ["謝長亨", "潘威倫", "勇壯", "陳義信"],
        a: 1,
        note: "正確！潘威倫是中職勝投王，累積超過149勝",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 6,
        q: "「盜帥」是指哪位總教練？",
        options: ["洪一中", "林易增", "葉君璋", "陳瑞振"],
        a: 1,
        note: "正確！林易增球員時期以盜壘聞名",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 7,
        q: "誰被稱為「紅龜」？",
        options: ["陳江和", "陳連宏", "羅敏卿", "陳瑞昌"],
        a: 0,
        note: "正確！陳江和因守備穩健且耐操被稱為紅龜",
        difficulty: 2,
        category: "傳奇球星"
    },
    {
        id: 8,
        q: "中職元年（1990年）的冠軍隊是？",
        options: ["味全龍", "統一獅", "兄弟象", "三商虎"],
        a: 0,
        note: "正確！味全龍奪得中職元年總冠軍",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 9,
        q: "「森林王子」是誰的綽號？",
        options: ["張泰山", "張志豪", "張正偉", "張建銘"],
        a: 0,
        note: "正確！張泰山被稱為森林王子",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 10,
        q: "曾經旅美，回台加入富邦悍將的「棒球情人」是？",
        options: ["高國輝", "林哲瑄", "胡金龍", "陳鏞基"],
        a: 0,
        note: "正確！高國輝被稱為棒球情人",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 11,
        q: "哪位投手有「假日飛刀手」的美名？",
        options: ["陳義信", "黃平洋", "謝長亨", "涂鴻欽"],
        a: 0,
        note: "正確！陳義信習慣在假日出賽且球路犀利",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 12,
        q: "「金臂人」是指哪位投手？",
        options: ["黃平洋", "陳義信", "康明杉", "郭進興"],
        a: 0,
        note: "正確！黃平洋是味全龍早期的王牌投手",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 13,
        q: "哪位球員保有「單季最多安打」紀錄（176支）？",
        options: ["王柏融", "林益全", "王威晨", "陳傑憲"],
        a: 2,
        note: "正確！王威晨在2020年曾打出170+安打（註：紀錄可能隨賽季更新）",
        difficulty: 2,
        category: "歷史紀錄"
    },
    {
        id: 14,
        q: "中職史上第一次「完全打擊」是誰？",
        options: ["陳卓", "艾勃", "林仲秋", "路易士"],
        a: 1,
        note: "正確！味全龍洋將艾勃於1993年達成",
        difficulty: 2,
        category: "歷史紀錄"
    },
    {
        id: 15,
        q: "La New 熊的強力左打，綽號「台灣鋒砲」的是？",
        options: ["陳金鋒", "林智勝", "潘忠韋", "石志偉"],
        a: 0,
        note: "正確！陳金鋒是La New熊的精神領袖",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 16,
        q: "「花花」是哪位球員的綽號？",
        options: ["張正偉", "張建銘", "張志豪", "周思齊"],
        a: 0,
        note: "正確！張正偉綽號花花",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 17,
        q: "哪位球員被稱為「周董」？",
        options: ["周思齊", "周杰倫", "周湯豪", "周賢忠"],
        a: 0,
        note: "正確！周思齊是中職的周董",
        difficulty: 0,
        category: "球員綽號"
    },
    {
        id: 18,
        q: "「大師兄」是指誰？",
        options: ["林智勝", "林智平", "林益全", "林泓育"],
        a: 0,
        note: "正確！林智勝的綽號是大師兄",
        difficulty: 0,
        category: "球員綽號"
    },
    {
        id: 19,
        q: "曾經單季打出39支全壘打的紀錄保持人是？",
        options: ["高國輝", "林智勝", "布雷", "朱育賢"],
        a: 0,
        note: "正確！高國輝曾創下單季39轟紀錄",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 20,
        q: "哪位洋將被稱為「上古神獸」，效力過統一獅？",
        options: ["王漢", "凱撒", "布雷", "羅力"],
        a: 0,
        note: "正確！王漢（José Núñez）是早期的王牌洋投",
        difficulty: 2,
        category: "傳奇球星"
    },
    {
        id: 21,
        q: "兄弟象時期的「黃金三劍客」不包括誰？",
        options: ["陳致遠", "彭政閔", "蔡豐安", "王光輝"],
        a: 3,
        note: "正確！黃金三劍客是陳致遠、彭政閔、蔡豐安。王光輝是一代象",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 22,
        q: "誰是興農牛隊的「東哥」？",
        options: ["黃忠義", "張泰山", "葉君璋", "鄭兆行"],
        a: 0,
        note: "正確！黃忠義綽號東哥",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 23,
        q: "哪位投手有「滑球王子」之稱？",
        options: ["陽建福", "陽耀勳", "潘威倫", "林恩宇"],
        a: 0,
        note: "正確！陽建福的滑球非常犀利",
        difficulty: 2,
        category: "傳奇球星"
    },
    {
        id: 24,
        q: "誰是中職「千勝教頭」？",
        options: ["洪一中", "徐生明", "謝長亨", "林榮一"],
        a: 0,
        note: "正確！洪一中是中職首位達成千勝的總教練",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 25,
        q: "徐生明總教練生前以什麼球路聞名？",
        options: ["蝴蝶球", "指叉球", "曲球", "直球"],
        a: 0,
        note: "正確！徐生明是著名的蝴蝶球投手",
        difficulty: 2,
        category: "傳奇球星"
    },
    {
        id: 26,
        q: "「火哥」是哪位球員的綽號？",
        options: ["張建銘", "張志豪", "張正偉", "張泰山"],
        a: 0,
        note: "正確！張建銘因國際賽表現火熱被稱為火哥",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 27,
        q: "哪位球員有「無敵鐵金剛」之稱？",
        options: ["葉君璋", "陳金鋒", "王金勇", "曾智偵"],
        a: 0,
        note: "正確！葉君璋蹲捕功力深厚，被稱為無敵鐵金剛",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 28,
        q: "「小破」是指哪位球員？",
        options: ["劉芙豪", "陳連宏", "高國慶", "潘武雄"],
        a: 0,
        note: "正確！劉芙豪綽號小破",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 29,
        q: "誰是統一獅的「大學長」？",
        options: ["高國慶", "潘威倫", "潘武雄", "陳鏞基"],
        a: 0,
        note: "正確！高國慶因效力極久被稱為大學長",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 30,
        q: "哪位洋將在中職達成「百勝」里程碑？",
        options: ["羅力", "勇壯", "風神", "楓康"],
        a: 0,
        note: "正確！羅力（Mike Loree）是首位百勝洋投（勇壯也有達標）",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 31,
        q: "中職史上第一位透過「選秀」進入大聯盟體系的球員？",
        options: ["倪福德", "曹錦輝", "陳金鋒", "王建民"],
        a: 0,
        note: "正確！倪福德是從中職轉戰MLB的代表人物",
        difficulty: 2,
        category: "歷史紀錄"
    },
    {
        id: 32,
        q: "哪支球隊曾達成「三連霸」（三連冠）？",
        options: ["兄弟象", "味全龍", "統一獅", "以上皆是"],
        a: 3,
        note: "正確！這三支元老球隊都曾建立三連霸王朝",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 33,
        q: "「棒球先生」是誰的尊稱？",
        options: ["李居明", "趙士強", "郭泰源", "呂明賜"],
        a: 0,
        note: "正確！兄弟象的李居明被稱為棒球先生",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 34,
        q: "哪位球員以「再見全壘打」次數最多聞名？",
        options: ["林智勝", "張泰山", "陳金鋒", "高國輝"],
        a: 0,
        note: "正確！林智勝生涯有多支再見轟",
        difficulty: 2,
        category: "歷史紀錄"
    },
    {
        id: 35,
        q: "誰是中職第一位本土「四割男」（打擊率0.400以上）？",
        options: ["王柏融", "彭政閔", "林益全", "蔣智賢"],
        a: 0,
        note: "正確！王柏融於2016年打出0.414的打擊率",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 36,
        q: "興農牛曾經實施什麼政策引發熱議？",
        options: ["全本土政策", "雙洋砲政策", "洋教練團", "全洋投"],
        a: 0,
        note: "正確！興農牛曾實施不請洋將的「全本土政策」",
        difficulty: 2,
        category: "球隊歷史"
    },
    {
        id: 37,
        q: "「小飛機」是哪位球員？",
        options: ["陳冠任", "陳瑞振", "陳致遠", "陳懷山"],
        a: 0,
        note: "正確！陳冠任綽號小飛機",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 38,
        q: "哪位投手有「嘟嘟」的綽號？",
        options: ["潘威倫", "陽建福", "林恩宇", "林英傑"],
        a: 0,
        note: "正確！潘威倫綽號嘟嘟",
        difficulty: 0,
        category: "球員綽號"
    },
    {
        id: 39,
        q: "中信兄弟的吉祥物是？",
        options: ["小翔", "萊恩", "Frankie", "猿氣小子"],
        a: 0,
        note: "正確！小翔是中信兄弟的吉祥物",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 40,
        q: "統一獅的吉祥物是？",
        options: ["萊恩", "威弟", "盈盈", "大義"],
        a: 0,
        note: "正確！萊恩（Lion）是統一獅的吉祥物",
        difficulty: 0,
        category: "球隊知識"
    },

    // ============ 🏟️ 現役球星 & 球隊 (60題) ============
    {
        id: 41,
        q: "2024年台鋼雄鷹的總教練是？",
        options: ["葉君璋", "洪一中", "林岳平", "陳金鋒"],
        a: 1,
        note: "正確！諸葛洪中執掌台鋼兵符",
        difficulty: 0,
        category: "現役資訊"
    },
    {
        id: 42,
        q: "「大王」是指哪位球員？",
        options: ["王柏融", "王威晨", "王勝偉", "王躍霖"],
        a: 0,
        note: "正確！王柏融從日職回歸後加入台鋼雄鷹",
        difficulty: 0,
        category: "現役球星"
    },
    {
        id: 43,
        q: "味全龍回歸中職後的第一個總冠軍是哪一年？",
        options: ["2021", "2022", "2023", "2024"],
        a: 2,
        note: "正確！味全龍在2023年擊敗樂天桃猿奪冠",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 44,
        q: "「四爺」是哪位統一獅球星？",
        options: ["陳傑憲", "蘇智傑", "林安可", "陳鏞基"],
        a: 0,
        note: "正確！陳傑憲因長相神似吳奇隆（四爺）而得名",
        difficulty: 0,
        category: "現役球星"
    },
    {
        id: 45,
        q: "富邦悍將的主場在哪裡？",
        options: ["新莊", "天母", "桃園", "洲際"],
        a: 0,
        note: "正確！新莊棒球場是富邦悍將的大本營",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 46,
        q: "樂天桃猿的主場在哪裡？",
        options: ["桃園", "新莊", "台南", "高雄"],
        a: 0,
        note: "正確！樂天桃園棒球場",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 47,
        q: "中信兄弟的主場在哪裡？",
        options: ["洲際", "澄清湖", "斗六", "花蓮"],
        a: 0,
        note: "正確！台中洲際棒球場",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 48,
        q: "統一獅的大本營在哪裡？",
        options: ["台南", "嘉義", "屏東", "台北"],
        a: 0,
        note: "正確！台南市立棒球場",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 49,
        q: "台鋼雄鷹的主場主要在哪裡？",
        options: ["澄清湖", "天母", "新竹", "台東"],
        a: 0,
        note: "正確！高雄澄清湖棒球場",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 50,
        q: "味全龍的主場主要在哪裡？",
        options: ["天母", "洲際", "台南", "桃園"],
        a: 0,
        note: "正確！台北天母棒球場",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 51,
        q: "目前中職有幾支球隊（2024年）？",
        options: ["4支", "5支", "6支", "7支"],
        a: 2,
        note: "正確！兄弟、統一、富邦、樂天、味全、台鋼，共6隊",
        difficulty: 0,
        category: "現役資訊"
    },
    {
        id: 52,
        q: "「外野三鬼」是指哪隊的組合？",
        options: ["統一獅", "中信兄弟", "樂天桃猿", "富邦悍將"],
        a: 0,
        note: "正確！統一獅的蘇智傑、陳傑憲、林安可",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 53,
        q: "哪位球員有「國防部長」的美譽？",
        options: ["張育成", "林子偉", "王維中", "江少慶"],
        a: 0,
        note: "正確！張育成在WBC表現優異被封為國防部長",
        difficulty: 0,
        category: "現役球星"
    },
    {
        id: 54,
        q: "2023年選秀狀元（台鋼雄鷹）是誰？",
        options: ["林子偉", "王念好", "林佳緯", "劉俊豪"],
        a: 0,
        note: "正確！林子偉被台鋼選中後交易至樂天",
        difficulty: 2,
        category: "現役資訊"
    },
    {
        id: 55,
        q: "哪位投手綽號「龍王」？",
        options: ["王維中", "徐若熙", "陳冠偉", "林凱威"],
        a: 0,
        note: "正確！王維中是味全龍的王牌左投",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 56,
        q: "「小可愛」是指哪位中信兄弟球員？",
        options: ["江坤宇", "岳東華", "許基宏", "陳子豪"],
        a: 0,
        note: "正確！江坤宇守備好且長相可愛",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 57,
        q: "林立是哪支球隊的強力打者？",
        options: ["樂天桃猿", "中信兄弟", "統一獅", "富邦悍將"],
        a: 0,
        note: "正確！林立是樂天桃猿的核心打者",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 58,
        q: "富邦悍將的啦啦隊叫什麼？",
        options: ["Fubon Angels", "Passion Sisters", "Uni Girls", "Rakuten Girls"],
        a: 0,
        note: "正確！Fubon Angels",
        difficulty: 1,
        category: "啦啦隊"
    },
    {
        id: 59,
        q: "中信兄弟的啦啦隊叫什麼？",
        options: ["Passion Sisters", "Dragon Beauties", "Wing Stars", "Uni Girls"],
        a: 0,
        note: "正確！Passion Sisters",
        difficulty: 1,
        category: "啦啦隊"
    },
    {
        id: 60,
        q: "樂天桃猿的啦啦隊叫什麼？",
        options: ["Rakuten Girls", "LamiGirls", "Fubon Angels", "Wing Stars"],
        a: 0,
        note: "正確！Rakuten Girls",
        difficulty: 1,
        category: "啦啦隊"
    },
    {
        id: 61,
        q: "「炸裂陳子豪」是哪支球隊的應援曲？",
        options: ["中信兄弟", "統一獅", "味全龍", "台鋼雄鷹"],
        a: 0,
        note: "正確！世界名曲「炸裂陳子豪」源自中信兄弟",
        difficulty: 0,
        category: "應援文化"
    },
    {
        id: 62,
        q: "哪位韓國啦啦隊女神加入了味全龍？",
        options: ["李多慧", "安芝儇", "李雅英", "邊荷律"],
        a: 0,
        note: "正確！李多慧在2024年轉戰味全龍",
        difficulty: 0,
        category: "啦啦隊"
    },
    {
        id: 63,
        q: "台鋼雄鷹的啦啦隊叫什麼？",
        options: ["Wing Stars", "Steel Girls", "Hawk Girls", "Eagle Beauties"],
        a: 0,
        note: "正確！Wing Stars，安芝儇是其成員",
        difficulty: 1,
        category: "啦啦隊"
    },
    {
        id: 64,
        q: "統一獅的王牌洋投「大醫生」是誰？",
        options: ["布雷克", "羅昂", "勝騎士", "克維斯"],
        a: 0,
        note: "正確！布雷克（Brock Dykxhoorn）",
        difficulty: 2,
        category: "現役球星"
    },
    {
        id: 65,
        q: "中職目前唯一的「巨蛋」球場是？",
        options: ["台北大巨蛋", "桃園巨蛋", "高雄巨蛋", "台中巨蛋"],
        a: 0,
        note: "正確！台北大巨蛋於2023年底啟用",
        difficulty: 0,
        category: "球場知識"
    },
    {
        id: 66,
        q: "吉力吉撈·鞏冠是哪隊的捕手？",
        options: ["味全龍", "富邦悍將", "中信兄弟", "台鋼雄鷹"],
        a: 0,
        note: "正確！他是味全龍的主力捕手與強打",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 67,
        q: "「土虱」是哪位投手的綽號？",
        options: ["曾仁和", "陳冠宇", "胡智為", "黃子鵬"],
        a: 0,
        note: "正確！曾仁和綽號土虱",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 68,
        q: "「老虎」是哪位投手的綽號？",
        options: ["黃子鵬", "黃恩賜", "黃弘毅", "黃偉晟"],
        a: 0,
        note: "正確！黃子鵬是樂天桃猿的低肩側投",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 69,
        q: "中職一軍例行賽一場打幾局？",
        options: ["9局", "7局", "8局", "10局"],
        a: 0,
        note: "正確！正規賽制為9局",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 70,
        q: "「挑戰」判決需要由誰提出？",
        options: ["總教練", "隊長", "投手", "球迷"],
        a: 0,
        note: "正確！由總教練提出重播輔助判決",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 71,
        q: "朱育賢的綽號是？",
        options: ["酒窩大砲", "朱哥", "小朱", "育育"],
        a: 0,
        note: "正確！樂天桃猿的朱育賢被稱為酒窩大砲",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 72,
        q: "哪位球員被稱為「拿莫·伊漾」？",
        options: ["味全龍球員", "統一獅球員", "兄弟球員", "富邦球員"],
        a: 0,
        note: "正確！拿莫·伊漾是味全龍球員（原名朱祥麟）",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 73,
        q: "古林睿煬是哪一隊的火球男？",
        options: ["統一獅", "富邦悍將", "味全龍", "樂天桃猿"],
        a: 0,
        note: "正確！古林睿煬是統一獅新生代王牌",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 74,
        q: "富邦悍將的總教練（2024）是？",
        options: ["陳金鋒", "丘昌榮", "洪一中", "葉君璋"],
        a: 0,
        note: "正確！陳金鋒接任富邦悍將總教練",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 75,
        q: "中職年度總冠軍賽又被稱為？",
        options: ["台灣大賽", "世界大賽", "亞洲大賽", "超級盃"],
        a: 0,
        note: "正確！Taiwan Series 台灣大賽",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 76,
        q: "哪位選手有「詹帥」之稱？",
        options: ["詹智堯", "詹子賢", "詹姆士", "詹詠然"],
        a: 0,
        note: "正確！詹智堯現為教練",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 77,
        q: "中信兄弟的重砲手，背號39號是？",
        options: ["詹子賢", "陳子豪", "許基宏", "張志豪"],
        a: 0,
        note: "正確！詹子賢",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 78,
        q: "哪位球員被稱為「村長」？",
        options: ["林立", "林靖凱", "林承飛", "林子豪"],
        a: 0,
        note: "正確！林立（林村長）",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 79,
        q: "中職史上身價最高的合約是誰獲得？",
        options: ["張育成", "林智勝", "王柏融", "江少慶"],
        a: 0,
        note: "正確！張育成與富邦悍將簽下史上最大合約",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 80,
        q: "哪一隊的前身是「Lamigo 桃猿」？",
        options: ["樂天桃猿", "富邦悍將", "味全龍", "中信兄弟"],
        a: 0,
        note: "正確！Rakuten 收購了 Lamigo",
        difficulty: 0,
        category: "球隊歷史"
    },
    {
        id: 81,
        q: "富邦悍將的前身是？",
        options: ["義大犀牛", "興農牛", "俊國熊", "以上皆是"],
        a: 3,
        note: "正確！富邦承接義大，義大承接興農，興農承接俊國",
        difficulty: 1,
        category: "球隊歷史"
    },
    {
        id: 82,
        q: "中信兄弟的前身是？",
        options: ["兄弟象", "中信鯨", "時報鷹", "味全龍"],
        a: 0,
        note: "正確！中信集團接手兄弟象",
        difficulty: 0,
        category: "球隊歷史"
    },
    {
        id: 83,
        q: "「天哥」是指哪位味全龍球員？",
        options: ["郭天信", "張政禹", "李凱威", "劉基鴻"],
        a: 0,
        note: "正確！郭天信綽號天哥",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 84,
        q: "「紅色大砲」劉基鴻是哪一隊的狀元？",
        options: ["味全龍", "統一獅", "富邦悍將", "樂天桃猿"],
        a: 0,
        note: "正確！味全龍回歸後的首位選秀狀元",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 85,
        q: "哪位球員被稱為「梅花2」？",
        options: ["陳傑憲", "陳重羽", "陳重廷", "陳鏞基"],
        a: 0,
        note: "正確！陳傑憲背號24（梅花2的撲克牌）",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 86,
        q: "曾頌恩的綽號是？",
        options: ["魚住", "大魚", "小魚", "鯊魚"],
        a: 0,
        note: "正確！因長得像《灌籃高手》的魚住純",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 87,
        q: "台鋼雄鷹的狀元曾子祐守備位置是？",
        options: ["游擊手", "捕手", "外野手", "投手"],
        a: 0,
        note: "正確！曾子祐是游擊手",
        difficulty: 2,
        category: "現役球星"
    },
    {
        id: 88,
        q: "哪位投手以「魔球（蝴蝶球）」聞名中職？",
        options: ["黃平洋", "徐生明", "費爾本", "以上皆非"],
        a: 1,
        note: "正確！已故總教練徐生明",
        difficulty: 2,
        category: "傳奇球星"
    },
    {
        id: 89,
        q: "2024年明星賽在哪裡舉辦？",
        options: ["台北大巨蛋", "洲際棒球場", "澄清湖", "天母"],
        a: 0,
        note: "正確！首度攻蛋舉辦明星賽",
        difficulty: 1,
        category: "賽事資訊"
    },
    {
        id: 90,
        q: "誰是「轉運手」？",
        options: ["官大元", "鄭凱文", "陳鴻文", "李振昌"],
        a: 0,
        note: "正確！官大元以後援身分拿下多場勝投",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 91,
        q: "王溢正是哪一隊的投手（2024）？",
        options: ["台鋼雄鷹", "樂天桃猿", "富邦悍將", "味全龍"],
        a: 0,
        note: "正確！王溢正被交易至台鋼雄鷹",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 92,
        q: "藍寅倫目前效力於？",
        options: ["台鋼雄鷹", "樂天桃猿", "中信兄弟", "富邦悍將"],
        a: 0,
        note: "正確！藍寅倫轉戰台鋼",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 93,
        q: "樂天桃猿的吉祥物是？",
        options: ["猿氣小子", "萊恩", "小翔", "富藍奇"],
        a: 0,
        note: "正確！猿氣小子 (Rocky)",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 94,
        q: "富邦悍將的吉祥物是？",
        options: ["富藍奇 (Frankie)", "萊恩", "小翔", "威弟"],
        a: 0,
        note: "正確！Frankie",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 95,
        q: "味全龍的吉祥物是？",
        options: ["威弟 (Weddie)", "萊恩", "大義", "猿氣"],
        a: 0,
        note: "正確！威弟",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 96,
        q: "台鋼雄鷹的吉祥物是？",
        options: ["TAKAO", "萊恩", "小翔", "威弟"],
        a: 0,
        note: "正確！TAKAO",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 97,
        q: "中職一軍目前的單場MVP獎品通常是？",
        options: ["娃娃公仔", "現金", "手機", "機車"],
        a: 0,
        note: "正確！通常是球隊吉祥物的娃娃",
        difficulty: 0,
        category: "賽事冷知識"
    },
    {
        id: 98,
        q: "哪位投手有「慶baby」之稱？",
        options: ["江少慶", "陳慶榮", "許銘杰", "王溢正"],
        a: 0,
        note: "正確！江少慶",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 99,
        q: "陳鏞基的應援曲原曲是？",
        options: ["轟動武林", "極速", "愛情限時批", "霍元甲"],
        a: 0,
        note: "正確！轟動武林一首歌",
        difficulty: 2,
        category: "應援文化"
    },
    {
        id: 100,
        q: "下列何者不是中職曾經存在的球隊？",
        options: ["時報鷹", "三商虎", "和信鯨", "台電隊"],
        a: 3,
        note: "正確！台電隊是業餘球隊，未曾加入職棒",
        difficulty: 1,
        category: "歷史紀錄"
    },

    // ============ 🧠 棒球規則 & 冷知識 (50題) ============
    {
        id: 101,
        q: "投手投出第幾顆壞球會保送打者？",
        options: ["4顆", "3顆", "5顆", "2顆"],
        a: 0,
        note: "正確！四壞球保送",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 102,
        q: "打者被三振出局需要幾顆好球？",
        options: ["3顆", "2顆", "4顆", "5顆"],
        a: 0,
        note: "正確！三好球三振",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 103,
        q: "一局有幾個出局數？",
        options: ["3個", "2個", "4個", "6個"],
        a: 0,
        note: "正確！三個出局數攻守交換",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 104,
        q: "滿壘是指壘包上有幾位跑者？",
        options: ["3位", "2位", "4位", "1位"],
        a: 0,
        note: "正確！一、二、三壘都有人",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 105,
        q: "滿貫全壘打可以得幾分？",
        options: ["4分", "3分", "5分", "2分"],
        a: 0,
        note: "正確！3位跑者+1位打者回本壘，共4分",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 106,
        q: "DH是指什麼位置？",
        options: ["指定打擊", "代打", "代跑", "投手"],
        a: 0,
        note: "正確！Designated Hitter",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 107,
        q: "游擊手位於哪兩個壘包之間？",
        options: ["二壘和三壘", "一壘和二壘", "三壘和本壘", "外野"],
        a: 0,
        note: "正確！二壘和三壘之間",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 108,
        q: "投手板到本壘板的距離約為？",
        options: ["18.44公尺", "20公尺", "15公尺", "27公尺"],
        a: 0,
        note: "正確！18.44公尺 (60英尺6英寸)",
        difficulty: 2,
        category: "棒球冷知識"
    },
    {
        id: 109,
        q: "完全比賽（Perfect Game）是指？",
        options: ["無人上壘且完封", "無安打比賽", "無失分比賽", "9局沒被打全壘打"],
        a: 0,
        note: "正確！27個出局數，無任何跑者上壘",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 110,
        q: "K在棒球紀錄中代表什麼？",
        options: ["三振", "保送", "安打", "失誤"],
        a: 0,
        note: "正確！K代表三振 (Strikeout)",
        difficulty: 0,
        category: "棒球術語"
    },
    {
        id: 111,
        q: "BB在棒球紀錄中代表什麼？",
        options: ["四壞球保送", "觸身球", "二壘安打", "雙殺"],
        a: 0,
        note: "正確！Base on Balls",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 112,
        q: "HR代表什麼？",
        options: ["全壘打", "安打", "三振", "盜壘"],
        a: 0,
        note: "正確！Home Run",
        difficulty: 0,
        category: "棒球術語"
    },
    {
        id: 113,
        q: "DP代表什麼？",
        options: ["雙殺", "暴投", "捕逸", "死球"],
        a: 0,
        note: "正確！Double Play",
        difficulty: 2,
        category: "棒球術語"
    },
    {
        id: 114,
        q: "ERA是指投手的什麼數據？",
        options: ["防禦率", "勝率", "三振率", "保送率"],
        a: 0,
        note: "正確！Earned Run Average (自責分率/防禦率)",
        difficulty: 1,
        category: "棒球數據"
    },
    {
        id: 115,
        q: "打擊率（AVG）如何計算？",
        options: ["安打數 ÷ 打數", "安打數 ÷ 打席", "得分 ÷ 打數", "上壘數 ÷ 打席"],
        a: 0,
        note: "正確！安打數除以打數",
        difficulty: 2,
        category: "棒球數據"
    },
    {
        id: 116,
        q: "什麼是「完全打擊」？",
        options: ["同一場比賽打出一、二、三壘打和全壘打", "全場都安打", "全場都全壘打", "全場都上壘"],
        a: 0,
        note: "正確！集滿四種安打",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 117,
        q: "觸擊短打通常稱為？",
        options: ["點球", "砍擊", "推打", "拉打"],
        a: 0,
        note: "正確！Bunt (點球/短打)",
        difficulty: 0,
        category: "棒球術語"
    },
    {
        id: 118,
        q: "不死三振發生的情況是？",
        options: ["三振時捕手漏接，一壘無人(或兩出局)", "三振時界外球", "三振時打到人", "三振時投手犯規"],
        a: 0,
        note: "正確！捕手未確實接捕第3顆好球",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 119,
        q: "高飛犧牲打可以讓哪裡的跑者回壘得分？",
        options: ["三壘", "一壘", "二壘", "任何壘"],
        a: 0,
        note: "正確！通常是護送三壘跑者回本壘",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 120,
        q: "盜壘最容易發生在哪個壘包？",
        options: ["二壘", "三壘", "本壘", "一壘"],
        a: 0,
        note: "正確！盜二壘距離最短，成功率相對高",
        difficulty: 1,
        category: "棒球戰術"
    },
    {
        id: 121,
        q: "投手犯規會導致？",
        options: ["跑者推進一個壘包", "打者保送", "出局", "比賽暫停"],
        a: 0,
        note: "正確！所有跑者推進一個壘包",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 122,
        q: "主審裁判站在哪裡？",
        options: ["捕手後方", "投手後方", "二壘後方", "一壘旁"],
        a: 0,
        note: "正確！",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 123,
        q: "什麼是「牛棚」？",
        options: ["投手熱身區", "球員休息室", "觀眾席", "廁所"],
        a: 0,
        note: "正確！Bullpen",
        difficulty: 0,
        category: "棒球術語"
    },
    {
        id: 124,
        q: "終結者（Closer）通常在哪一局上場？",
        options: ["第9局", "第1局", "第5局", "第7局"],
        a: 0,
        note: "正確！負責守住最後一局的勝利",
        difficulty: 0,
        category: "棒球戰術"
    },
    {
        id: 125,
        q: "中繼投手（Set-up Man）的主要任務是？",
        options: ["銜接先發與終結者", "投完比賽", "先發", "代跑"],
        a: 0,
        note: "正確！佈局投手",
        difficulty: 1,
        category: "棒球戰術"
    },
    {
        id: 126,
        q: "「背靠背」全壘打（Back-to-Back）是指？",
        options: ["兩位打者連續擊出全壘打", "背對著打全壘打", "單局兩支全壘打", "兩場連續全壘打"],
        a: 0,
        note: "正確！連續兩棒次開轟",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 127,
        q: "什麼是「鐵支」？",
        options: ["單場4支安打", "4次三振", "4次失誤", "4次保送"],
        a: 0,
        note: "正確！猛打賞是3支，鐵支是4支",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 128,
        q: "猛打賞是指單場幾支安打？",
        options: ["3支以上", "2支", "4支", "5支"],
        a: 0,
        note: "正確！",
        difficulty: 0,
        category: "棒球術語"
    },
    {
        id: 129,
        q: "棒球比賽中，守備位置代號「1」是誰？",
        options: ["投手", "捕手", "一壘手", "游擊手"],
        a: 0,
        note: "正確！投手是1，捕手是2",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 130,
        q: "守備位置代號「6」是誰？",
        options: ["游擊手", "三壘手", "二壘手", "左外野"],
        a: 0,
        note: "正確！6是游擊手",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 131,
        q: "台灣大賽通常採用幾戰幾勝制？",
        options: ["7戰4勝", "5戰3勝", "3戰2勝", "9戰5勝"],
        a: 0,
        note: "正確！七戰四勝制",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 132,
        q: "什麼是「魔術數字」？",
        options: ["距離封王還需幾勝", "球員背號", "球場代號", "得分數"],
        a: 0,
        note: "正確！",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 133,
        q: "觸身球是指？",
        options: ["投手投出的球打到打者身體", "打者打到捕手", "跑者撞到野手", "球打到裁判"],
        a: 0,
        note: "正確！打者保送上一壘",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 134,
        q: "界外球在兩好球之前算什麼？",
        options: ["好球", "壞球", "不算", "出局"],
        a: 0,
        note: "正確！兩好球前算好球，兩好球後不計（除非短打）",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 135,
        q: "兩好球後，短打變成界外球會怎樣？",
        options: ["三振出局", "繼續打", "算壞球", "保送"],
        a: 0,
        note: "正確！視為三振出局",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 136,
        q: "內野高飛必死球是為了防止什麼？",
        options: ["防守方故意掉球製造雙殺", "打者跑太慢", "球飛太高", "觀眾接球"],
        a: 0,
        note: "正確！保護進攻方",
        difficulty: 2,
        category: "棒球規則"
    },
    {
        id: 137,
        q: "誰有權力喊暫停？",
        options: ["裁判", "只有主審", "教練", "球員"],
        a: 0,
        note: "正確！只有裁判能准許暫停",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 138,
        q: "棒球的一壘、二壘、三壘是逆時針還是順時針排列？",
        options: ["逆時針", "順時針", "S型", "隨機"],
        a: 0,
        note: "正確！逆時針跑壘",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 139,
        q: "全壘打牆標竿通常是什麼顏色？",
        options: ["黃色", "紅色", "白色", "藍色"],
        a: 0,
        note: "正確！便於判斷界內界外",
        difficulty: 1,
        category: "球場知識"
    },
    {
        id: 140,
        q: "中職最早的4支球隊不包括？",
        options: ["時報鷹", "兄弟象", "味全龍", "統一獅"],
        a: 0,
        note: "正確！時報鷹是後來加入的，元老是龍獅虎象",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 141,
        q: "中職比賽如果有球員衝突，誰不能衝進場內？",
        options: ["以上皆可", "板凳球員", "牛棚投手", "教練"],
        a: 0,
        note: "正確！通常都會衝進去（雖然會被罰款）",
        difficulty: 2,
        category: "賽事冷知識"
    },
    {
        id: 142,
        q: "哪個顏色的球衣在客場比較常見？",
        options: ["深色", "白色", "條紋", "螢光色"],
        a: 0,
        note: "正確！傳統上主場淺色（白），客場深色",
        difficulty: 1,
        category: "棒球冷知識"
    },
    {
        id: 143,
        q: "中職目前有二軍聯賽嗎？",
        options: ["有", "沒有", "以前有現在沒", "只有練習賽"],
        a: 0,
        note: "正確！有二軍例行賽",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 144,
        q: "FA是指什麼？",
        options: ["自由球員", "王牌球員", "外籍球員", "受傷球員"],
        a: 0,
        note: "正確！Free Agent",
        difficulty: 1,
        category: "棒球術語"
    },
    {
        id: 145,
        q: "保留比賽通常是因為？",
        options: ["下雨或天候不佳", "球員打架", "停電", "以上皆是"],
        a: 0,
        note: "正確！最常見是下雨",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 146,
        q: "中職有和局制度嗎？",
        options: ["有，延長賽打完12局", "沒有，打到分出勝負", "有，打完9局平手就算", "擲硬幣決定"],
        a: 0,
        note: "正確！例行賽延長賽最多12局",
        difficulty: 1,
        category: "賽制知識"
    },
    {
        id: 147,
        q: "觸殺（Tag out）需要什麼條件？",
        options: ["手套持球碰觸跑者", "球丟到跑者身上", "跑者自己跌倒", "喊聲"],
        a: 0,
        note: "正確！必須確實持球",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 148,
        q: "封殺（Force out）通常發生在？",
        options: ["跑者被迫進壘時", "盜壘時", "離壘過遠時", "高飛球時"],
        a: 0,
        note: "正確！",
        difficulty: 1,
        category: "棒球規則"
    },
    {
        id: 149,
        q: "什麼是「失誤（Error）」？",
        options: ["守備員沒處理好本該處理好的球", "投手投壞球", "打者揮空", "裁判誤判"],
        a: 0,
        note: "正確！",
        difficulty: 0,
        category: "棒球規則"
    },
    {
        id: 150,
        q: "QS（優質先發）的定義是？",
        options: ["先發至少6局且自責分3分以內", "先發5局無失分", "先發9局完投", "先發勝投"],
        a: 0,
        note: "正確！Quality Start",
        difficulty: 2,
        category: "棒球數據"
    },

    // ============ 🔢 更多趣味 & 歷史 (50題) ============
    {
        id: 151,
        q: "下列哪位是中信兄弟的總教練（2024奪冠時）？",
        options: ["平野惠一", "林威助", "彭政閔", "丘昌榮"],
        a: 0,
        note: "正確！平野惠一",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 152,
        q: "「恰棒球學苑」是誰創辦的？",
        options: ["彭政閔", "陳金鋒", "王建民", "郭泓志"],
        a: 0,
        note: "正確！彭政閔",
        difficulty: 1,
        category: "棒球周邊"
    },
    {
        id: 153,
        q: "誰是中職史上全壘打最年輕的擊出者？",
        options: ["林承飛", "張泰山", "陳子豪", "江坤宇"],
        a: 0,
        note: "正確！林承飛（18歲）",
        difficulty: 2,
        category: "歷史紀錄"
    },
    {
        id: 154,
        q: "哪位球員曾效力過日職阪神虎？",
        options: ["王柏融", "林威助", "陳金鋒", "郭泓志"],
        a: 1,
        note: "正確！林威助曾效力阪神虎多年",
        difficulty: 1,
        category: "旅外球星"
    },
    {
        id: 155,
        q: "「不死鳥」是哪位投手的稱號？",
        options: ["郭泓志", "王建民", "曹錦輝", "倪福德"],
        a: 0,
        note: "正確！郭泓志歷經多次手術仍重返球場",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 156,
        q: "王建民目前的職位是？",
        options: ["中信兄弟投手教練", "富邦悍將總教練", "球評", "經紀人"],
        a: 0,
        note: "正確！",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 157,
        q: "哪位球員有「基哥」的稱號？",
        options: ["陳鏞基", "陳傑憲", "陳凱倫", "陳俊秀"],
        a: 0,
        note: "正確！陳鏞基",
        difficulty: 0,
        category: "球員綽號"
    },
    {
        id: 158,
        q: "下列哪位是左投手？",
        options: ["陳冠宇", "江少慶", "古林睿煬", "黃子鵬"],
        a: 0,
        note: "正確！陳冠宇是左投（陳陳大丈夫）",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 159,
        q: "中職目前的轉播權利金主要來自？",
        options: ["電視台與網路平台", "門票", "商品", "政府"],
        a: 0,
        note: "正確！轉播金是球團重要收入",
        difficulty: 1,
        category: "產業知識"
    },
    {
        id: 160,
        q: "哪支球隊的應援口號是「強攻強攻」？",
        options: ["中信兄弟", "統一獅", "樂天桃猿", "富邦悍將"],
        a: 0,
        note: "正確！中信兄弟",
        difficulty: 0,
        category: "應援文化"
    },
    {
        id: 161,
        q: "「We Are」是哪支球隊的年度口號？",
        options: ["富邦悍將", "樂天桃猿", "味全龍", "統一獅"],
        a: 0,
        note: "正確！富邦悍將（Fubon Guardians）",
        difficulty: 2,
        category: "應援文化"
    },
    {
        id: 162,
        q: "哪支球隊的代表色是橘色？",
        options: ["統一獅", "兄弟象", "味全龍", "富邦悍將"],
        a: 0,
        note: "正確！統一獅是橘色軍團",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 163,
        q: "哪支球隊的代表色是黃色？",
        options: ["中信兄弟", "統一獅", "味全龍", "樂天桃猿"],
        a: 0,
        note: "正確！黃衫軍",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 164,
        q: "哪支球隊的代表色是紅色？",
        options: ["味全龍", "富邦悍將", "中信兄弟", "台鋼雄鷹"],
        a: 0,
        note: "正確！龍隊是紅色",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 165,
        q: "哪支球隊的代表色是綠色？",
        options: ["台鋼雄鷹", "味全龍", "統一獅", "中信兄弟"],
        a: 0,
        note: "正確！台鋼雄鷹",
        difficulty: 0,
        category: "球隊知識"
    },
    {
        id: 166,
        q: "哪位球員轉隊時引發「保留名單」爭議？",
        options: ["林益全", "胡金龍", "陳鴻文", "王勝偉"],
        a: 0,
        note: "正確！林益全轉戰統一獅引發話題",
        difficulty: 2,
        category: "交易轉隊"
    },
    {
        id: 167,
        q: "誰是「棒球場上的公務員」？",
        options: ["周思齊", "張泰山", "高國慶", "彭政閔"],
        a: 0,
        note: "正確！周思齊因自律而被稱為公務員（也有人稱周董）",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 168,
        q: "中職選秀通常在幾月舉行？",
        options: ["7月", "1月", "12月", "3月"],
        a: 0,
        note: "正確！季中選秀通常在7月",
        difficulty: 1,
        category: "賽制知識"
    },
    {
        id: 169,
        q: "台灣大賽G7（第七戰）如果發生，代表什麼？",
        options: ["雙方打成3勝3敗", "雙方都輸了", "比賽取消", "表演賽"],
        a: 0,
        note: "正確！這是最緊張的決一死戰",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 170,
        q: "哪位裁判以拉弓動作聞名？",
        options: ["蘇建文", "張展榮", "紀華文", "楊崇煇"],
        a: 0,
        note: "正確！蘇建文裁判（已引退）",
        difficulty: 2,
        category: "棒球冷知識"
    },
    {
        id: 171,
        q: "陳晨威的綽號是？",
        options: ["光速神威", "小陳", "威少", "阿威"],
        a: 0,
        note: "正確！因腳程快被稱為光速神威",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 172,
        q: "林安可最擅長的除了打擊還有？",
        options: ["投球", "捕手", "當教練", "當裁判"],
        a: 0,
        note: "正確！林安可是二刀流選手（雖然主要負責打擊）",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 173,
        q: "誰是樂天桃猿的重砲捕手？",
        options: ["林泓育", "廖健富", "嚴宏鈞", "宋嘉翔"],
        a: 0,
        note: "正確！小胖林泓育",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 174,
        q: "陳傑憲以前在哪個聯賽打球？",
        options: ["日本業餘/高校", "美國小聯盟", "韓國職棒", "澳洲職棒"],
        a: 0,
        note: "正確！他在日本讀高校（岡山共生）",
        difficulty: 2,
        category: "球員背景"
    },
    {
        id: 175,
        q: "哪位球員有「理事長」的稱號？",
        options: ["胡金龍", "林智勝", "周思齊", "陳鏞基"],
        a: 0,
        note: "正確！胡金龍曾任球員工會理事長",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 176,
        q: "兄弟象時期的「盜帥」林易增後來去哪隊當總教練？",
        options: ["兄弟象", "味全龍", "興農牛", "La New熊"],
        a: 0,
        note: "正確！他在兄弟象當過總教練",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 177,
        q: "哪支球隊擁有「全猿主場」的加油風格？",
        options: ["樂天桃猿", "統一獅", "中信兄弟", "富邦悍將"],
        a: 0,
        note: "正確！Lamigo時期首創",
        difficulty: 0,
        category: "應援文化"
    },
    {
        id: 178,
        q: "中職比賽中，如果平手會進行什麼？",
        options: ["延長賽", "PK大戰", "猜拳", "互踢"],
        a: 0,
        note: "正確！延長賽（突破僵局制視賽季規定）",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 179,
        q: "CPBL的中文全名是？",
        options: ["中華職業棒球大聯盟", "中國職業棒球", "台灣職業棒球", "華人職業棒球"],
        a: 0,
        note: "正確！中華職業棒球大聯盟",
        difficulty: 0,
        category: "基本常識"
    },
    {
        id: 180,
        q: "富邦悍將的前身義大犀牛，誰是當時的最大咖洋將？",
        options: ["曼尼 (Manny Ramirez)", "坎諾", "羅力", "索沙"],
        a: 0,
        note: "正確！曼尼旋風席捲全台",
        difficulty: 1,
        category: "歷史紀錄"
    },
    {
        id: 181,
        q: "誰是「核彈頭」？",
        options: ["陳致遠", "張志豪", "陳傑憲", "林立"],
        a: 0,
        note: "正確！陳致遠過去擔任第一棒被稱為黃金戰士/核彈頭",
        difficulty: 1,
        category: "傳奇球星"
    },
    {
        id: 182,
        q: "哪位選手有「工地主任」的戲稱？",
        options: ["王勝偉", "陳鏞基", "林益全", "林智勝"],
        a: 0,
        note: "正確！王勝偉（王拔）皮膚黝黑且親民",
        difficulty: 2,
        category: "球員綽號"
    },
    {
        id: 183,
        q: "「小飛刀」是指誰？",
        options: ["陳鴻文", "陳義信", "林恩宇", "李振昌"],
        a: 0,
        note: "正確！陳鴻文（承接叔叔陳義信的稱號）",
        difficulty: 1,
        category: "球員綽號"
    },
    {
        id: 184,
        q: "哪支球隊的球迷被稱為「百萬象迷」？",
        options: ["中信兄弟", "統一獅", "樂天桃猿", "味全龍"],
        a: 0,
        note: "正確！兄弟象/中信兄弟球迷基數最大",
        difficulty: 0,
        category: "應援文化"
    },
    {
        id: 185,
        q: "「恰恰」彭政閔引退時的背號是？",
        options: ["23", "31", "52", "18"],
        a: 0,
        note: "正確！23號已退休",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 186,
        q: "陳金鋒的背號是？",
        options: ["52", "23", "31", "18"],
        a: 0,
        note: "正確！52號是永遠的台灣巨砲",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 187,
        q: "林智勝的背號是（味全龍時期）？",
        options: ["31", "32", "1", "25"],
        a: 0,
        note: "正確！31號",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 188,
        q: "中職史上最多勝的總教練是？",
        options: ["洪一中", "徐生明", "葉君璋", "林威助"],
        a: 0,
        note: "正確！洪一中",
        difficulty: 0,
        category: "傳奇球星"
    },
    {
        id: 189,
        q: "哪支球隊的球迷被戲稱為「爪爪」？",
        options: ["中信兄弟", "統一獅", "富邦悍將", "樂天桃猿"],
        a: 0,
        note: "正確！源自香蕉（黃色）或象爪",
        difficulty: 1,
        category: "球迷文化"
    },
    {
        id: 190,
        q: "哪支球隊的球迷被戲稱為「喵喵」？",
        options: ["統一獅", "味全龍", "台鋼雄鷹", "富邦悍將"],
        a: 0,
        note: "正確！因為是獅子（大貓）",
        difficulty: 1,
        category: "球迷文化"
    },
    {
        id: 191,
        q: "哪位球員有「棒球情人」之稱？",
        options: ["高國輝", "王建民", "林智勝", "張泰山"],
        a: 0,
        note: "正確！高國輝",
        difficulty: 0,
        category: "球員綽號"
    },
    {
        id: 192,
        q: "哪位洋將是樂天桃猿的救援王？",
        options: ["豪勁", "豪斯", "豪邁", "豪棒"],
        a: 0,
        note: "正確！豪勁（Bradin Hagens）",
        difficulty: 1,
        category: "現役球星"
    },
    {
        id: 193,
        q: "中職新人王一生可以拿幾次？",
        options: ["1次", "2次", "3次", "無限次"],
        a: 0,
        note: "正確！一生只有一次機會",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 194,
        q: "金手套獎是獎勵什麼表現好的球員？",
        options: ["守備", "打擊", "跑壘", "人氣"],
        a: 0,
        note: "正確！守備",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 195,
        q: "最佳十人獎是獎勵什麼？",
        options: ["該守位綜合表現最佳", "人氣最高", "薪水最高", "年紀最大"],
        a: 0,
        note: "正確！打擊與守備綜合評比",
        difficulty: 0,
        category: "賽制知識"
    },
    {
        id: 196,
        q: "中職的「三冠王」通常指打者的哪三項數據？",
        options: ["打擊率、全壘打、打點", "安打、得分、盜壘", "全壘打、安打、保送", "長打率、上壘率、打擊率"],
        a: 0,
        note: "正確！打擊率、全壘打、打點",
        difficulty: 1,
        category: "棒球數據"
    },
    {
        id: 197,
        q: "投手的「三冠王」是指？",
        options: ["勝投、防禦率、三振", "勝投、救援、中繼", "完投、完封、勝投", "局數、球數、好球數"],
        a: 0,
        note: "正確！勝投、防禦率、三振",
        difficulty: 1,
        category: "棒球數據"
    },
    {
        id: 198,
        q: "哪位選手是台鋼雄鷹的第一位隊長？",
        options: ["王溢正", "王柏融", "藍寅倫", "陳文杰"],
        a: 1,
        note: "正確！王柏融擔任首任隊長",
        difficulty: 1,
        category: "現役資訊"
    },
    {
        id: 199,
        q: "「紅大砲」劉基鴻是哪隊的？",
        options: ["味全龍", "中信兄弟", "統一獅", "樂天桃猿"],
        a: 0,
        note: "正確！味全龍",
        difficulty: 0,
        category: "現役球星"
    },
    {
        id: 200,
        q: "中職目前（2024）有沒有實施「投球計時限制」？",
        options: ["有", "沒有", "看裁判心情", "只有總冠軍賽有"],
        a: 0,
        note: "正確！為了加快比賽節奏已實施",
        difficulty: 1,
        category: "賽制知識"
    }
];
