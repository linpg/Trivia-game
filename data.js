let triviaDB = [
    // ============ 🇹🇼 台灣藝人 & 綜藝 (25題) ============
    {
        id: 1,
        q: "周杰倫的粉絲名稱是什麼?",
        options: ["杰迷", "杰倫粉", "小公舉", "杰盟"],
        a: 0,
        note: "正確！周杰倫的粉絲通常被稱為「杰迷」",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 2,
        q: "S.H.E 中的 H 代表誰?",
        options: ["Selina", "Hebe", "Ella", "Helen"],
        a: 1,
        note: "正確！H 代表 Hebe 田馥甄",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 3,
        q: "五月天的團長是誰?",
        options: ["阿信", "怪獸", "瑪莎", "冠佑"],
        a: 1,
        note: "正確！怪獸(溫尚翊)是五月天的團長",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 4,
        q: "蔡依林的稱號是?",
        options: ["甜心教主", "流行天后", "胚胎天后", "亞洲舞孃"],
        a: 2,
        note: "正確！蔡依林被稱為「胚胎天后」(Play 呸)",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 5,
        q: "林志玲的丈夫是誰?",
        options: ["言承旭", "Akira", "木村拓哉", "周杰倫"],
        a: 1,
        note: "正確！林志玲的丈夫是日本放浪兄弟成員 Akira",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 6,
        q: "綜藝節目《康熙來了》的主持人是?",
        options: ["吳宗憲 & 漢典", "蔡康永 & 小S", "陶晶瑩 & 納豆", "胡瓜 & 浩角翔起"],
        a: 1,
        note: "正確！康熙代表蔡康永和徐熙娣(小S)",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 7,
        q: "吳宗憲的兒子叫什麼?",
        options: ["鹿希派", "吳姍儒", "周湯豪", "余祥銓"],
        a: 0,
        note: "正確！吳宗憲的兒子是鹿希派(LucyPIE)",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 8,
        q: "哪位藝人被稱為「零負評女神」?",
        options: ["林依晨", "張鈞甯", "桂綸鎂", "田馥甄"],
        a: 0,
        note: "正確！林依晨因形象良好被稱為零負評女神",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 9,
        q: "頑童MJ116 的成員不包括?",
        options: ["瘦子", "小春", "大淵", "熱狗"],
        a: 3,
        note: "正確！MC HotDog 熱狗不是頑童成員，是兄弟本色成員",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 10,
        q: "歌曲《小幸運》的原唱是?",
        options: ["田馥甄", "徐佳瑩", "A-Lin", "鄧紫棋"],
        a: 0,
        note: "正確！《我的少女時代》主題曲由田馥甄演唱",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 11,
        q: "《想見你》的男主角是?",
        options: ["許光漢", "施柏宇", "張孝全", "吳慷仁"],
        a: 0,
        note: "正確！許光漢飾演李子維/王詮勝",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 12,
        q: "蕭敬騰的成名曲是?",
        options: ["王妃", "背叛", "新不了情", "只能想念你"],
        a: 1,
        note: "正確！蕭敬騰在星光大道踢館賽演唱《背叛》一戰成名",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 13,
        q: "哪位藝人有「行走CD」之稱?",
        options: ["林俊傑", "周杰倫", "王力宏", "陳奕迅"],
        a: 0,
        note: "正確！林俊傑因現場演唱穩定如CD而被稱為行走CD",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 14,
        q: "茄子蛋的代表作是?",
        options: ["浪子回頭", "漂向北方", "魚仔", "刻在我心底的名字"],
        a: 0,
        note: "正確！《浪子回頭》是茄子蛋最紅的台語歌",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 15,
        q: "謝金燕的父親是?",
        options: ["賀一航", "豬哥亮", "余天", "邢峰"],
        a: 1,
        note: "正確！謝金燕是秀場天王豬哥亮的女兒",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 16,
        q: "王心凌的稱號是?",
        options: ["甜心教主", "可愛教主", "流行教主", "時尚教主"],
        a: 0,
        note: "正確！王心凌被稱為「甜心教主」",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 17,
        q: "Energy 復出後最紅的舞步是?",
        options: ["16蹲", "鬼步", "機械舞", "鎖舞"],
        a: 0,
        note: "正確！Energy 的「16蹲」在2024年爆紅",
        difficulty: 0,
        category: "台灣藝人"
    },
    {
        id: 18,
        q: "盧廣仲的早餐名曲是?",
        options: ["早安晨之美", "吃早餐", "蛋餅油條", "早安台北"],
        a: 0,
        note: "正確！《早安，晨之美！》歌詞有「對啊對啊」",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 19,
        q: "動力火車由哪兩位成員組成?",
        options: ["尤秋興 & 顏志琳", "阿信 & 怪獸", "秋興 & 志明", "顏志琳 & 春風"],
        a: 0,
        note: "正確！動力火車由尤秋興和顏志琳組成",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 20,
        q: "玖壹壹來自哪個城市?",
        options: ["台北", "高雄", "台中", "台南"],
        a: 2,
        note: "正確！玖壹壹是來自台中的嘻哈團體",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 21,
        q: "9m88 是哪種風格的歌手?",
        options: ["爵士/R&B", "重金屬", "民謠", "聲樂"],
        a: 0,
        note: "正確！9m88 以復古爵士和 R&B 風格聞名",
        difficulty: 2,
        category: "台灣藝人"
    },
    {
        id: 22,
        q: "告五人的成名曲之一是?",
        options: ["披星戴月的想你", "小幸運", "想見你想見你想見你", "修煉愛情"],
        a: 0,
        note: "正確！《披星戴月的想你》是告五人的代表作",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 23,
        q: "Lulu 黃路梓茵最初是從哪個節目出道的?",
        options: ["大學生了沒", "我愛黑澀會", "超級星光大道", "模范棒棒堂"],
        a: 0,
        note: "正確！Lulu 是《大學生了沒》班底出身",
        difficulty: 1,
        category: "台灣藝人"
    },
    {
        id: 24,
        q: "Marz23 是哪個樂團的主唱?",
        options: ["TRASH", "滅火器", "美秀集團", "血肉果汁機"],
        a: 0,
        note: "正確！Marz23 是 TRASH 樂團的主唱阿夜",
        difficulty: 2,
        category: "台灣藝人"
    },
    {
        id: 25,
        q: "瘦子E.SO 來自哪個團體?",
        options: ["頑童MJ116", "兄弟本色", "玖壹壹", "五月天"],
        a: 0,
        note: "正確！瘦子是頑童MJ116的成員",
        difficulty: 0,
        category: "台灣藝人"
    },

    // ============ 🇰🇷 韓國藝人 & K-POP (25題) ============
    {
        id: 26,
        q: "BTS 的粉絲名稱是?",
        options: ["ARMY", "BLINK", "ONCE", "EXO-L"],
        a: 0,
        note: "正確！BTS 的粉絲稱為 ARMY (阿米)",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 27,
        q: "BLACKPINK 中誰是泰國籍成員?",
        options: ["Lisa", "Jennie", "Rosé", "Jisoo"],
        a: 0,
        note: "正確！Lisa 是泰國籍成員",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 28,
        q: "TWICE 的台灣成員是?",
        options: ["周子瑜", "舒華", "王怡人", "雨琦"],
        a: 0,
        note: "正確！周子瑜是 TWICE 的台灣成員",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 29,
        q: "韓劇《魷魚遊戲》中的遊戲不包括?",
        options: ["捉迷藏", "拔河", "打彈珠", "跳房子"],
        a: 0,
        note: "正確！劇中第一關是「一二三木頭人」，不是捉迷藏",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 30,
        q: "BIGBANG 的隊長是?",
        options: ["G-Dragon", "T.O.P", "Taeyang", "Daesung"],
        a: 0,
        note: "正確！G-Dragon (GD) 是 BIGBANG 的隊長",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 31,
        q: "IU 的本名是?",
        options: ["李知恩", "金泰妍", "裴秀智", "朴信惠"],
        a: 0,
        note: "正確！IU 的本名是李知恩",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 32,
        q: "Super Junior 的應援色是?",
        options: ["寶藍色", "粉紅色", "黃色", "紅色"],
        a: 0,
        note: "正確！SJ 的應援色是寶藍色 (Sapphire Blue)",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 33,
        q: "NewJeans 的出道曲是?",
        options: ["Attention", "Hype Boy", "Ditto", "OMG"],
        a: 0,
        note: "正確！NewJeans 以《Attention》驚喜出道",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 34,
        q: "哪位演員主演了《愛的迫降》?",
        options: ["玄彬", "孔劉", "李敏鎬", "宋仲基"],
        a: 0,
        note: "正確！玄彬飾演北韓軍官李正赫",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 35,
        q: "少女時代的隊長是?",
        options: ["太妍", "潤娥", "Jessica", "Tiffany"],
        a: 0,
        note: "正確！太妍是少女時代的隊長",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 36,
        q: "EXO 出道時分為哪兩個小分隊?",
        options: ["EXO-K & EXO-M", "EXO-K & EXO-C", "EXO-1 & EXO-2", "EXO-A & EXO-B"],
        a: 0,
        note: "正確！分為韓國分隊 EXO-K 和中國分隊 EXO-M",
        difficulty: 2,
        category: "韓國藝人"
    },
    {
        id: 37,
        q: "SEVENTEEN 有幾位成員?",
        options: ["13位", "17位", "10位", "11位"],
        a: 0,
        note: "正確！SEVENTEEN 雖然叫17，但有13位成員 (13人+3分隊+1團體)",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 38,
        q: "孔劉主演的喪屍電影是?",
        options: ["屍速列車", "屍戰朝鮮", "殭屍校園", "活屍大軍"],
        a: 0,
        note: "正確！《屍速列車》(釜山行) 由孔劉主演",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 39,
        q: "女團 (G)I-DLE 的台灣成員是?",
        options: ["舒華", "雨琦", "Minnie", "Soyeon"],
        a: 0,
        note: "正確！葉舒華是 (G)I-DLE 的台灣成員",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 40,
        q: "哪位是《Running Man》的能力者?",
        options: ["金鍾國", "劉在錫", "李光洙", "哈哈"],
        a: 0,
        note: "正確！金鍾國因力氣大被稱為「能力者」或「斯巴達」",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 41,
        q: "BTS 哪位成員發行了單曲《Seven》?",
        options: ["Jungkook", "V", "Jimin", "Suga"],
        a: 0,
        note: "正確！Jungkook (柾國) 發行了《Seven》",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 42,
        q: "Stray Kids 的粉絲名叫?",
        options: ["STAY", "SKZ", "Kids", "Stray"],
        a: 0,
        note: "正確！粉絲名是 STAY (You make Stray Kids STAY)",
        difficulty: 2,
        category: "韓國藝人"
    },
    {
        id: 43,
        q: "宋慧喬和宋仲基合作的電視劇是?",
        options: ["太陽的後裔", "浪漫滿屋", "男朋友", "繼承者們"],
        a: 0,
        note: "正確！兩人在《太陽的後裔》中合作並結緣",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 44,
        q: "JYP 的老闆是?",
        options: ["朴軫永", "梁鉉錫", "李秀滿", "房時爀"],
        a: 0,
        note: "正確！JYP 是朴軫永 (Park Jin-young) 的縮寫",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 45,
        q: "MAMAMOO 的官方手燈造型是?",
        options: ["蘿蔔", "糖果", "皇冠", "炸彈"],
        a: 0,
        note: "正確！MAMAMOO 的手燈是蘿蔔造型 (Moo在韓文是蘿蔔)",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 46,
        q: "韓劇《黑暗榮耀》女主角是?",
        options: ["宋慧喬", "金泰希", "全智賢", "孫藝真"],
        a: 0,
        note: "正確！宋慧喬飾演復仇女主角文同珢",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 47,
        q: "Super Junior 的洗腦神曲是?",
        options: ["Sorry Sorry", "Bonamana", "Mr. Simple", "以上皆是"],
        a: 3,
        note: "正確！這三首都是經典洗腦神曲",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 48,
        q: "哪個團體有「怪物新人」之稱?",
        options: ["ITZY", "BLACKPINK", "NewJeans", "以上皆是"],
        a: 3,
        note: "正確！這些團體出道時都被稱為怪物新人",
        difficulty: 1,
        category: "韓國藝人"
    },
    {
        id: 49,
        q: "PSY 的成名曲是?",
        options: ["Gangnam Style", "Gentleman", "That That", "New Face"],
        a: 0,
        note: "正確！《Gangnam Style》讓 PSY 紅遍全球",
        difficulty: 0,
        category: "韓國藝人"
    },
    {
        id: 50,
        q: "李光洙在 Running Man 的綽號是?",
        options: ["長頸鹿", "老虎", "蚱蜢", "企鵝"],
        a: 0,
        note: "正確！因為身高很高，被稱為長頸鹿",
        difficulty: 0,
        category: "韓國藝人"
    },

    // ============ 🇯🇵 日本動漫 & 卡通 (30題) ============
    {
        id: 51,
        q: "魯夫吃了什麼果實?",
        options: ["橡膠果實", "燒燒果實", "震動果實", "黑暗果實"],
        a: 0,
        note: "正確！魯夫吃了橡膠果實 (人人果實尼卡型)",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 52,
        q: "哆啦A夢原本是什麼顏色?",
        options: ["黃色", "藍色", "紅色", "白色"],
        a: 0,
        note: "正確！哆啦A夢出廠時是黃色的，因為被老鼠咬掉耳朵哭到掉漆變藍色",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 53,
        q: "皮卡丘是什麼屬性?",
        options: ["電", "火", "水", "草"],
        a: 0,
        note: "正確！皮卡丘是電氣鼠",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 54,
        q: "《鬼滅之刃》主角叫什麼?",
        options: ["竈門炭治郎", "我妻善逸", "嘴平伊之助", "富岡義勇"],
        a: 0,
        note: "正確！主角是竈門炭治郎",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 55,
        q: "鳴人的體內封印著什麼?",
        options: ["九尾狐", "一尾", "八尾", "十尾"],
        a: 0,
        note: "正確！九尾妖狐九喇嘛被封印在鳴人體內",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 56,
        q: "《進擊的巨人》中，艾連變身成什麼巨人?",
        options: ["進擊的巨人", "鎧之巨人", "超大型巨人", "女巨人"],
        a: 0,
        note: "正確！艾連持有「進擊的巨人」和「始祖巨人」",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 57,
        q: "《名偵探柯南》中，柯南的真實身分是?",
        options: ["工藤新一", "服部平次", "怪盜基德", "白馬探"],
        a: 0,
        note: "正確！高中生偵探工藤新一被灌藥變小",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 58,
        q: "《灌籃高手》中，櫻木花道喜歡誰?",
        options: ["赤木晴子", "彩子", "流川楓", "安西教練"],
        a: 0,
        note: "正確！櫻木為了晴子才加入籃球隊",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 59,
        q: "《蠟筆小新》中，小新最討厭吃什麼?",
        options: ["青椒", "紅蘿蔔", "洋蔥", "納豆"],
        a: 0,
        note: "正確！小新極度討厭青椒",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 60,
        q: "宮崎駿電影《神隱少女》的主角是?",
        options: ["千尋", "蘇菲", "小梅", "琪琪"],
        a: 0,
        note: "正確！荻野千尋是神隱少女的主角",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 61,
        q: "《火影忍者》中，宇智波一族的血繼限界是?",
        options: ["寫輪眼", "白眼", "輪迴眼", "淨眼"],
        a: 0,
        note: "正確！宇智波一族擁有寫輪眼",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 62,
        q: "《SPY×FAMILY 間諜家家酒》中，安妮亞喜歡吃什麼?",
        options: ["花生", "胡蘿蔔", "布丁", "巧克力"],
        a: 0,
        note: "正確！安妮亞最喜歡花生",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 63,
        q: "《咒術迴戰》中，最強的咒術師是?",
        options: ["五條悟", "虎杖悠仁", "伏黑惠", "夏油傑"],
        a: 0,
        note: "正確！五條悟被公認為現代最強咒術師",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 64,
        q: "《排球少年》中，日向翔陽的目標是成為?",
        options: ["小巨人", "大王者", "王牌", "二傳手"],
        a: 0,
        note: "正確！日向想成為傳說中的「小巨人」",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 65,
        q: "《獵人》中，小傑的爸爸是?",
        options: ["金·富力士", "凱特", "庫洛洛", "西索"],
        a: 0,
        note: "正確！小傑冒險是為了尋找爸爸金",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 66,
        q: "《七龍珠》中，集齊幾顆龍珠可以召喚神龍?",
        options: ["7顆", "6顆", "5顆", "8顆"],
        a: 0,
        note: "正確！集齊7顆龍珠可以許願",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 67,
        q: "《櫻桃小丸子》最好的朋友是?",
        options: ["小玉", "美環", "花輪", "野口"],
        a: 0,
        note: "正確！小玉是小丸子最好的朋友",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 68,
        q: "《美少女戰士》中，月光仙子的口頭禪是?",
        options: ["我要代替月亮懲罰你", "真相只有一個", "成為海賊王", "燃燒吧小宇宙"],
        a: 0,
        note: "正確！經典台詞：我要代替月亮懲罰你！",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 69,
        q: "《神奇寶貝》中，喵喵會說話是因為?",
        options: ["為了追母喵喵學的", "天生就會", "火箭隊改造", "吃了翻譯果實"],
        a: 0,
        note: "正確！喵喵為了追求富家女喵喵瑪丹娜而努力學人話",
        difficulty: 2,
        category: "日本動漫"
    },
    {
        id: 70,
        q: "《一拳超人》主角琦玉變強的代價是?",
        options: ["變禿了", "變矮了", "變窮了", "變胖了"],
        a: 0,
        note: "正確！我變禿了，也變強了",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 71,
        q: "《我們這一家》的花媽是什麼造型?",
        options: ["半魚人頭", "爆炸頭", "馬尾", "光頭"],
        a: 0,
        note: "正確！花媽的頭型很像半魚人或竹輪",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 72,
        q: "《死神 BLEACH》主角黑崎一護的斬魄刀叫?",
        options: ["斬月", "冰輪丸", "千本櫻", "鏡花水月"],
        a: 0,
        note: "正確！一護的刀叫斬月",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 73,
        q: "宮崎駿電影《龍貓》中，龍貓只有誰看得到?",
        options: ["小孩", "老人", "男人", "女人"],
        a: 0,
        note: "正確！只有純真的小孩看得到龍貓",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 74,
        q: "《葬送的芙莉蓮》中，芙莉蓮是什麼種族?",
        options: ["精靈", "人類", "矮人", "魔族"],
        a: 0,
        note: "正確！芙莉蓮是長壽的精靈",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 75,
        q: "《銀魂》中，伊麗莎白裡面疑似是?",
        options: ["大叔", "美少女", "外星人", "機器人"],
        a: 0,
        note: "正確！裡面疑似是一個穿著玩偶裝的大叔(監督)",
        difficulty: 2,
        category: "日本動漫"
    },
    {
        id: 76,
        q: "《遊戲王》中，武藤遊戲的千年積木裡有誰的靈魂?",
        options: ["亞圖姆 (法老王)", "海馬瀨人", "城之內", "黑暗大法師"],
        a: 0,
        note: "正確！無名法老王亞圖姆的靈魂",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 77,
        q: "《網球王子》主角越前龍馬的絕招是?",
        options: ["外旋發球", "波動球", "燕回閃", "手塚區"],
        a: 0,
        note: "正確！外旋發球是龍馬的招牌",
        difficulty: 1,
        category: "日本動漫"
    },
    {
        id: 78,
        q: "《數碼寶貝》中，太一的搭檔是?",
        options: ["亞古獸", "加布獸", "巴達獸", "甲蟲獸"],
        a: 0,
        note: "正確！亞古獸是太一的搭檔",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 79,
        q: "《刀劍神域》中，桐人的二刀流招式是?",
        options: ["星爆氣流斬", "日輪刀", "萬解", "螺旋丸"],
        a: 0,
        note: "正確！C8763 星爆氣流斬！",
        difficulty: 0,
        category: "日本動漫"
    },
    {
        id: 80,
        q: "《吉伊卡哇》中，小八貓的朋友是?",
        options: ["吉伊卡哇 & 烏薩奇", "美樂蒂", "凱蒂貓", "庫洛米"],
        a: 0,
        note: "正確！吉伊卡哇、小八貓、烏薩奇是好朋友",
        difficulty: 1,
        category: "日本動漫"
    },

    // ============ 🌍 世界地理 & 旅遊 (30題) ============
    {
        id: 81,
        q: "法國的首都是?",
        options: ["巴黎", "倫敦", "柏林", "羅馬"],
        a: 0,
        note: "正確！巴黎是法國首都，又稱花都",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 82,
        q: "世界上最小的國家是?",
        options: ["梵蒂岡", "摩納哥", "新加坡", "馬爾地夫"],
        a: 0,
        note: "正確！梵蒂岡是世界最小的主權國家，位於羅馬市內",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 83,
        q: "袋鼠是哪個國家的代表動物?",
        options: ["澳洲", "美國", "非洲", "紐西蘭"],
        a: 0,
        note: "正確！澳洲被稱為袋鼠之國",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 84,
        q: "泰國的貨幣單位是?",
        options: ["泰銖", "盧比", "披索", "盾"],
        a: 0,
        note: "正確！泰銖(THB)是泰國貨幣",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 85,
        q: "「千島之國」指的是?",
        options: ["印尼", "菲律賓", "日本", "芬蘭"],
        a: 0,
        note: "正確！印尼擁有超過17000個島嶼",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 86,
        q: "自由女神像位於哪個城市?",
        options: ["紐約", "華盛頓", "洛杉磯", "費城"],
        a: 0,
        note: "正確！自由女神像位於紐約港",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 87,
        q: "比薩斜塔位於哪個國家?",
        options: ["義大利", "法國", "希臘", "西班牙"],
        a: 0,
        note: "正確！位於義大利比薩城",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 88,
        q: "哪個國家被稱為「楓葉國」?",
        options: ["加拿大", "美國", "日本", "挪威"],
        a: 0,
        note: "正確！加拿大國旗上有楓葉，盛產楓糖",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 89,
        q: "馬丘比丘是哪個古文明的遺跡?",
        options: ["印加文明", "馬雅文明", "阿茲特克", "埃及"],
        a: 0,
        note: "正確！馬丘比丘是祕魯的印加帝國遺跡",
        difficulty: 2,
        category: "地理"
    },
    {
        id: 90,
        q: "日本最高的山是?",
        options: ["富士山", "阿蘇山", "白山", "立山"],
        a: 0,
        note: "正確！富士山是日本聖山，高3776公尺",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 91,
        q: "「獅城」是指哪個國家?",
        options: ["新加坡", "馬來西亞", "斯里蘭卡", "香港"],
        a: 0,
        note: "正確！新加坡(Singapore)源自梵語，意為獅城",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 92,
        q: "埃及金字塔旁邊的雕像是?",
        options: ["獅身人面像", "法老像", "阿努比斯", "木乃伊"],
        a: 0,
        note: "正確！斯芬克斯(獅身人面像)守護著金字塔",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 93,
        q: "越南的首都是?",
        options: ["河內", "胡志明市", "峴港", "曼谷"],
        a: 0,
        note: "正確！河內是首都，胡志明市是最大城市",
        difficulty: 2,
        category: "地理"
    },
    {
        id: 94,
        q: "哪個城市被稱為「水都」?",
        options: ["威尼斯", "阿姆斯特丹", "曼谷", "蘇州"],
        a: 0,
        note: "正確！義大利威尼斯以運河聞名",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 95,
        q: "世界上最長的河流是?",
        options: ["尼羅河", "亞馬遜河", "長江", "密西西比河"],
        a: 0,
        note: "正確！尼羅河(6650km)略長於亞馬遜河",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 96,
        q: "哪裡被稱為「世界屋脊」?",
        options: ["青藏高原", "阿爾卑斯山", "落磯山脈", "安地斯山脈"],
        a: 0,
        note: "正確！青藏高原平均海拔4000米以上",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 97,
        q: "極光通常在哪裡看到?",
        options: ["高緯度地區", "赤道", "沙漠", "熱帶雨林"],
        a: 0,
        note: "正確！南北極圈附近的高緯度地區容易看到極光",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 98,
        q: "迪士尼樂園起源於哪個國家?",
        options: ["美國", "法國", "日本", "中國"],
        a: 0,
        note: "正確！第一個迪士尼樂園位於美國加州",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 99,
        q: "韓國的首爾以前叫什麼?",
        options: ["漢城", "京城", "平壤", "高麗"],
        a: 0,
        note: "正確！2005年正式改中文名為首爾，以前叫漢城",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 100,
        q: "倫敦塔橋橫跨哪條河?",
        options: ["泰晤士河", "塞納河", "多瑙河", "萊茵河"],
        a: 0,
        note: "正確！橫跨倫敦的泰晤士河",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 101,
        q: "荷蘭以什麼花聞名?",
        options: ["鬱金香", "玫瑰", "櫻花", "向日葵"],
        a: 0,
        note: "正確！荷蘭被稱為鬱金香王國",
        difficulty: 0,
        category: "地理"
    },
    {
        id: 102,
        q: "世界上人口最多的國家是(2023年後)?",
        options: ["印度", "中國", "美國", "印尼"],
        a: 0,
        note: "正確！印度人口已超越中國成為世界第一",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 103,
        q: "西班牙著名的舞蹈是?",
        options: ["佛朗明哥", "探戈", "森巴", "華爾滋"],
        a: 0,
        note: "正確！佛朗明哥(Flamenco)源自西班牙南部",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 104,
        q: "香港的回歸年份是?",
        options: ["1997年", "1999年", "2000年", "1990年"],
        a: 0,
        note: "正確！香港於1997年7月1日回歸",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 105,
        q: "哪裡有「萬塔之國」之稱?",
        options: ["緬甸", "泰國", "柬埔寨", "寮國"],
        a: 0,
        note: "正確！緬甸擁有大量佛塔，尤以蒲甘最著名",
        difficulty: 2,
        category: "地理"
    },
    {
        id: 106,
        q: "聖誕老人的故鄉通常被認為是?",
        options: ["芬蘭", "挪威", "瑞典", "冰島"],
        a: 0,
        note: "正確！芬蘭羅瓦涅米有聖誕老人村",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 107,
        q: "哈利波特的9¾月台在哪個車站?",
        options: ["國王十字車站", "維多利亞車站", "滑鐵盧車站", "派丁頓車站"],
        a: 0,
        note: "正確！位於倫敦國王十字車站",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 108,
        q: "世界上使用人數最多的語言是(母語)?",
        options: ["中文", "英文", "西班牙文", "阿拉伯文"],
        a: 0,
        note: "正確！若論母語人數，中文最多",
        difficulty: 1,
        category: "地理"
    },
    {
        id: 109,
        q: "愛琴海位於哪兩個國家之間?",
        options: ["希臘 & 土耳其", "義大利 & 法國", "英國 & 法國", "西班牙 & 摩洛哥"],
        a: 0,
        note: "正確！位於希臘半島和安納托利亞半島(土耳其)之間",
        difficulty: 2,
        category: "地理"
    },
    {
        id: 110,
        q: "泰姬瑪哈陵位於?",
        options: ["印度", "泰國", "巴基斯坦", "尼泊爾"],
        a: 0,
        note: "正確！位於印度阿格拉，是蒙兀兒皇帝為愛妻所建",
        difficulty: 0,
        category: "地理"
    },

    // ============ 💡 生活 & 常識 (50題) ============
    {
        id: 111,
        q: "蜜蜂採花釀的是?",
        options: ["蜂蜜", "花粉", "蜂蠟", "糖漿"],
        a: 0,
        note: "正確！蜜蜂採集花蜜釀成蜂蜜",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 112,
        q: "感冒時應該多喝?",
        options: ["溫開水", "可樂", "咖啡", "酒"],
        a: 0,
        note: "正確！多喝溫開水有助於代謝",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 113,
        q: "紅燈代表什麼?",
        options: ["停止", "通行", "加速", "左轉"],
        a: 0,
        note: "正確！紅燈停，綠燈行",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 114,
        q: "一年有幾個季節?",
        options: ["4個", "3個", "2個", "6個"],
        a: 0,
        note: "正確！春夏秋冬四季",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 115,
        q: "企鵝生活在哪裡?",
        options: ["南極", "北極", "赤道", "沙漠"],
        a: 0,
        note: "正確！企鵝主要分佈在南半球，南極為主",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 116,
        q: "我們呼吸需要什麼氣體?",
        options: ["氧氣", "二氧化碳", "氮氣", "氦氣"],
        a: 0,
        note: "正確！人類呼吸需要氧氣",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 117,
        q: "手機沒電要用什麼?",
        options: ["充電器", "遙控器", "耳機", "滑鼠"],
        a: 0,
        note: "正確！用充電器充電",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 118,
        q: "下列哪個是水果?",
        options: ["蘋果", "白菜", "蘿蔔", "花椰菜"],
        a: 0,
        note: "正確！蘋果是水果",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 119,
        q: "一天有幾小時?",
        options: ["24", "12", "48", "60"],
        a: 0,
        note: "正確！一天24小時",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 120,
        q: "冰塊融化會變成?",
        options: ["水", "氣", "雪", "冰雹"],
        a: 0,
        note: "正確！冰融化成水",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 121,
        q: "近視眼要戴?",
        options: ["凹透鏡", "凸透鏡", "太陽鏡", "望遠鏡"],
        a: 0,
        note: "正確！凹透鏡矯正近視，凸透鏡矯正遠視",
        difficulty: 2,
        category: "生活"
    },
    {
        id: 122,
        q: "酒精濃度最高的酒是?",
        options: ["生命之水", "威士忌", "高粱", "啤酒"],
        a: 0,
        note: "正確！波蘭生命之水伏特加可達96%",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 123,
        q: "下列哪個不能微波?",
        options: ["金屬碗", "陶瓷碗", "玻璃碗", "耐熱塑膠"],
        a: 0,
        note: "正確！金屬會反射微波產生火花，很危險",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 124,
        q: "貓咪的鬍鬚是用來?",
        options: ["測量寬度", "裝飾", "吸引異性", "攻擊"],
        a: 0,
        note: "正確！鬍鬚可以幫助貓咪判斷通道寬度",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 125,
        q: "斑馬線的作用是?",
        options: ["供行人穿越", "裝飾馬路", "給車停", "畫畫"],
        a: 0,
        note: "正確！行人穿越道",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 126,
        q: "端午節要吃什麼?",
        options: ["粽子", "月餅", "湯圓", "年糕"],
        a: 0,
        note: "正確！端午節吃粽子、划龍舟",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 127,
        q: "中秋節要吃什麼?",
        options: ["月餅", "粽子", "元宵", "巧克力"],
        a: 0,
        note: "正確！中秋節賞月吃月餅",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 128,
        q: "哪種血型的人最多(全球)?",
        options: ["O型", "AB型", "RH陰性", "B型"],
        a: 0,
        note: "正確！O型和A型是全球最常見的血型",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 129,
        q: "發燒時體溫通常超過?",
        options: ["37.5°C", "35°C", "36°C", "100°C"],
        a: 0,
        note: "正確！超過37.5°C-38°C通常被視為發燒",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 130,
        q: "急救電話是?",
        options: ["119", "110", "104", "123"],
        a: 0,
        note: "正確！台灣急救/火警是119，報警是110",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 131,
        q: "彩虹有幾種顏色?",
        options: ["7種", "5種", "3種", "10種"],
        a: 0,
        note: "正確！紅橙黃綠藍靛紫",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 132,
        q: "世界上最大的鳥是?",
        options: ["鴕鳥", "老鷹", "企鵝", "孔雀"],
        a: 0,
        note: "正確！鴕鳥是現存最大的鳥，但不會飛",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 133,
        q: "哪個星座是第一宮?",
        options: ["牡羊座", "雙魚座", "獅子座", "天蠍座"],
        a: 0,
        note: "正確！牡羊座是黃道十二宮的第一宮",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 134,
        q: "下列哪個是發酵食品?",
        options: ["優格", "鮮奶", "豆腐", "白飯"],
        a: 0,
        note: "正確！優格是牛奶發酵製成",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 135,
        q: "咖啡因含量最高的是?",
        options: ["濃縮咖啡", "可樂", "綠茶", "白開水"],
        a: 0,
        note: "正確！濃縮咖啡咖啡因濃度最高",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 136,
        q: "誰發明了電燈泡(改良者)?",
        options: ["愛迪生", "特斯拉", "牛頓", "愛因斯坦"],
        a: 0,
        note: "正確！愛迪生改良了燈泡並商業化",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 137,
        q: "奧運幾年舉辦一次?",
        options: ["4年", "2年", "3年", "5年"],
        a: 0,
        note: "正確！夏季奧運每4年一次",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 138,
        q: "下列哪個導電性最好?",
        options: ["銀", "銅", "金", "鐵"],
        a: 0,
        note: "正確！銀的導電性最好，但銅比較便宜所以常用",
        difficulty: 2,
        category: "生活"
    },
    {
        id: 139,
        q: "豆腐是用什麼做的?",
        options: ["黃豆", "綠豆", "紅豆", "黑豆"],
        a: 0,
        note: "正確！豆腐由黃豆製成",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 140,
        q: "維生素C最多的水果?",
        options: ["芭樂", "檸檬", "蘋果", "香蕉"],
        a: 0,
        note: "正確！芭樂(番石榴)維生素C含量比檸檬還高",
        difficulty: 2,
        category: "生活"
    },
    {
        id: 141,
        q: "哪種運動被稱為「國球」?",
        options: ["棒球", "籃球", "足球", "桌球"],
        a: 0,
        note: "正確！棒球在台灣被稱為國球",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 142,
        q: "太陽從哪邊升起?",
        options: ["東邊", "西邊", "南邊", "北邊"],
        a: 0,
        note: "正確！太陽東升西落",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 143,
        q: "下列哪個不是哺乳動物?",
        options: ["鯊魚", "鯨魚", "海豚", "蝙蝠"],
        a: 0,
        note: "正確！鯊魚是魚類，其他都是哺乳類",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 144,
        q: "哪種茶是半發酵茶?",
        options: ["烏龍茶", "綠茶", "紅茶", "普洱茶"],
        a: 0,
        note: "正確！綠茶不發酵，紅茶全發酵，烏龍茶半發酵",
        difficulty: 2,
        category: "生活"
    },
    {
        id: 145,
        q: "NBA 是什麼運動?",
        options: ["籃球", "棒球", "足球", "美式足球"],
        a: 0,
        note: "正確！美國職業籃球聯賽",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 146,
        q: "YouTube 是哪家公司的?",
        options: ["Google", "Facebook", "Apple", "Amazon"],
        a: 0,
        note: "正確！Google 於2006年收購 YouTube",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 147,
        q: "iPhone 是哪家公司的產品?",
        options: ["Apple", "Samsung", "Sony", "Nokia"],
        a: 0,
        note: "正確！蘋果公司產品",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 148,
        q: "哪種顏色吸熱最快?",
        options: ["黑色", "白色", "紅色", "黃色"],
        a: 0,
        note: "正確！黑色吸收所有光線，吸熱最快",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 149,
        q: "下列哪個不是五大洲?",
        options: ["北極洲", "亞洲", "歐洲", "非洲"],
        a: 0,
        note: "正確！北極不是洲，是海",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 150,
        q: "世界上最大的沙漠?",
        options: ["撒哈拉沙漠", "戈壁沙漠", "南極", "北極"],
        a: 2,
        note: "正確！南極洲被歸類為冷沙漠，是世界上最大的沙漠",
        difficulty: 2,
        category: "生活"
    },
    {
        id: 151,
        q: "WiFi 是什麼?",
        options: ["無線網路", "有線網路", "藍牙", "衛星"],
        a: 0,
        note: "正確！Wireless Fidelity",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 152,
        q: "QR Code 是什麼圖形?",
        options: ["二維碼", "條碼", "圓碼", "亂碼"],
        a: 0,
        note: "正確！Quick Response Code，二維條碼",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 153,
        q: "下列哪個不能回收?",
        options: ["衛生紙", "寶特瓶", "紙箱", "鐵罐"],
        a: 0,
        note: "正確！用過的衛生紙是垃圾，不能回收",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 154,
        q: "一年中最短的月份是?",
        options: ["2月", "4月", "6月", "9月"],
        a: 0,
        note: "正確！2月只有28或29天",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 155,
        q: "水的沸點是?",
        options: ["100°C", "90°C", "80°C", "120°C"],
        a: 0,
        note: "正確！在標準大氣壓下是100°C",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 156,
        q: "人體有多少塊骨頭(成人)?",
        options: ["206", "300", "100", "500"],
        a: 0,
        note: "正確！成人有206塊骨頭",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 157,
        q: "誰發現了地心引力?",
        options: ["牛頓", "愛迪生", "愛因斯坦", "達爾文"],
        a: 0,
        note: "正確！牛頓被蘋果砸到(傳說)發現萬有引力",
        difficulty: 0,
        category: "生活"
    },
    {
        id: 158,
        q: "鑽石是由什麼元素組成的?",
        options: ["碳", "金", "銀", "水晶"],
        a: 0,
        note: "正確！鑽石是純碳結晶",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 159,
        q: "哪個星球被稱為紅星球?",
        options: ["火星", "金星", "木星", "土星"],
        a: 0,
        note: "正確！火星因表面氧化鐵呈現紅色",
        difficulty: 1,
        category: "生活"
    },
    {
        id: 160,
        q: "電腦的大腦是?",
        options: ["CPU", "GPU", "RAM", "SSD"],
        a: 0,
        note: "正確！CPU (中央處理器) 是電腦的大腦",
        difficulty: 1,
        category: "生活"
    },

    // ============ 🧠 腦筋急轉彎 (40題) ============
    {
        id: 161,
        q: "什麼東西越洗越髒?",
        options: ["水", "衣服", "手", "臉"],
        a: 0,
        note: "答對！水洗東西後，水自己變髒了",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 162,
        q: "什麼東西早晨四條腿，中午兩條腿，晚上三條腿?",
        options: ["人", "狗", "貓", "桌子"],
        a: 0,
        note: "答對！斯芬克斯之謎：嬰兒爬行(4)、成人走路(2)、老人拄拐杖(3)",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 163,
        q: "什麼東西屬於你，但別人用得比你多?",
        options: ["名字", "錢", "手機", "牙刷"],
        a: 0,
        note: "答對！別人叫你的名字比你自己叫得多",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 164,
        q: "什麼車不能開?",
        options: ["風車", "跑車", "貨車", "公車"],
        a: 0,
        note: "答對！風車是建築，不能開",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 165,
        q: "什麼東西打破了大家反而很開心?",
        options: ["紀錄", "花瓶", "窗戶", "鏡子"],
        a: 0,
        note: "答對！打破世界紀錄",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 166,
        q: "什麼人始終不敢洗澡?",
        options: ["泥人", "懶人", "老人", "小孩"],
        a: 0,
        note: "答對！泥人一洗就化了",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 167,
        q: "什麼布剪不斷?",
        options: ["瀑布", "棉布", "麻布", "桌布"],
        a: 0,
        note: "答對！瀑布",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 168,
        q: "什麼東西有頭沒有腳，有尾巴沒有毛?",
        options: ["蛇", "魚", "龍", "馬"],
        a: 0,
        note: "答對！蛇",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 169,
        q: "什麼路不能走?",
        options: ["網路", "馬路", "山路", "水路"],
        a: 0,
        note: "答對！網路是用來上的，不是走的",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 170,
        q: "什麼書買不到?",
        options: ["遺書", "教科書", "漫畫書", "秘書"],
        a: 0,
        note: "答對！遺書是自己寫的",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 171,
        q: "太平洋的中間是什麼?",
        options: ["平", "水", "島", "魚"],
        a: 0,
        note: "答對！太平洋三個字的中間是「平」字",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 172,
        q: "什麼瓜不能吃?",
        options: ["傻瓜", "西瓜", "南瓜", "冬瓜"],
        a: 0,
        note: "答對！傻瓜是人",
        difficulty: 0,
        category: "腦筋急轉彎"
    },
    {
        id: 173,
        q: "什麼東西晚上才會長出尾巴?",
        options: ["流星", "貓", "狗", "猴子"],
        a: 0,
        note: "答對！流星(像尾巴)",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 174,
        q: "什麼東西越熱越愛出來?",
        options: ["汗", "蚊子", "蒼蠅", "老鼠"],
        a: 0,
        note: "答對！流汗",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 175,
        q: "什麼東西越生氣越大?",
        options: ["脾氣", "氣球", "肚子", "眼睛"],
        a: 0,
        note: "答對！脾氣",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 176,
        q: "哪個月有28天?",
        options: ["每個月", "2月", "1月", "12月"],
        a: 0,
        note: "答對！每個月都有28天(至少)",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 177,
        q: "什麼海沒有水?",
        options: ["地中海", "辭海", "紅海", "死海"],
        a: 1,
        note: "答對！辭海是書",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 178,
        q: "孔子是哪國人?",
        options: ["魯國", "中國", "美國", "韓國"],
        a: 0,
        note: "答對！春秋時期的魯國人",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 179,
        q: "什麼東西只能用左手拿?",
        options: ["右手", "左手", "筷子", "碗"],
        a: 0,
        note: "答對！你的右手只能被左手拿(握)",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 180,
        q: "什麼門不能開?",
        options: ["球門", "鐵門", "木門", "心門"],
        a: 0,
        note: "答對！足球的球門",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 181,
        q: "什麼東西往上升後永遠掉不下來?",
        options: ["年齡", "氣球", "飛機", "雨"],
        a: 0,
        note: "答對！年齡只會增加",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 182,
        q: "什麼蛋不能吃?",
        options: ["考試考鴨蛋", "雞蛋", "鴨蛋", "鵪鶉蛋"],
        a: 0,
        note: "答對！考0分(鴨蛋)",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 183,
        q: "最長的刀是什麼刀?",
        options: ["屠龍刀", "開山刀", "武士刀", "嘮叨"],
        a: 3,
        note: "答對！嘮叨(刀)沒完沒了",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 184,
        q: "什麼東西天氣越冷越愛脫衣服?",
        options: ["雪人", "人", "熊", "樹"],
        a: 0,
        note: "答對！雪人融化像脫衣服(或者人進屋脫外套)",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 185,
        q: "什麼東西不用腳也能走遍天下?",
        options: ["信/郵票", "船", "飛機", "蛇"],
        a: 0,
        note: "答對！信或郵票",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 186,
        q: "什麼人最喜歡添油加醋?",
        options: ["廚師", "老師", "司機", "醫生"],
        a: 0,
        note: "答對！廚師煮菜",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 187,
        q: "什麼東西有齒不能咬?",
        options: ["梳子", "狗", "老虎", "人"],
        a: 0,
        note: "答對！梳子有齒",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 188,
        q: "什麼床不能睡?",
        options: ["牙床", "木床", "彈簧床", "水床"],
        a: 0,
        note: "答對！牙床",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 189,
        q: "什麼人每天靠運氣賺錢?",
        options: ["運煤氣工人", "賭徒", "司機", "老闆"],
        a: 0,
        note: "答對！搬運煤氣的人",
        difficulty: 2,
        category: "腦筋急轉彎"
    },
    {
        id: 190,
        q: "什麼花沒葉子?",
        options: ["浪花", "玫瑰", "百合", "梅花"],
        a: 0,
        note: "答對！海浪的浪花",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 191,
        q: "什麼袋子裡面沒有東西?",
        options: ["眼袋", "口袋", "塑膠袋", "布袋"],
        a: 0,
        note: "答對！眼袋",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 192,
        q: "哪種比賽贏的人往後退?",
        options: ["拔河", "賽跑", "游泳", "跳遠"],
        a: 0,
        note: "答對！拔河比賽",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 193,
        q: "什麼東西打破了可以吃?",
        options: ["雞蛋", "玻璃", "盤子", "碗"],
        a: 0,
        note: "答對！雞蛋打破才能吃",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 194,
        q: "誰最怕淋雨?",
        options: ["紙人", "稻草人", "鐵人", "超人"],
        a: 0,
        note: "答對！紙人一淋就爛",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 195,
        q: "什麼馬不會跑?",
        options: ["木馬", "白馬", "黑馬", "斑馬"],
        a: 0,
        note: "答對！旋轉木馬",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 196,
        q: "什麼雞沒有翅膀?",
        options: ["田雞", "火雞", "烏骨雞", "土雞"],
        a: 0,
        note: "答對！田雞是青蛙",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 197,
        q: "什麼老鼠會飛?",
        options: ["蝙蝠", "袋鼠", "松鼠", "米老鼠"],
        a: 0,
        note: "答對！蝙蝠(別名鹽老鼠/飛鼠)",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 198,
        q: "什麼帽子不能戴?",
        options: ["螺絲帽", "草帽", "安全帽", "鴨舌帽"],
        a: 0,
        note: "答對！螺絲帽",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 199,
        q: "什麼球不能踢?",
        options: ["眼球", "足球", "籃球", "皮球"],
        a: 0,
        note: "答對！眼球",
        difficulty: 1,
        category: "腦筋急轉彎"
    },
    {
        id: 200,
        q: "什麼東西有風不動無風動?",
        options: ["扇子", "樹", "草", "旗子"],
        a: 0,
        note: "答對！扇子(沒風時才拿來搧)",
        difficulty: 2,
        category: "腦筋急轉彎"
    }
];
