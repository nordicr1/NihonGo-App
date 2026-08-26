import fs from 'fs';
import path from 'path';

const verbs = [
  { w: '取る', r: 'とる', rom: 'toru', m: 'pegar; tirar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '撮る', r: 'とる', rom: 'toru', m: 'tirar foto; gravar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '疲れる', r: 'つかれる', rom: 'tsukareru', m: 'cansar-se', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '使う', r: 'つかう', rom: 'tsukau', m: 'usar; utilizar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: 'つける', r: 'つける', rom: 'tsukeru', m: 'ligar (energia/eletrônicos)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '付ける', r: 'つける', rom: 'tsukeru', m: 'anexar; fixar; aplicar', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '着く', r: 'つく', rom: 'tsuku', m: 'chegar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '作る', r: 'つくる', rom: 'tsukuru', m: 'fazer; criar; produzir', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '勤める', r: 'つとめる', rom: 'tsutomeru', m: 'trabalhar (para alguém)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '生まれる', r: 'うまれる', rom: 'umareru', m: 'nascer', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '売る', r: 'うる', rom: 'uru', m: 'vender', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '歌う', r: 'うたう', rom: 'utau', m: 'cantar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '分かる', r: 'わかる', rom: 'wakaru', m: 'entender; compreender', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '忘れる', r: 'わすれる', rom: 'wasureru', m: 'esquecer', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '渡る', r: 'わたる', rom: 'wataru', m: 'atravessar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '渡す', r: 'わたす', rom: 'watasu', m: 'entregar (em mãos)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: 'やる', r: 'やる', rom: 'yaru', m: 'fazer; dar (para animal/planta/inferior)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '休む', r: 'やすむ', rom: 'yasumu', m: 'descansar; faltar (ausentar-se)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '呼ぶ', r: 'よぶ', rom: 'yobu', m: 'chamar; convidar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '読む', r: 'よむ', rom: 'yomu', m: 'ler', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' }
];

const examples = {
  '取る': { jp: '塩を取ってください。', r: 'しおを とってください。', rom: 'shio o totte kudasai.', pt: 'Por favor, me passe (pegue) o sal.' },
  '撮る': { jp: '写真を撮ります。', r: 'しゃしんを とります。', rom: 'shashin o torimasu.', pt: 'Tiro uma foto.' },
  '疲れる': { jp: '仕事で疲れました。', r: 'しごとで つかれました。', rom: 'shigoto de tsukaremashita.', pt: 'Me cansei com o trabalho.' },
  '使う': { jp: '辞書を使います。', r: 'じしょを つかいます。', rom: 'jisho o tsukaimasu.', pt: 'Uso o dicionário.' },
  'つける': { jp: 'テレビをつけます。', r: 'テレビを つけます。', rom: 'terebi o tsukemasu.', pt: 'Ligo a televisão.' },
  '付ける': { jp: '服にボタンを付けます。', r: 'ふくに ボタンを つけます。', rom: 'fuku ni botan o tsukemasu.', pt: 'Prego (anexo) um botão na roupa.' },
  '着く': { jp: '駅に着きました。', r: 'えきに つきました。', rom: 'eki ni tsukimashita.', pt: 'Cheguei à estação.' },
  '作る': { jp: 'ケーキを作ります。', r: 'ケーキを つくります。', rom: 'keeki o tsukurimasu.', pt: 'Faço um bolo.' },
  '勤める': { jp: '会社に勤めています。', r: 'かいしゃに つとめています。', rom: 'kaisha ni tsutometeimasu.', pt: 'Trabalho numa empresa.' },
  '生まれる': { jp: '赤ちゃんが生まれました。', r: 'あかちゃんが うまれました。', rom: 'akachan ga umaremashita.', pt: 'O bebê nasceu.' },
  '売る': { jp: '古い本を売ります。', r: 'ふるい ほんを うります。', rom: 'furui hon o urimasu.', pt: 'Vendo livros velhos.' },
  '歌う': { jp: '歌を歌います。', r: 'うたを うたいます。', rom: 'uta o utaimasu.', pt: 'Canto uma música.' },
  '分かる': { jp: '日本語が分かります。', r: 'にほんごが わかります。', rom: 'nihongo ga wakarimasu.', pt: 'Entendo japonês.' },
  '忘れる': { jp: '宿題を忘れました。', r: 'しゅくだいを わすれました。', rom: 'shukudai o wasuremashita.', pt: 'Esqueci a lição de casa.' },
  '渡る': { jp: '橋を渡ります。', r: 'はしを わたります。', rom: 'hashi o watarimasu.', pt: 'Atravesso a ponte.' },
  '渡す': { jp: 'プレゼントを渡します。', r: 'プレゼントを わたします。', rom: 'purezento o watashimasu.', pt: 'Entrego o presente.' },
  'やる': { jp: '宿題をやります。', r: 'しゅくだいを やります。', rom: 'shukudai o yarimasu.', pt: 'Faço a lição de casa.' },
  '休む': { jp: '学校を休みます。', r: 'がっこうを やすみます。', rom: 'gakkou o yasumimasu.', pt: 'Falto na escola.' },
  '呼ぶ': { jp: '友達を呼びます。', r: 'ともだちを よびます。', rom: 'tomodachi o yobimasu.', pt: 'Chamo um amigo.' },
  '読む': { jp: '本を読みます。', r: 'ほんを よみます。', rom: 'hon o yomimasu.', pt: 'Leio um livro.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN5.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = verbs.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");
  const safeRom = ex.rom.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n5_verb_batch2_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r.replace(/'/g, "\\'") + "',\n" +
    "    romaji: '" + n.rom.replace(/'/g, "\\'") + "',\n" +
    "    meaningPt: '" + n.m.replace(/'/g, "\\'") + "',\n" +
    "    category: '" + n.cat + "',\n" +
    "    jlpt: 'N5',\n" +
    "    categoryLabelPt: '" + n.catLabel + "',\n" +
    "    exampleSentence: {\n" +
    "      jp: '" + ex.jp + "',\n" +
    "      reading: '" + ex.r.replace(/'/g, "\\'") + "',\n" +
    "      romaji: '" + safeRom + "',\n" +
    "      meaningPt: '" + safePt + "'\n" +
    "    }\n" +
    "  }";
}).join(',\n');

fileContent = fileContent.replace(
  /export const VOCAB_N5: VocabItem\[\] = \[/,
  "export const VOCAB_N5: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 20 N5 Verbs to vocabN5.ts successfully!');
