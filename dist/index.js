(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const model = { "UW3": { "、": 4698, "。": 6235, "の": 3583, "に": 3682, "は": 3987, "を": 5216, "が": 3860, "と": 2756, "も": 3133, "る": 2561, "で": 3133, "っ": -1796, "て": 2238, "た": 2076, "ら": 1517, "な": 2159, "う": 1705, "く": 2359, "い": 1645, "り": 1006, "］": 2051, "，": 3439, "か": 1783, "や": 2201, "！": 3229, "ば": 1894, "？": 3231, "．": 1817, "…": 2868, "ど": 1783, "）": 3421, "・": 938, "ー": -35, "ま": -277, "へ": 2227, "☆": 2597, "つ": 1217, "日": 822, "♪": 2552, "ず": 1661, "ろ": 979, "笑": 2842, "だ": 949, "」": 1287, "ん": 690, "京": -1508, "間": 921, "人": 670, "電": -1496, "ゃ": 1309, "今": 1118, "中": 959, "分": 948, "真": 741, "ぐ": 1573, "お": -1189, "す": 784, "々": 1394, "０": -1020, "度": 1219, "き": 544, "む": 1376, "ッ": -1190, "「": -1279, "イ": -431, "然": 881, "大": -938, "ぶ": 1332, "観": -1015, "後": 984, "都": -441, "ス": -551, "１": -613, "え": 699, "［": -1052, "夜": 1313, "体": 909, "変": 254, "昔": 1610, "け": 272, "〜": 408, "フ": -860, "一": -249, "月": 704, "光": -269, "年": 346, "あ": 532, "水": 407, "』": 715, "ｏ": -652, "超": 775, "技": 339, "★": 647, "果": 542, "係": 479, "方": 486, "れ": 227, "ぁ": 537, "語": 538, "＞": 525, "グ": 256, "題": 644, "味": 345, "学": -283, "み": 354, "ド": -323, "自": -375, "し": 158, "ぞ": 530, "シ": -416, "ン": -73, "：": 274, "ち": 200, "機": -356, "カ": -278, "メ": -59, "色": 352, "び": 245, "出": -326, "ア": -258, "ぱ": 401, "前": 235, "”": 351, "ね": 318, "頭": 376, "感": 221, "不": -224, "レ": -188, "堂": 316, "想": 197, "生": -132, "じ": 136, "ざ": 169, "屋": 126, "　": 135, "ぼ": 139, "プ": -105, "皆": 148, "神": -85, "め": 14, "パ": -56, "最": -61, "気": 37, "週": 23, "台": 78, "こ": 18, "来": 9 }, "UW4": { "の": -3485, "、": -7199, "。": -6700, "て": -3636, "に": -3918, "で": -2671, "は": -3210, "る": -4636, "が": -2823, "っ": -3711, "を": -4056, "か": -2522, "な": -1756, "と": -2329, "た": -1745, "ら": -4246, "こ": -389, "し": -1773, "い": -1304, "り": -3738, "れ": -4040, "う": -1833, "だ": -2049, "ん": -3128, "ー": -2685, "そ": 36, "き": -1993, "も": -2441, "お": 942, "く": -2725, "ま": -1294, "「": 2362, "す": -1168, "思": 1444, "私": 1865, "」": -4983, "京": 668, "人": 572, "よ": -924, "一": 541, "け": -3268, "，": -4129, "１": 823, "！": -4313, "行": 222, "見": 568, "大": 623, "さ": -1477, "使": 1017, "・": -585, "（": 2363, "今": 1285, "ろ": -2964, "え": -1630, "食": 453, "時": 507, "み": -1003, "ン": -1947, "…": -2878, "何": 909, "じ": -2413, "気": 449, "わ": -1323, "ル": -1194, "２": 686, "自": 826, "ど": -1068, "？": -3024, "最": 1487, "．": -2805, "ば": -2332, "つ": -1046, "べ": -2524, "あ": 173, "ち": -1690, "携": 342, "め": -1558, "帯": -1267, "ず": -1935, "や": -977, "笑": -2827, "せ": -1403, "）": -3199, "ッ": -1344, "』": -3229, "ひ": 571, "ゃ": -2196, "］": -1306, "ト": -450, "［": 965, "ね": -1443, "僕": 1184, "感": 222, "３": 85, "不": 790, "ぁ": -1287, "ょ": -1465, "０": -265, "”": -962, "間": -359, "ぎ": -1098, "リ": -662, "風": 464, "実": 511, "イ": -235, "場": 430, "買": 486, "多": 466, "少": 491, "タ": -533, "♪": -1471, "〜": -1165, "以": 117, "書": 349, "無": 234, "ス": -218, "飲": 629, "高": 232, "祭": 334, "☆": -1095, "ご": -572, "楽": 125, "子": -441, "び": -936, "合": -836, "ｏ": -602, "ぼ": -837, "乗": 151, "小": 485, "新": 379, "街": 472, "全": 292, "的": -582, "夏": 491, "『": 617, "ぶ": -826, "ュ": -517, "ぜ": -818, "込": -743, "回": -717, "知": 17, "相": 329, "ぐ": -645, "誰": 557, "言": 274, "ぞ": -739, "へ": -490, "げ": -627, "物": -206, "流": 449, "三": 276, "キ": 141, "二": 196, "５": 136, "道": 110, "前": -78, "必": 137, "結": 222, "オ": 140, "づ": -432, "話": 160, "味": 66, "通": -179, "南": 479, "グ": -199, "デ": 111, "年": -248, "四": 162, "換": -124, "参": 182, "真": -285, "百": 161, "む": -190, "写": 65, "東": 120, "フ": -53, "事": 29, "＾": -186, "友": 23, "ラ": -52, "返": -61, "修": 70, "ほ": -28, "ム": -61, "安": 46, "★": -97, "素": 23, "秋": 65, "甘": 18, "−": -13, "押": 4 }, "UW5": { "。": -1588, "、": -915, "な": -461, "で": -907, "っ": 1035, "き": 884, "う": 485, "に": -594, "が": -546, "す": -759, "と": -724, "し": -297, "る": 458, "く": 529, "ん": 1013, "え": 631, "は": -652, "べ": 1597, "を": -565, "帯": 413, "ー": 94, "・": -1020, "ろ": -29, "れ": 577, "い": 363, "わ": 595, "め": 711, "の": -562, "つ": 1361, "た": 124, "か": 202, "あ": -182, "じ": 701, "も": -362, "ち": 625, "日": 615, "そ": -240, "て": 355, "」": -1124, "思": -722, "だ": -301, "！": -439, "こ": 135, "々": 947, "ト": -535, "］": -518, "ご": 230, "ず": 638, "年": 628, "ル": -411, "せ": -305, "ぎ": 668, "利": 329, "分": 143, "フ": 43, "む": 551, "み": 174, "使": -729, "ょ": 486, "体": -952, "り": 158, "料": 519, "電": -176, "ゃ": 256, "手": 90, "田": 439, "要": 127, "前": 203, "寺": -307, "．": -126, "ど": -172, "さ": -84, "よ": -57, "一": -130, "ま": 58, "？": -237, "び": 174, "通": -112, "　": -399, "タ": 76, "学": 40, "ぼ": 265, "張": 275, "先": -291, "へ": -195, "ば": 123, "山": 72, "言": -125, "的": -91, "味": 48, "今": -166, "行": -52, "当": 71, "…": -28, "葉": 33, "テ": -80, "Ｎ": 140, "ｏ": 27, "条": 9, "１": -9, "）": -4 }, "UW2": { "、": -1519, "。": -1208, "の": -704, "を": -1923, "に": -1065, "は": -865, "る": -742, "も": -910, "か": -78, "と": -778, "ん": 491, "ま": 740, "て": -738, "し": 109, "で": -859, "が": -958, "っ": 106, "一": 1082, "さ": 569, "よ": 638, "す": 211, "く": -413, "う": -300, "結": 1886, "少": 578, "毎": 1771, "お": -720, "最": 747, "だ": 327, "同": 460, "そ": -130, "な": -378, "多": 574, "全": 1082, "り": -345, "え": 234, "関": 1116, "＾": 636, "い": -81, "ほ": 470, "や": -463, "ぜ": 809, "ひ": -1506, "ぱ": 550, "「": -524, "水": 645, "目": -809, "話": 10, "ら": -111, "以": 1020, "パ": 492, "我": -1365, "メ": -161, "題": 1090, "ね": 365, "つ": -350, "時": 143, "本": 299, "今": 285, "ば": -370, "，": -653, "ー": 167, "こ": 87, "手": 424, "当": 459, "．": -510, "的": 158, "あ": 57, "良": 351, "イ": -102, "世": -1029, "効": 590, "裏": -1054, "絶": 854, "料": 230, "［": -225, "取": -297, "ゃ": 112, "女": -515, "た": -60, "容": 398, "］": -142, "々": 113, "ラ": -234, "…": 212, "生": 143, "正": 432, "立": -344, "み": -61, "実": 43, "打": 240, "電": 101, "車": 109, "早": 223, "百": -273, "乗": -201, "高": 88, "感": 59, "落": -255, "２": -97, "３": -24, "笑": -204, "文": 124, "先": 72, "和": 95, "大": 23, "万": -132, "友": 99, "サ": -66, "三": 41, "前": 18, "甘": 41, "違": 23, "見": -4 }, "UW6": { "に": 301, "。": -368, "う": -135, "で": 81, "を": 216, "て": -138, "が": 197, "の": 48, "は": 104, "し": 348, "な": 89, "さ": 524, "た": -151, "り": 285, "と": -117, "ー": -151, "寺": 525, "ル": 114, "や": 419, "い": 221, "ご": 487, "ぱ": 1190, "０": 537, "っ": 257, "か": 140, "ん": 252, "・": -427, "け": -78, "ろ": 39, "み": 323, "め": 518, "せ": 419, "ま": 190, "神": 704, "込": 938, "気": 337, "ば": 230, "す": 109, "分": 617, "思": -317, "く": 121, "送": -1163, "カ": 266, "京": -240, "こ": -30, "、": 50, "出": 256, "パ": -472, "御": 778, "的": 129, "過": 701, "ピ": 425, "よ": 52, "わ": 61, "つ": 70, "］": -80, "イ": -65, "ど": -35, "ょ": -138, "メ": 83, "：": 20, "れ": 39, "き": 74, "び": 88, "田": 214, "焼": 161, "お": 58, "日": 38, "時": 67, "周": 264, "る": 23, "生": -66, "参": 119, "Ｓ": -99, "方": -75, "間": -37, "不": 46, "ナ": 42, "今": 46, "へ": -46, "じ": 13, "切": 23, "だ": -4 }, "BW2": { "とい": 377, "てい": -1247, "ない": -2850, "です": -2664, "ので": -1181, "であ": -2914, "とこ": -1254, "、と": -991, "にも": -1195, "でも": -1854, "もし": -299, "てお": -2179, "とし": 148, "には": -912, "帯電": -1479, "、そ": -1469, "てみ": -1608, "など": -1379, "のよ": -631, "たい": -1673, "はな": -305, "くな": -1427, "のだ": -578, "でし": -1633, "の前": -944, "らな": -346, "ると": -637, "でき": -1464, "いも": 553, "・・": -1230, "もあ": -590, "では": -1433, "にな": -292, "どこ": -873, "した": -607, "はい": -759, "のも": -692, "とも": -520, "てあ": -1412, "うど": -1005, "いた": -599, "のが": -630, "はあ": -1213, "てき": -1139, "のは": -554, "人が": 903, "にし": -265, "とか": -686, "もの": -411, "はま": -581, "もう": -678, "ばい": -498, "でな": -885, "るの": -474, "ても": -471, "てく": -561, "なか": -352, "いま": -207, "らい": -375, "いと": -365, "日本": -510, "いい": -322, "、清": -676, "の１": -787, "、１": -872, "たも": 278, "のか": -189, "はず": -276, "なあ": -648, "てほ": -349, "いつ": -213, "のみ": -376, "と同": -306, "スで": 468, "なく": -265, "はじ": -289, "いな": -106, "いし": -194, "やす": -247, "かな": -134, "ーな": 302, "とき": -109, "たち": -109, "るよ": -75, "うい": -89, "なこ": -69, "合い": 60, "ろう": -27, "たし": -55, "すご": -60, "らし": -9, "もち": -13, "なぁ": -4 }, "BW3": { "もの": 3384, "いう": 616, "よう": -1413, "とこ": 1983, "こと": 1066, "いい": 989, "とき": 2070, "でも": 1529, "して": 496, "かけ": 2869, "その": 1842, "とい": -1023, "この": 1476, "もう": 2300, "そし": -387, "なっ": -381, "もら": 2823, "かか": 1872, "ころ": -321, "ちょ": 1734, "メー": 150, "した": 892, "ため": 865, "はし": 2262, "しま": -90, "なる": 240, "とて": 1474, "ある": -243, "・・": -1164, "から": -742, "そう": -589, "さん": -1578, "まし": -704, "どう": 630, "いろ": 383, "よく": 1149, "より": -1031, "とも": 838, "もん": 782, "かっ": -922, "ただ": 1395, "いて": -569, "すぐ": 1280, "でき": 583, "はま": 1086, "これ": 980, "すご": 933, "しい": -585, "とっ": 575, "いか": 400, "なく": 422, "ひと": 720, "ない": 227, "はず": 507, "こそ": -845, "どこ": 832, "まだ": 826, "まあ": 923, "わか": 727, "いた": -21, "だけ": -697, "おり": -1107, "ます": -314, "だっ": -841, "しゃ": 623, "みた": -675, "まっ": -65, "また": 130, "考え": 381, "いの": -425, "とり": 504, "楽し": 341, "いら": 547, "あと": 329, "かつ": 395, "たい": -211, "たま": 324, "もっ": 364, "もと": 619, "つい": 326, "京都": 75, "そこ": 234, "った": -273, "たっ": 430, "祭り": 295, "中で": 222, "だろ": -532, "うま": 186, "なん": 98, "で、": 176, "ずっ": 406, "され": -235, "出来": -259, "ルー": 299, "なか": 84, "以前": 272, "てき": 296, "つけ": 261, "いる": 98, "行き": -255, "書い": 180, "のも": 249, "なに": 214, "つな": 247, "かも": -149, "うか": -82, "しく": -144, "きる": -132, "まぁ": 99, "写真": 89, "と思": -70, "どの": 46, "ませ": -37, "です": -18, "うち": 9, "まま": -4, "はや": 4 }, "BW1": { "いう": 599, "から": 1562, "ない": 913, "こと": -1479, "とか": 1621, "しい": 820, "では": -247, "うな": 355, "とが": -1237, "もう": 1719, "るの": -1316, "。・": 2399, "かも": -840, "でも": 733, "より": 895, "んな": 200, "んで": -627, "れた": 855, "が、": 1449, "たい": 411, "とき": 1424, "には": 578, "てい": -814, "最近": 982, "たの": -1236, "たら": 793, "もの": -869, "少し": 1387, "ても": 426, "うに": -592, "だけ": 591, "った": 146, "とい": -937, "その": -889, "たと": -895, "同じ": 1407, "ただ": 1154, "にも": 486, "こそ": 1038, "もし": 1294, "れて": -732, "この": -853, "なら": 1173, "ると": 349, "は、": 337, "よう": -1059, "思い": -1175, "なぜ": 1436, "で、": 641, "い、": -87, "のは": 765, "いの": -587, "０円": 573, "いた": 221, "さん": 255, "のが": 830, "、と": 634, "た．": 862, "普段": 798, "の時": 1017, "大変": 636, "くて": 635, "と、": 483, "のも": 508, "とは": -236, "パン": 493, "て、": 251, "の後": 905, "ので": 231, "まり": 359, "いで": -652, "えば": 464, "の間": 883, "やら": 763, "とで": 509, "うの": -334, "てる": 408, "る人": 477, "ため": 580, "使い": -718, "との": 309, "れば": 286, "ころ": 298, "けど": 193, "の食": 656, "使う": 346, "一番": 315, "現在": 542, "買い": -647, "なの": -165, "たま": 491, "に、": 476, "ぱり": 447, "んと": -59, "りと": 240, "だし": 352, "いも": -460, "！！": 148, "まだ": 242, "的な": 187, "。」": 318, "んだ": 213, "まま": 307, "も、": 168, "うち": 196, "る。": 80, "いる": 20, "べき": 353, "ねー": 492, "です": 129, "＾＾": 208, "わけ": 251, "実際": 266, "クル": 236, "すが": -78, "して": -65, "取り": -180, "どう": 83, "気が": 161, "にか": 256, "きな": 38, "める": -110, "よく": 52, "うと": -105, "電車": 146, "える": -46, "こう": -84, "じゃ": -117, "か、": -65, "とも": -9, "な、": -60, "見て": -42, "らく": 51, "きの": -69, "、今": 23, "てた": 27, "ケー": -32, "ろう": -23, "らと": -23, "じて": 13, "料理": 9, "いか": -4 }, "UW1": { "い": -69, "な": -187, "そ": 253, "す": 392, "に": -287, "で": -92, "の": -19, "ー": 109, "が": -108, "と": 18, "て": 45, "は": -173, "ち": 374, "し": -64, "携": -82, "だ": 224, "ス": -374, "ろ": 247, "［": -563, "く": 76, "ん": 167, "機": 431, "寺": 509, "ン": 172, "＾": 641, "う": 99, "り": -178, "か": -63, "安": -732, "あ": 33, "外": 170, "何": 312, "大": 138, "自": 319, "つ": 39, "０": 39, "チ": 330, "っ": 71, "効": 500, "ひ": 131, "人": 89, "ざ": 401, "行": -119, "．": -312, "３": -286, "を": -26, "や": -213, "小": 200, "不": -323, "ｏ": -436, "、": -35, "た": 16, "ラ": 102, "「": -85, "居": 266, "（": -130, "ュ": 97, "リ": 71, "様": 287, "好": 66, "見": 56, "ツ": 119, "生": 94, "さ": -49, "！": 24, "国": -178, "オ": 72, "ボ": 158, "？": 23, "庭": 103, "料": 42, "連": -93, "パ": 51, "よ": 9 }, "TW3": { "という": 737, "ている": -1516, "ところ": -944, "、ある": -2408, "ること": -344, "てしま": -1571, "として": 288, "らない": -1196, "すこと": 750, "である": -995, "と言っ": -1172, "はない": -323, "になっ": -130, "ていた": -666, "、また": -993, "ていう": 556, "はそれ": -708, "であっ": -751, "となっ": 302, "にして": -206, "ばいい": -440, "でした": -243, "ういう": -198, "もいい": -363, "とした": -231, "］京都": -200, "、なん": -14, "いくら": 9 }, "TW2": { "ではな": -1392, "気に入": -3050, "かもし": -1010, "んでい": -1933, "そもそ": -1308, "とがあ": -930, "その後": -862, "それ以": 283, "でもあ": -1008, "しかな": 439, "うにな": -238, "からな": -448, "ともあ": -529, "でもな": -767, "ってこ": -89, "ないと": -65, "えてい": 41, "とがで": -65, "しかし": -18, "してお": -4 }, "TW1": { "という": 645, "しかし": 2177, "・・・": 1545, "ような": 1249, "かなり": 1958, "やはり": 1799, "ながら": 1400, "ない、": -1279, "かなか": 899, "ました": -410, "なんと": -694, "いたい": 874, "ことも": -243, "ている": 104, "そして": 553, "っかり": 690, "それは": -297, "ひとつ": 409, "くらい": 192, "ていて": 211, "として": 221, "ように": -167, "に来て": 354, "ちろん": 269, "ろいろ": 276, "００円": 119, "くさん": 149, "、それ": 24, "いった": 90, "とんど": 95, "ょうど": 99, "メール": 32, "らない": 23, "ことは": -23 }, "TW4": { "の京都": 3137, "ところ": 1360, "くらい": 1922, "かなり": 2037, "ことが": -979, "ことに": -994, "って、": 1932, "メール": 367, "なんか": 510, "もちろ": 1816, "ない。": 244, "ように": -994, "こと。": 737, "そうで": -1049, "しかも": 1253, "した。": -701, "いろい": 757, "ソフト": 806, "しかし": 1040, "ことで": 183, "うどん": 631, "でも、": 733, "いかな": 676, "ような": -1169, "だから": 599, "ことも": -518, "ことを": 326, "なんて": -366, "しない": 479, "いえば": 499, "わけで": -246, "ことは": -372, "ありま": -203, "まって": -271, "しても": -360, "なかな": 434, "やって": 267, "らしい": 403, "いっぱ": 264, "観光地": 197, "いる。": 125, "ないと": 99, "言って": -99, "なんと": 104, "してき": 71, "おいし": 80, "いけな": -37, "すると": 36, "すごい": 23, "あたり": -59 } };
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const parseFromString = (html) => {
  const domparser = new DOMParser();
  const document2 = domparser.parseFromString(html, "text/html");
  return document2;
};
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = console.assert;
const ZWSP = "​";
const NodeType = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3
};
const DomAction = {
  Inline: 0,
  Block: 1,
  Skip: 2,
  Break: 3
};
const domActions = {
  // Hidden elements
  // https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements
  AREA: DomAction.Skip,
  BASE: DomAction.Skip,
  BASEFONT: DomAction.Skip,
  DATALIST: DomAction.Skip,
  HEAD: DomAction.Skip,
  LINK: DomAction.Skip,
  META: DomAction.Skip,
  NOEMBED: DomAction.Skip,
  NOFRAMES: DomAction.Skip,
  PARAM: DomAction.Skip,
  RP: DomAction.Skip,
  SCRIPT: DomAction.Skip,
  STYLE: DomAction.Skip,
  TEMPLATE: DomAction.Skip,
  TITLE: DomAction.Skip,
  NOSCRIPT: DomAction.Skip,
  // Flow content
  // https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3
  HR: DomAction.Break,
  // Disable if `white-space: pre`.
  LISTING: DomAction.Skip,
  PLAINTEXT: DomAction.Skip,
  PRE: DomAction.Skip,
  XMP: DomAction.Skip,
  // Phrasing content
  // https://html.spec.whatwg.org/multipage/rendering.html#phrasing-content-3
  BR: DomAction.Break,
  RT: DomAction.Skip,
  // Form controls
  // https://html.spec.whatwg.org/multipage/rendering.html#form-controls
  INPUT: DomAction.Skip,
  SELECT: DomAction.Skip,
  BUTTON: DomAction.Skip,
  TEXTAREA: DomAction.Skip,
  // Other elements where the phrase-based line breaking should be disabled.
  // https://github.com/google/budoux/blob/main/budoux/skip_nodes.json
  ABBR: DomAction.Skip,
  CODE: DomAction.Skip,
  IFRAME: DomAction.Skip,
  TIME: DomAction.Skip,
  VAR: DomAction.Skip
};
const defaultBlockElements = /* @__PURE__ */ new Set([
  // 15.3.2 The page
  "HTML",
  "BODY",
  // 15.3.3 Flow content
  "ADDRESS",
  "BLOCKQUOTE",
  "CENTER",
  "DIALOG",
  "DIV",
  "FIGURE",
  "FIGCAPTION",
  "FOOTER",
  "FORM",
  "HEADER",
  "LEGEND",
  "LISTING",
  "MAIN",
  "P",
  // 15.3.6 Sections and headings
  "ARTICLE",
  "ASIDE",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "HGROUP",
  "NAV",
  "SECTION",
  // 15.3.7 Lists
  "DIR",
  "DD",
  "DL",
  "DT",
  "MENU",
  "OL",
  "UL",
  "LI",
  // 15.3.8 Tables
  "TABLE",
  "CAPTION",
  "COL",
  "TR",
  "TD",
  "TH",
  // 15.3.12 The fieldset and legend elements
  "FIELDSET",
  // 15.5.4 The details and summary elements
  "DETAILS",
  "SUMMARY",
  // 15.5.12 The marquee element
  "MARQUEE"
]);
function actionForElement(element) {
  const nodeName = element.nodeName;
  const action = domActions[nodeName];
  if (action !== void 0)
    return action;
  if (typeof getComputedStyle === "function") {
    const style = getComputedStyle(element);
    switch (style.whiteSpace) {
      case "nowrap":
      case "pre":
        return DomAction.Skip;
    }
    const display = style.display;
    if (display)
      return display === "inline" ? DomAction.Inline : DomAction.Block;
  }
  return defaultBlockElements.has(nodeName) ? DomAction.Block : DomAction.Inline;
}
class Paragraph {
  constructor(element) {
    this.textNodes = [];
    this.element = element;
  }
  hasText() {
    return this.textNodes.length > 0;
  }
}
class HTMLProcessor {
  /**
   * @param parser A BudouX {@link Parser} to compute semantic line breaks.
   */
  constructor(parser2, options) {
    this.separator = ZWSP;
    this.parser_ = parser2;
    if (options !== void 0) {
      if (options.className !== void 0)
        this.className = options.className;
      if (options.separator !== void 0)
        this.separator = options.separator;
    }
  }
  /**
   * Applies markups for semantic line breaks to the given HTML element.
   *
   * It breaks descendant nodes into paragraphs,
   * and applies the BudouX to each paragraph.
   * @param element The input element.
   */
  applyToElement(element) {
    for (const block of this.getBlocks(element)) {
      assert(block.hasText());
      this.applyToParagraph(block);
    }
  }
  /**
   * Find paragraphs from a given HTML element.
   * @param element The root element to find paragraphs.
   * @param parent The parent {@link Paragraph} if any.
   * @returns A list of {@link Paragraph}s.
   */
  *getBlocks(element, parent) {
    assert(element.nodeType === NodeType.ELEMENT_NODE);
    if (this.className && element.classList.contains(this.className))
      return;
    const action = actionForElement(element);
    if (action === DomAction.Skip)
      return;
    if (action === DomAction.Break) {
      if (parent && parent.hasText()) {
        yield parent;
        parent.textNodes = [];
      }
      assert(!element.firstChild);
      return;
    }
    assert(action === DomAction.Block || action === DomAction.Inline);
    const isNewBlock = !parent || action === DomAction.Block;
    const block = isNewBlock ? new Paragraph(element) : parent;
    for (const child of element.childNodes) {
      switch (child.nodeType) {
        case NodeType.ELEMENT_NODE:
          for (const childBlock of this.getBlocks(child, block))
            yield childBlock;
          break;
        case NodeType.TEXT_NODE:
          block.textNodes.push(child);
          break;
      }
    }
    if (isNewBlock && block.hasText())
      yield block;
  }
  /**
   * Apply the BudouX to the given {@link Paragraph}.
   * @param paragraph The {@link Paragraph} to apply.
   */
  applyToParagraph(paragraph) {
    const textNodes = paragraph.textNodes;
    assert(textNodes.length > 0);
    const texts = textNodes.map((node) => node.nodeValue);
    const text = texts.join("");
    if (/^\s*$/.test(text))
      return;
    const phrases = this.parser_.parse(text);
    assert(phrases.length > 0);
    assert(phrases.reduce((sum2, phrase) => sum2 + phrase.length, 0) === text.length);
    if (phrases.length <= 1)
      return;
    const boundaries = [];
    let char_index = 0;
    for (const phrase of phrases) {
      assert(phrase.length > 0);
      char_index += phrase.length;
      boundaries.push(char_index);
    }
    assert(boundaries[0] > 0);
    assert(boundaries[boundaries.length - 1] === text.length);
    ++boundaries[boundaries.length - 1];
    assert(boundaries.length > 1);
    this.splitTextNodes(textNodes, boundaries);
    this.applyBlockStyle(paragraph.element);
  }
  /**
   * Split {@link Text} nodes at the specified boundaries.
   * @param textNodes A list of {@link Text}.
   * @param boundaries A list of indices of the text to split at.
   */
  splitTextNodes(textNodes, boundaries) {
    assert(boundaries.length > 0);
    const textLen = textNodes.reduce((sum2, node) => sum2 + (node.nodeValue ? node.nodeValue.length : 0), 0);
    assert(boundaries[boundaries.length - 1] > textLen);
    let boundary_index = 0;
    let boundary = boundaries[0];
    assert(boundary > 0);
    let nodeStart = 0;
    for (const node of textNodes) {
      const nodeText = node.nodeValue;
      if (!nodeText)
        continue;
      const nodeEnd = nodeStart + nodeText.length;
      if (boundary >= nodeEnd) {
        nodeStart = nodeEnd;
        continue;
      }
      const chunks = [];
      let chunkStartInNode = 0;
      while (boundary < nodeEnd) {
        const boundaryInNode = boundary - nodeStart;
        assert(boundaryInNode >= chunkStartInNode);
        chunks.push(nodeText.substring(chunkStartInNode, boundaryInNode));
        chunkStartInNode = boundaryInNode;
        ++boundary_index;
        assert(boundaries[boundary_index] > boundary);
        boundary = boundaries[boundary_index];
      }
      assert(chunks.length > 0);
      if (chunkStartInNode < nodeText.length)
        chunks.push(nodeText.substring(chunkStartInNode));
      this.splitTextNode(node, chunks);
      nodeStart = nodeEnd;
    }
    assert(nodeStart === textLen);
    assert(boundary_index < boundaries.length);
    assert(boundaries[boundary_index] >= textLen);
  }
  /**
   * Split a {@link Text} node in the same way as the given chunks.
   * @param node A {@link Text} node to split.
   * @param chunks A list of {@link string} specifying where to split.
   * Joining all {@link chunks} must be equal to {@link node.nodeValue}.
   */
  splitTextNode(node, chunks) {
    assert(chunks.length > 1);
    assert(node.nodeValue === chunks.join(""));
    const separator = this.separator;
    if (typeof separator === "string") {
      node.nodeValue = chunks.join(separator);
      return;
    }
    const document2 = node.ownerDocument;
    let nodes = [];
    for (const chunk of chunks) {
      if (chunk)
        nodes.push(document2.createTextNode(chunk));
      nodes.push(null);
    }
    nodes.pop();
    nodes = nodes.map((n) => n ? n : separator.cloneNode(true));
    node.replaceWith(...nodes);
  }
  /**
   * Applies the block style to the given element.
   * @param element The element to apply the block style.
   */
  applyBlockStyle(element) {
    if (this.className) {
      element.classList.add(this.className);
      return;
    }
    const style = element.style;
    style.wordBreak = "keep-all";
    style.overflowWrap = "break-word";
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NODETYPE = {
  ELEMENT: 1,
  TEXT: 3
};
class Parser {
  constructor(model2) {
    this.model = new Map(Object.entries(model2).map(([k, v]) => [k, new Map(Object.entries(v))]));
  }
  /**
   * Checks if the given element has a text node in its children.
   *
   * @param ele An element to be checked.
   * @returns Whether the element has a child text node.
   */
  static hasChildTextNode(ele) {
    for (const child of ele.childNodes) {
      if (child.nodeType === NODETYPE.TEXT)
        return true;
    }
    return false;
  }
  /**
   * Parses the input sentence and returns a list of semantic chunks.
   *
   * @param sentence An input sentence.
   * @returns The retrieved chunks.
   */
  parse(sentence) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (sentence === "")
      return [];
    const result = [sentence[0]];
    const baseScore = -0.5 * sum([...this.model.values()].map((group) => [...group.values()]).flat());
    for (let i = 1; i < sentence.length; i++) {
      let score = baseScore;
      score += ((_a = this.model.get("UW1")) === null || _a === void 0 ? void 0 : _a.get(sentence.slice(i - 3, i - 2))) || 0;
      score += ((_b = this.model.get("UW2")) === null || _b === void 0 ? void 0 : _b.get(sentence.slice(i - 2, i - 1))) || 0;
      score += ((_c = this.model.get("UW3")) === null || _c === void 0 ? void 0 : _c.get(sentence.slice(i - 1, i))) || 0;
      score += ((_d = this.model.get("UW4")) === null || _d === void 0 ? void 0 : _d.get(sentence.slice(i, i + 1))) || 0;
      score += ((_e = this.model.get("UW5")) === null || _e === void 0 ? void 0 : _e.get(sentence.slice(i + 1, i + 2))) || 0;
      score += ((_f = this.model.get("UW6")) === null || _f === void 0 ? void 0 : _f.get(sentence.slice(i + 2, i + 3))) || 0;
      score += ((_g = this.model.get("BW1")) === null || _g === void 0 ? void 0 : _g.get(sentence.slice(i - 2, i))) || 0;
      score += ((_h = this.model.get("BW2")) === null || _h === void 0 ? void 0 : _h.get(sentence.slice(i - 1, i + 1))) || 0;
      score += ((_j = this.model.get("BW3")) === null || _j === void 0 ? void 0 : _j.get(sentence.slice(i, i + 2))) || 0;
      score += ((_k = this.model.get("TW1")) === null || _k === void 0 ? void 0 : _k.get(sentence.slice(i - 3, i))) || 0;
      score += ((_l = this.model.get("TW2")) === null || _l === void 0 ? void 0 : _l.get(sentence.slice(i - 2, i + 1))) || 0;
      score += ((_m = this.model.get("TW3")) === null || _m === void 0 ? void 0 : _m.get(sentence.slice(i - 1, i + 2))) || 0;
      score += ((_o = this.model.get("TW4")) === null || _o === void 0 ? void 0 : _o.get(sentence.slice(i, i + 3))) || 0;
      if (score > 0)
        result.push("");
      result[result.length - 1] += sentence[i];
    }
    return result;
  }
  /**
   * Applies markups for semantic line breaks to the given HTML element.
   * @param parentElement The input element.
   */
  applyElement(parentElement) {
    const htmlProcessor = new HTMLProcessor(this, {
      separator: parentElement.ownerDocument.createElement("wbr")
    });
    htmlProcessor.applyToElement(parentElement);
  }
  /**
   * Translates the given HTML string to another HTML string with markups
   * for semantic line breaks.
   * @param html An input html string.
   * @returns The translated HTML string.
   */
  translateHTMLString(html) {
    if (html === "")
      return html;
    const doc = parseFromString(html);
    if (Parser.hasChildTextNode(doc.body)) {
      const wrapper = doc.createElement("span");
      wrapper.append(...doc.body.childNodes);
      doc.body.append(wrapper);
    }
    this.applyElement(doc.body.childNodes[0]);
    return doc.body.innerHTML;
  }
}
const loadDefaultJapaneseParser = () => {
  return new Parser(model);
};
const parser = loadDefaultJapaneseParser();
const budouxSelectors = [
  ".budou-this p",
  ".budou-this span",
  ".budou-this h1",
  ".budou-this h2",
  ".budou-this h3",
  ".budou-this h4",
  ".budou-this h5",
  ".budou-this h6",
  ".budou-this a",
  ".budou-this button",
  ".budou-this strong"
].join(", ");
const applyBudoux = () => {
  document.querySelectorAll(budouxSelectors).forEach((elem) => {
    parser.applyElement(elem);
  });
};
const applyBudouxStyles = () => {
  const elStyle = document.createElement("style");
  elStyle.innerHTML = budouxSelectors + ` {
  	word-break: keep-all;
  	overflow-wrap: break-word;
  }`;
  document.head.appendChild(elStyle);
};
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
    return;
  }
  document.addEventListener("DOMContentLoaded", fn);
}
ready(() => {
  applyBudoux();
  applyBudouxStyles();
});
