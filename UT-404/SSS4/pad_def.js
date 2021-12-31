const tabDefineTable = [
    { tabId: 0, text: "T1", gridX: 0, gridY: -1, sampleId: -1, },
    { tabId: 1, text: "T2", gridX: 1, gridY: -1, sampleId: -1, },
    { tabId: 2, text: "T3", gridX: 2, gridY: -1, sampleId: -1, },
    { tabId: 3, text: "T4", gridX: 3, gridY: -1, sampleId: -1, },
    { tabId: 4, text: "T5", gridX: 4, gridY: -1, sampleId: -1, },
];

//gridX:0~3
//gridY:0~6
const padDefineTable = [
    // Track 1
    { tabId: 0, text: "デ", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 0, text: "パ", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 0, text: "ラ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 0, text: "フ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 0, text: "ラ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 0, text: "プ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 0, text: "魔", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 0, text: "コ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 0, text: "エ", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 0, text: "の", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 0, text: "よ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 0, text: "ギ", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 0, text: "ト", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 0, text: "乱", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 0, text: "ラ", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 0, text: "オ", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 0, text: "Ｃ", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 0, text: "デ", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 0, text: "ゲ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 0, text: "導", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 0, text: "改", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 0, text: "再", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 0, text: "電", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 0, text: "原", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 0, text: "粒", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 0, text: "め", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 0, text: "と", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 0, text: "ま", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 2
    { tabId: 1, text: "眠", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "君", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 1, text: "サ", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 1, text: "ピ", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 1, text: "熱", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 1, text: "パ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 1, text: "ダ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 1, text: "イ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 1, text: "進", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 1, text: "キ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 1, text: "相", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 1, text: "エ", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 1, text: "プ", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 1, text: "末", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 1, text: "小", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 1, text: "見", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 1, text: "赤", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 1, text: "な", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 1, text: "イ", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 1, text: "強", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 1, text: "本", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 1, text: "無", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 1, text: "素", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 1, text: "元", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 1, text: "勇", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 1, text: "イ", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 1, text: "ラ", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 1, text: "勝", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 3
    { tabId: 2, text: "オ", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "あ", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 2, text: "や", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 2, text: "完", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 2, text: "ふ", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 2, text: "性", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 2, text: "開", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 2, text: "無", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 2, text: "や", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 2, text: "夜", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 2, text: "見", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 2, text: "ど", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 2, text: "伏", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 2, text: "幾", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 2, text: "逃", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 2, text: "指", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 2, text: "ケ", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 2, text: "觸", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 2, text: "我", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 2, text: "廃", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 2, text: "目", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 2, text: "デ", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 2, text: "京", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 2, text: "サ", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 2, text: "予", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 2, text: "15", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 2, text: "何", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 2, text: "風", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 4
    { tabId: 3, text: "無", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "世", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 3, text: "使", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 3, text: "ス", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 3, text: "指", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 3, text: "ゴ", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 3, text: "フ", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 3, text: "清", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 3, text: "切", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 3, text: "キ", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 3, text: "こ", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 3, text: "創", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 3, text: "ず", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 3, text: "選", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 3, text: "金", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 3, text: "建", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 3, text: "誓", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 3, text: "エ", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 3, text: "か", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 3, text: "ま", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 3, text: "傘", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 3, text: "螺", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 3, text: "た", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 3, text: "走", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 3, text: "再", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 3, text: "離", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 3, text: "会", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 3, text: "居", gridX: 3, gridY: 6, sampleId: 27, },

    // Track 5
    { tabId: 4, text: "深", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 4, text: "暗", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 4, text: "水", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 4, text: "錆", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 4, text: "眠", gridX: 0, gridY: 1, sampleId: 4, },
    { tabId: 4, text: "何", gridX: 1, gridY: 1, sampleId: 5, },
    { tabId: 4, text: "燃", gridX: 2, gridY: 1, sampleId: 6, },
    { tabId: 4, text: "サ", gridX: 3, gridY: 1, sampleId: 7, },

    { tabId: 4, text: "重", gridX: 0, gridY: 2, sampleId: 8, },
    { tabId: 4, text: "見", gridX: 1, gridY: 2, sampleId: 9, },
    { tabId: 4, text: "泥", gridX: 2, gridY: 2, sampleId: 10, },
    { tabId: 4, text: "深", gridX: 3, gridY: 2, sampleId: 11, },

    { tabId: 4, text: "鈍", gridX: 0, gridY: 3, sampleId: 12, },
    { tabId: 4, text: "揺", gridX: 1, gridY: 3, sampleId: 13, },
    { tabId: 4, text: "甘", gridX: 2, gridY: 3, sampleId: 14, },
    { tabId: 4, text: "祈", gridX: 3, gridY: 3, sampleId: 15, },

    { tabId: 4, text: "忘", gridX: 0, gridY: 4, sampleId: 16, },
    { tabId: 4, text: "手", gridX: 1, gridY: 4, sampleId: 17, },
    { tabId: 4, text: "未", gridX: 2, gridY: 4, sampleId: 18, },
    { tabId: 4, text: "消", gridX: 3, gridY: 4, sampleId: 19, },

    { tabId: 4, text: "冷", gridX: 0, gridY: 5, sampleId: 20, },
    { tabId: 4, text: "遠", gridX: 1, gridY: 5, sampleId: 21, },
    { tabId: 4, text: "光", gridX: 2, gridY: 5, sampleId: 22, },
    { tabId: 4, text: "目", gridX: 3, gridY: 5, sampleId: 23, },

    { tabId: 4, text: "り", gridX: 0, gridY: 6, sampleId: 24, },
    { tabId: 4, text: "光", gridX: 1, gridY: 6, sampleId: 25, },
    { tabId: 4, text: "深", gridX: 2, gridY: 6, sampleId: 26, },
    { tabId: 4, text: "照", gridX: 3, gridY: 6, sampleId: 27, },
];
