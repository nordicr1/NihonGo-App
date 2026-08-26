import fs from 'fs';
import path from 'path';

const nouns = [
  { w: '祖父', r: 'そふ', rom: 'sofu', m: 'avô' },
  { w: 'ソフト', r: 'ソフト', rom: 'sofuto', m: 'macio; software' },
  { w: '卒業', r: 'そつぎょう', rom: 'sotsugyou', m: 'formatura; graduação' },
  { w: '相談', r: 'そうだん', rom: 'soudan', m: 'discussão; conselho' },
  { w: '水道', r: 'すいどう', rom: 'suidou', m: 'abastecimento de água; encanamento' },
  { w: '水泳', r: 'すいえい', rom: 'suiei', m: 'natação' },
  { w: 'スクリーン', r: 'スクリーン', rom: 'sukuriin', m: 'tela' },
  { w: '隅', r: 'すみ', rom: 'sumi', m: 'canto' },
  { w: '砂', r: 'すな', rom: 'suna', m: 'areia' },
  { w: 'すり', r: 'すり', rom: 'suri', m: 'batedor de carteiras' },
  { w: 'スーツケース', r: 'スーツケース', rom: 'sustsukeesu', m: 'mala (de viagem)' },
  { w: 'ステーキ', r: 'ステーキ', rom: 'suteeki', m: 'bife; bife (steak)' },
  { w: 'ステレオ', r: 'ステレオ', rom: 'sutereo', m: 'estéreo; aparelho de som' },
  { w: '数学', r: 'すうがく', rom: 'suugaku', m: 'matemática' },
  { w: 'スーツ', r: 'スーツ', rom: 'suutsu', m: 'terno; traje' },
  { w: '退院', r: 'たいいん', rom: 'tai\'in', m: 'alta (do hospital)' },
  { w: '台風', r: 'たいふう', rom: 'taifuu', m: 'tufão' },
  { w: 'タイプ', r: 'タイプ', rom: 'taipu', m: 'tipo; estilo; datilografia' },
  { w: 'たいてい', r: 'たいてい', rom: 'taitei', m: 'geralmente; a maioria' },
  { w: '棚', r: 'たな', rom: 'tana', m: 'prateleira' },
  { w: '誕生', r: 'たんじょう', rom: 'tanjou', m: 'nascimento' },
  { w: '楽しみ', r: 'たのしみ', rom: 'tanoshimi', m: 'ansioso por; diversão' },
  { w: '畳', r: 'たたみ', rom: 'tatami', m: 'tatame (esteira de palha japonesa)' },
  { w: '手袋', r: 'てぶくろ', rom: 'tebukuro', m: 'luva' },
  { w: '丁寧', r: 'ていねい', rom: 'teinei', m: 'educado; polido' },
  { w: 'テキスト', r: 'テキスト', rom: 'tekisuto', m: 'texto; livro didático' },
  { w: '適当', r: 'てきとう', rom: 'tekitou', m: 'adequado; apropriado; "de qualquer jeito"' },
  { w: '点', r: 'てん', rom: 'ten', m: 'ponto; nota (em prova)' },
  { w: '店員', r: 'てんいん', rom: 'ten\'in', m: 'funcionário de loja; atendente' },
  { w: 'テニス', r: 'テニス', rom: 'tenisu', m: 'tênis (esporte)' },
  { w: '天気予報', r: 'てんきよほう', rom: 'tenkiyohou', m: 'previsão do tempo' },
  { w: '展覧会', r: 'てんらんかい', rom: 'tenrankai', m: 'exposição; exibição' },
  { w: '寺', r: 'てら', rom: 'tera', m: 'templo budista' },
  { w: '途中', r: 'とちゅう', rom: 'tochuu', m: 'no caminho; no meio' },
  { w: '特急', r: 'とっきゅう', rom: 'tokkyuu', m: 'trem expresso especial' },
  { w: '床屋', r: 'とこや', rom: 'tokoya', m: 'barbeiro; barbearia' },
  { w: '特別', r: 'とくべつ', rom: 'tokubetsu', m: 'especial' },
  { w: '遠く', r: 'とおく', rom: 'tooku', m: 'longe; distante' },
  { w: '都合', r: 'つごう', rom: 'tsugou', m: 'conveniência; circunstâncias' },
  { w: '月', r: 'つき', rom: 'tsuki', m: 'lua; mês' },
  { w: '妻', r: 'つま', rom: 'tsuma', m: 'esposa (minha esposa)' },
  { w: '腕', r: 'うで', rom: 'ude', m: 'braço; habilidade' },
  { w: '受付', r: 'うけつけ', rom: 'uketsuke', m: 'recepção' },
  { w: '生まれ', r: 'うまれ', rom: 'umare', m: 'nascimento; terra natal' },
  { w: '運転手', r: 'うんてんしゅ', rom: 'untenshu', m: 'motorista' },
  { w: '裏', r: 'うら', rom: 'ura', m: 'lado oposto; parte de trás; avesso' },
  { w: '売り場', r: 'うりば', rom: 'uriba', m: 'seção de vendas; balcão' },
  { w: '嘘', r: 'うそ', rom: 'uso', m: 'mentira' },
  { w: 'ワープロ', r: 'ワープロ', rom: 'waapuro', m: 'processador de texto' },
  { w: '割合', r: 'わりあい', rom: 'wariai', m: 'taxa; proporção; relativamente' },
  { w: '忘れ物', r: 'わすれもの', rom: 'wasuremono', m: 'objeto perdido/esquecido' },
  { w: '約束', r: 'やくそく', rom: 'yakusoku', m: 'promessa; compromisso' },
  { w: '予習', r: 'よしゅう', rom: 'yoshuu', m: 'preparação (estudo prévio para aula)' },
  { w: '予定', r: 'よてい', rom: 'yotei', m: 'plano; programação' },
  { w: '用', r: 'よう', rom: 'you', m: 'assunto; uso; compromisso' },
  { w: '用意', r: 'ようい', rom: 'youi', m: 'preparação; arranjo' },
  { w: '用事', r: 'ようじ', rom: 'youji', m: 'tarefa; compromisso' },
  { w: '予約', r: 'よやく', rom: 'yoyaku', m: 'reserva' },
  { w: '湯', r: 'ゆ', rom: 'yu', m: 'água quente; banho público' },
  { w: '指', r: 'ゆび', rom: 'yubi', m: 'dedo' },
  { w: '指輪', r: 'ゆびわ', rom: 'yubiwa', m: 'anel' },
  { w: '夢', r: 'ゆめ', rom: 'yume', m: 'sonho' },
  { w: '残念', r: 'ざんねん', rom: 'zannen', m: 'lamentável; pena' }
];

const examples = {
  '祖父': { jp: '祖父は庭の掃除をしています。', r: 'そふは にわの そうじを しています。', rom: 'sofu wa niwa no souji o shiteimasu.', pt: 'Meu avô está limpando o jardim.' },
  'ソフト': { jp: 'パソコンのソフトを更新します。', r: 'パソコンの ソフトを こうしんします。', rom: 'pasokon no sofuto o koushinshimasu.', pt: 'Vou atualizar o software do computador.' },
  '卒業': { jp: '来年、大学を卒業します。', r: 'らいねん、だいがくを そつぎょうします。', rom: 'rainen, daigaku o sotsugyoushimasu.', pt: 'No ano que vem, me formarei na universidade.' },
  '相談': { jp: '先生に相談があります。', r: 'せんせいに そうだんが あります。', rom: 'sensei ni soudan ga arimasu.', pt: 'Tenho algo a discutir (pedir conselho) ao professor.' },
  '水道': { jp: '水道の水が出ません。', r: 'すいどうの みずが でません。', rom: 'suidou no mizu ga demasen.', pt: 'A água do encanamento não sai.' },
  '水泳': { jp: '趣味は水泳です。', r: 'しゅみは すいえいです。', rom: 'shumi wa suiei desu.', pt: 'Meu hobby é natação.' },
  'スクリーン': { jp: '映画のスクリーンは大きいです。', r: 'えいがの スクリーンは おおきいです。', rom: 'eiga no sukuriin wa ookii desu.', pt: 'A tela do cinema é grande.' },
  '隅': { jp: '部屋の隅に箱があります。', r: 'へやの すみに はこが あります。', rom: 'heya no sumi ni hako ga arimasu.', pt: 'Há uma caixa no canto da sala.' },
  '砂': { jp: '靴に砂が入りました。', r: 'くつに すなが はいりました。', rom: 'kutsu ni suna ga hairimashita.', pt: 'Entrou areia no sapato.' },
  'すり': { jp: '電車ですりに遭いました。', r: 'でんしゃで すりに あいました。', rom: 'densha de suri ni aimashita.', pt: 'Fui vítima de um batedor de carteiras no trem.' },
  'スーツケース': { jp: '旅行にスーツケースを持っていきます。', r: 'りょこうに スーツケースを もっていきます。', rom: 'ryokou ni suutsukeesu o motteikimasu.', pt: 'Vou levar a mala de viagem na viagem.' },
  'ステーキ': { jp: '夕食はステーキを食べます。', r: 'ゆうしょくは ステーキを たべます。', rom: 'yuushoku wa suteeki o tabemasu.', pt: 'No jantar, comerei bife.' },
  'ステレオ': { jp: 'ステレオで音楽を聞きます。', r: 'ステレオで おんがくを ききます。', rom: 'sutereo de ongaku o kikimasu.', pt: 'Ouço música no aparelho de som.' },
  '数学': { jp: '数学のテストは難しかったです。', r: 'すうがくの テストは むずかしかったです。', rom: 'suugaku no tesuto wa muzukashikatta desu.', pt: 'O teste de matemática estava difícil.' },
  'スーツ': { jp: '会社にスーツを着て行きます。', r: 'かいしゃに スーツを きて いきます。', rom: 'kaisha ni suutsu o kite ikimasu.', pt: 'Vou trabalhar vestindo terno.' },
  '退院': { jp: '明日、病院を退院します。', r: 'あした、びょういんを たいいんします。', rom: 'ashita, byouin o taiinshimasu.', pt: 'Amanhã terei alta do hospital.' },
  '台風': { jp: '台風が近づいています。', r: 'たいふうが ちかづいています。', rom: 'taifuu ga chikazuiteimasu.', pt: 'O tufão está se aproximando.' },
  'タイプ': { jp: '彼は私の好きなタイプです。', r: 'かれは わたしの すきな タイプです。', rom: 'kare wa watashi no suki na taipu desu.', pt: 'Ele é o meu tipo.' },
  'たいてい': { jp: '休日はたいてい家にいます。', r: 'きゅうじつは たいてい いえに います。', rom: 'kyuujitsu wa taitei ie ni imasu.', pt: 'Nos feriados geralmente fico em casa.' },
  '棚': { jp: '本を棚に並べます。', r: 'ほんを たなに ならべます。', rom: 'hon o tana ni narabemasu.', pt: 'Alinho os livros na prateleira.' },
  '誕生': { jp: '新しい命の誕生を祝います。', r: 'あたらしい いのちの たんじょうを いわいます。', rom: 'atarashii inochi no tanjou o iwaimasu.', pt: 'Celebramos o nascimento de uma nova vida.' },
  '楽しみ': { jp: '夏休みが楽しみです。', r: 'なつやすみが たのしみです。', rom: 'natsuyasumi ga tanoshimi desu.', pt: 'Estou ansioso pelas férias de verão.' },
  '畳': { jp: '和室には畳があります。', r: 'わしつには たたみが あります。', rom: 'washitsu ni wa tatami ga arimasu.', pt: 'Nos quartos japoneses (Washitsu) há tatame.' },
  '手袋': { jp: '冬は手袋をします。', r: 'ふゆは てぶくろを します。', rom: 'fuyu wa tebukuro o shimasu.', pt: 'No inverno eu uso luvas.' },
  '丁寧': { jp: '先生は丁寧に教えてくれます。', r: 'せんせいは ていねいに おしえてくれます。', rom: 'sensei wa teinei ni oshietekuremasu.', pt: 'O professor ensina educadamente.' },
  'テキスト': { jp: '日本語のテキストを買いました。', r: 'にほんごの テキストを かいました。', rom: 'nihongo no tekisuto o kaimashita.', pt: 'Comprei o livro didático de japonês.' },
  '適当': { jp: '適当なサイズを選びます。', r: 'てきとうな サイズを えらびます。', rom: 'tekitou na saizu o erabimasu.', pt: 'Escolho um tamanho adequado.' },
  '点': { jp: 'テストで良い点を取りました。', r: 'テストで いい てんを とりました。', rom: 'tesuto de ii ten o torimashita.', pt: 'Tirei uma boa nota no teste.' },
  '店員': { jp: '店員に値段を聞きます。', r: 'てんいんに ねだんを ききます。', rom: 'tenin ni nedan o kikimasu.', pt: 'Pergunto o preço ao funcionário da loja.' },
  'テニス': { jp: '友達とテニスをします。', r: 'ともだちと テニスを します。', rom: 'tomodachi to tenisu o shimasu.', pt: 'Vou jogar tênis com o amigo.' },
  '天気予報': { jp: '天気予報を見ます。', r: 'てんきよほうを みます。', rom: 'tenkiyohou o mimasu.', pt: 'Vou ver a previsão do tempo.' },
  '展覧会': { jp: '美術館の展覧会に行きます。', r: 'びじゅつかんの てんらんかいに いきます。', rom: 'bijutsukan no tenrankai ni ikimasu.', pt: 'Vou à exposição do museu de arte.' },
  '寺': { jp: '京都には古い寺が多いです。', r: 'きょうとには ふるい てらが おおいです。', rom: 'kyouto ni wa furui tera ga ooi desu.', pt: 'Há muitos templos antigos em Quioto.' },
  '途中': { jp: '学校へ行く途中で雨が降りました。', r: 'がっこうへ いく と中で あめが ふりました。', rom: 'gakkou e iku tochuu de ame ga furimashita.', pt: 'Choveu no caminho para a escola.' },
  '特急': { jp: '特急電車に乗ると早いです。', r: 'とっきゅうでんしゃに のると はやいです。', rom: 'tokkyuudensha ni noru to hayai desu.', pt: 'É mais rápido se você pegar o trem expresso.' },
  '床屋': { jp: '床屋で髪を切りました。', r: 'とこやで かみを きりました。', rom: 'tokoya de kami o kirimashita.', pt: 'Cortei o cabelo no barbeiro.' },
  '特別': { jp: '今日は特別な日です。', r: 'きょうは とくべつな ひです。', rom: 'kyou wa tokubetsu na hi desu.', pt: 'Hoje é um dia especial.' },
  '遠く': { jp: '遠くに山が見えます。', r: 'とおくに やまが みえます。', rom: 'tooku ni yama ga miemasu.', pt: 'Vejo montanhas ao longe.' },
  '都合': { jp: '明日は都合が悪いです。', r: 'あしたは つごうが わるいです。', rom: 'ashita wa tsugou ga warui desu.', pt: 'Amanhã não é conveniente (estou ocupado/inconveniente).' },
  '月': { jp: '空に月が出ています。', r: 'そらに つきが でています。', rom: 'sora ni tsuki ga deteimasu.', pt: 'A lua apareceu no céu.' },
  '妻': { jp: '妻は料理が上手です。', r: 'つまは りょうりが じょうずです。', rom: 'tsuma wa ryouri ga jouzu desu.', pt: 'Minha esposa cozinha bem.' },
  '腕': { jp: '時計を腕につけます。', r: 'とけいを うでに つけます。', rom: 'tokei o ude ni tsukemasu.', pt: 'Coloco o relógio no braço.' },
  '受付': { jp: '受付で名前を書いてください。', r: 'うけつけで なまえを かいてください。', rom: 'uketsuke de namae o kaite kudasai.', pt: 'Por favor, escreva o seu nome na recepção.' },
  '生まれ': { jp: '私は東京生まれです。', r: 'わたしは とうきょう うまれです。', rom: 'watashi wa toukyou umare desu.', pt: 'Sou nascido(a) em Tóquio.' },
  '運転手': { jp: 'バスの運転手さんに道を聞きました。', r: 'バスの うんてんしゅさんに みちを ききました。', rom: 'basu no untenshusan ni michi o kikimashita.', pt: 'Perguntei o caminho ao motorista do ônibus.' },
  '裏': { jp: '紙の裏に書きます。', r: 'かみの うらに かきます。', rom: 'kami no ura ni kakimasu.', pt: 'Vou escrever na parte de trás da folha.' },
  '売り場': { jp: '靴の売り場は三階です。', r: 'くつの うりばは さんがいです。', rom: 'kutsu no uriba wa sangai desu.', pt: 'A seção de sapatos é no terceiro andar.' },
  '嘘': { jp: '嘘をついてはいけません。', r: 'うそを ついては いけません。', rom: 'uso o tsuite wa ikemasen.', pt: 'Não deve contar mentiras.' },
  'ワープロ': { jp: '昔はワープロを使っていました。', r: 'むかしは ワープロを つかっていました。', rom: 'mukashi wa waapuro o tsukatteimashita.', pt: 'Antigamente usava-se processador de texto.' },
  '割合': { jp: 'このクラスは女性の割合が高いです。', r: 'この クラスは じょせいの わりあいが たかいです。', rom: 'kono kurasu wa josei no wariai ga takai desu.', pt: 'Nesta turma a proporção de mulheres é alta.' },
  '忘れ物': { jp: '電車に忘れ物をしました。', r: 'でんしゃに わすれものを しました。', rom: 'densha ni wasuremono o shimashita.', pt: 'Esqueci um objeto (deixei algo) no trem.' },
  '約束': { jp: '友達と遊ぶ約束をしました。', r: 'ともだちと あそぶ やくそくを しました。', rom: 'tomodachi to asobu yakusoku o shimashita.', pt: 'Fiz um compromisso de sair (brincar) com o meu amigo.' },
  '予習': { jp: '授業の前に予習します。', r: 'じゅぎょうの まえに よしゅうします。', rom: 'jugyou no mae ni yoshuushimasu.', pt: 'Faço a preparação (estudo prévio) antes da aula.' },
  '予定': { jp: '休日の予定を決めます。', r: 'きゅうじつの よていを きめます。', rom: 'kyuujitsu no yotei o kimemasu.', pt: 'Vou decidir os planos para o feriado.' },
  '用': { jp: 'ちょっと用があります。', r: 'ちょっと ようが あります。', rom: 'chotto you ga arimasu.', pt: 'Tenho um pequeno compromisso/assunto.' },
  '用意': { jp: '食事の用意ができました。', r: 'しょくじの よういが できました。', rom: 'shokuji no youi ga dekimashita.', pt: 'A preparação da refeição está pronta.' },
  '用事': { jp: '今日は用事があるので行けません。', r: 'きょうは ようじが あるので いけません。', rom: 'kyou wa youji ga aru node ikemasen.', pt: 'Como tenho um compromisso hoje, não poderei ir.' },
  '予約': { jp: 'ホテルの部屋を予約しました。', r: 'ホテルの へやを よやくしました。', rom: 'hoteru no heya o yoyakushimashita.', pt: 'Fiz a reserva de um quarto no hotel.' },
  '湯': { jp: 'お湯を沸かします。', r: 'おゆを わかします。', rom: 'oyu o wakashimasu.', pt: 'Ferver a água.' },
  '指': { jp: '指を切りました。', r: 'ゆびを きりました。', rom: 'yubi o kirimashita.', pt: 'Cortei o dedo.' },
  '指輪': { jp: '彼女に指輪をプレゼントしました。', r: 'かのじょに ゆびわを プレゼントしました。', rom: 'kanojo ni yubiwa o purezentoshimashita.', pt: 'Presenteei ela com um anel.' },
  '夢': { jp: '怖い夢を見ました。', r: 'こわい ゆめを みました。', rom: 'kowai yume o mimashita.', pt: 'Tive (vi) um sonho assustador.' },
  '残念': { jp: '試合に負けて残念です。', r: 'しあいに まけて ざんねんです。', rom: 'shiai ni makete zannen desu.', pt: 'É uma pena que tenhamos perdido o jogo.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN4.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = nouns.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n4_noun_batch4_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r + "',\n" +
    "    romaji: '" + n.rom + "',\n" +
    "    meaningPt: '" + n.m + "',\n" +
    "    category: 'substantivo',\n" +
    "    jlpt: 'N4',\n" +
    "    categoryLabelPt: 'Substantivo N4',\n" +
    "    exampleSentence: {\n" +
    "      jp: '" + ex.jp + "',\n" +
    "      reading: '" + ex.r + "',\n" +
    "      romaji: '" + ex.rom + "',\n" +
    "      meaningPt: '" + safePt + "'\n" +
    "    }\n" +
    "  }";
}).join(',\n');

fileContent = fileContent.replace(
  /export const VOCAB_N4: VocabItem\[\] = \[/,
  "export const VOCAB_N4: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 63 more N4 Nouns to vocabN4.ts successfully!');
