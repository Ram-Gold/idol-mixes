// Idol Chants & Mixes - Japanese Idol Mixes PDF (full list)
// Each entry: name, romaji, hiragana (optional), katakana (optional)
// example (optional): { url: string, title: string, timestamp: string }

const rawChants = [
  {
    name: "Member Call",
    romaji: `◯◯◯ 4x`,
    hiragana: `◯◯◯ 4x`,
    katakana: `◯◯◯ 4x`,
    example: {
      url: 'https://youtu.be/kXjMuPq9x8Q?si=xFwmtsg7XrreerDw&t=3',
      title: 'ILIFE - 可変３連MIXをおぼえる歌 ',
      timestamp: '0:03'
    }
  },
  {
    name: "OOING",
    romaji: `Minna de issho ni ooing!
Ohhh *clap clap* Ohhh *clap clap* x2
(Urya!) Oi! 4x
Ah, mada ikanai
(Urya!) Oi! 4x
Ah, mada ikanai
Itsu iku no? Ima desho! / Hai se no!`,
    hiragana: `みんなでいっしょに おーいんぐ！
おー *clap clap* おー *clap clap* x2
（うりゃ！）おい！ 4x
あ、まだいかない
（うりゃ！）おい！ 4x
あ、まだいかない
いついくの？ いまでしょ！ / はいせーの！`,
    katakana: `ミンナデイッショニ オーイング！
オー *clap clap* オー *clap clap* x2
（ウリャ！）オイ！ 4x
ア、まだいかない
（ウリャ！）オイ！ 4x
ア、まだいかない
いついくの？ イマデショ！ / ハイセーノ！`,
    example: {
      url: 'https://youtu.be/kXjMuPq9x8Q?si=xFwmtsg7XrreerDw&t=3',
      title: 'ILIFE - 可変３連MIXをおぼえる歌 ',
      timestamp: '0:03'
    }
  },
  {
    name: "PPH / FUWA FUWA",
    romaji: `*clap, clap clap* Hai! *jump* 4x
*clap clap* fuwa fuwa
Hai se- no, hai se- no
Oi oi! oi oi oi oi`,
    hiragana: `*clap, clap clap* はい！ *jump* 4x
*clap clap* ふわふわ
はいせーの、はいせーの
おいおい！ おいおいおいおい`,
    katakana: `*clap, clap clap* ハイ！ *jump* 4x
*clap clap* フワフワ
ハイセーノ、ハイセーノ
オイオイ！ オイオイオイオイ`,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHOU KAWAII",
    romaji: `[Ah ikuzo!]
◯◯ kawaii, chou kawaii! 4x`,
    hiragana: `[あー いくぞ！]
◯◯ かわいい、ちょうかわいい！ 4x`,
    katakana: `[アッ イクゾ！]
◯◯ カワイイ、チョウカワイイ！ 4x`,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "YES TIGER",
    romaji: `Iet, iet, iettaiga! / Iettaiga, iettaiga, iettaiga
Faibo Waipa!`,
    hiragana: `いぇっ、いぇっ、いぇったいがー！ / いぇったいがー、いぇったいがー、いぇったいがー
ふぁいぼー わいぱー！`,
    katakana: `イェッ、イェッ、イェッタイガー！ / イェッタイガー、イェッタイガー、イェッタイガー
ファイボー ワイパー！`,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MINNA DE ISSHO NI / ORE NO",
    romaji: `Minna de Issho ni ◯◯ kooru!
Sasaete aru kara! 2x
O- re- no ◯◯!
Ore no, ore no, ◯◯!
Iya iya iya iya! 4x O- re- no ◯◯!
Omae ga ichiban! x3, ◯◯!
L, O, V, E, Raburii ◯◯!
◯◯ no Hitomi ni Koishiteru!`,
    hiragana: `みんなで いっしょに ◯◯ こーる！
ささえて あるから！ 2x
おー れー の ◯◯！
おれの、おれの、 ◯◯！
いや いや いや いや！ 4x おー れー の ◯◯！
おまえが いちばん！ x3, ◯◯！
L, O, V, E, らぶりー ◯◯！
◯◯ の ひとみに こいしてる！`,
    katakana: `ミンナデイッショニ ◯◯ コール！
ササエテ アルカラ！ 2x
オー レー ノ ◯◯！
オレノ、オレノ、 ◯◯！
イヤ イヤ イヤ イヤ！ 4x オー レー ノ ◯◯！
オマエガ イチバン！ x3, ◯◯！
L, O, V, E, ラブリー ◯◯！
◯◯ ノ ヒトミニ コイシテル！`,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    "name": "MYOHONTUSUKE START",
    "romaji": "Myohontusuke!\nKasentobijoukyo!\nJya jya!\nFaibo!\nWaipa!",
    "hiragana": "みょうほんつすけ！\nかせんとびじょうきょ！\nじゃ じゃ！\nふぁいぼ！\nわいぱー！",
    "katakana": "ミョウホンツスケ！\nカセントビジョウキョ！\nジャ ジャ！\nファイボ！\nワイパー！",
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
  {
    "name": "MYOHONTUSUKE HAJIMARU YO",
    "romaji": "Hajimaru yo!\nHajimaru yo!\nMyohontusuke, hajimaru yo!\nMyohontusuke!\nKasentobijoukyo!\nJya jya!\nFaibo!\nWaipa!",
    "hiragana": "はじまるよ！\nはじまるよ！\nみょうほんつすけ、はじまるよ！\nみょうほんつすけ！\nかせんとびじょうきょ！\nじゃ じゃ！\nふぁいぼ！\nわいぱー！",
    "katakana": "ハジマルヨ！\nハジマルヨ！\nミョウホンツスケ、ハジマルヨ！\nミョウホンツスケ！\nカセントビジョウキョ！\nジャ ジャ！\nファイボ！\nワイパー！",
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
  {
    "name": "MYOHONTUSUKE KOUJOU",
    "romaji": "ītai koto ga raratusuke\nyappari omae wa ama shindō\nchapeapekarakina yappa chape\nkasen myōhontusukechape\nore ga ti guretekita shiberu\nsaidā omae ni sutoraipā\nore to issho ni chapeapekarakina jinzō faiyafaibowaipā",
    "hiragana": "いいたいことが ららつすけ\nやっぱり おまえは あましんどう\nちゃぺあぺからきな やっぱちゃぺ\nかせん みょうほんつすけちゃぺ\nおれが てぃぐれてきた しべる\nさいだー おまえに すとらいぱー\nおれと いっしょに ちゃぺあぺからきな じんぞうふぁいやふぁいぼわいぱー",
    "katakana": "イイタイコトガ ララツスケ\nヤッパリ オマエハ アマシンドウ\nチャペアペカラキナ ヤッパチャペ\nカセン ミョウホンツスケチャペ\nオレガ ティグレテキタ シベル\nサイダー オマエニ ストライパー\nオレト イッショニ チャペアペカラキナ ジンゾウファイヤファイボワイパー",
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
  {
    "name": "MYOHONDORAIBA HIROBA",
    "romaji": "myōhondoraibā\nkasen hi raigā\njajjājajjā\nbaribari bō\nsutosutosutosuto\nsutosutoraipā",
    "hiragana": "みょうほんどらいばー\nかせん ひ らいがー\nじゃっじゃーじゃっじゃー\nばりばりぼー\nすとすとすとすと\nすとすとらいぱー",
    "katakana": "ミョウホンドライバー\nカセン ヒ ライガー\nジャッジャージャッジャー\nバリバリボー\nストストストスト\nストストライパー",
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
  {
    name: "STANDARD MIX",
    romaji: `[Ah, yossha ikuzo!]
Tiger (Taiga)!
Fire (Faiya)!
Cyber (Saiba)!
Fiber (Faiba)!
Diver (Daiba)!
Viber (Baiba)!
Jya jya!
[Faibo! Waipa!]`,
    hiragana: `[あー よっしゃいくぞ！]
たいがー！
ふぁいやー！
さいばー！
ふぁいばー！
だいばー！
ばいばー！
じゃっ じゃっ！
[ふぁいぼ！ わいぱー！]`,
    katakana: `[アッ ヨッシャイクゾ！]
タイガー！
ファイヤー！
サイバー！
ファイバー！
ダイバー！
バイバー！
ジャッ ジャッ！
[ファイボ！ ワイパー！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "STANDARD HASEI MIX",
    romaji: `Taiga faiya!
Cyber (Saiba)!
Fiber (Faiba)!
Diver (Daiba)!
Viber (Baiba)!
Jya jya!
Faibo!
Waipa!
[Janpa pinga dansu fama!]`,
    hiragana: `たいがー ふぁいやー！
さいばー！
ふぁいばー！
だいばー！
ばいばー！
じゃー じゃー！
ふぁいぼ！
わいぱー！
[じゃんぱ ぴんが だんす ふぁーま！]`,
    katakana: `タイガー ファイヤー！
サイバー！
ファイバー！
ダイバー！
バイバー！
ジャッ ジャッ！
ファイボ！
ワイパー！
[ジャンパ ピンガ ダンス ファーマ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "REVERSE STANDARD MIX",
    romaji: `Jya jya!
Baiba!
Daiba!
Faiba!
Saiba!
Faiya!
Taiga!`,
    hiragana: `じゃー じゃー！
ばいばー！
だいばー！
ふぁいばー！
さいばー！
ふぁいやー！
たいがー！`,
    katakana: `ジャッ ジャッ！
バイバー！
ダイバー！
ファイバー！
サイバー！
ファイヤー！
タイガー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE MIX",
    romaji: `[Ah, Mou iccho ikuzo!]
Tora!
Hi!
Jinzou!
Seni!
Ama!
Shindou!
Kasen!
[Tobi! Joukyo!]`,
    hiragana: `[あー もういっちょいくぞ！]
とら！
ひ！
じんぞう！
せに！
あま！
しんどう！
かせん！
[とび！ じょうきょ！]`,
    katakana: `[アッ モウイッチョイクゾ！]
トラ！
ヒ！
ジンゾウ！
セニ！
アマ！
シンドウ！
カセン！
[トビ！ ジョウキョ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE HASEI MIX",
    romaji: `Tora! 12x
Tora hi!
Jinzou!
Seni!
Ama!
Shindou!
Kasen!
Tobi!
Joukyo!
[Chou umi u mai nōjō!]`,
    hiragana: `とら！ 12x
とら ひ！
じんぞう！
せに！
あま！
しんどう！
かせん！
とび！
じょうきょ！
[ちょう うみ う まい のうじょう！]`,
    katakana: `トラ！ 12x
トラ ヒ！
ジンゾウ！
セニ！
アマ！
シンドウ！
カセン！
トビ！
ジョウキョ！
[チョウ ウミ ウ マイ ノウジョウ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "REVERSE JAPANESE MIX",
    romaji: `Kasen!
Shindou!
Ama!
Seni!
Jinzou!
Hi!
Tora!`,
    hiragana: `かせん！
しんどう！
あま！
せに！
じんぞう！
ひ！
とら！`,
    katakana: `カセン！
シンドウ！
アマ！
セニ！
ジンゾウ！
ヒ！
トラ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE MIX (REVERSE KAIHEN)",
    romaji: `Tora hi, jinzou seni ama shindou kasen tobi jokyou tobi kasen shindou ama seni
jinzou hi!
Tora! Hi! Jinzou! Seni! Ama! Shindou! Kasen!`,
    hiragana: `とら ひ、じんぞう せに あま しんどう かせん とび じょきょう とび かせん しんどう あま せに
じんぞう ひ！
とら！ ひ！ じんぞう！ せに！ あま！ しんどう！ かせん！`,
    katakana: `トラ ヒ、ジンゾウ セニ アマ シンドウ カセン トビ ジョキョウ トビ カセン シンドウ アマ セニ
ジンゾウ ヒ！
トラ！ ヒ！ ジンゾウ！ セニ！ アマ！ シンドウ！ カセン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DIASUTE MIX (EIGO)",
    romaji: `Pink (Pinku)
Maron
Potetsu
Bust (Basuto)
Sister (Sista)
Oily (Oiri)
Box (Bokusu)`,
    hiragana: `ぴんく
まろん
ぽてつ
ばすと
しすた
おいり
ぼくす`,
    katakana: `ピンク
マロン
ポテツ
バスト
シスタ
オイリ
ボックス`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE MIX (KYŪSHIKI)",
    romaji: `tora
hi
jinzō
seni
atama
shindō
kagaku seni
tobi
jokyo`,
    hiragana: `とら
ひ
じんぞう
せに
あたま
しんどう
かがく せに
とび
じょきょ`,
    katakana: `トラ
ヒ
ジンゾウ
セニ
アタマ
シンドウ
カガク セニ
トビ
ジョキョ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "AINU MIX",
    romaji: `Ah, sha ikuzo!
Chape! Ape! Kara! Kira! Rara!
Tusuke! Wisupe! Kesui! Suisupa!
Chape! Ape! Kara! Kira! Rara!`,
    hiragana: `あー、しゃー いくぞ！
ちゃぺ！ あぺ！ から！ きら！ らら！
つすけ！ うぃすぺ！ けすい！ すいすぱ！
ちゃぺ！ あぺ！ から！ きら！ らら！`,
    katakana: `アー、シャー イクゾ！
チャペ！ アペ！ カラ！ キラ！ ララ！
ツスケ！ ウィスペ！ ケスイ！ スイスパ！
チャペ！ アペ！ カラ！ キラ！ ララ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "AINU MIX ZENKYOU (MYOHONTUSUKE STOP)",
    romaji: `Chape! Ape! Kara! Kira! Rara!
Tusuke! Myohontusuke!`,
    hiragana: `ちゃぺ！ あぺ！ から！ きら！ らら！
つすけ！ みょうほんつすけ！`,
    katakana: `チャペ！ アペ！ カラ！ キラ！ ララ！
ツスケ！ ミョウホンツスケ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HIGASHINO AINU-BI KAHEN MIX",
    romaji: `Jinzō faiya faibo waipā!
Taigā taigā tatatata taigā!
Chape ape karakina chape ape karakina!
Myōhontusuke 👏 waipā!
Wīsupe kesui chape chape chape!
chape ape kara kina kara ape chape!
Jokyo hi jokyo tora tora tora!
Kasen hi kasen hi kasen hi waipā!`,
    hiragana: `じんぞう ふぁいやー ふぁいぼ わいぱー！
たいがー たいがー たたたた たいがー！
ちゃぺ あぺ からきな ちゃぺ あぺ からきな！
みょうほんつすけ 👏 わいぱー！
うぃーすぺ けすい ちゃぺ ちゃぺ ちゃぺ！
ちゃぺ あぺ から きな から あぺ ちゃぺ！
じょきょ ひ じょきょ とら とら とら！
かせん ひ かせん ひ かせん ひ わいぱー！`,
    katakana: `ジンゾウ ファイヤー ファイボ ワイパー！
タイガー タイガー タタタタ タイガー！
チャペ アペ カラキナ チャペ アペ カラキナ！
ミョウホンツスケ 👏 ワイパー！
ウィースペ ケスイ チャペ チャペ チャペ！
チャペ アペ カラ キナ カラ アペ チャペ！
ジョキョ ヒ ジョキョ トラ トラ トラ！
カセン ヒ カセン ヒ カセン ヒ ワイパー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "AINU KAHEN MIX",
    romaji: `Chape, Ape, Kara, Kina, Rara, Tusuke, U~isu~upe, Kina, Rara, Tusuke,
U~isu~upe, Kesu~i, Su~isu~upa Su~isu~upa, Kesu~i, Tusuke, Ape, Kara, Kina,
Chape, Ape, Kara, Kina, Rara, Tusuke, Myohontusuke`,
    hiragana: `ちゃぺ、あぺ、から、きな、らら、つすけ、うぃーすぅーぺ、きな、らら、つすけ、
うぃーすぅーぺ、けすぅーい、すぅいすぅーぱ すぅいすぅーぱ、けすぅーい、つすけ、あぺ、から、きな、
ちゃぺ、あぺ、から、きな、らら、つすけ、みょうほんつすけ`,
    katakana: `チャペ、アペ、カラ、キナ、ララ、ツスケ、ウィースゥーペ、キナ、ララ、ツスケ、
ウィースゥーペ、ケスゥーイ、スゥイスゥーパ スゥイスゥーパ、ケスゥーイ、ツスケ、アペ、カラ、キナ、
チャペ、アペ、カラ、キナ、ララ、ツスケ、ミョウホンツスケ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU MIX",
    romaji: `Faibo! Waipa! Faama! Jyasupa! Howaipa! Kuupa!`,
    hiragana: `ふぁいぼ！ わいぱー！ ふぁーま！ じゃすぱ！ ほわいぱ！ くーぱ！`,
    katakana: `ファイボ！ ワイパー！ ファーマ！ ジャスパ！ ホワイパー！ クーパ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "Iesukuraipa! KUROFUKU/TSUME MIX",
    romaji: `Iesukuraipa!
Tiger (Taiga)! Fire (Faiya)! Cyber (Saiba)! Fiber (Faiba)! Diver (Daiba)! Viber (Baiba)!
Jya jya! Faibo! Waipa!
Janpa! Pinga! Dansu! Fama!
Saburi finga! Seibu baiza!`,
    hiragana: `いぇすくらいぱ！
たいがー！ ふぁいやー！ さいばー！ ふぁいばー！ だいばー！ ばいばー！
じゃっ じゃっ！ ふぁいぼ！ わいぱー！
じゃんぱ！ ぴんが！ だんす！ ふぁーま！
さぶり ふぃんが！ せいぶ ばいざ！`,
    katakana: `イェスクライパ！
タイガー！ ファイヤー！ サイバー！ ファイバー！ ダイバー！ バイバー！
ジャッ ジャッ！ ファイボ！ ワイパー！
ジャンパ！ ピンガ！ ダンス！ ファーマ！
サブリ フィンガ！ セイブ バイザ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JASUPĀNA MIX",
    romaji: `Tiger (Taiga)! Fire (Faiya)! Cyber (Saiba)! Fiber (Faiba)! Diver (Daiba)! Viber (Baiba)!
Jya jya! Faibo! Waipa!
Jāba! Tīgā! Jasu pāna!`,
    hiragana: `たいがー！ ふぁいやー！ さいばー！ ふぁいばー！ だいばー！ ばいばー！
じゃっ じゃっ！ ふぁいぼ！ わいぱー！
じゃーば！ てぃーがー！ じゃす ぱーな！`,
    katakana: `タイガー！ ファイヤー！ サイバー！ ファイバー！ ダイバー！ バイバー！
ジャッ ジャッ！ ファイボ！ ワイパー！
ジャーバ！ ティーガー！ ジャス パーナ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KUROFUKU SUTAJAPA KONGOU MIX",
    romaji: `taigā hi saibā seni daibā shindō jā jā hi waipā janpa pingā mai fāmā`,
    hiragana: `たいがー ひ さいばー せに だいばー しんどう じゃー じゃー ひ わいぱー じゃんぱ ぴんがー まい ふぁーまー`,
    katakana: `タイガー ヒ サイバー セニ ダイバー シンドウ ジャッ ジャッ ヒ ワイパー ジャンパ ピンガー マイ ファーマー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SPANISH MIX",
    romaji: `Vamos (Bamous)! 
Tigre (Tigure)! 
Fuego! 
Ciber (Shiberu)! 
Fibra (Fibura)! 
Buzo! 
Viber (Biburaru)! 
Jersey (Herusei)! 
Volare (Borare)! 
Limpiaparabrisas (Rimpiaparaburisasu)!`,
    hiragana: `ばもす！
てぃぐれ！
ふえご！
しべる！
ふぃぶら！
ぶそ！
びぶらる！
へるせい！
ぼられ！
りんぴあぱらぶりさす！`,
    katakana: `バモス！
ティグレ！
フエゴ！
シベル！
フィブラ！
ブソ！
ビブラル！
ヘルセイ！
ボラレ！
リンピアパラブリサス！`,

    example: {
      url: 'https://youtu.be/nqXeVmrg0HI?si=DTV3M8efYdvwQM98&t=198',
      title: 'FES☆TIVE - シダレヤナギ',
      timestamp: '3:18'
    }
  },
  {
    name: "URA SPANISH/URASUPE MIX",
    romaji: `Vamos (Bamous)!
Tigure!
Fego!
Fiburaru!
Buzo!
Biburaru!
Shirena!
Diosa!
Nabida!
Reno!
Anheru!
Senishienta!
Esubanshion!
Pai-Suderasu!
Marabijasu!`,
    hiragana: `ばもす！
てぃぐれ！
ふえご！
ふぃぶらる！
ぶそ！
びぶらる！
しれーな！
でぃおさ！
なびだ！
れの！
あんへる！
せにしえんた！
えすばんしおん！
ぱいすでらす！
まらびはす！`,
    katakana: `バモス！
ティグレ！
フエゴ！
フィブラル！
ブソ！
ビブラル！
シレーナ！
ディオサ！
ナビダ！
レノ！
アンヘル！
セニシエンタ！
エスバンシオン！
パイスデラス！
マラビハス！`,

    example: {
      url: 'https://youtu.be/QMxOA6SAmk4?si=y2x2HdDhK2fnbaQl&t=163',
      title: '//NECOPLA// - Ignite',
      timestamp: '2:43'
    }
  },
  {
    name: "Esubanshion / Pai-Suderasu / Marabijasu",
    romaji: `Esubanshion! Pai-Suderasu! Marabijasu!`,
    hiragana: `えすばんしおん！ ぱいすでらす！ まらびはす！`,
    katakana: `エスバンシオン！ パイスデラス！ マラビハス！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANGUL MIX",
    romaji: `Cha-kada~! Horani! Buru! Injyo! Somyu! Henyo! Shindo! Fahakusomyu! Neuda! Jego!`,
    hiragana: `ちゃかだー！ ほらに！ ぶる！ いんじょ！ そみゅ！ へにょ！ しんどう！ ふぁはくそみゅ！ ねうだ！ じぇご！`,
    katakana: `チャカダー！ ホラニ！ ブル！ インジョ！ ソミュ！ ヘニョ！ シンドウ！ ファハクソミュ！ ネウダ！ ジェゴ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ARABIC MIX",
    romaji: `Suifuriasuiiru! Namiru! Naaru! Suinaaii! Nasuiijyu! Gatasa! Hazza!`,
    hiragana: `すいふりあすいーる！ なみる！ なーる！ すいないー！ なすいーじゅ！ がたさ！ はっざ！`,
    katakana: `スイフリアスイール！ ナミル！ ナール！ スイナイー！ ナスイージュ！ ガタサ！ ハッザ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "Haitunshinaaii! GERMAN MIX",
    romaji: `Haitunshinaaii! Gēenviā! Tīgā! Foieru! Kūnsu! Fībā! Tautsā! Shubingungu! Fēmīfāzā!
[Firīgen kāruhaintsu shunaidā]/[Ie mange etanaru]`,
    hiragana: `はいとぅんしないー！ げーえんゔぃあ！ てぃーがー！ ふぉいえる！ くんす！ ふぃーばー！ たうつぁー！ しゅびんぐんぐ！ ふぇーみーふぁーざー！
[ふりーげん かーるはいんつ しゅないだー]/[いえ まんげ えたなる]`,
    katakana: `ハイトゥンシナイー！ ゲーエンヴィア！ ティーガー！ フォイエル！ クンス！ フィーバー！ タウツァー！ シュビングング！ フェーミーファーザー！
[フリーゲン カールハインツ シュナイダー]/[イエ マンゲ エタナル]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "URA GERMAN MIX",
    romaji: `Gēenviā! Tīgā! Foieru! Kūnsuto! Fibā! Tautsā! Shubingungu! Hiēmīfāzā! Firīgen! Bazaitigan!`,
    hiragana: `げーえんゔぃあ！ てぃーがー！ ふぉいえる！ くんすと！ ふぃーばー！ たうつぁー！ しゅびんぐんぐ！ へーみーふぁーざー！ ふりーげん！ ばざいてぃがん！`,
    katakana: `ゲーエンヴィア！ ティーガー！ フォイエル！ クンスト！ フィーバー！ タウツァー！ シュビングング！ ヘーミーファーザー！ フリーゲン！ バザイティガン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "Zēyungufā / GERMAN 3 REN MIX",
    romaji: `Zēyungufā! Gettin! Vainahaten! Ren! Herumankarutsu! Kāruhaintsu! Shunaidā!
Gēenviā! Tīgā! Foieru! Kūnsuto! Fibā! Tautsā! Shubingungu! Hiēmīfāzā! Firīgen! Bazaitigan!
Zēyungufā! Gettin! Vainahaten! Asshenputteru! Vundārando!`,
    hiragana: `ぜーゆんぐふぁー！ げってぃん！ ゔぁいなはてん！ れん！ へるまんかるつ！ かーるはいんつ！ しゅないだー！
げーえんゔぃあ！ てぃーがー！ ふぉいえる！ くんすと！ ふぃーばー！ たうつぁー！ しゅびんぐんぐ！ へーみーふぁーざー！ ふりーげん！ ばざいてぃがん！
ぜーゆんぐふぁー！ げってぃん！ ゔぁいなはてん！ あっしぇんぷってるとぅ！ ゔんだーらんど！`,
    katakana: `ゼーユングファー！ ゲッティン！ ヴァイナハテン！ レン！ ヘルマンカルツ！ カールハインツ！ シュナイダー！
ゲーエンヴィア！ ティーガー！ フォイエル！ クンスト！ フィーバー！ タウツァー！ シュビングング！ ヘーミーファーザー！ フリーゲン！ バザイティガン！
ゼーユングファー！ ゲッティン！ ヴァイナハテン！ アッシェンプッテルトゥ！ ヴンダーランド！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "Funke Furanme / YAMI MIX",
    romaji: `Funke! Furanme! Porāsusheterun! Pureyāden! Herumankarutsu! Kāruhaintsushunaidā!
YAMI MIX: Raiga! Faita! Saida! Fainda! Doraiba! Beibe! Jya jya! Baribo! Sutoraipa!`,
    hiragana: `ふんけ！ ふらんめ！ ぽらーすすへてるん！ ぷれやーでん！ へるまんかるつ！ かーるはいんつしゅないだー！
やみみっくす： らいが！ ふぁいた！ さいだ！ ふぁいんだ！ どらいば！ べいべ！ じゃっ じゃっ！ ばりぼ！ すとらいぱ！`,
    katakana: `フンケ！ フランメ！ ポラーススヘテルン！ プレヤーデン！ ヘルマンカルツ！ カールハインツシュナイダー！
ヤミミックス： ライガ！ ファイタ！ サイダ！ ファインダ！ ドライバー！ ベイベ！ ジャッ ジャッ！ バリボ！ ストライパ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "BISUMARUKU RO-JOU MIX",
    romaji: `Takamaru yo! 2x
Takamaru hikumaru bisumaruku!
Shinjimaru! Arushindo! Kazudansu!
Knee high! Oh hai! *clap*
Kan chuhai! Oolonghai! Nachuraru high!
I can fly! *jump*`,
    hiragana: `たかまるよ！ 2x
たかまる ひくまる びすまるく！
しんじまる！ あるしんど！ かずだんす！
にーはい！ おーはい！ *clap*
かんちゅうはい！ うーろんはい！ なちゅらるはい！
あいかんふらい！ *jump*`,
    katakana: `タカマルヨ！ 2x
タカマル ヒクマル ビスマルク！
シンジマル！ アルシンド！ カズダンス！
ニーハイ！ オーハイ！ *clap*
カンチューハイ！ ウーロンハイ！ ナチュラルハイ！
アイカンフライ！ *jump*`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "BISUMARUKU KOUJOU MIX",
    romaji: `Kan ！ Zen ！ Kiyoshi ！ Iki ！ Zettai ryōiki nīhaiōhai
Kan chūhai ū ron hai nachuraru hai appurupai
Sankaku choko pai enzeru pai taopaipai fāru furai
Picchā furai kyacchā furai sentā furai I can fly!`,
    hiragana: `かん ！ ぜん ！ きよし ！ いき ！ ぜったいりょういき にーはいおーはい
かんちゅうはい うーろんはい なちゅらるはい あっぷるぱい
さんかくちょこぱい えんぜるぱい たおぱいぱい ふぁーるふらい
ぴっちゃーふらい きゃっちゃーふらい せんたーふらい あいかんふらい！`,
    katakana: `カン ！ ゼン ！ キヨシ ！ イキ ！ ゼッタイリョウイキ ニーハイオーハイ
カンチューハイ ウーロンハイ ナチュラルハイ アップルパイ
サンカクチョコパイ エンゼルパイ タオパイパイ ファールフライ
ピッチャーフライ キャッチャーフライ センターフライ アイカンフライ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PAN MIX (1)",
    romaji: `Pan pan pan pan pokemon pan!
Furesshu bureddo ito pan!
Matsutatako! Matsutatako!
Yamazaki haru no pan matsuri!`,
    hiragana: `ぱん ぱん ぱん ぱん ぽけもんぱん！
ふれっしゅ ぶれっど いとぱん！
まつたたこ！ まつたたこ！
やまざき はるの ぱんまつり！`,
    katakana: `パン パン パン パン ポケモンパン！
フレッシュ ブレッド イトパン！
マツタタコ！ マツタタコ！
ヤマザキ ハルノ パンマツリ！`,

    example: {
      url: 'https://youtu.be/2LezdaecEEc?si=wljo3kS6Rl_bigh_&t=111',
      title: 'FES☆TIVE - OIDEMASE!! 〜極楽〜',
      timestamp: '1:51'
    }
  },
  {
    name: "PAN MIX (2)",
    romaji: `Pan pan pan pan pokemon pan!
Furesshu bureddo ito pan!
An pan shoku pan karē pan!
Yamazaki haru no pan matsuri`,
    hiragana: `ぱん ぱん ぱん ぱん ぽけもんぱん！
ふれっしゅ ぶれっど いとぱん！
あんぱん しょくぱん かれーぱん！
やまざき はるの ぱんまつり`,
    katakana: `パン パン パン パン ポケモンパン！
フレッシュ ブレッド イトパン！
アンパン ショクパン カレーパン！
ヤマザキ ハルノ パンマツリ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KANOURYOU / PAN MIX TAIKETSU",
    romaji: `Panpanpanpan hara panpan!
Agatta otaku no hara panpan!
Kanouryou! Kanouryou!
Minō tainō kanouryou!`,
    hiragana: `ぱんぱんぱんぱん はらぱんぱん！
あがった おたくの はらぱんぱん！
かおうりょう！ かおうりょう！
みのう たいのう かおうりょう！`,
    katakana: `パンパンパンパン ハラパンパン！
アガッタ オタクノ ハラパンパン！
カオウリョウ！ カオウリョウ！
ミノウ タイノウ カオウリョウ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHIKIPA MIX",
    romaji: `Raion! Tora! Chītā!
Ratarata! Ratorātā!
Sai! Gorira! Zō!
Sagōzo! Sagōzo!
Eiyoo! Eiyoo! Eiyoo! Eiyoo!
Kapusaishintte Shiteru?
[Eiyo katede shibou kan/kimo!]`,
    hiragana: `らいおん！ とら！ ちーたー！
らたらた！ らとらーたー！
さい！ ごりら！ ぞう！
さごーぞ！ さごーぞ！
えいよー！ えいよー！ えいよー！ えいよー！
かぷさいしんって してる？
[えいよ かてで しぼう かん/きも！]`,
    katakana: `ライオン！ トラ！ チーター！
ラタラタ！ ラトラーター！
サイ！ ゴリラ！ ゾウ！
サゴーゾ！ サゴーゾ！
エイヨー！ エイヨー！ エイヨー！ エイヨー！
カプサイシンッテ シテル？
[エイヨ カテデ シボウ カン/キモ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DONGURI CHIKIPA MIX",
    romaji: `Sai! Panda! Hashibirokō!
Uenodōbutsuen no rain'nappu!`,
    hiragana: `さい！ ぱんだ！ はしびろこう！
うえのどうぶつえんの らいんなっぷ！`,
    katakana: `サイ！ パンダ！ ハシビロック！
ウエノドウブツエンノ ラインナップ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SAFARI MIX",
    romaji: `Raion! Tora! Chītā!
Ratarata! Ratorātā!
Sai! Gorira! Zō!
Sagōzo! Sagōzo!
Hontouni (hontouni)! 2x
Raion da!`,
    hiragana: `らいおん！ とら！ ちーたー！
らたらた！ らとらーたー！
さい！ ごりら！ ぞう！
さごーぞ！ さごーぞ！
ほんとうに （ほんとうに）！ 2x
らいおんだ！`,
    katakana: `ライオン！ トラ！ チーター！
ラタラタ！ ラトラーター！
サイ！ ゴリラ！ ゾウ！
サゴーゾ！ サゴーゾ！
ホントウニ （ホントウニ）！ 2x
ライオンダ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KONTON / WORLD CHAOS MIX",
    romaji: `Wa! 6x
Warudokaosu! Shogyou! Kogure! Shigure! Kagura! Kongousan shoushusha!
[Kokuun! Mujou! Sekai konton!]`,
    hiragana: `わ！ 6x
わーるどかおす！ しょぎょう！ こぐれ！ しぐれ！ かぐら！ こんごうさん しょうしゅしゃ！
[こくうん！ むじょう！ せかいこんとん！]`,
    katakana: `ワ！ 6x
ワールドカオス！ ショギョウ！ コグレ！ シグレ！ カグラ！ コンゴウザン ショウシュシャ！
[コクウン！ ムジョウ！ セカイコントン！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "REVERSE KONTON / WORLD CHAOS MIX",
    romaji: `Shou! 6x
Shoushusha! Kongousan! Kagura! Shigure! Kogure! Shogyou! Warudokaosu!`,
    hiragana: `しょう！ 6x
しょうしゅしゃ！ こんごうさん！ かぐら！ しぐれ！ こぐれ！ しょぎょう！ わーるどかおす！`,
    katakana: `ショウ！ 6x
ショウシュシャ！ コンゴウザン！ カグラ！ シグレ！ コグレ！ ショギョウ！ ワールドカオス！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KONTON GYAKUUCHI MIX",
    romaji: `Sekai konton! Mujou! Kokuun! Shoushusha! Kongousan!
Kagura! Shigure! Kogure! Shogyou! Warudokaosu!`,
    hiragana: `せかいこんとん！ むじょう！ こくうん！ しょうしゅしゃ！ こんごうさん！
かぐら！ しぐれ！ こぐれ！ しょぎょう！ わーるどかおす！`,
    katakana: `セカイコントン！ ムジョウ！ コクウン！ ショウシュシャ！ コンゴウザン！
カグラ！ シグレ！ コグレ！ ショギョウ！ ワールドカオス！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KONTON/WORLD CHAOS MIX (BACK STRIKE VER)",
    romaji: `Sekai konton! Mujō! Kurokumo! Shō kasane mata! Kongōsan!
Jinraku! Shigure! Kogure! Shogyō! Wārudo kaosu!`,
    hiragana: `せかいこんとん！ むじょう！ くろくも！ しょうかさねまた！ こんごうざん！
じんらく！ しぐれ！ こぐれ！ しょぎょう！ わーるどかおす！`,
    katakana: `セカイコントン！ ムジョウ！ クロクモ！ ショウカサネマタ！ コンゴウザン！
ジンラク！ シグレ！ コグレ！ ショギョウ！ ワールドカオス！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ASHURA KONTON MIX",
    romaji: `wārudo kaosu shogyō kogure shigure kagura kongōsan shō kasane mata goku un yume sakai meikai tsuyo tsuyoshi nauda mamoriasutā`,
    hiragana: `わーるどかおす しょぎょう こぐれ しぐれ かぐら こんごうざん しょうかさねまた ごくうん ゆめさかい めいかい つよつよし なうだ まもりあすたー`,
    katakana: `ワールドカオス ショギョウ コグレ シグレ カグラ コンゴウザン ショウカサネマタ ゴクウン ユメサカイ メイカイ ツヨツヨシ ナウダ マモリアスター`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KONTON MIX (PAINTED LUXURY CAR VER)",
    romaji: `sakkā buin ! shiai ！ ieji ！ tsukare ！ tsuitotsu ！ kuronuri no ！ kōkyūsha ！ kōhai ！ miura ！ jidan no jōken ！`,
    hiragana: `さっかーぶいん ほうこく ！ しあい ！ いえじ ！ つかれ ！ ついとつ ！ くろぬりの ！ こうきゅうしゃ ！ こうはい ！ みうら ！ じだんのじょうけん ！`,
    katakana: `サッカーブイン ホウコク ！ シアイ ！ イエジ ！ ツカレ ！ ツイトツ ！ クロヌリノ ！ コウキュウシャ ！ コウハイ ！ ミウラ ！ ジダンノジョウケン ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "WORLD PEACE MIX",
    romaji: `Wa! 6x Warudopisu! Inori! Futsu! Hikaku-ka! Dōtoku! Jizen katsudō! Darai! Rama!
Yoi kokusaku rō kamakura bakufu ！ ！`,
    hiragana: `わ！ 6x わーるどぴーす！ いのり！ ふつ！ ひかくか！ どうとく！ じぜんかつどう！ だらい！ らま！
よいこくさくろう かまくらばくふ ！！`,
    katakana: `ワ！ 6x ワールドピース！ イノリ！ フツ！ ヒカクカ！ ドウトク！ ジゼンカツドウ！ ダライ！ ラマ！
ヨイコクサクロウ カマクラバクフ ！！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SANKAKU KANSU MIX",
    romaji: `Ore to omae no akai ito! Ore no, Ore no, ◯◯! Iyaa Iyaa Iyaa Iyaa Iyaa Iyaa Iyaa Iyaa O- re- no- ◯◯!
Sain kosain tanjento! Toraianguru Dorimaa!`,
    hiragana: `おれと おまえの あかいいと！ おれの、 おれの、 ◯◯！ いやー いやー いやー いやー いやー いやー いやー いやー おー れー のー ◯◯！
さいん こさいん たんじぇんと！ とらいあんぐる どりーまー！`,
    katakana: `オレト オマエノ アカイイト！ オレノ、 オレノ、 ◯◯！ イイヤー イイヤー イイヤー イイヤー イイヤー イイヤー イイヤー イイヤー オー レー ノー ◯◯！
サイン コサイン タンジェント！ トライアングル ドリーマー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "INU NEKO MIX",
    romaji: `Aa~! Jya~! Jya~!
Nya! Nya! Nya! Nya! Nya! Nya! Nyanpokora!
Wan! Wan! Wan! Wan! Wan! Wan! Wankopora!`,
    hiragana: `あー！ じゃー！ じゃー！
にゃ！ にゃ！ にゃ！ にゃ！ にゃ！ にゃ！ にゃんぽこら！
わん！ わん！ わん！ わん！ わん！ わん！ わんこぽら！`,
    katakana: `アー！ ジャッ！ ジャッ！
ニャ！ ニャ！ ニャ！ ニャ！ ニャ！ ニャ！ ニャンポコラ！
ワン！ ワン！ ワン！ ワン！ ワン！ ワン！ ワンコポラ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NANASE MIX",
    romaji: `Oo~ *clap* *clap* 2x
Oo~ kiina koe de, oo~
Oo~ *clap* *clap* 2x
Ichi ni san shi go roku Nanase! / Ichi ni ichi ni ichi ni san shi!`,
    hiragana: `おー *clap* *clap* 2x
おー きーなこえで、 おー
おー *clap* *clap* 2x
いち に さん し ご ろく ななせ！ / いち に いち に いち に さん し！`,
    katakana: `オー *clap* *clap* 2x
オー キーナコエデ、 オー
オー *clap* *clap* 2x
イチ ニ サン シ ゴ ロク ナナセ！ / イチ ニ イチ ニ イチ ニ サン シ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ROKETTODAN KOUJOU",
    romaji: `Nanda kanda to iwaretara!
Kotaete ageru ga yono nasake!
Sekai no heiwa wo mamoru tame!
Wasuta! Wasuta! World standart!`,
    hiragana: `なんだ かんだと いわれたら！
こたえて あげるが よのなさけ！
せかいの へいわを まもるため！
わすた！ わすた！ わーるど すたんだーど！`,
    katakana: `ナンダ カンダト イワレタラ！
コタエテ アゲルガ ヨノナサケ！
セカイノ ヘイワヲ マモルタメ！
ワスタ！ ワスタ！ ワールド スタンダード！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HOGWARTS MIX",
    romaji: `Marufoi! 4x
Aaaaaa~ *clap* gryffindor!
Akushio redakuto rumos!
Uingga-diamu rebiosa!
Anata no wa, rebiosa!
Ekusupekuto patoronamu!
Tomu ridoru! tomu ridoru!
Borudemottotte shiteru?
[Hāmaionī! Gurenjā!]`,
    hiragana: `まるふぉい！ 4x
あーーーー *clap* ぐりふぃんどーる！
あくしお れだくと るもす！
ういんがーでぃあむ れびおーさ！
あなたのは、 れびおーさ！
えくすぺくと ぱとろーなむ！
とむ りどる！ とむ りどる！
ぼるでもっとって してる？
[はーまいおにー！ ぐれんじゃー！]`,
    katakana: `マルフoi！ 4x
アーーーー *clap* グリフィンドール！
アクシオ レダクト ルモス！
ウィンガーディアム レビオーサ！
アナタノハ、 レビオーサ！
エクスペクト パトローナム！
トム リドル！ トム リドル！
ヴォルデモットッテ シテル？
[ハーマイオニー！ グレンジャー！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOKUSHU KAIHEN MIX",
    romaji: `Uisupekesui! Chape chape chape!
Chape ape kara kina kara ape chape!
Jokyo tobi jokyo! Tora tora tora!
Tora hi jinzou senni ama shindou kasen!`,
    hiragana: `うぃすぺけすい！ ちゃぺ ちゃぺ ちゃぺ！
ちゃぺ あぺ から きな から あぺ ちゃぺ！
じょきょ とび じょきょ！ とら とら とら！
とら ひ じんぞう せんに あま しんどう かせん！`,
    katakana: `ウィスペケスイ！ チャペ チャペ チャペ！
チャペ アペ カラ キナ カラ アペ チャペ！
ジョキョ トビ ジョキョ！ トラ トラ トラ！
トラ ヒ ジンゾウ センニ アマ シンドウ カセン！`,

    example: {
      url: 'https://youtu.be/2LezdaecEEc?si=99jbUZNxcLmOnAof&t=177',
      title: 'FES☆TIVE - OIDEMASE!! 〜極楽〜',
      timestamp: '2:57'
    }
  },
  {
    name: "KAIHEN 3 REN MIX (1)",
    romaji: `Jinzou faiya faibo waipa!
Taiga taiga tatatata taiga!
Chape ape kara kina 2x
Myohontusuke *clap*, waipa!
Faiya faiya tora tora kara kina
Chape ape faama, ama ama jasupa!
Tora taiga! tora taiga!
Jinzou senni iettaiga!`,
    hiragana: `じんぞう ふぁいやー ふぁいぼ わいぱー！
たいがー たいがー たたたた たいがー！
ちゃぺ あぺ から きな 2x
みょうほんつすけ *clap*、 わいぱー！
ふぁいやー ふぁいやー とら とら から きな
ちゃぺ あぺ ふぁーま、 あま あま じゃすぱ！
とら たいがー！ とら たいがー！
じんぞう せんに いぇったいがー！`,
    katakana: `ジンゾウ ファイヤー ファイボ ワイパー！
タイガー タイガー タタタタ タイガー！
チャペ アペ カラ キナ 2x
ミョウホンツスケ *clap*、 ワイパー！
ファイヤー ファイヤー トラ トラ カラ キナ
チャペ アペ ファーマ、 アマ アマ ジャスパ！
トラ タイガー！ トラ タイガー！
ジンゾウ セニ イェッタイガー！`,

    example: {
      url: 'https://youtu.be/Vcg_-42M5qc?si=SnlCm6K9jj3-suq-&t=132',
      title: '真っ白なキャンバス - SHOUT',
      timestamp: '2:12'
    }
  },
  {
    name: "KAHEN 3 REN MIX (2)",
    romaji: `Jinzō fāma seni jasupā!
Daibā daibā dadadada daibā
Torahi jokyo hi torahi jokyo hi!
Myōhontusuke sutoraipā!
Faitā faitā jinzō chapeape!
Jokyo hi saidā karakinawaipā!
Ama daibā! Ama daibā!
Wārudo kaosu ieddaibā!`,
    hiragana: `じんぞう ふぁーま せに じゃすぱー！
だいばー だいばー だだだだ だいばー
とらひ じょきょ ひ とらひ じょきょ ひ！
みょうほんつすけ すとらいぱー！
ふぁいたー ふぁいたー じんぞう ちゃぺあぺ！
じょきょ ひ さいだー からきなわいぱー！
あま だいばー！ あま だいばー！
わーるどかおす いぇっだいばー！`,
    katakana: `ジンゾウ ファーマ セニ ジャスパー！
ダイバー ダイバー ダダダダ ダイバー
トラヒ ジョキョ ヒ トラヒ ジョキョ ヒ！
ミョウホンツスケ ストライパー！
ファイター ファイター ジンゾウ チャペアペ！
ジョキョ ヒ サイダー カラキナワイパー！
アマ ダイバー！ アマ ダイバー！
ワールドカオス イェッダイバー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAIHEN 3 REN MIX (CAPTAIN TSUBA VER) [1]",
    romaji: `Kita kita kita kita waitekita!
Taiga taiga taiga shotto!
Tora tai tora tai tora taiga!
Jinzou seni iettaiga!
Jya jya! Jya jya! Baribaribo!
Suto suto suto suto sutoraika!
Karu hainsu shunaida!
Sukai! Rabu! Hariken!`,
    hiragana: `きた きた きた きた わいてきた！
たいがー たいがー たいがー しょっと！
とらたい とらたい とらたいがー！
じんぞう せんに いぇったいがー！
じゃっ じゃっ！ じゃっ じゃっ！ ばりばりぼー！
すと すと すと すと すとらいか！
かーる はいんつ しゅないだー！
すかい！ らぶ！ はりけーん！`,
    katakana: `キタ キタ キタ キタ ワイテキタ！
タイガー タイガー タイガー ショット！
トラタイ トラタイ トラタイガー！
ジンゾウ セニ イェッタイガー！
ジャッ ジャッ！ ジャッ ジャッ！ バリバリボー！
スト スト スト スト ストライカ！
カール ハインツ シュナイダー！
スカイ！ ラブ！ ハリケーン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAIHEN 3 REN MIX (CAPTAIN TSUBA VER) [2]",
    romaji: `Kita kita kita kita waitekita!
Taiga taiga tatatata taiga!
Toratai toratai torataiga!
Jinzou seni iettaiga!
Jya jya! Jya jya! Baribaribo!
Suto suto suto suto sutoraipa!
Tora taiga! Tora taiga!
Jinzou seni iettaiga!`,
    hiragana: `きた きた きた きた わいてきた！
たいがー たいがー たたたた たいがー！
とらたい とらたい とらたいがー！
じんぞう せんに いぇったいがー！
じゃっ じゃっ！ じゃっ じゃっ！ ばりばりぼー！
すと すと すと すと すとらいぱー！
とら たいがー！ とら たいがー！
じんぞう せんに いぇったいがー！`,
    katakana: `キタ キタ キタ キタ ワイテキタ！
タイガー タイガー タタタタ タイガー！
トラタイ トラタイ トラタイガー！
ジンゾウ セニ イェッタイガー！
ジャッ ジャッ！ ジャッ ジャッ！ バリバリボー！
スト スト スト スト ストライパー！
トラ タイガー！ トラ タイガー！
ジンゾウ セニ イェッタイガー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SONOTA NO KAHEN 3 REN MIX",
    romaji: `Jinzō faiya faibo waipā!
Taigā taigā tatatata taigā!
Chapeapekarakinachapeapekarakina!
Myōhontusuke *clap* waipā!
Wīsupe kesui! Chapechapechape!
Chapeapekarakinakarāpechape!
Jokyo hi jokyo tora tora tora!
Kasen hi kasen hi kasen hi waipā!`,
    hiragana: `じんぞう ふぁいやー ふぁいぼ わいぱー！
たいがー たいがー たたたた たいがー！
ちゃぺあぺからきな ちゃぺあぺからきな！
みょうほんつすけ *clap* わいぱー！
うぃーすぺ けすい！ ちゃぺちゃぺちゃぺ！
ちゃぺあぺからきな からあぺちゃぺ！
じょきょ ひ じょきょ とら とら とら！
かせん ひ かせん ひ かせん ひ わいぱー！`,
    katakana: `ジンゾウ ファイヤー ファイボ ワイパー！
タイガー タイガー タタタタ タイガー！
チャペアペカラキナ チャペアペカラキナ！
ミョウホンツスケ *clap* ワイパー！
ウィースペ ケスイ！ チャペチャペチャペ！
チャペアペカラキナ カラアペチャペ！
ジョキョ ヒ ジョキョ トラ トラ トラ！
カセン ヒ カセン ヒ カセン ヒ ワイパー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TANBO NO YOUSU GA OKASHI MIX",
    romaji: `Yosuiro! Konbain! Tanbo no yousu ga! *clap*, okashi!`,
    hiragana: `ようすいろ！ こんばいん！ たんぼの ようすが！ *clap*、 おかしい！`,
    katakana: `ヨウスイロ！ コンバイン！ タンボノ ヨウスガ！ *clap*、 オカシイ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TANBO KOUJOU 3 REN MIX",
    romaji: `nōringyō suisangyō
sakana no yōsu mo *clap* okashī
koshihikari 〜 sasanishiki 〜
iya kakeru 4x mate kakeru 4x
yōsuiro konbain
tanbo no yōsu ga *clap* okashī ！`,
    hiragana: `のうりんぎょう すいさんぎょう
さかなの ようすも *clap* おかしい
こしひかり 〜 ささにしき 〜
いや かける 4x まて かける 4x
ようすいろ こんばいん
たんぼの ようすが *clap* おかしい ！`,
    katakana: `ノーリンギョウ スイサンギョウ
サカナノ ヨウスモ *clap* オカシイ
コシヒカリ 〜 ササニシキ 〜
イヤ カケル 4x マテ カケル 4x
ヨウスイロ コンバイン
タンボノ ヨウスガ *clap* オカシイ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TSUNAGARITAIGA MIX",
    romaji: `Tsunagaritai! Tsunagaritai!
Yappari ◯◯ to tsunagaritai!
Tsunagaritai! Tsunagaritai!
Tsunagaritai kara tsunagaritaiga~
Faiya~ saiba~ faiba~ daiba~ baiba~ Jya~jya~ Faibo!
Injo! jasupa! birubaru! kasen!
Ieenaruda faboriasuta!`,
    hiragana: `つながりたい！ つながりたい！
やっぱり ◯◯ と つながりたい！
つながりたい！ つながりたい！
つながりたいから つながりたいがー
ふぁいやー さいばー ふぁいばー だいばー ばいばー じゃっじゃっ ふぁいぼ！
いんじょ！ じゃすぱ！ びるばる！ かせん！
いえーなるだ ふぁぼりあすた！`,
    katakana: `ツナガリタイ！ ツナガリタイ！
ヤッパリ ◯◯ ト ツナガリタイ！
ツナガリタイ！ ツナガリタイ！
ツナガリタイカラ ツナガリタイガー
ファイヤー サイバー ファイバー ダイバー バイバー ジャッジャッ ファイボ！
インジョ！ ジャスパ！ ビルバル！ カセン！
イエーナルダ ファボリアスタ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYLXXX KOJO",
    romaji: `Pantsu o nugisutedesuto roi!
Genkijirushi to yūtōsei!
Yotte rasshai mite rasshai!
Shinsei aidoru kenkyūkai`,
    hiragana: `ぱんつを ぬぎすて ですとろい！
げんきじるしと ゆうとうせい！
よってらっしゃい みてらっしゃい！
しんせい あいどる けんきゅうかい`,
    katakana: `パンツヲ ヌギステ デストロイ！
ゲンキジルシト ユウトウセイ！
ヨッテラッシャイ ミテラッシャイ！
シンセイ アイドル ケンキュウカイ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IROHA UTA KOUJOU (1)",
    romaji: `iro wa nioi e do chiri nuru o
waga yo dare so tsune naran
yūi no okuyama kyō koete
asaki yumemiji ei mo sezu
tenka musō no otakebi de
konoyo ga owaru sono hi made
kyōran uraramai no na no shita ni
sakasete misemasu ai no hana`,
    hiragana: `いろは にほへと ちりぬるを
わがよ たれぞ つねならん
ういのおくやま きょうこえて
あさきゆめみじ えいもせず
てんかむそうの おたけびで
このよが おわる そのひまで
きょうらん うららまいの なのしたに
さかせて みせます あいのはな`,
    katakana: `イロハ ニホヘト チリヌルヲ
ワガヨ タレゾ ツネナラン
ウイノオクヤマ キョウコエテ
アサキユメミジ エイモセズ
テンカムソウノ オタケビデ
コノヨガ オワル ソノヒマデ
キョウラン ウララマイノ ナノシタニ
サカセテ ミセマス アイノハナ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IROHA UTA KOUJOU (2)",
    romaji: `Irohanihoheto chiri nuru o! Waka yotare so tsunenara mu! Uinookuyama kyō koete! Asaki yumemishi yoi mo sezu! Tenka musō no otakebi de! Ōka ranman sakihokore! Kyōran ribu no na no gen ni! Saka sete mise yo Gosei no hana!`,
    hiragana: `いろは にほへと ちりぬるを！ わがよ たれぞ つねならん！ ういのおくやま きょうこえて！ あさきゆめみし よいもせず！ てんかむそうの おたけびで！ おうからんまん さきほこれ！ きょうらん りぶの なのげんに！ さかせて みせよ ごせいのはな！`,
    katakana: `イロハ ニホヘト チリヌルヲ！ ワガヨ タレゾ ツネナラン！ ウイノオクヤマ キョウコエテ！ アサキユメミシ ヨイモセズ！ テンカムソウノ オタケビデ！ オウカランマン サキホコレ！ キョウラン リブノ ナノゲンニ！ サカセテ ミセヨ ゴセイノハナ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ULTIMATE MIX (1)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, fama patoronamu! Ore to taiga tomuridoru! Vorudemottotte Iettaiga!`,
    hiragana: `いいたいことが ふぁいぼまるふぉい！ やっぱり ◯◯ ぐりふぃんたいがー！ あくしお ちゃぺ あぺ やっぱすき！ ういんがーつすけ おひめさま！ ふぁいやー おれと れびおーさ からきな それは、 ふぁーま ぱとろーなむ！ おれと たいがー とむりどる！ ぼるでもっとって いぇったいがー！`,
    katakana: `イイタイコトガ ファイボマルフoi！ ヤッパリ ◯◯ グリフィンタイガー！ アクシオ チャペ アペ ヤッパスキ！ ウィンガーツスケ オヒメサマ！ ファイヤー オレト レビオーサ カラキナ ソレハ、 ファーマ パトローナム！ オレト タイガー トム リドル！ ヴォルデモットッテ イェッタイガー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ULTIMATE MIX (2)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, famapatoronamu! Ore to jinsei tomuridoru! Sekai de ichiban, gurenja!`,
    hiragana: `いいたいことが ふぁいぼまるふぉい！ やっぱり ◯◯ ぐりふぃんたいがー！ あくしお ちゃぺ あぺ やっぱすき！ ういんがーつすけ おひめさま！ ふぁいやー おれと れびおーさ からきな それは、 ふぁーま ぱとろーなむ！ おれと じんせい とむりどる！ せかいで いちばん、 ぐれんじゃー！`,
    katakana: `イイタイコトガ ファイボマルフoi！ ヤッパリ ◯◯ グリフィンタイガー！ アクシオ チャペ アペ ヤッパスキ！ ウィンガーツスケ オヒメサマ！ ファイヤー オレト レビオーサ カラキナ ソレハ、 ファーマ パトローナム！ オレト ジンセイ トム リドル！ セカイデ イチバン、 グレンジャー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IETTAIGA KARA NO",
    romaji: `Iettaiga kara no! Iettaiga kara no! Iettaiga kara no! Iettaiga!`,
    hiragana: `いぇったいがー からの！ いぇったいがー からの！ いぇったいがー からの！ いぇったいがー！`,
    katakana: `イェッタイガー カラノ！ イェッタイガー カラノ！ イェッタイガー カラノ！ イェッタイガー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "UNCHI MIX",
    romaji: `Faibo waipa! Wa wa wa wa waipa! Faama jyasupa! Jya jya jya jya jyasupa! Howaipa kuupa! Ku ku ku ku kuupa! Iesukuraipa ie iesukuraipa! Raiga faitaa! Ra ra ra ra raiga! Saida faindaa! Sa sa sa sa saida! Doraiba beibe! Do do do do doraiba! Jya jya jya jya! Baribaribo! Suto suto suto suto sutoraipa!`,
    hiragana: `ふぁいぼ わいぱー！ わ わ わ わ わいぱー！ ふぁーま じゃすぱ！ じゃ じゃ じゃ じゃ じゃすぱ！ ほわいぱー くーぱ！ く く く く くーぱ！ いぇすくらいぱ いぇ いぇすくらいぱ！ らいが ふぁいたー！ ら ら ら ら らいが！ さいだ ふぁいんだー！ さ さ さ さ さいだ！ どらいばー べいべ！ ど ど ど ど どらいばー！ じゃっ じゃっ じゃっ じゃっ！ ばりばりぼー！ すと すと すと すと すとらいぱー！`,
    katakana: `ファイボ ワイパー！ ワ ワ ワ ワ ワイパー！ ファーマ ジャスパ！ ジャ ジャ ジャ ジャ ジャスパ！ ホワイパー クーパ！ ク ク ク ク クーパ！ イェスクライパ イェ イェスクライパ！ ライガ ファイター！ ラ ラ ラ ラ ライガ！ サイダ ファインダー！ サ サ サ サ サイダ！ ドライバー ベイベ！ ド ド ド ド ドライバー！ ジャッ ジャッ ジャッ ジャッ！ バリバリボー！ スト スト スト スト ストライパー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "STANDARD UNCHI KAHEN MIX",
    romaji: `Taigā faiyā tatatatataigā! Saibā faibā sasasasasaibā! Daibā baibā dada dada daibā! Jya jya jyajya, jyajyajyajyajyajya!`,
    hiragana: `たいがー ふぁいやー たたたたたたいがー！ さいばー ふぁいばー ささささささいばー！ だいばー ばいばー だだ だだ だいばー！ じゃっ じゃっ じゃっじゃ、 じゃっじゃっじゃっじゃっじゃっじゃ！`,
    katakana: `タイガー ファイヤー タタタタタタイガー！ サイバー ファイバー ササササササイバー！ ダイバー バイバー ダダ ダダ ダイバー！ ジャッ ジャッ ジャッジャ、 ジャッジャッジャッジャッジャッジャ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TSUME NO UNCHI MIX",
    romaji: `Taigā faiyā tatatatataigā
Saibā faibā sasasasasaibā
Daibā baibā dada dada daibā
Jā jā faibo wawawawawaipā
Janpā pingā pipipipipingā
Dansu fāmā fafafafafāmā
Sapuri fingā fififififingā
Se ibu baizā bababababaizā`,
    hiragana: `たいがー ふぁいやー たたたたたたいがー
さいばー ふぁいばー ささささささいばー
だいばー ばいばー だだ だだ だいばー
じゃー じゃー ふぁいぼ わわわわわわいぱー
じゃんぱー ぴんがー ぴぴぴぴぴぴんがー
だんす ふぁーまー ふぁふぁふぁふぁふぁふぁーまー
さぷり ふぃんがー ふぃふぃふぃふぃふぃふぃんがー
せいぶ ばいざー ばばばばばばいざー`,
    katakana: `タイガー ファイヤー タタタタタタイガー
サイバー ファイバー ササササササイバー
ダイバー バイバー ダダ ダダ ダイバー
ジャー ジャー ファイボ ワワワワワワイパー
ジャンパー ピンガー ピピピピピピンガー
ダンス ファーマー ファファファファファーマー
サプリ フィンガー フィフィフィフィフィンガー
セイブ バイザー ババババババイザー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHAPE KAHEN MIX",
    romaji: `Sekai de ichiban aishiteru! ◯◯ ni sasageru chape tora taiga! Chape! 8x Ai! Rabu! Yuu!`,
    hiragana: `せかいで いちばん あいしてる！ ◯◯ に ささげる ちゃぺ とら たいがー！ ちゃぺ！ 8x あい！ らぶ！ ゆう！`,
    katakana: `セカイデ イチバン アイシテル！ ◯◯ ニ ササゲル チャペ トラ タイガー！ チャペ！ 8x アイ！ ラブ！ ユウ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DAN MIX",
    romaji: `Dan! Dandandan! Dan! Dandandan! Hai! se~no! Iettaiga! Kara no Iettaiga! x3`,
    hiragana: `だん！ だんだんだん！ だん！ だんだんだん！ はい！ せーの！ いぇったいがー！ からの いぇったいがー！ x3`,
    katakana: `ダン！ ダンダンダン！ ダン！ ダンダンダン！ ハイ！ セーノ！ イェッタイガー！ カラノ イェッタイガー！ x3`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NIKO NIKO LOVERS MIX",
    romaji: `Koitsuru usagi ni koi o shite! Niko niko LOVERS aishiteru!`,
    hiragana: `こいする うさぎに こいをして！ にこにこ らばーず あいしてる！`,
    katakana: `コイスル ウサギニ コイヲシテ！ ニコニコ ラバーズ アイシテル！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HALCA KAKO TSUI KAHEN MIX",
    romaji: `Jinzou haruka chinpo waipa! Haruka haruka, hahahaha haruka! Motto negi taso peropero chi ~yutchu! Haruka no kako tsu~i! *clap* chinpo! Man man man man oishī toire seiya no hiru meshi Matsuya no gyūsara! Nanpa nau nanpa nau a ̄ ma Miya sora iettaigā! Faibo! Waipā! Janpā! Pingā! Dansu! Fāmā!`,
    hiragana: `じんぞう はるか ちんぽ わいぱー！ はるか はるか、 はははは はるか！ もっと ねぎたそ ぺろぺろ ちゅっちゅ！ はるかの かこつい！ *clap* ちんぽ！ まん まん まん まん おいしい といれ せいやの ひるめし まつやの ぎゅうさら！ なんぱなう なんぱなう あーま みやそら いぇったいがー！ ふぁいぼ！ わいぱー！ じゃんぱー！ ぴんがー！ だんす！ ふぁーまー！`,
    katakana: `ジンゾウ ハルカ チンポ ワイパー！ ハルカ ハルカ、 ハハハハ ハルカ！ モット ネギタソ ペロペロ チュッチュ！ ハルカノ カコツイ！ *clap* チンポ！ マン マン マン マン オイシイ トイレ セイヤノ ヒルメシ マツヤノ ギュウサラ！ ナンパナウ ナンパナウ アーマ ミヤソラ イェッタイガー！ ファイボ！ ワイパー！ ジャンパー！ ピンガー！ ダンス！ ファーマー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKARAKUJI MIX",
    romaji: `dorīmu janbo 3 oku en
koin de kezutte sukuracchi
mine ryūta mine ryūta
igaito ataruze nanbāzu`,
    hiragana: `どりーむ じゃんぼ 3おくえん
こいんで けずって すくらっち
みねりゅうた みねりゅうた
いがいと あたるぜ なんばーず`,
    katakana: `ドリーム ジャンボ 3オクエン
コインデ ケズッテ スクラッチ
ミネリュウタ ミネリュウタ
イガイト アタルゼ ナンバーズ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "YURU KAWA NO NAMAE-KEI KŌRU",
    romaji: `Neko! Neko! Shiina neko! Iitai koto ga Mochida Mayu! Tora! Hi! Jinzou! Seni! Ama! Bara! Ruri-chan!`,
    hiragana: `ねこ！ ねこ！ しいなねこ！ いいたいことが もちだまゆ！ とら！ ひ！ じんぞう！ せに！ あま！ ばら！ るりちゃん！`,
    katakana: `ネコ！ ネコ！ シイナネコ！ イイタイコトガ モチダマユ！ トラ！ ヒ！ ジンゾウ！ セニ！ アマ！ バラ！ ルリチャン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "METCHA MISUTTEMASU KAHEN MIX",
    romaji: `Bukkuofunoni hon ne ~ejan'neejan'neejan'nenenenene~ejan! Bukkuofunanoni bukkuofunanoni bukkuofunanoni! *clap* Nējan! Hon nē hon ne~e bukkuofunanoni bukkuofunanoni motomotone~ejan! Bukkuofubukkuofubukkuofunanoni hon'ne~ejan!`,
    hiragana: `ぶっくおふなのに ほんねーじゃん ねえじゃん ねえじゃん ねねねねねーじゃん！ ぶっくおふなのに ぶっくおふなのに ぶっくおふなのに！ *clap* ねえじゃん！ ほんねー ほんねー ぶっくおふなのに ぶっくおふなのに もともとねーじゃん！ ぶっくおふ ぶっくおふ ぶっくおふなのに ほんねーじゃん！`,
    katakana: `ブックオフナノニ ホンネージャン ネエジャン ネエジャン ネネネネネージャン！ ブックオフナノニ ブックオフナノニ ブックオフナノニ！ *clap* ネエジャン！ ホンネ ホンネ ブックオフナノニ ブックオフナノニ モトモトネージャン！ ブックオフ ブックオフ ブックオフナノニ ホンネージャン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PIZZA MIX",
    romaji: `Sha! Yakuzo! Bisumaruku! Banbīna! Kapurichōza! Rimōne! Fungiton'nāta! Marugerīta! Jenoa! Kuatoroforumajji!`,
    hiragana: `しゃー！ やくぞ！ びすまるく！ ばんびーな！ かぷりちょーざ！ りもーね！ ふんぎとんなーた！ まるげりーた！ じぇのあ！ くあとろふぉるまっじ！`,
    katakana: `シャー！ ヤクゾ！ ビスマルク！ バンビーナ！ カプリチョーザ！ リモーネ！ フンギトンナータ！ マルゲリータ！ ジェノア！ クアトロフォルマッジ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NERU NERU NE MIX",
    romaji: `Neru neru neru neru 3x Neru ne! Nereba neru hodo iro ga kawatte *clap* umai tēretterē!`,
    hiragana: `ねる ねる ねる ねる 3x めるね！ ねれば ねるほど いろが かわって *clap* うまい てーれってれー！`,
    katakana: `ネル ネル ネル ネル 3x ネルネ！ ネレバ ネルホド イロガ カワッテ *clap* ウマイ テーレッテレー！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "OYASUMI MIX",
    romaji: `Gunnaito! Wan'an! Jaruja! Bonanitto! Bonnyui! Buonanotte! Gūtenahato! Buenasunōchesu! Supakoinainōchi!`,
    hiragana: `ぐんないと！ わんあん！ じゃるじゃ！ ぼなーにっと！ ぼんにゅい！ ぼなーのって！ ぐーてんあはと！ ぶえなすのーちぇす！ すぱこいないのーち！`,
    katakana: `グンナイト！ ワンアン！ ジャルジャ！ ボナーニット！ ボンニュイ！ ボナーノッテ！ グーテンアハト！ ブエナスノーチェス！ スパコイナイノーチ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "LINE I YARANAI TOSHI RYŪ",
    romaji: `Ai wa 〜 ~tsu! Nari yamanai uta a~tsu! Ai wa 〜 ~tsu! Michibiki no tobira ~tsu! Shiren ataete wa toriaru Su kami-tachi o itsunohika koete yukeru (LINE LINE o yaranai *clap* Toshi Ryū)!`,
    hiragana: `あいは 〜 っ！ なりやまないうた あーっ！ あいは 〜 っ！ みちびきのとびら 〜 っ！ しれんあたえては とりある す かみたちを いつのひか こえてゆける （LINE LINEを やらない *clap* としりゅう）！`,
    katakana: `アイハ 〜 ッ！ ナリヤマナイウタ アーッ！ アイハ 〜 ッ！ ミチビキノトビラ 〜 ッ！ シレンアタエテハ トリアル ス カミタチヲ イツノヒカ コエテユケル （LINE LINEヲ ヤラナイ *clap* トシリリュウ）！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KYARI MIX",
    romaji: `Disutineshon! Suromoshon! Konbineshon! Gurade-yueshon! Inbiteshon! Tenputeshon! Reboryushon! Kanashimi! Kyaribureshon!`,
    hiragana: `でぃすてぃねーしょん！ すろーもしょん！ こんびねーしょん！ ぐらでゅえーしょん！ いんびてーしょん！ てんぷてーしょん！ れぼりゅーしょん！ かなしみ！ きゃりぶれーしょん！`,
    katakana: `ディスティネーション！ スローモーション！ コンビネーション！ グラデュエーション！ インビテーション！ テンプテーション！ レボリューション！ カナシミ！ キャリブレーション！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DIASUTE MIX (Momo Kuri)",
    romaji: `Diasute MIX: Momo! Kuri! Imo! Chichi! Imouto! Abura! Danboru!`,
    hiragana: `でぃあすて みっくす： もも！ くり！ いも！ ちち！ いもうと！ あぶら！ だんぼーる！`,
    katakana: `ディアステ ミックス： モモ！ クリ！ イモ！ チチ！ イモウト！ アブラ！ ダンボール！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MIYAMOTO MIX",
    romaji: `Hi jokyo nō sei shoku son Miyamoto musashi!`,
    hiragana: `ひ じょきょ のう せい しょく そん みやもとむさし！`,
    katakana: `ヒ ジョキョ ノウ セイ ショク ソン ミヤモトムサシ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IRO/COLOR MIX",
    romaji: `Ore o ◯◯ de yogoshite yo! ◯◯ no iro ni somaritai! Ano iro kono-iro don'na iro! Namae mo shiranai irodakedo! Sorairo natsuiro yumeiro kimiiro! Yappari ore wa rei rei-shoku! [Yappari cocoiro rainbow!]`,
    hiragana: `おれを ◯◯で よごしてよ！ ◯◯の いろに そまりたい！ あのいろ このいろ どんないろ！ なまえも しらない いろだけど！ そらいろ なついろ ゆめいろ きみいろ！ やっぱり おれは れい れいしょく！ [やっぱり ここいろ れいんぼー！]`,
    katakana: `オレヲ ◯◯デ ヨゴシテヨ！ ◯◯ノ イロニ ソマリタイ！ アノイロ コノイロ ドンナイロ！ ナマエモ シラナイ イロダケド！ ソライロ ナツイロ ユメイロ キミイロ！ ヤッパリ オレハ レイ レイショク！ [ヤッパリ ココイロ レインボー！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NIHONSHU/SAKE MIX",
    romaji: `◯◯ no ~ ◯◯ no ~
Chotto ī toko mite mitai (koko made shidō)
Shin Masa Kokuryū Kubota dassai jū shi dai Hakkaisan Kikusui denshu koshi nokanbai!`,
    hiragana: `◯◯の 〜 ◯◯の 〜
ちょっと いーとこ みてみたい （ここからしどう）
しんまさ こくりゅう くぼた だっさい じゅうしだい はっかいさん きくすい でんしゅ こしの かんばい！`,
    katakana: `◯◯ノ 〜 ◯◯ノ 〜
チョット イートコ ミテミタイ （ココカラシドウ）
シンマサ コクリュウ クボタ ダッサイ ジュウシダイ ハッカイサン キクスイ デンシュ コシノ カンバイ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SWORD SKILL MIX",
    romaji: `Sōdo sukiru! Shinguru shūto! Reijisupaiku! Sonikkurīpu! Bāchikaruāku! Horizontarusukuea! Moeagare ore no kenyo! Asuna wa ore ga mamoru! (Sutābāsutosutorīmu)`,
    hiragana: `そーど すきる！ しんぐる しゅーと！ れいじすぱいく！ そにっくりーぷ！ ばーちかるあーく！ ほりぞんたるすくえあ！ もえあがれ おれの けんぎ！ あすなは おれが まもる！ （すたーばーすとすとーりーむ）`,
    katakana: `ソード スキル！ シングル シュート！ レイジスパイク！ ソニックリープ！ バーチカルアーク！ ホリゾンタルスクエア！ モエアガレ オレノ ケンギ！ アスナハ オレガ マモル！ （スターバーストストリーム）`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SUNSHINE MIX",
    romaji: `Shanshanshanshansanshain! Pyoittohito tobi mario-kun! Nintendō nintendō! Taoshi kata tte shitteru 〜?`,
    hiragana: `しゃんしゃんしゃんしゃん さんしゃいん！ ぴょいっと ひととび まりおくん！ にんてんどう にんてんどう！ たおしかたって しってる 〜？`,
    katakana: `シャンシャンシャンシャン サンシャイン！ ピョイット ヒトトビ マリオクン！ ニンテンドウ ニンテンドウ！ タオシカタッテ シッテル 〜？`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KANJOU BUGOU MIX",
    romaji: `Gu choki pa gu choki pa
Nani tsukurō nani tsukurō
Migite wa pā de hidarite mo pā de
Kanjō bugyō ni o makaseare i ！`,
    hiragana: `ぐー ちょき ぱー ぐー ちょき ぱー
なに つくろう なに つくろう
みぎては ぱーで ひだりても ぱーで
かんじょう ぶぎょうに おまかせあれい ！`,
    katakana: `グー チョキ パー グー チョキ パー
ナニ ツクロウ ナニ ツクロウ
ミギテハ パーデ ヒダリテモ パーデ
カンジョウ ブギョウニ オマカセアレイ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SHICHIFUKUJIN MIX",
    romaji: `Aaa！ Nana fuku sokusei！ Ebisu! Fuku roku! Benzai! Kotobuki rō! Hotei! Daikoku! Bishamonten!`,
    hiragana: `ああ！ ななふくそくせい！ えびす！ ふくろく！ べんざい！ ことぶきろう！ ほてい！ だいこく！ びしゃもんてん！`,
    katakana: `アア！ ナナフクソクセイ！ エビス！ フクロク！ ベンザイ！ コトブキロウ！ ホテイ！ ダイコク！ ビシャモンテン！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MEN MIX",
    romaji: `men men men men jā jā men
turutu to nodogoshi mitasei men
kake udon kake udon
akai kitsune to midori no tanuki`,
    hiragana: `めん めん めん めん じゃーじゃーめん
つるつると のどごし みたせいめん
かけうどん かけうどん
あかいきつねと みどりのたぬき`,
    katakana: `メン メン メン メン ジャージャーメン
ツルツルト ノドゴシ ミタセイメン
カケウドン カケウドン
アカイキツネト ミドリノタヌキ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "BEI MIX",
    romaji: `maimaimaimai nippon bei
hakumai genmaikin memai
koshihikari 〜 ！ koshihikari 〜 ！
◯◯◯◯( oshi men no namae ) ni hitomebore ！`,
    hiragana: `まいまいまいまい にっぽんべい
はくまい げんまい きんめまい
こしひかり 〜 ！ こしひかり 〜 ！
◯◯◯◯ （おしめんの なまえ） に ひとめぼれ ！`,
    katakana: `マイマイマイマイ ニッポンベイ
ハクマイ ゲンマイ キンメマイ
コシヒカリ 〜 ！ コシヒカリ 〜 ！
◯◯◯◯ （オシメンノ ナマエ） ニ ヒトメボレ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKESHITASEIKA MIX",
    romaji: `toratoratoratora ！ tora kichi kun ！ burakku ！ burakku ！ monburan ！ mīru kurukuru miru kukku ！ atari ga detara mō ichi hon ！`,
    hiragana: `とらとらとらとら ！ とらきちくん ！ ぶらっく ！ ぶらっく ！ もんぶらん ！ みーる くるくる みるくっく ！ あたりが でたら もういっぽん ！`,
    katakana: `トラトラトラトラ ！ トラキチクン ！ ブラック ！ ブラック ！ モンブラン ！ ミール クルクル ミルクック ！ アタリガ デタラ モウイッポン ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SANSEKERTA MIX",
    romaji: `Shimo! Fama! Shunga! Lakra! Chakra! Chanca! Jya jya! Sansekerta!`,
    hiragana: `しも！ ふぁーま！ しゅんが！ らくら！ ちゃくら！ ちゃんか！ じゃっ じゃっ！ さんすけると！`,
    katakana: `シモ！ ファーマ！ シュンガ！ ラクラ！ チャクラ！ チャンカ！ ジャッ ジャッ！ サンスケルト！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOKIORI MAMEIDO MIX (1)",
    romaji: `Jokyo, Hi, Kasen, Shindo, Ama, Sen'i, Shindo, Jinzo, Hi, Tora, Hi, Tora, Hi, Jokyo, Jokyo, Jokyo, Jokyo, Tora, Hi, Jinzo, Sen'i, Ama, Shindo, Kasen, Hi, Jokyo, Cho Umi-Mai Nojo`,
    hiragana: `じょきょ、 ひ、 かせん、 しんどう、 あま、 せんい、 しんどう、 じんぞう、 ひ、 とら、 ひ、 とら、 ひ、 じょきょ、 じょきょ、 じょきょ、 じょきょ、 とら、 ひ、 じんぞう、 せんい、 あま、 しんどう、 かせん、 ひ、 じょきょ、 ちょう うみまいのうじょう`,
    katakana: `ジョキョ、 ヒ、 カセン、 シンドウ、 アマ、 センイ、 シンドウ、 ジンゾウ、 ヒ、 トラ、 ヒ、 トラ、 ヒ、 ジョキョ、 ジョキョ、 ジョキョ、 ジョキョ、 トラ、 ヒ、 ジンゾウ、 センイ、 アマ、 シンドウ、 カセン、 ヒ、 ジョキョ、 チョウ ウミマイノウジョウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FUTURE DIVER DEMPAGUMI",
    romaji: `Moe Kyunsongu o Sekai ni o Todoke Future Diver Dempagumi!!`,
    hiragana: `もえきゅんそんぐを せかいに おとどけ ふゅーちゃー だいばー でんぱぐみ！！`,
    katakana: `モエキュンソングヲ セカイニ オトドケ フューチャー ダイバー デンパグミ！！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "RATENGO MIX",
    romaji: `tigurisu igunisu ātifisharu fibura ūrinatore viburationisu sakkyarumu vora erimotione`,
    hiragana: `てぃぐりす いぐにす あーてぃふぃしゃる ふぃぶら うーりなとーれ ゔぃぶらてぃおにす さっきゃるむ ゔぉら えりもちおーね`,
    katakana: `ティグリス イグニス アーティフィシャル フィブラ ウーリナトーレ ヴィブラティオニス サッキャルム ヴォラ エリモチオーネ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JUUNISHI MIX",
    romaji: `nē ushi torau nē ushi torau tatsu mi uma hitsu saru tori uma hitsu saru tori inu i`,
    hiragana: `ねー うし とらう ねー うし とらう たつ み うま ひつ さる とり うま ひつ さる とり いぬ い`,
    katakana: `ネー ウシ トラウ ネー ウシ トラウ タツ ミ ウマ ヒツ サル トリ ウマ ヒツ サル トリ イヌ イ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "AI KOUJOU",
    romaji: `tenka musō no otakebi de konoyo ga owaru sono hi made kyōran uraramai no na no shita ni sakasete misemasu ai no hana`,
    hiragana: `てんかむそうの おたけびで このよが おわる そのひまで きょうらん うららまいの なのしたに さかせてみせます あいのはな`,
    katakana: `テンカムソウノ オタケビデ コノヨガ オワル ソノヒマデ キョウラン ウララマイノ ナノシタニ サカセテミセマス アイノハナ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SEYAMA MIX",
    romaji: `jōhonchose ！ katakuri jōtō ！ daibā ！ saibā ！ apā ！`,
    hiragana: `じょうほんちょせ ！ かたくりじょうとう ！ だいばー ！ さいばー ！ あぱー ！`,
    katakana: `ジョウホンチョセ ！ カタクリジョウトウ ！ ダイバー ！ サイバー ！ アパー ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "12 SEIZA MIX",
    romaji: `gyarakushī ! kapuriko verusō powasson berie torō jemo kanse rion vieruju baransu sukorupion sajittēru`,
    hiragana: `ぎゃらくしー ！ かぷりこ ゔぇるそー ぽわっそん べりえ とろー じぇも かんせ りおん ゔぃえるじゅ ばらんす すこるぴおん さじってーる`,
    katakana: `ギャラクシー ！ カプリコ ヴェルソー ポワッソン ベリエ トロー ジェモ カンセ リオン ヴィエルジュ バランス スコルピオン サジッテール`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHIIZU MIX",
    romaji: `rikotta mottsarera rokkufōru burī tarejjio kamanbēru chedā parumezan gorugonzōramasukarupōne`,
    hiragana: `りこった もっつぁれら ろっくふぉーる ぶりー たれっじお かまんべーる ちぇだー ぱるめざん ごるごんぞーら ますかるぽーね`,
    katakana: `リコッタ モッツァレラ ロックフォール ブリー タレッジオ カマンベール チェダー パルメザン ゴルゴンゾーラ マスカルポーネ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "YOSHI IKUZOU MIX (RONGU VER)",
    romaji: `ā yoshi ikuzō ！ terebi monē ！ rajio monē ！ kuruma mo sorehodo hashittenē ！ piano monē ！ bā monē ！ junsa ( o mawari ) mainichi gu ru guru ！ ！`,
    hiragana: `あー よしいくぞう ！ てれびもねー ！ らじおもねー ！ くるまも それほど はしてねー ！ ぴあのもねー ！ ばーもねー ！ じゅんさ （おまわり） まいにち ぐるぐる ！！`,
    katakana: `アー ヨシイクゾウ ！ テレビモネー ！ ラジオモネー ！ クルマモ ソレホド ハシッテネー ！ ピアノモネー ！ バーモネー ！ ジュンサ （オマワリ） マイニチ ぐるぐる ！！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SUTAJAPA KONGOU MIX",
    romaji: `taigā hi saibā seni daibā shindō jā jā`,
    hiragana: `たいがー ひ さいばー せに だいばー しんどう じゃっ じゃっ`,
    katakana: `タイガー ヒ サイバー セニ ダイバー シンドウ ジャッ ジャッ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HAYASHI OSAMU MIX",
    romaji: `urya oi kakeru 4x ā mada ikanai urya oi kakeru 4x ā mada ikanai itsu ikuno ？ imadesho ！ ā mada ikanai mada ikanai mada ikanai demo ima ikanainara mō ikenai`,
    hiragana: `うりゃ おい かける 4x あー まだ いかない うりゃ おい かける 4x あー まだ いかない いついくの ？ いまでしょ ！ あー まだ いかない まだ いかない まだ いかない でも いま いかないなら もう いけない`,
    katakana: `ウリャ オイ カケル 4x アー マダ イカナイ ウリャ オイ カケル 4x アー マダ イカナイ イツイクノ ？ イマデショ ！ アー マダ イカナイ マダ イカナイ マダ イカナイ デモ イマ イカナイナラ モウ イケナイ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE KAHEN MIX",
    romaji: `ama tora jinzō ama tora kasen jokyo tora jinzō ama seni tora ama seni jokyo hi shindō seni kasen hi jokyo tora shindō ama torahi`,
    hiragana: `あま とら じんぞう あま とら かせん じょきょ とら じんぞう あま せに とら あま せに じょきょ ひ しんどう せに かせん ひ じょきょ とら しんどう あま とらひ`,
    katakana: `アマ トラ ジンゾウ アマ トラ カセン ジョキョ トラ ジンゾウ アマ セニ トラ アマ セニ ジョキョ ヒ シンドウ セニ カセン ヒ ジョキョ トラ シンドウ アマ トラヒ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU KAHEN MIX (1)",
    romaji: `jokyo shindō ama shindō kasen hi torahi tora torahihi tora torahi torahi jokyo hi momiji nokoji kasen hi ama fu jokyo tora momiji`,
    hiragana: `じょきょ しんどう あま しんどう かせん ひ とらひ とら とらひひ とら とらひ とらひ じょきょ ひ もみじ のこじ かせん ひ あま ふ じょきょ とら もみじ`,
    katakana: `ジョキョ シンドウ アマ シンドウ カセン ヒ トラヒ トラ トラヒヒ トラ トラヒ トラヒ ジョキョ ヒ モミジ ノコジ カセン ヒ アマ フ ジョキョ トラ モミジ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU KAHEN MIX (2)",
    romaji: `āhoiyoāhoiyo āhoiāhoiāhoiyo tora hi jokyo hi ama shindō ama fu ama fu ama shindō momiji nokoji pandeikamejihatoji ruyanpeāhoiyo nōjō ( nōjō ) nōjō ( nōjō ) ieffāmā ！`,
    hiragana: `あーほいよ あーほいよ あーほい あーほい あーほいよ とらひ じょきょひ あま しんどう あまふ あまふ あましんどう もみじのこじ ぱんでいかめじはとじ るやんぺ あーほいよ のうじょう （のうじょう） のうじょう （のうじょう） いぇっふぁーまー ！`,
    katakana: `アーホイヨ アーホイヨ アーホイ アーホイ アーホイヨ トラヒ ジョキョヒ アマ シンドウ アマフ アマフ アマシンドウ モミジノコジ パンデイカメジハトジ ルヤンペ アーホイヨ ノウジョウ （ノウジョウ） ノウジョウ （ノウジョウ） イェッファーマー ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKEMINORIJINARU MIX",
    romaji: `jā jā faibō waipā tina rabuki ban iria takara kaizā`,
    hiragana: `じゃっ じゃっ ふぁいぼー わいぱー てぃな らぶき ばん いりあ たから かいざー`,
    katakana: `ジャッ ジャッ ファイボー ワイパー ティナ ラブキ バン イリア タカラ カイザー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKEMINORIJINARU PERFECT MIX",
    romaji: `jā jā faibō waipā herutei kaizā bāmosu iza nagi ie ！ iza nami chakada somyu boraru jego hoashen rao fū juntoisē`,
    hiragana: `じゃっ じゃっ ふぁいぼー わいぱー へるてい かいざー ばーもす いざ なぎ いえ ！ いざ なみ ちゃかだ そみゅ ぼらる じぇご ほぁしぇん らう ふう じゅんといせー`,
    katakana: `ジャッ ジャッ ファイボー ワイパー ヘルテイ カイザー バーモス イザ ナギ イエ ！ イザ ナミ チャカダ ソミュ ボラル ジェゴ ホアシェン ラオ フウ ジュントイセー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANA ARASHI MIX",
    romaji: `sakura tsubaki ayame kuro yuri kaede suiren kakitsubata`,
    hiragana: `さくら つばき あやめ くろゆり かえで すいれん かきつばた`,
    katakana: `サクラ ツバキ アヤメ クロユリ カエデ スイレン カキツバタ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOKUI PERFECT MIX",
    romaji: `tora hi jinzō seni ama shindō kasen hi jokyo chūjitsu setsuna koku kōyō shinzui gokui tamashī denshō`,
    hiragana: `とら ひ じんぞう せに あま しんどう かせん ひ じょきょ ちゅうじつ せつな こく こうよう しんずい ごくい たましい でんしょう`,
    katakana: `トラ ヒ ジンゾウ セニ アマ シンドウ カセン ヒ ジョキョ チュウジツ セツナ コク コウヨウ シンズイ ゴクイ タマシイ デンショウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAIGO MIX",
    romaji: `shīā faimai torōn faibū buradānā sutān sankorā bin kākamuchā`,
    hiragana: `しーあー ふぁいまい とろーん ふぁいぶー ぶらだーなー すたーん さんこらー びん かーかむちゃー`,
    katakana: `シーアー ファイマイ トローン ファイブー ブラダーナー スターーン サンコラー ビン カーカムチャー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ITALIA MIX",
    romaji: `andiamo! tīgure fōko repurikante fībura baronbāro viburamento tekunoborāre asutorattsiōne`,
    hiragana: `あんでぃあーも！ てぃーぐれ ふぉーこ れぷりかんて ふぃーぶら ばろんばーろ ゔぃぶらめんと てくのぼらーれ あすとらっつぃおーね`,
    katakana: `アンディアーモ！ ティーグレ フォーコ レプリカンテ フィーブラ バロンバーロ ヴィブラメント テクノボラーレ アストラッツィオーネ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NEPAL MIX",
    romaji: `bāgu ago maniche ruga pōdi harī santosuti bō`,
    hiragana: `ばーぐ あご まにちぇ るが ぽーでぃ はりー さんとすてぃ ぼー`,
    katakana: `バーグ アゴ マニチェ ルガ ポーディ ハリー サントスティ ボー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PORTUGAL MIX",
    romaji: `bāmosu garēra ! tiguru fōgu aruchifisharu fibura pesukadōra viburasao arugodao voaru ekusukuruiru`,
    hiragana: `ばーもす がれーら ！ てぃぐる ふぉーぐ あるちふぃしゃる ふぃぶら ぺすかどーら ゔぃぶらさお あるごだお ゔぉある えくすくろいーる`,
    katakana: `バーモス ガレーラ ！ ティグル フォーグ アルチフィシャル フィブラ ペスカドーラ ヴィブラサオ アルゴダオ ヴォアル エクスクロイール`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FRANCE MIX",
    romaji: `se paruti ! tiguru fū shi bēru fiburu puronjū ondeu tadāmu`,
    hiragana: `せ ぱるてぃ ！ てぃぐる ふう し べーる ふぃぶる ぷろんじゅ おんでゅ ただーむ`,
    katakana: `セ パルティ ！ ティグル フウ シ ベール フィブル プロンジュ オンデュ タダーム`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PURO YAKYU MIX (NIHONGO VER)",
    romaji: `tora ori washi koi kamome hoshi kyojin`,
    hiragana: `とら おり わし こい かもめ ほし きょじん`,
    katakana: `トラ オリ ワシ コイ カモメ ホシ キョジン`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ROSHIAGO MIX",
    romaji: `chīguru agōni kibieru varakuno mōrie bābara vibaratsiya hīmya ritāchi udarienie`,
    hiragana: `てぃーぐる あごーに きびえる ゔぁらくの もーりえ ばーばら ゔぃばらつぃや ひーみゃ りたーち うだりえにえ`,
    katakana: `ティーグル アゴーニ キビエル ヴァラクノ モーリエ バーバラ ヴィバラツィヤ ヒーミャ リターチ ウダリエニエ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PUREBO MIX (PURO YAKYU VER)",
    romaji: `taigāsu faitāzu raionzu suwarōzu hōkusu doragonzu jaiantsu`,
    hiragana: `たいがーす ふぁいたーず らいおんず すわろーず ほうくす どらごんず じゃいあんつ`,
    katakana: `タイガース ファイターズ ライオンズ スワローズ ホークス ドラゴンズ ジャイアンツ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KYOSHIHAI SENSOU MIX",
    romaji: `ā hijirihai sensō ！ sei bā ransā āchā raidā kyasutā asa shin bāsākā`,
    hiragana: `あー せいはい せんそう ！ せいばー らんさー あーちゃー らいだー きゃすたー あさしん ばーさーかー`,
    katakana: `アー セイハイ センソウ ！ セイバー ランサー アーチャー ライダー キャスター アサシン バーサーカー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PEGASASU MIX",
    romaji: `pegasasu fenikkusu doragon kigunasu andoromeda atena moeagare 〇 〇 wa ore ga mamoru`,
    hiragana: `ぺがさす ふぇにっくす どらごん きぐなす あんどろめだ あてな もえあがれ 〇 〇は おれが まもる`,
    katakana: `ペガサス フェニックス ドラゴン キグナス アンドロメダ アテナ モエアガレ 〇 〇ハ オレガ マモル`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAMI GEKI MIX",
    romaji: `ā ！sha kōrin ！ ！ atena zeusu aresu gaia serene kaosu heri osu`,
    hiragana: `ああ ！ しゃこうりん ！！ あてな ぜうす あれす がいあ せれーね かおす へりおす`,
    katakana: `アア ！ シャコウリン ！！ アテナ ゼウス アレス ガイア セレーネ カオス ヘリオス`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GO MIX",
    romaji: `bā agu sai bara tantu gotakō kanpan kuritorimatantū`,
    hiragana: `ばー あーぐ さい ばら たんつ ごたこう かんぱん くりとりまたんつー`,
    katakana: `バー アーグ サイ バラ タンツ ゴタコウ カンパン クリトリマタンツー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NEO MIX",
    romaji: `momiji nokoji pandei kameji wa toji`,
    hiragana: `もみじ のこじ ぱんでい かめじ は とじ`,
    katakana: `モミジ ノコジ パンデイ カメジ ハ トジ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU GYAKUCHI MIX",
    romaji: `reipā kūpā howai pā jasupā fāmā waipā faibō`,
    hiragana: `れいぱー くーぱー ほわいぱー じゃすぱー ふぁーまー わいぱー ふぁいぼー`,
    katakana: `レイパー クーパー ホワイパー ジャスパー ファーマー ワイパー ファイボー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYOHONWAIPA MIX",
    romaji: `myōhontusuke (*clap* 9x) waipā
myōhontusuke (*clap* 9x) waipā
myōhontusuke (*clap* 9x) waipā
chapeape torahi myōhontusuke
jinzō faiyafaibowaipā`,
    hiragana: `みょうほんつすけ （*clap* 9x） わいぱー
みょうほんつすけ （*clap* 9x） わいぱー
みょうほんつすけ （*clap* 9x） わいぱー
ちゃぺあぺ とらひ みょうほんつすけ
じんぞう ふぁいやーふぁいぼわいぱー`,
    katakana: `ミョウホンツスケ （*clap* 9x） ワイパー
ミョウホンツスケ （*clap* 9x） ワイパー
ミョウホンツスケ （*clap* 9x） ワイパー
チャペアペ トラヒ ミョウホンツスケ
ジンゾウ ファイヤーファイボワイパー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHUUGOKUGO MIX",
    romaji: `fū fuo renzao shenwei hainī jen don hoanshen feichūchī`,
    hiragana: `ふー ふぉ れんざお しぇんうぇい はいにー じぇん どん ほあんしぇん ふぇいちゅーちー`,
    katakana: `フー フォ レンザオ シェンウェイ ハイニー ジェン ドン ホアンシェン フェイチューチー`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FEVER MIX",
    romaji: `chape tora taigā ！ onitsukataigā ！ burakkusandā ！ ikari no shishishin sandāraigā ！`,
    hiragana: `ちゃぺ とら たいがー ！ おにつかたいがー ！ ぶらっくさんだー ！ いかりの しししん さんだーらいがー ！`,
    katakana: `チャペ トラ タイガー ！ オニツカタイガー ！ ブラックサンダー ！ イカリノ シシシン サンダーライガー ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ wa, kawaii yo! Suki suki daisuki, yappa suki! Yatto mitsuketa, ohimesama! Ore ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Ore to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    hiragana: `いいたいことが、 あるんだよ！ やっぱり ◯◯は、 かわいいよ！ すきすきだいすき、 やっぱすき！ やっとみつけた、 おひめさま！ おれがうまれて、 きた りゆう！ それは ◯◯に、 であうため！ おれといっしょに、 じんせいあゆもう！ せかいでいちばん、 あいしてる！ あ、 い、 し、 て、 る！ [ぜったい けっこんしような！]`,
    katakana: `イイタイコトガ、 アルンダヨ！ ヤッパリ ◯◯ハ、 カワイイヨ！ スキスキダイスキ、 ヤッパスキ！ ヤットミツケタ、 オヒメサマ！ オレガウマレテ、 キタ リユウ！ ソレハ ◯◯ニ、 デアウタメ！ オレトイッショニ、 ジンセイアユモウ！ セカイデイチバン、 アイシテル！ ア、 イ、 シ、 テ、 ル！ [ゼッタイ ケッコンシヨウナ！]`,

    example: {
      url: 'https://youtu.be/znX2lhAiuxM?si=ndrkZMfMrhNcKqDr&t=141',
      title: 'ILIFE - アイドルライフスターターパック',
      timestamp: '2:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU MALE",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ kakkoii! Suki suki daisuki, yappa suki! Yatto mitsuketa, oojisama! Watashi ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Watashi to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    hiragana: `いいたいことが、 あるんだよ！ やっぱり ◯◯ かっこいい！ すきすきだいすき、 やっぱすき！ やっとみつけた、 おうじさま！ わたしが うまれて、 きた りゆう！ それは ◯◯に、 であうため！ わたしと いっしょに、 じんせいあゆもう！ せかいでいちばん、 あいしてる！ あ、 い、 し、 て、 る！ [ぜったい けっこんしような！]`,
    katakana: `イイタイコトガ、 アルンダヨ！ ヤッパリ ◯◯ カッコイイ！ スキスキダイスキ、 ヤッパスキ！ ヤットミツケタ、 オウジサマ！ ワタシガ ウマレテ、 キタ リユウ！ ソレハ ◯◯ニ、 デアウタメ！ ワタシト イッショニ、 ジンセイアユモウ！ セカイデイチバン、 アイシテル！ ア、 イ、 シ、 テ、 ル！ [ゼッタイ ケッコンシヨウナ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU SHIN",
    romaji: `Iitai koto ga arukeredo! Umaku kotoba ni dekinakute! Sukizuki-me o mite ietanara! Kon'nani kurushikunai no ka na! Boku ga korekara ikiru riyū-kun no egao ga mitaikara boku dake no kimi janaikeredo! Kimi dake no boku de itaikara! Iitain da!`,
    hiragana: `いいたいことが あるけれど！ うまく ことばに できなくて！ すきずき めをみて いえたなら！ こんなに くるしくないのかな！ ぼくが これから いきる りゆうーくんの えがおが みたいから ぼくだけの きみじゃないけれど！ きみだけの ぼくで いたいから！ いいたいんだ！`,
    katakana: `イイタイコトガ アルケレド！ ウマク コトバニ デキナクテ！ スキズキ メヲミテ イエタナラ！ コンナニ クルシクナイノカナ！ ボクガ コレカラ イキル リユウークンノ エガオガ ミタイカラ ボクダケノ キミジャナイケレド！ キミダケノ ボクデ イタイカラ！ イイタインダ！`,

    example: {
      url: 'https://youtu.be/f6V6R-ObNfc?si=XOqunQ9IYZvkCg0Z&t=138',
      title: 'ILIFE - アイドルライフブースターパック',
      timestamp: '2:18'
    }
  },
  {
    name: "MENZU GENBA-MUKE GACHI KOI KOUJOU",
    romaji: `Iitai koto ga arun da yo! Yappari ◯◯ kakkoī! Sukisuki daisuki yappa suki! Yatto deaeta ōji-sama! Watashi ga umareta sono riyū soreha ◯◯ ni deau tame! Watashi to isshoni jinsei ayumou! Sekai de ichiban, itoshi teru! A, i, shi, te, rū! [Zettai kekkon shiyou na!]`,
    hiragana: `いいたいことが あるんだよ！ やっぱり ◯◯ かっこいい！ すきすきだいすき やっぱすき！ やっとであえた おうじさま！ わたしが うまれた そのりゆう それは ◯◯に であうため！ わたしと いっしょに じんせい あゆもう！ せかいで いちばん、 いしてる ！ あ、 い、 し、 て、 るー！ [ぜったい けっこんしような！]`,
    katakana: `イイタイコトガ アルンダヨ！ ヤッパリ ◯◯ カッコイー！ スキスキダイスキ ヤッパスキ！ ヤットデアエタ オウジサマ！ ワタシガ ウマレタ ソノリユウ ソレハ ◯◯ニ デアウタメ！ ワタシト イッショニ ジンセイ アユモウ！ セカイデ イチバン、 イシテル ！ ア、 イ、 シ、 テ、 ルー！ [ゼッタイ ケッコンシヨウナ！]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SPANISH KOUJOU",
    romaji: `Iitai koto ga tigurefego! Yappari kimi wa shiberufibura! Buzobuzobiburaru yappa buzo! Yatto mitsuketa *clap* heruzei! Ore ga umareta shīrena diosa nabida reno anheru senishienta esupanshion paīsuderasu marabījasu!`,
    hiragana: `いいたいことが てぃぐれふえご！ やっぱり きみは しべるふぃぶら！ ぶそぶそびぶらる やっば ぶそ！ やっとみつけた *clap* へるぜい！ おれが うまれた しれーな でぃおさ なびだ れの あんへる せにしえんた えすぱんしおん ぱいすでらす まらびーはす！`,
    katakana: `イイタイコトガ ティグレフエゴ！ ヤッパリ キミハ シベルフィブラ！ ブソブソビブラル ヤッパ ブソ！ ヤットミツケタ *clap* ヘルゼイ！ オレガ ウマレタ シレーナ ディオサ ナビダ レノ アンヘル セニシエンタ エスパンシオン パイスデラス マラビーハス！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANMURABI HOUTEN KOUJOU",
    romaji: `Iitai koto ga aru nda yo! Hanmurabi hōten! Hito no me o tsubushitanaraba! Sono hito no me o tsubushi nasai! Hito no ha o ottanara! Sono hito no ha o ori nasai! Hito no dorei o yattanara! Soitsu o min'nade hangoroshi! Wa, n, go, ro, shi!`,
    hiragana: `いいたいことが あるんだよ！ はんむらびほうてん！ ひとのめを つぶしたならば！ そのひとのめを つぶしなさい！ ひとはを おったなら！ そのひとはを おりなさい！ ひとのどれいを やったなら！ そいつを みんなで はんごろし！ は、 ん、 ご、 ろ、 し！`,
    katakana: `イイタイコトガ アルンダヨ！ ハンムラビホウテン！ ヒトノメヲ ツブシタナラバ！ ソノヒトノメヲ ツブシナサイ！ ヒトハヲ オッタナラ！ ソノヒトハヲ オリナサイ！ ヒトノドレイヲ ヤッタナラ！ ソイツヲ ミンナデ ハンゴロシ！ ハ、 ン、 ゴ、 ロ、 シ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOUJASU KOUJOU",
    romaji: `Iitai koto ga rebo ryūshon! Yappari kimi wa fanta sutikku!`,
    hiragana: `いいたいことが れぼりゅーしょん！ やっぱり きみは ふぁんたすてぃっく！`,
    katakana: `イイタイコトガ レボリューション！ ヤッパリ キミハ ファンタスティック！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KAHEN KOUJOU",
    romaji: `ītai koto ga faibowaipā yappari taigātatatatataigā sukizuki daisuki chapeapekarakina yatto mitsuketa （ tebyōshi ） waipā ore ga umarete tora tora kara kina sore wa omae to ama ama jasupā ore to issho ni tora taigā sekai de ichi ban iettaigā`,
    hiragana: `いいたいことが ふぁいぼわいぱー やっぱり たいがー たたたたたたいがー すきずき だいすき ちゃぺあぺ からきな やっとみつけた （てびょうし） わいぱー おれが うまれて とら とら から きな それは おまえと あま あま じゃすぱー おれと いっしょに とら たいがー せかいで いちばん いぇったいがー`,
    katakana: `イイタイコトガ ファイボワイパー ヤッパリ タイガー タタタタタタイガー スキズキ ダイスキ チャペアペ カラキナ ヤットミツケタ （テビョウシ） ワイパー オレガ ウマレテ トラ トラ カラ キナ ソレハ オマエト アマ アマ ジャスパー オレト イッショニ トラ タイガー セカイデ イチバン イェッタイガー`,

    example: {
      url: 'https://youtu.be/OLjK3xY5RZU?si=Er2vL6joDUmvf6WK&t=142',
      title: 'ILIFE - アイドルライフエクストラパック',
      timestamp: '2:22'
    }
  },
  {
    name: "GACHI KOI NEJIRASE KOUJOU",
    romaji: `ītai koto mo ienaisa datte ◯◯ ga sukidakara muri muri zettai yappa dame ◯◯ wa takane no hanana nda ore ga mitsumeru sono saki de sotto warattekurereba ī ore ni janakute mo kamawanai dare yori waratte ikitekure i ki te ku re`,
    hiragana: `いいたいことも いえないさ だって ◯◯が すきだから むり むり ぜったい やっば だめ ◯◯は たかねのはななんだ おれが みつめる そのさきで そっと わらってくれればいい おれにじゃなくても かまわない だより わらって いきてくれ いきてくれ`,
    katakana: `イイタイコトモ イエナイサ ダッテ ◯◯ガ スキダカラ ムリ ムリ ゼッタイ ヤッパ ダメ ◯◯ハ タカネノハナナンダ オレガ ミツメル ソノサキデ ソット ワラッテクレレバイイ オレニジャナクテモ カマワナイ ダレヨリ ワラッテ イキテクレ イキテクレ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PASTA MIX",
    romaji: `Sha! Makuzo! jenobēze pesukatōre arabiāta aruburetto karubonāra boronēze puttanesuka kachatōra`,
    hiragana: `しゃー！ まくぞー！ じぇのべーぜ ぺすかとーれ あらびあーた あるぶれっと かるぼなーら ぼろねーぜ ぷったねすか かちゃとーら`,
    katakana: `シャー！ マクゾー！ ジェノベーゼ ペスカトーレ アラビアータ アルブレット カルボナーラ ボロネーゼ プッタネスカ カチャトーラ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "2 REN MIX GACHI KOI GISOU",
    romaji: `ītai koto ga aru ndayo demo yappari iwanai jā jā ！ chape ape kara kina rara tusuke wisupe faibō waipā fāmā jasupā howai pā kūpā iesukureipā ！`,
    hiragana: `いいたいことが あるんだよ でも やっぱり いわない じゃっ じゃっ ！ ちゃぺ あぺ から きな らら つすけ うぃすぺ ふぁいぼー わいぱー ふぁーまー じゃすぱー ほわいぱー くーぱー いぇすくれいぱー ！`,
    katakana: `イイタイコトガ アルンダヨ デモ ヤッパリ イワナイ ジャッ ジャッ ！ チャペ アペ カラ キナ ララ ツスケ ウィスペ ファイボー ワイパー ファーマー ジャスパー ホワイパー クーパー イェスクレイパー ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "1.5 REN MIX",
    romaji: `a 〜 yossha ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā tora hi jinzō seni a 〜 mō iccho ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā`,
    hiragana: `あ 〜 よっしゃいくぞー ！ たいがー ふぁいやー さいばー ふぁいばー だいばー ばいばー じゃっ じゃっ とら ひ じんぞう せに あ 〜 もういっちょ いくぞー ！ たいがー ふぁいやー さいばー ふぁいばー だいばー ばいばー じゃっ じゃっ`,
    katakana: `ア 〜 ヨッシャイクゾー ！ タイガー ファイヤー サイバー ファイバー ダイバー バイバー ジャッ ジャッ トラ ヒ ジンゾウ セニ ア 〜 モウイッチョ イクゾー ！ タイガー ファイヤー サイバー ファイバー ダイバー バイバー ジャッ ジャッ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU REI SHIKI",
    romaji: `◯◯ ni deaeta ano hi kara mune ni idaku wa koigokoro ima omoeru wa omae dake sā sasageyō dai tenshi ore ga umaretekita riyū sore wa omae ni deau tame ore to issho ni jinsei ayumō sekai de ichiban aishiteru a i shi te ru ！`,
    hiragana: `◯◯に であえた あのひから むねに いだくは こいごころ いま おもえるは おまえだけ さあ ささげよう だいてんし おれが うまれてきた りゆう それは おまえに であうため おれと いっしょに じんせい あゆもう せかいで いちばん あいしてる あ い し て る ！`,
    katakana: `◯◯ニ デアエタ アノヒカラ ムネニ イダクハ コイゴコロ イマ オモエルハ オマエダケ サア ササゲヨウ ダイテンシ オレガ ウマレテキタ リユウ ソレハ オマエニ デアウタメ オレト イッショニ ジンセイ アユモウ セカイデイチバン アイシテル ア イ シ テ ル ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOU JASU KOUJOU",
    romaji: `ītai koto ga rebo ☆ ryūshon yappari kimi wa fanta ☆ sutikku Want yō Want yō yappa suki yatto mitsuketa desu ☆ tinī ore ga umareta kanbojia sore wa omae to paraguai ore to issho ni jinsei arasuka sekai de ichiban madagasukaru ma da ga su karu`,
    hiragana: `いいたいことが れぼ ☆ りゅうしょん やっぱり きみは ふぁんた ☆ すてぃっく わんちゅー わんちゅー やっぱ すき やっと みつけた です ☆ てぃにー おれが うまれた かんぼじあ それは おまえと ぱらぐあい おれと いっしょに じんせい あらすか せかいで いちばん まだがすかる ま だ が す かる`,
    katakana: `イイタイコトガ レボ ☆ リューション ヤッパリ キミハ ファンタ ☆ スティック ワンチュー ワンチュー ヤッパ スキ ヤット ミツケタ デス ☆ ティニー オレガ ウマレタ カンボジア ソレハ オマエト パラグアイ オレト イッショニ ジンセイ アラスカ セカイデイチバン マダガスカル マ ダ ガ す カル`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MORI MITSUKO KOUJOU",
    romaji: `ītai koto wa , , , nai ！ ！ mori mitsuko ！ mori mitsuko ！ minna de issho ni eburi ba de ipasshon n n n n sora kara mitetene mitsuko san anata no namae o sakebimasu mori mitsuko ！ mori mitsuko ！ ba chikawa tenshi no mori mitsuko mo ri mi tsu ko ！`,
    hiragana: `いいたいことは 、、、 ない ！！ もりみつこ ！ もりみつこ ！ みんなで いっしょに えぶりばでぃ ぱっしょん ん ん ん ん そらから みててね みつこさん あなたの なまえを さけびます もりみつこ ！ もりみつこ ！ ばちかわてんしの もりみつこ も り み つ こ ！`,
    katakana: `イイタイコトハ 、、、 ナイ ！！ モリミツコ ！ モリミツコ ！ ミンナデ イッショニ エブリバディ パッション ン ン ン ン ソラカラ ミテテネ ミツコサン アナタノ ナマエヲ サケビマス モリミツコ ！ モリミツコ ！ バチカワテンシノ モリミツコ モ リ ミ ツ コ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PIZA MIX",
    romaji: `ā yossha kūzo ！ piza piza piza piza piza piza aokīzu`,
    hiragana: `あー よっしゃ くうぞー ！ ぴざ ぴざ ぴざ ぴざ ぴざ ぴざ あおきーず`,
    katakana: `アー ヨッシャ クウゾー ！ ピザ ピザ ピザ ピザ ピザ ピザ アオキーズ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NOGIZAKA 46 MIX",
    romaji: `ā yossha saka noboruzo ！ doryoku kansha egao uchira wa nogizaka noborizaka fōtīshikkusu!`,
    hiragana: `あー よっしゃ さかのぼるぞ ！ どりょく かんしゃ えがお うちらは のぎざか のぼりざか ふぉーてぃーしっくす ！`,
    katakana: `アー ヨッシャ サカノボルゾ ！ ドリョク カンシャ エガオ ウチラハ ノギザカ ノボリザカ フォーティーシックス ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOKIORI MAMEIDO MIX (2)",
    romaji: `jokyo hi kasen shindō ama seni shindō jinzōhi tora hi tora hi jokyo jokyo jokyo jokyo torahi jinzō seni ama shindō kasen hi jokyo chō umi u mai nōjō`,
    hiragana: `じょきょ ひ かせん しんどう あま せんい しんどう じんぞうひ とら ひ とら ひ じょきょ じょきょ じょきょ じょきょ とらひ じんぞう せんい あま しんどう かせん ひ じょきょ ちょう うみうまい のうじょう`,
    katakana: `ジョキョ ヒ カセン シンドウ アマ センイ シンドウ ジンゾウヒ トラ ヒ トラ ヒ ジョキョ ジョキョ ジョキョ ジョキョ トラヒ ジンゾウ センイ アマ シンドウ カセン ヒ ジョキョ チョウ ウミウマイ ノウジョウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "EXCALIBUR MIX",
    romaji: `saga mū kigunasu marin aioria shaka mōichido ore ni hikari o misetekure mezameyo waga ekusukaribā ！`,
    hiragana: `さが むー きぐなす まりん あいおりあ しゃか もういちど おれに ひかりを みせてくれ めざめよ わが えくすかりばー ！`,
    katakana: `サガ ムー キグナス マリン アイオリア シャカ モウイチド オレニ ヒカリヲ ミセテクレ メザメヨ ワガ エクスカリバー ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GONDOU MIX",
    romaji: `ā gondō gondō ame gondō ame ame gondō ame gondō`,
    hiragana: `あー ごんどう ごんどう あめ ごんどう あめ あめ ごんどう あめ ごんどう`,
    katakana: `アー ゴンドウ ゴンドウ アメ ゴンドウ アメ アメ ゴンドウ アメ ゴンドウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DANSON MIX",
    romaji: `danson fīzaki tūzadīsāza konsa`,
    hiragana: `だんそん ふぃーざき とぅーざでぃーさーざ こんさ`,
    katakana: `ダンソン フィーザキ トゥーザディーサーザ コンサ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANABI MIX",
    romaji: `5 ！ 4 ！ 3 2 1 ！ kiku botan taki wa chi sen rin yō raku ka murogiku jā jā`,
    hiragana: `5 ！ 4 ！ 3 2 1 ！ きく ぼたん たきわち せんりん ようらく かむろぎく じゃっ じゃっ`,
    katakana: `5 ！ 4 ！ 3 2 1 ！ キク ボタン タキワチ センリン ヨウラク カムロギク ジャッ ジャッ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FABORIASUTA MIX",
    romaji: `jā jā faibo injo jasupā biburaru kasen iesukureipā naruda faboriasutā`,
    hiragana: `じゃっ じゃっ ふぁいぼ いんじょ じゃすぱー びぶらる かせん いぇすくれいぱー なるだ ふぁぼりあすたー`,
    katakana: `ジャッ ジャッ ファイボ インジョ ジャスパー ビブラル カセン イェスクレイパー ナルダ ファボリアスター`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOMASU MIX",
    romaji: `ā shuppatsu shinkō ！ tōmasu gōdon henrī pāshī tobī edowādo poppō ( jēmusu, emirī )`,
    hiragana: `あー しゅっぱつ しんこう ！ とーます ごーどん へんりー ぱーしー とびー えどわーど ぽっぽー （じぇーむす、 えみりー）`,
    katakana: `アー シュッパツ シンコウ ！ トーマス ゴードン ヘンリー パーシー トビー エドワード ポッポー （ジェームス、 エミリー）`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SAKUMA MIX",
    romaji: `Shainī faiyā sandā wōtā neichā poizun sakumā ! Hi honō kaminari mizu midori doku sakuma to jōshō ! Chupu uhyui kanna wakka kamui suruku sakumahopunpa !`,
    hiragana: `しゃいにー ふぁいやー さんだー うぉーたー ねいちゃー ぽいずん さくま ！ ひ ほのお かみなり みず みどり どく さくまと じょうしょう ！ ちゅぷ うひゅい かんな わっか かむい するく さくまほぷんぱ ！`,
    katakana: `シャイニー ファイヤー サンダー ウォーター ネイチャー ポイズン サクマ ！ ヒ ホノオ カミナリ ミズ ミドリ ドク サクマト ジョウショウ ！ チュプ ウヒュイ カンナ ワッカ カムイ スルク サクマホプンパ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "VIETNAM MIX",
    romaji: `Chuntoisē! tī garu chai kī baru soi tūran ron soitonhoppu`,
    hiragana: `ちゅんといせー！ てぃー がる ちゃい きー ばる そい とぅーらん ろん そいとんほっぷ`,
    katakana: `チュントイセー！ ティー ガル チャイ キー バル ソイ トゥーラン ロン ソイトンホップ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAOU KAHEN 3 REN MIX",
    romaji: `pyuōrabiorewaidohaitā haitāhaitāhahahahahaitā emorikaherushia emorikaherushia kuria kurīn nibea risesshurisesshubabubabuherushia hamingu famirī furosui wandā awa haitā awa haitā pyuōrarorie iehhaitā`,
    hiragana: `ぴゅおーら びおれ わいど はいたー はいたー はいたーはははははいたー えもりか へるしあ えもりか へるしあ くりあ くりーん にべあ りせっしゅ りせっしゅ ばぶばぶ へるしあ はみんぐ ふぁみりー ふろすい わんだー あわ はいたー あわ はいたー ぴゅおーら ろりえ いぇっはいたー`,
    katakana: `ピュオーラ ビオレ ワイド ハイター ハイター ハイターハハハハハイター エモリカ ヘルシア エモリカ ヘルシア クリア クリーン ニベア リセッシュ リセッシュ バブバブ ヘルシア ハミング ファミリー フロスイ ワンダー アワ ハイター アワ ハイター ピュオーラ ロリエ イェッハイター`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NANA RANDO MIX",
    romaji: `Shainī faiyā sutā wōtā neichā uindo raburī! You en sei sui ryoku fū ai nanarando ！ Chupu uhyui nochiu wakka kamui rera katairokke !`,
    hiragana: `しゃいにー ふぁいやー すたー うぉーたー ねいちゃー ういんど らぶりー ！ よう えん せい すい りょく ふう あい なならんど ！ ちゅぷ うひゅい のちう わっか かむい れら かたいろっけ ！`,
    katakana: `シャイニー ファイヤー スター ウォーター ネイチャー ウインド ラブリー ！ ヨウ エン セイ スイ リョク フウ アイ ナナランド ！ チュプ ウヒュイ ノチウ ワッカ カムイ レラ カタイロッケ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CATALAN MIX",
    romaji: `tīgure fōku suībā fībura bussejadōru biburashio fiburakīmika sarutā eriminashio`,
    hiragana: `てぃーぐれ ふぉーく すいーばー ふぃーぶら ぶっせじぇどーる びぶらしお ふぃぶらきーみか さるたー えりみなしお`,
    katakana: `ティーグレ フォーク スイーバー フィーブラ ブッセジェドール ビブラシオ フィブラキーミカ サルター エリミナシオ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JANKEN KOUJOU",
    romaji: `ītai koto ga aru ndayo yappari ◯◯ kawaīyo demo sonna no dō demo ī ndayo ya parijanken tanoshīyo gūchokipā de gūchokipā de nani tsukurō 〜 nani tsukurō 〜 [igo o suki ni dōzo]`,
    hiragana: `いいたいことが あるんだよ やっぱり ◯◯ かわいいよ でもそんなの どうでもいいんだよ やっぱり じゃんけん たのしいよ ぐーちょきぱーで ぐーちょきぱーで なにつくろう 〜 なにつくろう 〜 [いご おすきに どうぞ]`,
    katakana: `イイタイコトガ アルンダヨ ヤッパリ ◯◯ カワイイヨ デモソンナノ ドウデモイイインダヨ ヤッパリ ジャンケン タノシイヨ グーチョキパーデ グーチョキパーデ ナニツクロウ 〜 ナニツクロウ 〜 [イゴ オスキニ ドウゾ]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KANJOU BUGYOU MIX",
    romaji: `gūchokipā de 〜 gūchokipā de 〜 nani tsukurō 〜 nani tsukurō 〜 migite wa pā de hidarite mo pā de kanjō bugyō ni o makaseare i ！ [pōzutsuki de]`,
    hiragana: `ぐーちょきぱーで 〜 ぐーちょきぱーで 〜 なにつくろう 〜 なにつくろう 〜 みぎては ぱーで ひだりても ぱーで かんじょう ぶぎょうに おまかせあれい ！ [ぽーずつきで]`,
    katakana: `グーチョキパーデ 〜 グーチョキパーデ 〜 ナニツクロウ 〜 ナニツクロウ 〜 ミギテハ パーデ ヒダリテモ パーデ カンジョウ ブギョウニ オマカセアレイ ！ [ポーズツキデ]`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "UIGUSU MIX",
    romaji: `itsu nakuno ima nakuno hōhokekyo ！ hotsu ！ hokekyo ！ hokekyo ！ kakeru 4x ( or hokekyo kakeru 6x ) ho ！ hokekyō ！`,
    hiragana: `いつなくの いまなくの ほうほけきょ ！ ほっ ！ ほけきょ ！ ほけきょ ！ かける 4x （or ほけきょ かける 6x） ほ ！ ほけきょう ！`,
    katakana: `イツナクノ イマナクノ ホウホケキョ ！ ホッ ！ ホケキョ ！ ホケキョ ！ カケル 4x （or ホケキョ カケル 6x） ホ ！ ホケキョウ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKAMARANAIKEDO SHINJIMARU KOUJOU",
    romaji: `takamaranai ！ takamaranai ！ takamaranaikedo shijimāru ！ shijimāru ！ shijimāru ！ shijimāru kara no kazu dansu ！ shijimāru ！ shijimāru ！ shijimāru kara no aikyanfurai ！`,
    hiragana: `たかまらない ！ たかまらない ！ たかまらないけど しじまーる ！ しじまーる ！ しじまーる ！ しじまーる からの かず だんす ！ しじまーる ！ しじまーる ！ しじまーる からの あいきゃんふらい ！`,
    katakana: `タカマラナイ ！ タカマラナイ ！ タカマラナイケド シジマール ！ シジマール ！ シジマール ！ シジマール カラノ カズ ダンス ！ シジマール ！ シジマール ！ シジマール カラノ アイキャンフライ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KANSHA KOUJOU",
    romaji: `ītai koto wa tada hitotsu ◯◯ hontōni arigatō kimi no egao ga attakara boku wa koko made koreta nda kimi ga umaretekita riyū sore wa sekai o terasu tame korekara saki mo kawarazu ni kagayakitsuzukete itsu made mo i tsu ma de mo`,
    hiragana: `いいたいことは ただひとつ ◯◯ ほんとうに ありがとう きみの えがおが あったから ぼくは ここまで これたんだ きみが うまれれきた りゆう それは せかいを てらすため これからさきも かわらずに かがやきつづけて いつまでも いつまでも`,
    katakana: `イイタイコトハ タダヒトツ ◯◯ ホントウニ アリガトウ キミノ エガオガ アッタカラ ボクハ ココマデ コレタンダ キミガ ウマレレキタ リユウ ソレハ セカイヲ テラスタメ コレカラサキモ カワラズニ カガヤキツヅケテ イツマデモ イツマデモ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "RESU KUSASAI KOORU",
    romaji: `resu kudasa i ！ resu kudasa i ！ dare demo īkara resu kudasa i ！ resu kudasa i ！ resu kudasa i ！ yappari ◯◯ no resu kudasa i ！`,
    hiragana: `れす ください ！ れす ください ！ だれでもいいから れす ください ！ れす ください ！ れす ください ！ やっぱり ◯◯の れす ください ！`,
    katakana: `レス クダサイ ！ レス クダサイ ！ ダレデモイイカラ レス クダサイ ！ レス クダサイ ！ レス クダサイ ！ ヤッパリ ◯◯ノ レス クダサイ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NANA DAIZAI MIX",
    romaji: `gōman shitto funnu taida gōyoku bōshoku shikiyoku`,
    hiragana: `ごうまん しっと ふんぬ たいだ ごうよく ぼうしょく しきよく`,
    katakana: `ゴウマン シット フンヌ タイダ ゴウヨク ボウショク シキヨク`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NIPPONSHU MIX",
    romaji: `○ ○ no ～ ○ ○ no ～ chotto ī toko shidō ara ma sa koku ryū ku bota das sai jū yonda i hakkai san ! kiku sui den shi yu koshi no kan bai !`,
    hiragana: `○ ○の 〜 ○ ○の 〜 ちょっと いーとこ しどう あらまさ こくりゅう くぼた だっさい じゅうよんだい はっかいさん ！ きくすい でんしゅ こしのかんばい ！`,
    katakana: `○ ○ノ 〜 ○ ○ノ 〜 チョット イートコ シドウ アラマサ コクリュウ クボタ ダッサイ ジュウヨンダイ ハッカイサン ！ キクスイ デンシュ コシノカンバイ ！`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MAKUCHI RIKISHI MIX",
    romaji: `《 hatsudō 》 go koku hōjō kaku ryū ryū den ta mawashi haku hō shi yōhōzan tochi ō zan ! kai sei yoshi kaze chiyotai ryū`,
    hiragana: `《はつどう》 ごこくほうじょう かくりゅう りゅうでん たまわし はくほう しょうほうざん とちおうざん ！ かいせい よしかぜ ちよたいりゅう`,
    katakana: `《ハツドウ》 ゴコクホウジョウ カクリュウ リュウデン タマワシ ハクホウ ショウホウザン トチオウザン ！ カイセイ ヨシカゼ チヨタイリュウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ORIGINAL JAPANESE KAHEN MIX",
    romaji: `ama tora kasen umi u jokyo seni jinzō ama tobihihi torahi tobihi ama tora jinzōhi tora jokyo hi ama hi kasen hi nōjō`,
    hiragana: `あま とら かせん うみう じょきょ せに じんぞう あま とびひひ とらひ とびひ あま とら じんぞうひ とら じょきょ ひ あま ひ かせん ひ のうじょう`,
    katakana: `アマ トラ カセン ウミウ ジョキョ セニ ジンゾウ アマ トビヒヒ トラヒ トビヒ アマ トラ ジンゾウヒ トラ ジョキョ ヒ アマ ヒ カセン ヒ ノウジョウ`,

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
];

// Add id and optional hiragana/katakana (fallback to romaji in Body when missing)
export const idolChants = rawChants.map((chant, index) => ({
  id: index + 1,
  name: chant.name,
  romaji: chant.romaji,
  hiragana: chant.hiragana ?? chant.romaji,
  katakana: chant.katakana ?? chant.romaji,
  // Pass through the example object if it exists, otherwise undefined
  example: chant.example ?? null,
}));
