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
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(5));
        Label({
            text: 'TYPE\n' + TYPE_STR,
            fontSize: 60,
            fontFamily: "misaki_gothic",
            fill: 'white',
        }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.span(7));
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
