phina.globalize();
console.log = function () { };  // ログを出す時にはコメントアウトする

const SCREEN_WIDTH = 900;                   // スクリーン幅
const SCREEN_HEIGHT = 1600;                 // スクリーン高さ
const SCREEN_CENTER_X = SCREEN_WIDTH / 2;   // スクリーン幅の半分
const SCREEN_CENTER_Y = SCREEN_HEIGHT / 2;  // スクリーン高さの半分


// 表示プライオリティは 0：奥 → 9：手前 の順番
let group0 = null;  // BG
let group1 = null;  // タブ1
let group2 = null;  // タブ2
let group3 = null;  // タブ3
let group4 = null;  // タブ4

var padButtonArray = [];

const padDefineTable = [
    { text: "", gridX: 0, gridY: 0, width: 0, height: 0, },
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

phina.define('MainScene', {
    superClass: 'DisplayScene',

    init: function (option) {
        that = this;
        // 親クラス初期化
        this.superInit(option);
        // 背景色
        this.backgroundColor = 'black';//    this.backgroundColor = '#ffaaaa';

        group0 = DisplayElement().addChildTo(this);   // BG
        group1 = DisplayElement().addChildTo(this);   // タブ0
        group2 = DisplayElement().addChildTo(this);   // タブ1
        group3 = DisplayElement().addChildTo(this);   // タブ2
        group4 = DisplayElement().addChildTo(this);   // タブ3

        // ラベル設定
        padButton = prjButton("夏").addChildTo(group1)
            .setPosition(this.gridX.span(4), this.gridY.span(6));
        padButton.alpha = 1.0;
        // タッチ有効
        padButton.setInteractive(true);
        // タッチ時の処理
        padButton.onpointstart = function () {
            if (padButton.status !== PAD_STATUS.WAIT) return;
            padButton.status = PAD_STATUS.PUSH;
            SoundManager.play("test1");
        }
        padButton.onpointmove = function () {
        }
        padButton.onpointend = function () {
            if (padButton.status !== PAD_STATUS.PUSH) return;
            padButton.status = PAD_STATUS.WAIT;
            SoundManager.stop("test1");
        };
        padButton.update = function () {
        };
    },
    update: function (app) {
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
    init: function (txt) {
        this.superInit({
            width: 96,
            height: 96,
            cornerRadius: 10,
            fill: 'white',
            stroke: 'blue',
        });
        this.label = Label({
            text: txt + "",
            fontSize: 96 * 0.8,
            fontFamily: "misaki_gothic",
            fill: 'black',
        }).addChildTo(this);
        // 見た目の位置合わせ
        this.label.x += 5;
        this.label.y += 4;

        this.status = PAD_STATUS.WAIT;
    },
    setSize: function (width, height) {
        this.width = width;
        this.height = height;
    }
});
