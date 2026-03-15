// Idol Chants & Mixes - Japanese Idol Mixes PDF (full list)
// Each entry: name, romaji, hiragana (optional), katakana (optional)
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYOHONTUSUKE START",
    romaji: `Myohontusuke!
Kasentobijoukyo!
Jya jya!
Faibo!
Waipa!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYOHONTUSUKE HAJIMARU YO",
    romaji: `Hajimaru yo!
Hajimaru yo!
Myohontusuke, hajimaru yo!
Myohontusuke!
Kasentobijoukyo!
Jya jya!
Faibo!
Waipa!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYOHONTUSUKE KOUJOU",
    romaji: `ītai koto ga raratusuke
yappari omae wa ama shindō
chapeapekarakina yappa chape
kasen myōhontusukechape
ore ga ti guretekita shiberu
saidā omae ni sutoraipā
ore to issho ni chapeapekarakina jinzō faiyafaibowaipā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MYOHONDORAIBA HIROBA",
    romaji: `myōhondoraibā
kasen hi raigā
jajjājajjā
baribari bō
sutosutosutosuto
sutosutoraipā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU MIX",
    romaji: `Faibo! Waipa! Faama! Jyasupa! Howaipa! Kuupa!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KUROFUKU SUTAJAPA KONGOU MIX",
    romaji: `taigā hi saibā seni daibā shindō jā jā hi waipā janpa pingā mai fāmā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SPANISH MIX",
    romaji: `Vamos (Bamous)! Tigre (Tigure)! Fuego! Ciber (Shiberu)! Fibra (Fibura)! Buzo! Viber (Biburaru)! Jersey (Herusei)! Volare (Borare)! Limpiaparabrisas (Rimpiaparaburisasu)!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "URA SPANISH/URASUPE MIX",
    romaji: `Vamos (Bamous)! Tigure! Fego! Fiburaru! Buzo! Biburaru! Shirena! Diosa! Nabida! Reno! Anheru! Senishienta!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "Esubanshion / Pai-Suderasu / Marabijasu",
    romaji: `Esubanshion! Pai-Suderasu! Marabijasu!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANGUL MIX",
    romaji: `Cha-kada~! Horani! Buru! Injyo! Somyu! Henyo! Shindo! Fahakusomyu! Neuda! Jego!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ARABIC MIX",
    romaji: `Suifuriasuiiru! Namiru! Naaru! Suinaaii! Nasuiijyu! Gatasa! Hazza!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "URA GERMAN MIX",
    romaji: `Gēenviā! Tīgā! Foieru! Kūnsuto! Fibā! Tautsā! Shubingungu! Hiēmīfāzā! Firīgen! Bazaitigan!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ASHURA KONTON MIX",
    romaji: `wārudo kaosu shogyō kogure shigure kagura kongōsan shō kasane mata goku un yume sakai meikai tsuyo tsuyoshi nauda mamoriasutā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KONTON MIX (PAINTED LUXURY CAR VER)",
    romaji: `sakkā buin ! shiai ！ ieji ！ tsukare ！ tsuitotsu ！ kuronuri no ！ kōkyūsha ！ kōhai ！ miura ！ jidan no jōken ！`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TANBO NO YOUSU GA OKASHI MIX",
    romaji: `Yosuiro! Konbain! Tanbo no yousu ga! *clap*, okashi!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IROHA UTA KOUJOU (2)",
    romaji: `Irohanihoheto chiri nuru o! Waka yotare so tsunenara mu! Uinookuyama kyō koete! Asaki yumemishi yoi mo sezu! Tenka musō no otakebi de! Ōka ranman sakihokore! Kyōran ribu no na no gen ni! Saka sete mise yo Gosei no hana!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ULTIMATE MIX (1)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, fama patoronamu! Ore to taiga tomuridoru! Vorudemottotte Iettaiga!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ULTIMATE MIX (2)",
    romaji: `Iitai koto ga faibomarufoi! Yappari ◯◯ gurifintaiga! Akushio chape ape yappa suki! Uingatousuke ohimesama! Faiya ore to rebiosa karakina Sore wa, famapatoronamu! Ore to jinsei tomuridoru! Sekai de ichiban, gurenja!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IETTAIGA KARA NO",
    romaji: `Iettaiga kara no! Iettaiga kara no! Iettaiga kara no! Iettaiga!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "UNCHI MIX",
    romaji: `Faibo waipa! Wa wa wa wa waipa! Faama jyasupa! Jya jya jya jya jyasupa! Howaipa kuupa! Ku ku ku ku kuupa! Iesukuraipa ie iesukuraipa! Raiga faitaa! Ra ra ra ra raiga! Saida faindaa! Sa sa sa sa saida! Doraiba beibe! Do do do do doraiba! Jya jya jya jya! Baribaribo! Suto suto suto suto sutoraipa!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "STANDARD UNCHI KAHEN MIX",
    romaji: `Taigā faiyā tatatatataigā! Saibā faibā sasasasasaibā! Daibā baibā dada dada daibā! Jya jya jyajya, jyajyajyajyajyajya!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHAPE KAHEN MIX",
    romaji: `Sekai de ichiban aishiteru! ◯◯ ni sasageru chape tora taiga! Chape! 8x Ai! Rabu! Yuu!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DAN MIX",
    romaji: `Dan! Dandandan! Dan! Dandandan! Hai! se~no! Iettaiga! Kara no Iettaiga! x3`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NIKO NIKO LOVERS MIX",
    romaji: `Koitsuru usagi ni koi o shite! Niko niko LOVERS aishiteru!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HALCA KAKO TSUI KAHEN MIX",
    romaji: `Jinzou haruka chinpo waipa! Haruka haruka, hahahaha haruka! Motto negi taso peropero chi ~yutchu! Haruka no kako tsu~i! *clap* chinpo! Man man man man oishī toire seiya no hiru meshi Matsuya no gyūsara! Nanpa nau nanpa nau a ̄ ma Miya sora iettaigā! Faibo! Waipā! Janpā! Pingā! Dansu! Fāmā!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "YURU KAWA NO NAMAE-KEI KŌRU",
    romaji: `Neko! Neko! Shiina neko! Iitai koto ga Mochida Mayu! Tora! Hi! Jinzou! Seni! Ama! Bara! Ruri-chan!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "METCHA MISUTTEMASU KAHEN MIX",
    romaji: `Bukkuofunoni hon ne ~ejan'neejan'neejan'nenenenene~ejan! Bukkuofunanoni bukkuofunanoni bukkuofunanoni! *clap* Nējan! Hon nē hon ne~e bukkuofunanoni bukkuofunanoni motomotone~ejan! Bukkuofubukkuofubukkuofunanoni hon'ne~ejan!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PIZZA MIX",
    romaji: `Sha! Yakuzo! Bisumaruku! Banbīna! Kapurichōza! Rimōne! Fungiton'nāta! Marugerīta! Jenoa! Kuatoroforumajji!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NERU NERU NE MIX",
    romaji: `Neru neru neru neru 3x Neru ne! Nereba neru hodo iro ga kawatte *clap* umai tēretterē!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "OYASUMI MIX",
    romaji: `Gunnaito! Wan'an! Jaruja! Bonanitto! Bonnyui! Buonanotte! Gūtenahato! Buenasunōchesu! Supakoinainōchi!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "LINE I YARANAI TOSHI RYŪ",
    romaji: `Ai wa 〜 ~tsu! Nari yamanai uta a~tsu! Ai wa 〜 ~tsu! Michibiki no tobira ~tsu! Shiren ataete wa toriaru Su kami-tachi o itsunohika koete yukeru (LINE LINE o yaranai *clap* Toshi Ryū)!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KYARI MIX",
    romaji: `Disutineshon! Suromoshon! Konbineshon! Gurade-yueshon! Inbiteshon! Tenputeshon! Reboryushon! Kanashimi! Kyaribureshon!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DIASUTE MIX (Momo Kuri)",
    romaji: `Diasute MIX: Momo! Kuri! Imo! Chichi! Imouto! Abura! Danboru!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MIYAMOTO MIX",
    romaji: `Hi jokyo nō sei shoku son Miyamoto musashi!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "IRO/COLOR MIX",
    romaji: `Ore o ◯◯ de yogoshite yo! ◯◯ no iro ni somaritai! Ano iro kono-iro don'na iro! Namae mo shiranai irodakedo! Sorairo natsuiro yumeiro kimiiro! Yappari ore wa rei rei-shoku! [Yappari cocoiro rainbow!]`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SWORD SKILL MIX",
    romaji: `Sōdo sukiru! Shinguru shūto! Reijisupaiku! Sonikkurīpu! Bāchikaruāku! Horizontarusukuea! Moeagare ore no kenyo! Asuna wa ore ga mamoru! (Sutābāsutosutorīmu)`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SUNSHINE MIX",
    romaji: `Shanshanshanshansanshain! Pyoittohito tobi mario-kun! Nintendō nintendō! Taoshi kata tte shitteru 〜?`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SHICHIFUKUJIN MIX",
    romaji: `Aaa！ Nana fuku sokusei！ Ebisu! Fuku roku! Benzai! Kotobuki rō! Hotei! Daikoku! Bishamonten!`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKESHITASEIKA MIX",
    romaji: `toratoratoratora ！ tora kichi kun ！ burakku ！ burakku ！ monburan ！ mīru kurukuru miru kukku ！ atari ga detara mō ichi hon ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SANSEKERTA MIX",
    romaji: `Shimo! Fama! Shunga! Lakra! Chakra! Chanca! Jya jya! Sansekerta!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOKIORI MAMEIDO MIX (1)",
    romaji: `Jokyo, Hi, Kasen, Shindo, Ama, Sen'i, Shindo, Jinzo, Hi, Tora, Hi, Tora, Hi, Jokyo, Jokyo, Jokyo, Jokyo, Tora, Hi, Jinzo, Sen'i, Ama, Shindo, Kasen, Hi, Jokyo, Cho Umi-Mai Nojo`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FUTURE DIVER DEMPAGUMI",
    romaji: `Moe Kyunsongu o Sekai ni o Todoke Future Diver Dempagumi!!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "RATENGO MIX",
    romaji: `tigurisu igunisu ātifisharu fibura ūrinatore viburationisu sakkyarumu vora erimotione`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JUUNISHI MIX",
    romaji: `nē ushi torau nē ushi torau tatsu mi uma hitsu saru tori uma hitsu saru tori inu i`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "AI KOUJOU",
    romaji: `tenka musō no otakebi de konoyo ga owaru sono hi made kyōran uraramai no na no shita ni sakasete misemasu ai no hana`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SEYAMA MIX",
    romaji: `jōhonchose ！ katakuri jōtō ！ daibā ！ saibā ！ apā ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "12 SEIZA MIX",
    romaji: `gyarakushī ! kapuriko verusō powasson berie torō jemo kanse rion vieruju baransu sukorupion sajittēru`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHIIZU MIX",
    romaji: `rikotta mottsarera rokkufōru burī tarejjio kamanbēru chedā parumezan gorugonzōramasukarupōne`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "YOSHI IKUZOU MIX (RONGU VER)",
    romaji: `ā yoshi ikuzō ！ terebi monē ！ rajio monē ！ kuruma mo sorehodo hashittenē ！ piano monē ！ bā monē ！ junsa ( o mawari ) mainichi gu ru guru ！ ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SUTAJAPA KONGOU MIX",
    romaji: `taigā hi saibā seni daibā shindō jā jā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HAYASHI OSAMU MIX",
    romaji: `urya oi kakeru 4x ā mada ikanai urya oi kakeru 4x ā mada ikanai itsu ikuno ？ imadesho ！ ā mada ikanai mada ikanai mada ikanai demo ima ikanainara mō ikenai`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JAPANESE KAHEN MIX",
    romaji: `ama tora jinzō ama tora kasen jokyo tora jinzō ama seni tora ama seni jokyo hi shindō seni kasen hi jokyo tora shindō ama torahi`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU KAHEN MIX (1)",
    romaji: `jokyo shindō ama shindō kasen hi torahi tora torahihi tora torahi torahi jokyo hi momiji nokoji kasen hi ama fu jokyo tora momiji`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU KAHEN MIX (2)",
    romaji: `āhoiyoāhoiyo āhoiāhoiāhoiyo tora hi jokyo hi ama shindō ama fu ama fu ama shindō momiji nokoji pandeikamejihatoji ruyanpeāhoiyo nōjō ( nōjō ) nōjō ( nōjō ) ieffāmā ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKEMINORIJINARU MIX",
    romaji: `jā jā faibō waipā tina rabuki ban iria takara kaizā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKEMINORIJINARU PERFECT MIX",
    romaji: `jā jā faibō waipā herutei kaizā bāmosu iza nagi ie ！ iza nami chakada somyu boraru jego hoashen rao fū juntoisē`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANA ARASHI MIX",
    romaji: `sakura tsubaki ayame kuro yuri kaede suiren kakitsubata`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOKUI PERFECT MIX",
    romaji: `tora hi jinzō seni ama shindō kasen hi jokyo chūjitsu setsuna koku kōyō shinzui gokui tamashī denshō`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAIGO MIX",
    romaji: `shīā faimai torōn faibū buradānā sutān sankorā bin kākamuchā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ITALIA MIX",
    romaji: `andiamo! tīgure fōko repurikante fībura baronbāro viburamento tekunoborāre asutorattsiōne`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NEPAL MIX",
    romaji: `bāgu ago maniche ruga pōdi harī santosuti bō`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PORTUGAL MIX",
    romaji: `bāmosu garēra ! tiguru fōgu aruchifisharu fibura pesukadōra viburasao arugodao voaru ekusukuruiru`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FRANCE MIX",
    romaji: `se paruti ! tiguru fū shi bēru fiburu puronjū ondeu tadāmu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PURO YAKYU MIX (NIHONGO VER)",
    romaji: `tora ori washi koi kamome hoshi kyojin`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ROSHIAGO MIX",
    romaji: `chīguru agōni kibieru varakuno mōrie bābara vibaratsiya hīmya ritāchi udarienie`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PUREBO MIX (PURO YAKYU VER)",
    romaji: `taigāsu faitāzu raionzu suwarōzu hōkusu doragonzu jaiantsu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KYOSHIHAI SENSOU MIX",
    romaji: `ā hijirihai sensō ！ sei bā ransā āchā raidā kyasutā asa shin bāsākā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PEGASASU MIX",
    romaji: `pegasasu fenikkusu doragon kigunasu andoromeda atena moeagare 〇 〇 wa ore ga mamoru`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAMI GEKI MIX",
    romaji: `ā ！sha kōrin ！ ！ atena zeusu aresu gaia serene kaosu heri osu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GO MIX",
    romaji: `bā agu sai bara tantu gotakō kanpan kuritorimatantū`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NEO MIX",
    romaji: `momiji nokoji pandei kameji wa toji`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ENCHOU GYAKUCHI MIX",
    romaji: `reipā kūpā howai pā jasupā fāmā waipā faibō`,
    hiragana: ``,
    katakana: ``,
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
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CHUUGOKUGO MIX",
    romaji: `fū fuo renzao shenwei hainī jen don hoanshen feichūchī`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FEVER MIX",
    romaji: `chape tora taigā ！ onitsukataigā ！ burakkusandā ！ ikari no shishishin sandāraigā ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ wa, kawaii yo! Suki suki daisuki, yappa suki! Yatto mitsuketa, ohimesama! Ore ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Ore to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://youtu.be/znX2lhAiuxM?si=ndrkZMfMrhNcKqDr&t=141',
      title: 'ILIFE - アイドルライフスターターパック',
      timestamp: '2:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU MALE",
    romaji: `Iitai koto ga, arun da yo! Yappari ◯◯ kakkoii! Suki suki daisuki, yappa suki! Yatto mitsuketa, oojisama! Watashi ga umarete, kita riyuu! Sore wa ◯◯ ni, deau tame! Watashi to issho ni, jinsei ayumou! Sekai de ichiban, aishiteru! A, i, shi, te, ru! [Zettai kekkon shiyou na!]`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU SHIN",
    romaji: `Iitai koto ga arukeredo! Umaku kotoba ni dekinakute! Sukizuki-me o mite ietanara! Kon'nani kurushikunai no ka na! Boku ga korekara ikiru riyū-kun no egao ga mitaikara boku dake no kimi janaikeredo! Kimi dake no boku de itaikara! Iitain da!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://youtu.be/f6V6R-ObNfc?si=XOqunQ9IYZvkCg0Z&t=138',
      title: 'ILIFE - アイドルライフブースターパック',
      timestamp: '2:18'
    }
  },
  {
    name: "MENZU GENBA-MUKE GACHI KOI KOUJOU",
    romaji: `Iitai koto ga arun da yo! Yappari ◯◯ kakkoī! Sukisuki daisuki yappa suki! Yatto deaeta ōji-sama! Watashi ga umareta sono riyū soreha ◯◯ ni deau tame! Watashi to isshoni jinsei ayumou! Sekai de ichiban, itoshi teru! A, i, shi, te, rū! [Zettai kekkon shiyou na!]`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SPANISH KOUJOU",
    romaji: `Iitai koto ga tigurefego! Yappari kimi wa shiberufibura! Buzobuzobiburaru yappa buzo! Yatto mitsuketa *clap* heruzei! Ore ga umareta shīrena diosa nabida reno anheru senishienta esupanshion paīsuderasu marabījasu!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANMURABI HOUTEN KOUJOU",
    romaji: `Iitai koto ga aru nda yo! Hanmurabi hōten! Hito no me o tsubushitanaraba! Sono hito no me o tsubushi nasai! Hito no ha o ottanara! Sono hito no ha o ori nasai! Hito no dorei o yattanara! Soitsu o min'nade hangoroshi! Wa, n, go, ro, shi!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOUJASU KOUJOU",
    romaji: `Iitai koto ga rebo ryūshon! Yappari kimi wa fanta sutikku!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KAHEN KOUJOU",
    romaji: `ītai koto ga faibowaipā yappari taigātatatatataigā sukizuki daisuki chapeapekarakina yatto mitsuketa （ tebyōshi ） waipā ore ga umarete tora tora kara kina sore wa omae to ama ama jasupā ore to issho ni tora taigā sekai de ichi ban iettaigā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://youtu.be/OLjK3xY5RZU?si=Er2vL6joDUmvf6WK&t=142',
      title: 'ILIFE - アイドルライフエクストラパック',
      timestamp: '2:22'
    }
  },
  {
    name: "GACHI KOI NEJIRASE KOUJOU",
    romaji: `ītai koto mo ienaisa datte ◯◯ ga sukidakara muri muri zettai yappa dame ◯◯ wa takane no hanana nda ore ga mitsumeru sono saki de sotto warattekurereba ī ore ni janakute mo kamawanai dare yori waratte ikitekure i ki te ku re`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PASTA MIX",
    romaji: `Sha! Makuzo! jenobēze pesukatōre arabiāta aruburetto karubonāra boronēze puttanesuka kachatōra`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "2 REN MIX GACHI KOI GISOU",
    romaji: `ītai koto ga aru ndayo demo yappari iwanai jā jā ！ chape ape kara kina rara tusuke wisupe faibō waipā fāmā jasupā howai pā kūpā iesukureipā ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "1.5 REN MIX",
    romaji: `a 〜 yossha ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā tora hi jinzō seni a 〜 mō iccho ikuzo ！ taigā faiyā saibā faibā daibā baibā jā jā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KOUJOU REI SHIKI",
    romaji: `◯◯ ni deaeta ano hi kara mune ni idaku wa koigokoro ima omoeru wa omae dake sā sasageyō dai tenshi ore ga umaretekita riyū sore wa omae ni deau tame ore to issho ni jinsei ayumō sekai de ichiban aishiteru a i shi te ru ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GOU JASU KOUJOU",
    romaji: `ītai koto ga rebo ☆ ryūshon yappari kimi wa fanta ☆ sutikku Want yō Want yō yappa suki yatto mitsuketa desu ☆ tinī ore ga umareta kanbojia sore wa omae to paraguai ore to issho ni jinsei arasuka sekai de ichiban madagasukaru ma da ga su karu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MORI MITSUKO KOUJOU",
    romaji: `ītai koto wa , , , nai ！ ！ mori mitsuko ！ mori mitsuko ！ minna de issho ni eburi ba de ipasshon n n n n sora kara mitetene mitsuko san anata no namae o sakebimasu mori mitsuko ！ mori mitsuko ！ ba chikawa tenshi no mori mitsuko mo ri mi tsu ko ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "PIZA MIX",
    romaji: `ā yossha kūzo ！ piza piza piza piza piza piza aokīzu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NOGIZAKA 46 MIX",
    romaji: `ā yossha saka noboruzo ！ doryoku kansha egao uchira wa nogizaka noborizaka fōtīshikkusu!`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOKIORI MAMEIDO MIX (2)",
    romaji: `jokyo hi kasen shindō ama seni shindō jinzōhi tora hi tora hi jokyo jokyo jokyo jokyo torahi jinzō seni ama shindō kasen hi jokyo chō umi u mai nōjō`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "EXCALIBUR MIX",
    romaji: `saga mū kigunasu marin aioria shaka mōichido ore ni hikari o misetekure mezameyo waga ekusukaribā ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GONDOU MIX",
    romaji: `ā gondō gondō ame gondō ame ame gondō ame gondō`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "DANSON MIX",
    romaji: `danson fīzaki tūzadīsāza konsa`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "HANABI MIX",
    romaji: `5 ！ 4 ！ 3 2 1 ！ kiku botan taki wa chi sen rin yō raku ka murogiku jā jā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "FABORIASUTA MIX",
    romaji: `jā jā faibo injo jasupā biburaru kasen iesukureipā naruda faboriasutā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TOMASU MIX",
    romaji: `ā shuppatsu shinkō ！ tōmasu gōdon henrī pāshī tobī edowādo poppō ( jēmusu, emirī )`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "SAKUMA MIX",
    romaji: `Shainī faiyā sandā wōtā neichā poizun sakumā ! Hi honō kaminari mizu midori doku sakuma to jōshō ! Chupu uhyui kanna wakka kamui suruku sakumahopunpa !`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "VIETNAM MIX",
    romaji: `Chuntoisē! tī garu chai kī baru soi tūran ron soitonhoppu`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KAOU KAHEN 3 REN MIX",
    romaji: `pyuōrabiorewaidohaitā haitāhaitāhahahahahaitā emorikaherushia emorikaherushia kuria kurīn nibea risesshurisesshubabubabuherushia hamingu famirī furosui wandā awa haitā awa haitā pyuōrarorie iehhaitā`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NANA RANDO MIX",
    romaji: `Shainī faiyā sutā wōtā neichā uindo raburī! You en sei sui ryoku fū ai nanarando ！ Chupu uhyui nochiu wakka kamui rera katairokke !`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "CATALAN MIX",
    romaji: `tīgure fōku suībā fībura bussejadōru biburashio fiburakīmika sarutā eriminashio`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "JANKEN KOUJOU",
    romaji: `ītai koto ga aru ndayo yappari ◯◯ kawaīyo demo sonna no dō demo ī ndayo ya parijanken tanoshīyo gūchokipā de gūchokipā de nani tsukurō 〜 nani tsukurō 〜 [igo o suki ni dōzo]`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "KANJOU BUGYOU MIX",
    romaji: `gūchokipā de 〜 gūchokipā de 〜 nani tsukurō 〜 nani tsukurō 〜 migite wa pā de hidarite mo pā de kanjō bugyō ni o makaseare i ！ [pōzutsuki de]`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "UIGUSU MIX",
    romaji: `itsu nakuno ima nakuno hōhokekyo ！ hotsu ！ hokekyo ！ hokekyo ！ kakeru 4x ( or hokekyo kakeru 6x ) ho ！ hokekyō ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "TAKAMARANAIKEDO SHINJIMARU KOUJOU",
    romaji: `takamaranai ！ takamaranai ！ takamaranaikedo shijimāru ！ shijimāru ！ shijimāru ！ shijimāru kara no kazu dansu ！ shijimāru ！ shijimāru ！ shijimāru kara no aikyanfurai ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "GACHI KOI KANSHA KOUJOU",
    romaji: `ītai koto wa tada hitotsu ◯◯ hontōni arigatō kimi no egao ga attakara boku wa koko made koreta nda kimi ga umaretekita riyū sore wa sekai o terasu tame korekara saki mo kawarazu ni kagayakitsuzukete itsu made mo i tsu ma de mo`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "RESU KUSASAI KOORU",
    romaji: `resu kudasa i ！ resu kudasa i ！ dare demo īkara resu kudasa i ！ resu kudasa i ！ resu kudasa i ！ yappari ◯◯ no resu kudasa i ！`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NANA DAIZAI MIX",
    romaji: `gōman shitto funnu taida gōyoku bōshoku shikiyoku`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "NIPPONSHU MIX",
    romaji: `○ ○ no ～ ○ ○ no ～ chotto ī toko shidō ara ma sa koku ryū ku bota das sai jū yonda i hakkai san ! kiku sui den shi yu koshi no kan bai !`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "MAKUCHI RIKISHI MIX",
    romaji: `《 hatsudō 》 go koku hōjō kaku ryū ryū den ta mawashi haku hō shi yōhōzan tochi ō zan ! kai sei yoshi kaze chiyotai ryū`,
    hiragana: ``,
    katakana: ``,
    example: {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'ILIFE - Idol Life Starter Pack',
      timestamp: '4:21'
    }
  },
  {
    name: "ORIGINAL JAPANESE KAHEN MIX",
    romaji: `ama tora kasen umi u jokyo seni jinzō ama tobihihi torahi tobihi ama tora jinzōhi tora jokyo hi ama hi kasen hi nōjō`,
    hiragana: ``,
    katakana: ``,
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
