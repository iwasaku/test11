//gridX:0~3
//gridY:0~6
const padDefineTable = [
    // Track 1
    { tabId: 0, text: "ス", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 0, text: "纏", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 0, text: "至", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 0, text: "フ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 0, text: "理", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 0, text: "ス", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 0, text: "堪", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 0, text: "泣", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 0, text: "ト", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 0, text: "フ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 0, text: "習", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 0, text: "再", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 0, text: "初", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 0, text: "闇", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 0, text: "甘", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 0, text: "初", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 0, text: "誘", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 0, text: "陽", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 0, text: "通", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 0, text: "大", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 0, text: "火", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 0, text: "お", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 0, text: "最", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 0, text: "究", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 0, text: "大", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 0, text: "大", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 0, text: "反", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 0, text: "よ", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 2
    { tabId: 1, text: "お", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "撮", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 1, text: "止", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 1, text: "し", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 1, text: "ｎ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 1, text: "晴", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 1, text: "冷", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 1, text: "カ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 1, text: "欠", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 1, text: "倒", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 1, text: "守", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 1, text: "徹", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 1, text: "モ", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 1, text: "と", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 1, text: "小", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 1, text: "８", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 1, text: "中", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 1, text: "い", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 1, text: "ト", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 1, text: "ジ", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 1, text: "パ", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 1, text: "ゴ", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 1, text: "Ｖ", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 1, text: "Ｈ", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 1, text: "Ｓ", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 1, text: "Ｖ", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 1, text: "Ｖ", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 1, text: "弱", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 3
    { tabId: 2, text: "平", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "ハ", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 2, text: "ナ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 2, text: "君", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 2, text: "仕", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 2, text: "パ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 2, text: "フ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 2, text: "思", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 2, text: "が", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 2, text: "ネ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 2, text: "遠", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 2, text: "寝", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 2, text: "風", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 2, text: "心", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 2, text: "雨", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 2, text: "揺", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 2, text: "８", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 2, text: "ミ", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 2, text: "な", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 2, text: "リ", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 2, text: "桃", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 2, text: "Ａ", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 2, text: "灰", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 2, text: "ひ", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 2, text: "い", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 2, text: "飛", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 2, text: "決", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 2, text: "共", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 4
    { tabId: 3, text: "遥", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "お", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 3, text: "感", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 3, text: "散", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 3, text: "な", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 3, text: "溺", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 3, text: "や", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 3, text: "天", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 3, text: "Ｊ", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 3, text: "め", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 3, text: "変", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 3, text: "術", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 3, text: "ハ", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 3, text: "離", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 3, text: "さ", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 3, text: "平", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 3, text: "六", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 3, text: "殺", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 3, text: "煌", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 3, text: "言", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 3, text: "見", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 3, text: "に", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 3, text: "Ｗ", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 3, text: "慣", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 3, text: "エ", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 3, text: "空", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 3, text: "メ", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 3, text: "僕", gridX: 3, gridY: 6, sampleId: 27, },
];
