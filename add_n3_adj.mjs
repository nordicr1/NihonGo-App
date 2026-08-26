import fs from 'fs';
import path from 'path';

const naAdjectivesN3 = [
  { word: '明らか', romaji: 'akiraka', reading: 'あきらか', meaningPt: 'Claro, óbvio', exJp: 'それは明らかな間違いです。', exReading: 'それ は あきらかな まちがい です。', exRomaji: 'Sore wa akiraka na machigai desu.', exPt: 'Isso é um erro óbvio.' },
  { word: '新た', romaji: 'arata', reading: 'あらた', meaningPt: 'Novo', exJp: '新たな計画を立てます。', exReading: 'あらたな けいかく を たてます。', exRomaji: 'Arata na keikaku o tatemasu.', exPt: 'Elaboraremos um novo plano.' },
  { word: '駄目', romaji: 'dame', reading: 'だめ', meaningPt: 'Ruim, inútil, proibido', exJp: 'ここに車を止めては駄目です。', exReading: 'ここ に くるま を とめて は だめ です。', exRomaji: 'Koko ni kuruma o tomete wa dame desu.', exPt: 'É proibido estacionar o carro aqui.' },
  { word: '同一', romaji: 'douitsu', reading: 'どういつ', meaningPt: 'Idêntico, mesmo', exJp: '彼らは同一人物です。', exReading: 'かれら は どういつ じんぶつ です。', exRomaji: 'Karera wa douitsu jinbutsu desu.', exPt: 'Eles são a mesma pessoa.' },
  { word: '不利', romaji: 'furi', reading: 'ふり', meaningPt: 'Desvantajoso', exJp: '不利な条件です。', exReading: 'ふりな じょうけん です。', exRomaji: 'Furi na jouken desu.', exPt: 'É uma condição desvantajosa.' },
  { word: '不足', romaji: 'fusoku', reading: 'ふそく', meaningPt: 'Falta, insuficiente', exJp: '今は水が不足しています。', exReading: 'いま は みず が ふそく しています。', exRomaji: 'Ima wa mizu ga fusoku shite imasu.', exPt: 'Falta água no momento.' },
  { word: '発明', romaji: 'hatsumei', reading: 'はつめい', meaningPt: 'Invenção', exJp: '新しい技術を発明しました。', exReading: 'あたらしい ぎじゅつ を はつめい しました。', exRomaji: 'Atarashii gijutsu o hatsumei shimashita.', exPt: 'Inventei uma nova tecnologia.' },
  { word: '意外', romaji: 'igai', reading: 'いがい', meaningPt: 'Inesperado, surpreendente', exJp: '意外な結果になりました。', exReading: 'いがいな けっか に なりました。', exRomaji: 'Igai na kekka ni narimashita.', exPt: 'Tornou-se um resultado inesperado.' },
  { word: '一般', romaji: 'ippan', reading: 'いっぱん', meaningPt: 'Geral, comum', exJp: 'これは一般的な考えです。', exReading: 'これ は いっぱんてきな かんがえ です。', exRomaji: 'Kore wa ippanteki na kangae desu.', exPt: 'Esta é uma ideia comum.' },
  { word: '邪魔', romaji: 'jama', reading: 'じゃま', meaningPt: 'Estorvo, obstáculo', exJp: '勉強の邪魔をしないでください。', exReading: 'べんきょう の じゃま を しないで ください。', exRomaji: 'Benkyou no jama o shinaide kudasai.', exPt: 'Por favor, não atrapalhe os estudos.' },
  { word: '高速', romaji: 'kousoku', reading: 'こうそく', meaningPt: 'Alta velocidade', exJp: '高速なインターネットが必要です。', exReading: 'こうそくな インターネット が ひつよう です。', exRomaji: 'Kousoku na intaanetto ga hitsuyou desu.', exPt: 'É necessária uma internet de alta velocidade.' },
  { word: '強力', romaji: 'kyouryoku', reading: 'きょうりょく', meaningPt: 'Poderoso', exJp: '強力な武器を手に入れました。', exReading: 'きょうりょくな ぶき を てに いれました。', exRomaji: 'Kyouryoku na buki o te ni iremashita.', exPt: 'Obtive uma arma poderosa.' },
  { word: '急激', romaji: 'kyuugeki', reading: 'きゅうげき', meaningPt: 'Repentino, drástico', exJp: '急激な変化がありました。', exReading: 'きゅうげきな へんか が ありました。', exRomaji: 'Kyuugeki na henka ga arimashita.', exPt: 'Houve uma mudança drástica.' },
  { word: '急速', romaji: 'kyuusoku', reading: 'きゅうそく', meaningPt: 'Rápido (progresso)', exJp: '町は急速に発展しました。', exReading: 'まち は きゅうそくに はってん しました。', exRomaji: 'Machi wa kyuusoku ni hatten shimashita.', exPt: 'A cidade se desenvolveu rapidamente.' },
  { word: '真面目', romaji: 'majime', reading: 'まじめ', meaningPt: 'Sério, honesto', exJp: '彼は真面目な学生です。', exReading: 'かれ は まじめな がくせい です。', exRomaji: 'Kare wa majime na gakusei desu.', exPt: 'Ele é um estudante sério.' },
  { word: '真っ赤', romaji: 'makka', reading: 'まっか', meaningPt: 'Vermelho brilhante', exJp: '顔が真っ赤になりました。', exReading: 'かお が まっかに なりました。', exRomaji: 'Kao ga makka ni narimashita.', exPt: 'O rosto ficou todo vermelho.' },
  { word: '満足', romaji: 'manzoku', reading: 'まんぞく', meaningPt: 'Satisfeito', exJp: '今の生活に満足しています。', exReading: 'いま の せいかつ に まんぞく しています。', exRomaji: 'Ima no seikatsu ni manzoku shite imasu.', exPt: 'Estou satisfeito com a minha vida atual.' },
  { word: '明確', romaji: 'meikaku', reading: 'めいかく', meaningPt: 'Claro, preciso', exJp: '明確な指示を出してください。', exReading: 'めいかくな しじ を だして ください。', exRomaji: 'Meikaku na shiji o dashite kudasai.', exPt: 'Por favor, dê instruções claras.' },
  { word: '熱心', romaji: 'nesshin', reading: 'ねっしん', meaningPt: 'Entusiasta, empenhado', exJp: '熱心に仕事に取り組む。', exReading: 'ねっしんに しごと に とりくむ。', exRomaji: 'Nesshin ni shigoto ni torikumu.', exPt: 'Dedica-se ao trabalho com entusiasmo.' },
  { word: '利口', romaji: 'rikou', reading: 'りこう', meaningPt: 'Inteligente, esperto', exJp: 'とても利口な犬ですね。', exReading: 'とても りこうな いぬ ですね。', exRomaji: 'Totemo rikou na inu desu ne.', exPt: 'É um cachorro muito esperto, né.' },
  { word: '新鮮', romaji: 'shinsen', reading: 'しんせん', meaningPt: 'Fresco', exJp: '新鮮な魚を食べました。', exReading: 'しんせんな さかな を たべました。', exRomaji: 'Shinsen na sakana o tabemashita.', exPt: 'Comi um peixe fresco.' },
  { word: '有利', romaji: 'yuuri', reading: 'ゆうり', meaningPt: 'Vantajoso', exJp: '試合は我々に有利です。', exReading: 'しあい は われわれ に ゆうり です。', exRomaji: 'Shiai wa wareware ni yuuri desu.', exPt: 'A partida é vantajosa para nós.' },
  { word: '随分', romaji: 'zuibun', reading: 'ずいぶん', meaningPt: 'Muito, bastante', exJp: '今日は随分寒いです。', exReading: 'きょう は ずいぶん さむい です。', exRomaji: 'Kyou wa zuibun samui desu.', exPt: 'Hoje está bastante frio.' }
];

const iAdjectivesN3 = [
  { word: '激しい', romaji: 'hageshii', reading: 'はげしい', meaningPt: 'Violento, intenso', exJp: '激しい雨が降っています。', exReading: 'はげしい あめ が ふって います。', exRomaji: 'Hageshii ame ga futte imasu.', exPt: 'Está caindo uma chuva intensa.' },
  { word: '上手い', romaji: 'umai', reading: 'うまい', meaningPt: 'Habilidoso, delicioso', exJp: '彼女は歌が上手いです。', exReading: 'かのじょ は うた が うまい です。', exRomaji: 'Kanojo wa uta ga umai desu.', exPt: 'Ela é habilidosa cantando.' },
  { word: '宜しい', romaji: 'yoroshii', reading: 'よろしい', meaningPt: 'Tudo bem, OK (formal)', exJp: 'これで宜しいでしょうか。', exReading: 'これ で よろしい でしょうか。', exRomaji: 'Kore de yoroshii deshou ka.', exPt: 'Isto está bom para você?' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove trailing bracket and semicolon
  content = content.replace(/\];?\s*$/, '');
  
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = categoryId === 'adjetivo_na' ? 'v_adj_na_n3_' : 'v_adj_i_n3_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N3',
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
appendToFile(naPath, naAdjectivesN3, 'adjetivo_na', 'Adjetivo Na');

const iPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosI.ts');
appendToFile(iPath, iAdjectivesN3, 'adjetivo_i', 'Adjetivo I');

console.log("Appended Na and I adjectives N3 to files!");
