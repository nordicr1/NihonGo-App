import fs from 'fs';
import path from 'path';

const nouns = [
  { w: '明け方', r: 'あけがた', rom: 'akegata', m: 'amanhecer; madrugada' },
  { w: '足跡', r: 'あしあと', rom: 'ashiato', m: 'pegadas' },
  { w: '売買', r: 'ばいばい', rom: 'baibai', m: 'comércio; compra e venda' },
  { w: '売店', r: 'ばいてん', rom: 'baiten', m: 'quiosque; barraca' },
  { w: '募集', r: 'ぼしゅう', rom: 'boshuu', m: 'recrutamento' },
  { w: '長男', r: 'ちょうなん', rom: 'chounan', m: 'filho mais velho' },
  { w: '楕円', r: 'だえん', rom: 'daen', m: 'elipse; formato oval' },
  { w: '大学院', r: 'だいがくいん', rom: 'daigakuin', m: 'pós-graduação' },
  { w: '出入口', r: 'でいりぐち', rom: 'deiriguchi', m: 'entrada e saída' },
  { w: '宴会', r: 'えんかい', rom: 'enkai', m: 'banquete; festa' },
  { w: '円周', r: 'えんしゅう', rom: 'enshuu', m: 'circunferência' },
  { w: '遠足', r: 'えんそく', rom: 'ensoku', m: 'excursão; passeio' },
  { w: '学科', r: 'がっか', rom: 'gakka', m: 'curso de estudo; departamento escolar' },
  { w: '学会', r: 'がっかい', rom: 'gakkai', m: 'sociedade acadêmica; conferência acadêmica' },
  { w: '学力', r: 'がくりょく', rom: 'gakuryoku', m: 'capacidade acadêmica; conhecimento' },
  { w: '外科', r: 'げか', rom: 'geka', m: 'cirurgia; departamento de cirurgia' },
  { w: '花火', r: 'はなび', rom: 'hanabi', m: 'fogos de artifício' },
  { w: '半径', r: 'はんけい', rom: 'hankei', m: 'raio (medida)' },
  { w: '半島', r: 'はんとう', rom: 'hantou', m: 'península' },
  { w: '発売', r: 'はつばい', rom: 'hatsubai', m: 'lançamento; início das vendas' },
  { w: '早口', r: 'はやぐち', rom: 'hayaguchi', m: 'falar rápido' },
  { w: '昼寝', r: 'ひるね', rom: 'hirune', m: 'soneca; sesta' },
  { w: '意地悪', r: 'いじわる', rom: 'ijiwaru', m: 'malicioso; maldoso' },
  { w: '移転', r: 'いてん', rom: 'iten', m: 'mudança; realocação' },
  { w: '寺院', r: 'じいん', rom: 'ji\'in', m: 'templo budista; construção religiosa' },
  { w: '人文科学', r: 'じんぶんかがく', rom: 'jinbunkagaku', m: 'ciências humanas' },
  { w: '自習', r: 'じしゅう', rom: 'jishuu', m: 'autoestudo' },
  { w: '時速', r: 'じそく', rom: 'jisoku', m: 'velocidade (por hora)' },
  { w: '実習', r: 'じっしゅう', rom: 'jisshuu', m: 'treinamento prático; aula prática' },
  { w: '過半数', r: 'かはんすう', rom: 'kahansuu', m: 'maioria (mais da metade)' },
  { w: '開会', r: 'かいかい', rom: 'kaikai', m: 'abertura (de um evento/reunião)' },
  { w: '会館', r: 'かいかん', rom: 'kaikan', m: 'salão de assembleias' },
  { w: '回転', r: 'かいてん', rom: 'kaiten', m: 'rotação' },
  { w: '加速', r: 'かそく', rom: 'kasoku', m: 'aceleração' },
  { w: '加速度', r: 'かそくど', rom: 'kasokudo', m: 'aceleração (taxa)' },
  { w: '見学', r: 'けんがく', rom: 'kengaku', m: 'visita de estudos; passeio escolar' },
  { w: '国王', r: 'こくおう', rom: 'kokuou', m: 'rei; monarca' },
  { w: '国立', r: 'こくりつ', rom: 'kokuritsu', m: 'nacional (instituição)' },
  { w: '国籍', r: 'こくせき', rom: 'kokuseki', m: 'nacionalidade; cidadania' },
  { w: '校舎', r: 'こうしゃ', rom: 'kousha', m: 'prédio da escola' },
  { w: '校庭', r: 'こうてい', rom: 'koutei', m: 'pátio da escola; campus' },
  { w: '待合室', r: 'まちあいしつ', rom: 'machiaishitsu', m: 'sala de espera' },
  { w: '窓口', r: 'まどぐち', rom: 'madoguchi', m: 'guichê; balcão de atendimento' },
  { w: '毎度', r: 'まいど', rom: 'maido', m: 'toda vez; (obrigado pelo seu) contínuo apoio' },
  { w: '真っ青', r: 'まっさお', rom: 'massao', m: 'azul escuro; muito azul; pálido (de medo/doença)' },
  { w: '真っ白', r: 'まっしろ', rom: 'masshiro', m: 'branco puro; em branco' },
  { w: '名刺', r: 'めいし', rom: 'meishi', m: 'cartão de visitas' },
  { w: '店屋', r: 'みせや', rom: 'miseya', m: 'loja; estabelecimento comercial' },
  { w: '木材', r: 'もくざい', rom: 'mokuzai', m: 'madeira; lenha' },
  { w: '内科', r: 'ないか', rom: 'naika', m: 'medicina interna (clínica médica)' },
  { w: '並木', r: 'なみき', rom: 'namiki', m: 'alameda; fila de árvores' },
  { w: '入社', r: 'にゅうしゃ', rom: 'nyuusha', m: 'ingresso na empresa' },
  { w: '理科', r: 'りか', rom: 'rika', m: 'ciências (matéria escolar)' },
  { w: '領収', r: 'りょうしゅう', rom: 'ryoushuu', m: 'recebimento (de dinheiro)' },
  { w: '刺身', r: 'さしみ', rom: 'sashimi', m: 'sashimi (peixe cru fatiado)' },
  { w: '青少年', r: 'せいしょうねん', rom: 'seishounen', m: 'juventude; jovens' },
  { w: '赤道', r: 'せきどう', rom: 'sekidou', m: 'equador (linha imaginária)' },
  { w: '社会科学', r: 'しゃかいかがく', rom: 'shakaikagaku', m: 'ciências sociais' },
  { w: '社説', r: 'しゃせつ', rom: 'shasetsu', m: 'editorial (de jornal)' },
  { w: '司会', r: 'しかい', rom: 'shikai', m: 'apresentador; mestre de cerimônias' },
  { w: '新幹線', r: 'しんかんせん', rom: 'shinkansen', m: 'trem-bala (shinkansen)' },
  { w: '白髪', r: 'しらが', rom: 'shiraga', m: 'cabelo branco; cabelo grisalho' },
  { w: '自然科学', r: 'しぜんかがく', rom: 'shizenkagaku', m: 'ciências naturais' },
  { w: '書店', r: 'しょてん', rom: 'shoten', m: 'livraria' },
  { w: '商社', r: 'しょうしゃ', rom: 'shousha', m: 'empresa de comércio; trading' },
  { w: '商店', r: 'しょうてん', rom: 'shouten', m: 'loja; pequeno comércio' },
  { w: '集合', r: 'しゅうごう', rom: 'shuugou', m: 'reunião; agrupamento' },
  { w: '習字', r: 'しゅうじ', rom: 'shuuji', m: 'caligrafia (prática)' },
  { w: '集会', r: 'しゅうかい', rom: 'shuukai', m: 'assembleia; comício' },
  { w: '父母', r: 'ふぼ', rom: 'fubo', m: 'pais (pai e mãe)' },
  { w: '速力', r: 'そくりょく', rom: 'sokuryoku', m: 'velocidade' },
  { w: '速達', r: 'そくたつ', rom: 'sokutatsu', m: 'entrega expressa (correio)' },
  { w: '足袋', r: 'たび', rom: 'tabi', m: 'tabi (meias japonesas tradicionais)' },
  { w: '特売', r: 'とくばい', rom: 'tokubai', m: 'liquidação; venda especial' },
  { w: '透明', r: 'とうめい', rom: 'toumei', m: 'transparente' },
  { w: '東洋', r: 'とうよう', rom: 'touyou', m: 'Oriente' },
  { w: '売れ行き', r: 'うれゆき', rom: 'ureyuki', m: 'vendas; demanda' },
  { w: '売上', r: 'うりあげ', rom: 'uriage', m: 'faturamento; receita de vendas' },
  { w: '売り切れ', r: 'うりきれ', rom: 'urikire', m: 'esgotado (vendas)' },
  { w: '洋品店', r: 'ようひんてん', rom: 'youhinten', m: 'loja de roupas (estilo ocidental)' },
  { w: '輸血', r: 'ゆけつ', rom: 'yuketsu', m: 'transfusão de sangue' },
  { w: '輸送', r: 'ゆそう', rom: 'yusou', m: 'transporte' },
  { w: '材木', r: 'ざいもく', rom: 'zaimoku', m: 'madeira; lenha (para construção)' }
];

const examples = {
  '明け方': { jp: '明け方に雨が降りました。', r: 'あけがとに あめが ふりました。', rom: 'akegata ni ame ga furimashita.', pt: 'Choveu ao amanhecer.' },
  '足跡': { jp: '雪の上に足跡が残っています。', r: 'ゆきの うえに あしあとが のこっています。', rom: 'yuki no ue ni ashiato ga nokotteimasu.', pt: 'Há pegadas deixadas na neve.' },
  '売買': { jp: '不動産の売買を行います。', r: 'ふどうさんの ばいばいを おこないます。', rom: 'fudousan no baibai o okonaimasu.', pt: 'Realizo a compra e venda de imóveis.' },
  '売店': { jp: '駅の売店で新聞を買いました。', r: 'えきの ばいてんで しんぶんを かいました。', rom: 'eki no baiten de shinbun o kaimashita.', pt: 'Comprei um jornal no quiosque da estação.' },
  '募集': { jp: '新しい社員を募集しています。', r: 'あたらしい しゃいんを ぼしゅうしています。', rom: 'atarashii shain o boshuushiteimasu.', pt: 'Estamos recrutando novos funcionários.' },
  '長男': { jp: '彼は家の長男です。', r: 'かれは いえの ちょうなんです。', rom: 'kare wa ie no chounan desu.', pt: 'Ele é o filho mais velho da família.' },
  '楕円': { jp: 'このテーブルは楕円の形をしています。', r: 'この テーブルは だえんの かたちを しています。', rom: 'kono teeburu wa daen no katachi o shiteimasu.', pt: 'Esta mesa tem um formato de elipse.' },
  '大学院': { jp: '来年、大学院に進学します。', r: 'らいねん、だいがくいんに しんがくします。', rom: 'rainen, daigakuin ni shingakushimasu.', pt: 'No ano que vem, prosseguirei para a pós-graduação.' },
  '出入口': { jp: '出入口はあちらです。', r: 'でいりぐちは あちらです。', rom: 'deiriguchi wa achira desu.', pt: 'A entrada/saída é por ali.' },
  '宴会': { jp: 'ホテルで宴会が開かれます。', r: 'ホテルで えんかいが ひらかれます。', rom: 'hoteru de enkai ga hirakaremasu.', pt: 'O banquete será realizado no hotel.' },
  '円周': { jp: '円周の長さを計算します。', r: 'えんしゅうの ながさを けいさんします。', rom: 'enshuu no nagasa o keisanshimasu.', pt: 'Calculo o comprimento da circunferência.' },
  '遠足': { jp: '子供たちは遠足に行きました。', r: 'こどもたちは えんそくに いきました。', rom: 'kodomotachi wa ensoku ni ikimashita.', pt: 'As crianças foram para a excursão.' },
  '学科': { jp: '大学でどの学科を選びますか。', r: 'だいがくで どの がっかを えらびますか。', rom: 'daigaku de dono gakka o erabimasu ka.', pt: 'Qual curso/departamento você escolherá na universidade?' },
  '学会': { jp: '来月、東京で学会があります。', r: 'らいげつ、とうきょうで がっかいが あります。', rom: 'raigetsu, toukyou de gakkai ga arimasu.', pt: 'No próximo mês haverá uma conferência acadêmica em Tóquio.' },
  '学力': { jp: '学生の学力が低下しています。', r: 'がくせいの がくりょくが ていかしています。', rom: 'gakusei no gakuryoku ga teikashiteimasu.', pt: 'A capacidade acadêmica dos alunos está caindo.' },
  '外科': { jp: '怪我をして外科で治療を受けました。', r: 'けがをして げかで ちりょうを うけました。', rom: 'kega o shite geka de chiryou o ukemashita.', pt: 'Me machuquei e recebi tratamento na cirurgia.' },
  '花火': { jp: '夏休みに花火大会へ行きました。', r: 'なつやすみに はなびたいかいへ いきました。', rom: 'natsuyasumi ni hanabitaikai e ikimashita.', pt: 'Fui a um festival de fogos de artifício nas férias de verão.' },
  '半径': { jp: 'この円の半径は何センチですか。', r: 'この えんの はんけいは なんセンチですか。', rom: 'kono en no hankei wa nan senchi desu ka.', pt: 'Quantos centímetros tem o raio deste círculo?' },
  '半島': { jp: 'その国は半島に位置しています。', r: 'その くには はんとうに いちしています。', rom: 'sono kuni wa hantou ni ichishiteimasu.', pt: 'Aquele país está localizado em uma península.' },
  '発売': { jp: '新製品が明日発売されます。', r: 'しんせいひんが あした はつばいされます。', rom: 'shinseihin ga ashita hatsubaisaremasu.', pt: 'O novo produto será lançado amanhã.' },
  '早口': { jp: '彼は早口で話すので、聞き取りにくいです。', r: 'かれは はやぐちで はなすので、ききとりにくいです。', rom: 'kare wa hayaguchi de hanasu node, kikitorinikui desu.', pt: 'Ele fala muito rápido, então é difícil de ouvir/entender.' },
  '昼寝': { jp: '疲れたので少し昼寝をします。', r: 'つかれたので すこし ひるねを します。', rom: 'tsukareta node sukoshi hirune o shimasu.', pt: 'Estou cansado, então vou tirar uma soneca.' },
  '意地悪': { jp: '意地悪なことを言わないでください。', r: 'いじわるな ことを いわないでください。', rom: 'ijiwaru na koto o iwanaide kudasai.', pt: 'Por favor, não diga coisas maldosas.' },
  '移転': { jp: '会社が新しいビルに移転します。', r: 'かいしゃが あたらしい ビルに いてんします。', rom: 'kaisha ga atarashii biru ni itenshimasu.', pt: 'A empresa será realocada para um novo prédio.' },
  '寺院': { jp: 'この町には古い寺院がたくさんあります。', r: 'この まちには ふるい じいんが たくさん あります。', rom: 'kono machi ni wa furui jiin ga takusan arimasu.', pt: 'Existem muitos templos antigos nesta cidade.' },
  '人文科学': { jp: '大学で人文科学を研究しています。', r: 'だいがくで じんぶんかがくを けんきゅうしています。', rom: 'daigaku de jinbunkagaku o kenkyuushiteimasu.', pt: 'Pesquiso ciências humanas na universidade.' },
  '自習': { jp: '放課後は図書室で自習します。', r: 'ほうかごは としょしつで じしゅうします。', rom: 'houkago wa toshoshitsu de jishuushimasu.', pt: 'Depois da aula, estudo por conta própria na biblioteca.' },
  '時速': { jp: '車は時速６０キロで走っています。', r: 'くるまは じそく ろくじゅっキロで はしっています。', rom: 'kuruma wa jisoku rokujukkiro de hashitteimasu.', pt: 'O carro está correndo a uma velocidade de 60km por hora.' },
  '実習': { jp: '工場で機械の操作を実習します。', r: 'こうじょうで きかいの そうさを じっしゅうします。', rom: 'koujou de kikai no sousa o jisshuushimasu.', pt: 'Treino a operação das máquinas na fábrica.' },
  '過半数': { jp: '賛成が過半数を超えました。', r: 'さんせいが かはんすうを こえました。', rom: 'sansei ga kahansuu o koemashita.', pt: 'A aprovação ultrapassou a maioria.' },
  '開会': { jp: 'まもなく開会式が始まります。', r: 'まもなく かいかいしきが はじまります。', rom: 'mamonaku kaikaishiki ga hajimarimasu.', pt: 'A cerimônia de abertura começará em breve.' },
  '会館': { jp: '市民会館でコンサートがあります。', r: 'しみんかいかんで コンサートが あります。', rom: 'shiminkaikan de konsaato ga arimasu.', pt: 'Haverá um concerto no salão de assembleias cívico.' },
  '回転': { jp: '地球は太陽の周りを回転しています。', r: 'ちきゅうは たいようの まわりを かいてんしています。', rom: 'chikyuu wa taiyou no mawari o kaitenshiteimasu.', pt: 'A Terra gira (rotaciona) ao redor do Sol.' },
  '加速': { jp: '坂道を下ると自転車が加速します。', r: 'さかみちを くだると じてんしゃが かそくします。', rom: 'sakamichi o kudaru to jitensha ga kasokushimasu.', pt: 'Ao descer a ladeira, a bicicleta acelera.' },
  '加速度': { jp: '物理の授業で加速度を習いました。', r: 'ぶつりの じゅぎょうで かそくどを ならいました。', rom: 'butsuri no jugyou de kasokudo o naraimashita.', pt: 'Aprendi sobre aceleração (taxa) na aula de física.' },
  '見学': { jp: '小学生が工場見学に来ました。', r: 'しょうがくせいが こうじょうけんがくに きました。', rom: 'shougakusei ga koujoukengaku ni kimashita.', pt: 'Os alunos do fundamental vieram fazer uma visita de estudos à fábrica.' },
  '国王': { jp: '国王がスピーチをしました。', r: 'こくおうが スピーチを しました。', rom: 'kokuou ga supiichi o shimashita.', pt: 'O rei fez um discurso.' },
  '国立': { jp: '彼は国立大学を目指しています。', r: 'かれは こくりつだいがくを めざしています。', rom: 'kare wa kokuritsudaigaku o mezashiteimasu.', pt: 'Ele está almejando (entrar em) uma universidade nacional.' },
  '国籍': { jp: '彼の国籍は日本です。', r: 'かれの こくせきは にほんです。', rom: 'kare no kokuseki wa nihon desu.', pt: 'A nacionalidade dele é japonesa.' },
  '校舎': { jp: '新しい校舎が完成しました。', r: 'あたらしい こうしゃが かんせいしました。', rom: 'atarashii kousha ga kanseishimashita.', pt: 'O novo prédio da escola foi concluído.' },
  '校庭': { jp: '昼休みには校庭で遊びます。', r: 'ひるやすみには こうていで あそびます。', rom: 'hiruyasumi ni wa koutei de asobimasu.', pt: 'No recreio (horário de almoço) brincamos no pátio da escola.' },
  '待合室': { jp: '駅の待合室で友達を待ちます。', r: 'えきの まちあいしつで ともだちを まちます。', rom: 'eki no machiaishitsu de tomodachi o machimasu.', pt: 'Espero o meu amigo na sala de espera da estação.' },
  '窓口': { jp: '銀行の窓口で手続きをします。', r: 'ぎんこうの まどぐちで てつづきを します。', rom: 'ginkou no madoguchi de tetsuduki o shimasu.', pt: 'Faço o procedimento no guichê do banco.' },
  '毎度': { jp: '毎度ありがとうございます。', r: 'まいど ありがとうございます。', rom: 'maido arigatou gozaimasu.', pt: 'Muito obrigado, toda vez (pelo seu apoio contínuo).' },
  '真っ青': { jp: '彼の顔は真っ青でした。', r: 'かれの かおは まっさおでした。', rom: 'kare no kao wa massao deshita.', pt: 'O rosto dele estava completamente pálido.' },
  '真っ白': { jp: '雪で景色が真っ白です。', r: 'ゆきで けしきが まっしろです。', rom: 'yuki de keshiki ga masshiro desu.', pt: 'A paisagem está branco puro devido à neve.' },
  '名刺': { jp: '会議の後で名刺を交換しました。', r: 'かいぎの あとで めいしを こうかんしました。', rom: 'kaigi no ato de meishi o koukanshimashita.', pt: 'Trocamos cartões de visita após a reunião.' },
  '店屋': { jp: '近くの店屋で買い物をします。', r: 'ちかくの みせやで かいものを します。', rom: 'chikaku no miseya de kaimono o shimasu.', pt: 'Faço compras na loja comercial próxima.' },
  '木材': { jp: '家を建てるための木材を運んでいます。', r: 'いえを たてるための もくざいを はこんでいます。', rom: 'ie o tateru tame no mokuzai o hakondeimasu.', pt: 'Estão transportando madeira para construir a casa.' },
  '内科': { jp: '風邪をひいたので内科に行きました。', r: 'かぜを ひいたので ないかに いきました。', rom: 'kaze o hiita node naika ni ikimashita.', pt: 'Peguei um resfriado, então fui à clínica médica.' },
  '並木': { jp: '並木の葉が赤くなりました。', r: 'なみきの はが あかくなりました。', rom: 'namiki no ha ga akaku narimashita.', pt: 'As folhas das árvores da alameda ficaram vermelhas.' },
  '入社': { jp: '来月からこの会社に入社します。', r: 'らいげつから この かいしゃに にゅうしゃします。', rom: 'raigetsu kara kono kaisha ni nyuushashimasu.', pt: 'Ingressarei nesta empresa a partir do mês que vem.' },
  '理科': { jp: '子供の頃から理科が好きでした。', r: 'こどもの ころから りかが すきでした。', rom: 'kodomo no koro kara rika ga suki deshita.', pt: 'Desde criança eu gostava de ciências.' },
  '領収': { jp: '代金を領収しました。', r: 'だいきんを りょうしゅうしました。', rom: 'daikin o ryoushuushimashita.', pt: 'Recebi o pagamento (dinheiro).' },
  '刺身': { jp: '新鮮な刺身はとても美味しいです。', r: 'しんせんな さしみは とても おいしいです。', rom: 'shinsen na sashimi wa totemo oishii desu.', pt: 'Sashimi fresco é muito delicioso.' },
  '青少年': { jp: '青少年のためのイベントが開かれます。', r: 'せいしょうねんのための イベントが ひらかれます。', rom: 'seishounen no tame no ibento ga hirakaremasu.', pt: 'Será realizado um evento para os jovens.' },
  '赤道': { jp: '赤道の近くは一年中暑いです。', r: 'せきどうの ちかくは いちねんじゅう あついです。', rom: 'sekidou no chikaku wa ichinenjuu atsui desu.', pt: 'Perto do Equador faz calor o ano todo.' },
  '社会科学': { jp: '大学で社会科学を専攻しています。', r: 'だいがくで しゃかいかがくを せんこうしています。', rom: 'daigaku de shakaikagaku o senkoushiteimasu.', pt: 'Estou cursando ciências sociais na universidade.' },
  '社説': { jp: '新聞の社説を読みます。', r: 'しんぶんの しゃせつを よみます。', rom: 'shinbun no shasetsu o yomimasu.', pt: 'Vou ler o editorial do jornal.' },
  '司会': { jp: '彼が結婚式の司会を務めます。', r: 'かれが けっこんしきの しかいを つとめます。', rom: 'kare ga kekkonshiki no shikai o tsutomemasu.', pt: 'Ele atuará como mestre de cerimônias do casamento.' },
  '新幹線': { jp: '新幹線で大阪へ行きます。', r: 'しんかんせんで おおさかへ いきます。', rom: 'shinkansen de oosaka e ikimasu.', pt: 'Vou para Osaka de trem-bala.' },
  '白髪': { jp: '最近、白髪が増えました。', r: 'さいきん、しらがが ふえました。', rom: 'saikin, shiraga ga fuemashita.', pt: 'Recentemente, aumentaram os meus cabelos brancos.' },
  '自然科学': { jp: '自然科学の分野に興味があります。', r: 'しぜんかがくの ぶんやに きょうみが あります。', rom: 'shizenkagaku no bunya ni kyoumi ga arimasu.', pt: 'Tenho interesse na área de ciências naturais.' },
  '書店': { jp: '駅前の書店で本を買いました。', r: 'えきまえの しょてんで ほんを かいました。', rom: 'ekimae no shoten de hon o kaimashita.', pt: 'Comprei um livro na livraria em frente à estação.' },
  '商社': { jp: '彼は大きな商社で働いています。', r: 'かれは おおきな しょうしゃで はたらいています。', rom: 'kare wa ookina shousha de hataraiteimasu.', pt: 'Ele trabalha em uma grande trading (empresa de comércio).' },
  '商店': { jp: '古い商店が並んでいます。', r: 'ふるい しょうてんが ならんでいます。', rom: 'furui shouten ga narandeimasu.', pt: 'Estão alinhados comércios pequenos e antigos.' },
  '集合': { jp: '朝８時に駅前に集合してください。', r: 'あさ はちじに えきまえに しゅうごうしてください。', rom: 'asa hachiji ni ekimae ni shuugoushite kudasai.', pt: 'Por favor, reúnam-se em frente à estação às 8h da manhã.' },
  '習字': { jp: '子供の頃、習字を習っていました。', r: 'こどもの ころ、しゅうじを ならっていました。', rom: 'kodomo no koro, shuuji o naratteimashita.', pt: 'Quando era criança, aprendia caligrafia.' },
  '集会': { jp: '広場で集会が行われています。', r: 'ひろばで しゅうかいが おこなわれています。', rom: 'hiroba de shuukai ga okonawareteimasu.', pt: 'Está sendo realizado um comício (reunião) na praça.' },
  '父母': { jp: '父母に手紙を書きます。', r: 'ふぼに てがみを かきます。', rom: 'fubo ni tegami o kakimasu.', pt: 'Escrevo uma carta para meus pais.' },
  '速力': { jp: 'この船は素晴らしい速力が出ます。', r: 'この ふねは すばらしい そくりょくが でます。', rom: 'kono fune wa subarashii sokuryoku ga demasu.', pt: 'Este navio atinge uma velocidade maravilhosa.' },
  '速達': { jp: '手紙を速達で送りました。', r: 'てがみを そくたつで おくりました。', rom: 'tegami o sokutatsu de okurimashita.', pt: 'Enviei a carta por entrega expressa.' },
  '足袋': { jp: '着物を着るときは足袋を履きます。', r: 'きものを きる ときは たびを はきます。', rom: 'kimono o kiru toki wa tabi o hakimasu.', pt: 'Ao vestir um quimono, calço meias tabi.' },
  '特売': { jp: 'スーパーで卵の特売をやっています。', r: 'スーパーで たまごの とくばいを やっています。', rom: 'suupaa de tamago no tokubai o yatteimasu.', pt: 'O supermercado está fazendo uma venda especial de ovos.' },
  '透明': { jp: '海の水がとても透明です。', r: 'うみの みずが とても とうめいです。', rom: 'umi no mizu ga totemo toumei desu.', pt: 'A água do mar é muito transparente.' },
  '東洋': { jp: '東洋の歴史を研究しています。', r: 'とうようの れきしを けんきゅうしています。', rom: 'touyou no rekishi o kenkyuushiteimasu.', pt: 'Estou pesquisando a história do Oriente.' },
  '売れ行き': { jp: 'この商品の売れ行きは良いです。', r: 'この しょうひんの うれゆきは いいです。', rom: 'kono shouhin no ureyuki wa ii desu.', pt: 'As vendas deste produto estão boas.' },
  '売上': { jp: '今月の売上が目標を達成しました。', r: 'こんげつの うりあげが もくひょうを たっせいしました。', rom: 'kongetsu no uriage ga mokuhyou o tasseishimashita.', pt: 'O faturamento deste mês atingiu a meta.' },
  '売り切れ': { jp: 'そのチケットはすでに売り切れました。', r: 'その チケットは すでに うりきれました。', rom: 'sono chiketto wa sudeni urikiremashita.', pt: 'Esse ingresso já esgotou.' },
  '洋品店': { jp: '新しい洋品店がオープンしました。', r: 'あたらしい ようひんてんが オープンしました。', rom: 'atarashii youhinten ga oopunshimashita.', pt: 'Uma nova loja de roupas foi aberta.' },
  '輸血': { jp: '手術のために輸血が必要です。', r: 'しゅじゅつのために ゆけつが ひつようです。', rom: 'shujutsu no tame ni yuketsu ga hitsuyou desu.', pt: 'Transfusão de sangue é necessária para a cirurgia.' },
  '輸送': { jp: '商品をトラックで輸送します。', r: 'しょうひんを トラックで ゆそうします。', rom: 'shouhin o torakku de yusoushimasu.', pt: 'As mercadorias são transportadas por caminhão.' },
  '材木': { jp: '材木を運ぶトラックが通りました。', r: 'ざいもくを はこぶ トラックが とおりました。', rom: 'zaimoku o hakobu torakku ga toorimashita.', pt: 'O caminhão que transporta lenha (madeira) passou.' }
};

const filePath = path.join(process.cwd(), 'src/data/vocabN2N1.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const newObjects = nouns.map((n, i) => {
  const ex = examples[n.w] || {
    jp: "Exemplo",
    reading: "...",
    rom: "...",
    pt: "..."
  };
  
  const safePt = ex.pt.replace(/'/g, "\\'");
  const safeRom = ex.rom.replace(/'/g, "\\'");

  return "  {\n" +
    "    id: 'n2_noun_batch1_" + Date.now() + "_" + i + "',\n" +
    "    word: '" + n.w + "',\n" +
    "    reading: '" + n.r.replace(/'/g, "\\'") + "',\n" +
    "    romaji: '" + n.rom.replace(/'/g, "\\'") + "',\n" +
    "    meaningPt: '" + n.m.replace(/'/g, "\\'") + "',\n" +
    "    category: 'substantivo',\n" +
    "    jlpt: 'N2',\n" +
    "    categoryLabelPt: 'Substantivo N2',\n" +
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
console.log('Added 83 N2 Nouns to vocabN2N1.ts successfully!');
