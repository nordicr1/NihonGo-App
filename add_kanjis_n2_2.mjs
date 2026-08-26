import fs from 'fs';
import path from 'path';

const newKanjis = [
  { id: 'k_n2_add2_1', kanji: '粒', onyomi: ['リュウ (ryuu)'], kunyomi: ['つぶ (tsubu)'], meaningPt: 'Grão, Gota, Partícula', strokes: 11, radical: '米 (arroz)', jlpt: 'N2', examples: [ { word: '粒', reading: 'つぶ (tsubu)', meaningPt: 'Grão / Gota' }, { word: '雨粒', reading: 'あまつぶ (amatsubu)', meaningPt: 'Gota de chuva' }, { word: '一粒', reading: 'ひとつぶ (hitotsubu)', meaningPt: 'Um grão' } ] },
  { id: 'k_n2_add2_2', kanji: '留', onyomi: ['リュウ (ryuu)', 'ル (ru)'], kunyomi: ['と.める (to.meru)', 'と.まる (to.maru)'], meaningPt: 'Reter, Ficar, Deter', strokes: 10, radical: '田 (campo de arroz)', jlpt: 'N2', examples: [ { word: '留学', reading: 'りゅうがく (ryuugaku)', meaningPt: 'Estudar no exterior' }, { word: '留守', reading: 'るす (rusu)', meaningPt: 'Ausência (de casa)' }, { word: '留める', reading: 'とめる (tomeru)', meaningPt: 'Deter / Prender / Manter no lugar' } ] },
  { id: 'k_n2_add2_3', kanji: '流', onyomi: ['リュウ (ryuu)', 'ル (ru)'], kunyomi: ['なが.れる (naga.reru)', 'なが.す (naga.su)'], meaningPt: 'Correnteza, Fluir', strokes: 10, radical: '水 (água)', jlpt: 'N2', examples: [ { word: '流行', reading: 'りゅうこう (ryuukou)', meaningPt: 'Moda / Tendência' }, { word: '流れる', reading: 'ながれる (nagareru)', meaningPt: 'Fluir (água, tempo)' }, { word: '交流', reading: 'こうりゅう (kouryuu)', meaningPt: 'Intercâmbio / Troca' } ] },
  { id: 'k_n2_add2_4', kanji: '略', onyomi: ['リャク (ryaku)'], kunyomi: [], meaningPt: 'Abreviação, Omissão', strokes: 11, radical: '田 (campo de arroz)', jlpt: 'N2', examples: [ { word: '省略', reading: 'しょうりゃく (shouryaku)', meaningPt: 'Omissão / Abreviação' }, { word: '戦略', reading: 'せんりゃく (senryaku)', meaningPt: 'Estratégia' }, { word: '略語', reading: 'りゃくご (ryakugo)', meaningPt: 'Abreviação (palavra)' } ] },
  { id: 'k_n2_add2_5', kanji: '率', onyomi: ['ソツ (sotsu)', 'リツ (ritsu)'], kunyomi: ['ひき.いる (hiki.iru)'], meaningPt: 'Taxa, Proporção, Liderar', strokes: 11, radical: '玄 (escuro/profundo)', jlpt: 'N2', examples: [ { word: '確率', reading: 'かくりつ (kakuritsu)', meaningPt: 'Probabilidade' }, { word: '率直', reading: 'そっちょく (socchoku)', meaningPt: 'Franco / Direto' }, { word: '率いる', reading: 'ひきいる (hikiiru)', meaningPt: 'Liderar / Comandar' } ] },
  { id: 'k_n2_add2_6', kanji: '律', onyomi: ['リツ (ritsu)', 'リチ (richi)'], kunyomi: [], meaningPt: 'Lei, Regra, Ritmo', strokes: 9, radical: '彳 (passo/ir)', jlpt: 'N2', examples: [ { word: '法律', reading: 'ほうりつ (houritsu)', meaningPt: 'Lei' }, { word: '規律', reading: 'きりつ (kiritsu)', meaningPt: 'Disciplina / Regra' }, { word: '律儀', reading: 'りちぎ (richigi)', meaningPt: 'Retidão / Honestidade' } ] },
  { id: 'k_n2_add2_7', kanji: '陸', onyomi: ['リク (riku)'], kunyomi: [], meaningPt: 'Terra, Continente', strokes: 11, radical: '阜 (colina)', jlpt: 'N2', examples: [ { word: '大陸', reading: 'たいりく (tairiku)', meaningPt: 'Continente' }, { word: '陸上', reading: 'りくじょう (rikujou)', meaningPt: 'Em terra / Atletismo' }, { word: '着陸', reading: 'ちゃくりく (chakuriku)', meaningPt: 'Pouso (de avião)' } ] },
  { id: 'k_n2_add2_8', kanji: '裏', onyomi: ['リ (ri)'], kunyomi: ['うら (ura)'], meaningPt: 'Trás, Verso', strokes: 13, radical: '衣 (roupa)', jlpt: 'N2', examples: [ { word: '裏', reading: 'うら (ura)', meaningPt: 'Verso / Parte de trás' }, { word: '裏口', reading: 'うらぐち (uraguchi)', meaningPt: 'Porta dos fundos' }, { word: '裏切る', reading: 'うらぎる (uragiru)', meaningPt: 'Trair' } ] },
  { id: 'k_n2_add2_9', kanji: '利', onyomi: ['リ (ri)'], kunyomi: ['き.く (ki.ku)'], meaningPt: 'Lucro, Vantagem, Eficácia', strokes: 7, radical: '刀 (espada)', jlpt: 'N2', examples: [ { word: '便利', reading: 'べんり (benri)', meaningPt: 'Conveniente / Útil' }, { word: '利益', reading: 'りえき (rieki)', meaningPt: 'Lucro / Benefício' }, { word: '利用', reading: 'りよう (riyou)', meaningPt: 'Uso / Utilização' } ] },
  { id: 'k_n2_add2_10', kanji: '卵', onyomi: ['ラン (ran)'], kunyomi: ['たまご (tamago)'], meaningPt: 'Ovo', strokes: 7, radical: '卩 (selo)', jlpt: 'N2', examples: [ { word: '卵', reading: 'たまご (tamago)', meaningPt: 'Ovo' }, { word: '卵焼き', reading: 'たまごやき (tamagoyaki)', meaningPt: 'Omelete japonês' }, { word: '産卵', reading: 'さんらん (sanran)', meaningPt: 'Desova / Postura de ovos' } ] },
  { id: 'k_n2_add2_11', kanji: '乱', onyomi: ['ラン (ran)'], kunyomi: ['みだ.れる (mida.reru)', 'みだ.す (mida.su)'], meaningPt: 'Desordem, Distúrbio, Confusão', strokes: 7, radical: '乙 (segundo/curvo)', jlpt: 'N2', examples: [ { word: '混乱', reading: 'こんらん (konran)', meaningPt: 'Confusão / Desordem' }, { word: '乱れる', reading: 'みだれる (midareru)', meaningPt: 'Estar desordenado / Bagunçado' }, { word: '反乱', reading: 'はんらん (hanran)', meaningPt: 'Rebelião' } ] },
  { id: 'k_n2_add2_12', kanji: '落', onyomi: ['ラク (raku)'], kunyomi: ['お.ちる (o.chiru)', 'お.とす (o.tosu)'], meaningPt: 'Cair, Derrubar', strokes: 12, radical: '艸 (grama)', jlpt: 'N2', examples: [ { word: '落ちる', reading: 'おちる (ochiru)', meaningPt: 'Cair (algo)' }, { word: '落とす', reading: 'おとす (otosu)', meaningPt: 'Derrubar (algo)' }, { word: '落ち着く', reading: 'おちつく (ochitsuku)', meaningPt: 'Acalmar-se / Estabilizar' } ] },
  { id: 'k_n2_add2_13', kanji: '絡', onyomi: ['ラク (raku)'], kunyomi: ['から.む (kara.mu)', 'から.まる (kara.maru)'], meaningPt: 'Emaranhar, Envolver-se', strokes: 12, radical: '糸 (fio)', jlpt: 'N2', examples: [ { word: '連絡', reading: 'れんらく (renraku)', meaningPt: 'Contato / Comunicação' }, { word: '絡む', reading: 'からむ (karamu)', meaningPt: 'Envolver-se / Emaranhar-se' }, { word: '短絡', reading: 'たんらく (tanraku)', meaningPt: 'Curto-circuito / Conclusão precipitada' } ] },
  { id: 'k_n2_add2_14', kanji: '頼', onyomi: ['ライ (rai)'], kunyomi: ['たの.む (tano.mu)', 'たよ.る (tayo.ru)'], meaningPt: 'Pedir, Confiar', strokes: 16, radical: '頁 (página/cabeça)', jlpt: 'N2', examples: [ { word: '頼む', reading: 'たのむ (tanomu)', meaningPt: 'Pedir (um favor)' }, { word: '頼る', reading: 'たよる (tayoru)', meaningPt: 'Confiar em (alguém) / Depender' }, { word: '信頼', reading: 'しんらい (shinrai)', meaningPt: 'Confiança' } ] },
  { id: 'k_n2_add2_15', kanji: '翌', onyomi: ['ヨク (yoku)'], kunyomi: [], meaningPt: 'O seguinte (dia, mês, ano)', strokes: 11, radical: '羽 (pena)', jlpt: 'N2', examples: [ { word: '翌日', reading: 'よくじつ (yokujitsu)', meaningPt: 'No dia seguinte' }, { word: '翌年', reading: 'よくねん (yokunen)', meaningPt: 'No ano seguinte' }, { word: '翌朝', reading: 'よくあさ (yokuasa)', meaningPt: 'Na manhã seguinte' } ] },
  { id: 'k_n2_add2_16', kanji: '浴', onyomi: ['ヨク (yoku)'], kunyomi: ['あ.びる (a.biru)', 'あ.びせる (a.biseru)'], meaningPt: 'Banhar-se', strokes: 10, radical: '水 (água)', jlpt: 'N2', examples: [ { word: '浴びる', reading: 'あびる (abiru)', meaningPt: 'Tomar banho (chuveiro) / Banhar-se' }, { word: '入浴', reading: 'にゅうよく (nyuuyoku)', meaningPt: 'Tomar banho (banheira)' }, { word: '海水浴', reading: 'かいすいよく (kaisuiyoku)', meaningPt: 'Banho de mar' } ] },
  { id: 'k_n2_add2_17', kanji: '欲', onyomi: ['ヨク (yoku)'], kunyomi: ['ほっ.する (hos.suru)', 'ほ.しい (ho.shii)'], meaningPt: 'Querer, Desejo', strokes: 11, radical: '欠 (falta/bocejar)', jlpt: 'N2', examples: [ { word: '欲しい', reading: 'ほしい (hoshii)', meaningPt: 'Querer (algo)' }, { word: '食欲', reading: 'しょくよく (shokuyoku)', meaningPt: 'Apetite' }, { word: '欲望', reading: 'よくぼう (yokubou)', meaningPt: 'Desejo / Ambição' } ] },
  { id: 'k_n2_add2_18', kanji: '陽', onyomi: ['ヨウ (you)'], kunyomi: ['ひ (hi)'], meaningPt: 'Sol, Positivo', strokes: 12, radical: '阜 (colina)', jlpt: 'N2', examples: [ { word: '太陽', reading: 'たいよう (taiyou)', meaningPt: 'Sol' }, { word: '陽気', reading: 'ようき (youki)', meaningPt: 'Alegre / Jovial / Clima bom' }, { word: '陽性', reading: 'ようせい (yousei)', meaningPt: 'Positivo (exame médico)' } ] },
  { id: 'k_n2_add2_19', kanji: '踊', onyomi: ['ヨウ (you)'], kunyomi: ['おど.る (odo.ru)', 'おど.り (odo.ri)'], meaningPt: 'Dançar, Pular', strokes: 14, radical: '足 (pé/perna)', jlpt: 'N2', examples: [ { word: '踊る', reading: 'おどる (odoru)', meaningPt: 'Dançar' }, { word: '踊り', reading: 'おどり (odori)', meaningPt: 'Dança' }, { word: '舞踊', reading: 'ぶよう (buyou)', meaningPt: 'Dança clássica' } ] },
  { id: 'k_n2_add2_20', kanji: '要', onyomi: ['ヨウ (you)'], kunyomi: ['い.る (i.ru)'], meaningPt: 'Necessário, Essencial', strokes: 9, radical: '襾 (cobrir)', jlpt: 'N2', examples: [ { word: '必要', reading: 'ひつよう (hitsuyou)', meaningPt: 'Necessário' }, { word: '要る', reading: 'いる (iru)', meaningPt: 'Precisar' }, { word: '重要', reading: 'じゅうよう (juuyou)', meaningPt: 'Importante' } ] },
  { id: 'k_n2_add2_21', kanji: '葉', onyomi: ['ヨウ (you)'], kunyomi: ['は (ha)'], meaningPt: 'Folha', strokes: 12, radical: '艸 (grama)', jlpt: 'N2', examples: [ { word: '言葉', reading: 'ことば (kotoba)', meaningPt: 'Palavra / Idioma' }, { word: '葉っぱ', reading: 'はっぱ (happa)', meaningPt: 'Folha (de planta)' }, { word: '紅葉', reading: 'こうよう (kouyou)', meaningPt: 'Folhas de outono' } ] },
  { id: 'k_n2_add2_22', kanji: '溶', onyomi: ['ヨウ (you)'], kunyomi: ['と.ける (to.keru)', 'と.かす (to.kasu)', 'と.く (to.ku)'], meaningPt: 'Derreter, Dissolver', strokes: 13, radical: '水 (água)', jlpt: 'N2', examples: [ { word: '溶ける', reading: 'とける (tokeru)', meaningPt: 'Derreter (gelo) / Dissolver-se' }, { word: '溶かす', reading: 'とかす (tokasu)', meaningPt: 'Derreter (algo) / Dissolver (algo)' }, { word: '水溶性', reading: 'すいようせい (suiyousei)', meaningPt: 'Solúvel em água' } ] },
  { id: 'k_n2_add2_23', kanji: '様', onyomi: ['ヨウ (you)'], kunyomi: ['さま (sama)'], meaningPt: 'Maneira, Situação, Sr./Sra.', strokes: 14, radical: '木 (árvore)', jlpt: 'N2', examples: [ { word: '様々', reading: 'さまざま (samazama)', meaningPt: 'Vários / Diversos' }, { word: 'お客様', reading: 'おきゃくさま (okyakusama)', meaningPt: 'Cliente / Convidado' }, { word: '様子', reading: 'ようす (yousu)', meaningPt: 'Estado / Aparência' } ] },
  { id: 'k_n2_add2_24', kanji: '容', onyomi: ['ヨウ (you)'], kunyomi: [], meaningPt: 'Conteúdo, Aparência', strokes: 10, radical: '宀 (telhado)', jlpt: 'N2', examples: [ { word: '内容', reading: 'ないよう (naiyou)', meaningPt: 'Conteúdo' }, { word: '美容院', reading: 'びよういん (biyouin)', meaningPt: 'Salão de beleza' }, { word: '容易', reading: 'ようい (youi)', meaningPt: 'Fácil / Simples' } ] },
  { id: 'k_n2_add2_25', kanji: '幼', onyomi: ['ヨウ (you)'], kunyomi: ['おさな.い (osana.i)'], meaningPt: 'Infância, Imaturo', strokes: 5, radical: '幺 (curto/pequeno)', jlpt: 'N2', examples: [ { word: '幼い', reading: 'おさない (osanai)', meaningPt: 'Muito jovem / Imaturo' }, { word: '幼稚園', reading: 'ようちえん (youchien)', meaningPt: 'Jardim de infância' }, { word: '幼児', reading: 'ようじ (youji)', meaningPt: 'Criança pequena / Bebê' } ] },
  { id: 'k_n2_add2_26', kanji: '預', onyomi: ['ヨ (yo)'], kunyomi: ['あず.ける (azu.keru)', 'あず.かる (azu.karu)'], meaningPt: 'Deixar a cargo, Guardar', strokes: 13, radical: '頁 (página/cabeça)', jlpt: 'N2', examples: [ { word: '預ける', reading: 'あずける (azukeru)', meaningPt: 'Deixar aos cuidados de / Depositar' }, { word: '預かる', reading: 'あずかる (azukaru)', meaningPt: 'Cuidar de (algo/alguém)' }, { word: '預金', reading: 'よきん (yokin)', meaningPt: 'Depósito bancário' } ] },
  { id: 'k_n2_add2_27', kanji: '与', onyomi: ['ヨ (yo)'], kunyomi: ['あた.える (ata.eru)'], meaningPt: 'Dar, Conceder, Prover', strokes: 3, radical: '一 (um)', jlpt: 'N2', examples: [ { word: '与える', reading: 'あたえる (ataeru)', meaningPt: 'Dar / Conceder (impacto, prêmio)' }, { word: '給与', reading: 'きゅうよ (kyuuyo)', meaningPt: 'Salário / Pagamento' }, { word: '関与', reading: 'かんよ (kanyo)', meaningPt: 'Participação / Envolvimento' } ] },
  { id: 'k_n2_add2_28', kanji: '余', onyomi: ['ヨ (yo)'], kunyomi: ['あま.る (ama.ru)', 'あま.す (ama.su)'], meaningPt: 'Excesso, Sobra', strokes: 7, radical: '人 (pessoa)', jlpt: 'N2', examples: [ { word: '余る', reading: 'あまる (amaru)', meaningPt: 'Sobrar' }, { word: '余裕', reading: 'よゆう (yoyuu)', meaningPt: 'Folga / Margem (de tempo ou dinheiro)' }, { word: '余分', reading: 'よぶん (yobun)', meaningPt: 'Extra / Excedente' } ] },
  { id: 'k_n2_add2_29', kanji: '予', onyomi: ['ヨ (yo)'], kunyomi: ['あらかじ.め (arakaji.me)'], meaningPt: 'Antecipadamente, Prévio', strokes: 4, radical: '亅 (gancho)', jlpt: 'N2', examples: [ { word: '予定', reading: 'よてい (yotei)', meaningPt: 'Plano / Programação' }, { word: '予約', reading: 'よやく (yoyaku)', meaningPt: 'Reserva' }, { word: '予算', reading: 'よさん (yosan)', meaningPt: 'Orçamento' } ] },
  { id: 'k_n2_add2_30', kanji: '郵', onyomi: ['ユウ (yuu)'], kunyomi: [], meaningPt: 'Correio', strokes: 11, radical: '邑 (vila/cidade)', jlpt: 'N2', examples: [ { word: '郵便局', reading: 'ゆうびんきょく (yuubinkyoku)', meaningPt: 'Agência de correios' }, { word: '郵便', reading: 'ゆうびん (yuubin)', meaningPt: 'Correio (serviço)' }, { word: '郵送', reading: 'ゆうそう (yuusou)', meaningPt: 'Envio pelo correio' } ] },
  { id: 'k_n2_add2_31', kanji: '遊', onyomi: ['ユウ (yuu)', 'ユ (yu)'], kunyomi: ['あそ.ぶ (aso.bu)'], meaningPt: 'Brincar, Jogar', strokes: 12, radical: '辵 (caminhar)', jlpt: 'N2', examples: [ { word: '遊ぶ', reading: 'あそぶ (asobu)', meaningPt: 'Brincar / Divertir-se' }, { word: '遊園地', reading: 'ゆうえんち (yuuenchi)', meaningPt: 'Parque de diversões' }, { word: '遊び', reading: 'あそび (asobi)', meaningPt: 'Brincadeira / Jogo' } ] },
  { id: 'k_n2_add2_32', kanji: '由', onyomi: ['ユウ (yuu)', 'ユ (yu)', 'ユイ (yui)'], kunyomi: ['よし (yoshi)'], meaningPt: 'Razão, Origem', strokes: 5, radical: '田 (campo de arroz)', jlpt: 'N2', examples: [ { word: '自由', reading: 'じゆう (jiyuu)', meaningPt: 'Liberdade' }, { word: '理由', reading: 'りゆう (riyuu)', meaningPt: 'Motivo / Razão' }, { word: '経由', reading: 'けいゆ (keiyu)', meaningPt: 'Via / Passando por (ex: voo)' } ] }
];

const dataPathN2 = path.join(process.cwd(), 'src/data/kanjiN2N1.ts');

let n2Content = fs.readFileSync(dataPathN2, 'utf-8');

let addedCount = 0;
let blocksStr = '';

for (const k of newKanjis) {
  if (n2Content.includes(`kanji: '${k.kanji}'`)) {
    console.log(`Skipping duplicate: ${k.kanji}`);
    continue;
  }

  const objStr = `  {
    id: '${k.id}',
    kanji: '${k.kanji}',
    onyomi: ${JSON.stringify(k.onyomi)},
    kunyomi: ${JSON.stringify(k.kunyomi)},
    meaningPt: '${k.meaningPt}',
    strokes: ${k.strokes},
    radical: '${k.radical}',
    jlpt: '${k.jlpt}',
    examples: ${JSON.stringify(k.examples, null, 6).replace(/"([^"]+)":/g, '$1:')}
  }`;

  blocksStr += (addedCount === 0 ? '' : ',\n') + objStr;
  addedCount++;
}

if (addedCount > 0) {
  const lastBracketIndex = n2Content.lastIndexOf('];');
  n2Content = n2Content.slice(0, lastBracketIndex) + ',\n' + blocksStr + '\n];\n';
  fs.writeFileSync(dataPathN2, n2Content, 'utf-8');
}

console.log(`Successfully added ${addedCount} new Kanjis to N2!`);
