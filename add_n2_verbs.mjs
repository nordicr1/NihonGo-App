import fs from 'fs';
import path from 'path';

const items = [
  { w: '売買する', r: 'ばいばいする', rom: 'baibaisuru', m: 'comerciar; comprar e vender', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '募集する', r: 'ぼしゅうする', rom: 'boshuusuru', m: 'recrutar; convidar inscrições', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '遠足', r: 'えんそく', rom: 'ensoku', m: 'excursão; passeio escolar', cat: 'substantivo', catLabel: 'Substantivo N2' },
  { w: '発売する', r: 'はつばいする', rom: 'hatsubaisuru', m: 'lançar à venda; colocar à venda', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '外れる', r: 'はずれる', rom: 'hazureru', m: 'desprender-se; errar (alvo); sair (do lugar)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '閉会する', r: 'へいかいする', rom: 'heikaisuru', m: 'encerrar a sessão/reunião', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '昼寝する', r: 'ひるねする', rom: 'hirunesuru', m: 'tirar uma soneca', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '意地悪する', r: 'いじわるする', rom: 'ijiwarusuru', m: 'fazer maldade; ser maldoso', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '移転する', r: 'いてんする', rom: 'itensuru', m: 'mudar-se (empresa/sede); transferir', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '自習する', r: 'じしゅうする', rom: 'jishuusuru', m: 'estudar sozinho', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '実習する', r: 'じっしゅうする', rom: 'jisshuusuru', m: 'fazer aula prática; treinar na prática', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '開会する', r: 'かいかいする', rom: 'kaikaisuru', m: 'abrir a sessão/evento', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '回転する', r: 'かいてんする', rom: 'kaitensuru', m: 'girar; rotacionar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '加速する', r: 'かそくする', rom: 'kasokusuru', m: 'acelerar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '見学する', r: 'けんがくする', rom: 'kengakusuru', m: 'visitar para estudo; observar', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '転がる', r: 'ころがる', rom: 'korogaru', m: 'rolar; tombar (intransitivo)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '転がす', r: 'ころがす', rom: 'korogasu', m: 'rolar algo (transitivo)', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '待ち合わせる', r: 'まちあわせる', rom: 'machiawaseru', m: 'encontrar-se (com horário e local marcados)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '入社する', r: 'にゅうしゃする', rom: 'nyuushasuru', m: 'ingressar em uma empresa', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '押さえる', r: 'おさえる', rom: 'osaeru', m: 'pressionar; segurar firmemente', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '領収する', r: 'りょうしゅうする', rom: 'ryoushuusuru', m: 'receber (pagamento/dinheiro)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '刺さる', r: 'ささる', rom: 'sasaru', m: 'espetar-se; fincar-se', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '刺す', r: 'さす', rom: 'sasu', m: 'espetar; apunhalar; picar', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '司会する', r: 'しかいする', rom: 'shikaisuru', m: 'apresentar; ser o mestre de cerimônias', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '集合する', r: 'しゅうごうする', rom: 'shuugousuru', m: 'reunir-se; concentrar-se (grupo)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '集会', r: 'しゅうかい', rom: 'shuukai', m: 'assembleia; reunião; encontro', cat: 'substantivo', catLabel: 'Substantivo N2' },
  { w: '速達', r: 'そくたつ', rom: 'sokutatsu', m: 'entrega expressa (correio)', cat: 'substantivo', catLabel: 'Substantivo N2' },
  { w: '足る', r: 'たる', rom: 'taru', m: 'bastar; ser suficiente; ser digno de', cat: 'verbo_godan', catLabel: 'Verbo Tipo 1 (Godan)' },
  { w: '特売する', r: 'とくばいする', rom: 'tokubaisuru', m: 'fazer venda especial/promoção', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '売り切れる', r: 'うりきれる', rom: 'urikireru', m: 'esgotar-se (vendas)', cat: 'verbo_ichidan', catLabel: 'Verbo Tipo 2 (Ichidan)' },
  { w: '輸血する', r: 'ゆけつする', rom: 'yuketsusuru', m: 'fazer transfusão de sangue', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' },
  { w: '輸送する', r: 'ゆそうする', rom: 'yusousuru', m: 'transportar (mercadorias/pessoas)', cat: 'verbo_irregular', catLabel: 'Verbo Irregular' }
];

const examples = {
  '売買する': { jp: '土地を売買します。', r: 'とちを ばいばいします。', rom: 'tochi o baibaishimasu.', pt: 'Compro e vendo terrenos.' },
  '募集する': { jp: '新しい社員を募集しています。', r: 'あたらしい しゃいんを ぼしゅうしています。', rom: 'atarashii shain o boshuushiteimasu.', pt: 'Estamos recrutando novos funcionários.' },
  '遠足': { jp: '明日は学校の遠足です。', r: 'あしたは がっこうの えんそくです。', rom: 'ashita wa gakkou no ensoku desu.', pt: 'Amanhã é a excursão da escola.' },
  '発売する': { jp: '新しいゲームが発売されました。', r: 'あたらしい ゲームが はつばいされました。', rom: 'atarashii geemu ga hatsubaisaremashita.', pt: 'Um novo jogo foi lançado.' },
  '外れる': { jp: 'ボタンが外れました。', r: 'ボタンが はずれました。', rom: 'botan ga hazuremashita.', pt: 'O botão se desprendeu.' },
  '閉会する': { jp: 'これで会議を閉会します。', r: 'これで かいぎを へいかいします。', rom: 'kore de kaigi o heikaishimasu.', pt: 'Com isso, encerramos a reunião.' },
  '昼寝する': { jp: '日曜日はよく昼寝します。', r: 'にちようびは よく ひるねします。', rom: 'nichiyoubi wa yoku hiruneshimasu.', pt: 'Aos domingos costumo tirar uma soneca.' },
  '意地悪する': { jp: '弟に意地悪をしてはいけません。', r: 'おとうとに いじわるを しては いけません。', rom: 'otouto ni ijiwaru o shitewa ikemasen.', pt: 'Não se deve fazer maldade com o irmão mais novo.' },
  '移転する': { jp: '会社が新しいビルに移転しました。', r: 'かいしゃが あたらしい ビルに いてんしました。', rom: 'kaisha ga atarashii biru ni itenshimashita.', pt: 'A empresa mudou-se para um prédio novo.' },
  '自習する': { jp: '図書館で自習します。', r: 'としょかんで じしゅうします。', rom: 'toshokan de jishuushimasu.', pt: 'Vou estudar sozinho na biblioteca.' },
  '実習する': { jp: '病院で実習します。', r: 'びょういんで じっしゅうします。', rom: 'byouin de jisshuushimasu.', pt: 'Farei treinamento prático no hospital.' },
  '開会する': { jp: '午後一時から開会します。', r: 'ごご いちじから かいかいします。', rom: 'gogo ichiji kara kaikaishimasu.', pt: 'A abertura será a partir da uma hora da tarde.' },
  '回転する': { jp: '地球は回転しています。', r: 'ちきゅうは かいてんしています。', rom: 'chikyuu wa kaitenshiteimasu.', pt: 'A Terra está rotacionando.' },
  '加速する': { jp: '車が加速します。', r: 'くるまが かそくします。', rom: 'kuruma ga kasokushimasu.', pt: 'O carro acelera.' },
  '見学する': { jp: '工場を見学します。', r: 'こうじょうを けんがくします。', rom: 'koujou o kengakushimasu.', pt: 'Faremos uma visita de observação à fábrica.' },
  '転がる': { jp: 'ボールが転がります。', r: 'ボールが ころがります。', rom: 'booru ga korogarimasu.', pt: 'A bola rola.' },
  '転がす': { jp: '雪だるまを作るために雪を転がします。', r: 'ゆきだるまを つくる ために ゆきを ころがします。', rom: 'yukidaruma o tsukuru tame ni yuki o korogasimasu.', pt: 'Rolo a neve para fazer um boneco de neve.' },
  '待ち合わせる': { jp: '駅前で友達と待ち合わせました。', r: 'えきまえで ともだちと まちあわせました。', rom: 'ekimae de tomodachi to machiawasemashita.', pt: 'Encontrei-me com um amigo em frente à estação (combinado previamente).' },
  '入社する': { jp: '四月に会社に入社します。', r: 'しがつに かいしゃに にゅうしゃします。', rom: 'shigatsu ni kaisha ni nyuushashimasu.', pt: 'Ingressarei na empresa em abril.' },
  '押さえる': { jp: 'ドアを押さえてください。', r: 'ドアを おさえてください。', rom: 'doa o osaete kudasai.', pt: 'Por favor, segure a porta.' },
  '領収する': { jp: '確かにお金を領収しました。', r: 'たしかに おかねを りょうしゅうしました。', rom: 'tashika ni okane o ryoushuushimashita.', pt: 'Certamente recebi o dinheiro.' },
  '刺さる': { jp: '指にトゲが刺さりました。', r: 'ゆびに トゲが ささりました。', rom: 'yubi ni toge ga sasarimashita.', pt: 'Um espinho espetou no meu dedo.' },
  '刺す': { jp: '虫が腕を刺しました。', r: 'むしが うでを さしました。', rom: 'mushi ga ude o sashimashita.', pt: 'O inseto picou meu braço.' },
  '司会する': { jp: '結婚式で司会をします。', r: 'けっこんしきで しかいを します。', rom: 'kekkonshiki de shikai o shimasu.', pt: 'Serei o mestre de cerimônias no casamento.' },
  '集合する': { jp: '朝八時に学校へ集合してください。', r: 'あさ はちじに がっこうへ しゅうごうしてください。', rom: 'asa hachiji ni gakkou e shuugoushite kudasai.', pt: 'Por favor, reúnam-se na escola às oito da manhã.' },
  '集会': { jp: '広場で集会が行われます。', r: 'ひろばで しゅうかいが おこなわれます。', rom: 'hiroba de shuukai ga okonawaremasu.', pt: 'Uma assembleia será realizada na praça.' },
  '速達': { jp: '手紙を速達で送ります。', r: 'てがみを そくたつで おくります。', rom: 'tegami o sokutatsu de okurimasu.', pt: 'Envio a carta por entrega expressa.' },
  '足る': { jp: '彼は信頼に足る人物です。', r: 'かれは しんらいに たる じんぶつです。', rom: 'kare wa shinrai ni taru jinbutsu desu.', pt: 'Ele é uma pessoa digna de confiança.' },
  '特売する': { jp: 'スーパーで卵を特売しています。', r: 'スーパーで たまごを とくばいしています。', rom: 'suupaa de tamago o tokubaishiteimasu.', pt: 'Estão fazendo uma venda especial de ovos no supermercado.' },
  '売り切れる': { jp: 'チケットはすぐに売り切れました。', r: 'チケットは すぐに うりきれました。', rom: 'chiketto wa sugu ni urikiremashita.', pt: 'Os ingressos esgotaram-se rapidamente.' },
  '輸血する': { jp: '患者に輸血しました。', r: 'かんじゃに ゆけつしました。', rom: 'kanja ni yuketsushimashita.', pt: 'Fizeram transfusão de sangue no paciente.' },
  '輸送する': { jp: 'トラックで荷物を輸送します。', r: 'トラックで にもつを ゆそうします。', rom: 'torakku de nimotsu o yusoushimasu.', pt: 'Transportaremos as cargas com o caminhão.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN2N1.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = items.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");
  const safeRom = ex.rom.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n2_verb_batch1_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r.replace(/'/g, "\\'") + "',\n" +
    "    romaji: '" + n.rom.replace(/'/g, "\\'") + "',\n" +
    "    meaningPt: '" + n.m.replace(/'/g, "\\'") + "',\n" +
    "    category: '" + n.cat + "',\n" +
    "    jlpt: 'N2',\n" +
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
  /export const VOCAB_N2_N1: VocabItem\[\] = \[/,
  "export const VOCAB_N2_N1: VocabItem[] = [\n" + newObjects + ",\n"
);

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log('Added 32 N2 Verbs to vocabN2N1.ts successfully!');
