import fs from 'fs';
import path from 'path';

const naAdjectivesN4 = [
  { word: '安心', romaji: 'anshin', reading: 'あんしん', meaningPt: 'Alívio, tranquilo', exJp: '安心しました。', exReading: 'あんしん しました。', exRomaji: 'Anshin shimashita.', exPt: 'Fiquei aliviado.' },
  { word: '安全', romaji: 'anzen', reading: 'あんぜん', meaningPt: 'Seguro, segurança', exJp: 'ここは安全です。', exReading: 'ここ は あんぜん です。', exRomaji: 'Koko wa anzen desu.', exPt: 'Aqui é seguro.' },
  { word: '大事', romaji: 'daiji', reading: 'だいじ', meaningPt: 'Importante', exJp: '大事な話があります。', exReading: 'だいじな はなし が あります。', exRomaji: 'Daiji na hanashi ga arimasu.', exPt: 'Tenho uma conversa importante.' },
  { word: '不便', romaji: 'fuben', reading: 'ふべん', meaningPt: 'Inconveniente', exJp: 'この町は不便です。', exReading: 'この まち は ふべん です。', exRomaji: 'Kono machi wa fuben desu.', exPt: 'Esta cidade é inconveniente.' },
  { word: '複雑', romaji: 'fukuzatsu', reading: 'ふくざつ', meaningPt: 'Complexo, complicado', exJp: '複雑な問題ですね。', exReading: 'ふくざつな もんだい ですね。', exRomaji: 'Fukuzatsu na mondai desu ne.', exPt: 'É um problema complexo, né.' },
  { word: '反対', romaji: 'hantai', reading: 'はんたい', meaningPt: 'Oposição, contrário', exJp: '私は反対です。', exReading: 'わたし は はんたい です。', exRomaji: 'Watashi wa hantai desu.', exPt: 'Eu sou contra.' },
  { word: '変', romaji: 'hen', reading: 'へん', meaningPt: 'Estranho', exJp: '変な音がします。', exReading: 'へんな おと が します。', exRomaji: 'Hen na oto ga shimasu.', exPt: 'Está fazendo um barulho estranho.' },
  { word: '久しぶり', romaji: 'hisashiburi', reading: 'ひさしぶり', meaningPt: 'Há muito tempo', exJp: 'お久しぶりですね。', exReading: 'おひさしぶり ですね。', exRomaji: 'Ohisashiburi desu ne.', exPt: 'Há quanto tempo, não é.' },
  { word: 'いっぱい', romaji: 'ippai', reading: 'いっぱい', meaningPt: 'Cheio', exJp: 'お腹がいっぱいです。', exReading: 'おなか が いっぱい です。', exRomaji: 'Onaka ga ippai desu.', exPt: 'Estou com a barriga cheia.' },
  { word: '一生懸命', romaji: 'isshoukenmei', reading: 'いっしょうけんめい', meaningPt: 'Com todo esforço', exJp: '一生懸命勉強します。', exReading: 'いっしょうけんめい べんきょう します。', exRomaji: 'Isshoukenmei benkyou shimasu.', exPt: 'Estudarei com todo o esforço.' },
  { word: '自由', romaji: 'jiyuu', reading: 'じゆう', meaningPt: 'Livre, liberdade', exJp: '今日は自由です。', exReading: 'きょう は じゆう です。', exRomaji: 'Kyou wa jiyuu desu.', exPt: 'Hoje estou livre.' },
  { word: '十分', romaji: 'juubun', reading: 'じゅうぶん', meaningPt: 'Suficiente', exJp: '時間は十分にあります。', exReading: 'じかん は じゅうぶん に あります。', exRomaji: 'Jikan wa juubun ni arimasu.', exPt: 'Temos tempo suficiente.' },
  { word: '簡単', romaji: 'kantan', reading: 'かんたん', meaningPt: 'Fácil, simples', exJp: '簡単なテストでした。', exReading: 'かんたんな テスト でした。', exRomaji: 'Kantan na tesuto deshita.', exPt: 'Foi um teste fácil.' },
  { word: '危険', romaji: 'kiken', reading: 'きけん', meaningPt: 'Perigoso, perigo', exJp: '危険な場所です。', exReading: 'きけんな ばしょ です。', exRomaji: 'Kiken na basho desu.', exPt: 'É um lugar perigoso.' },
  { word: '急', romaji: 'kyuu', reading: 'きゅう', meaningPt: 'Repentino, urgente', exJp: '急な仕事が入りました。', exReading: 'きゅうな しごと が はいりました。', exRomaji: 'Kyuu na shigoto ga hairimashita.', exPt: 'Apareceu um trabalho urgente.' },
  { word: '無理', romaji: 'muri', reading: 'むり', meaningPt: 'Impossível', exJp: 'それは無理です。', exReading: 'それ は むり です。', exRomaji: 'Sore wa muri desu.', exPt: 'Isso é impossível.' },
  { word: '盛ん', romaji: 'sakan', reading: 'さかん', meaningPt: 'Próspero, popular', exJp: 'スポーツが盛んです。', exReading: 'スポーツ が さかん です。', exRomaji: 'Supootsu ga sakan desu.', exPt: 'O esporte é popular.' },
  { word: '親切', romaji: 'shinsetsu', reading: 'しんせつ', meaningPt: 'Gentil', exJp: '親切な人です。', exReading: 'しんせつな ひと です。', exRomaji: 'Shinsetsu na hito desu.', exPt: 'É uma pessoa gentil.' },
  { word: 'たいてい', romaji: 'taitei', reading: 'たいてい', meaningPt: 'Geralmente', exJp: '日曜日はたいてい家にいます。', exReading: 'にちようび は たいてい いえ に います。', exRomaji: 'Nichiyoubi wa taitei ie ni imasu.', exPt: 'Aos domingos eu geralmente fico em casa.' },
  { word: '楽しみ', romaji: 'tanoshimi', reading: 'たのしみ', meaningPt: 'Ansioso, prazer', exJp: '旅行が楽しみです。', exReading: 'りょこう が たのしみ です。', exRomaji: 'Ryokou ga tanoshimi desu.', exPt: 'Estou ansioso pela viagem.' },
  { word: '丁寧', romaji: 'teinei', reading: 'ていねい', meaningPt: 'Educado, cuidadoso', exJp: '丁寧な言葉を使います。', exReading: 'ていねいな ことば を つかいます。', exRomaji: 'Teinei na kotoba o tsukaimasu.', exPt: 'Uso palavras educadas.' },
  { word: '適当', romaji: 'tekitou', reading: 'てきとう', meaningPt: 'Adequado, apropriado', exJp: '適当な服を選びます。', exReading: 'てきとうな ふく を えらびます。', exRomaji: 'Tekitou na fuku o erabimasu.', exPt: 'Escolherei roupas adequadas.' },
  { word: '特別', romaji: 'tokubetsu', reading: 'とくべつ', meaningPt: 'Especial', exJp: '今日は特別な日です。', exReading: 'きょう は とくべつな ひ です。', exRomaji: 'Kyou wa tokubetsu na hi desu.', exPt: 'Hoje é um dia especial.' },
  { word: '残念', romaji: 'zannen', reading: 'ざんねん', meaningPt: 'Pena, lamentável', exJp: 'それは残念ですね。', exReading: 'それ は ざんねん ですね。', exRomaji: 'Sore wa zannen desu ne.', exPt: 'Que pena, não é.' }
];

const iAdjectivesN4 = [
  { word: '浅い', romaji: 'asai', reading: 'あさい', meaningPt: 'Raso', exJp: '川が浅いです。', exReading: 'かわ が あさい です。', exRomaji: 'Kawa ga asai desu.', exPt: 'O rio é raso.' },
  { word: '深い', romaji: 'fukai', reading: 'ふかい', meaningPt: 'Profundo', exJp: '海は深いです。', exReading: 'うみ は ふかい です。', exRomaji: 'Umi wa fukai desu.', exPt: 'O mar é profundo.' },
  { word: '恥ずかしい', romaji: 'hazukashii', reading: 'はずかしい', meaningPt: 'Envergonhado', exJp: '恥ずかしいです。', exReading: 'はずかしい です。', exRomaji: 'Hazukashii desu.', exPt: 'Estou com vergonha.' },
  { word: '酷い', romaji: 'hidoi', reading: 'ひどい', meaningPt: 'Terrível, cruel', exJp: '酷い雨ですね。', exReading: 'ひどい あめ ですね。', exRomaji: 'Hidoi ame desu ne.', exPt: 'Chuva terrível, né.' },
  { word: '悲しい', romaji: 'kanashii', reading: 'かなしい', meaningPt: 'Triste', exJp: '悲しい映画を見ました。', exReading: 'かなしい えいが を みました。', exRomaji: 'Kanashii eiga o mimashita.', exPt: 'Assisti a um filme triste.' },
  { word: '硬い', romaji: 'katai', reading: 'かたい', meaningPt: 'Duro, firme', exJp: 'この肉は硬いです。', exReading: 'この にく は かたい です。', exRomaji: 'Kono niku wa katai desu.', exPt: 'Esta carne está dura.' },
  { word: '厳しい', romaji: 'kibishii', reading: 'きびしい', meaningPt: 'Rigoroso', exJp: '先生は厳しいです。', exReading: 'せんせい は きびしい です。', exRomaji: 'Sensei wa kibishii desu.', exPt: 'O professor é rigoroso.' },
  { word: '細かい', romaji: 'komakai', reading: 'こまかい', meaningPt: 'Fino, pequeno', exJp: '細かいお金がありますか。', exReading: 'こまかい おかね が ありますか。', exRomaji: 'Komakai okane ga arimasu ka?', exPt: 'Você tem dinheiro trocado?' },
  { word: '怖い', romaji: 'kowai', reading: 'こわい', meaningPt: 'Assustador', exJp: '犬が怖いです。', exReading: 'いぬ が こわい です。', exRomaji: 'Inu ga kowai desu.', exPt: 'Tenho medo de cachorro.' },
  { word: '珍しい', romaji: 'mezurashii', reading: 'めずらしい', meaningPt: 'Raro, incomum', exJp: '珍しい鳥ですね。', exReading: 'めずらしい とり ですね。', exRomaji: 'Mezurashii tori desu ne.', exPt: 'É um pássaro raro, né.' },
  { word: '眠い', romaji: 'nemui', reading: 'ねむい', meaningPt: 'Sonolento', exJp: '今はとても眠いです。', exReading: 'いま は とても ねむい です。', exRomaji: 'Ima wa totemo nemui desu.', exPt: 'Agora estou muito sonolento.' },
  { word: '苦い', romaji: 'nigai', reading: 'にがい', meaningPt: 'Amargo', exJp: '薬は苦いです。', exReading: 'くすり は にがい です。', exRomaji: 'Kusuri wa nigai desu.', exPt: 'O remédio é amargo.' },
  { word: '可笑しい', romaji: 'okashii', reading: 'おかしい', meaningPt: 'Engraçado, estranho', exJp: 'その話は可笑しいですね。', exReading: 'その はなし は おかしい ですね。', exRomaji: 'Sono hanashi wa okashii desu ne.', exPt: 'Essa história é engraçada.' },
  { word: '寂しい', romaji: 'sabishii', reading: 'さびしい', meaningPt: 'Solitário, triste', exJp: '一人で寂しいです。', exReading: 'ひとりで さびしい です。', exRomaji: 'Hitori de sabishii desu.', exPt: 'Estou solitário sozinho.' },
  { word: '素晴らしい', romaji: 'subarashii', reading: 'すばらしい', meaningPt: 'Maravilhoso', exJp: '素晴らしい景色です。', exReading: 'すばらしい けしき です。', exRomaji: 'Subarashii keshiki desu.', exPt: 'É uma vista maravilhosa.' },
  { word: '凄い', romaji: 'sugoi', reading: 'すごい', meaningPt: 'Incrível', exJp: '凄いですね！', exReading: 'すごい ですね！', exRomaji: 'Sugoi desu ne!', exPt: 'Incrível!' },
  { word: '正しい', romaji: 'tadashii', reading: 'ただしい', meaningPt: 'Correto', exJp: '正しい答えを選んでください。', exReading: 'ただしい こたえ を えらんで ください。', exRomaji: 'Tadashii kotae o erande kudasai.', exPt: 'Escolha a resposta correta.' },
  { word: '嬉しい', romaji: 'ureshii', reading: 'うれしい', meaningPt: 'Feliz, contente', exJp: 'プレゼントが嬉しいです。', exReading: 'プレゼント が うれしい です。', exRomaji: 'Purezento ga ureshii desu.', exPt: 'Estou feliz com o presente.' },
  { word: '美しい', romaji: 'utsukushii', reading: 'うつくしい', meaningPt: 'Belo, bonito', exJp: '美しい花ですね。', exReading: 'うつくしい はな ですね。', exRomaji: 'Utsukushii hana desu ne.', exPt: 'É uma flor linda.' },
  { word: '優しい', romaji: 'yasashii', reading: 'やさしい', meaningPt: 'Gentil', exJp: '母は優しいです。', exReading: 'はは は やさしい です。', exRomaji: 'Haha wa yasashii desu.', exPt: 'Minha mãe é gentil.' },
  { word: '柔らかい', romaji: 'yawarakai', reading: 'やわらかい', meaningPt: 'Macio', exJp: 'パンが柔らかいです。', exReading: 'パン が やわらかい です。', exRomaji: 'Pan ga yawarakai desu.', exPt: 'O pão está macio.' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove the trailing "];"
  content = content.replace(/\];?\s*$/, '');
  
  // ensure there's a comma if array is not empty
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = categoryId === 'adjetivo_na' ? 'v_adj_na_n4_' : 'v_adj_i_n4_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N4',
    categoryLabelPt: '${categoryLabel}',
    exampleSentence: {
      jp: '${item.exJp}',
      reading: '${item.exReading}',
      romaji: '${item.exRomaji}',
      meaningPt: '${item.exPt}'
    }
  }`;
    if (index < items.length - 1) {
      obj += ',';
    }
    content += obj + '\n';
  });
  
  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}

const naPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosNa.ts');
appendToFile(naPath, naAdjectivesN4, 'adjetivo_na', 'Adjetivo Na');

const iPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosI.ts');
appendToFile(iPath, iAdjectivesN4, 'adjetivo_i', 'Adjetivo I');

console.log("Appended Na and I adjectives N4 to files!");
