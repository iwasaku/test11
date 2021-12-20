//gridX:0~3
//gridY:0~6
const padDefineTable = [
    // Track 1
    { tabId: 0, text: "ポ", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 0, text: "ホ", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 0, text: "キ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 0, text: "例", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 0, text: "も", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 0, text: "ど", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 0, text: "Ｈ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 0, text: "自", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 0, text: "ピ", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 0, text: "ル", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 0, text: "憂", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 0, text: "絵", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 0, text: "抜", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 0, text: "ル", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 0, text: "詠", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 0, text: "カ", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 0, text: "素", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 0, text: "眠", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 0, text: "も", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 0, text: "夜", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 0, text: "逆", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 0, text: "暖", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 0, text: "あ", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 0, text: "産", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 0, text: "眩", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 0, text: "報", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 0, text: "裏", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 0, text: "た", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 2
    { tabId: 1, text: "手", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "投", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 1, text: "る", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 1, text: "Ｌ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 1, text: "筋", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 1, text: "フ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 1, text: "ダ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 1, text: "さ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 1, text: "ア", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 1, text: "ヒ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 1, text: "カ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 1, text: "雨", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 1, text: "バ", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 1, text: "キ", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 1, text: "メ", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 1, text: "足", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 1, text: "紫", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 1, text: "Ｌ", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 1, text: "デ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 1, text: "ノ", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 1, text: "手", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 1, text: "矢", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 1, text: "い", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 1, text: "お", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 1, text: "バ", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 1, text: "コ", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 1, text: "川", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 1, text: "壁", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 3
    { tabId: 2, text: "１", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "イ", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 2, text: "マ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 2, text: "興", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 2, text: "エ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 2, text: "丼", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 2, text: "据", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 2, text: "天", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 2, text: "ミ", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 2, text: "越", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 2, text: "キ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 2, text: "白", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 2, text: "忍", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 2, text: "入", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 2, text: "脳", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 2, text: "進", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 2, text: "水", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 2, text: "め", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 2, text: "ラ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 2, text: "は", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 2, text: "そ", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 2, text: "日", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 2, text: "ご", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 2, text: "日", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 2, text: "ば", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 2, text: "ス", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 2, text: "そ", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 2, text: "行", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 4
    { tabId: 3, text: "チ", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "は", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 3, text: "イ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 3, text: "サ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 3, text: "な", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 3, text: "さ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 3, text: "知", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 3, text: "あ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 3, text: "１", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 3, text: "３", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 3, text: "10", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 3, text: "千", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 3, text: "動", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 3, text: "深", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 3, text: "紙", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 3, text: "リ", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 3, text: "簡", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 3, text: "幼", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 3, text: "モ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 3, text: "千", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 3, text: "何", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 3, text: "君", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 3, text: "忘", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 3, text: "胸", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 3, text: "ど", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 3, text: "こ", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 3, text: "ど", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 3, text: "全", gridX: 3, gridY: 6, sampleId: 27, },
];
