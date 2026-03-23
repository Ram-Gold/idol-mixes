// Idol Chants & Mixes - Japanese Idol Mixes PDF (full list)
// Each entry: name, romaji, Japanese (optional)
// example (optional): { url: string, title: string, timestamp: string }

const rawChants = [
{
    name: "OOING",
    romaji: `Minna de issho ni ooing!
Ohhh *clap clap* Ohhh *clap clap* x2
(Urya!) Oi! 4x
Ah, mada ikanai
(Urya!) Oi! 4x
Ah, mada ikanai
Itsu iku no? Ima desho! / Hai se no!`,
    Japanese: `みんなで一緒にオーイング！
おー *clap clap* おー *clap clap* x2
（うりゃ！）おい！ 4x
あ、まだいかない
（うりゃ！）おい！ 4x
あ、まだいかない
いついくの？ いまでしょ！ / はいせーの！`,  
    example: {
      url: 'https://youtu.be/kXjMuPq9x8Q?si=xFwmtsg7XrreerDw&t=3',
      title: 'ILIFE - 可変３連MIXをおぼえる歌 ',
      timestamp: '0:03'
    }
  },
{
    name: "PPH",
    romaji: `*clap, clap clap* Hai! *jump* 4x`,
    Japanese: `*clap, clap clap* はい！ *jump* 4x`,  
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "FUWA FUWA",
    romaji: `*clap clap* fuwa fuwa
Hai se- no, hai se- no
Oi oi! oi oi oi oi`,
    Japanese: `*clap clap* ふわふわ
はいせーの、はいせーの
おいおい！ おいおいおいおい`,  
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
    Japanese: `[あー いくぞ！]
◯◯ かわいい、ちょうかわいい！ 4x`,  
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
    Japanese: `いぇっ、いぇっ、いぇったいがー！ / いぇったいがー、いぇったいがー、いぇったいがー
ファイボー ワイパー！`,  
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "MINNA DE ISSHO NI",
    romaji: `Minna de Issho ni ◯◯ kooru!`,
    Japanese: `みんなで 一緒に ◯◯ コール！`,  
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ORE NO",
    romaji: `Sasaete aru kara! 2x
O- re- no ◯◯!
Ore no, ore no, ◯◯!
Iya iya iya iya! 4x O- re- no ◯◯!`,
    Japanese: `ささえて あるから！ 2x
おー れー の ◯◯！
おれの、おれの、 ◯◯！
いや いや いや いや！ 4x おー れー の ◯◯！`,  
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    "name": "MYOHONTUSUKE START",
    "romaji": "Myohontusuke!\nKasentobijoukyo!\nJya jya!\nFaibo!\nWaipa!",
    "Japanese": "", 
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
{
    "name": "MYOHONTUSUKE HAJIMARU YO",
    "romaji": "Hajimaru yo!\nHajimaru yo!\nMyohontusuke, hajimaru yo!\nMyohontusuke!\nKasentobijoukyo!\nJya jya!\nFaibo!\nWaipa!",
    "Japanese": "", 
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
{
    "name": "MYOHONTUSUKE KOUJOU",
    "romaji": "ītai koto ga raratusuke\nyappari omae wa ama shindō\nchapeapekarakina yappa chape\nkasen myōhontusukechape\nore ga ti guretekita shiberu\nsaidā omae ni sutoraipā\nore to issho ni chapeapekarakina jinzō faiyafaibowaipā",
    "Japanese": "", 
    "example": {
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "ILIFE - Idol Life Starter Pack",
      "timestamp": "4:21"
    }
  },
{
    "name": "MYOHONDORAIBA HIROBA",
    "romaji": "myōhondoraibā\nkasen hi raigā\njajjājajjā\nbaribari bō\nsutosutosutosuto\nsutosutoraipā",
    "Japanese": "", 
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
    Japanese: `タイガー！ファイヤー！サイバー！ファイバー！ダイバー！バイバー！ジャージャー！(ファイボー！ワイパー！)`,  

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
    Japanese: `タイガー ファイヤー！
サイバー！
ファイバー！
ダイバー！
バイバー！
ジャージャー！
ファイボー！
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
    Japanese: `ジャージャー！
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
    Japanese: `虎（とら）！火（ひ）！人造（じんぞう）！繊維（せんい）！海女（あま）！振動（しんどう）！化繊（かっせーん）！飛（とび）！除去（じょーきょ）！`,  

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
    Japanese: `虎（とら！）×12！虎(とーら)！火(ひ)！人造(じんぞう)！繊維(せんい)！海女(あま)！振動(しんどう)！化繊(かせ)！飛(とび)！除去(じょーきょ)！
[超海鵜舞農場！]`,  

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
    Japanese: `化繊（かせん）！
振動（しんどう）！
海女（あま）！
繊維（せんい）！
人造（じんぞう）！
火（ひ）！
虎（とら）！`,  

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
    Japanese: `虎 火、人造 繊維 海女 振動 化繊 飛 除去 飛 化繊 振動 海女 繊維
人造 火！
虎！火！人造！繊維！海女！振動！化繊！`,  

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
    Japanese: `ピンク (Pinku)
マロン
ポテツ
バスト (Basuto)
シスタ (Sista)
オイリ (Oily)
ボックス (Box)`,  

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
    Japanese: `虎（とら）
火（ひ）
人造（じんぞう）
繊維（せんい）
頭（あたま）
振動（しんどう）
化学繊維（かがくせんい）
飛（とび）
除去（じょきょ）`,  

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
    Japanese: `チャペ！アペ！カラ！キナ！ララ！トゥスケ！ミョーホントゥスケ！`,  

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
    Japanese: `チャペ！アペ！カラ！キラ！らら！
トゥスケ！ミョーホントゥスケ！`,  

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
    Japanese: `人造 ファイヤ ファイボ ワイパー！
タイガー タイガー たたたた タイガー！
チャペ アペ カラキナ チャペ アペ カラキナ！
ミョーホントゥスケ 👏 ワイパー！
ウィースペ ケスイ チャペ チャペ チャペ！
チャペ アペ カラ キナ カラ アペ チャペ！
除去 火 除去 虎 虎 虎！
化繊 火 化繊 火 化繊 火 ワイパー！`,  

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
    Japanese: `チャペ、アペ、カラ、キナ、らら、トゥスケ、うぃーすぅーぺ、キナ、らら、トゥスケ、
うぃーすぅーぺ、けすぅーい、すぅいすぅーぱ すぅいすぅーぱ、けすぅーい、トゥスケ、アペ、カラ、キナ、
チャペ、アペ、カラ、キナ、らら、トゥスケ、ミョーホントゥスケ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ENCHOU MIX",
    romaji: `Faibo! Waipa! Faama! Jyasupa! Howaipa! Kuupa!`,
    Japanese: `ファイボー！ワイパー！ファーマー！ジャスパー！ホワイパー！クーパー！イエスクレイパー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Iesukuraipa!",
    romaji: `Iesukuraipa!`,
    Japanese: `イエスクレイパー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KUROFUKU/TSUME MIX",
    romaji: `Tiger (Taiga)! Fire (Faiya)! Cyber (Saiba)! Fiber (Faiba)! Diver (Daiba)! Viber (Baiba)!
Jya jya! Faibo! Waipa!
Janpa! Pinga! Dansu! Fama!
Saburi finga! Seibu baiza!`,
    Japanese: `タイガー！ ファイヤー！ サイバー！ ファイバー！ ダイバー！ バイバー！
ジャージャー！ ファイボー！ ワイパー！
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
    Japanese: `タイガー！ ファイヤー！ サイバー！ ファイバー！ ダイバー！ バイバー！
ジャージャー！ ファイボー！ ワイパー！
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
    Japanese: `タイガー 火 サイバー 繊維 ダイバー 振動 ジャージャー 火 ワイパー ジャンパ ピンガー マイ ファーマー`,  

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
    Japanese: `バモス！
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
    Japanese: `バモス！
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
    name: "Esubanshion!",
    romaji: `Esubanshion!`,
    Japanese: `Esubanshion!`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Pai-Suderasu!",
    romaji: `Pai-Suderasu!`,
    Japanese: `Pai-Suderasu!`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Marabijasu!",
    romaji: `Marabijasu!`,
    Japanese: `Marabijasu!`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HANGUL MIX",
    romaji: `Cha-kada~! Horani! Buru! Injyo! Somyu! Henyo! Shindo! Fahakusomyu! Neuda! Jego!`,
    Japanese: `チャカダー！ ホラニ！ ブル！ インジョ！ ソミュ！ ヘニョ！ シンドウ！ ファハクソミュ！ ネウダ！ ジェゴ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ARABIC MIX",
    romaji: `Suifuriasuiiru! Namiru! Naaru! Suinaaii! Nasuiijyu! Gatasa! Hazza!`,
    Japanese: `スイフリアスイール！ ナミル！ ナール！ スイナイー！ ナスイージュ！ ガタサ！ ハッザ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Haitunshinaaii!",
    romaji: `Haitunshinaaii!`,
    Japanese: `ハイトゥンシナイー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GERMAN MIX",
    romaji: `Gēenviā! Tīgā! Foieru! Kūnsu! Fībā! Tautsā! Shubingungu! Fēmēfāzā!
[Firīgen kāruhaintsu shunaidā]/[Ie mange etanaru]`,
    Japanese: `ハイトゥンシナイー！ ゲーエンヴィア！ ティーガー！ フォイエル！ クンス！ フィーバー！ タウツぁー！ シュビングング！ フェーミーファーザー！
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
    Japanese: `ゲーエンヴィア！ ティーガー！ フォイエル！ クンスト！ フィーバー！ タウツぁー！ シュビングング！ ヘーミーファーザー！ フリーゲン！ バザイティガン！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Zēyungufā!",
    romaji: `Zēyungufā! Gettin! Vainahaten! Ren! Herumankarutsu! Kāruhaintsu! Shunaidā!`,
    Japanese: `ゼーユングファー！ ゲッティン！ ヴァイナハテン！ レン！ ヘルマンカルツ！ カールハインツ！ シュナイダー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GERMAN 3 REN MIX",
    romaji: `Gēenviā! Tīgā! Foieru! Kūnsuto! Fibā! Tautsā! Shubingungu! Hiēmēfāzā! Firīgen! Bazaitigan!
Zēyungufā! Gettin! Vainahaten! Asshenputteru! Vundārando!`,
    Japanese: `ゲーエンヴィア！ ティーガー！ フォイエル！ クンスト！ フィーバー！ タウツぁー！ シュビングング！ ヘーミーファーザー！ フリーゲン！ バザイティガン！
ゼーユングファー！ ゲッティン！ ヴァイナハテン！ アッシェンプッテルトゥ！ ヴンダーランド！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Funke!",
    romaji: `Funke!`,
    Japanese: `フンケ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "Furanme!",
    romaji: `Furanme!`,
    Japanese: `フランメ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "YAMI MIX",
    romaji: `Pureyāden! Herumankarutsu! Kāruhaintsushunaidā!
Raiga! Faita! Saida! Fainda! Doraiba! Beibe! Jya jya! Baribo! Sutoraipa!`,
    Japanese: `プレヤーデン！ ヘルマンカルツ！ カールハインツ シュナイダー！
闇ミックス： ライガー！ ファイター！ サイダー！ ファインダー！ ドライバー！ ベイベ！ ジャージャー！ バリボー！ ストライパー！`,  

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
    Japanese: `高まるよ！ 2x
高まる低まるビスマルク！
シジマール！ アルシンド！ カズダンス！
ニーハイ！ オーハイ！ *clap*
缶チューハイ！ ウーロンハイ！ ナチュラルハイ！
アイ・キャン・フライ！ *jump*`,  

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
    Japanese: `勘！ 善！ 浄！ 潔！ 絶対領域ニーハイオーハイ
缶チューハイ ウーロンハイ ナチュラルハイ アップルパイ
三角チョコパイ エンゼルパイ タオパイパイ ファールフライ
ピッチャーフライ キャッチャーフライ センターフライ アイ・キャン・フライ！`,  

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
    Japanese: `パン パン パン パン ポケモンパン！
フレッシュブレッド 伊藤パン！
松たか子！ 松たか子！
ヤマザキ春のパンまつり！`,  

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
    Japanese: `パン パン パン パン ポケモンパン！
フレッシュブレッド 伊藤パン！
あんパン 食パン カレーパン！
ヤマザキ春のパンまつり`,  

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
    Japanese: `パンパンパンパン 腹パンパン！
上がったオタクの腹パンパン！
家能料！ 家能料！
未納 滞納 家能料！`,  

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
    Japanese: `ライオン！ 虎！ チーター！
ラタラタ！ ラトラーター！
サイ！ ゴリラ！ 象！
サゴーゾ！ サゴーゾ！
エイヨー！ エイヨー！ エイヨー！ エイヨー！
カプサイシンって 知ってる？
[エイヨ カテデ 脂肪肝/肝！]`,  

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
    Japanese: `サイ！ パンダ！ ハシビロコウ！
上野動物園のライン`,  

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
    Japanese: `ライオン！ 虎！ チーター！
ラタラタ！ ラトラーター！
サイ！ ゴリラ！ 象！
サゴーゾ！ サゴーゾ！
本当に（本当に）！ 2x
ライオンだ！`,  

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
    Japanese: `ワー！ 6x
ワールドカオス！ 諸行！ 小暮！ 時雨！ 神楽！ 金剛山 翔襲叉！
[黒雲！ 無常！ 世界混沌！]`,  

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
    Japanese: `翔！ 6x
翔襲叉！ 金剛山！ 神楽！ 時雨！ 小暮！ 諸行！ ワールドカオス！`,  

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
    Japanese: `世界混沌！ 無常！ 黒雲！ 翔襲叉！ 金剛山！
神楽！ 時雨！ 小暮！ 諸行！ ワールドカオス！`,  

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
    Japanese: `世界混沌！ 無常！ 黒雲！ 翔 襲 叉！ 金剛山！
神楽！ 時雨！ 小暮！ 諸行！ ワールドカオス！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ASHURA KONTON MIX",
    romaji: `wārudo kaosu shogyō kogure shigure kagura kongōsan shō kasane mata goku un yume sakai meikai tsuyo tsuyoshi nauda mamoriasutā`,
    Japanese: `ワールドカオス 諸行 小暮 時雨 神楽 金剛山 翔 襲 叉 黒雲 夢界 冥界 剛 強 尚 打 守護明日多（まもりあすたー）`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KONTON MIX (PAINTED LUXURY CAR VER)",
    romaji: `sakkā buin ! shiai ！ ieji ！ tsukare ！ tsuitotsu ！ kuronuri no ！ kōkyūsha ！ kōhai ！ miura ！ jidan no jōken ！`,
    Japanese: `サッカー部員！ 試合！ 帰路！ 疲れ！ 追突！ 黒塗りの！ 高級車！ 後輩！ 三浦！ 示談の条件！`,  

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
    Japanese: `ワー！ 6x ワールドピース！ 祈り！ 仏！ 非核化！ 道徳！ 慈善活動！ ダライ・ラマ！
良き国策 鎌倉幕府！！`,  

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
    Japanese: `俺とお前の赤い糸！ おれの、おれの、 ◯◯！ いやー いやー いやー いやー いやー いやー いやー いやー おー れー のー ◯◯！
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
    Japanese: `あー！ じゃー！ じゃー！
にゃ！ にゃ！ にゃ！ にゃ！ にゃ！ にゃ！ にゃんぽこら！
わん！ わん！ わん！ わん！ わん！ わん！ わんこぽら！`,  

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
    Japanese: `おー *clap* *clap* 2x
おー きな声で、 おー
おー *clap* *clap* 2x
一 二 三 四 五 六 七瀬！ / 一 二 一 二 一 二 三 四！`,  

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
    Japanese: `なんだかんだと言われたら！
答えてあげるが世の情け！
世界の平和を守るため！
わーすた！ わーすた！ World standard!`,  

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
    Japanese: `マルフォイ！ 4x
あぁぁぁあ〜 *clap* グリフィンドール！
アクシオ レダクト ルモス！
ウィンガーディアム レビオーサ！
あなたのは、レビオーサ！
エクスペクト パトローナム！
トム・リドル！ トム・リドル！
ヴォルデモートって 知ってる？
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
    Japanese: `ウィスゥペケスィ！ チャペ チャペ チャペ！
チャペ アペ カラ キナ カラ アペ チャペ！
除去 飛 除去！ 虎 虎 虎！
虎 火 人造 繊維 海女 振動 化繊！`,  

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
    Japanese: `人造ファイヤ ファイボ ワイパー！
タイガー タイガー たたたた タイガー！
チャペ アペ カラ キナ 2x
ミョーホントゥスケ *clap*, ワイパー！
ファイヤー ファイヤー 虎 虎 カラ キナ
チャペ アペ ファーマ、海女 海女 ジャスパー！
虎 タイガー！ 虎 タイガー！
人造 繊維 イエッタイガー！`,  

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
    Japanese: `人造 ファーマー 繊維 ジャスパー！
ダイバー ダイバー だだだだ ダイバー
虎火 除去火 虎火 除去火！
ミョーホントゥスケ ストライパー！
ファイター ファイター 人造 チャペアペ！
除去火 サイダー カラキナワイパー！
海女 ダイバー！ 海女 ダイバー！
ワールドカオス イエッダイバー！`,  

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
    Japanese: `キタキタキタキタ 湧いてきた！
タイガー タイガー タイガー ショット！
虎 隊 虎 隊 虎 タイガー！
人造 繊維 イエッタイガー！
ジャッジャー！ ジャッジャー！ バリバリボー！
スト スト スト スト ストライカー！
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
    Japanese: `キタキタキタキタ 湧いてきた！
タイガー タイガー たたたた タイガー！
虎隊 虎隊 虎タイガー！
人造 繊維 イエッタイガー！
ジャッジャー！ ジャッジャー！ バリバリボー！
スト スト スト スト ストライパー！
虎 タイガー！ 虎 タイガー！
人造 繊維 イエッタイガー！`,  

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
    Japanese: `人造 ファイヤ ファイボ ワイパー！
タイガー タイガー たたたた タイガー！
チャペアペカラキナ チャペアペカラキナ！
ミョーホントゥスケ *clap* ワイパー！
ウィースペ ケスイ！ チャペチャペチャペ！
チャペアペカラキナカラアペチャペ！
除去 火 除去 虎 虎 虎！
化繊 火 化繊 火 化繊 火 ワイパー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TANBO NO YOUSU GA OKASHI MIX",
    romaji: `Yosuiro! Konbain! Tanbo no yousu ga! *clap*, okashi!`,
    Japanese: `用水路！ コンバイン！ 田んぼの様子が！ *clap*, おかしい！`,  

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
    Japanese: `農林業 水産業
魚の様子も *clap* おかしい
コシヒカリ 〜 ササニシキ 〜
いや×4 待て×4
用水路 コンバイン
田んぼの様子が *clap* おかしい ！`,  

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
    Japanese: `繋がりたい！ 繋がりたい！
やっぱり ◯◯ と 繋がりたい！
繋がりたい！ 繋がりたい！
繋がりたいから つながりたいがー
ファイヤー〜 サイバー〜 ファイバー〜 ダイバー〜 バイバー〜 ジャージャー〜 ファイボー！
人情（いんじょ）！ ジャスパー！ 振動（びるばる）！ 化繊（かせん）！
言えなるだ ファボリアスタ！`,  

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
    Japanese: `パンツを脱ぎ捨て デストロイ！
元気印と 優等生！
寄ってらっしゃい 見てらっしゃい！
新生アイドル 研究会`,  

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
    Japanese: `色は匂へど 散りぬるを
我が世誰そ 常ならん
有為の奥山 今日越えて
浅き夢見じ 酔ひもせず
天下無双の おたけびで
この世が終わる その日まで
狂乱 麗舞（うららまい）の名の下に
咲かせで見せます 愛の花`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "IROHA UTA KOUJOU (2)",
    romaji: `Irohanihoheto chiri nuru o! Waka yotare so tsunenara mu! Uinookuyama kyō koete! Asaki yumemishi yoi mo sezu! Tenka musō no otakebi de! Ōka ranman sakihokore! Kyōran ribu no na no gen ni! Saka sete mise yo Gosei no hana!`,
    Japanese: `いろはにほへと ちりぬるを！ わがよだれそ つねならむ！ うゐのおくやま けふこえて！ あさきゆめみし ゑひもせす！ 天下無双のおたけびで！ 桜花爛漫 咲き誇れ！ 狂乱リブの名の下に！ 咲かせて見せよ 五生の太花！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ULTIMATE MIX (1)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, fama patoronamu! Ore to taiga tomuridoru! Vorudemottotte Iettaiga!`,
    Japanese: `言いたいことが ファイボーマルフォイ！ やっぱり ◯◯ グリフィンタイガー！ アクシオ チャペアペ やっぱ好き！ ウィンガートゥスケ お姫様！ ファイヤー 俺とレビオーサ カラキナ それは、ファーマ パトローナム！ 俺とタイガー トム・リドル！ ヴォルデモートって イエッタイガー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ULTIMATE MIX (2)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, famapatoronamu! Ore to jinsei tomuridoru! Sekai de ichiban, gurenja!`,
    Japanese: `言いたいことが ファイボーマルフォイ！ やっぱり ◯◯ グリフィンタイガー！ アクシオ チャペアペ やっぱ好き！ ウィンガートゥスケ お姫様！ ファイヤー 俺とレビオーサ カラキナ それは、ファーマパトローナム！ 俺と人生 トム・リドル！ 世界で一番、グレンジャー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "IETTAIGA KARA NO",
    romaji: `Iettaiga kara no! Iettaiga kara no! Iettaiga kara no! Iettaiga!`,
    Japanese: `イエッタイガーからの！ イエッタイガーからの！ イエッタイガーからの！ イエッタイガー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "UNCHI MIX",
    romaji: `Faibo waipa! Wa wa wa wa waipa! Faama jyasupa! Jya jya jya jya jyasupa! Howaipa kuupa! Ku ku ku ku kuupa! Iesukuraipa ie iesukuraipa! Raiga faitaa! Ra ra ra ra raiga! Saida faindaa! Sa sa sa sa saida! Doraiba beibe! Do do do do doraiba! Jya jya jya jya! Baribaribo! Suto suto suto suto sutoraipa!`,
    Japanese: `ファイボー ワイパー！ わ わ わ わ ワイパー！ ファーマー ジャスパー！ じゃ じゃ じゃ じゃ ジャスパー！ ホワイパー クーパー！ く く く く クーパー！ イエスクレイパー いえ いえイエスクレイパー！ ライガー ファイター！ ら ら ら ら ライガー！ サイダー ファインダー！ さ さ さ さ サイダー！ ドライバー ベイベ！ ど ど ど ど ドライバー！ ジャージャージャージャー！ バリバリボー！ スト スト スト スト ストライカー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "STANDARD UNCHI KAHEN MIX",
    romaji: `Taigā faiyā tatatatataigā! Saibā faibā sasasasasaibā! Daibā baibā dada dada daibā! Jya jya jyajya, jyajyajyajyajyajya!`,
    Japanese: `タイガー ファイヤー たたたたタイガー！ サイバー ファイバー ささささサイバー！ ダイバー バイバー だだ だだ ダイバー！ ジャージャー ジャージャ、ジャジャジャジャジャジャ！`,  

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
    Japanese: `タイガー ファイヤー たたたたタイガー
サイバー ファイバー ささささサイバー
ダイバー バイバー だだ だだ ダイバー
ジャー ジャー ファイボー わわわわワイパー
ジャンパ ピンガ ぴぴぴぴピンガ
ダンス ファーマ ふぁふぁふぁふぁファーマ
サプリ フィンガ ふぃふぃふぃふぃフィンガ
セイブ バイザー ばばばばバイザー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "CHAPE KAHEN MIX",
    romaji: `Sekai de ichiban aishiteru! ◯◯ ni sasageru chape tora taiga! Chape! 8x Ai! Rabu! Yuu!`,
    Japanese: `世界で一番 愛してる！ ◯◯に捧げる チャペ 虎 タイガー！ チャペ！ 8x 愛！ ラブ！ ユー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "DAN MIX",
    romaji: `Dan! Dandandan! Dan! Dandandan! Hai! se~no! Iettaiga! Kara no Iettaiga! x3`,
    Japanese: `ダン！ ダンダンダン！ ダン！ ダンダンダン！ はい！ せ〜の！ イエッタイガー！ からの イエッタイガー！ x3`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NIKO NIKO LOVERS MIX",
    romaji: `Koitsuru usagi ni koi o shite! Niko niko LOVERS aishiteru!`,
    Japanese: `恋するウサギに 恋をして！ ニコニコLOVERS 愛してる！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HALCA KAKO TSUI KAHEN MIX",
    romaji: `Jinzou haruka chinpo waipa! Haruka haruka, hahahaha haruka! Motto negi taso peropero chi ~yutchu! Haruka no kako tsu~i! *clap* chinpo! Man man man man oishī toire seiya no hiru meshi Matsuya no gyūsara! Nanpa nau nanpa nau a ̄ ma Miya sora iettaigā! Faibo! Waipā! Janpā! Pingā! Dansu! Fāmā!`,
    Japanese: `人造 晴香（ハルカ） ちんぽ ワイパー！ ハルカ ハルカ、はははは ハルカ！ もっと ネギたそ ぺろぺろ ちゅっちゅ！ ハルカの 過去ツイ！ *clap* ちんぽ！ まん まん まん まん 美味しい トイレ 聖夜の昼飯 松屋の牛皿！ ナンパなう ナンパなう あーま 宮空（ミヤソラ） イエッタイガー！ ファイボー！ ワイパー！ ジャンパ！ ピンガ！ ダンス！ ファーマ！`,  

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
    Japanese: `ドリームジャンボ 3億円
コインで削って スクラッチ
峰竜太 峰竜太
意外と当たるぜ ナンバーズ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "YURU KAWA NO NAMAE-KEI KŌRU",
    romaji: `Neko! Neko! Shiina neko! Iitai koto ga Mochida Mayu! Tora! Hi! Jinzou! Seni! Ama! Bara! Ruri-chan!`,
    Japanese: `猫！ 猫！ 椎名ねこ！ 言いたいことが 持田真優（もちだまゆ）！ 虎！ 火！ 人造！ 繊維！ 海女！ 薔薇！ 瑠璃ちゃん！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "METCHA MISUTTEMASU KAHEN MIX",
    romaji: `Bukkuofunoni hon ne ~ejan'neejan'neejan'nenenenene~ejan! Bukkuofunanoni bukkuofunanoni bukkuofunanoni! *clap* Nējan! Hon nē hon ne~e bukkuofunanoni bukkuofunanoni motomotone~ejan! Bukkuofubukkuofubukkuofunanoni hon'ne~ejan!`,
    Japanese: `ブックオフなのに 本ねぇじゃん`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PIZZA MIX",
    romaji: `Sha! Yakuzo! Bisumaruku! Banbīna! Kapurichōza! Rimōne! Fungiton'nāta! Marugerīta! Jenoa! Kuatoroforumajji!`,
    Japanese: `っしゃ！ 焼くぞ！ ビスマルク！ バンビーナ！ カプリチョーザ！ リモーネ！ フンギ・トポ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NERU NERU NE MIX",
    romaji: `Neru neru neru neru 3x Neru ne! Nereba neru hodo iro ga kawatte *clap* umai tēretterē!`,
    Japanese: `ねるねるねるねる 3x 寝るね！ 練れば練るほど 色が変わって *clap* うまい テーレッテレー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "OYASUMI MIX",
    romaji: `Gunnaito! Wan'an! Jaruja! Bonanitto! Bonnyui! Buonanotte! Gūtenahato! Buenasunōchesu! Supakoinainōchi!`,
    Japanese: `グンナイト！ ワン`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "LINE I YARANAI TOSHI RYŪ",
    romaji: `Ai wa 〜 ~tsu! Nari yamanai uta a~tsu! Ai wa 〜 ~tsu! Michibiki no tobira ~tsu! Shiren ataete wa toriaru Su kami-tachi o itsunohika koete yukeru (LINE LINE o yaranai *clap* Toshi Ryū)!`,
    Japanese: `愛は〜 っ！ 鳴り止まない歌 ぁ〜っ！ 愛は〜 っ！ 導きの扉 〜っ！ 試練与えては トライアル 朱神達（すかみたち）をいつの日か越えてゆける (LINE LINEをやらない *clap* 都市龍)！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KYARI MIX",
    romaji: `Disutineshon! Suromoshon! Konbineshon! Gurade-yueshon! Inbiteshon! Tenputeshon! Reboryushon! Kanashimi! Kyaribureshon!`,
    Japanese: `ディスティネーション！ スローモーション！ コンビネーション！ グラデュエーション！ インビテーション！ テンプテーション！ レボリューション！ 哀しみ！ キャリブレーション！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "MIYAMOTO MIX",
    romaji: `Hi jokyo nō sei shoku son Miyamoto musashi!`,
    Japanese: `火 除去 脳 盛 職 尊 宮本武蔵！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "IRO/COLOR MIX",
    romaji: `Ore o ◯◯ de yogoshite yo! ◯◯ no iro ni somaritai! Ano iro kono-iro don'na iro! Namae mo shiranai irodakedo! Sorairo natsuiro yumeiro kimiiro! Yappari ore wa rei rei-shoku! [Yappari cocoiro rainbow!]`,
    Japanese: `俺を ◯◯ で汚してよ！ ◯◯の色に染まりたい！ あの色この色どん`,  

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
    Japanese: `◯◯の〜 ◯◯の〜
ちょっと良いとこ見てみたい（ここまで指導）
新政（あらまさ） 黒龍（こくりゅう） 久保田（くぼた） 獺祭（だっさい） 十四代（じゅうよんだい） 八海山（はっかいさん） 菊水（きくすい） 伝酒（でんしゅ） 越乃寒梅（こしのかんばい）！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SWORD SKILL MIX",
    romaji: `Sōdo sukiru! Shinguru shūto! Reijisupaiku! Sonikkurīpu! Bāchikaruāku! Horizontarusukuea! Moeagare ore no kenyo! Asuna wa ore ga mamoru! (Sutābāsutosutorīmu)`,
    Japanese: `ソードスキル！ シングルシュート！ レイジスパイク！ ソニックリープ！ バーティカルアーク！ ホリゾンタルスクエア！ 燃え上がれ俺の剣よ！ アスナは俺が守る！ (スターバースト・ストリーム)`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SUNSHINE MIX",
    romaji: `Shanshanshanshansanshain! Pyoittohito tobi mario-kun! Nintendō nintendō! Taoshi kata tte shitteru 〜?`,
    Japanese: `シャンシャンシャンシャンサンシャイン！ ぴょいっと一跳びマリオくん！ 任天堂 任天堂！ 倒し方って 知ってる〜？`,  

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
    Japanese: `グー チョキ パー グー チョキ パー
何作ろう 何作ろう
右ては パーで 左手も パーで
感情奉行に お任せあれっ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SHICHIFUKUJIN MIX",
    romaji: `Aaa！ Nana fuku sokusei！ Ebisu! Fuku roku! Benzai! Kotobuki rō! Hotei! Daikoku! Bishamonten!`,
    Japanese: `あぁ！ 七福即生！ 恵比寿! 福禄! 弁財! 寿老! 布袋! 大黒! 毘沙門天!`,  

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
    Japanese: `めん めん めん めん ジャージャー麺
つるつると のどごし 満たせい麺
かけうどん かけうどん
赤いきつねと 緑のたぬき`,  

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
    Japanese: `まいまいまいまい 日本米
白米 玄米 金芽米
コシヒカリ 〜 ！ コシヒカリ 〜 ！
◯◯◯◯(推しメンの名前) に一目惚れ ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TAKESHITASEIKA MIX",
    romaji: `toratoratoratora ！ tora kichi kun ！ burakku ！ burakku ！ monburan ！ mīru kurukuru miru kukku ！ atari ga detara mō ichi hon ！`,
    Japanese: `トラトラトラトラ ！ トラキチ君 ！ ブラック ！ ブラック ！ モンブラン ！ ミールくるくる ミルクック ！ 当たりが出たら もう一本 ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SANSEKERTA MIX",
    romaji: `Shimo! Fama! Shunga! Lakra! Chakra! Chanca! Jya jya! Sansekerta!`,
    Japanese: `シモ！ ファーマ！ シュンガ！ ラクラ！ チャクラ！ チャンカ！ ジャージャー！ サンスクリット！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TOKIORI MAMEIDO MIX",
    romaji: `Jokyo, Hi, Kasen, Shindo, Ama, Sen'i, Shindo, Jinzo, Hi, Tora, Hi, Tora, Hi, Jokyo, Jokyo, Jokyo, Jokyo, Tora, Hi, Jinzo, Sen'i, Ama, Shindo, Kasen, Hi, Jokyo, Cho Umi-Mai Nojo`,
    Japanese: `除去、 火、 化繊、 振動、 海女、 繊維、 振動、 人造、 火、 虎、 火、 虎、 火、 除去、 除去、 除去、 除去、 虎、 火、 人造、 繊維、 海女、 振動、 化繊、 火、 除去、 超海鵜舞農場`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "FUTURE DIVER DEMPAGUMI",
    romaji: `Moe Kyunsongu o Sekai ni o Todoke Future Diver Dempagumi!!`,
    Japanese: `萌えきゅんソングを 世界にお届け！ フューチャーダイバー でんぱ組.inc!!`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "RATENGO MIX",
    romaji: `tigurisu igunisu ātifisharu fibura ūrinatore viburationisu sakkyarumu vora erimotione`,
    Japanese: `ティグリス イグニス アーティフィシャル フィブラ ウーリナトーレ ヴィブラティオニス サッキャルム ヴォラ エリモティオーネ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "JUUNISHI MIX",
    romaji: `nē ushi torau nē ushi torau tatsu mi uma hitsu saru tori uma hitsu saru tori inu i`,
    Japanese: `子（ね） 丑（うし） 寅（とら） 卯（う） 辰（たつ） 巳（み） 午（うま） 未（ひつじ） 申（さる） 酉（とり） 戌（いぬ） 亥（い）`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "AI KOUJOU",
    romaji: `tenka musō no otakebi de konoyo ga owaru sono hi made kyōran uraramai no na no shita ni sakasete misemasu ai no hana`,
    Japanese: `天下無双のおたけびで この世が終わるその日まで 狂乱麗舞（うららまい）の名の下に 咲かせて見せます愛の花`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SEYAMA MIX",
    romaji: `jōhonchose ！ katakuri jōtō ！ daibā ！ saibā ！ apā ！`,
    Japanese: `上本町（じょうほんちょ）ぜ！ 片栗上等！ ダイバー！ サイバー！ アッパー！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "12 SEIZA MIX",
    romaji: `gyarakushī ! kapuriko verusō powasson berie torō jemo kanse rion vieruju baransu sukorupion sajittēru`,
    Japanese: `ギャラクシー ! カプリコ ヴェルスオー ポワッソン ベリエ トロー ジェモ カンセ リオン ヴィエルジュ バランス スコルピオン サジッテール`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "CHIIZU MIX",
    romaji: `rikotta mottsarera rokkufōru burī tarejjio kamanbēru chedā parumezan gorugonzōramasukarupōne`,
    Japanese: `リコッタ モッツァレラ ロックフォール ブリー タレッジョ カマンベール チェダー パルメザン ゴルゴンゾーラ マスカルポーネ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "YOSHI IKUZOU MIX (RONGU VER)",
    romaji: `ā yoshi ikuzō ！ terebi monē ！ rajio monē ！ kuruma mo sorehodo hashittenē ！ piano monē ！ bā monē ！ junsa ( o mawari ) mainichi gu ru guru ！ ！`,
    Japanese: `あぁ 吉幾三 ！ テレビも無ぇ ！ ラジオも無ぇ ！ 車もそれほど走って無ぇ ！ ピアノも無ぇ ！ バーも無ぇ ！ 巡査（おまわり） 毎日 ぐるぐる ！！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SUTAJAPA KONGOU MIX",
    romaji: `taigā hi saibā seni daibā shindō jā jā`,
    Japanese: `タイガー 火 サイバー 繊維 ダイバー 振動 ジャージャー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HAYASHI OSAMU MIX",
    romaji: `urya oi kakeru 4x ā mada ikanai urya oi kakeru 4x ā mada ikanai itsu ikuno ？ imadesho ！ ā mada ikanai mada ikanai mada ikanai demo ima ikanainara mō ikenai`,
    Japanese: `うりゃ おい ×4 あー まだ行かない うりゃ おい ×4 あー まだ行かない いつ行くの ？ 今でしょ ！ あー まだ行かない まだ行かない まだ行かない でも今行かないなら もう行けない`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "JAPANESE KAHEN MIX",
    romaji: `ama tora jinzō ama tora kasen jokyo tora jinzō ama seni tora ama seni jokyo hi shindō seni kasen hi jokyo tora shindō ama torahi`,
    Japanese: `海女 虎 人造 海女 虎 化繊 除去 虎 人造 海女 繊維 虎 海女 繊維 除去 火 振動 繊維 化繊 火 除去 虎 振動 海女 虎火`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ENCHOU KAHEN MIX (1)",
    romaji: `jokyo shindō ama shindō kasen hi torahi tora torahihi tora torahi torahi jokyo hi momiji nokoji kasen hi ama fu jokyo tora momiji`,
    Japanese: `除去 振動 海女 振動 化繊 火 虎火 虎 虎火火 虎 虎火 虎火 除去 火 紅葉 乃固（のこじ） 化繊 火 海女 腐（ふ） 除去 虎 紅葉`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ENCHOU KAHEN MIX (2)",
    romaji: `āhoiyoāhoiyo āhoiāhoiāhoiyo tora hi jokyo hi ama shindō ama fu ama fu ama shindō momiji nokoji pandeikamejihatoji ruyanpeāhoiyo nōjō ( nōjō ) nōjō ( nōjō ) ieffāmā ！`,
    Japanese: `あーホイヨあーホイヨ あーホイあーホイあーホイヨ 虎 火 除去 火 海女 振動 海女 腐（ふ） 海女 腐（ふ） 海女 振動 紅葉 乃固（のこじ） パンデイカメジハトジ ルヤンペアーホイヨ 農場 (農場) 農場 (農場) イエッファーマー ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TAKEMINORIJINARU MIX",
    romaji: `jā jā faibō waipā tina rabuki ban iria takara kaizā`,
    Japanese: `ジャージャー ファイボー ワイパー ティナ ラブキ バン イリア タカラ カイザー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TAKEMINORIJINARU PERFECT MIX",
    romaji: `jā jā faibō waipā herutei kaizā bāmosu iza nagi ie ！ iza nami chakada somyu boraru jego hoashen rao fū juntoisē`,
    Japanese: `ジャージャー ファイボー ワイパー ヘルティ カイザー バモス イザナギ イェ ！ イザナミ チャカダ ソミュ ボラ ル ジェゴ ホアシェン ラオ フウ ジュントイセー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HANA ARASHI MIX",
    romaji: `sakura tsubaki ayame kuro yuri kaede suiren kakitsubata`,
    Japanese: `桜 椿 菖蒲 黒百合 楓 水蓮 杜若（かきつばた）`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GOKUI PERFECT MIX",
    romaji: `tora hi jinzō seni ama shindō kasen hi jokyo chūjitsu setsuna koku kōyō shinzui gokui tamashī denshō`,
    Japanese: `虎 火 人造 繊維 海女 振動 化繊 火 除去 忠実 刹那 虚空 高揚 真髄 極意 魂 伝承`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TAIGO MIX",
    romaji: `shīā faimai torōn faibū buradānā sutān sankorā bin kākamuchā`,
    Japanese: `シーアー ファイマイ トローン ファイブー ブラダーナー スターン サンコラー ビン カーカムチャー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ITALIA MIX",
    romaji: `andiamo! tīgure fōko repurikante fībura baronbāro viburamento tekunoborāre asutorattsiōne`,
    Japanese: `アンディアーモ！ ティーグレ フォーコ レプリカンテ フィブラ バロンバーロ ヴィブラメント テクノボラーレ アストラッツィオーネ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NEPAL MIX",
    romaji: `bāgu ago maniche ruga pōdi harī santosuti bō`,
    Japanese: `バーグ アゴ マニチェ ルガ ポーディ ハリー サントスティ ボー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PORTUGAL MIX",
    romaji: `bāmosu garēra ! tiguru fōgu aruchifisharu fibura pesukadōra viburasao arugodao voaru ekusukuruiru`,
    Japanese: `ヴァモス ガレーラ ! ティグル フォーグ アルチフィシャル フィブラ ペスカドーラ ヴィブラサォン アルゴダォン ヴォアール エクスクルイール`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "FRANCE MIX",
    romaji: `se paruti ! tiguru fū shi bēru fiburu puronjū ondeu tadāmu`,
    Japanese: `セ パルティ ! ティグル フゥ シベール フィーブル プロンジュ オンデュ タダーム`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PURO YAKYU MIX (NIHONGO VER)",
    romaji: `tora ori washi koi kamome hoshi kyojin`,
    Japanese: `虎 檻 鷲 鯉 鴎 星 巨人`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ROSHIAGO MIX",
    romaji: `chīguru agōni kibieru varakuno mōrie bābara vibaratsiya hīmya ritāchi udarienie`,
    Japanese: `ティーグル アゴーニ シーベリ ヴァラクノ モーリエ バーバラ ヴィブラツィヤ ヒミヤ リターチ ウダリエニエ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PUREBO MIX (PURO YAKYU VER)",
    romaji: `taigāsu faitāzu raionzu suwarōzu hōkusu doragonzu jaiantsu`,
    Japanese: `タイガース ファイターズ ライオンズ スワローズ ホークス ドラゴンズ ジャイアンツ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KYOSHIHAI SENSOU MIX",
    romaji: `ā hijirihai sensō ！ sei bā ransā āchā raidā kyasutā asa shin bāsākā`,
    Japanese: `あぁ 聖杯戦争 ！ セイバー ランサー アーチャー ライダー キャスター アサシン バーサーカー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PEGASASU MIX",
    romaji: `pegasasu fenikkusu doragon kigunasu andoromeda atena moeagare 〇 〇 wa ore ga mamoru`,
    Japanese: `ペガサス フェニックス ドラゴン キグナス アンドロメダ アテナ 燃え上がれ 〇 〇 は俺が守る`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KAMI GEKI MIX",
    romaji: `ā ！sha kōrin ！ ！ atena zeusu aresu gaia serene kaosu heri osu`,
    Japanese: `あぁ ！写降臨 ！！ アテナ ゼウス アレス ガイア セレネ カオス ヘリオス`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GO MIX",
    romaji: `bā agu sai bara tantu gotakō kanpan kuritorimatantū`,
    Japanese: `バー アグ サイ バラ タント ゴタコー カンパン クリトリマタンツー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NEO MIX",
    romaji: `momiji nokoji pandei kameji wa toji`,
    Japanese: `紅葉 乃固（のこじ） パンデイ カメジ は とじ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ENCHOU GYAKUCHI MIX",
    romaji: `reipā kūpā howai pā jasupā fāmā waipā faibō`,
    Japanese: `レイパー クーパー ホワイパー ジャスパー ファーマー ワイパー ファイボー`,  

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
    Japanese: `ミョーホントゥスケ (*clap* 9x) ワイパー
ミョーホントゥスケ (*clap* 9x) ワイパー
ミョーホントゥスケ (*clap* 9x) ワイパー
チャペアペ 虎火 ミョーホントゥスケ
人造 ファイヤファイボワイパー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "CHUUGOKUGO MIX",
    romaji: `fū fuo renzao shenwei hainī jen don hoanshen feichūchī`,
    Japanese: `フゥ ヴォー レンザオ シェンウェイ ハイニー ジェンドン ホァンシェン フェイチーチー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "FEVER MIX",
    romaji: `chape tora taigā ！ onitsukataigā ！ burakkusandā ！ ikari no shishishin sandāraigā ！`,
    Japanese: `チャペ 虎 タイガー ！ オニツカタイガー ！ ブラックサンダー ！ 怒りの獣神 サンダライガー ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GACHI KOI KOUJOU",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ wa, kawaii yo! Suki suki daisuki, yappa suki! Yatto mitsuketa, ohimesama! Ore ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Ore to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    Japanese: `言いたいことが、あるんだよ！ やっぱり ◯◯ は、かわいいよ！ 好き好き大好き、やっぱ好き！ やっと見つけた、お姫様！ 俺が生まれて、きた理由！ それは ◯◯ に、出会うため！ 俺と一緒に、人生歩もう！ 世界で一番、愛してる！ ア、イ、シ、テ、ル！ [絶対結婚しような！]`,  

    example: {
      url: 'https://youtu.be/znX2lhAiuxM?si=ndrkZMfMrhNcKqDr&t=141',
      title: 'ILIFE - アイドルライフスターターパック',
      timestamp: '2:21'
    }
  },
{
    name: "GACHI KOI KOUJOU MALE",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ kakkoii! Suki suki daisuki, yappa suki! Yatto mitsuketa, oojisama! Watashi ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Watashi to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    Japanese: `言いたいことが、あるんだよ！ やっぱり ◯◯ かっこいい！ 好き好き大好き、やっぱ好き！ やっと見つけた、王子様！ 私が生まれて、きた理由！ それは ◯◯ に、出会うため！ 私と一緒に、人生歩もう！ 世界で一番、愛してる！ ア、イ、シ、テ、ル！ [絶対結婚しような！]`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GACHI KOI KOUJOU SHIN",
    romaji: `Iitai koto ga arukeredo! Umaku kotoba ni dekinakute! Sukizuki-me o mite ietanara! Kon'nani kurushikunai no ka na! Boku ga korekara ikiru riyū-kun no egao ga mitaikara boku dake no kimi janaikeredo! Kimi dake no boku de itaikara! Iitain da!`,
    Japanese: `言いたいことが あるけれど！ うまく言葉に できなくて！ 好き好き 目を見て 言えたなら！ 今`,  

    example: {
      url: 'https://youtu.be/f6V6R-ObNfc?si=XOqunQ9IYZvkCg0Z&t=138',
      title: 'ILIFE - アイドルライフブースターパック',
      timestamp: '2:18'
    }
  },
{
    name: "MENZU GENBA-MUKE GACHI KOI KOUJOU",
    romaji: `Iitai koto ga arun da yo! Yappari ◯◯ kakkoī! Sukisuki daisuki yappa suki! Yatto deaeta ōji-sama! Watashi ga umareta sono riyū soreha ◯◯ ni deau tame! Watashi to isshoni jinsei ayumou! Sekai de ichiban, itoshi teru! A, i, shi, te, rū! [Zettai kekkon shiyou na!]`,
    Japanese: `言いたいことが あるんだよ！ やっぱり ◯◯ かっこいい！ 好き好き大好き、やっぱ好き！ やっと出会えた 王子様！ 私が生まれた その理由 それは ◯◯ に 出会うため！ 私と一緒に 人生歩もう！ 世界で一番、愛してる！ ア、イ、シ、テ、ルー！ [絶対結婚しような！]`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SPANISH KOUJOU",
    romaji: `Iitai koto ga tigurefego! Yappari kimi wa shiberufibura! Buzobuzobiburaru yappa buzo! Yatto mitsuketa *clap* heruzei! Ore ga umareta shīrena diosa nabida reno anheru senishienta esupanshion paīsuderasu marabījasu!`,
    Japanese: `言いたいことが ティグレフエゴ！ やっぱり君は シベルフィブラ！ ブゾブゾビブラル やっぱブゾ！ やっと見つけた *clap* ヘルゼイ！ 俺が生まれた シレーナ ディオサ ナビダ レノ アンヘル セニシエンタ エスパンシオン パイスデラス マラビージャス！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HANMURABI HOUTEN KOUJOU",
    romaji: `Iitai koto ga aru nda yo! Hanmurabi hōten! Hito no me o tsubushitanaraba! Sono hito no me o tsubushi nasai! Hito no ha o ottanara! Sono hito no ha o ori nasai! Hito no dorei o yattanara! Soitsu o min'nade hangoroshi! Wa, n, go, ro, shi!`,
    Japanese: `言いたいことが あるんだよ！ ハムラビ法典！ 人の目を 潰したならば！ その人の目を 潰しなさい！ 人の歯を 折ったなら！ その人の歯を 折りなさい！ 人の奴隷を やったなら！ そいつも みんな`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GOUJASU KOUJOU",
    romaji: `Iitai koto ga rebo ryūshon! Yappari kimi wa fanta sutikku!`,
    Japanese: `言いたいことが レボリューション！ やっぱり君は ファンタスティック！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GACHI KOI KAHEN KOUJOU",
    romaji: `ītai koto ga faibowaipā yappari taigātatatatataigā sukizuki daisuki chapeapekarakina yatto mitsuketa （ tebyōshi ） waipā ore ga umarete tora tora kara kina sore wa omae to ama ama jasupā ore to issho ni tora taigā sekai de ichi ban iettaigā`,
    Japanese: `言いたいことが ファイボーワイパー やっぱり タイガーたたたたタイガー 好き好き大好き チャペアペカラキナ やっと見つけた （ 手拍子 ） ワイパー 俺が生まれた 虎 虎 カラ キナ それは お前と 海女 海女 ジャスパー 俺と一緒に 虎 タイガー 世界で一番 イエッタイガー`,  

    example: {
      url: 'https://youtu.be/OLjK3xY5RZU?si=Er2vL6joDUmvf6WK&t=142',
      title: 'ILIFE - アイドルライフエクストラパック',
      timestamp: '2:22'
    }
  },
{
    name: "GACHI KOI NEJIRASE KOUJOU",
    romaji: `ītai koto mo ienaisa datte ◯◯ ga sukidakara muri muri zettai yappa dame ◯◯ wa takane no hanana nda ore ga mitsumeru sono saki de sotto warattekurereba ī ore ni janakute mo kamawanai dare yori waratte ikitekure i ki te ku re`,
    Japanese: `言いたいことも 言えないさ だって ◯◯ が 好きだから 無理 無理 絶対 やっぱダメ ◯◯ は 高嶺の花なんだ 俺が見つめる その先で そっと笑ってくれればいい 俺じゃなくても 構わない 誰より笑って 生きてくれ 生 き て く れ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PASTA MIX",
    romaji: `Sha! Makuzo! jenobēze pesukatōre arabiāta aruburetto karubonāra boronēze puttanesuka kachatōra`,
    Japanese: `っしゃ！ 巻くぞ！ ジェノベーゼ ペスカトーレ アラビアータ アルブレット カルボナーラ ボロネーゼ プッタネスカ カチャトーラ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "2 REN MIX GACHI KOI GISOU",
    romaji: `ītai koto ga aru ndayo demo yappari iwanai jā jā ！ chape ape kara kina rara tusuke wisupe faibō waipā fāmā jasupā howai pā kūpā iesukureipā ！`,
    Japanese: `言いたいことが あるんだよ でもやっぱり 言わない ジャージャー ！ チャペ アペ カラ キナ らら トゥスケ ウィスゥペ ファイボー ワイパー ファーマー ジャスパー ホワイパー クーパー イエスクレイパー ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "1.5 REN MIX",
    romaji: `a 〜 yossha ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā tora hi jinzō seni a 〜 mō iccho ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā`,
    Japanese: `あー よっしゃいくぞ ！ タイガー ファイヤー サイバー ファイバー ダイバー バイバー ジャージャー 虎 火 人造 繊維 あー もういっちょいくぞ ！ タイガー ファイヤー サイバー ファイバー ダイバー バイバー ジャージャー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GACHI KOI KOUJOU REI SHIKI",
    romaji: `◯◯ ni deaeta ano hi kara mune ni idaku wa koigokoro ima omoeru wa omae dake sā sasageyō dai tenshi ore ga umaretekita riyū sore wa omae ni deau tame ore to issho ni jinsei ayumō sekai de ichiban aishiteru a i shi te ru ！`,
    Japanese: `◯◯ に出会えたあの日から 胸に抱くは 恋心 今想えるは お前だけ さぁ捧げよう 大天使 俺が生まれてきた理由 それはお前に 出会うため 俺と一緒に 人生歩もう 世界で一番 愛してる あ い し て る ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GOU JASU KOUJOU",
    romaji: `ītai koto ga rebo ☆ ryūshon yappari kimi wa fanta ☆ sutikku Want yō Want yō yappa suki yatto mitsuketa desu ☆ tinī ore ga umareta kanbojia sore wa omae to paraguai ore to issho ni jinsei arasuka sekai de ichiban madagasukaru ma da ga su karu`,
    Japanese: `言いたいことが レボ☆リューション やっぱり君は ファンタ☆スティック Want you Want you やっぱ好き やっと見つけた デス☆ティニー 俺が生まれた カンボジア それはお前と パラグアイ 俺と一緒に 人生アラスカ 世界で一番 マダガスカル マ ダ ガ ス カ ル`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "MORI MITSUKO KOUJOU",
    romaji: `ītai koto wa , , , nai ！ ！ mori mitsuko ！ mori mitsuko ！ minna de issho ni eburi ba de ipasshon n n n n sora kara mitetene mitsuko san anata no namae o sakebimasu mori mitsuko ！ mori mitsuko ！ ba chikawa tenshi no mori mitsuko mo ri mi tsu ko ！`,
    Japanese: `言いたいことは 、 、 、 ない ！ ！ 森光子 ！ 森光子 ！ みんなで一緒に エブリバディ パッション ！！ 空から見ててね 光子さん あなたの名前を 叫びます 森光子 ！ 森光子 ！ 爆カワ天使の 森光子 も り み つ こ ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "PIZA MIX",
    romaji: `ā yossha kūzo ！ piza piza piza piza piza piza aokīzu`,
    Japanese: `あー よっしゃ食うぞ ！ ピザ ピザ ピザ ピザ ピザ ピザ 青海（あおきーず）`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NOGIZAKA 46 MIX",
    romaji: `ā yossha saka noboruzo ！ doryoku kansha egao uchira wa nogizaka noborizaka fōtīshikkusu!`,
    Japanese: `あー よっしゃ坂登るぞ ！ 努力 感謝 笑顔 うちらは 乃木坂 上り坂 フォーティーシックス!`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "EXCALIBUR MIX",
    romaji: `saga mū kigunasu marin aioria shaka mōichido ore ni hikari o misetekure mezameyo waga ekusukaribā ！`,
    Japanese: `サガ ムー キグナス マリン アイオリア シャカ もう一度 俺に光を見せてくれ 目覚めよ 我が エクスカリバー ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GONDOU MIX",
    romaji: `ā gondō gondō ame gondō ame ame gondō ame gondō`,
    Japanese: `あー 権藤 権藤 雨 権藤 雨 雨 権藤 雨 権藤`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "DANSON MIX",
    romaji: `danson fīzaki tūzadīsāza konsa`,
    Japanese: `ダンソン フィーザキー トゥーザディーサーザ コンサ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "HANABI MIX",
    romaji: `5 ！ 4 ！ 3 2 1 ！ kiku botan taki wa chi sen rin yō raku ka murogiku jā jā`,
    Japanese: `5 ！ 4 ！ 3 2 1 ！ 菊 牡丹 滝 輪 地 閃 輪 瓔珞下 諸菊 ジャージャー`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "FABORIASUTA MIX",
    romaji: `jā jā faibo injo jasupā biburaru kasen iesukureipā naruda faboriasutā`,
    Japanese: `ジャージャー ファイボー 人情（いんじょ） ジャスパー ヴィブラル 化繊 イエスクレイパー 鳴るだ ファボリアスタ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TOMASU MIX",
    romaji: `ā shuppatsu shinkō ！ tōmasu gōdon henrī pāshī tobī edowādo poppō ( jēmusu, emirī )`,
    Japanese: `あー 出発進行 ！ トーマス ゴードン ヘンリー パーシー トビー エドワード ポッポ ( ジェームス, エミリー )`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "SAKUMA MIX",
    romaji: `Shainī faiyā sandā wōtā neichā poizun sakumā ! Hi honō kaminari mizu midori doku sakuma to jōshō ! Chupu uhyui kanna wakka kamui suruku sakumahopunpa !`,
    Japanese: `シャイニー ファイヤー サンダー ウォーター ネイチャー ポイズン 佐久間 ! 火 炎 雷 水 緑 毒 佐久間 と上昇 ! チュプ ウヒュイ カンナ ワッカ カムイ スルク サクマホプンパ !`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "VIETNAM MIX",
    romaji: `Chuntoisē! tī garu chai kī baru soi tūran ron soitonhoppu`,
    Japanese: `ジュントイセー! ティー ガル チャイ キー バル ソイ トゥーラン ロン ソイトンホップ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KAOU KAHEN 3 REN MIX",
    romaji: `pyuōrabiorewaidohaitā haitāhaitāhahahahahaitā emorikaherushia emorikaherushia kuria kurīn nibea risesshurisesshubabubabuherushia hamingu famirī furosui wandā awa haitā awa haitā pyuōrarorie iehhaitā`,
    Japanese: `ピュオーラ ビオレ ワイドハイター ハイターハイターははははハイター エモリカ ヘルシア エモリカ ヘルシア クリア クリーン ニベア リセッシュリセッシュ バブバブ ヘルシア ハミング ファミリー フロスィ ワンダー アワ ハイター アワ ハイター ピュオーラ ロリエ イェッハイター`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NANA RANDO MIX",
    romaji: `Shainī faiyā sutā wōtā neichā uindo raburī! You en sei sui ryoku fū ai nanarando ！ Chupu uhyui nochiu wakka kamui rera katairokke !`,
    Japanese: `シャイニー ファイヤー スター ウォーター ネイチャー ウインド ラブリー! 妖 炎 聖 水 霊 風 愛 ナナランド ！ チュプ ウヒュイ ノチウ ワッカ カムイ レラ カタイロッケ !`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "CATALAN MIX",
    romaji: `tīgure fōku suībā fībura bussejadōru biburashio fiburakīmika sarutā eriminashio`,
    Japanese: `ティーグレ フォーコ スイーバ フィブラ ブッセジャドール ヴィブラシオ フィブラキミカ サルター エリミナシオ`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "JANKEN KOUJOU",
    romaji: `ītai koto ga aru ndayo yappari ◯◯ kawaīyo demo sonna no dō demo ī ndayo ya parijanken tanoshīyo gūchokipā de gūchokipā de nani tsukurō 〜 nani tsukurō 〜 [igo o suki ni dōzo]`,
    Japanese: `言いたいことが あるんだよ やっぱり ◯◯ かわいいよ でもそんなの どうでもいいんだよ やっぱりジャンケン 楽しいよ グーチョキパーで グーチョキパーで 何作ろう 〜 何作ろう 〜 [以後は お好きに どうぞ]`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "KANJOU BUGYOU MIX",
    romaji: `gūchokipā de 〜 gūchokipā de 〜 nani tsukurō 〜 nani tsukurō 〜 migite wa pā de hidarite mo pā de kanjō bugyō ni o makaseare i ！ [pōzutsuki de]`,
    Japanese: `グーチョキパーで 〜 グーチョキパーで 〜 何作ろう 〜 何作ろう 〜 右ては パーで 左手も パーで 感情奉行に お任せあれっ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "UIGUSU MIX",
    romaji: `itsu nakuno ima nakuno hōhokekyo ！ hotsu ！ hokekyo ！ hokekyo ！ kakeru 4x ( or hokekyo kakeru 6x ) ho ！ hokekyō ！`,
    Japanese: `いつ鳴くの 今鳴くの ホーホケキョ ！ ホッツ ！ ホケキョ ！ ホケキョ ！ ×4 ( or ホケキョ ×6 ) ホ ！ ホケキョー ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "TAKAMARANAIKEDO SHINJIMARU KOUJOU",
    romaji: `takamaranai ！ takamaranai ！ takamaranaikedo shijimāru ！ shijimāru ！ shijimāru ！ shijimāru kara no kazu dansu ！ shijimāru ！ shijimāru ！ shijimāru kara no aikyanfurai ！`,
    Japanese: `高まらない ！ 高まらない ！ 高まらないけど シジマール ！ シジマール ！ シジマール ！ シジマール からの カズダンス ！ シジマール ！ シジマール ！ シジマール からの アイキャンフライ ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "GACHI KOI KANSHA KOUJOU",
    romaji: `ītai koto wa tada hitotsu ◯◯ hontōni arigatō kimi no egao ga attakara boku wa koko made koreta nda kimi ga umaretekita riyū sore wa sekai o terasu tame korekara saki mo kawarazu ni kagayakitsuzukete itsu made mo i tsu ma de mo`,
    Japanese: `言いたいことは ただ一つ ◯◯ 本当に ありがとう 君の笑顔が あったから 僕はここまで 来れたんだ 君が生まれてきた理由 それは 世界を照らすため これからも先も 変わらずに 輝き続けて いつまでも い つ ま で も`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "RESU KUSASAI KOORU",
    romaji: `resu kudasa i ！ resu kudasa i ！ dare demo īkara resu kudasa i ！ resu kudasa i ！ resu kudasa i ！ yappari ◯◯ no resu kudasa i ！`,
    Japanese: `レスください ！ レスください ！ 誰でもいいから レスください ！ レスください ！ レスください ！ やっぱり ◯◯ の レスください ！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NANA DAIZAI MIX",
    romaji: `gōman shitto funnu taida gōyoku bōshoku shikiyoku`,
    Japanese: `傲慢 嫉妬 憤怒 怠惰 強欲 暴食 色欲`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "NIPPONSHU MIX",
    romaji: `○ ○ no ～ ○ ○ no ～ chotto ī toko shidō ara ma sa koku ryū ku bota das sai jū yonda i hakkai san ! kiku sui den shi yu koshi no kan bai !`,
    Japanese: `◯◯の〜 ◯◯の〜 ちょっと良いとこ始動 新政（あらまさ） 黒龍（こくりゅう） 久保田（くぼた） 獺祭（だっさい） 十四代（じゅうよんだい） 八海山（はっかいさん） 菊水（きくすい） 伝酒（でんしゅ） 越乃寒梅（こしのかんばい）！`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "MAKUCHI RIKISHI MIX",
    romaji: `《 hatsudō 》 go koku hōjō kaku ryū ryū den ta mawashi haku hō shi yōhōzan tochi ō zan ! kai sei yoshi kaze chiyotai ryū`,
    Japanese: `《発動》 五穀豊穣 鶴竜 竜電 賜（たまわし） 白鵬 松鳳山 栃煌山 ！ 魁聖 嘉風 千代大龍`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
{
    name: "ORIGINAL JAPANESE KAHEN MIX",
    romaji: `ama tora kasen umi u jokyo seni jinzō ama tobihihi torahi tobihi ama tora jinzōhi tora jokyo hi ama hi kasen hi nōjō`,
    Japanese: `海女 虎 化繊 海鵜 除去 繊維 人造 海女 飛火火 虎火 飛火 海女 虎 人造火 虎 除去 火 海女 火 化繊 火 農場`,  

    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  }
];;

// Add id and Japanese field (fallback to romaji in Body when missing)
export const idolChants = rawChants.map((chant, index) => ({
  id: index + 1,
  name: chant.name,
  romaji: chant.romaji,
  Japanese: chant.Japanese || chant.romaji,
  // Pass through the example object if it exists, otherwise undefined
  example: chant.example ?? null,
}));
