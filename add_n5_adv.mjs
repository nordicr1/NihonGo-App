import fs from 'fs';
import path from 'path';

const n5Adverbs = [
  { word: 'ちょっと', romaji: 'chotto', reading: 'ちょっと', meaningPt: 'Um pouco', exJp: 'ちょっと待ってください。', exReading: 'ちょっと まって ください。', exRomaji: 'Chotto matte kudasai.', exPt: 'Por favor, espere um pouco.' },
  { word: '丁度', romaji: 'choudo', reading: 'ちょうど', meaningPt: 'Exatamente, na hora', exJp: '丁度いいです。', exReading: 'ちょうど いい です。', exRomaji: 'Choudo ii desu.', exPt: 'Está na medida certa.' },
  { word: '大丈夫', romaji: 'daijoubu', reading: 'だいじょうぶ', meaningPt: 'Tudo bem, OK', exJp: '私は大丈夫です。', exReading: 'わたし は だいじょうぶ です。', exRomaji: 'Watashi wa daijoubu desu.', exPt: 'Eu estou bem.' },
  { word: 'だんだん', romaji: 'dandan', reading: 'だんだん', meaningPt: 'Gradualmente', exJp: 'だんだん寒くなります。', exReading: 'だんだん さむく なります。', exRomaji: 'Dandan samuku narimasu.', exPt: 'Vai esfriando gradualmente.' },
  { word: 'どう', romaji: 'dou', reading: 'どう', meaningPt: 'Como, de que forma', exJp: 'それはどうですか。', exReading: 'それ は どう ですか。', exRomaji: 'Sore wa dou desu ka.', exPt: 'Como é aquilo?' },
  { word: 'どうも', romaji: 'doumo', reading: 'どうも', meaningPt: 'Muito (obrigado)', exJp: 'どうもありがとうございます。', exReading: 'どうも ありがとう ございます。', exRomaji: 'Doumo arigatou gozaimasu.', exPt: 'Muito obrigado.' },
  { word: 'どうして', romaji: 'doushite', reading: 'どうして', meaningPt: 'Por que', exJp: 'どうして来なかったの。', exReading: 'どうして こなかった の。', exRomaji: 'Doushite konakatta no.', exPt: 'Por que você não veio?' },
  { word: 'どうぞ', romaji: 'douzo', reading: 'どうぞ', meaningPt: 'Por favor, sinta-se à vontade', exJp: 'どうぞ入ってください。', exReading: 'どうぞ はいって ください。', exRomaji: 'Douzo haitte kudasai.', exPt: 'Por favor, entre.' },
  { word: '初めて', romaji: 'hajimete', reading: 'はじめて', meaningPt: 'Pela primeira vez', exJp: '日本は初めてです。', exReading: 'にほん は はじめて です。', exRomaji: 'Nihon wa hajimete desu.', exPt: 'É minha primeira vez no Japão.' },
  { word: '一人', romaji: 'hitori', reading: 'ひとり', meaningPt: 'Sozinho(a), uma pessoa', exJp: '一人で行きます。', exReading: 'ひとりで いきます。', exRomaji: 'Hitori de ikimasu.', exPt: 'Eu irei sozinho.' },
  { word: '一番', romaji: 'ichiban', reading: 'いちばん', meaningPt: 'O número um, o mais', exJp: 'これが一番好きです。', exReading: 'これ が いちばん すき です。', exRomaji: 'Kore ga ichiban suki desu.', exPt: 'Este é o que mais gosto.' },
  { word: 'いかが', romaji: 'ikaga', reading: 'いかが', meaningPt: 'Como, que tal (polido)', exJp: 'お茶はいかがですか。', exReading: 'おちゃ は いかが ですか。', exRomaji: 'Ocha wa ikaga desu ka.', exPt: 'Aceita um chá?' },
  { word: 'いくら', romaji: 'ikura', reading: 'いくら', meaningPt: 'Quanto custa', exJp: 'これはいくらですか。', exReading: 'これ は いくら ですか。', exRomaji: 'Kore wa ikura desu ka.', exPt: 'Quanto custa isso?' },
  { word: 'いくつ', romaji: 'ikutsu', reading: 'いくつ', meaningPt: 'Quantos', exJp: 'りんごをいくつ買いましたか。', exReading: 'りんご を いくつ かいましたか。', exRomaji: 'Ringo o ikutsu kaimashita ka.', exPt: 'Quantas maçãs você comprou?' },
  { word: '色々', romaji: 'iroiro', reading: 'いろいろ', meaningPt: 'Vários, muitas coisas', exJp: '色々ありがとうございます。', exReading: 'いろいろ ありがとう ございます。', exRomaji: 'Iroiro arigatou gozaimasu.', exPt: 'Muito obrigado por tudo.' },
  { word: '一緒に', romaji: 'issho ni', reading: 'いっしょに', meaningPt: 'Junto', exJp: '一緒に食べましょう。', exReading: 'いっしょに たべましょう。', exRomaji: 'Issho ni tabemashou.', exPt: 'Vamos comer juntos.' },
  { word: 'いつも', romaji: 'itsumo', reading: 'いつも', meaningPt: 'Sempre', exJp: 'いつも元気ですね。', exReading: 'いつも げんき ですね。', exRomaji: 'Itsumo genki desu ne.', exPt: 'Você está sempre animado, não é.' },
  { word: '結構', romaji: 'kekkou', reading: 'けっこう', meaningPt: 'Suficiente, não (obrigado)', exJp: 'もう結構です。', exReading: 'もう けっこう です。', exRomaji: 'Mou kekkou desu.', exPt: 'Já é o suficiente / Não, obrigado.' },
  { word: 'まだ', romaji: 'mada', reading: 'まだ', meaningPt: 'Ainda', exJp: 'まだ終わっていません。', exReading: 'まだ おわって いません。', exRomaji: 'Mada owatte imasen.', exPt: 'Ainda não terminei.' },
  { word: 'まだ～ていません', romaji: 'mada ~te imasen', reading: 'まだ～ていません', meaningPt: 'Ainda não (fez)', exJp: 'まだ食べていません。', exReading: 'まだ たべて いません。', exRomaji: 'Mada tabete imasen.', exPt: 'Ainda não comi.' },
  { word: '前に', romaji: 'mae ni', reading: 'まえに', meaningPt: 'Antes de', exJp: '寝る前に本を読む。', exReading: 'ねる まえに ほん を よむ。', exRomaji: 'Neru mae ni hon o yomu.', exPt: 'Eu leio um livro antes de dormir.' },
  { word: '真っ直ぐ', romaji: 'massugu', reading: 'まっすぐ', meaningPt: 'Reto, em frente', exJp: '真っ直ぐ進んでください。', exReading: 'まっすぐ すすんで ください。', exRomaji: 'Massugu susunde kudasai.', exPt: 'Por favor, siga em frente.' },
  { word: 'みんな', romaji: 'minna', reading: 'みんな', meaningPt: 'Todos', exJp: 'みんなで行きましょう。', exReading: 'みんな で いきましょう。', exRomaji: 'Minna de ikimashou.', exPt: 'Vamos todos juntos.' },
  { word: 'もっと', romaji: 'motto', reading: 'もっと', meaningPt: 'Mais', exJp: 'もっと勉強します。', exReading: 'もっと べんきょう します。', exRomaji: 'Motto benkyou shimasu.', exPt: 'Vou estudar mais.' },
  { word: 'もう', romaji: 'mou', reading: 'もう', meaningPt: 'Já, não mais', exJp: 'もう食べました。', exReading: 'もう たべました。', exRomaji: 'Mou tabemashita.', exPt: 'Eu já comi.' },
  { word: '何故', romaji: 'naze', reading: 'なぜ', meaningPt: 'Por que', exJp: '何故泣いているの。', exReading: 'なぜ ないて いる の。', exRomaji: 'Naze naite iru no.', exPt: 'Por que você está chorando?' },
  { word: '同じ', romaji: 'onaji', reading: 'おなじ', meaningPt: 'Mesmo, igual', exJp: '同じ本を持っています。', exReading: 'おなじ ほん を もって います。', exRomaji: 'Onaji hon o motte imasu.', exPt: 'Tenho o mesmo livro.' },
  { word: '直ぐに', romaji: 'sugu ni', reading: 'すぐに', meaningPt: 'Imediatamente', exJp: '直ぐに行きます。', exReading: 'すぐに いきます。', exRomaji: 'Sugu ni ikimasu.', exPt: 'Vou imediatamente.' },
  { word: '少し', romaji: 'sukoshi', reading: 'すこし', meaningPt: 'Um pouco', exJp: '少し休みましょう。', exReading: 'すこし やすみましょう。', exRomaji: 'Sukoshi yasumimashou.', exPt: 'Vamos descansar um pouco.' },
  { word: '多分', romaji: 'tabun', reading: 'たぶん', meaningPt: 'Talvez, provavelmente', exJp: '明日は多分雨です。', exReading: 'あした は たぶん あめ です。', exRomaji: 'Ashita wa tabun ame desu.', exPt: 'Provavelmente choverá amanhã.' },
  { word: '大変', romaji: 'taihen', reading: 'たいへん', meaningPt: 'Muito', exJp: '大変疲れました。', exReading: 'たいへん つかれました。', exRomaji: 'Taihen tsukaremashita.', exPt: 'Estou muito cansado.' },
  { word: '時々', romaji: 'tokidoki', reading: 'ときどき', meaningPt: 'Às vezes', exJp: '時々映画を見ます。', exReading: 'ときどき えいが を みます。', exRomaji: 'Tokidoki eiga o mimasu.', exPt: 'Às vezes assisto a filmes.' },
  { word: 'とても', romaji: 'totemo', reading: 'とても', meaningPt: 'Muito', exJp: 'とても美味しいです。', exReading: 'とても おいしい です。', exRomaji: 'Totemo oishii desu.', exPt: 'Está muito gostoso.' },
  { word: 'よく', romaji: 'yoku', reading: 'よく', meaningPt: 'Frequentemente, bem', exJp: 'よく映画館に行きます。', exReading: 'よく えいがかん に いきます。', exRomaji: 'Yoku eigakan ni ikimasu.', exPt: 'Vou frequentemente ao cinema.' },
  { word: 'ゆっくり', romaji: 'yukkuri', reading: 'ゆっくり', meaningPt: 'Devagar', exJp: 'ゆっくり話してください。', exReading: 'ゆっくり はなして ください。', exRomaji: 'Yukkuri hanashite kudasai.', exPt: 'Por favor, fale devagar.' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\];?\s*$/, '');
  
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = 'v_adv_n5_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N5',
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

const n5Path = path.join(process.cwd(), 'src', 'data', 'vocabN5.ts');
appendToFile(n5Path, n5Adverbs, 'adverbio', 'Advérbio');

console.log("Appended adverbs N5 to vocabN5.ts!");
