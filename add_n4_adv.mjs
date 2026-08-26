import fs from 'fs';
import path from 'path';

const n4Adverbs = [
  { word: 'ああ', romaji: 'aa', reading: 'ああ', meaningPt: 'Ah; sim', exJp: 'ああ、そうですか。', exReading: 'ああ、そう ですか。', exRomaji: 'Aa, sou desu ka.', exPt: 'Ah, é mesmo?' },
  { word: '間に', romaji: 'aida ni', reading: 'あいだに', meaningPt: 'Enquanto; durante', exJp: '留守の間に友達が来た。', exReading: 'るす の あいだに ともだち が きた。', exRomaji: 'Rusu no aida ni tomodachi ga kita.', exPt: 'Enquanto eu estava fora, um amigo veio.' },
  { word: 'あまり～ない', romaji: 'amari~nai', reading: 'あまり～ない', meaningPt: 'Não muito', exJp: 'あまり美味しくない。', exReading: 'あまり おいしく ない。', exRomaji: 'Amari oishiku nai.', exPt: 'Não é muito gostoso.' },
  { word: '後で', romaji: 'ato de', reading: 'あとで', meaningPt: 'Depois; mais tarde', exJp: '後で行きます。', exReading: 'あとで いきます。', exRomaji: 'Ato de ikimasu.', exPt: 'Irei mais tarde.' },
  { word: 'びっくり', romaji: 'bikkuri', reading: 'びっくり', meaningPt: 'Surpreso(a)', exJp: 'とてもびっくりしました。', exReading: 'とても びっくり しました。', exRomaji: 'Totemo bikkuri shimashita.', exPt: 'Fiquei muito surpreso.' },
  { word: '大分', romaji: 'daibu', reading: 'だいぶ', meaningPt: 'Bastante; muito', exJp: '病気は大分良くなりました。', exReading: 'びょうき は だいぶ よく なりました。', exRomaji: 'Byouki wa daibu yoku narimashita.', exPt: 'A doença melhorou bastante.' },
  { word: 'できるだけ', romaji: 'dekiru dake', reading: 'できるだけ', meaningPt: 'O máximo possível', exJp: 'できるだけ早く来てください。', exReading: 'できるだけ はやく きて ください。', exRomaji: 'Dekiru dake hayaku kite kudasai.', exPt: 'Venha o mais rápido possível.' },
  { word: 'どんどん', romaji: 'dondon', reading: 'どんどん', meaningPt: 'Rapidamente; mais e mais', exJp: '仕事がどんどん進む。', exReading: 'しごと が どんどん すすむ。', exRomaji: 'Shigoto ga dondon susumu.', exPt: 'O trabalho avança rapidamente.' },
  { word: '普通', romaji: 'futsuu', reading: 'ふつう', meaningPt: 'Geralmente; normal', exJp: '普通は電車で行きます。', exReading: 'ふつう は でんしゃ で いきます。', exRomaji: 'Futsuu wa densha de ikimasu.', exPt: 'Normalmente, vou de trem.' },
  { word: 'はっきり', romaji: 'hakkiri', reading: 'はっきり', meaningPt: 'Claramente', exJp: 'はっきり言ってください。', exReading: 'はっきり いって ください。', exRomaji: 'Hakkiri itte kudasai.', exPt: 'Fale claramente, por favor.' },
  { word: '非常に', romaji: 'hijou ni', reading: 'ひじょうに', meaningPt: 'Extremamente', exJp: 'それは非常に危険です。', exReading: 'それ は ひじょうに きけん です。', exRomaji: 'Sore wa hijou ni kiken desu.', exPt: 'Isso é extremamente perigoso.' },
  { word: 'いっぱい', romaji: 'ippai', reading: 'いっぱい', meaningPt: 'Cheio', exJp: 'お腹がいっぱいです。', exReading: 'おなか が いっぱい です。', exRomaji: 'Onaka ga ippai desu.', exPt: 'Estou com a barriga cheia.' },
  { word: '十分', romaji: 'juubun', reading: 'じゅうぶん', meaningPt: 'Suficiente; muito', exJp: '時間は十分にあります。', exReading: 'じかん は じゅうぶん に あります。', exRomaji: 'Jikan wa juubun ni arimasu.', exPt: 'Temos tempo suficiente.' },
  { word: 'かどうか', romaji: 'ka dou ka', reading: 'かどうか', meaningPt: 'Se (sim ou não)', exJp: '行くかどうか分かりません。', exReading: 'いく かどうか わかりません。', exRomaji: 'Iku ka dou ka wakarimasen.', exPt: 'Não sei se vou ou não.' },
  { word: '必ず', romaji: 'kanarazu', reading: 'かならず', meaningPt: 'Certamente; sem falta', exJp: '明日は必ず行きます。', exReading: 'あした は かならず いきます。', exRomaji: 'Ashita wa kanarazu ikimasu.', exPt: 'Amanhã eu irei, sem falta.' },
  { word: 'きっと', romaji: 'kitto', reading: 'きっと', meaningPt: 'Com certeza; sem dúvida', exJp: '彼はきっと来ます。', exReading: 'かれ は きっと きます。', exRomaji: 'Kare wa kitto kimasu.', exPt: 'Ele certamente virá.' },
  { word: 'こう', romaji: 'kou', reading: 'こう', meaningPt: 'Desta forma', exJp: 'こうやってください。', exReading: 'こう やって ください。', exRomaji: 'Kou yatte kudasai.', exPt: 'Faça desta maneira.' },
  { word: 'くする', romaji: 'ku suru', reading: 'くする', meaningPt: 'Fazer (algo) ficar ~', exJp: '部屋を暗くする。', exReading: 'へや を くらく する。', exRomaji: 'Heya o kuraku suru.', exPt: 'Deixar o quarto escuro.' },
  { word: '急に', romaji: 'kyuu ni', reading: 'きゅうに', meaningPt: 'Repentinamente', exJp: '急に雨が降った。', exReading: 'きゅうに あめ が ふった。', exRomaji: 'Kyuu ni ame ga futta.', exPt: 'Choveu repentinamente.' },
  { word: 'までに', romaji: 'made ni', reading: 'までに', meaningPt: 'Até (prazo)', exJp: '明日までに提出してください。', exReading: 'あした までに ていしゅつ して ください。', exRomaji: 'Ashita made ni teishutsu shite kudasai.', exPt: 'Por favor, entregue até amanhã.' },
  { word: 'まず', romaji: 'mazu', reading: 'まず', meaningPt: 'Primeiramente', exJp: 'まず手を洗いましょう。', exReading: 'まず て を あらいましょう。', exRomaji: 'Mazu te o araimashou.', exPt: 'Primeiro, vamos lavar as mãos.' },
  { word: 'みたいに', romaji: 'mitai ni', reading: 'みたいに', meaningPt: 'Como; semelhante a', exJp: '子供みたいに泣く。', exReading: 'こども みたいに なく。', exRomaji: 'Kodomo mitai ni naku.', exPt: 'Chorar feito criança.' },
  { word: 'もし', romaji: 'moshi', reading: 'もし', meaningPt: 'Se; caso', exJp: 'もし雨なら、行きません。', exReading: 'もし あめ なら、いきません。', exRomaji: 'Moshi ame nara, ikimasen.', exPt: 'Se chover, não irei.' },
  { word: 'もうすぐ', romaji: 'mousugu', reading: 'もうすぐ', meaningPt: 'Em breve; logo', exJp: 'もうすぐ春です。', exReading: 'もうすぐ はる です。', exRomaji: 'Mousugu haru desu.', exPt: 'Em breve será primavera.' },
  { word: 'なかなか～ない', romaji: 'nakanaka~nai', reading: 'なかなか～ない', meaningPt: 'Não ser fácil; dificilmente', exJp: 'なかなか寝られません。', exReading: 'なかなか ねられません。', exRomaji: 'Nakanaka neraremasen.', exPt: 'Não consigo dormir facilmente.' },
  { word: 'なるほど', romaji: 'naruhodo', reading: 'なるほど', meaningPt: 'Entendi; faz sentido', exJp: 'なるほど、そういうことか。', exReading: 'なるほど、そういう こと か。', exRomaji: 'Naruhodo, sou iu koto ka.', exPt: 'Ah, entendi, então é isso.' },
  { word: 'の中で', romaji: 'no naka de', reading: 'のなかで', meaningPt: 'Dentro de; entre', exJp: 'この中で一番好きです。', exReading: 'この なかで いちばん すき です。', exRomaji: 'Kono naka de ichiban suki desu.', exPt: 'Entre estes, é o que mais gosto.' },
  { word: 'さすが', romaji: 'sasuga', reading: 'さすが', meaningPt: 'Como esperado de', exJp: 'さすがですね。', exReading: 'さすが ですね。', exRomaji: 'Sasuga desu ne.', exPt: 'Como era de se esperar de você.' },
  { word: 'しっかり', romaji: 'shikkari', reading: 'しっかり', meaningPt: 'Firmemente; bem', exJp: 'しっかり持ってください。', exReading: 'しっかり もって ください。', exRomaji: 'Shikkari motte kudasai.', exPt: 'Segure firmemente.' },
  { word: 'そんなに', romaji: 'sonna ni', reading: 'そんなに', meaningPt: 'Tão; tanto', exJp: 'そんなに怒らないで。', exReading: 'そんなに おこらないで。', exRomaji: 'Sonna ni okoranaide.', exPt: 'Não fique tão bravo.' },
  { word: 'それほど', romaji: 'sore hodo', reading: 'それほど', meaningPt: 'Tanto (assim)', exJp: 'それほど高くありません。', exReading: 'それほど たかく ありません。', exRomaji: 'Sore hodo takaku arimasen.', exPt: 'Não é tão caro assim.' },
  { word: 'そろそろ', romaji: 'sorosoro', reading: 'そろそろ', meaningPt: 'Em breve; quase na hora', exJp: 'そろそろ帰ります。', exReading: 'そろそろ かえります。', exRomaji: 'Sorosoro kaerimasu.', exPt: 'Vou voltar para casa em breve.' },
  { word: 'そうだ', romaji: 'sou da', reading: 'そうだ', meaningPt: 'Parece; ouvi dizer', exJp: '雨が降りそうだ。', exReading: 'あめ が ふりそうだ。', exRomaji: 'Ame ga furisou da.', exPt: 'Parece que vai chover.' },
  { word: 'すっかり', romaji: 'sukkari', reading: 'すっかり', meaningPt: 'Completamente', exJp: 'すっかり忘れました。', exReading: 'すっかり わすれました。', exRomaji: 'Sukkari wasuremashita.', exPt: 'Esqueci completamente.' },
  { word: 'たいてい', romaji: 'taitei', reading: 'たいてい', meaningPt: 'Geralmente', exJp: '日曜日はたいてい家にいます。', exReading: 'にちようび は たいてい いえ に います。', exRomaji: 'Nichiyoubi wa taitei ie ni imasu.', exPt: 'Aos domingos eu geralmente fico em casa.' },
  { word: 'たまに', romaji: 'tamani', reading: 'たまに', meaningPt: 'Ocasionalmente; às vezes', exJp: 'たまに映画を見ます。', exReading: 'たまに えいが を みます。', exRomaji: 'Tama ni eiga o mimasu.', exPt: 'Vejo filmes ocasionalmente.' },
  { word: '特に', romaji: 'tokuni', reading: 'とくに', meaningPt: 'Especialmente', exJp: '特に問題はありません。', exReading: 'とくに もんだい は ありません。', exRomaji: 'Tokuni mondai wa arimasen.', exPt: 'Não há problemas em especial.' },
  { word: '到頭', romaji: 'toutou', reading: 'とうとう', meaningPt: 'Finalmente; por fim', exJp: '到頭終わりました。', exReading: 'とうとう おわりました。', exRomaji: 'Toutou owarimashita.', exPt: 'Finalmente terminou.' },
  { word: '都合', romaji: 'tsugou', reading: 'つごう', meaningPt: 'Conveniência', exJp: '都合が悪いです。', exReading: 'つごう が わるい です。', exRomaji: 'Tsugou ga warui desu.', exPt: 'É inconveniente.' },
  { word: 'やっぱり', romaji: 'yappari', reading: 'やっぱり', meaningPt: 'Como eu pensava; afinal', exJp: 'やっぱり彼が来ました。', exReading: 'やっぱり かれ が きました。', exRomaji: 'Yappari kare ga kimashita.', exPt: 'Como eu pensava, ele veio.' },
  { word: 'やっと', romaji: 'yatto', reading: 'やっと', meaningPt: 'Finalmente; por fim', exJp: 'やっと仕事が終わった。', exReading: 'やっと しごと が おわった。', exRomaji: 'Yatto shigoto ga owatta.', exPt: 'Finalmente o trabalho terminou.' },
  { word: 'より', romaji: 'yori', reading: 'より', meaningPt: 'Do que; mais do que', exJp: '車より電車の方が速い。', exReading: 'くるま より でんしゃ の ほう が はやい。', exRomaji: 'Kuruma yori densha no hou ga hayai.', exPt: 'O trem é mais rápido que o carro.' },
  { word: 'ぜひ', romaji: 'zehi', reading: 'ぜひ', meaningPt: 'Sem falta; por favor', exJp: 'ぜひ遊びに来てください。', exReading: 'ぜひ あそび に きて ください。', exRomaji: 'Zehi asobi ni kite kudasai.', exPt: 'Por favor, venha me visitar sem falta.' },
  { word: '全然', romaji: 'zenzen', reading: 'ぜんぜん', meaningPt: 'Totalmente; de modo algum', exJp: '全然分かりません。', exReading: 'ぜんぜん わかりません。', exRomaji: 'Zenzen wakarimasen.', exPt: 'Não entendo de forma alguma.' },
  { word: '全然～ない', romaji: 'zenzen~nai', reading: 'ぜんぜん～ない', meaningPt: 'Não ~ de jeito nenhum', exJp: '全然難しくないです。', exReading: 'ぜんぜん むずかしく ない です。', exRomaji: 'Zenzen muzukashiku nai desu.', exPt: 'Não é nem um pouco difícil.' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\];?\s*$/, '');
  
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = 'v_adv_n4_';
    
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

const n4Path = path.join(process.cwd(), 'src', 'data', 'vocabN4.ts');
appendToFile(n4Path, n4Adverbs, 'adverbio', 'Advérbio');

console.log("Appended adverbs N4 to vocabN4.ts!");
