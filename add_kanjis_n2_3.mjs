import fs from 'fs';
import path from 'path';

const newKanjis = [
  { id: 'k_n2_add3_1', kanji: '勇', onyomi: ['ユウ (yuu)'], kunyomi: ['いさ.む (isa.mu)'], meaningPt: 'Coragem, Bravura', strokes: 9, radical: '力 (força)', jlpt: 'N2', examples: [ { word: '勇気', reading: 'ゆうき (yuuki)', meaningPt: 'Coragem' }, { word: '勇者', reading: 'ゆうしゃ (yuusha)', meaningPt: 'Herói / Bravo' }, { word: '勇ましい', reading: 'いさましい (isamashii)', meaningPt: 'Corajoso / Valente' } ] },
  { id: 'k_n2_add3_2', kanji: '優', onyomi: ['ユウ (yuu)', 'ウ (u)'], kunyomi: ['やさ.しい (yasa.shii)', 'すぐ.れる (sugu.reru)'], meaningPt: 'Gentil, Excelente, Superior', strokes: 17, radical: '人 (pessoa)', jlpt: 'N2', examples: [ { word: '優しい', reading: 'やさしい (yasashii)', meaningPt: 'Gentil / Amável' }, { word: '優勝', reading: 'ゆうしょう (yuushou)', meaningPt: 'Vitória / Campeonato' }, { word: '優秀', reading: 'ゆうしゅう (yuushuu)', meaningPt: 'Excelente / Brilhante' } ] },
  { id: 'k_n2_add3_3', kanji: '輸', onyomi: ['ユ (yu)'], kunyomi: [], meaningPt: 'Transporte, Enviar', strokes: 16, radical: '車 (carro/roda)', jlpt: 'N2', examples: [ { word: '輸出', reading: 'ゆしゅつ (yushutsu)', meaningPt: 'Exportação' }, { word: '輸入', reading: 'ゆにゅう (yunyuu)', meaningPt: 'Importação' }, { word: '輸送', reading: 'ゆそう (yusou)', meaningPt: 'Transporte (de carga)' } ] },
  { id: 'k_n2_add3_4', kanji: '油', onyomi: ['ユ (yu)'], kunyomi: ['あぶら (abura)'], meaningPt: 'Óleo, Azeite', strokes: 8, radical: '水 (água)', jlpt: 'N2', examples: [ { word: '油', reading: 'あぶら (abura)', meaningPt: 'Óleo' }, { word: '醤油', reading: 'しょうゆ (shouyu)', meaningPt: 'Molho de soja (Shoyu)' }, { word: '石油', reading: 'せきゆ (sekiyu)', meaningPt: 'Petróleo' } ] },
  { id: 'k_n2_add3_5', kanji: '約', onyomi: ['ヤク (yaku)'], kunyomi: [], meaningPt: 'Promessa, Aproximadamente', strokes: 9, radical: '糸 (fio)', jlpt: 'N2', examples: [ { word: '約束', reading: 'やくそく (yakusoku)', meaningPt: 'Promessa / Compromisso' }, { word: '予約', reading: 'よやく (yoyaku)', meaningPt: 'Reserva' }, { word: '約', reading: 'やく (yaku)', meaningPt: 'Aproximadamente / Cerca de' } ] },
  { id: 'k_n2_add3_6', kanji: '役', onyomi: ['ヤク (yaku)', 'エキ (eki)'], kunyomi: [], meaningPt: 'Papel, Dever, Serviço', strokes: 7, radical: '彳 (passo/ir)', jlpt: 'N2', examples: [ { word: '役に立つ', reading: 'やくにたつ (yakunitatsu)', meaningPt: 'Ser útil' }, { word: '役割', reading: 'やくわり (yakuwari)', meaningPt: 'Papel / Função' }, { word: '市役所', reading: 'しやくしょ (shiyakusho)', meaningPt: 'Prefeitura' } ] },
  { id: 'k_n2_add3_7', kanji: '戻', onyomi: ['レイ (rei)'], kunyomi: ['もど.る (modo.ru)', 'もど.す (modo.su)'], meaningPt: 'Retornar, Devolver', strokes: 7, radical: '戸 (porta)', jlpt: 'N2', examples: [ { word: '戻る', reading: 'もどる (modoru)', meaningPt: 'Voltar / Retornar' }, { word: '戻す', reading: 'もどす (modosu)', meaningPt: 'Devolver / Restaurar' }, { word: '払い戻し', reading: 'はらいもどし (haraimodoshi)', meaningPt: 'Reembolso' } ] },
  { id: 'k_n2_add3_8', kanji: '毛', onyomi: ['モウ (mou)'], kunyomi: ['け (ke)'], meaningPt: 'Cabelo, Pelo', strokes: 4, radical: '毛 (pelo/cabelo)', jlpt: 'N2', examples: [ { word: '髪の毛', reading: 'かみのけ (kaminoke)', meaningPt: 'Cabelo' }, { word: '毛布', reading: 'もうふ (moufu)', meaningPt: 'Cobertor' }, { word: '毛虫', reading: 'けむし (kemushi)', meaningPt: 'Lagarta' } ] },
  { id: 'k_n2_add3_9', kanji: '面', onyomi: ['メン (men)'], kunyomi: ['おもテ (omote)', 'つら (tsura)'], meaningPt: 'Superfície, Rosto, Máscara', strokes: 9, radical: '面 (rosto/superfície)', jlpt: 'N2', examples: [ { word: '画面', reading: 'がめん (gamen)', meaningPt: 'Tela (de monitor/TV)' }, { word: '真面目', reading: 'まじめ (majime)', meaningPt: 'Sério / Honesto' }, { word: '面', reading: 'おもて (omote)', meaningPt: 'Superfície / Lado de fora' } ] },
  { id: 'k_n2_add3_10', kanji: '綿', onyomi: ['メン (men)'], kunyomi: ['わた (wata)'], meaningPt: 'Algodão', strokes: 14, radical: '糸 (fio)', jlpt: 'N2', examples: [ { word: '綿', reading: 'わた (wata)', meaningPt: 'Algodão' }, { word: '木綿', reading: 'もめん (momen)', meaningPt: 'Fio de algodão' }, { word: '綿密', reading: 'めんみつ (menmitsu)', meaningPt: 'Minucioso / Detalhado' } ] },
  { id: 'k_n2_add3_11', kanji: '鳴', onyomi: ['メイ (mei)'], kunyomi: ['な.く (na.ku)', 'な.る (na.ru)', 'な.らす (na.rasu)'], meaningPt: 'Chorar (animais), Tocar, Soar', strokes: 14, radical: '鳥 (pássaro)', jlpt: 'N2', examples: [ { word: '鳴く', reading: 'なく (naku)', meaningPt: 'Fazer som (animais)' }, { word: '鳴る', reading: 'なる (naru)', meaningPt: 'Tocar / Soar (ex: telefone)' }, { word: '悲鳴', reading: 'ひめい (himei)', meaningPt: 'Grito (de medo ou dor)' } ] },
  { id: 'k_n2_add3_12', kanji: '迷', onyomi: ['メイ (mei)'], kunyomi: ['まよ.う (mayo.u)'], meaningPt: 'Perder-se, Hesitar, Ilusão', strokes: 9, radical: '辵 (caminhar)', jlpt: 'N2', examples: [ { word: '迷う', reading: 'まよう (mayou)', meaningPt: 'Perder-se / Ficar em dúvida' }, { word: '迷惑', reading: 'めいわく (meiwaku)', meaningPt: 'Incomodo / Perturbação' }, { word: '迷子', reading: 'まいご (maigo)', meaningPt: 'Criança perdida' } ] },
  { id: 'k_n2_add3_13', kanji: '命', onyomi: ['メイ (mei)', 'ミョウ (myou)'], kunyomi: ['いのち (inochi)'], meaningPt: 'Vida, Destino, Ordem', strokes: 8, radical: '口 (boca)', jlpt: 'N2', examples: [ { word: '命', reading: 'いのち (inochi)', meaningPt: 'Vida' }, { word: '運命', reading: 'うんめい (unmei)', meaningPt: 'Destino' }, { word: '一生懸命', reading: 'いっしょうけんめい (isshoukenmei)', meaningPt: 'Com todas as forças' } ] },
  { id: 'k_n2_add3_14', kanji: '娘', onyomi: ['ジョ (jo)'], kunyomi: ['むすめ (musume)'], meaningPt: 'Filha, Garota', strokes: 10, radical: '女 (mulher)', jlpt: 'N2', examples: [ { word: '娘', reading: 'むすめ (musume)', meaningPt: 'Filha (própria)' }, { word: 'お嬢さん', reading: 'おじょうさん (ojousan)', meaningPt: 'Filha (dos outros) / Moça' }, { word: '孫娘', reading: 'まごむすめ (magomusume)', meaningPt: 'Neta' } ] },
  { id: 'k_n2_add3_15', kanji: '無', onyomi: ['ム (mu)', 'ブ (bu)'], kunyomi: ['な.い (na.i)'], meaningPt: 'Nada, Sem', strokes: 12, radical: '火 (fogo)', jlpt: 'N2', examples: [ { word: '無い', reading: 'ない (nai)', meaningPt: 'Não haver / Não ter' }, { word: '無理', reading: 'むり (muri)', meaningPt: 'Impossível / Forçar a barra' }, { word: '無料', reading: 'むりょう (muryou)', meaningPt: 'Grátis' } ] },
  { id: 'k_n2_add3_16', kanji: '夢', onyomi: ['ム (mu)'], kunyomi: ['ゆめ (yume)'], meaningPt: 'Sonho, Ilusão', strokes: 13, radical: '夕 (tarde/noite)', jlpt: 'N2', examples: [ { word: '夢', reading: 'ゆめ (yume)', meaningPt: 'Sonho' }, { word: '悪夢', reading: 'あくむ (akumu)', meaningPt: 'Pesadelo' }, { word: '夢中', reading: 'むちゅう (muchuu)', meaningPt: 'Absorto / Fascinado' } ] },
  { id: 'k_n2_add3_17', kanji: '務', onyomi: ['ム (mu)'], kunyomi: ['つと.める (tsuto.meru)', 'つと.まる (tsuto.maru)'], meaningPt: 'Dever, Tarefa', strokes: 11, radical: '力 (força)', jlpt: 'N2', examples: [ { word: '事務所', reading: 'じむしょ (jimusho)', meaningPt: 'Escritório' }, { word: '義務', reading: 'ぎむ (gimu)', meaningPt: 'Dever / Obrigação' }, { word: '務める', reading: 'つとめる (tsutomeru)', meaningPt: 'Servir (como algo) / Desempenhar papel' } ] },
  { id: 'k_n2_add3_18', kanji: '眠', onyomi: ['ミン (min)'], kunyomi: ['ねむ.る (nemu.ru)', 'ねむ.い (nemu.i)'], meaningPt: 'Dormir, Sonolento', strokes: 10, radical: '目 (olho)', jlpt: 'N2', examples: [ { word: '眠い', reading: 'ねむい (nemui)', meaningPt: 'Com sono' }, { word: '眠る', reading: 'ねむる (nemuru)', meaningPt: 'Dormir' }, { word: '睡眠', reading: 'すいみん (suimin)', meaningPt: 'Sono / O ato de dormir' } ] },
  { id: 'k_n2_add3_19', kanji: '未', onyomi: ['ミ (mi)'], kunyomi: ['いま.だ (ima.da)'], meaningPt: 'Ainda não, Incompleto', strokes: 5, radical: '木 (árvore)', jlpt: 'N2', examples: [ { word: '未来', reading: 'みらい (mirai)', meaningPt: 'Futuro (distante)' }, { word: '未定', reading: 'みてい (mitei)', meaningPt: 'Indefinido / Não decidido' }, { word: '未満', reading: 'みまん (miman)', meaningPt: 'Menos de / Abaixo de' } ] },
  { id: 'k_n2_add3_20', kanji: '満', onyomi: ['マン (man)'], kunyomi: ['み.ちる (mi.chiru)', 'み.たす (mi.tasu)'], meaningPt: 'Cheio, Satisfazer', strokes: 12, radical: '水 (água)', jlpt: 'N2', examples: [ { word: '満足', reading: 'まんぞく (manzoku)', meaningPt: 'Satisfação' }, { word: '満席', reading: 'まんせき (manseki)', meaningPt: 'Lotação / Todos os assentos ocupados' }, { word: '満ちる', reading: 'みちる (michiru)', meaningPt: 'Estar cheio / Encher-se' } ] },
  { id: 'k_n2_add3_21', kanji: '末', onyomi: ['マツ (matsu)', 'バツ (batsu)'], kunyomi: ['すえ (sue)'], meaningPt: 'Fim, Extremo', strokes: 5, radical: '木 (árvore)', jlpt: 'N2', examples: [ { word: '週末', reading: 'しゅうまつ (shuumatsu)', meaningPt: 'Fim de semana' }, { word: '月末', reading: 'げつまつ (getsumatsu)', meaningPt: 'Fim do mês' }, { word: '結末', reading: 'けつまつ (ketsumatsu)', meaningPt: 'Desfecho / Fim (de uma história)' } ] },
  { id: 'k_n2_add3_22', kanji: '枚', onyomi: ['マイ (mai)'], kunyomi: [], meaningPt: 'Contador para objetos planos', strokes: 8, radical: '木 (árvore)', jlpt: 'N2', examples: [ { word: '一枚', reading: 'いちまい (ichimai)', meaningPt: 'Uma folha (papel, camisa, etc)' }, { word: '枚数', reading: 'まいすう (maisuu)', meaningPt: 'Número de folhas/páginas' }, { word: '何枚', reading: 'なんまい (nanmai)', meaningPt: 'Quantas folhas?' } ] },
  { id: 'k_n2_add3_23', kanji: '埋', onyomi: ['マイ (mai)'], kunyomi: ['う.める (u.meru)', 'う.まる (u.maru)', 'うず.める (uzu.meru)'], meaningPt: 'Enterrar, Preencher', strokes: 10, radical: '土 (terra)', jlpt: 'N2', examples: [ { word: '埋める', reading: 'うめる (umeru)', meaningPt: 'Enterrar / Preencher (uma lacuna)' }, { word: '埋まる', reading: 'うまる (umaru)', meaningPt: 'Estar enterrado / Estar cheio' }, { word: '埋立地', reading: 'うめたてち (umetatetechi)', meaningPt: 'Aterro sanitário' } ] },
  { id: 'k_n2_add3_24', kanji: '磨', onyomi: ['マ (ma)'], kunyomi: ['みが.く (miga.ku)'], meaningPt: 'Escovar, Polir', strokes: 16, radical: '石 (pedra)', jlpt: 'N2', examples: [ { word: '磨く', reading: 'みがく (migaku)', meaningPt: 'Escovar / Polir' }, { word: '歯磨き', reading: 'はみがき (hamigaki)', meaningPt: 'Escovar os dentes' }, { word: '研磨', reading: 'けんま (kenma)', meaningPt: 'Polimento / Aprimoramento' } ] },
  { id: 'k_n2_add3_25', kanji: '防', onyomi: ['ボウ (bou)'], kunyomi: ['ふせ.ぐ (fuse.gu)'], meaningPt: 'Defender, Prevenir', strokes: 7, radical: '阜 (colina)', jlpt: 'N2', examples: [ { word: '防ぐ', reading: 'ふせぐ (fusegu)', meaningPt: 'Prevenir / Defender-se' }, { word: '予防', reading: 'よぼう (yobou)', meaningPt: 'Prevenção / Profilaxia' }, { word: '防水', reading: 'ぼうすい (bousui)', meaningPt: 'À prova d\'água' } ] },
  { id: 'k_n2_add3_26', kanji: '貿', onyomi: ['ボウ (bou)'], kunyomi: [], meaningPt: 'Comércio exterior, Troca', strokes: 12, radical: '貝 (concha/moeda)', jlpt: 'N2', examples: [ { word: '貿易', reading: 'ぼうえき (boueki)', meaningPt: 'Comércio exterior / Internacional' }, { word: '自由貿易', reading: 'じゆうぼうえき (jiyuuboueki)', meaningPt: 'Livre comércio' }, { word: '密貿易', reading: 'みつぼうえき (mitsuboueki)', meaningPt: 'Contrabando' } ] },
  { id: 'k_n2_add3_27', kanji: '棒', onyomi: ['ボウ (bou)'], kunyomi: [], meaningPt: 'Bastão, Vara', strokes: 12, radical: '木 (árvore)', jlpt: 'N2', examples: [ { word: '棒', reading: 'ぼう (bou)', meaningPt: 'Bastão / Pau' }, { word: '泥棒', reading: 'どろぼう (dorobou)', meaningPt: 'Ladrão' }, { word: '鉄棒', reading: 'てつぼう (tetsubou)', meaningPt: 'Barra de ferro' } ] },
  { id: 'k_n2_add3_28', kanji: '望', onyomi: ['ボウ (bou)', 'モウ (mou)'], kunyomi: ['のぞ.む (nozo.mu)'], meaningPt: 'Esperança, Desejo, Observar ao longe', strokes: 11, radical: '月 (carne/lua)', jlpt: 'N2', examples: [ { word: '希望', reading: 'きぼう (kibou)', meaningPt: 'Esperança' }, { word: '望む', reading: 'のぞむ (nozomu)', meaningPt: 'Desejar / Esperar' }, { word: '絶望', reading: 'ぜつぼう (zetsubou)', meaningPt: 'Desespero' } ] }
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
