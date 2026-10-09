// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
     ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main Sequence",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -86,
              "top": -225,
              "angle": 0,
              "width": 544,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "【研究協力へのお願い及び案内事項】",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 630,
              "height": 348.49,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "大学での学術研究の一環として\nオンライン実験を行います。\n\n・参加の途中辞めること可能\n・すべての回答は匿名\n・研究目的以外の場面では使用しません\n\n本事件に関する疑問や懸念点があればこちらに\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 175,
              "angle": 0,
              "width": 369.68,
              "height": 31.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "momoko47224@gmail.com",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "28",
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "rect",
              "left": 287.14,
              "top": 250,
              "angle": 0,
              "width": 144.56,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black"
            },
            {
              "type": "i-text",
              "left": 289.92,
              "top": 250,
              "angle": 0,
              "width": 64,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "次へ",
              "fontStyle": "normal",
              "fontWeight": "bold",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 288.16,
              "top": 250,
              "angle": 0,
              "width": 144.2,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "start"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click": "start"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Notice "
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 699.84,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "今からいくつかのニュースを読んでもらいます。\nその後、質問に答えてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
          },
          "title": "Staring ",
          "timeout": "2000"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -100,
              "angle": 0,
              "width": 560,
              "height": 39.55,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "スタートボタンを押してください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "35",
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 11.07,
              "angle": 0,
              "width": 480,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "スタートすることで実験に同意することとみなします",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "circle",
              "left": 0,
              "top": 185.02,
              "angle": 0,
              "width": 140.89,
              "height": 140.89,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#0070d9"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": 189.7,
              "angle": 0,
              "width": 112.17,
              "height": 112.17,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "start"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 188.99,
              "angle": 0,
              "width": 128,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "#ffffff",
              "text": "スタート",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click": "start"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Staring with button "
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "A",
      "skip": "${this.state.participantID % 2 == 0}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"hiroba.jpg\"] }",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003E消えたトー横キッズ　たまり場にキッチンカーで集まれず！？\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F3\u002F9 06:00 配信\u003C\u002Fdiv\u003E\n    \n \n    \u003Cdiv class=\"news-body\"\u003E\n        トー横からキッズがいなくなる？　東京・新宿区歌舞伎町の新宿東宝ビル周辺の通称〝トー横〟には行き場のない若者たちが集まっている。オーバードーズ（薬の過剰摂取）など社会問題化するトー横に変化の兆しがあるという。\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横を取材するジャーナリストは「１５日にトー横を訪れたら若者がいつもたむろしている場所にキッチンカーがあって、トー横キッズたちはまったくいませんでした」と話した。\u003Cbr\u003E\u003Cbr\u003E\n\n　現在、歌舞伎町シネシティ広場では新宿区が後援となって、「ＫＡＢＵＫＩＣＨＯ　ＫＩＴＣＨＥＮＣＡＲ　ＰＡＲＫ」というキッチンカーが集まるイベントが行われている。主催の一般社団法人歌舞伎町タウン・マネージメントの公式サイトによると、「キッチンカー設置による道路利活用の試行実験」だという。\u003Cbr\u003E\u003Cbr\u003E\n\n　これまでトー横では未成年淫行やケンカ、窃盗など事件が報じられてきた。治安の悪いイメージがあることは否定できない。「キッチンカーにはお客さんもいてにぎわっていました。トー横キッズの居場所はなさそうでしたね。今後も定期的にキッチンカーが来るのであれば、キッズたちは集まれなくなるでしょう。トー横のイメージを変えることに成功するかもしれません」（同）\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横に集まっていたキッズたちはどこへ行くのか。「別の場所を見つけて集まることになるとは思いますが、結束が強いわけでもないので場所が変わると人数は減るでしょう」（同）\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横が変わるかもしれない。\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,237件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤wkj******** \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eこれで変わるんだったらすでに解決しているし、これは問題を見えないようにしてるだけじゃない？なんの支援ももらえず可哀そうだけど\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E12,405\u003C\u002Fspan\u003E 👎 120\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eそれで家に帰れるわけでもないし、それぞれ抱えている問題を把握するのが先になればと思いますが。。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E9,850\u003C\u002Fspan\u003E 👎 85\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eこれボランティア団体とかでキッズとか受け入れてくれないと別にこうする意味なくない？\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E7,213\u003C\u002Fspan\u003E 👎 67\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "hiroba.jpg": "embedded\u002Fb8a57ec70bd21664400808f25925124831100f1cb2fc8e3d9dd1ac0354f5cb20.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Good Comment News 3"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003Eトー横に集う理由は？「学校よりも楽しい」「死なずに生きていきたい」若者の本音\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F3\u002F8 10:27 配信\u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"news-body\"\u003E\n      \u003Cstrong\u003E■「学校よりも楽しい」 緩やかな繋がりが入り口に\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cbr\u003E\n若者たちがトー横に足を踏み入れるきっかけは、日常の延長線上にある。トー横歴3年半で週一で通っている、18歳のらむさんは「仲の良かった友達に歌舞伎町を紹介された。年齢が近い子がたくさんいて、学校にいるよりも楽しい。居場所として感じられるようになった」と語る。\u003Cbr\u003E\u003Cbr\u003E\n\u003Cstrong\u003E■ なぜ新宿・トー横なのか？\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cbr\u003E\n池袋や渋谷といった他の繁華街ではなく、なぜ新宿・トー横なのか。トー横歴約2年の20歳のゆうたぐさんは、「新宿にいるグループは精神疾患を抱えている子も多いと感じる。同じ悩みを持っていると共感を得られ、落ち着く。健常者とは分かり合えない連帯感がある」との見方を示す。\u003Cbr\u003E\u003Cbr\u003E\nトー横歴1年、16歳のゆうさんは、以前は路上にいる若者たちを「迷惑な奴らだ」と嫌っていたが、SNSで出会った友人の紹介で通い始めた。実際に接してみると「性格的にはみんな優しくて、相談に乗ってくれる。辛いことを経験しているからこそ、その人にしかわからないことがあって、すごくいい街だと思った」と、自身の抱える悩みへの理解者がそこにいたことを明かした。\u003Cbr\u003E\u003Cbr\u003E\nトー横歴2年半、猫山さんも「親に認められないことが、東横のキッズには分かち合える」と同調。こうした家庭環境や精神的な境遇の近さが、若者たちを引き寄せる強い「磁力」となっている。\u003Cbr\u003E\u003Cbr\u003E\n\u003Cstrong\u003E■ 「真っ向から否定しないで」 大人たちへの訴え\u003C\u002Fstrong\u003E\u003C\u003Cbr\u003E\u003Cbr\u003E\n　一方で、大人たちや警察との溝は深い。ちなちなさんは「警察の尋問が威圧的でトラウマになった。真っ向から否定するのは良くない。もう少し視野を広げてほしい」と世の大人に訴える。これに対し元警視庁の平野晃也氏は「警察の対応は伝統的に変わっておらず、時代の変化に対応できていない」と返した。\u003Cbr\u003E\u003Cbr\u003E\n\n　ゆうさんは「トー横をなくすよりも、トー横に来る人を減らす努力を大人はしたほうがいい。親も子育ての仕方を学べる機会があれば」と語った。\u003Cbr\u003E\u003Cbr\u003E\n\n\u003Cstrong\u003E■ 「何回間違っても、立ち上がって死なずに生きていきたい」\u003C\u002Fstrong\u003E\u003C\u003Cbr\u003E\u003Cbr\u003E\n　若者たちはそれぞれの未来についても語った。らむさんは「高卒認定を取り、社会貢献を目的とした会社を作りたい」と明かし、ゆうたぐさんは「ゲームクリエイターになりたい。トー横の関係は大事にしながら、大学合格に向けて走り出している」と前向きな姿勢を見せた。\u003Cbr\u003E\u003Cbr\u003E\n\n　うにさんは「結局、みんな幸せになりたいだけ。何回間違っても、ちゃんと立ち上がって、死なずに生きていきたい」とした。\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,452件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤yuhf******** \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eトーヨコに行くな、集まる子は補導して、管理できるところに戻しておしまい、じゃなくて、集まる子どもたちから、ヒントをたくさんもらってほしい。本当に子どもたちが必要としている、第三の居場所を、大人たちがつくる、守る責任があると思います。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E12,405\u003C\u002Fspan\u003E 👎 120\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 sfh*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E彼らは時代の鏡、精いっぱい生きているから集まるんだよ大人が同じ目線になって考えないと\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E8,321\u003C\u002Fspan\u003E 👎 75\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 iwu2****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E自分なり頑張って何かしようとして最後の手段としていくんだろうね。悪い目で見るのじゃなくてなにかの具体的な助けでいい方向に進む可能性を持ってるね\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E4,213\u003C\u002Fspan\u003E 👎 42\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Good comment News2 "
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"news-image.jpg\"] }",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003Eトー横キッズ一斉指導、警視庁などが行う\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F5\u002F1(金) 12:00 配信\u003C\u002Fdiv\u003E\n   \n    \u003Cdiv class=\"news-body\"\u003E\n        東京都新宿区歌舞伎町の「トー横」と呼ばれる一帯に若者らが集まり犯罪に巻き込まれるケースが相次いでいるとして、警視庁や都などは24日、周辺のホテルへの立ち入り、薬局への広報啓発など約160人態勢で一斉対策を実施した。\u003Cbr\u003E\u003Cbr\u003E\n        新宿区や商店街関係者とも連携し、官民合同パトロールを実施。ホテルなどに売買春が疑われる客の通報を、インターネットカフェなどに年齢確認の徹底を求めた。また「トー横」では薬のオーバードーズ（過剰摂取）も問題になっており、薬局に対し偽造された処方箋や薬の大量購入への注意を呼び掛けた。\u003Cbr\u003E\u003Cbr\u003E\n         また、周辺のパトロールを強化するとともに、若者が相談できる臨時ブースを設置するなどの対応を進めている。\u003Cbr\u003E\u003Cbr\u003E\n\n■トー横キッズはなにをしているのか\u003Cbr\u003E\u003Cbr\u003E\n新宿区の報告によると補導数は700人弱で5年間10倍程度増加したという。親との不仲やDV、いじめなどにより居場所を失い、強い孤独を感じて、同じような思いや経験を持つ仲間を求めて集まっていると東京都議会から明らかにした。実際取材チームが現場に向かい、観察してみた結果、オーバードーズしているか犯罪に関わっていること以外の様子も発見された。飲酒、飲食などただ居座り、その場の占有しているようであった。\u003Cbr\u003E\u003Cbr\u003E\n警視庁の担当者は「トー横周辺では『悪意ある大人』が少年たちを食い物にする卑劣な犯行に及んでいる。表向き華やかに見えても、自分の身に危険が及ぶ可能性があることを知ってもらい、子どもを守る取り組みを強力に推進する」と話した。\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,452件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤wkj******** \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E帰りたくても帰れない理由がある子がほとんど。ただ排除するんじゃなくて、まずは安心して寝られる場所や、公費による24時間対応のシェルターを具体的に増やすべきかも\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E12,405\u003C\u002Fspan\u003E 👎 120\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E誰も好きで路上にいるわけじゃない。なぜそこにいるのか、一人ひとりの話を聞いてくれる専門家を配置してほしい。。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E9,850\u003C\u002Fspan\u003E 👎 85\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E歌舞伎町にしか居場所がないという状況自体が、私たちの社会の失敗だと思います。一時的な補導ではなく、継続的な心のケアと自立を助ける仕組みが必要です。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E7,213\u003C\u002Fspan\u003E 👎 67\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "news-image.jpg": "embedded\u002Fb999d827ffca439731da25067bed774b6f4c249476da38dc02fb6b8d84e726fb.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Good comment News 1 "
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "B",
      "skip": "${this.state.participantID % 2 != 0}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"hiroba.jpg\"] }",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003E消えたトー横キッズ　たまり場にキッチンカーで集まれず！？\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F3\u002F9 06:00 配信\u003C\u002Fdiv\u003E\n    \n \n    \u003Cdiv class=\"news-body\"\u003E\n        トー横からキッズがいなくなる？　東京・新宿区歌舞伎町の新宿東宝ビル周辺の通称〝トー横〟には行き場のない若者たちが集まっている。オーバードーズ（薬の過剰摂取）など社会問題化するトー横に変化の兆しがあるという。\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横を取材するジャーナリストは「１５日にトー横を訪れたら若者がいつもたむろしている場所にキッチンカーがあって、トー横キッズたちはまったくいませんでした」と話した。\u003Cbr\u003E\u003Cbr\u003E\n\n　現在、歌舞伎町シネシティ広場では新宿区が後援となって、「ＫＡＢＵＫＩＣＨＯ　ＫＩＴＣＨＥＮＣＡＲ　ＰＡＲＫ」というキッチンカーが集まるイベントが行われている。主催の一般社団法人歌舞伎町タウン・マネージメントの公式サイトによると、「キッチンカー設置による道路利活用の試行実験」だという。\u003Cbr\u003E\u003Cbr\u003E\n\n　これまでトー横では未成年淫行やケンカ、窃盗など事件が報じられてきた。治安の悪いイメージがあることは否定できない。「キッチンカーにはお客さんもいてにぎわっていました。トー横キッズの居場所はなさそうでしたね。今後も定期的にキッチンカーが来るのであれば、キッズたちは集まれなくなるでしょう。トー横のイメージを変えることに成功するかもしれません」（同）\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横に集まっていたキッズたちはどこへ行くのか。「別の場所を見つけて集まることになるとは思いますが、結束が強いわけでもないので場所が変わると人数は減るでしょう」（同）\u003Cbr\u003E\u003Cbr\u003E\n\n　トー横が変わるかもしれない。\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,237件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤wkj******** \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E早く排除なりなんなりしてよかった！治安改善してほしい\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E12,405\u003C\u002Fspan\u003E 👎 120\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eこれでもう集まらないなら安心\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E9,850\u003C\u002Fspan\u003E 👎 85\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E観光客とかがたくさん食べに行って明るい雰囲気にしてほしい\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E7,213\u003C\u002Fspan\u003E 👎 67\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "hiroba.jpg": "embedded\u002Fb8a57ec70bd21664400808f25925124831100f1cb2fc8e3d9dd1ac0354f5cb20.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Bad Comment News 3"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003Eトー横に集う理由は？「学校よりも楽しい」「死なずに生きていきたい」若者の本音\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F3\u002F8 10:27 配信\u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"news-body\"\u003E\n      \u003Cstrong\u003E■「学校よりも楽しい」 緩やかな繋がりが入り口に\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cbr\u003E\n若者たちがトー横に足を踏み入れるきっかけは、日常の延長線上にある。トー横歴3年半で週一で通っている、18歳のらむさんは「仲の良かった友達に歌舞伎町を紹介された。年齢が近い子がたくさんいて、学校にいるよりも楽しい。居場所として感じられるようになった」と語る。\u003Cbr\u003E\u003Cbr\u003E\n\u003Cstrong\u003E■ なぜ新宿・トー横なのか？\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cbr\u003E\nトー横歴約2年の20歳のゆうたぐさんは、「新宿にいるグループは精神疾患を抱えている子も多いと感じる。同じ悩みを持っていると共感を得られ、落ち着く。健常者とは分かり合えない連帯感がある」との見方を示す。\u003Cbr\u003E\u003Cbr\u003E\nトー横歴1年、16歳のゆうさんは、実際に接してみると「性格的にはみんな優しくて、相談に乗ってくれる。辛いことを経験しているからこそ、その人にしかわからないことがあって、すごくいい街だと思った」と、自身の抱える悩みへの理解者がそこにいたことを明かした。\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\n\u003Cstrong\u003E■ 「真っ向から否定しないで」 大人たちへの訴え\u003C\u002Fstrong\u003E\u003C\u003Cbr\u003E\u003Cbr\u003E\n　一方で、大人たちや警察との溝は深い。ちなちなさんは「警察の尋問が威圧的でトラウマになった。真っ向から否定するのは良くない。もう少し視野を広げてほしい」と世の大人に訴える。これに対し元警視庁の平野晃也氏は「警察の対応は伝統的に変わっておらず、時代の変化に対応できていない」と返した。\u003Cbr\u003E\u003Cbr\u003E\n\n　ゆうさんは「トー横をなくすよりも、トー横に来る人を減らす努力を大人はしたほうがいい。親も子育ての仕方を学べる機会があれば」と語った。\u003Cbr\u003E\u003Cbr\u003E\n\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,452件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤yuhf******* \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003Eテレビだからいいこと言ってるような印象ですが、実際に起こってること、やっていることは相当やばいですからね。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E18,432\u003C\u002Fspan\u003E 👎 110\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E喫煙をしてポイ捨てもしやがるから物凄くムカつきます\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E7,230\u003C\u002Fspan\u003E 👎 25\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 sib****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E周辺の店舗の関係者や通行人からしたら、排除でも否定でも何でもいいから、犯罪行為の取り締まり、治安の維持に尽力欲しい。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E4,532\u003C\u002Fspan\u003E 👎 12\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Bad Comment News2 "
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"news-image.jpg\"] }",
              "name": ""
            },
            {
              "type": "text",
              "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"ja\"\u003E\n\u003Chead\u003E\n\u003Cmeta charset=\"UTF-8\"\u003E\n\u003Cstyle\u003E\n    body { font-family: \"Hiragino Kaku Gothic ProN\", \"Meiryo\", sans-serif; background-color: #f5f6f6; padding: 20px; display: flex; justify-content: center; }\n    .smartphone-frame { background: white; max-width: 400px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }\n    .news-category { color: #cc0000; font-weight: bold; font-size: 14px; margin-bottom: 5px; }\n    .news-title { font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 10px; }\n    .news-date { color: #888; font-size: 12px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }\n    .news-body { font-size: 15px; line-height: 1.6; color: #333; margin-bottom: 30px; }\n    .comment-header { font-size: 18px; font-weight: bold; border-left: 5px solid #0052cc; padding-left: 10px; margin-bottom: 15px; }\n    .comment-box { border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }\n    .user-name { font-weight: bold; font-size: 13px; color: #555; margin-bottom: 5px; }\n    .comment-text { font-size: 14px; line-height: 1.5; color: #222; margin-bottom: 10px; }\n    .reaction { font-size: 13px; color: #666; }\n    .reaction span { color: #cc0000; font-weight: bold; margin-right: 15px; }\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003E\n\n\u003Cdiv class=\"smartphone-frame\"\u003E\n    \u003Cdiv class=\"news-category\"\u003E社会ニュース\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-title\"\u003Eトー横キッズ一斉指導、警視庁などが行う\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"news-date\"\u003E2026\u002F5\u002F1(金) 12:00 配信\u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"news-body\"\u003E\n        東京都新宿区歌舞伎町の「トー横」と呼ばれる一帯に若者らが集まり犯罪に巻き込まれるケースが相次いでいるとして、警視庁や都などは24日、周辺のホテルへの立ち入り、薬局への広報啓発など約160人態勢で一斉対策を実施した。\u003Cbr\u003E\u003Cbr\u003E\n        新宿区や商店街関係者とも連携し、官民合同パトロールを実施。ホテルなどに売買春が疑われる客の通報を、インターネットカフェなどに年齢確認の徹底を求めた。また「トー横」では薬のオーバードーズ（過剰摂取）も問題になっており、薬局に対し偽造された処方箋や薬の大量購入への注意を呼び掛けた。\u003Cbr\u003E\u003Cbr\u003E\n         また、周辺のパトロールを強化するとともに、若者が相談できる臨時ブースを設置するなどの対応を進めている。\u003Cbr\u003E\u003Cbr\u003E\n■しかしながらも続くトー横キッズにまつわる問題\u003Cbr\u003E\u003Cbr\u003E\nオーバードーズ（いわゆるOD）問題はだんだん増え続けている。「薬局をいくつか回ったら、特定の風邪薬をたくさん集めることは難しくない」「他に飲んでいる薬ないと言ったらすぐ渡してくれる」など実態調査によると、オーバードーズのための風邪薬を手に入れるのは難しくないようである。\u003Cbr\u003E\u003Cbr\u003E\n先月、オーバードーズによる心肺停止とみられ搬送された人数は3人とみられる。\u003Cbr\u003E\u003Cbr\u003E\n■トー横キッズはなにをしているのか\u003Cbr\u003E\u003Cbr\u003E\n新宿区の報告によると補導数は700人弱で5年間10倍程度増加したという。親との不仲やDV、いじめなどにより居場所を失い、強い孤独を感じて、同じような思いや経験を持つ仲間を求めて集まっていると東京都議会から明らかにした。実際取材チームが現場に向かい、観察してみた結果、オーバードーズしているか犯罪に関わっていること以外の様子も発見された。飲酒、飲食などただ居座り、その場の占有しているようであった。\u003Cbr\u003E\u003Cbr\u003E\n警視庁の担当者は「トー横周辺では『悪意ある大人』が少年たちを食い物にする卑劣な犯行に及んでいる。表向き華やかに見えても、自分の身に危険が及ぶ可能性があることを知ってもらい、子どもを守る取り組みを強力に推進する」と話した。\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-header\"\u003Eコメント (1,452件,いいねが多い順)\u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤wkj******** \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E法整備して、さっさと逮捕して、刑務所で働かせよう！どうせ自業自得の連中なんだから\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E12,405\u003C\u002Fspan\u003E 👎 120\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 bwa*****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E犯罪の温床になってるし、早く家とか施設とか返さないとだんだん海外みたいに無法地帯になりえる。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E9,850\u003C\u002Fspan\u003E 👎 85\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"comment-box\"\u003E\n        \u003Cdiv class=\"user-name\"\u003E👤 kio2****\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"comment-text\"\u003E悪意ある少年少女が善良な大人を食い物にする事例がある事も並列で書かないと不平等。押しに弱い、臆病、大人しい、そういう存在は大人でも食い物にされる。\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"reaction\"\u003E👍 \u003Cspan\u003E7,213\u003C\u002Fspan\u003E 👎 67\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003Cdiv class=\"comment-box\"\u003E\n   \u003Cdiv class=\"comment-text\"\u003Eもっと見る\u003C\u002Fdiv\u003E\n\n\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {
            "news-image.jpg": "embedded\u002Fb999d827ffca439731da25067bed774b6f4c249476da38dc02fb6b8d84e726fb.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Bad comment News 1 "
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -25,
          "angle": 0,
          "width": 640,
          "height": 329.78,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "出てくるキーワードに対して\n自分が感じるイメージを選んでください\n\n\n\n\n！制限時間（3秒）があります！\n準備ができたら次へをクリックしてください",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "rect",
          "left": 275,
          "top": 239.85,
          "angle": 0,
          "width": 157.3,
          "height": 50,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#0070d9"
        },
        {
          "type": "aoi",
          "left": 274.27,
          "top": 237.86,
          "angle": 0,
          "width": 161.91,
          "height": 50,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "start"
        },
        {
          "type": "i-text",
          "left": 275,
          "top": 236.99,
          "angle": 0,
          "width": 64,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "次へ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -225,
          "top": -25,
          "angle": 0,
          "width": 320,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#d6341a",
          "text": "左がとてもネガティブ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 200,
          "top": -25,
          "angle": 0,
          "width": 320,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#0070d9",
          "text": "右がとてもポジティブ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click": "start"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "question instruction "
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cdiv style=\"max-width: 600px; margin: 0 auto; font-family: sans-serif; text-align: center; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);\"\u003E\n  \n  \u003C!-- 進行度のテキストを「質問」に変更、残り時間を4.0秒に変更 --\u003E\n  \u003Cdiv style=\"display: flex; justify-content: space-between; color: #888; font-size: 14px; margin-bottom: 20px;\"\u003E\n    \u003Cspan id=\"progress_text\"\u003E質問: 1 \u002F 8\u003C\u002Fspan\u003E\n    \u003Cspan style=\"color: #cc0000; font-weight: bold;\"\u003E残り時間: \u003Cspan id=\"timer_num\"\u003E5.0\u003C\u002Fspan\u003E秒\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv style=\"width: 100%; background: #eee; height: 6px; border-radius: 3px; margin-bottom: 40px;\"\u003E\n    \u003Cdiv id=\"progress_bar\" style=\"width: 12.5%; background: #0052cc; height: 6px; border-radius: 3px; transition: width 0.3s;\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv style=\"font-size: 14px; color: #666; margin-bottom: 10px;\"\u003Eキーワードに対するイメージは?\u003C\u002Fdiv\u003E\n  \u003Cdiv id=\"current_keyword\" style=\"font-size: 32px; font-weight: bold; color: #111; margin-bottom: 5px; min-height: 50px;\"\u003E\n    トー横キッズ\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv id=\"keyword_sub\" style=\"font-size: 14px; color: #888; margin-bottom: 40px;\"\u003E()\u003C\u002Fdiv\u003E\n\n  \u003Cdiv style=\"display: flex; justify-content: space-between; align-items: center; padding: 0 10px; margin-bottom: 20px;\"\u003E\n    \n    \u003Cspan style=\"font-weight: bold; color: #cc0000; font-size: 14px; text-align: center;\"\u003Eとても\u003Cbr\u003Eネガティブ\u003C\u002Fspan\u003E\n    \n    \u003Cdiv style=\"display: flex; gap: 20px;\"\u003E\n      \u003Cbutton type=\"button\" class=\"score-btn\" data-value=\"1\" style=\"width: 55px; height: 55px; border-radius: 50%; border: 2px solid #ccc; background: white; font-size: 18px; cursor: pointer; font-weight: bold;\"\u003E1\u003C\u002Fbutton\u003E\n      \u003Cbutton type=\"button\" class=\"score-btn\" data-value=\"2\" style=\"width: 55px; height: 55px; border-radius: 50%; border: 2px solid #ccc; background: white; font-size: 18px; cursor: pointer; font-weight: bold;\"\u003E2\u003C\u002Fbutton\u003E\n      \u003Cbutton type=\"button\" class=\"score-btn\" data-value=\"3\" style=\"width: 55px; height: 55px; border-radius: 50%; border: 2px solid #ccc; background: white; font-size: 18px; cursor: pointer; font-weight: bold;\"\u003E3\u003C\u002Fbutton\u003E\n      \u003Cbutton type=\"button\" class=\"score-btn\" data-value=\"4\" style=\"width: 55px; height: 55px; border-radius: 50%; border: 2px solid #ccc; background: white; font-size: 18px; cursor: pointer; font-weight: bold;\"\u003E4\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cspan style=\"font-weight: bold; color: #0052cc; font-size: 14px; text-align: center;\"\u003Eとても\u003Cbr\u003Eポジティブ\u003C\u002Fspan\u003E\n    \n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- 下部の案内テキストも4秒に変更 --\u003E\n  \u003Cp style=\"font-size: 12px; color: #999;\"\u003E※ 制限時間は約4秒です！\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
try {
  const keywords = [
    { jp: 'トー横キッズ', key: 'imp_youth' },
    { jp: '歌舞伎町', key: 'imp_kabukicho' },
    { jp: 'オーバードーズ', key: 'imp_od' },
    { jp: '若者', key: 'imp_host' },
    { jp: '少年法',  key: 'imp_juvenile_law' },
    { jp: '居場所支援', key: 'imp_ibasho' },
    { jp: 'ボランティア',  key: 'imp_volunteer' },
    { jp: '一斉指導',  key: 'imp_comment' },
    { jp: '警察', key: 'imp_police' },
    { jp: '大人', key: 'imp_adult' },
    { jp: 'キッチンカー', key: 'imp_kitchencar' },
    { jp: '相談窓口', key: 'imp_consultation' },
    { jp: 'ピアー相談', key: 'imp_peer' },
    { jp: '学校', key: 'imp_school' }
  ];

  let currentIndex = 0;
  const results = {};
  let uiTimer;
  let timeLeft = 3000;

  // this.element 대신 document(전체 화면)에서 무조건 찾도록 변경!
  const wordEl = document.querySelector('#current_keyword');
  
  if (!wordEl) {
    alert("에러: HTML 요소를 찾을 수 없습니다! Content 탭에 HTML 코드가 정상적으로 들어있는지 다시 한번 확인해 주세요.");
    return;
  }

  const subEl = document.querySelector('#keyword_sub');
  const progressText = document.querySelector('#progress_text');
  const progressBar = document.querySelector('#progress_bar');
  const timerEl = document.querySelector('#timer_num');
  const buttons = document.querySelectorAll('.score-btn');

  // 단어 바꾸는 함수
  const showNextWord = () => {
    clearInterval(uiTimer); 

    // 8개가 모두 끝나면 결과 저장하고 다음 스크린으로 이동
    if (currentIndex >= keywords.length) {
      Object.assign(this.data, results);
      this.end(); 
      return;
    }

    const currentWord = keywords[currentIndex];
    wordEl.textContent = currentWord.jp;
    subEl.textContent = currentWord.kr;
    progressText.textContent = `進行度: ${currentIndex + 1} / ${keywords.length}`;
    progressBar.style.width = `${((currentIndex + 1) / keywords.length) * 100}%`;

    timeLeft = 4000;
    timerEl.textContent = "1.0";

    // 1초 카운트다운 시작
    uiTimer = setInterval(() => {
      timeLeft -= 100;
      if (timeLeft <= 0) {
        clearInterval(uiTimer);
        results[currentWord.key] = "No_Response"; // 시간 초과 시 미응답
        currentIndex++;
        showNextWord(); 
      } else {
        timerEl.textContent = (timeLeft / 1000).toFixed(1);
      }
    }, 100);
  };

  // 1~7번 버튼 클릭 세팅
  buttons.forEach(btn => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', (e) => {
      if (currentIndex >= keywords.length) return;
      clearInterval(uiTimer); 
      results[keywords[currentIndex].key] = e.target.getAttribute('data-value'); // 누른 점수 저장
      currentIndex++; 
      showNextWord(); // 다음 단어로 넘기기
    });
  });

  // 실험 첫 단어 띄우기 시작!
  showNextWord();

} catch(error) {
  alert("코드 실행 중 문제가 발생했습니다. (원인: " + error.message + ")");
}
}
      },
      "title": "Page"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 480,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "ご協力ありがとうございました。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 50,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 60.96,
          "angle": 0,
          "width": 581.98,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "完了コードは、${this.state.participantID}",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
 //check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "W3ASDIVyAjZ9",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Ending",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()