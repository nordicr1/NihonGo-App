import fs from 'fs';
import path from 'path';

const newKanjis = [
  {
    id: 'k_n3_add_1',
    kanji: '腕',
    onyomi: ['ワン (wan)'],
    kunyomi: ['うで (ude)'],
    meaningPt: 'Braço, Habilidade',
    strokes: 12,
    radical: '月 (carne/lua)',
    jlpt: 'N3',
    examples: [
      { word: '腕', reading: 'うで (ude)', meaningPt: 'Braço' },
      { word: '腕時計', reading: 'うでどけい (udedokei)', meaningPt: 'Relógio de pulso' },
      { word: '腕前', reading: 'うでまえ (udemae)', meaningPt: 'Habilidade / Capacidade' }
    ]
  },
  {
    id: 'k_n3_add_2',
    kanji: '湾',
    onyomi: ['ワン (wan)'],
    kunyomi: ['いりえ (irie)'],
    meaningPt: 'Baía, Golfo',
    strokes: 12,
    radical: '水 (água)',
    jlpt: 'N3',
    examples: [
      { word: '湾', reading: 'わん (wan)', meaningPt: 'Baía' },
      { word: '台湾', reading: 'たいわん (taiwan)', meaningPt: 'Taiwan' },
      { word: '東京湾', reading: 'とうきょうわん (toukyouwan)', meaningPt: 'Baía de Tóquio' }
    ]
  },
  {
    id: 'k_n3_add_3',
    kanji: '和',
    onyomi: ['ワ (wa)', 'オ (o)'],
    kunyomi: ['やわ.らぐ (yawa.ragu)', 'なご.む (nago.mu)'],
    meaningPt: 'Paz, Harmonia, Estilo Japonês',
    strokes: 8,
    radical: '口 (boca)',
    jlpt: 'N3',
    examples: [
      { word: '平和', reading: 'へいわ (heiwa)', meaningPt: 'Paz' },
      { word: '和食', reading: 'わしょく (washoku)', meaningPt: 'Comida japonesa' },
      { word: '和室', reading: 'わしつ (washitsu)', meaningPt: 'Quarto em estilo japonês' }
    ]
  },
  {
    id: 'k_n3_add_4',
    kanji: '論',
    onyomi: ['ロン (ron)'],
    kunyomi: [],
    meaningPt: 'Teoria, Debate, Discussão',
    strokes: 15,
    radical: '言 (palavra/falar)',
    jlpt: 'N3',
    examples: [
      { word: '論文', reading: 'ろんぶん (ronbun)', meaningPt: 'Tese / Artigo acadêmico' },
      { word: '結論', reading: 'けつろん (ketsuron)', meaningPt: 'Conclusão' },
      { word: '議論', reading: 'ぎろん (giron)', meaningPt: 'Discussão / Debate' }
    ]
  },
  {
    id: 'k_n3_add_5',
    kanji: '録',
    onyomi: ['ロク (roku)'],
    kunyomi: [],
    meaningPt: 'Registro, Gravação',
    strokes: 16,
    radical: '金 (ouro/metal)',
    jlpt: 'N3',
    examples: [
      { word: '記録', reading: 'きろく (kiroku)', meaningPt: 'Registro / Recorde' },
      { word: '録音', reading: 'ろくおん (rokuon)', meaningPt: 'Gravação de áudio' },
      { word: '登録', reading: 'とうろく (touroku)', meaningPt: 'Registro / Inscrição' }
    ]
  },
  {
    id: 'k_n3_add_6',
    kanji: '老',
    onyomi: ['ロウ (rou)'],
    kunyomi: ['お.いる (o.iru)', 'ふ.ける (fu.keru)'],
    meaningPt: 'Velho, Envelhecer',
    strokes: 6,
    radical: '老 (velho)',
    jlpt: 'N3',
    examples: [
      { word: '老人', reading: 'ろうじん (roujin)', meaningPt: 'Pessoa idosa' },
      { word: '老いる', reading: 'おいる (oiru)', meaningPt: 'Envelhecer' },
      { word: '敬老', reading: 'けいろう (keirou)', meaningPt: 'Respeito aos idosos' }
    ]
  },
  {
    id: 'k_n3_add_7',
    kanji: '労',
    onyomi: ['ロウ (rou)'],
    kunyomi: ['ねぎら.う (negira.u)'],
    meaningPt: 'Trabalho, Esforço',
    strokes: 7,
    radical: '力 (força)',
    jlpt: 'N3',
    examples: [
      { word: '労働', reading: 'ろうどう (roudou)', meaningPt: 'Trabalho / Mão de obra' },
      { word: '苦労', reading: 'くろう (kurou)', meaningPt: 'Dificuldade / Sofrimento' },
      { word: '過労', reading: 'かろう (karou)', meaningPt: 'Excesso de trabalho' }
    ]
  },
  {
    id: 'k_n3_add_8',
    kanji: '路',
    onyomi: ['ロ (ro)'],
    kunyomi: ['じ (ji)'],
    meaningPt: 'Caminho, Rota',
    strokes: 13,
    radical: '足 (pé/perna)',
    jlpt: 'N3',
    examples: [
      { word: '道路', reading: 'どうろ (douro)', meaningPt: 'Estrada / Via' },
      { word: '線路', reading: 'せんろ (senro)', meaningPt: 'Trilho (de trem)' },
      { word: '進路', reading: 'しんろ (shinro)', meaningPt: 'Rota / Curso (de vida)' }
    ]
  },
  {
    id: 'k_n3_add_9',
    kanji: '連',
    onyomi: ['レン (ren)'],
    kunyomi: ['つら.なる (tsura.naru)', 'つ.れる (tsu.reru)'],
    meaningPt: 'Levar consigo, Conectar',
    strokes: 10,
    radical: '辵 (caminhar)',
    jlpt: 'N3',
    examples: [
      { word: '連絡', reading: 'れんらく (renraku)', meaningPt: 'Contato / Comunicação' },
      { word: '連れる', reading: 'つれる (tsureru)', meaningPt: 'Levar (alguém)' },
      { word: '連休', reading: 'れんきゅう (renkyuu)', meaningPt: 'Feriado prolongado' }
    ]
  },
  {
    id: 'k_n3_add_10',
    kanji: '練',
    onyomi: ['レン (ren)'],
    kunyomi: ['ね.る (ne.ru)'],
    meaningPt: 'Prática, Treinamento',
    strokes: 14,
    radical: '糸 (fio)',
    jlpt: 'N4',
    examples: [
      { word: '練習', reading: 'れんしゅう (renshuu)', meaningPt: 'Prática / Exercício' },
      { word: '訓練', reading: 'くんれん (kunren)', meaningPt: 'Treinamento' },
      { word: '練る', reading: 'ねる (neru)', meaningPt: 'Amassar / Planejar bem' }
    ]
  },
  {
    id: 'k_n3_add_11',
    kanji: '恋',
    onyomi: ['レン (ren)'],
    kunyomi: ['こい (koi)', 'こい.しい (koi.shii)'],
    meaningPt: 'Amor, Paixão',
    strokes: 10,
    radical: '心 (coração)',
    jlpt: 'N3',
    examples: [
      { word: '恋愛', reading: 'れんあい (ren\'ai)', meaningPt: 'Amor / Relacionamento romântico' },
      { word: '恋人', reading: 'こいびと (koibito)', meaningPt: 'Namorado(a)' },
      { word: '恋しい', reading: 'こいしい (koishii)', meaningPt: 'Sentir falta / Nostálgico' }
    ]
  },
  {
    id: 'k_n3_add_12',
    kanji: '列',
    onyomi: ['レツ (retsu)'],
    kunyomi: [],
    meaningPt: 'Fila, Linha',
    strokes: 6,
    radical: '刀 (espada)',
    jlpt: 'N3',
    examples: [
      { word: '行列', reading: 'ぎょうれつ (gyouretsu)', meaningPt: 'Fila / Procissão' },
      { word: '列車', reading: 'れっしゃ (ressha)', meaningPt: 'Trem' },
      { word: '列島', reading: 'れっとう (rettou)', meaningPt: 'Arquipélago' }
    ]
  },
  {
    id: 'k_n3_add_13',
    kanji: '歴',
    onyomi: ['レキ (reki)'],
    kunyomi: [],
    meaningPt: 'Histórico, Passagem do tempo',
    strokes: 14,
    radical: '止 (parar)',
    jlpt: 'N3',
    examples: [
      { word: '歴史', reading: 'れきし (rekishi)', meaningPt: 'História' },
      { word: '履歴書', reading: 'りれきしょ (rirekisho)', meaningPt: 'Currículo' },
      { word: '学歴', reading: 'がくれき (gakureki)', meaningPt: 'Histórico escolar' }
    ]
  },
  {
    id: 'k_n3_add_14',
    kanji: '齢',
    onyomi: ['レイ (rei)'],
    kunyomi: ['よわい (yowai)'],
    meaningPt: 'Idade',
    strokes: 17,
    radical: '歯 (dente)',
    jlpt: 'N3',
    examples: [
      { word: '年齢', reading: 'ねんれい (nenrei)', meaningPt: 'Idade' },
      { word: '高齢', reading: 'こうれい (kourei)', meaningPt: 'Idade avançada' },
      { word: '樹齢', reading: 'じゅれい (jurei)', meaningPt: 'Idade de uma árvore' }
    ]
  },
  {
    id: 'k_n3_add_15',
    kanji: '零',
    onyomi: ['レイ (rei)'],
    kunyomi: ['ぜろ (zero)', 'こぼ.れる (kobo.reru)'],
    meaningPt: 'Zero, Derramar',
    strokes: 13,
    radical: '雨 (chuva)',
    jlpt: 'N3',
    examples: [
      { word: '零', reading: 'れい (rei)', meaningPt: 'Zero' },
      { word: '零下', reading: 'れいか (reika)', meaningPt: 'Abaixo de zero' },
      { word: '零細', reading: 'れいさい (reisai)', meaningPt: 'Insignificante / Muito pequeno' }
    ]
  },
  {
    id: 'k_n3_add_16',
    kanji: '礼',
    onyomi: ['レイ (rei)', 'ライ (rai)'],
    kunyomi: [],
    meaningPt: 'Gratidão, Etiqueta',
    strokes: 5,
    radical: '示 (mostrar)',
    jlpt: 'N3',
    examples: [
      { word: 'お礼', reading: 'おれい (orei)', meaningPt: 'Agradecimento' },
      { word: '失礼', reading: 'しつれい (shitsurei)', meaningPt: 'Falta de educação / Com licença' },
      { word: '礼儀', reading: 'れいぎ (reigi)', meaningPt: 'Boas maneiras / Etiqueta' }
    ]
  },
  {
    id: 'k_n3_add_17',
    kanji: '冷',
    onyomi: ['レイ (rei)'],
    kunyomi: ['つめ.たい (tsume.tai)', 'ひ.える (hi.eru)', 'さ.める (sa.meru)'],
    meaningPt: 'Frio (ao toque), Esfriar',
    strokes: 7,
    radical: '冫 (gelo)',
    jlpt: 'N4',
    examples: [
      { word: '冷たい', reading: 'つめたい (tsumetai)', meaningPt: 'Frio (temperatura / pessoa)' },
      { word: '冷蔵庫', reading: 'れいぞうこ (reizouko)', meaningPt: 'Geladeira' },
      { word: '冷える', reading: 'ひえる (hieru)', meaningPt: 'Esfriar-se' }
    ]
  },
  {
    id: 'k_n3_add_18',
    kanji: '例',
    onyomi: ['レイ (rei)'],
    kunyomi: ['たと.える (tato.eru)'],
    meaningPt: 'Exemplo, Comparação',
    strokes: 8,
    radical: '人 (pessoa)',
    jlpt: 'N4',
    examples: [
      { word: '例えば', reading: 'たとえば (tatoeba)', meaningPt: 'Por exemplo' },
      { word: '例外', reading: 'れいがい (reigai)', meaningPt: 'Exceção' },
      { word: '例文', reading: 'れいぶん (reibun)', meaningPt: 'Frase de exemplo' }
    ]
  },
  {
    id: 'k_n3_add_19',
    kanji: '令',
    onyomi: ['レイ (rei)'],
    kunyomi: [],
    meaningPt: 'Ordem, Comando',
    strokes: 5,
    radical: '人 (pessoa)',
    jlpt: 'N3',
    examples: [
      { word: '命令', reading: 'めいれい (meirei)', meaningPt: 'Ordem / Comando' },
      { word: '指令', reading: 'しれい (shirei)', meaningPt: 'Diretiva / Instrução' },
      { word: '令和', reading: 'れいわ (reiwa)', meaningPt: 'Era Reiwa' }
    ]
  },
  {
    id: 'k_n3_add_20',
    kanji: '類',
    onyomi: ['ルイ (rui)'],
    kunyomi: ['たぐ.い (tagu.i)'],
    meaningPt: 'Tipo, Categoria',
    strokes: 18,
    radical: '頁 (página/cabeça)',
    jlpt: 'N3',
    examples: [
      { word: '種類', reading: 'しゅるい (shurui)', meaningPt: 'Tipo / Variedade' },
      { word: '書類', reading: 'しょるい (shorui)', meaningPt: 'Documentos' },
      { word: '人類', reading: 'じんるい (jinrui)', meaningPt: 'Humanidade' }
    ]
  },
  {
    id: 'k_n3_add_21',
    kanji: '涙',
    onyomi: ['ルイ (rui)'],
    kunyomi: ['なみだ (namida)'],
    meaningPt: 'Lágrima',
    strokes: 10,
    radical: '水 (água)',
    jlpt: 'N3',
    examples: [
      { word: '涙', reading: 'なみだ (namida)', meaningPt: 'Lágrima' },
      { word: '涙声', reading: 'なみだごえ (namidagoe)', meaningPt: 'Voz de choro' },
      { word: '感涙', reading: 'かんるい (kanrui)', meaningPt: 'Lágrimas de emoção' }
    ]
  },
  {
    id: 'k_n3_add_22',
    kanji: '輪',
    onyomi: ['リン (rin)'],
    kunyomi: ['わ (wa)'],
    meaningPt: 'Roda, Anel, Círculo',
    strokes: 15,
    radical: '車 (carro/roda)',
    jlpt: 'N3',
    examples: [
      { word: '指輪', reading: 'ゆびわ (yubiwa)', meaningPt: 'Anel (de dedo)' },
      { word: '車輪', reading: 'しゃりん (sharin)', meaningPt: 'Roda (de veículo)' },
      { word: '五輪', reading: 'ごりん (gorin)', meaningPt: 'Olimpíadas (Cinco anéis)' }
    ]
  },
  {
    id: 'k_n3_add_23',
    kanji: '緑',
    onyomi: ['リョク (ryoku)', 'ロク (roku)'],
    kunyomi: ['みどり (midori)'],
    meaningPt: 'Verde',
    strokes: 14,
    radical: '糸 (fio)',
    jlpt: 'N3',
    examples: [
      { word: '緑', reading: 'みどり (midori)', meaningPt: 'Verde (cor/natureza)' },
      { word: '緑茶', reading: 'りょくちゃ (ryokucha)', meaningPt: 'Chá verde' },
      { word: '新緑', reading: 'しんりょく (shinryoku)', meaningPt: 'Verde fresco (folhas novas)' }
    ]
  },
  {
    id: 'k_n3_add_24',
    kanji: '領',
    onyomi: ['リョウ (ryou)'],
    kunyomi: [],
    meaningPt: 'Território, Domínio',
    strokes: 14,
    radical: '頁 (página/cabeça)',
    jlpt: 'N3',
    examples: [
      { word: '大統領', reading: 'だいとうりょう (daitouryou)', meaningPt: 'Presidente' },
      { word: '領収書', reading: 'りょうしゅうしょ (ryoushuusho)', meaningPt: 'Recibo' },
      { word: '領土', reading: 'りょうど (ryoudo)', meaningPt: 'Território' }
    ]
  },
  {
    id: 'k_n3_add_25',
    kanji: '量',
    onyomi: ['リョウ (ryou)'],
    kunyomi: ['はか.る (haka.ru)'],
    meaningPt: 'Quantidade, Medida',
    strokes: 12,
    radical: '里 (vila)',
    jlpt: 'N3',
    examples: [
      { word: '大量', reading: 'たいりょう (tairyou)', meaningPt: 'Grande quantidade' },
      { word: '重量', reading: 'じゅうりょう (juuryou)', meaningPt: 'Peso' },
      { word: '分量', reading: 'ぶんりょう (bunryou)', meaningPt: 'Dose / Porção' }
    ]
  },
  {
    id: 'k_n3_add_26',
    kanji: '良',
    onyomi: ['リョウ (ryou)'],
    kunyomi: ['よ.い (yo.i)', 'い.い (i.i)'],
    meaningPt: 'Bom, Excelente',
    strokes: 7,
    radical: '艮 (parar)',
    jlpt: 'N3',
    examples: [
      { word: '良い', reading: 'よい (yoi)', meaningPt: 'Bom' },
      { word: '不良', reading: 'ふりょう (furyou)', meaningPt: 'Defeituoso / Delinquente' },
      { word: '良好', reading: 'りょうこう (ryoukou)', meaningPt: 'Em boas condições / Favorável' }
    ]
  },
  {
    id: 'k_n3_add_27',
    kanji: '療',
    onyomi: ['リョウ (ryou)'],
    kunyomi: [],
    meaningPt: 'Tratamento médico',
    strokes: 17,
    radical: '疒 (doença)',
    jlpt: 'N3',
    examples: [
      { word: '医療', reading: 'いりょう (iryou)', meaningPt: 'Cuidados médicos / Saúde' },
      { word: '治療', reading: 'ちりょう (chiryou)', meaningPt: 'Tratamento (médico)' },
      { word: '診療', reading: 'しんりょう (shinryou)', meaningPt: 'Consulta médica' }
    ]
  },
  {
    id: 'k_n3_add_28',
    kanji: '涼',
    onyomi: ['リョウ (ryou)'],
    kunyomi: ['すず.しい (suzu.shii)', 'すず.む (suzu.mu)'],
    meaningPt: 'Fresco, Refrescante',
    strokes: 11,
    radical: '水 (água)',
    jlpt: 'N3',
    examples: [
      { word: '涼しい', reading: 'すずしい (suzushii)', meaningPt: 'Fresco (clima agradável)' },
      { word: '夕涼み', reading: 'ゆうすずみ (yuusuzumi)', meaningPt: 'Aproveitar a brisa da tarde' },
      { word: '清涼', reading: 'せいりょう (seiryou)', meaningPt: 'Refresco / Frescor' }
    ]
  },
  {
    id: 'k_n3_add_29',
    kanji: '両',
    onyomi: ['リョウ (ryou)'],
    kunyomi: [],
    meaningPt: 'Ambos',
    strokes: 6,
    radical: '一 (um)',
    jlpt: 'N4',
    examples: [
      { word: '両親', reading: 'りょうしん (ryoushin)', meaningPt: 'Pais (Ambos)' },
      { word: '両方', reading: 'りょうほう (ryouhou)', meaningPt: 'Ambos / Os dois lados' },
      { word: '両手', reading: 'りょうて (ryoute)', meaningPt: 'Ambas as mãos' }
    ]
  },
  {
    id: 'k_n3_add_30',
    kanji: '了',
    onyomi: ['リョウ (ryou)'],
    kunyomi: [],
    meaningPt: 'Compreender, Finalizar',
    strokes: 2,
    radical: '亅 (gancho)',
    jlpt: 'N3',
    examples: [
      { word: '終了', reading: 'しゅうりょう (shuuryou)', meaningPt: 'Fim / Conclusão' },
      { word: '了解', reading: 'りょうかい (ryoukai)', meaningPt: 'Entendido / Compreendido' },
      { word: '完了', reading: 'かんりょう (kanryou)', meaningPt: 'Concluído' }
    ]
  }
];

const dataPathN3 = path.join(process.cwd(), 'src/data/kanjiN3.ts');
const dataPathN4 = path.join(process.cwd(), 'src/data/kanjiN4.ts');

let n3Content = fs.readFileSync(dataPathN3, 'utf-8');
let n4Content = fs.readFileSync(dataPathN4, 'utf-8');

let addedCount = 0;

for (const k of newKanjis) {
  // Check if it exists in any file
  if (n3Content.includes(`kanji: '${k.kanji}'`) || n4Content.includes(`kanji: '${k.kanji}'`)) {
    console.log(`Skipping duplicate: ${k.kanji}`);
    continue;
  }

  // Formatting object
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

  if (k.jlpt === 'N4') {
    n4Content = n4Content.replace('];', `,\n${objStr}\n];`);
  } else {
    n3Content = n3Content.replace('];', `,\n${objStr}\n];`);
  }
  addedCount++;
}

fs.writeFileSync(dataPathN3, n3Content, 'utf-8');
fs.writeFileSync(dataPathN4, n4Content, 'utf-8');

console.log(`Successfully added ${addedCount} new Kanjis!`);
