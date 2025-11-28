let triviaDB = [
    // ============ 演艺圈 & 艺人 (20题) ============
    {
        id: 1,
        q: "Taylor Swift 最新专辑《Midnights》发行于哪一年?",
        options: ["2021年", "2022年", "2023年", "2024年"],
        a: 1,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 2,
        q: "BTS 防弹少年团的中文名是?",
        options: ["少年团", "防御少年团", "防弹组合", "以上都不对"],
        a: 0,
        difficulty: 0,
        category: "演艺圈"
    },
    {
        id: 3,
        q: "周杰伦的第一张专辑叫什么名字?",
        options: ["说好不哭", "范特西", "叶惠美", "十一月的萧邦"],
        a: 1,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 4,
        q: "Lady Gaga 真名是?",
        options: ["Stefani Germanotta", "Jennifer Lopez", "Ariana Grande", "Dua Lipa"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 5,
        q: "《权力的游戏》中谁坐在铁王座上最久?",
        options: ["丹妮莉丝", "琼恩·雪诺", "瑟曦", "劳勃·拜拉席恩"],
        a: 0,
        difficulty: 2,
        category: "演艺圈"
    },
    {
        id: 6,
        q: "迪丽热巴是哪部电视剧出名的?",
        options: ["三生三世十里桃花", "一人之下", "古剑奇谭", "长月烛心"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 7,
        q: "张家辉的代表作是哪部电影?",
        options: ["古惑仔", "黑社会", "保险起见", "所有都是"],
        a: 3,
        difficulty: 2,
        category: "演艺圈"
    },
    {
        id: 8,
        q: "The Weeknd 的真名是?",
        options: ["Abel Tesfaye", "Oscar Issac", "Michael Jackson", "The Weeknd"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 9,
        q: "韩国女团 BLACKPINK 有几个成员?",
        options: ["3个", "4个", "5个", "6个"],
        a: 1,
        difficulty: 0,
        category: "演艺圈"
    },
    {
        id: 10,
        q: "刘德华是香港演员中的什么称号?",
        options: ["四大天王", "三大歌王", "天王级明星", "电影皇帝"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 11,
        q: "《流浪地球》的导演是谁?",
        options: ["张艺谋", "陈凯歌", "郭帆", "滕华涛"],
        a: 2,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 12,
        q: "Billie Eilish 以什么风格出名?",
        options: ["摇滚", "说唱", "低音幽暗流行", "电子"],
        a: 2,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 13,
        q: "胡歌主演的古装剧《琅琊榜》中饰演的是?",
        options: ["宸王", "梅长苏", "言侯", "北王"],
        a: 1,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 14,
        q: "《寄生虫》获得奥斯卡最佳影片奖是哪一年?",
        options: ["2018年", "2019年", "2020年", "2021年"],
        a: 2,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 15,
        q: "王菲和谢霆锋合唱的歌曲是?",
        options: ["菲常完美", "共同歌", "一起飞翔", "以上都不对"],
        a: 0,
        difficulty: 2,
        category: "演艺圈"
    },
    {
        id: 16,
        q: "陈思诚导演的《唐人街探案》系列有几部?",
        options: ["2部", "3部", "4部", "5部"],
        a: 1,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 17,
        q: "The Avengers(复仇者联盟)第一部上映于哪一年?",
        options: ["2010年", "2011年", "2012年", "2013年"],
        a: 2,
        difficulty: 0,
        category: "演艺圈"
    },
    {
        id: 18,
        q: "金球奖由哪个组织颁发?",
        options: ["美国电影学院", "好莱坞外国记者协会", "美国演员工会", "美国导演工会"],
        a: 1,
        difficulty: 2,
        category: "演艺圈"
    },
    {
        id: 19,
        q: "李现因为哪部电视剧成名?",
        options: ["亲爱的热爱的", "全职高手", "传闻中的陈芊芊", "侍神令"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },
    {
        id: 20,
        q: "Madonna 被称为?",
        options: ["流行女皇", "摇滚女神", "民族歌手", "爵士天后"],
        a: 0,
        difficulty: 1,
        category: "演艺圈"
    },

    // ============ 当前时事 (20题) ============
    {
        id: 21,
        q: "2024年巴黎奥运会举办了多少天?",
        options: ["16天", "17天", "18天", "19天"],
        a: 1,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 22,
        q: "国际空间站(ISS)是哪些国家合作建造的?",
        options: ["美国和俄罗斯", "美国、俄罗斯和欧洲", "全球15+国家", "仅美国"],
        a: 2,
        difficulty: 2,
        category: "时事"
    },
    {
        id: 23,
        q: "ChatGPT 由哪家公司开发?",
        options: ["Google", "OpenAI", "Meta", "Microsoft"],
        a: 1,
        difficulty: 0,
        category: "时事"
    },
    {
        id: 24,
        q: "联合国有多少个成员国?",
        options: ["193个", "195个", "200个", "210个"],
        a: 0,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 25,
        q: "2024年最新全球首富是谁?",
        options: ["埃隆·马斯克", "杰夫·贝索斯", "伯纳德·阿诺特", "比尔·盖茨"],
        a: 2,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 26,
        q: "气候变化协议《巴黎协定》的目标是什么?",
        options: ["停止全球变暖", "控制全球升温在2°C以内", "恢复冰川", "降低二氧化碳到0"],
        a: 1,
        difficulty: 2,
        category: "时事"
    },
    {
        id: 27,
        q: "世界卫生组织(WHO)的总部在哪里?",
        options: ["日内瓦", "纽约", "北京", "伦敦"],
        a: 0,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 28,
        q: "SpaceX 最著名的项目是什么?",
        options: ["火箭回收技术", "星链卫星网络", "猎鹰火箭", "以上都对"],
        a: 3,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 29,
        q: "比特币是由谁或哪个团队创建的?",
        options: ["中本聪(真实身份未知)", "埃隆·马斯克", "比尔·盖茨", "已公开身份"],
        a: 0,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 30,
        q: "联合国安理会有多少个常任理事国?",
        options: ["3个", "5个", "7个", "10个"],
        a: 1,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 31,
        q: "欧盟有多少个成员国?",
        options: ["25个", "27个", "30个", "32个"],
        a: 1,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 32,
        q: "2024年哪个国家举办了冬季奥运会?",
        options: ["中国", "意大利", "瑞典", "日本"],
        a: 1,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 33,
        q: "诺贝尔奖最多的是哪个奖项?",
        options: ["物理学奖", "化学奖", "生理学或医学奖", "都差不多"],
        a: 0,
        difficulty: 2,
        category: "时事"
    },
    {
        id: 34,
        q: "全球最大的碳排放国是?",
        options: ["美国", "中国", "印度", "俄罗斯"],
        a: 1,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 35,
        q: "人工智能技术的发展最快的领域是?",
        options: ["计算机视觉", "自然语言处理", "机器学习", "都很快"],
        a: 3,
        difficulty: 2,
        category: "时事"
    },
    {
        id: 36,
        q: "5G网络比4G快多少倍?",
        options: ["10倍", "50倍", "100倍", "1000倍"],
        a: 2,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 37,
        q: "世界上第一个人工智能公民是哪个机器人?",
        options: ["索菲亚", "波士顿动力狗", "阿尔法狗", "Siri"],
        a: 0,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 38,
        q: "联合国2030年可持续发展目标有多少个?",
        options: ["10个", "15个", "17个", "20个"],
        a: 2,
        difficulty: 2,
        category: "时事"
    },
    {
        id: 39,
        q: "全球互联网用户数量大约是多少?",
        options: ["20亿", "40亿", "60亿", "80亿"],
        a: 2,
        difficulty: 1,
        category: "时事"
    },
    {
        id: 40,
        q: "MetaVerse(元宇宙)的概念最早由谁提出?",
        options: ["马克·扎克伯格", "尼尔·史蒂文森", "蒂姆·斯威尼", "萨蒂亚·纳德拉"],
        a: 1,
        difficulty: 2,
        category: "时事"
    },

    // ============ 物理 (20题) ============
    {
        id: 41,
        q: "光速大约是多少?",
        options: ["150,000 km/s", "200,000 km/s", "300,000 km/s", "400,000 km/s"],
        a: 2,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 42,
        q: "万有引力定律的发现者是?",
        options: ["爱因斯坦", "牛顿", "伽利略", "开普勒"],
        a: 1,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 43,
        q: "相对论是由谁提出的?",
        options: ["牛顿", "爱因斯坦", "普朗克", "玻尔"],
        a: 1,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 44,
        q: "能量守恒定律说的是?",
        options: ["能量会消失", "能量可以创造", "能量只能转化不能消失", "能量不变"],
        a: 2,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 45,
        q: "声速在常温空气中大约是?",
        options: ["300 m/s", "340 m/s", "500 m/s", "1000 m/s"],
        a: 1,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 46,
        q: "原子由什么组成?",
        options: ["质子和电子", "质子、中子和电子", "中子和电子", "仅质子"],
        a: 1,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 47,
        q: "电流的单位是?",
        options: ["瓦特", "欧姆", "安培", "伏特"],
        a: 2,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 48,
        q: "磁铁的南极会吸引北极的什么?",
        options: ["任何金属", "铁和镍", "只有北极", "所有磁铁"],
        a: 1,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 49,
        q: "加速度的单位是?",
        options: ["米/秒", "米/秒²", "千克", "牛顿"],
        a: 1,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 50,
        q: "黑洞是什么?",
        options: ["时空中密度无限大的区域", "星系的中心", "一种星体", "虚构的东西"],
        a: 0,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 51,
        q: "量子纠缠是什么?",
        options: ["两个粒子的状态相关联", "粒子移动变慢", "光的反射", "声波干涉"],
        a: 0,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 52,
        q: "玻璃是什么物质?",
        options: ["晶体", "非晶体", "金属", "液体"],
        a: 1,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 53,
        q: "重力加速度在地球表面约是?",
        options: ["5 m/s²", "10 m/s²", "9.8 m/s²", "20 m/s²"],
        a: 2,
        difficulty: 0,
        category: "物理"
    },
    {
        id: 54,
        q: "光是什么?",
        options: ["只是波", "只是粒子", "波粒二象性", "一种能量"],
        a: 2,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 55,
        q: "核裂变释放的能量来自?",
        options: ["化学反应", "热能", "质量转换为能量", "光反应"],
        a: 2,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 56,
        q: "热力学第一定律说的是?",
        options: ["热总是从高到低", "能量守恒", "熵总是增加", "温度不变"],
        a: 1,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 57,
        q: "弦理论认为宇宙有几个维度?",
        options: ["3维", "4维", "10维", "11维"],
        a: 3,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 58,
        q: "超导体的特点是?",
        options: ["导电能力强", "电阻为0", "永远保持冷", "反射磁场"],
        a: 1,
        difficulty: 2,
        category: "物理"
    },
    {
        id: 59,
        q: "波长和频率的关系是?",
        options: ["正相关", "反相关", "无关", "都可能"],
        a: 1,
        difficulty: 1,
        category: "物理"
    },
    {
        id: 60,
        q: "宇宙的年龄大约是?",
        options: ["50亿年", "100亿年", "137亿年", "200亿年"],
        a: 2,
        difficulty: 1,
        category: "物理"
    },

    // ============ 化学 (20题) ============
    {
        id: 61,
        q: "水的化学式是?",
        options: ["H₂O", "HO", "H₂O₂", "OH"],
        a: 0,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 62,
        q: "氯气的颜色是?",
        options: ["无色", "黄绿色", "红棕色", "紫色"],
        a: 1,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 63,
        q: "周期表中有多少种元素?",
        options: ["92种", "109种", "118种", "120种"],
        a: 2,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 64,
        q: "酸性最强的是?",
        options: ["盐酸", "硫酸", "硝酸", "醋酸"],
        a: 1,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 65,
        q: "氧化还原反应中失去电子的是?",
        options: ["被氧化", "被还原", "被氯化", "无关"],
        a: 0,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 66,
        q: "燃烧需要的三个条件是?",
        options: ["热、光、声", "热、空气、燃料", "光、热、水", "氧气、温度、燃料"],
        a: 3,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 67,
        q: "最轻的元素是?",
        options: ["氦", "氢", "锂", "碳"],
        a: 1,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 68,
        q: "玻璃的主要成分是?",
        options: ["二氧化硅", "氧化铝", "氧化钙", "碳酸钙"],
        a: 0,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 69,
        q: "铁生锈的化学式是?",
        options: ["Fe₂O₃", "FeO", "Fe₃O₄", "都可能"],
        a: 3,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 70,
        q: "金属镁燃烧发出什么光?",
        options: ["红光", "绿光", "白光", "蓝光"],
        a: 2,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 71,
        q: "酸碱中和反应生成?",
        options: ["水和气体", "水和盐", "盐和气体", "只有水"],
        a: 1,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 72,
        q: "pH值多少表示中性?",
        options: ["0", "5", "7", "10"],
        a: 2,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 73,
        q: "原子核由什么组成?",
        options: ["质子和电子", "质子和中子", "中子和电子", "只有质子"],
        a: 1,
        difficulty: 0,
        category: "化学"
    },
    {
        id: 74,
        q: "同位素是什么?",
        options: ["质子数相同的原子", "中子数相同的原子", "质子数不同但中子数相同", "都不对"],
        a: 0,
        difficulty: 2,
        category: "化学"
    },
    {
        id: 75,
        q: "有机物必含什么元素?",
        options: ["碳", "氢", "氧", "碳和氢"],
        a: 3,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 76,
        q: "催化剂的作用是?",
        options: ["加快反应速度", "改变反应方向", "增加产率", "降低温度"],
        a: 0,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 77,
        q: "钻石和石墨是什么?",
        options: ["不同元素", "碳的同素体", "不同化合物", "金属"],
        a: 1,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 78,
        q: "血红蛋白含有什么离子?",
        options: ["钙离子", "铁离子", "锌离子", "镁离子"],
        a: 1,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 79,
        q: "甲烷的分子式是?",
        options: ["CH₂", "CH₄", "C₂H₆", "C₃H₈"],
        a: 1,
        difficulty: 1,
        category: "化学"
    },
    {
        id: 80,
        q: "聚乙烯由什么单体聚合而来?",
        options: ["乙烷", "乙烯", "乙炔", "苯"],
        a: 1,
        difficulty: 2,
        category: "化学"
    },

    // ============ 数学 (20题) ============
    {
        id: 81,
        q: "圆的面积公式是?",
        options: ["πr", "2πr", "πr²", "2πr²"],
        a: 2,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 82,
        q: "勾股定理是什么?",
        options: ["a+b=c", "a²+b²=c²", "ab=c", "a/b=c"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 83,
        q: "三角形内角和是?",
        options: ["90°", "180°", "270°", "360°"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 84,
        q: "1到100的和是?",
        options: ["4950", "5050", "5150", "5250"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 85,
        q: "π大约等于?",
        options: ["3.01", "3.14", "3.24", "3.44"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 86,
        q: "2的10次方是?",
        options: ["512", "1024", "2048", "4096"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 87,
        q: "质数有无穷多个吗?",
        options: ["不是", "是的", "有限个", "无法确定"],
        a: 1,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 88,
        q: "0.999...等于?",
        options: ["0.99", "0.999", "1", "小于1"],
        a: 2,
        difficulty: 2,
        category: "数学"
    },
    {
        id: 89,
        q: "黄金比例大约是?",
        options: ["1.5", "1.618", "2.0", "2.5"],
        a: 1,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 90,
        q: "斐波那契数列的特点是?",
        options: ["每项等于前两项之和", "公比固定", "每项翻倍", "无规律"],
        a: 0,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 91,
        q: "正方体有多少条边?",
        options: ["6", "8", "12", "24"],
        a: 2,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 92,
        q: "棱锥的体积公式是?",
        options: ["V=底面积×高", "V=1/3×底面积×高", "V=2×底面积×高", "V=底面积×高²"],
        a: 1,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 93,
        q: "对数的性质：log(a×b)=?",
        options: ["loga+logb", "loga-logb", "loga×logb", "loga/logb"],
        a: 0,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 94,
        q: "欧拉公式中，e大约是?",
        options: ["2.71", "3.14", "1.61", "2.0"],
        a: 0,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 95,
        q: "概率的范围是?",
        options: ["0-1", "0-100", "-1-1", "任意数"],
        a: 0,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 96,
        q: "微积分由谁发明?",
        options: ["欧拉", "高斯", "牛顿和莱布尼兹", "拉格朗日"],
        a: 2,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 97,
        q: "集合论的创始人是?",
        options: ["康托尔", "布尔", "罗素", "哥德尔"],
        a: 0,
        difficulty: 1,
        category: "数学"
    },
    {
        id: 98,
        q: "直线方程y=mx+b中，m代表?",
        options: ["截距", "斜率", "长度", "角度"],
        a: 1,
        difficulty: 0,
        category: "数学"
    },
    {
        id: 99,
        q: "三个不同的平面最多有几个交点?",
        options: ["1个", "无穷多", "1条直线或0个", "都可能"],
        a: 3,
        difficulty: 2,
        category: "数学"
    },
    {
        id: 100,
        q: "四色定理说的是?",
        options: ["用4种颜色画图", "任何地图用4种颜色可着色", "只能用4种颜色", "有5种以上颜色"],
        a: 1,
        difficulty: 2,
        category: "数学"
    },

    // ============ 生物 (20题) ============
    {
        id: 101,
        q: "人体最大的器官是?",
        options: ["心脏", "肺", "皮肤", "肝脏"],
        a: 2,
        difficulty: 0,
        category: "生物"
    },
    {
        id: 102,
        q: "DNA由什么组成?",
        options: ["蛋白质", "脱氧核糖、磷酸和碱基", "葡萄糖和脂肪", "只有碳"],
        a: 1,
        difficulty: 0,
        category: "生物"
    },
    {
        id: 103,
        q: "植物进行光合作用的场所是?",
        options: ["根", "叶绿体", "线粒体", "细胞核"],
        a: 1,
        difficulty: 0,
        category: "生物"
    },
    {
        id: 104,
        q: "人类有多少对染色体?",
        options: ["22对", "23对", "24对", "25对"],
        a: 1,
        difficulty: 0,
        category: "生物"
    },
    {
        id: 105,
        q: "ATP主要功能是?",
        options: ["储存信息", "提供能量", "保护细胞", "运输物质"],
        a: 1,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 106,
        q: "哪种血型是万能供血者?",
        options: ["A型", "B型", "AB型", "O型"],
        a: 3,
        difficulty: 0,
        category: "生物"
    },
    {
        id: 107,
        q: "免疫细胞中最重要的是?",
        options: ["红血球", "白血球", "血小板", "血浆"],
        a: 1,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 108,
        q: "细胞核的主要功能是?",
        options: ["提供能量", "调节代谢", "控制遗传和代谢", "吸收营养"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 109,
        q: "我们的嗅觉由什么感受?",
        options: ["鼻腔内的嗅觉受体", "舌头", "脑", "耳朵"],
        a: 0,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 110,
        q: "神经系统由什么组成?",
        options: ["脑和脊髓", "脑、脊髓和周围神经", "只有脑", "只有脊髓"],
        a: 1,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 111,
        q: "自然选择的发现者是?",
        options: ["达尔文", "林奈", "拉马克", "门德尔"],
        a: 0,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 112,
        q: "基因突变可能导致?",
        options: ["只有坏结果", "只有好结果", "有利或有害", "无影响"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 113,
        q: "人体最强的肌肉是?",
        options: ["腿部肌肉", "臂力肌肉", "咀嚼肌", "心脏"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 114,
        q: "骨骼由什么物质组成?",
        options: ["钙", "蛋白质", "钙、磷和蛋白质", "只有胶原蛋白"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 115,
        q: "生态系统的最大成分是?",
        options: ["生产者", "消费者", "分解者", "非生物成分"],
        a: 3,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 116,
        q: "菌类主要靠什么繁殖?",
        options: ["有性繁殖", "孢子", "分裂", "只能无性繁殖"],
        a: 1,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 117,
        q: "植物根部吸收水分主要靠?",
        options: ["重力", "毛细作用", "渗透作用", "主动运输"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 118,
        q: "病毒必须在什么环境下存活?",
        options: ["土壤", "活的细胞", "空气", "水"],
        a: 1,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 119,
        q: "蛋白质由什么单位组成?",
        options: ["核苷酸", "脂肪酸", "氨基酸", "葡萄糖"],
        a: 2,
        difficulty: 1,
        category: "生物"
    },
    {
        id: 120,
        q: "CRISPR基因编辑技术可以?",
        options: ["治疗所有疾病", "精准编辑DNA", "完全安全", "已完全应用"],
        a: 1,
        difficulty: 2,
        category: "生物"
    },

    // ============ 地理 (20题) ============
    {
        id: 121,
        q: "世界最高的山峰是?",
        options: ["K2", "珠穆朗玛峰", "埃佛勒斯峰", "干城章嘉峰"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 122,
        q: "最大的海洋是?",
        options: ["大西洋", "印度洋", "北冰洋", "太平洋"],
        a: 3,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 123,
        q: "最长的河是?",
        options: ["亚马逊河", "尼罗河", "长江", "黄河"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 124,
        q: "赤道把地球分为?",
        options: ["东西半球", "南北半球", "三部分", "四部分"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 125,
        q: "北极点所在的大陆是?",
        options: ["北美洲", "欧洲", "不在大陆上", "亚洲"],
        a: 2,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 126,
        q: "非洲最大的国家是?",
        options: ["南非", "埃及", "阿尔及利亚", "苏丹"],
        a: 2,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 127,
        q: "澳洲最大的城市是?",
        options: ["墨尔本", "悉尼", "布里斯班", "珀斯"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 128,
        q: "巴西的首都是?",
        options: ["里约热内卢", "圣保罗", "巴西利亚", "萨尔瓦多"],
        a: 2,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 129,
        q: "死海位于?",
        options: ["以色列和约旦之间", "以色列和叙利亚之间", "约旦和伊拉克之间", "埃及和利比亚之间"],
        a: 0,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 130,
        q: "撒哈拉沙漠在哪个大陆?",
        options: ["亚洲", "非洲", "北美洲", "南美洲"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 131,
        q: "新西兰由多少个主要岛屿组成?",
        options: ["1个", "2个", "3个", "4个"],
        a: 1,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 132,
        q: "印度尼西亚有多少个岛屿?",
        options: ["约1000个", "约5000个", "约10000个", "约17000个"],
        a: 3,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 133,
        q: "大堡礁位于?",
        options: ["新西兰", "澳大利亚", "斐济", "巴布亚新几内亚"],
        a: 1,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 134,
        q: "瑞士的官方语言有多少种?",
        options: ["1种", "2种", "3种", "4种"],
        a: 3,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 135,
        q: "加拿大是世界第几大国家?",
        options: ["1", "2", "3", "4"],
        a: 1,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 136,
        q: "意大利的首都是?",
        options: ["威尼斯", "罗马", "米兰", "佛罗伦萨"],
        a: 1,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 137,
        q: "南极洲的气温最低可达?",
        options: ["-30°C", "-50°C", "-80°C", "-100°C"],
        a: 2,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 138,
        q: "刚果盆地是什么?",
        options: ["沙漠", "草原", "热带雨林", "山脉"],
        a: 2,
        difficulty: 1,
        category: "地理"
    },
    {
        id: 139,
        q: "喜马拉雅山脉位于?",
        options: ["南美洲", "非洲", "亚洲", "北美洲"],
        a: 2,
        difficulty: 0,
        category: "地理"
    },
    {
        id: 140,
        q: "巴拿马运河连接?",
        options: ["太平洋和印度洋", "大西洋和太平洋", "地中海和北海", "黑海和里海"],
        a: 1,
        difficulty: 1,
        category: "地理"
    },

    // ============ 历史 (20题) ============
    {
        id: 141,
        q: "古代四大文明中最古老的是?",
        options: ["古埃及", "古巴比伦", "古印度", "古中国"],
        a: 0,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 142,
        q: "文艺复兴起源于哪个国家?",
        options: ["法国", "意大利", "西班牙", "英国"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 143,
        q: "工业革命最早发生在?",
        options: ["法国", "美国", "英国", "德国"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 144,
        q: "法国大革命发生在哪一年?",
        options: ["1776年", "1789年", "1800年", "1815年"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 145,
        q: "美国独立战争结束于?",
        options: ["1776年", "1781年", "1783年", "1789年"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 146,
        q: "拿破仑最终被流放到?",
        options: ["厄尔巴岛", "圣赫勒拿岛", "科西嘉岛", "马耳他"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 147,
        q: "第一次世界大战发生于?",
        options: ["1910-1918", "1912-1920", "1914-1918", "1918-1926"],
        a: 2,
        difficulty: 0,
        category: "历史"
    },
    {
        id: 148,
        q: "第二次世界大战中谁是同盟国领导?",
        options: ["希特勒", "墨索里尼", "罗斯福、丘吉尔、斯大林", "山本五十六"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 149,
        q: "中国古代最后一个朝代是?",
        options: ["明朝", "清朝", "民国", "无"],
        a: 1,
        difficulty: 0,
        category: "历史"
    },
    {
        id: 150,
        q: "长城主要建于哪个朝代?",
        options: ["秦朝", "汉朝", "明朝", "都有"],
        a: 3,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 151,
        q: "丝绸之路最早由谁开辟?",
        options: ["秦始皇", "汉武帝", "唐太宗", "康熙帝"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 152,
        q: "古罗马帝国最著名的皇帝是?",
        options: ["奥古斯都", "尼禄", "图拉真", "都很著名"],
        a: 0,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 153,
        q: "十字军东征的目的是?",
        options: ["商业贸易", "收复圣地", "传播基督教", "掠夺财宝"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 154,
        q: "宗教改革的发起人是?",
        options: ["马丁·路德", "约翰·加尔文", "伊拉斯谟", "托马斯·莫尔"],
        a: 0,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 155,
        q: "启蒙运动发生于?",
        options: ["17世纪", "18世纪", "19世纪", "20世纪"],
        a: 1,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 156,
        q: "美国总统林肯被刺杀于?",
        options: ["1860年", "1863年", "1865年", "1867年"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 157,
        q: "泰坦尼克号沉没于?",
        options: ["1910年", "1911年", "1912年", "1913年"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 158,
        q: "俄国十月革命发生于?",
        options: ["1915年", "1916年", "1917年", "1918年"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 159,
        q: "莫吧克起义是?",
        options: ["印度独立运动", "美国独立战争", "法国大革命", "俄国十月革命"],
        a: 0,
        difficulty: 1,
        category: "历史"
    },
    {
        id: 160,
        q: "联合国成立于?",
        options: ["1942年", "1944年", "1945年", "1946年"],
        a: 2,
        difficulty: 1,
        category: "历史"
    },

    // ============ 脑筋急转弯 (20题) ============
    {
        id: 161,
        q: "什么东西越洗越脏?",
        options: ["衣服", "水", "脑子", "污水"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 162,
        q: "为什么冬天北方比南方冷?",
        options: ["离太阳远", "纬度高", "没有海洋", "以上都对"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 163,
        q: "什么东西掉进水里不会湿?",
        options: ["石头", "影子", "光线", "泡沫"],
        a: 1,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 164,
        q: "为什么树叶会掉?",
        options: ["被风吹", "到了秋天", "树要休息", "它自己要掉"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 165,
        q: "什么越来越少但永远用不完?",
        options: ["时间", "空间", "钱", "生命"],
        a: 0,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 166,
        q: "小王从下课到放学用了多长时间?",
        options: ["30分钟", "1小时", "2小时", "取决于放学时间"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 167,
        q: "什么东西有头没有脚?",
        options: ["鱼", "河", "釘子", "蛇"],
        a: 1,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 168,
        q: "什么东西只有一条腿?",
        options: ["桌子", "椅子", "圆规", "人"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 169,
        q: "为什么一加一不等于二?",
        options: ["数学错了", "一加一等于二", "在罗马数字中 I+I=II", "题目错了"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 170,
        q: "什么路最宽?",
        options: ["马路", "水路", "天路", "想象的路"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 171,
        q: "什么数字最懒?",
        options: ["0", "1", "8", "9"],
        a: 0,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 172,
        q: "什么笔不能写?",
        options: ["铅笔", "钢笔", "水笔", "鹅毛笔"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 173,
        q: "什么舌头没有?",
        options: ["蛇", "鱼", "鞋", "鸟"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 174,
        q: "什么东西总是在你身后?",
        options: ["朋友", "影子", "背包", "敌人"],
        a: 1,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 175,
        q: "什么东西说没有用但没有它不行?",
        options: ["手机", "电", "鼻子", "耳朵"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 176,
        q: "为什么说谎要打?",
        options: ["因为坏", "因为不诚实", "是成语\"说曹操曹操到\"的谐音", "父母说的"],
        a: 2,
        difficulty: 2,
        category: "脑筋急转弯"
    },
    {
        id: 177,
        q: "什么东西掉了不丢?",
        options: ["眼泪", "头发", "牙齿", "所有都对"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 178,
        q: "什么东西只有妈妈有?",
        options: ["女儿", "儿子", "乳房", "妈妈的心"],
        a: 0,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 179,
        q: "什么东西跑得越快死得越快?",
        options: ["汽车", "人", "轮胎", "电池"],
        a: 3,
        difficulty: 1,
        category: "脑筋急转弯"
    },
    {
        id: 180,
        q: "什么东西天天摸但从不会脏?",
        options: ["头", "脸", "光", "空气"],
        a: 2,
        difficulty: 1,
        category: "脑筋急转弯"
    },

    // ============ 其他综合 (20题) ============
    {
        id: 181,
        q: "世界上有多少个国家?",
        options: ["195个", "196个", "197个", "200个"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 182,
        q: "奥运五环的颜色有几种?",
        options: ["3种", "5种", "6种", "7种"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 183,
        q: "棋盘上有多少个格子?",
        options: ["32个", "64个", "128个", "256个"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 184,
        q: "扑克牌有多少张?",
        options: ["48张", "52张", "54张", "56张"],
        a: 2,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 185,
        q: "莫尔斯电码中点和划表示什么?",
        options: ["数字", "字母", "数字和字母", "语言"],
        a: 2,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 186,
        q: "计算机二进制由什么组成?",
        options: ["0和1", "0-9", "A-Z", "随意"],
        a: 0,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 187,
        q: "RGB色彩模式代表?",
        options: ["红绿蓝", "红黄蓝", "红绿黄", "红青品"],
        a: 0,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 188,
        q: "键盘上有多少个字母键?",
        options: ["24个", "26个", "28个", "30个"],
        a: 1,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 189,
        q: "一周有多少天?",
        options: ["5天", "6天", "7天", "8天"],
        a: 2,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 190,
        q: "一年有多少周?",
        options: ["50周", "51周", "52周", "53周"],
        a: 2,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 191,
        q: "太阳系有多少颗行星?",
        options: ["7颗", "8颗", "9颗", "10颗"],
        a: 1,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 192,
        q: "人的五官是?",
        options: ["眼耳鼻舌", "眼耳鼻口心", "眼耳鼻舌身", "眼耳鼻舌皮"],
        a: 0,
        difficulty: 0,
        category: "综合"
    },
    {
        id: 193,
        q: "绿色的主要波长是?",
        options: ["400-450nm", "450-495nm", "495-570nm", "570-750nm"],
        a: 2,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 194,
        q: "人的寿命平均是?",
        options: ["60岁", "70岁", "80岁", "90岁"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 195,
        q: "最快的哺乳动物是?",
        options: ["猎豹", "羚羊", "马", "鹿"],
        a: 0,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 196,
        q: "最大的哺乳动物是?",
        options: ["大象", "河马", "蓝鲸", "长颈鹿"],
        a: 2,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 197,
        q: "最毒的生物是?",
        options: ["眼镜蛇", "箭毒蛙", "河豚", "蜘蛛"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 198,
        q: "时间单位从小到大排列正确的是?",
        options: ["秒毫秒微秒", "毫秒秒微秒", "微秒毫秒秒", "都不对"],
        a: 2,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 199,
        q: "世界人口大约是?",
        options: ["70亿", "80亿", "90亿", "100亿"],
        a: 1,
        difficulty: 1,
        category: "综合"
    },
    {
        id: 200,
        q: "互联网大约有多少个网站?",
        options: ["1000万", "1亿", "10亿", "无法计数"],
        a: 3,
        difficulty: 1,
        category: "综合"
    }
];
