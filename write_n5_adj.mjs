import fs from 'fs';
import path from 'path';

// Define the NA adjectives data
const naAdjectives = [
  { word: '便利', romaji: 'benri', reading: 'べんり', meaningPt: 'Conveniente, útil', exJp: 'とても便利です。', exReading: 'とても べんり です。', exRomaji: 'Totemo benri desu.', exPt: 'É muito conveniente.' },
  { word: '大丈夫', romaji: 'daijoubu', reading: 'だいじょうぶ', meaningPt: 'Tudo bem, OK', exJp: '大丈夫ですか。', exReading: 'だいじょうぶ ですか。', exRomaji: 'Daijoubu desu ka?', exPt: 'Você está bem?' },
  { word: '大好き', romaji: 'daisuki', reading: 'だいすき', meaningPt: 'Amar, gostar muito', exJp: '猫が大好きです。', exReading: 'ねこ が だいすき です。', exRomaji: 'Neko ga daisuki desu.', exPt: 'Amo gatos.' },
  { word: '元気', romaji: 'genki', reading: 'げんき', meaningPt: 'Saudável, com energia', exJp: 'お元気ですか。', exReading: 'おげんき ですか。', exRomaji: 'Ogenki desu ka?', exPt: 'Como você está?' },
  { word: '下手', romaji: 'heta', reading: 'へた', meaningPt: 'Ruim (em algo)', exJp: '歌が下手です。', exReading: 'うた が へた です。', exRomaji: 'Uta ga heta desu.', exPt: 'Sou ruim em cantar.' },
  { word: '暇', romaji: 'hima', reading: 'ひま', meaningPt: 'Livre (tempo)', exJp: '明日は暇です。', exReading: 'あした は ひま です。', exRomaji: 'Ashita wa hima desu.', exPt: 'Amanhã estarei livre.' },
  { word: '本当', romaji: 'hontou', reading: 'ほんとう', meaningPt: 'Verdade', exJp: 'それは本当ですか。', exReading: 'それ は ほんとう ですか。', exRomaji: 'Sore wa hontou desu ka?', exPt: 'Isso é verdade?' },
  { word: '色々', romaji: 'iroiro', reading: 'いろいろ', meaningPt: 'Vários', exJp: '色々な人がいます。', exReading: 'いろいろな ひと が います。', exRomaji: 'Iroiro na hito ga imasu.', exPt: 'Existem várias pessoas.' },
  { word: '嫌', romaji: 'iya', reading: 'いや', meaningPt: 'Desagradável', exJp: '雨は嫌です。', exReading: 'あめ は いや です。', exRomaji: 'Ame wa iya desu.', exPt: 'Não gosto de chuva.' },
  { word: '丈夫', romaji: 'joubu', reading: 'じょうぶ', meaningPt: 'Forte, resistente', exJp: 'この鞄は丈夫です。', exReading: 'この かばん は じょうぶ です。', exRomaji: 'Kono kaban wa joubu desu.', exPt: 'Esta bolsa é resistente.' },
  { word: '上手', romaji: 'jouzu', reading: 'じょうず', meaningPt: 'Habilidoso, bom', exJp: '日本語が上手ですね。', exReading: 'にほんご が じょうず ですね。', exRomaji: 'Nihongo ga jouzu desu ne.', exPt: 'Você é bom em japonês, né.' },
  { word: '結構', romaji: 'kekkou', reading: 'けっこう', meaningPt: 'Suficiente, esplêndido', exJp: 'もう結構です。', exReading: 'もう けっこう です。', exRomaji: 'Mou kekkou desu.', exPt: 'Já é o suficiente / Não, obrigado.' },
  { word: '嫌い', romaji: 'kirai', reading: 'きらい', meaningPt: 'Odiar, não gostar', exJp: '野菜が嫌いです。', exReading: 'やさい が きらい です。', exRomaji: 'Yasai ga kirai desu.', exPt: 'Odeio vegetais.' },
  { word: '綺麗', romaji: 'kirei', reading: 'きれい', meaningPt: 'Bonito, limpo', exJp: '綺麗な花ですね。', exReading: 'きれいな はな ですね。', exRomaji: 'Kirei na hana desu ne.', exPt: 'É uma flor bonita, não é?' },
  { word: '真っ直ぐ', romaji: 'massugu', reading: 'まっすぐ', meaningPt: 'Reto, em frente', exJp: '真っ直ぐ行ってください。', exReading: 'まっすぐ いって ください。', exRomaji: 'Massugu itte kudasai.', exPt: 'Por favor, siga em frente.' },
  { word: '賑やか', romaji: 'nigiyaka', reading: 'にぎやか', meaningPt: 'Movimentado, animado', exJp: '賑やかな町です。', exReading: 'にぎやかな まち です。', exRomaji: 'Nigiyaka na machi desu.', exPt: 'É uma cidade movimentada.' },
  { word: '立派', romaji: 'rippa', reading: 'りっぱ', meaningPt: 'Esplêndido, excelente', exJp: '立派な家ですね。', exReading: 'りっぱな いえ ですね。', exRomaji: 'Rippa na ie desu ne.', exPt: 'É uma casa esplêndida.' },
  { word: '静か', romaji: 'shizuka', reading: 'しずか', meaningPt: 'Silencioso, quieto', exJp: '静かな部屋です。', exReading: 'しずかな へや です。', exRomaji: 'Shizuka na heya desu.', exPt: 'É um quarto silencioso.' },
  { word: '好き', romaji: 'suki', reading: 'すき', meaningPt: 'Gostar', exJp: '音楽が好きです。', exReading: 'おんがく が すき です。', exRomaji: 'Ongaku ga suki desu.', exPt: 'Gosto de música.' },
  { word: '多分', romaji: 'tabun', reading: 'たぶん', meaningPt: 'Provavelmente, talvez', exJp: '明日は多分雨です。', exReading: 'あした は たぶん あめ です。', exRomaji: 'Ashita wa tabun ame desu.', exPt: 'Amanhã provavelmente choverá.' },
  { word: '大変', romaji: 'taihen', reading: 'たいへん', meaningPt: 'Difícil, muito', exJp: '仕事が大変です。', exReading: 'しごと が たいへん です。', exRomaji: 'Shigoto ga taihen desu.', exPt: 'O trabalho é difícil.' },
  { word: '大切', romaji: 'taisetsu', reading: 'たいせつ', meaningPt: 'Importante', exJp: '家族は大切です。', exReading: 'かぞく は たいせつ です。', exRomaji: 'Kazoku wa taisetsu desu.', exPt: 'A família é importante.' },
  { word: '沢山', romaji: 'takusan', reading: 'たくさん', meaningPt: 'Muitos, bastante', exJp: '人が沢山います。', exReading: 'ひと が たくさん います。', exRomaji: 'Hito ga takusan imasu.', exPt: 'Há muitas pessoas.' },
  { word: '有名', romaji: 'yuumei', reading: 'ゆうめい', meaningPt: 'Famoso', exJp: '有名な人です。', exReading: 'ゆうめいな ひと です。', exRomaji: 'Yuumei na hito desu.', exPt: 'É uma pessoa famosa.' }
];

// Define the I adjectives data
const iAdjectives = [
  { word: '危ない', romaji: 'abunai', reading: 'あぶない', meaningPt: 'Perigoso', exJp: 'ここは危ないです。', exReading: 'ここ は あぶない です。', exRomaji: 'Koko wa abunai desu.', exPt: 'Aqui é perigoso.' },
  { word: '赤い', romaji: 'akai', reading: 'あかい', meaningPt: 'Vermelho', exJp: '赤い車が好きです。', exReading: 'あかい くるま が すき です。', exRomaji: 'Akai kuruma ga suki desu.', exPt: 'Gosto de carros vermelhos.' },
  { word: '明るい', romaji: 'akarui', reading: 'あかるい', meaningPt: 'Claro, iluminado', exJp: '部屋が明るい。', exReading: 'へや が あかるい。', exRomaji: 'Heya ga akarui.', exPt: 'O quarto é iluminado.' },
  { word: '甘い', romaji: 'amai', reading: 'あまい', meaningPt: 'Doce', exJp: 'このケーキは甘いです。', exReading: 'この ケーキ は あまい です。', exRomaji: 'Kono keeki wa amai desu.', exPt: 'Este bolo é doce.' },
  { word: '青い', romaji: 'aoi', reading: 'あおい', meaningPt: 'Azul', exJp: '空が青いです。', exReading: 'そら が あおい です。', exRomaji: 'Sora ga aoi desu.', exPt: 'O céu é azul.' },
  { word: '新しい', romaji: 'atarashii', reading: 'あたらしい', meaningPt: 'Novo', exJp: '新しい靴を買いました。', exReading: 'あたらしい くつ を かいました。', exRomaji: 'Atarashii kutsu o kaimashita.', exPt: 'Comprei sapatos novos.' },
  { word: '暖かい', romaji: 'atatakai', reading: 'あたたかい', meaningPt: 'Quente (clima, objetos)', exJp: '今日は暖かいです。', exReading: 'きょう は あたたかい です。', exRomaji: 'Kyou wa atatakai desu.', exPt: 'Hoje está quente/agradável.' },
  { word: '厚い', romaji: 'atsui', reading: 'あつい', meaningPt: 'Espesso, grosso', exJp: '厚い本を読みます。', exReading: 'あつい ほん を よみます。', exRomaji: 'Atsui hon o yomimasu.', exPt: 'Vou ler um livro grosso.' },
  { word: '暑い', romaji: 'atsui', reading: 'あつい', meaningPt: 'Quente (clima)', exJp: '夏は暑いです。', exReading: 'なつ は あつい です。', exRomaji: 'Natsu wa atsui desu.', exPt: 'O verão é quente.' },
  { word: '熱い', romaji: 'atsui', reading: 'あつい', meaningPt: 'Quente (ao toque)', exJp: 'お茶が熱いです。', exReading: 'おちゃ が あつい です。', exRomaji: 'Ocha ga atsui desu.', exPt: 'O chá está quente.' },
  { word: '小さい', romaji: 'chiisai', reading: 'ちいさい', meaningPt: 'Pequeno', exJp: '小さい犬がいます。', exReading: 'ちいさい いぬ が います。', exRomaji: 'Chiisai inu ga imasu.', exPt: 'Tem um cachorro pequeno.' },
  { word: '近い', romaji: 'chikai', reading: 'ちかい', meaningPt: 'Perto', exJp: '駅は近いです。', exReading: 'えき は ちかい です。', exRomaji: 'Eki wa chikai desu.', exPt: 'A estação é perto.' },
  { word: '古い', romaji: 'furui', reading: 'ふるい', meaningPt: 'Velho (objetos)', exJp: '古いカメラです。', exReading: 'ふるい カメラ です。', exRomaji: 'Furui kamera desu.', exPt: 'É uma câmera velha.' },
  { word: '太い', romaji: 'futoi', reading: 'ふとい', meaningPt: 'Gordo, espesso', exJp: '太い木があります。', exReading: 'ふとい き が あります。', exRomaji: 'Futoi ki ga arimasu.', exPt: 'Há uma árvore grossa.' },
  { word: '早い', romaji: 'hayai', reading: 'はやい', meaningPt: 'Cedo', exJp: '朝早く起きます。', exReading: 'あさ はやく おきます。', exRomaji: 'Asa hayaku okimasu.', exPt: 'Acordo cedo de manhã.' },
  { word: '速い', romaji: 'hayai', reading: 'はやい', meaningPt: 'Rápido', exJp: '走るのが速いです。', exReading: 'はしる の が はやい です。', exRomaji: 'Hashiru no ga hayai desu.', exPt: 'É rápido para correr.' },
  { word: '低い', romaji: 'hikui', reading: 'ひくい', meaningPt: 'Baixo', exJp: '背が低いです。', exReading: 'せ が ひくい です。', exRomaji: 'Se ga hikui desu.', exPt: 'Minha estatura é baixa.' },
  { word: '広い', romaji: 'hiroi', reading: 'ひろい', meaningPt: 'Largo, espaçoso', exJp: '広い部屋ですね。', exReading: 'ひろい へや ですね。', exRomaji: 'Hiroi heya desu ne.', exPt: 'É um quarto espaçoso.' },
  { word: '欲しい', romaji: 'hoshii', reading: 'ほしい', meaningPt: 'Querer', exJp: '車が欲しいです。', exReading: 'くるま が ほしい です。', exRomaji: 'Kuruma ga hoshii desu.', exPt: 'Eu quero um carro.' },
  { word: '細い', romaji: 'hosoi', reading: 'ほそい', meaningPt: 'Fino', exJp: '細い道を行く。', exReading: 'ほそい みち を いく。', exRomaji: 'Hosoi michi o iku.', exPt: 'Vá pela estrada estreita.' },
  { word: '忙しい', romaji: 'isogashii', reading: 'いそがしい', meaningPt: 'Ocupado', exJp: '今日は忙しいです。', exReading: 'きょう は いそがしい です。', exRomaji: 'Kyou wa isogashii desu.', exPt: 'Hoje estou ocupado.' },
  { word: '痛い', romaji: 'itai', reading: 'いたい', meaningPt: 'Doloroso', exJp: '頭が痛いです。', exReading: 'あたま が いたい です。', exRomaji: 'Atama ga itai desu.', exPt: 'Minha cabeça dói.' },
  { word: '辛い', romaji: 'karai', reading: 'からい', meaningPt: 'Picante', exJp: 'カレーが辛いです。', exReading: 'カレー が からい です。', exRomaji: 'Karee ga karai desu.', exPt: 'O curry está picante.' },
  { word: '軽い', romaji: 'karui', reading: 'かるい', meaningPt: 'Leve', exJp: '軽いカバンです。', exReading: 'かるい カバン です。', exRomaji: 'Karui kaban desu.', exPt: 'É uma bolsa leve.' },
  { word: '可愛い', romaji: 'kawaii', reading: 'かわいい', meaningPt: 'Fofo, bonito', exJp: '可愛い猫ですね。', exReading: 'かわいい ねこ ですね。', exRomaji: 'Kawaii neko desu ne.', exPt: 'É um gato fofo, não é?' },
  { word: '黄色い', romaji: 'kiiroi', reading: 'きいろい', meaningPt: 'Amarelo', exJp: '黄色い花です。', exReading: 'きいろい はな です。', exRomaji: 'Kiiroi hana desu.', exPt: 'É uma flor amarela.' },
  { word: '汚い', romaji: 'kitanai', reading: 'きたない', meaningPt: 'Sujo', exJp: '部屋が汚いです。', exReading: 'へや が きたない です。', exRomaji: 'Heya ga kitanai desu.', exPt: 'O quarto está sujo.' },
  { word: '暗い', romaji: 'kurai', reading: 'くらい', meaningPt: 'Escuro', exJp: '外は暗いです。', exReading: 'そと は くらい です。', exRomaji: 'Soto wa kurai desu.', exPt: 'Lá fora está escuro.' },
  { word: '黒い', romaji: 'kuroi', reading: 'くろい', meaningPt: 'Preto', exJp: '黒い犬を見ました。', exReading: 'くろい いぬ を みました。', exRomaji: 'Kuroi inu o mimashita.', exPt: 'Vi um cachorro preto.' },
  { word: '丸い', romaji: 'marui', reading: 'まるい', meaningPt: 'Redondo', exJp: '丸いテーブルです。', exReading: 'まるい テーブル です。', exRomaji: 'Marui teeburu desu.', exPt: 'É uma mesa redonda.' },
  { word: '不味い', romaji: 'mazui', reading: 'まずい', meaningPt: 'Ruim (sabor)', exJp: 'この料理は不味い。', exReading: 'この りょうり は まずい。', exRomaji: 'Kono ryouri wa mazui.', exPt: 'Essa comida é ruim.' },
  { word: '短い', romaji: 'mijikai', reading: 'みじかい', meaningPt: 'Curto', exJp: '髪が短いです。', exReading: 'かみ が みじかい です。', exRomaji: 'Kami ga mijikai desu.', exPt: 'O cabelo está curto.' },
  { word: '難しい', romaji: 'muzukashii', reading: 'むずかしい', meaningPt: 'Difícil', exJp: 'テストは難しい。', exReading: 'テスト は むずかしい。', exRomaji: 'Tesuto wa muzukashii.', exPt: 'O teste é difícil.' },
  { word: '長い', romaji: 'nagai', reading: 'ながい', meaningPt: 'Longo', exJp: '長い話でした。', exReading: 'ながい はなし でした。', exRomaji: 'Nagai hanashi deshita.', exPt: 'Foi uma conversa longa.' },
  { word: '温い', romaji: 'nurui', reading: 'ぬるい', meaningPt: 'Morno', exJp: 'お茶が温いです。', exReading: 'おちゃ が ぬるい です。', exRomaji: 'Ocha ga nurui desu.', exPt: 'O chá está morno.' },
  { word: '美味しい', romaji: 'oishii', reading: 'おいしい', meaningPt: 'Delicioso', exJp: '美味しいパンです。', exReading: 'おいしい パン です。', exRomaji: 'Oishii pan desu.', exPt: 'É um pão delicioso.' },
  { word: '重い', romaji: 'omoi', reading: 'おもい', meaningPt: 'Pesado', exJp: '荷物が重いです。', exReading: 'にもつ が おもい です。', exRomaji: 'Nimotsu ga omoi desu.', exPt: 'A bagagem está pesada.' },
  { word: '面白い', romaji: 'omoshiroi', reading: 'おもしろい', meaningPt: 'Interessante, engraçado', exJp: '面白い映画ですね。', exReading: 'おもしろい えいが ですね。', exRomaji: 'Omoshiroi eiga desu ne.', exPt: 'É um filme interessante.' },
  { word: '多い', romaji: 'ooi', reading: 'おおい', meaningPt: 'Muitos', exJp: '人が多いです。', exReading: 'ひと が おおい です。', exRomaji: 'Hito ga ooi desu.', exPt: 'Há muitas pessoas.' },
  { word: '大きい', romaji: 'ookii', reading: 'おおきい', meaningPt: 'Grande', exJp: '大きい家です。', exReading: 'おおきい いえ です。', exRomaji: 'Ookii ie desu.', exPt: 'É uma casa grande.' },
  { word: '遅い', romaji: 'osoi', reading: 'おそい', meaningPt: 'Lento, tarde', exJp: '遅い時間ですね。', exReading: 'おそい じかん ですね。', exRomaji: 'Osoi jikan desu ne.', exPt: 'É uma hora tardia, não é?' },
  { word: '寒い', romaji: 'samui', reading: 'さむい', meaningPt: 'Frio (clima)', exJp: '今日は寒いです。', exReading: 'きょう は さむい です。', exRomaji: 'Kyou wa samui desu.', exPt: 'Hoje está frio.' },
  { word: '狭い', romaji: 'semai', reading: 'せまい', meaningPt: 'Estreito', exJp: '狭い部屋です。', exReading: 'せまい へや です。', exRomaji: 'Semai heya desu.', exPt: 'É um quarto estreito.' },
  { word: '白い', romaji: 'shiroi', reading: 'しろい', meaningPt: 'Branco', exJp: '白い雪が降る。', exReading: 'しろい ゆき が ふる。', exRomaji: 'Shiroi yuki ga furu.', exPt: 'Cai a neve branca.' },
  { word: '少ない', romaji: 'sukunai', reading: 'すくない', meaningPt: 'Poucos', exJp: '人が少ないです。', exReading: 'ひと が すくない です。', exRomaji: 'Hito ga sukunai desu.', exPt: 'Há poucas pessoas.' },
  { word: '涼しい', romaji: 'suzushii', reading: 'すずしい', meaningPt: 'Fresco', exJp: '涼しい風が吹く。', exReading: 'すずしい かぜ が ふく。', exRomaji: 'Suzushii kaze ga fuku.', exPt: 'Sopra um vento fresco.' },
  { word: '高い', romaji: 'takai', reading: 'たかい', meaningPt: 'Alto, caro', exJp: '高い山です。', exReading: 'たかい やま です。', exRomaji: 'Takai yama desu.', exPt: 'É uma montanha alta.' },
  { word: '楽しい', romaji: 'tanoshii', reading: 'たのしい', meaningPt: 'Divertido', exJp: '楽しいパーティーでした。', exReading: 'たのしい パーティー でした。', exRomaji: 'Tanoshii paatii deshita.', exPt: 'Foi uma festa divertida.' },
  { word: '遠い', romaji: 'tooi', reading: 'とおい', meaningPt: 'Longe', exJp: '家が遠いです。', exReading: 'いえ が とおい です。', exRomaji: 'Ie ga tooi desu.', exPt: 'Minha casa é longe.' },
  { word: '詰まらない', romaji: 'tsumaranai', reading: 'つまらない', meaningPt: 'Chato, entediante', exJp: '詰まらない本です。', exReading: 'つまらない ほん です。', exRomaji: 'Tsumaranai hon desu.', exPt: 'É um livro chato.' },
  { word: '冷たい', romaji: 'tsumetai', reading: 'つめたい', meaningPt: 'Frio (ao toque)', exJp: '冷たい水が飲みたい。', exReading: 'つめたい みず が のみたい。', exRomaji: 'Tsumetai mizu ga nomitai.', exPt: 'Quero beber água fria.' },
  { word: '強い', romaji: 'tsuyoi', reading: 'つよい', meaningPt: 'Forte', exJp: '強い風が吹く。', exReading: 'つよい かぜ が ふく。', exRomaji: 'Tsuyoi kaze ga fuku.', exPt: 'Sopra um vento forte.' },
  { word: '煩い', romaji: 'urusai', reading: 'うるさい', meaningPt: 'Barulhento, irritante', exJp: '隣の部屋が煩いです。', exReading: 'となりの へや が うるさい です。', exRomaji: 'Tonari no heya ga urusai desu.', exPt: 'O quarto ao lado é barulhento.' },
  { word: '薄い', romaji: 'usui', reading: 'うすい', meaningPt: 'Fino (espessura)', exJp: '薄い紙です。', exReading: 'うすい かみ です。', exRomaji: 'Usui kami desu.', exPt: 'É um papel fino.' },
  { word: '若い', romaji: 'wakai', reading: 'わかい', meaningPt: 'Jovem', exJp: '若い先生です。', exReading: 'わかい せんせい です。', exRomaji: 'Wakai sensei desu.', exPt: 'É um professor jovem.' },
  { word: '悪い', romaji: 'warui', reading: 'わるい', meaningPt: 'Mau, ruim', exJp: '悪い天気ですね。', exReading: 'わるい てんき ですね。', exRomaji: 'Warui tenki desu ne.', exPt: 'O tempo está ruim, né.' },
  { word: '易しい', romaji: 'yasashii', reading: 'やさしい', meaningPt: 'Fácil', exJp: '易しい問題です。', exReading: 'やさしい もんだい です。', exRomaji: 'Yasashii mondai desu.', exPt: 'É um problema fácil.' },
  { word: '安い', romaji: 'yasui', reading: 'やすい', meaningPt: 'Barato', exJp: 'この鞄は安いです。', exReading: 'この かばん は やすい です。', exRomaji: 'Kono kaban wa yasui desu.', exPt: 'Esta bolsa é barata.' },
  { word: '良い', romaji: 'yoi/ii', reading: 'よい/いい', meaningPt: 'Bom', exJp: '良い天気です。', exReading: 'いい てんき です。', exRomaji: 'Ii tenki desu.', exPt: 'Está um tempo bom.' },
  { word: '弱い', romaji: 'yowai', reading: 'よわい', meaningPt: 'Fraco', exJp: '私は体が弱いです。', exReading: 'わたし は からだ が よわい です。', exRomaji: 'Watashi wa karada ga yowai desu.', exPt: 'Meu corpo é fraco.' }
];

function generateContent(items, categoryId, categoryLabel) {
  let output = `import { VocabItem } from '../types';\n\n`;
  if (categoryId === 'adjetivo_na') {
    output += `export const VOCAB_ADJ_NA: VocabItem[] = [\n`;
  } else {
    output += `export const VOCAB_ADJ_I: VocabItem[] = [\n`;
  }
  
  items.forEach((item, index) => {
    let idPrefix = categoryId === 'adjetivo_na' ? 'v_adj_na_n5_' : 'v_adj_i_n5_';
    
    let obj = `  {
    id: '${idPrefix}${index + 1}',
    word: '${item.word}',
    reading: '${item.reading}',
    romaji: '${item.romaji}',
    meaningPt: '${item.meaningPt}',
    category: '${categoryId}',
    jlpt: 'N5',
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
    output += obj + '\n';
  });
  
  output += `];\n`;
  return output;
}

const naPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosNa.ts');
fs.writeFileSync(naPath, generateContent(naAdjectives, 'adjetivo_na', 'Adjetivo Na'), 'utf8');

const iPath = path.join(process.cwd(), 'src', 'data', 'vocabAdjetivosI.ts');
fs.writeFileSync(iPath, generateContent(iAdjectives, 'adjetivo_i', 'Adjetivo I'), 'utf8');

console.log("Written Na and I adjectives to files!");
