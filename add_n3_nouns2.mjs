import fs from 'fs';
import path from 'path';

const nouns = [
  { w: 'お昼', r: 'おひる', rom: 'ohiru', m: 'almoço; meio-dia' },
  { w: '連続', r: 'れんぞく', rom: 'renzoku', m: 'continuação; sucessão' },
  { w: '利益', r: 'りえき', rom: 'rieki', m: 'lucro; benefício' },
  { w: '利口', r: 'りこう', rom: 'rikou', m: 'inteligente; esperto' },
  { w: '留学', r: 'りゅうがく', rom: 'ryuugaku', m: 'intercâmbio; estudar fora' },
  { w: '作品', r: 'さくひん', rom: 'sakuhin', m: 'obra (de arte); produção' },
  { w: '左右', r: 'さゆう', rom: 'sayuu', m: 'esquerda e direita' },
  { w: '成長', r: 'せいちょう', rom: 'seichou', m: 'crescimento; desenvolvimento' },
  { w: '製品', r: 'せいひん', rom: 'seihin', m: 'produto manufaturado' },
  { w: '青年', r: 'せいねん', rom: 'seinen', m: 'juventude; jovem' },
  { w: '刺激', r: 'しげき', rom: 'shigeki', m: 'estímulo; incentivo' },
  { w: '資本', r: 'しほん', rom: 'shihon', m: 'fundos; capital' },
  { w: '品', r: 'しな', rom: 'shina', m: 'artigo; mercadoria; qualidade' },
  { w: '身長', r: 'しんちょう', rom: 'shinchou', m: 'estatura; altura' },
  { w: '進学', r: 'しんがく', rom: 'shingaku', m: 'ingresso no ensino superior' },
  { w: '支店', r: 'してん', rom: 'shiten', m: 'filial; sucursal' },
  { w: '使用', r: 'しよう', rom: 'shiyou', m: 'uso; aplicação' },
  { w: '食品', r: 'しょくひん', rom: 'shokuhin', m: 'alimento; produtos alimentícios' },
  { w: '書物', r: 'しょもつ', rom: 'shomotsu', m: 'livro; volume' },
  { w: '書類', r: 'しょるい', rom: 'shorui', m: 'documentos; papéis oficiais' },
  { w: '書斎', r: 'しょさい', rom: 'shosai', m: 'escritório (em casa); sala de estudos' },
  { w: '商売', r: 'しょうばい', rom: 'shoubai', m: 'negócio; comércio' },
  { w: '奨学金', r: 'しょうがくきん', rom: 'shougakukin', m: 'bolsa de estudos' },
  { w: '正午', r: 'しょうご', rom: 'shougo', m: 'meio-dia' },
  { w: '商品', r: 'しょうひん', rom: 'shouhin', m: 'mercadoria; produto' },
  { w: '少女', r: 'しょうじょ', rom: 'shoujo', m: 'menina; garota' },
  { w: '証明', r: 'しょうめい', rom: 'shoumei', m: 'prova; certificação' },
  { w: '少年', r: 'しょうねん', rom: 'shounen', m: 'menino; garoto' },
  { w: '少々', r: 'しょうしょう', rom: 'shoushou', m: 'um momento; um pouco' },
  { w: '招待', r: 'しょうたい', rom: 'shoutai', m: 'convite' },
  { w: '週', r: 'しゅう', rom: 'shuu', m: 'semana' },
  { w: '集中', r: 'しゅうちゅう', rom: 'shuuchuu', m: 'concentração' },
  { w: '集団', r: 'しゅうだん', rom: 'shuudan', m: 'grupo; massa' },
  { w: '収穫', r: 'しゅうかく', rom: 'shuukaku', m: 'colheita; frutos (de esforço)' },
  { w: '週間', r: 'しゅうかん', rom: 'shuukan', m: 'semana (duração)' },
  { w: '週刊', r: 'しゅうかん', rom: 'shuukan_2', m: 'publicação semanal' },
  { w: '収入', r: 'しゅうにゅう', rom: 'shuunyuu', m: 'renda; receita; salário' },
  { w: '速度', r: 'そくど', rom: 'sokudo', m: 'velocidade; ritmo' },
  { w: '大半', r: 'たいはん', rom: 'taihan', m: 'a maior parte; a maioria' },
  { w: '大会', r: 'たいかい', rom: 'taikai', m: 'torneio; convenção' },
  { w: '多少', r: 'たしょう', rom: 'tashou', m: 'um pouco; mais ou menos' },
  { w: '手品', r: 'てじな', rom: 'tejina', m: 'truque de mágica' },
  { w: '哲学', r: 'てつがく', rom: 'tetsugaku', m: 'filosofia' },
  { w: '徹夜', r: 'てつや', rom: 'tetsuya', m: 'passar a noite acordado' },
  { w: '土地', r: 'とち', rom: 'tochi', m: 'terreno; terra' },
  { w: '都会', r: 'とかい', rom: 'tokai', m: 'cidade grande; metrópole' },
  { w: '図書', r: 'としょ', rom: 'tosho', m: 'livros' },
  { w: '通学', r: 'つうがく', rom: 'tsuugaku', m: 'trajeto para a escola' },
  { w: '運転', r: 'うんてん', rom: 'unten', m: 'direção; condução' },
  { w: '悪口', r: 'わるぐち', rom: 'waruguchi', m: 'falar mal; insulto' },
  { w: '夜明け', r: 'よあけ', rom: 'yoake', m: 'amanhecer; aurora' },
  { w: '余分', r: 'よぶん', rom: 'yobun', m: 'extra; excedente' },
  { w: '読み', r: 'よみ', rom: 'yomi', m: 'leitura (de algo)' },
  { w: '夜中', r: 'よなか', rom: 'yonaka', m: 'meio da noite; madrugada' },
  { w: '唯一', r: 'ゆいいつ', rom: 'yuiitsu', m: 'único; exclusivo' },
  { w: '輸入', r: 'ゆにゅう', rom: 'yunyuu', m: 'importação' },
  { w: '輸出', r: 'ゆしゅつ', rom: 'yushutsu', m: 'exportação' },
  { w: '夕べ', r: 'ゆうべ', rom: 'yuube', m: 'entardecer; noite passada' },
  { w: '有利', r: 'ゆうり', rom: 'yuuri', m: 'vantajoso; favorável' },
  { w: '全国', r: 'ぜんこく', rom: 'zenkoku', m: 'todo o país; nacional' },
];

const examples = {
  'お昼': { jp: 'お昼ご飯を食べに行きましょう。', r: 'おひる ごはんを たべに いきましょう。', rom: 'ohiru gohan o tabe ni ikimashou.', pt: 'Vamos almoçar.' },
  '連続': { jp: '三日間連続で雨が降っている。', r: 'みっかかん れんぞくで あめが ふっている。', rom: 'mikkakan renzoku de ame ga futteiru.', pt: 'Está chovendo por três dias seguidos.' },
  '利益': { jp: 'このビジネスは大きな利益を生む。', r: 'この ビジネスは おおきな りえきを うむ。', rom: 'kono bijinesu wa ookina rieki o umu.', pt: 'Este negócio gera um grande lucro.' },
  '利口': { jp: 'あの子はとても利口だ。', r: 'あのこは とても りこうだ。', rom: 'anoko wa totemo rikou da.', pt: 'Aquela criança é muito esperta.' },
  '留学': { jp: '来年、日本へ留学する予定です。', r: 'らいねん、にほんへ りゅうがくする よていです。', rom: 'rainen, nihon e ryuugaku suru yotei desu.', pt: 'Planejo fazer intercâmbio no Japão no ano que vem.' },
  '作品': { jp: 'これは彼の最高傑作の作品だ。', r: 'これは かれの さいこう けっさくの さくひんだ。', rom: 'kore wa kare no saikou kessaku no sakuhin da.', pt: 'Esta obra é a obra-prima dele.' },
  '左右': { jp: '道路を渡る時は左右を確認する。', r: 'どうろを わたる ときは さゆうを かくにんする。', rom: 'douro o wataru toki wa sayuu o kakunin suru.', pt: 'Olhe para a esquerda e para a direita ao atravessar a rua.' },
  '成長': { jp: '子供の成長は早い。', r: 'こどもの せいちょうは はやい。', rom: 'kodomo no seichou wa hayai.', pt: 'O crescimento das crianças é rápido.' },
  '製品': { jp: 'この工場で新しい製品を作っている。', r: 'この こうじょうで あたらしい せいひんを つくっている。', rom: 'kono koujou de atarashii seihin o tsukutteiru.', pt: 'Eles estão fazendo um novo produto nesta fábrica.' },
  '青年': { jp: '彼は立派な青年になった。', r: 'かれは りっぱな せいねんに なった。', rom: 'kare wa rippa na seinen ni natta.', pt: 'Ele se tornou um jovem admirável.' },
  '刺激': { jp: '海外旅行は良い刺激になる。', r: 'かいがい りょこうは よい しげきになる。', rom: 'kaigai ryokou wa yoi shigeki ni naru.', pt: 'Viajar para o exterior é um bom estímulo.' },
  '資本': { jp: '会社を設立するための資本を集める。', r: 'かいしゃを せつりつするための しほんを あつめる。', rom: 'kaisha o setsuritsu suru tame no shihon o atsumeru.', pt: 'Arrecadar capital para fundar uma empresa.' },
  '品': { jp: 'この店は安くて良い品を売っている。', r: 'この みせは やすくて よい しなを うっている。', rom: 'kono mise wa yasukute yoi shina o utteiru.', pt: 'Esta loja vende mercadorias boas e baratas.' },
  '身長': { jp: '彼は身長が180センチある。', r: 'かれは しんちょうが 180センチある。', rom: 'kare wa shinchou ga 180 senchi aru.', pt: 'Ele tem 180 cm de altura.' },
  '進学': { jp: '大学への進学を希望している。', r: 'だいがくへの しんがくを きぼうしている。', rom: 'daigaku e no shingaku o kibou shiteiru.', pt: 'Eu desejo ingressar na universidade.' },
  '支店': { jp: '東京に新しい支店を出した。', r: 'とうきょうに あたらしい してんを だした。', rom: 'toukyou ni atarashii shiten o dashita.', pt: 'Abriram uma nova filial em Tóquio.' },
  '使用': { jp: 'この部屋は現在使用中です。', r: 'この へやは げんざい しようちゅうです。', rom: 'kono heya wa genzai shiyouchuu desu.', pt: 'Este quarto está em uso no momento.' },
  '食品': { jp: 'スーパーで食品を買う。', r: 'スーパーで しょくひんを かう。', rom: 'suupaa de shokuhin o kau.', pt: 'Comprar alimentos no supermercado.' },
  '書物': { jp: '図書館には古い書物がたくさんある。', r: 'としょかんには ふるい しょもつが たくさんある。', rom: 'toshokan ni wa furui shomotsu ga takusan aru.', pt: 'Há muitos livros antigos na biblioteca.' },
  '書類': { jp: '会議の書類を準備する。', r: 'かいぎの しょるいを じゅんびする。', rom: 'kaigi no shorui o junbi suru.', pt: 'Preparar os documentos para a reunião.' },
  '書斎': { jp: '父は書斎で本を読んでいる。', r: 'ちちは しょさいで ほんを よんでいる。', rom: 'chichi wa shosai de hon o yondeiru.', pt: 'Meu pai está lendo um livro no escritório.' },
  '商売': { jp: '彼の商売はうまくいっている。', r: 'かれの しょうばいは うまくいっている。', rom: 'kare no shoubai wa umaku itteiru.', pt: 'O negócio dele está indo bem.' },
  '奨学金': { jp: '奨学金をもらって大学に通う。', r: 'しょうがくきんを もらって だいがくに かよう。', rom: 'shougakukin o moratte daigaku ni kayou.', pt: 'Frequentar a universidade com uma bolsa de estudos.' },
  '正午': { jp: '正午に駅で待ち合わせましょう。', r: 'しょうごに えきで まちあわせましょう。', rom: 'shougo ni eki de machiawasemashou.', pt: 'Vamos nos encontrar na estação ao meio-dia.' },
  '商品': { jp: 'この商品はとても人気がある。', r: 'この しょうひんは とても にんきがある。', rom: 'kono shouhin wa totemo ninki ga aru.', pt: 'Esta mercadoria é muito popular.' },
  '少女': { jp: '公園で少女が遊んでいる。', r: 'こうえんで しょうじょが あそんでいる。', rom: 'kouen de shoujo ga asondeiru.', pt: 'Uma menina está brincando no parque.' },
  '証明': { jp: '自分の無実を証明する。', r: 'じぶんの むじつを しょうめいする。', rom: 'jibun no mujitsu o shoumei suru.', pt: 'Provar a própria inocência.' },
  '少年': { jp: 'その少年は足が速い。', r: 'その しょうねんは あしが はやい。', rom: 'sono shounen wa ashi ga hayai.', pt: 'Aquele menino corre rápido.' },
  '少々': { jp: '少々お待ちください。', r: 'しょうしょう おまちください。', rom: 'shoushou omachi kudasai.', pt: 'Por favor, aguarde um momento.' },
  '招待': { jp: '結婚式に招待された。', r: 'けっこんしきに しょうたいされた。', rom: 'kekkonshiki ni shoutai sareta.', pt: 'Fui convidado para a cerimônia de casamento.' },
  '週': { jp: '一週間に三回ジムに行く。', r: 'いっしゅうかんに さんかい ジムに いく。', rom: 'isshuukan ni sankai jimu ni iku.', pt: 'Vou à academia três vezes por semana.' },
  '集中': { jp: '勉強に集中できない。', r: 'べんきょうに しゅうちゅうできない。', rom: 'benkyou ni shuuchuu dekinai.', pt: 'Não consigo me concentrar nos estudos.' },
  '集団': { jp: '集団で行動する。', r: 'しゅうだんで こうどうする。', rom: 'shuudan de koudou suru.', pt: 'Agir em grupo.' },
  '収穫': { jp: '今年は米の収穫が多い。', r: 'ことしは こめの しゅうかくが おおい。', rom: 'kotoshi wa kome no shuukaku ga ooi.', pt: 'A colheita de arroz deste ano é grande.' },
  '週間': { jp: '二週間後にテストがある。', r: 'にしゅうかんごに テストがある。', rom: 'nishuukango ni tesuto ga aru.', pt: 'Haverá um teste daqui a duas semanas.' },
  '週刊': { jp: '週刊誌を毎週買っている。', r: 'しゅうかんしを まいしゅう かっている。', rom: 'shuukanshi o maishuu katteiru.', pt: 'Compro uma revista semanal toda semana.' },
  '収入': { jp: 'アルバイトの収入が増えた。', r: 'アルバイトの しゅうにゅうが ふえた。', rom: 'arubaito no shuunyuu ga fueta.', pt: 'Minha renda do trabalho de meio período aumentou.' },
  '速度': { jp: '車の速度を落とす。', r: 'くるまの そくどを おとす。', rom: 'kuruma no sokudo o otosu.', pt: 'Reduzir a velocidade do carro.' },
  '大半': { jp: '休日の大半を寝て過ごした。', r: 'きゅうじつの たいはんを ねて すごした。', rom: 'kyuujitsu no taihan o nete sugoshita.', pt: 'Passei a maior parte do meu feriado dormindo.' },
  '大会': { jp: 'スポーツ大会に参加する。', r: 'スポーツ たいかいに さんかする。', rom: 'supootsu taikai ni sanka suru.', pt: 'Participar de um torneio esportivo.' },
  '多少': { jp: '多少の雨なら決行する。', r: 'たしょうの あめなら けっこうする。', rom: 'tashou no ame nara kekkou suru.', pt: 'Se for pouca chuva, seguiremos com o plano.' },
  '手品': { jp: 'パーティーで手品を披露する。', r: 'パーティーで てじなを ひろうする。', rom: 'paatii de tejina o hirou suru.', pt: 'Apresentar um truque de mágica na festa.' },
  '哲学': { jp: '大学で哲学を学ぶ。', r: 'だいがくで てつがくを まなぶ。', rom: 'daigaku de tetsugaku o manabu.', pt: 'Estudar filosofia na universidade.' },
  '徹夜': { jp: '昨日は徹夜で勉強した。', r: 'きのうは てつやで べんきょうした。', rom: 'kinou wa tetsuya de benkyou shita.', pt: 'Ontem passei a noite acordado estudando.' },
  '土地': { jp: '家を建てるための土地を買う。', r: 'いえを たてるための とちを かう。', rom: 'ie o tateru tame no tochi o kau.', pt: 'Comprar um terreno para construir uma casa.' },
  '都会': { jp: '都会の生活は便利だ。', r: 'とかいの せいかつは べんりだ。', rom: 'tokai no seikatsu wa benri da.', pt: 'A vida na cidade grande é conveniente.' },
  '図書': { jp: '図書室で静かに本を読む。', r: 'としょしつで しずかに ほんを よむ。', rom: 'toshoshitsu de shizuka ni hon o yomu.', pt: 'Ler um livro silenciosamente na sala de leitura.' },
  '通学': { jp: '電車で通学している。', r: 'でんしゃで つうがくしている。', rom: 'densha de tsuugaku shiteiru.', pt: 'Faço o trajeto para a escola de trem.' },
  '運転': { jp: '車の運転に気をつけてください。', r: 'くるまの うんてんに きをつけてください。', rom: 'kuruma no unten ni ki o tsukete kudasai.', pt: 'Por favor, tome cuidado ao dirigir.' },
  '悪口': { jp: '人の悪口を言ってはいけない。', r: 'ひとの わるぐちを いってはいけない。', rom: 'hito no waruguchi o itte wa ikenai.', pt: 'Não se deve falar mal dos outros.' },
  '夜明け': { jp: '夜明けとともに出発する。', r: 'よあけとともに しゅっぱつする。', rom: 'yoake to tomo ni shuppatsu suru.', pt: 'Partiremos ao amanhecer.' },
  '余分': { jp: '余分なお金は持っていない。', r: 'よぶんな おかねは もっていない。', rom: 'yobun na okane wa motteinai.', pt: 'Não tenho dinheiro extra.' },
  '読み': { jp: 'この漢字の読みがわからない。', r: 'この かんじの よみが わからない。', rom: 'kono kanji no yomi ga wakaranai.', pt: 'Não sei a leitura deste kanji.' },
  '夜中': { jp: '夜中に電話がかかってきた。', r: 'よなかに でんわが かかってきた。', rom: 'yonaka ni denwa ga kakatte kita.', pt: 'Recebi uma ligação no meio da noite.' },
  '唯一': { jp: 'これが唯一の解決策だ。', r: 'これが ゆいいつの かいけつさくだ。', rom: 'kore ga yuiitsu no kaiketsusaku da.', pt: 'Esta é a única solução.' },
  '輸入': { jp: '外国から車を輸入する。', r: 'がいこくから くるまを ゆにゅうする。', rom: 'gaikoku kara kuruma o yunyuu suru.', pt: 'Importar carros do exterior.' },
  '輸出': { jp: '日本の製品を海外へ輸出する。', r: 'にほんの せいひんを かいがいへ ゆしゅつする。', rom: 'nihon no seihin o kaigai e yushutsu suru.', pt: 'Exportar produtos japoneses para o exterior.' },
  '夕べ': { jp: '夕べは友達と飲みに行った。', r: 'ゆうべは ともだちと のみに いった。', rom: 'yuube wa tomodachi to nomi ni itta.', pt: 'Noite passada fui beber com meus amigos.' },
  '有利': { jp: '試合は我々に有利に進んでいる。', r: 'しあいは われわれに ゆうりに すすんでいる。', rom: 'shiai wa wareware ni yuuri ni susundeiru.', pt: 'A partida está progredindo favoravelmente para nós.' },
  '全国': { jp: '全国から参加者が集まった。', r: 'ぜんこくから さんかしゃが あつまった。', rom: 'zenkoku kara sankasha ga atsumatta.', pt: 'Reuniram-se participantes de todo o país.' },
};

const filePath = path.join(process.cwd(), 'src/data/vocabN3.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = nouns.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };

  return "  {\n" +
    "    id: 'n3_noun_batch2_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r + "',\n" +
    "    romaji: '" + n.rom + "',\n" +
    "    meaningPt: '" + n.m + "',\n" +
    "    category: 'substantivo',\n" +
    "    jlpt: 'N3',\n" +
    "    categoryLabelPt: 'Substantivo N3',\n" +
    "    exampleSentence: {\n" +
    "      jp: '" + ex.jp + "',\n" +
    "      reading: '" + ex.r + "',\n" +
    "      romaji: '" + ex.rom + "',\n" +
    "      meaningPt: '" + ex.pt + "'\n" +
    "    }\n" +
    "  }";
}).join(',\n');

fileContent = fileContent.replace(
  /export const VOCAB_N3: VocabItem\[\] = \[/,
  "export const VOCAB_N3: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 60 more N3 Nouns to vocabN3.ts successfully!');
