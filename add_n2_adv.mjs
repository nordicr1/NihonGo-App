import fs from 'fs';
import path from 'path';

const n2Adverbs = [
  { word: 'あまり', romaji: 'amari', reading: 'あまり', meaningPt: 'Tanto que...', exJp: 'あまりの痛さに泣いた。', exReading: 'あまり の いたさ に ないた。', exRomaji: 'Amari no itasa ni naita.', exPt: 'Chorei de tanta dor.' },
  { word: 'あまりにも', romaji: 'amari ni mo', reading: 'あまりにも', meaningPt: 'Excessivamente; demais', exJp: 'あまりにも暑い。', exReading: 'あまりにも あつい。', exRomaji: 'Amari ni mo atsui.', exPt: 'Está excessivamente quente.' },
  { word: '別に～ない', romaji: 'betsu ni~nai', reading: 'べつに～ない', meaningPt: 'Não particularmente', exJp: '別に問題はない。', exReading: 'べつに もんだい は ない。', exRomaji: 'Betsu ni mondai wa nai.', exPt: 'Não há nenhum problema em particular.' },
  { word: 'どんなに～ても', romaji: 'donna ni~temo', reading: 'どんなに～ても', meaningPt: 'Não importa o quanto', exJp: 'どんなに頑張っても勝てない。', exReading: 'どんなに がんばっても かてない。', exRomaji: 'Donna ni ganbattemo katenai.', exPt: 'Não importa o quanto eu me esforce, não consigo vencer.' },
  { word: 'どうしても', romaji: 'doushitemo', reading: 'どうしても', meaningPt: 'Custe o que custar; de qualquer jeito', exJp: 'どうしても行きたい。', exReading: 'どうしても いきたい。', exRomaji: 'Doushitemo ikitai.', exPt: 'Quero ir de qualquer jeito.' },
  { word: '再び', romaji: 'futatabi', reading: 'ふたたび', meaningPt: 'Novamente; outra vez', exJp: '再び挑戦する。', exReading: 'ふたたび ちょうせん する。', exRomaji: 'Futatabi chousen suru.', exPt: 'Vou desafiar novamente.' },
  { word: 'ふと', romaji: 'futo', reading: 'ふと', meaningPt: 'De repente; acidentalmente', exJp: 'ふと思い出す。', exReading: 'ふと おもいだす。', exRomaji: 'Futo omoidasu.', exPt: 'Me lembro de repente.' },
  { word: '一度に', romaji: 'ichido ni', reading: 'いちどに', meaningPt: 'Tudo de uma vez', exJp: '一度にたくさん運ぶ。', exReading: 'いちどに たくさん はこぶ。', exRomaji: 'Ichido ni takusan hakobu.', exPt: 'Carregar muito tudo de uma vez.' },
  { word: '意外', romaji: 'igai', reading: 'いがい', meaningPt: 'Inesperado; surpreendente', exJp: '意外に簡単でした。', exReading: 'いがいに かんたん でした。', exRomaji: 'Igai ni kantan deshita.', exPt: 'Foi inesperadamente fácil.' },
  { word: 'いくら～ても', romaji: 'ikura~temo', reading: 'いくら～ても', meaningPt: 'Por mais que', exJp: 'いくら待っても来ない。', exReading: 'いくら まっても こない。', exRomaji: 'Ikura mattemo konai.', exPt: 'Por mais que eu espere, não vem.' },
  { word: '今に', romaji: 'imani', reading: 'いまに', meaningPt: 'Em breve', exJp: '今に分かるよ。', exReading: 'いまに わかる よ。', exRomaji: 'Ima ni wakaru yo.', exPt: 'Você vai entender em breve.' },
  { word: '今にも', romaji: 'imanimo', reading: 'いまにも', meaningPt: 'A qualquer momento', exJp: '今にも雨が降りそうだ。', exReading: 'いまにも あめ が ふりそうだ。', exRomaji: 'Ima ni mo ame ga furisou da.', exPt: 'Parece que vai chover a qualquer momento.' },
  { word: '一種', romaji: 'isshu', reading: 'いっしゅ', meaningPt: 'Uma espécie; um tipo', exJp: 'これは一種の病気です。', exReading: 'これ は いっしゅ の びょうき です。', exRomaji: 'Kore wa isshu no byouki desu.', exPt: 'Isto é uma espécie de doença.' },
  { word: '一層', romaji: 'issou', reading: 'いっそう', meaningPt: 'Ainda mais', exJp: '一層寒くなった。', exReading: 'いっそう さむく なった。', exRomaji: 'Issou samuku natta.', exPt: 'Ficou ainda mais frio.' },
  { word: '一体', romaji: 'ittai', reading: 'いったい', meaningPt: 'Ênfase; afinal', exJp: '一体どういうことだ。', exReading: 'いったい どういう こと だ。', exRomaji: 'Ittai dou iu koto da.', exPt: 'O que isso significa afinal?' },
  { word: '一体', romaji: 'ittai', reading: 'いったい', meaningPt: 'O que diabos; no mundo', exJp: '一体何があったの？', exReading: 'いったい なに が あった の？', exRomaji: 'Ittai nani ga atta no?', exPt: 'O que diabos aconteceu?' },
  { word: 'か何か', romaji: 'ka nani ka', reading: 'かなにか', meaningPt: 'Ou algo do tipo', exJp: 'お茶か何か飲みますか。', exReading: 'おちゃ か なにか のみますか。', exRomaji: 'Ocha ka nanika nomimasu ka.', exPt: 'Quer beber chá ou algo do tipo?' },
  { word: '結局', romaji: 'kekkyoku', reading: 'けっきょく', meaningPt: 'No fim das contas; afinal', exJp: '結局行かなかった。', exReading: 'けっきょく いかなかった。', exRomaji: 'Kekkyoku ikanakatta.', exPt: 'No fim das contas, eu não fui.' },
  { word: '決して～ない', romaji: 'kesshite~nai', reading: 'けっして～ない', meaningPt: 'Nunca; de forma alguma', exJp: '決して忘れません。', exReading: 'けっして わすれません。', exRomaji: 'Kesshite wasuremasen.', exPt: 'Nunca vou esquecer.' },
  { word: '急に', romaji: 'kyuuni', reading: 'きゅうに', meaningPt: 'Repentinamente; depressa', exJp: '急に止まる。', exReading: 'きゅうに とまる。', exRomaji: 'Kyuu ni tomaru.', exPt: 'Parar repentinamente.' },
  { word: '万一', romaji: 'manichi', reading: 'まんいち', meaningPt: 'Por acaso; emergência', exJp: '万一の時に備える。', exReading: 'まんいち の とき に そなえる。', exRomaji: 'Manichi no toki ni sonaeru.', exPt: 'Preparar-se para uma eventualidade.' },
  { word: 'まるで', romaji: 'maru de', reading: 'まるで', meaningPt: 'Como se fosse; assim como', exJp: 'まるで夢のようだ。', exReading: 'まるで ゆめ の よう だ。', exRomaji: 'Maru de yume no you da.', exPt: 'É como se fosse um sonho.' },
  { word: 'めったに～ない', romaji: 'metta ni~nai', reading: 'めったに～ない', meaningPt: 'Raramente; quase nunca', exJp: 'めったに外食しない。', exReading: 'めったに がいしょく しない。', exRomaji: 'Metta ni gaishoku shinai.', exPt: 'Raramente como fora.' },
  { word: 'もしかしたら', romaji: 'moshika shitara', reading: 'もしかしたら', meaningPt: 'Talvez; por acaso', exJp: 'もしかしたら彼かもしれない。', exReading: 'もしかしたら かれ かも しれない。', exRomaji: 'Moshika shitara kare kamo shirenai.', exPt: 'Talvez seja ele.' },
  { word: 'もしも〜たら', romaji: 'moshimo~tara', reading: 'もしも〜たら', meaningPt: 'Se por acaso', exJp: 'もしも雨が降ったら。', exReading: 'もしも あめ が ふったら。', exRomaji: 'Moshimo ame ga futtara.', exPt: 'Se por acaso chover.' },
  { word: 'むしろ', romaji: 'mushiro', reading: 'むしろ', meaningPt: 'Pelo contrário; melhor', exJp: 'むしろ私が行きたい。', exReading: 'むしろ わたし が いきたい。', exRomaji: 'Mushiro watashi ga ikitai.', exPt: 'Pelo contrário, eu quero ir.' },
  { word: 'なかなか', romaji: 'nakanaka', reading: 'なかなか', meaningPt: 'Bastante; (não) facilmente', exJp: 'なかなか難しい。', exReading: 'なかなか むずかしい。', exRomaji: 'Nakanaka muzukashii.', exPt: 'É bastante difícil.' },
  { word: 'なんか / なんて / など', romaji: 'nanka / nante / nado', reading: 'なんか / なんて / など', meaningPt: 'Coisas como; etc.', exJp: '私なんて駄目だ。', exReading: 'わたし なんて だめ だ。', exRomaji: 'Watashi nante dame da.', exPt: 'Alguém como eu é inútil.' },
  { word: 'なるべく', romaji: 'naru beku', reading: 'なるべく', meaningPt: 'O máximo possível', exJp: 'なるべく早く行く。', exReading: 'なるべく はやく いく。', exRomaji: 'Naru beku hayaku iku.', exPt: 'Irei o mais rápido possível.' },
  { word: '際に', romaji: 'sai ni', reading: 'さいに', meaningPt: 'Ao; no momento de', exJp: '帰国の際に。', exReading: 'きこく の さいに。', exRomaji: 'Kikoku no sai ni.', exPt: 'No momento de retornar ao país.' },
  { word: '最中に', romaji: 'saichuu ni', reading: 'さいちゅうに', meaningPt: 'No meio de', exJp: '会議の最中に。', exReading: 'かいぎ の さいちゅうに。', exRomaji: 'Kaigi no saichuu ni.', exPt: 'No meio da reunião.' },
  { word: 'さらに', romaji: 'sara ni', reading: 'さらに', meaningPt: 'Além disso; ainda mais', exJp: 'さらに努力する。', exReading: 'さらに どりょく する。', exRomaji: 'Sara ni doryoku suru.', exPt: 'Vou me esforçar ainda mais.' },
  { word: 'せいぜい', romaji: 'seizei', reading: 'せいぜい', meaningPt: 'No máximo', exJp: 'せいぜい千円だろう。', exReading: 'せいぜい せんえん だろう。', exRomaji: 'Seizei senen darou.', exPt: 'Custa no máximo mil ienes.' },
  { word: 'しばらく', romaji: 'shibaraku', reading: 'しばらく', meaningPt: 'Por um tempo', exJp: 'しばらく休む。', exReading: 'しばらく やすむ。', exRomaji: 'Shibaraku yasumu.', exPt: 'Vou descansar por um tempo.' },
  { word: 'すでに', romaji: 'sude ni', reading: 'すでに', meaningPt: 'Já', exJp: 'すでに終わっている。', exReading: 'すでに おわって いる。', exRomaji: 'Sude ni owatte iru.', exPt: 'Já está terminado.' },
  { word: '少しも', romaji: 'sukoshimo', reading: 'すこしも', meaningPt: 'Nem um pouco', exJp: '少しも寒くない。', exReading: 'すこしも さむく ない。', exRomaji: 'Sukoshi mo samuku nai.', exPt: 'Não está nem um pouco frio.' },
  { word: 'すなわち', romaji: 'sunawachi', reading: 'すなわち', meaningPt: 'Ou seja; isto é', exJp: 'すなわち、こういうことだ。', exReading: 'すなわち、こういう こと だ。', exRomaji: 'Sunawachi, kou iu koto da.', exPt: 'Ou seja, é isso.' },
  { word: 'たとたん', romaji: 'ta totan', reading: 'たとたん', meaningPt: 'Logo que', exJp: '立ち上がったとたん。', exReading: 'たちあがった とたん。', exRomaji: 'Tachiagatta totan.', exPt: 'No momento em que me levantei.' },
  { word: 'たびに', romaji: 'tabi ni', reading: 'たびに', meaningPt: 'Toda vez que', exJp: '会うたびに。', exReading: 'あう たびに。', exRomaji: 'Au tabi ni.', exPt: 'Toda vez que nos encontramos.' },
  { word: '確かに', romaji: 'tashika ni', reading: 'たしかに', meaningPt: 'Certamente; sem dúvida', exJp: '確かに受け取りました。', exReading: 'たしかに うけとりました。', exRomaji: 'Tashika ni uketorimashita.', exPt: 'Certamente recebi.' },
  { word: '多少', romaji: 'tashou', reading: 'たしょう', meaningPt: 'Um pouco; mais ou menos', exJp: '多少の違いがある。', exReading: 'たしょう の ちがい が ある。', exRomaji: 'Tashou no chigai ga aru.', exPt: 'Há uma pequena diferença.' },
  { word: 'たとえ～ても', romaji: 'tatoe~temo', reading: 'たとえ～ても', meaningPt: 'Mesmo que', exJp: 'たとえ雨でも行く。', exReading: 'たとえ あめ でも いく。', exRomaji: 'Tatoe ame demo iku.', exPt: 'Mesmo que chova, eu vou.' },
  { word: '例えば', romaji: 'tatoeba', reading: 'たとえば', meaningPt: 'Por exemplo', exJp: '例えば、こんな風に。', exReading: 'たとえば、こんな ふう に。', exRomaji: 'Tatoeba, konna fuu ni.', exPt: 'Por exemplo, deste jeito.' },
  { word: 'と共に', romaji: 'to tomo ni', reading: 'とともに', meaningPt: 'Junto com; ao mesmo tempo', exJp: '家族と共に。', exReading: 'かぞく とともに。', exRomaji: 'Kazoku to tomo ni.', exPt: 'Junto com a família.' },
  { word: '途中で/途中に', romaji: 'tochuu de / tochuu ni', reading: 'とちゅうで/とちゅうに', meaningPt: 'No meio do caminho', exJp: '帰る途中で。', exReading: 'かえる とちゅう で。', exRomaji: 'Kaeru tochuu de.', exPt: 'No caminho de volta.' },
  { word: 'とおりに', romaji: 'toori ni', reading: 'とおりに', meaningPt: 'Conforme', exJp: '言われたとおりに。', exReading: 'いわれた とおり に。', exRomaji: 'Iwareta toori ni.', exPt: 'Conforme foi dito.' },
  { word: 'とても～ない', romaji: 'totemo~nai', reading: 'とても～ない', meaningPt: 'Dificilmente; de jeito nenhum', exJp: 'とても信じられない。', exReading: 'とても しんじられない。', exRomaji: 'Totemo shinjirarenai.', exPt: 'Não consigo acreditar de jeito nenhum.' },
  { word: 'つい', romaji: 'tsui', reading: 'つい', meaningPt: 'Sem querer', exJp: 'つい言ってしまう。', exReading: 'つい いって しまう。', exRomaji: 'Tsui itte shimau.', exPt: 'Acabo dizendo sem querer.' },
  { word: 'ついに', romaji: 'tsui ni', reading: 'ついに', meaningPt: 'Finalmente; por fim', exJp: 'ついに完成した。', exReading: 'ついに かんせい した。', exRomaji: 'Tsui ni kansei shita.', exPt: 'Finalmente foi concluído.' },
  { word: 'ついでに', romaji: 'tsuide ni', reading: 'ついでに', meaningPt: 'Aproveitando a oportunidade', exJp: '買い物のついでに。', exReading: 'かいもの の ついで に。', exRomaji: 'Kaimono no tsuide ni.', exPt: 'Aproveitando as compras.' },
  { word: 'つまり', romaji: 'tsumari', reading: 'つまり', meaningPt: 'Ou seja; em resumo', exJp: 'つまり、彼が犯人だ。', exReading: 'つまり、かれ が はんにん だ。', exRomaji: 'Tsumari, kare ga hannin da.', exPt: 'Em resumo, ele é o culpado.' },
  { word: 'はもちろん', romaji: 'wa mochiron', reading: 'はもちろん', meaningPt: 'Sem falar em; claro', exJp: '英語はもちろん。', exReading: 'えいご は もちろん。', exRomaji: 'Eigo wa mochiron.', exPt: 'Sem falar no inglês.' },
  { word: '割に', romaji: 'wari ni', reading: 'わりに', meaningPt: 'Para; considerando que', exJp: '安い割に美味しい。', exReading: 'やすい わりに おいしい。', exRomaji: 'Yasui wari ni oishii.', exPt: 'Para o quão barato é, está gostoso.' },
  { word: 'わざと', romaji: 'wazato', reading: 'わざと', meaningPt: 'De propósito', exJp: 'わざと負けた。', exReading: 'わざと まけた。', exRomaji: 'Wazato maketa.', exPt: 'Perdi de propósito.' },
  { word: 'わざわざ', romaji: 'wazawaza', reading: 'わざわざ', meaningPt: 'Dar-se ao trabalho de', exJp: 'わざわざ来てくれてありがとう。', exReading: 'わざわざ きて くれて ありがとう。', exRomaji: 'Wazawaza kite kurete arigatou.', exPt: 'Obrigado por se dar ao trabalho de vir.' },
  { word: '随分', romaji: 'zuibun', reading: 'ずいぶん', meaningPt: 'Bastante; muito', exJp: '随分遅いね。', exReading: 'ずいぶん おそい ね。', exRomaji: 'Zuibun osoi ne.', exPt: 'Você está bastante atrasado, né.' }
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

console.log("Appended adverbs N2 to vocabN2N1.ts!");
