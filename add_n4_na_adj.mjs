import fs from 'fs';
import path from 'path';

const naAdjectivesText = `1	安心 anshin あんしん peace of mind
2	安全 anzen あんぜん safety; security
3	大事 daiji だいじ important; serious; crucial
4	不便 fuben ふべん inconvenience
5	複雑 fukuzatsu ふくざつ complexity; complication
6	反対 hantai はんたい opposition
7	変 hen へん strange; peculiar; weird
8	久しぶり hisashiburi ひさしぶり after a long time
9	いっぱい ippai full
10	一生懸命 isshoukenmei いっしょうけんめい very hard; with utmost effort
11	自由 jiyuu じゆう freedom
12	十分 juubun じゅうぶん enough; sufficient; plenty; adequate; satisfactory
13	簡単 kantan かんたん simple; easy
14	危険 kiken きけん danger
15	急 kyuu きゅう sudden; abrupt; unexpected
16	無理 muri むり impossible
17	盛ん sakan さかん popularity; prosperous
18	親切 shinsetsu しんせつ kindness
19	たいてい taitei usually
20	楽しみ tanoshimi たのしみ looking forward to
21	丁寧 teinei ていねい polite
22	適当 tekitou てきとう suitable
23	特別 tokubetsu とくべつ special; particular; extraordinary; exceptional
24	残念 zannen ざんねん regrettable; unfortunate`;

// Translating meanings to PT and creating examples
const ptTranslations = {
  "安心": { pt: "Alívio, tranquilidade", ex: { jp: "安心しました。", reading: "あんしん しました。", romaji: "anshin shimashita.", meaningPt: "Fiquei aliviado." } },
  "安全": { pt: "Segurança, seguro", ex: { jp: "安全な場所です。", reading: "あんぜん な ばしょ です。", romaji: "anzen na basho desu.", meaningPt: "É um lugar seguro." } },
  "大事": { pt: "Importante", ex: { jp: "大事な物です。", reading: "だいじ な もの です。", romaji: "daiji na mono desu.", meaningPt: "É uma coisa importante." } },
  "不便": { pt: "Inconveniente, prático", ex: { jp: "ここは不便です。", reading: "ここ は ふべん です。", romaji: "koko wa fuben desu.", meaningPt: "Aqui é inconveniente." } },
  "複雑": { pt: "Complexo, complicado", ex: { jp: "複雑な問題です。", reading: "ふくざつ な もんだい です。", romaji: "fukuzatsu na mondai desu.", meaningPt: "É um problema complexo." } },
  "反対": { pt: "Oposição, oposto", ex: { jp: "私は反対です。", reading: "わたし は はんたい です。", romaji: "watashi wa hantai desu.", meaningPt: "Eu sou contra/oposto." } },
  "変": { pt: "Estranho, esquisito", ex: { jp: "変な音がする。", reading: "へん な おと が する。", romaji: "hen na oto ga suru.", meaningPt: "Está fazendo um som estranho." } },
  "久しぶり": { pt: "Há muito tempo, muito tempo sem ver", ex: { jp: "お久しぶりですね。", reading: "おひさしぶり ですね。", romaji: "ohisashiburi desu ne.", meaningPt: "Quanto tempo não nos vemos, né." } },
  "いっぱい": { pt: "Cheio", ex: { jp: "お腹がいっぱいです。", reading: "おなか が いっぱい です。", romaji: "onaka ga ippai desu.", meaningPt: "Estou de barriga cheia." } },
  "一生懸命": { pt: "Com muito esforço", ex: { jp: "一生懸命勉強します。", reading: "いっしょうけんめい べんきょうします。", romaji: "isshoukenmei benkyou shimasu.", meaningPt: "Estudo com todo o esforço." } },
  "自由": { pt: "Liberdade, livre", ex: { jp: "自由な時間が欲しい。", reading: "じゆう な じかん が ほしい。", romaji: "jiyuu na jikan ga hoshii.", meaningPt: "Quero tempo livre." } },
  "十分": { pt: "Suficiente", ex: { jp: "それで十分です。", reading: "それ で じゅうぶん です。", romaji: "sore de juubun desu.", meaningPt: "Isso é o suficiente." } },
  "簡単": { pt: "Simples, fácil", ex: { jp: "簡単な問題です。", reading: "かんたん な もんだい です。", romaji: "kantan na mondai desu.", meaningPt: "É um problema fácil." } },
  "危険": { pt: "Perigo, perigoso", ex: { jp: "危険な場所です。", reading: "きけん な ばしょ です。", romaji: "kiken na basho desu.", meaningPt: "É um lugar perigoso." } },
  "急": { pt: "Repentino, urgente", ex: { jp: "急な用事があります。", reading: "きゅう な ようじ が あります。", romaji: "kyuu na youji ga arimasu.", meaningPt: "Tenho um assunto urgente." } },
  "無理": { pt: "Impossível, irrazoável", ex: { jp: "それは無理です。", reading: "それ は むり です。", romaji: "sore wa muri desu.", meaningPt: "Isso é impossível." } },
  "盛ん": { pt: "Popular, próspero", ex: { jp: "サッカーが盛んです。", reading: "サッカー が さかん です。", romaji: "sakkaa ga sakan desu.", meaningPt: "O futebol é popular." } },
  "親切": { pt: "Gentil, bondoso", ex: { jp: "親切な人です。", reading: "しんせつ な ひと です。", romaji: "shinsetsu na hito desu.", meaningPt: "É uma pessoa gentil." } },
  "たいてい": { pt: "Geralmente, na maioria das vezes", ex: { jp: "たいてい家にいます。", reading: "たいてい いえ に います。", romaji: "taitei ie ni imasu.", meaningPt: "Geralmente estou em casa." } },
  "楽しみ": { pt: "Expectativa, algo esperado", ex: { jp: "楽しみにしています。", reading: "たのしみ に しています。", romaji: "tanoshimi ni shiteimasu.", meaningPt: "Estou ansioso por isso." } },
  "丁寧": { pt: "Polido, educado", ex: { jp: "丁寧な言葉です。", reading: "ていねい な ことば です。", romaji: "teinei na kotoba desu.", meaningPt: "São palavras educadas." } },
  "適当": { pt: "Adequado, apropriado (ou feito de qualquer jeito)", ex: { jp: "適当に答える。", reading: "てきとう に こたえる。", romaji: "tekitou ni kotaeru.", meaningPt: "Responder de forma adequada/de qualquer jeito." } },
  "特別": { pt: "Especial", ex: { jp: "特別な日です。", reading: "とくべつ な ひ です。", romaji: "tokubetsu na hi desu.", meaningPt: "É um dia especial." } },
  "残念": { pt: "Lamentável, que pena", ex: { jp: "それは残念です。", reading: "それ は ざんねん です。", romaji: "sore wa zannen desu.", meaningPt: "Isso é lamentável." } }
};

const lines = naAdjectivesText.split('\n');
const newItems = [];
let idCounter = 1202; // Assuming the last ID was 1201 from the earlier search

for (const line of lines) {
  const parts = line.trim().split(/\s+/);
  if (parts.length < 4) continue;
  
  // parts[0] is number
  let word = parts[1];
  let romaji, reading, enMeaning;
  
  if (parts[2].match(/^[a-z]+$/)) { // romaji
    romaji = parts[2];
    reading = parts[3];
    enMeaning = parts.slice(4).join(' ');
  } else if (parts[3].match(/^[a-z]+$/)) { // sometimes it's reversed
    romaji = parts[3];
    reading = parts[2];
    enMeaning = parts.slice(4).join(' ');
  } else {
    // maybe word is kana only (like いっぱい)
    romaji = parts[2];
    reading = parts[1]; // word is reading
    enMeaning = parts.slice(3).join(' ');
  }

  const ptData = ptTranslations[word];
  if (!ptData) {
    console.error("Missing translation for:", word);
    continue;
  }

  newItems.push({
    id: `v_adj_na_n4_${idCounter++}`,
    word: word,
    reading: reading,
    romaji: romaji,
    meaningPt: ptData.pt,
    category: "adjetivo_na",
    jlpt: "N4",
    categoryLabelPt: "Adjetivo Na",
    exampleSentence: ptData.ex
  });
}

const targetPath = path.join(process.cwd(), 'src/data/vocabAdjetivosNa.ts');
let content = fs.readFileSync(targetPath, 'utf8');
const insertPos = content.lastIndexOf('];');

if (insertPos !== -1) {
  let toInsert = '';
  for (const item of newItems) {
    // Check if already in
    if (!content.includes(`"word": "${item.word}"`) || item.word === "いっぱい") {
      toInsert += ',\n' + JSON.stringify(item, null, 2);
    }
  }
  
  if (toInsert.length > 0) {
    content = content.substring(0, insertPos) + toInsert + '\n' + content.substring(insertPos);
    fs.writeFileSync(targetPath, content, 'utf8');
    console.log("Added", newItems.length, "items.");
  } else {
    console.log("No new items to add.");
  }
} else {
  console.log("Could not find insert position.");
}
