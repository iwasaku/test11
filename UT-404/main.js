phina.globalize();
console.log = function () { };  // ログを出す時にはコメントアウトする

const SCREEN_WIDTH = 900;                   // スクリーン幅
const SCREEN_HEIGHT = 1600;                 // スクリーン高さ
const SCREEN_CENTER_X = SCREEN_WIDTH / 2;   // スクリーン幅の半分
const SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;  // スクリーン高さの半分
const PAD_SIZE = 96 + 96;                        // パッドのサイズ

let group0 = null;

var tabButtonArray = [];
var padButtonArray = [];

const tabDefineTable = [
    { tabId: 0, text: "T1", gridX: 0, gridY: -1, sampleId: -1, },
    { tabId: 1, text: "T2", gridX: 1, gridY: -1, sampleId: -1, },
    { tabId: 2, text: "T3", gridX: 2, gridY: -1, sampleId: -1, },
    { tabId: 3, text: "T4", gridX: 3, gridY: -1, sampleId: -1, },
];

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

// ローディング画面
phina.define('LoadingScene', {
    superClass: 'DisplayScene',

    init: function (options) {
        this.superInit(options);
        // 背景色
        this.backgroundColor = 'black';
        var self = this;
        var loader = phina.asset.AssetLoader();

        // 明滅するラベル
        let label = phina.display.Label({
            text: "",
            fontSize: 64,
            fill: 'white',
        }).addChildTo(this).setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);

        // ロードが進行したときの処理
        loader.onprogress = function (e) {
            // 進捗具合を％で表示する
            label.text = "{0}%".format((e.progress * 100).toFixed(0));
        };

        // ローダーによるロード完了ハンドラ
        loader.onload = function () {
            // Appコアにロード完了を伝える（==次のSceneへ移行）
            self.flare('loaded');
        };

        // ロード開始
        loader.load(options.assets);
    },

});
/*
 */
phina.define("InitScene", {
    // 継承
    superClass: 'DisplayScene',
    // 初期化
    init: function (option) {
        // 親クラス初期化
        this.superInit(option);
        // 背景色
        this.backgroundColor = 'black';
        // ラベル
        Label({
            text: '',
            fontSize: 48,
            fill: 'yellow',
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
    },
    update: function (app) {
        this.exit();
    }
});
/*
 */
phina.define("TitleScene", {
    // 継承
    superClass: 'DisplayScene',
    // 初期化
    init: function (option) {
        // 親クラス初期化
        this.superInit(option);
        // 背景色
        this.backgroundColor = 'black';
        // ラベル
        Label({
            text: 'UT-404',
            fontSize: 160,
            fontFamily: "misaki_gothic",
            fill: 'white',
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center());
        Label({
            text: 'β0.0.2',
            fontSize: 60,
            fontFamily: "misaki_gothic",
            fill: 'white',
        }).addChildTo(this).setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y + SCREEN_HEIGHT * 1 / 8);
        Label({
            text: 'TAP TO START',
            fontSize: 80,
            fontFamily: "misaki_gothic",
            fill: 'white',
        }).addChildTo(this).setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y + SCREEN_HEIGHT * 1 / 4);
    },
    // タッチで次のシーンへ
    onpointstart: function () {
        this.exit();
    },
});
/*
*/
const PAD_STATUS = defineEnum({
    WAIT: {
        value: 0,
        string: 'wait'
    },
    PUSH: {
        value: 1,
        string: 'push'
    },
});

let oldTabId = -1;
let nowTabId = 0;

phina.define('MainScene', {
    superClass: 'DisplayScene',

    init: function (option) {
        that = this;
        // 親クラス初期化
        this.superInit(option);

        // 背景色
        this.backgroundColor = 'black';

        group0 = DisplayElement().addChildTo(this);

        // タブ設定
        for (let ii = 0; ii < 4; ii++) {
            let tab = tabDefineTable[ii];
            let tabButton = prjButton(tab).addChildTo(group0);
            tabButton.onpointstart = function () {
                if (tabButton.status !== PAD_STATUS.WAIT) return;
                oldTabId = nowTabId;
                nowTabId = tabButton.tabId;
            }
            tabButton.onpointmove = function () {
            }
            tabButton.onpointend = function () {
            };
            tabButton.update = function () {
            };
            tabButtonArray.push(tabButton);
        }

        // PAD設定
        for (let ii = 0; ii < padDefineTable.length; ii++) {
            let pad = padDefineTable[ii];
            let padButton = prjButton(pad).addChildTo(group0);
            padButton.onpointstart = function () {
                if (padButton.status !== PAD_STATUS.WAIT) return;
                padButton.status = PAD_STATUS.PUSH;
                padButton.fill = 'red';
                padButton.sample.play();
            }
            padButton.onpointmove = function () {
            }
            padButton.onpointend = function () {
                if (padButton.status !== PAD_STATUS.PUSH) return;
                padButton.status = PAD_STATUS.WAIT;
                padButton.fill = padButton.fillColor;
                padButton.sample.stop();
            };
            padButton.update = function () {
            };
            padButtonArray.push(padButton);
        }
    },
    update: function (app) {
        if (oldTabId !== nowTabId) {
            for (let ii = 0; ii < self.padButtonArray.length; ii++) {
                let tmp = padButtonArray[ii];
                if (tmp.tabId !== nowTabId) {
                    tmp.alpha = 0;
                    tmp.interactive = false;
                } else {
                    tmp.alpha = 1;
                    tmp.interactive = true;
                }
            }
        }
    }
});

phina.main(function () {
    var app = GameApp({
        startLabel: 'init',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        assets: ASSETS,
        // シーンのリストを引数で渡す
        scenes: [
            {
                className: 'InitScene',
                label: 'init',
                nextLabel: 'title',
            },

            {
                className: 'TitleScene',
                label: 'title',
                nextLabel: 'main',
            },
            {
                className: 'MainScene',
                label: 'main',
                nextLabel: 'main',
            },
        ]
    });

    // iOSなどでユーザー操作がないと音がならない仕様対策
    // 起動後初めて画面をタッチした時に『無音』を鳴らす
    app.domElement.addEventListener('touchend', function dummy() {
        var s = phina.asset.Sound();
        s.loadFromBuffer();
        s.play().stop();
        app.domElement.removeEventListener('touchend', dummy);
    });

    app.run();
});

/**
 * ボタン
 */
phina.define('prjButton', {
    superClass: 'RectangleShape',
    init: function (pad) {
        this.superInit({
            width: PAD_SIZE,
            height: PAD_SIZE,
            cornerRadius: 10,
            stroke: 'black',
        });
        this.label = Label({
            text: pad.text + "",
            fontSize: PAD_SIZE * 0.8,
            fontFamily: "misaki_gothic",
            fill: 'black',
        }).addChildTo(this);
        this.x = 152 + pad.gridX * (PAD_SIZE + 8);
        this.y = 300 + pad.gridY * (PAD_SIZE + 8);
        this.alpha = 1.0;
        this.interactive = true;

        if (pad.tabId === 0) this.fillColor = 'white';
        if (pad.tabId === 1) this.fillColor = 'lightblue';
        if (pad.tabId === 2) this.fillColor = 'yellowgreen';
        if (pad.tabId === 3) this.fillColor = 'yellow';
        this.fill = this.fillColor;

        this.status = PAD_STATUS.WAIT;
        if (pad.sampleId >= 0) this.sample = sampleTable[pad.tabId][pad.sampleId];
        else this.sample = null;
        this.tabId = pad.tabId;

        // 見た目の位置合わせ
        this.label.x += 5;
        this.label.y += 4;

    },
    setSize: function (width, height) {
        this.width = width;
        this.height = height;
    }
});
