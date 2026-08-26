import fs from 'fs';
import path from 'path';

const n2Adverbs = [
  { word: 'あるいは', romaji: 'aruiwa', reading: 'あるいは', meaningPt: 'Ou; talvez; possivelmente', exJp: 'あるいは彼かもしれない。', exReading: 'あるいは かれ かも しれない。', exRomaji: 'Aruiwa kare kamo shirenai.', exPt: 'Talvez seja ele.' },
  { word: 'ばかりに', romaji: 'bakari ni', reading: 'ばかりに', meaningPt: 'Só porque (resultado negativo)', exJp: '嘘をついたばかりに。', exReading: 'うそ を ついた ばかり に。', exRomaji: 'Uso o tsuita bakari ni.', exPt: 'Só porque eu menti (algo ruim aconteceu).' },
  { word: 'どうやら', romaji: 'dou yara', reading: 'どうやら', meaningPt: 'Aparentemente; possivelmente', exJp: 'どうやら雨らしい。', exReading: 'どうやら あめ らしい。', exRomaji: 'Douyara ame rashii.', exPt: 'Aparentemente é chuva.' },
  { word: 'どうせ', romaji: 'douse', reading: 'どうせ', meaningPt: 'De qualquer forma; afinal', exJp: 'どうせ無理だ。', exReading: 'どうせ むり だ。', exRomaji: 'Douse muri da.', exPt: 'De qualquer forma, é impossível.' },
  { word: '再び', romaji: 'futatabi', reading: 'ふたたび', meaningPt: 'Novamente; outra vez', exJp: '再びお目にかかる。', exReading: 'ふたたび おめ に かかる。', exRomaji: 'Futatabi ome ni kakaru.', exPt: 'Encontrar novamente.' },
  { word: '逆に', romaji: 'gyaku ni', reading: 'ぎゃくに', meaningPt: 'Pelo contrário; inversamente', exJp: '逆に彼が怒った。', exReading: 'ぎゃくに かれ が おこった。', exRomaji: 'Gyaku ni kare ga okotta.', exPt: 'Pelo contrário, ele ficou com raiva.' },
  { word: '反面', romaji: 'hanmen', reading: 'はんめん', meaningPt: 'Por outro lado', exJp: '便利な反面、危険だ。', exReading: 'べんりな はんめん、きけん だ。', exRomaji: 'Benri na hanmen, kiken da.', exPt: 'Apesar de conveniente, por outro lado é perigoso.' },
  { word: '果たして', romaji: 'hatashite', reading: 'はたして', meaningPt: 'Será que (realmente); como esperado', exJp: '果たしてそうでしょうか。', exReading: 'はたして そう でしょう か。', exRomaji: 'Hatashite sou deshou ka.', exPt: 'Será que é realmente assim?' },
  { word: '一応', romaji: 'ichiou', reading: 'いちおう', meaningPt: 'Mais ou menos; provisoriamente', exJp: '一応終わりました。', exReading: 'いちおう おわりました。', exRomaji: 'Ichiou owarimashita.', exPt: 'Terminei, de certa forma.' },
  { word: '以外', romaji: 'igai', reading: 'いがい', meaningPt: 'Exceto; com exceção de', exJp: '彼以外はみんな来た。', exReading: 'かれ いがい は みんな きた。', exRomaji: 'Kare igai wa minna kita.', exPt: 'Todos vieram exceto ele.' },
  { word: '以上に', romaji: 'ijou ni', reading: 'いじょうに', meaningPt: 'Mais do que; além de', exJp: '予想以上に良かった。', exReading: 'よそう いじょう に よかった。', exRomaji: 'Yosou ijou ni yokatta.', exPt: 'Foi melhor do que o esperado.' },
  { word: 'いきなり', romaji: 'ikinari', reading: 'いきなり', meaningPt: 'Abruptamente; de repente', exJp: 'いきなり泣き出した。', exReading: 'いきなり なきだした。', exRomaji: 'Ikinari nakidashita.', exPt: 'Começou a chorar de repente.' },
  { word: '一気に', romaji: 'ikki ni', reading: 'いっきに', meaningPt: 'De uma vez só', exJp: '一気に飲み干した。', exReading: 'いっきに のみほした。', exRomaji: 'Ikki ni nomihoshita.', exPt: 'Bebeu tudo de uma vez só.' },
  { word: '一旦', romaji: 'ittan', reading: 'いったん', meaningPt: 'Temporariamente; uma vez', exJp: '一旦休憩しましょう。', exReading: 'いったん きゅうけい しましょう。', exRomaji: 'Ittan kyuukei shimashou.', exPt: 'Vamos fazer uma pausa temporária.' },
  { word: 'まだしも', romaji: 'madashimo', reading: 'まだしも', meaningPt: 'Ainda passa; seria melhor se', exJp: '遅刻はまだしも、無断欠席は困る。', exReading: 'ちこく は まだしも、むだんけっせき は こまる。', exRomaji: 'Chikoku wa madashimo, mudankesseki wa komaru.', exPt: 'Atrasar ainda passa, mas faltar sem avisar é um problema.' },
  { word: '全く～ない', romaji: 'mattaku~nai', reading: 'まったく～ない', meaningPt: 'Não ~ de jeito nenhum', exJp: '全く問題ない。', exReading: 'まったく もんだい ない。', exRomaji: 'Mattaku mondai nai.', exPt: 'Não há nenhum problema.' },
  { word: '元々', romaji: 'motomoto', reading: 'もともと', meaningPt: 'Originalmente; desde o início', exJp: '元々知っていた。', exReading: 'もともと しっていた。', exRomaji: 'Motomoto shitte ita.', exPt: 'Eu já sabia desde o início.' },
  { word: 'なお', romaji: 'nao', reading: 'なお', meaningPt: 'Ainda; além disso', exJp: 'なお悪いことに。', exReading: 'なお わるい こと に。', exRomaji: 'Nao warui koto ni.', exPt: 'Para piorar ainda mais.' },
  { word: '恐らく', romaji: 'osoraku', reading: 'おそらく', meaningPt: 'Provavelmente; possivelmente', exJp: '恐らく雨だろう。', exReading: 'おそらく あめ だろう。', exRomaji: 'Osoraku ame darou.', exPt: 'Provavelmente choverá.' },
  { word: 'ろくに～ない', romaji: 'roku ni~nai', reading: 'ろくに～ない', meaningPt: 'Não adequadamente; não direito', exJp: 'ろくに寝ていない。', exReading: 'ろくに ねて いない。', exRomaji: 'Roku ni nete inai.', exPt: 'Não dormi direito.' },
  { word: '再三', romaji: 'saisan', reading: 'さいさん', meaningPt: 'Repetidas vezes', exJp: '再三注意した。', exReading: 'さいさん ちゅうい した。', exRomaji: 'Saisan chuui shita.', exPt: 'Avisei repetidas vezes.' },
  { word: '幸いなことに', romaji: 'saiwai na koto ni', reading: 'さいわいなことに', meaningPt: 'Felizmente', exJp: '幸いなことに晴れた。', exReading: 'さいわいな こと に はれた。', exRomaji: 'Saiwai na koto ni hareta.', exPt: 'Felizmente o tempo abriu.' },
  { word: '早速', romaji: 'sassoku', reading: 'さっそく', meaningPt: 'Imediatamente; sem demora', exJp: '早速始めましょう。', exReading: 'さっそく はじめましょう。', exRomaji: 'Sassoku hajimemashou.', exPt: 'Vamos começar imediatamente.' },
  { word: 'せっかく', romaji: 'sekkaku', reading: 'せっかく', meaningPt: 'Com muito esforço; gentilmente', exJp: 'せっかくですが。', exReading: 'せっかく です が。', exRomaji: 'Sekkaku desu ga.', exPt: 'Eu agradeço o esforço, mas (recusando).' },
  { word: 'せめて', romaji: 'semete', reading: 'せめて', meaningPt: 'Pelo menos; no mínimo', exJp: 'せめて名前だけでも。', exReading: 'せめて なまえ だけ でも。', exRomaji: 'Semete namae dake demo.', exPt: 'Pelo menos o nome.' },
  { word: '次第に', romaji: 'shidai ni', reading: 'しだいに', meaningPt: 'Gradualmente', exJp: '次第に暖かくなる。', exReading: 'しだいに あたたかく なる。', exRomaji: 'Shidai ni atatakaku naru.', exPt: 'Vai esquentando gradualmente.' },
  { word: 'その上', romaji: 'sono ue', reading: 'そのうえ', meaningPt: 'Além disso', exJp: 'その上、値段も安い。', exReading: 'そのうえ、ねだん も やすい。', exRomaji: 'Sono ue, nedan mo yasui.', exPt: 'Além disso, o preço é baixo.' },
  { word: '末に', romaji: 'sue ni', reading: 'すえに', meaningPt: 'No fim de; depois de muito', exJp: '悩んだ末に決めた。', exReading: 'なやんだ すえに きめた。', exRomaji: 'Nayanda sue ni kimeta.', exPt: 'Decidi depois de muito pensar.' },
  { word: '少しも～ない', romaji: 'sukoshi mo~nai', reading: 'すこしも～ない', meaningPt: 'Nem um pouco', exJp: '少しも寒くない。', exReading: 'すこしも さむく ない。', exRomaji: 'Sukoshi mo samuku nai.', exPt: 'Não está nem um pouco frio.' },
  { word: '少なくとも', romaji: 'sukunaku tomo', reading: 'すくなくとも', meaningPt: 'Pelo menos', exJp: '少なくとも三日はかかる。', exReading: 'すくなくとも みっか は かかる。', exRomaji: 'Sukunaku tomo mikka wa kakaru.', exPt: 'Leva pelo menos três dias.' },
  { word: '直ちに', romaji: 'tadachi ni', reading: 'ただちに', meaningPt: 'Imediatamente; logo', exJp: '直ちに出発する。', exReading: 'ただちに しゅっぱつ する。', exRomaji: 'Tadachi ni shuppatsu suru.', exPt: 'Partir imediatamente.' },
  { word: 'と同時に', romaji: 'to douji ni', reading: 'とどうじに', meaningPt: 'Ao mesmo tempo', exJp: '卒業と同時に。', exReading: 'そつぎょう と どうじ に。', exRomaji: 'Sotsugyou to douji ni.', exPt: 'Ao mesmo tempo em que se graduou.' },
  { word: 'とっくに', romaji: 'tokku ni', reading: 'とっくに', meaningPt: 'Há muito tempo; já', exJp: 'とっくに知っている。', exReading: 'とっくに しっている。', exRomaji: 'Tokku ni shitte iru.', exPt: 'Já sei há muito tempo.' },
  { word: 'はもとより', romaji: 'wa moto yori', reading: 'はもとより', meaningPt: 'Não só (mas também); desde o início', exJp: '英語はもとより。', exReading: 'えいご は もとより。', exRomaji: 'Eigo wa moto yori.', exPt: 'Não só o inglês (mas também...)' },
  { word: 'はともかく', romaji: 'wa tomokaku', reading: 'はともかく', meaningPt: 'Deixando de lado', exJp: '顔はともかく。', exReading: 'かお は ともかく。', exRomaji: 'Kao wa tomokaku.', exPt: 'Deixando o rosto de lado.' },
  { word: 'わずかに', romaji: 'wazuka ni', reading: 'わずかに', meaningPt: 'Ligeiramente; mal', exJp: 'わずかに残っている。', exReading: 'わずかに のこって いる。', exRomaji: 'Wazuka ni nokotte iru.', exPt: 'Restou só um pouquinho.' },
  { word: 'やがて', romaji: 'yagate', reading: 'やがて', meaningPt: 'Em breve; eventualmente', exJp: 'やがて秋になる。', exReading: 'やがて あき に なる。', exRomaji: 'Yagate aki ni naru.', exPt: 'Em breve será outono.' },
  { word: 'よほど / よっぽど', romaji: 'yohodo / yoppodo', reading: 'よほど / よっぽど', meaningPt: 'Muito; bastante', exJp: 'よほど疲れていたのだろう。', exReading: 'よほど つかれて いた の だろう。', exRomaji: 'Yohodo tsukarete ita no darou.', exPt: 'Devia estar muito cansado.' },
  { word: '要するに', romaji: 'you suru ni', reading: 'ようするに', meaningPt: 'Em resumo; em suma', exJp: '要するに駄目だということだ。', exReading: 'ようするに だめ だ と いう こと だ。', exRomaji: 'You suru ni dame da to iu koto da.', exPt: 'Em resumo, quer dizer que não dá.' }
];

function appendToFile(filePath, items, categoryId, categoryLabel) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\];?\s*$/, '');
  
  if (content.trim().length > 100 && !content.trim().endsWith(',')) {
     content += ',\n';
  }

  items.forEach((item, index) => {
    let idPrefix = 'v_adv_n2_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N2',
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

const n2Path = path.join(process.cwd(), 'src', 'data', 'vocabN2N1.ts');
appendToFile(n2Path, n2Adverbs, 'adverbio', 'Advérbio');

console.log("Appended 39 adverbs to N2 vocabN2N1.ts!");
