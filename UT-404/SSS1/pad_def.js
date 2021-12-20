//gridX:0~3
//gridY:0~6
const padDefineTable = [
    // Track 1
    { tabId: 0, text: "就", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 0, text: "安", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 0, text: "永", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 0, text: "入", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 0, text: "導", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 0, text: "催", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 0, text: "春", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 0, text: "休", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 0, text: "作", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 0, text: "先", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 0, text: "音", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 0, text: "冬", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 0, text: "中", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 0, text: "同", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 0, text: "公", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 0, text: "岡", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 0, text: "農", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 0, text: "懇", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 0, text: "嫁", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 0, text: "匕", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 0, text: "拝", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 0, text: "請", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 0, text: "あ", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 0, text: "ド", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 0, text: "無", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 0, text: "も", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 0, text: "バ", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 0, text: "一", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 2
    { tabId: 1, text: "恋", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "告", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 1, text: "色", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 1, text: "サ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 1, text: "ね", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 1, text: "抜", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 1, text: "み", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 1, text: "コ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 1, text: "世", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 1, text: "ア", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 1, text: "急", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 1, text: "臨", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 1, text: "恋", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 1, text: "速", gridX: 1, gridY: 3, sampleId: 22, },
    { tabId: 1, text: "効", gridX: 2, gridY: 3, sampleId: 23, },
    { tabId: 1, text: "共", gridX: 3, gridY: 3, sampleId: 24, },

    { tabId: 1, text: "連", gridX: 0, gridY: 4, sampleId: 13, },
    { tabId: 1, text: "特", gridX: 1, gridY: 4, sampleId: 25, },
    { tabId: 1, text: "冒", gridX: 2, gridY: 4, sampleId: 26, },
    { tabId: 1, text: "セ", gridX: 3, gridY: 4, sampleId: 27, },

    { tabId: 1, text: "ア", gridX: 0, gridY: 5, sampleId: 14, },
    { tabId: 1, text: "我", gridX: 1, gridY: 5, sampleId: 15, },
    { tabId: 1, text: "あ", gridX: 2, gridY: 5, sampleId: 16, },
    { tabId: 1, text: "も", gridX: 3, gridY: 5, sampleId: 17, },

    { tabId: 1, text: "抜", gridX: 0, gridY: 6, sampleId: 18, },
    { tabId: 1, text: "ト", gridX: 1, gridY: 6, sampleId: 19, },
    { tabId: 1, text: "ス", gridX: 2, gridY: 6, sampleId: 20, },
    { tabId: 1, text: "臨", gridX: 3, gridY: 6, sampleId: 21, },

    // Track 3
    { tabId: 2, text: "絶", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "ク", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 2, text: "し", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 2, text: "バ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 2, text: "キ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 2, text: "乱", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 2, text: "ホ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 2, text: "ド", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 2, text: "ホ", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 2, text: "に", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 2, text: "ワ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 2, text: "に", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 2, text: "前", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 2, text: "情", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 2, text: "ツ", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 2, text: "直", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 2, text: "メ", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 2, text: "１", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 2, text: "２", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 2, text: "一", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 2, text: "や", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 2, text: "天", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 2, text: "３", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 2, text: "ス", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 2, text: "パ", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 2, text: "ち", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 2, text: "な", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 2, text: "わ", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 4
    { tabId: 3, text: "チ", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "劣", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 3, text: "サ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 3, text: "変", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 3, text: "ダ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 3, text: "転", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 3, text: "も", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 3, text: "ダ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 3, text: "鈍", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 3, text: "ハ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 3, text: "ビ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 3, text: "ゴ", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 3, text: "元", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 3, text: "戦", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 3, text: "完", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 3, text: "ラ", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 3, text: "マ", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 3, text: "カ", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 3, text: "Ｉ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 3, text: "あ", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 3, text: "マ", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 3, text: "母", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 3, text: "フ", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 3, text: "ラ", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 3, text: "太", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 3, text: "ポ", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 3, text: "大", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 3, text: "ポ", gridX: 3, gridY: 6, sampleId: 27, },
];
