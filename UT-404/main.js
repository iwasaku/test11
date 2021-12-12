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
    { tabId: 0, text: "0", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 0, text: "1", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 0, text: "2", gridX: 2, gridY: 0, sampleId: 2, },
    { tabId: 0, text: "3", gridX: 3, gridY: 0, sampleId: 3, },

    { tabId: 0, text: "4", gridX: 0, gridY: 1, sampleId: 2, },
    { tabId: 0, text: "5", gridX: 1, gridY: 1, sampleId: 3, },
    { tabId: 0, text: "6", gridX: 2, gridY: 1, sampleId: 2, },
    { tabId: 0, text: "7", gridX: 3, gridY: 1, sampleId: 3, },

    { tabId: 0, text: "8", gridX: 0, gridY: 2, sampleId: 0, },
    { tabId: 0, text: "9", gridX: 1, gridY: 2, sampleId: 1, },
    { tabId: 0, text: "10", gridX: 2, gridY: 2, sampleId: 0, },
    { tabId: 0, text: "11", gridX: 3, gridY: 2, sampleId: 1, },

    { tabId: 0, text: "12", gridX: 0, gridY: 3, sampleId: 0, },
    { tabId: 0, text: "13", gridX: 1, gridY: 3, sampleId: 1, },
    { tabId: 0, text: "14", gridX: 2, gridY: 3, sampleId: 0, },
    { tabId: 0, text: "15", gridX: 3, gridY: 3, sampleId: 1, },

    { tabId: 0, text: "16", gridX: 0, gridY: 4, sampleId: 0, },
    { tabId: 0, text: "17", gridX: 1, gridY: 4, sampleId: 0, },
    { tabId: 0, text: "18", gridX: 2, gridY: 4, sampleId: 0, },
    { tabId: 0, text: "19", gridX: 3, gridY: 4, sampleId: 0, },

    { tabId: 0, text: "20", gridX: 0, gridY: 5, sampleId: 0, },
    { tabId: 0, text: "21", gridX: 1, gridY: 5, sampleId: 0, },
    { tabId: 0, text: "22", gridX: 2, gridY: 5, sampleId: 0, },
    { tabId: 0, text: "23", gridX: 3, gridY: 5, sampleId: 0, },

    { tabId: 0, text: "24", gridX: 0, gridY: 6, sampleId: 0, },
    { tabId: 0, text: "25", gridX: 1, gridY: 6, sampleId: 0, },
    { tabId: 0, text: "26", gridX: 2, gridY: 6, sampleId: 0, },
    { tabId: 0, text: "27", gridX: 3, gridY: 6, sampleId: 0, },

    // Track 2
    { tabId: 1, text: "0", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "1", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 1, text: "2", gridX: 2, gridY: 0, sampleId: 0, },
    { tabId: 1, text: "3", gridX: 3, gridY: 0, sampleId: 1, },

    { tabId: 1, text: "4", gridX: 0, gridY: 1, sampleId: 2, },
    { tabId: 1, text: "5", gridX: 1, gridY: 1, sampleId: 3, },
    { tabId: 1, text: "6", gridX: 2, gridY: 1, sampleId: 2, },
    { tabId: 1, text: "7", gridX: 3, gridY: 1, sampleId: 3, },

    { tabId: 1, text: "8", gridX: 0, gridY: 2, sampleId: 0, },
    { tabId: 1, text: "9", gridX: 1, gridY: 2, sampleId: 1, },
    { tabId: 1, text: "10", gridX: 2, gridY: 2, sampleId: 0, },
    { tabId: 1, text: "11", gridX: 3, gridY: 2, sampleId: 1, },

    { tabId: 1, text: "12", gridX: 0, gridY: 3, sampleId: 0, },
    { tabId: 1, text: "13", gridX: 1, gridY: 3, sampleId: 1, },
    { tabId: 1, text: "14", gridX: 2, gridY: 3, sampleId: 0, },
    { tabId: 1, text: "15", gridX: 3, gridY: 3, sampleId: 1, },

    { tabId: 1, text: "16", gridX: 0, gridY: 4, sampleId: 0, },
    { tabId: 1, text: "17", gridX: 1, gridY: 4, sampleId: 0, },
    { tabId: 1, text: "18", gridX: 2, gridY: 4, sampleId: 0, },
    { tabId: 1, text: "19", gridX: 3, gridY: 4, sampleId: 0, },

    { tabId: 1, text: "20", gridX: 0, gridY: 5, sampleId: 0, },
    { tabId: 1, text: "21", gridX: 1, gridY: 5, sampleId: 0, },
    { tabId: 1, text: "22", gridX: 2, gridY: 5, sampleId: 0, },
    { tabId: 1, text: "23", gridX: 3, gridY: 5, sampleId: 0, },

    { tabId: 1, text: "24", gridX: 0, gridY: 6, sampleId: 0, },
    { tabId: 1, text: "25", gridX: 1, gridY: 6, sampleId: 0, },
    { tabId: 1, text: "26", gridX: 2, gridY: 6, sampleId: 0, },
    { tabId: 1, text: "27", gridX: 3, gridY: 6, sampleId: 0, },

    // Track 3
    { tabId: 2, text: "0", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "1", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 2, text: "2", gridX: 2, gridY: 0, sampleId: 0, },
    { tabId: 2, text: "3", gridX: 3, gridY: 0, sampleId: 1, },

    { tabId: 2, text: "4", gridX: 0, gridY: 1, sampleId: 2, },
    { tabId: 2, text: "5", gridX: 1, gridY: 1, sampleId: 3, },
    { tabId: 2, text: "6", gridX: 2, gridY: 1, sampleId: 2, },
    { tabId: 2, text: "7", gridX: 3, gridY: 1, sampleId: 3, },

    { tabId: 2, text: "8", gridX: 0, gridY: 2, sampleId: 0, },
    { tabId: 2, text: "9", gridX: 1, gridY: 2, sampleId: 1, },
    { tabId: 2, text: "10", gridX: 2, gridY: 2, sampleId: 0, },
    { tabId: 2, text: "11", gridX: 3, gridY: 2, sampleId: 1, },

    { tabId: 2, text: "12", gridX: 0, gridY: 3, sampleId: 0, },
    { tabId: 2, text: "13", gridX: 1, gridY: 3, sampleId: 1, },
    { tabId: 2, text: "14", gridX: 2, gridY: 3, sampleId: 0, },
    { tabId: 2, text: "15", gridX: 3, gridY: 3, sampleId: 1, },

    { tabId: 2, text: "16", gridX: 0, gridY: 4, sampleId: 0, },
    { tabId: 2, text: "17", gridX: 1, gridY: 4, sampleId: 0, },
    { tabId: 2, text: "18", gridX: 2, gridY: 4, sampleId: 0, },
    { tabId: 2, text: "19", gridX: 3, gridY: 4, sampleId: 0, },

    { tabId: 2, text: "20", gridX: 0, gridY: 5, sampleId: 0, },
    { tabId: 2, text: "21", gridX: 1, gridY: 5, sampleId: 0, },
    { tabId: 2, text: "22", gridX: 2, gridY: 5, sampleId: 0, },
    { tabId: 2, text: "23", gridX: 3, gridY: 5, sampleId: 0, },

    { tabId: 2, text: "24", gridX: 0, gridY: 6, sampleId: 0, },
    { tabId: 2, text: "25", gridX: 1, gridY: 6, sampleId: 0, },
    { tabId: 2, text: "26", gridX: 2, gridY: 6, sampleId: 0, },
    { tabId: 2, text: "27", gridX: 3, gridY: 6, sampleId: 0, },

    // Track 4
    { tabId: 3, text: "0", gridX: 0, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "1", gridX: 1, gridY: 0, sampleId: 1, },
    { tabId: 3, text: "2", gridX: 2, gridY: 0, sampleId: 0, },
    { tabId: 3, text: "3", gridX: 3, gridY: 0, sampleId: 1, },

    { tabId: 3, text: "4", gridX: 0, gridY: 1, sampleId: 2, },
    { tabId: 3, text: "5", gridX: 1, gridY: 1, sampleId: 3, },
    { tabId: 3, text: "6", gridX: 2, gridY: 1, sampleId: 2, },
    { tabId: 3, text: "7", gridX: 3, gridY: 1, sampleId: 3, },

    { tabId: 3, text: "8", gridX: 0, gridY: 2, sampleId: 0, },
    { tabId: 3, text: "9", gridX: 1, gridY: 2, sampleId: 1, },
    { tabId: 3, text: "10", gridX: 2, gridY: 2, sampleId: 0, },
    { tabId: 3, text: "11", gridX: 3, gridY: 2, sampleId: 1, },

    { tabId: 3, text: "12", gridX: 0, gridY: 3, sampleId: 0, },
    { tabId: 3, text: "13", gridX: 1, gridY: 3, sampleId: 1, },
    { tabId: 3, text: "14", gridX: 2, gridY: 3, sampleId: 0, },
    { tabId: 3, text: "15", gridX: 3, gridY: 3, sampleId: 1, },

    { tabId: 3, text: "16", gridX: 0, gridY: 4, sampleId: 0, },
    { tabId: 3, text: "17", gridX: 1, gridY: 4, sampleId: 0, },
    { tabId: 3, text: "18", gridX: 2, gridY: 4, sampleId: 0, },
    { tabId: 3, text: "19", gridX: 3, gridY: 4, sampleId: 0, },

    { tabId: 3, text: "20", gridX: 0, gridY: 5, sampleId: 0, },
    { tabId: 3, text: "21", gridX: 1, gridY: 5, sampleId: 0, },
    { tabId: 3, text: "22", gridX: 2, gridY: 5, sampleId: 0, },
    { tabId: 3, text: "23", gridX: 3, gridY: 5, sampleId: 0, },

    { tabId: 3, text: "24", gridX: 0, gridY: 6, sampleId: 0, },
    { tabId: 3, text: "25", gridX: 1, gridY: 6, sampleId: 0, },
    { tabId: 3, text: "26", gridX: 2, gridY: 6, sampleId: 0, },
    { tabId: 3, text: "27", gridX: 3, gridY: 6, sampleId: 0, },
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
            text: 'β0.0.1',
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
        this.sample = sampleTable[pad.sampleId];
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
