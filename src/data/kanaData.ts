import { KanaItem } from '../types';

export const HIRAGANA_DATA: KanaItem[] = [
  // A-line
  { id: 'h_a', char: 'あ', romaji: 'a', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Parece a letra "A" desenhada com uma maçã.', exampleWord: 'あさ', exampleReading: 'asa', exampleMeaningPt: 'Manhã' },
  { id: 'h_i', char: 'い', romaji: 'i', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Duas linhas paralelas como dois dedos indicadores (I).', exampleWord: 'いぬ', exampleReading: 'inu', exampleMeaningPt: 'Cachorro' },
  { id: 'h_u', char: 'う', romaji: 'u', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma pessoa curvada carregando algo pesado dizendo "Uff".', exampleWord: 'うみ', exampleReading: 'umi', exampleMeaningPt: 'Mar / Oceano' },
  { id: 'h_e', char: 'え', romaji: 'e', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Parece um atleta correndo com energia.', exampleWord: 'えき', exampleReading: 'eki', exampleMeaningPt: 'Estação de trem' },
  { id: 'h_o', char: 'お', romaji: 'o', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma bola de golfe entrando no buraco circular (O).', exampleWord: 'お茶', exampleReading: 'ocha', exampleMeaningPt: 'Chá verde' },

  // Ka-line
  { id: 'h_ka', char: 'か', romaji: 'ka', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma pessoa dançando e chutando com força.', exampleWord: 'かわ', exampleReading: 'kawa', exampleMeaningPt: 'Rio' },
  { id: 'h_ki', char: 'き', romaji: 'ki', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma chave antiga desenhada ("key").', exampleWord: 'きのう', exampleReading: 'kinou', exampleMeaningPt: 'Ontem' },
  { id: 'h_ku', char: 'く', romaji: 'ku', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Bico aberto de um pássaro ("Kuku!").', exampleWord: 'くるま', exampleReading: 'kuruma', exampleMeaningPt: 'Carro' },
  { id: 'h_ke', char: 'け', romaji: 'ke', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um barril de chopp ("keg") visto de lado.', exampleWord: 'けさ', exampleReading: 'kesa', exampleMeaningPt: 'Esta manhã' },
  { id: 'h_ko', char: 'こ', romaji: 'ko', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Dois traços horizontais como uma cobra enrolada.', exampleWord: 'こども', exampleReading: 'kodomo', exampleMeaningPt: 'Criança' },

  // Sa-line
  { id: 'h_sa', char: 'さ', romaji: 'sa', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Pessoa inclinada servindo saquê.', exampleWord: 'さくら', exampleReading: 'sakura', exampleMeaningPt: 'Flor de cerejeira' },
  { id: 'h_shi', char: 'し', romaji: 'shi', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um anzol de pescar mergulhado na água.', exampleWord: 'しろ', exampleReading: 'shiro', exampleMeaningPt: 'Branco / Castelo' },
  { id: 'h_su', char: 'す', romaji: 'su', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um canudo dando um laço dentro de um suco.', exampleWord: 'すし', exampleReading: 'sushi', exampleMeaningPt: 'Sushi' },
  { id: 'h_se', char: 'せ', romaji: 'se', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Pessoas sentadas lado a lado conversando.', exampleWord: 'せんせい', exampleReading: 'sensei', exampleMeaningPt: 'Professor / Mestre' },
  { id: 'h_so', char: 'そ', romaji: 'so', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Linha em zigue-zague de costura ("sew").', exampleWord: 'そら', exampleReading: 'sora', exampleMeaningPt: 'Céu' },

  // Ta-line
  { id: 'h_ta', char: 'た', romaji: 'ta', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Letras "t" e "a" entrelaçadas.', exampleWord: 'たべる', exampleReading: 'taberu', exampleMeaningPt: 'Comer' },
  { id: 'h_chi', char: 'ち', romaji: 'chi', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma líder de torcida ("cheerleader") pulando.', exampleWord: 'ちず', exampleReading: 'chizu', exampleMeaningPt: 'Mapa' },
  { id: 'h_tsu', char: 'つ', romaji: 'tsu', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma onda curva de um Tsunami gigante.', exampleWord: 'つき', exampleReading: 'tsuki', exampleMeaningPt: 'Lua / Mês' },
  { id: 'h_te', char: 'て', romaji: 'te', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um braço estendido com a mão ("te" significa mão).', exampleWord: 'てんき', exampleReading: 'tenki', exampleMeaningPt: 'Clima / Tempo' },
  { id: 'h_to', char: 'と', romaji: 'to', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um dedo com uma farpa espetada.', exampleWord: 'ともだち', exampleReading: 'tomodachi', exampleMeaningPt: 'Amigo' },

  // Na-line
  { id: 'h_na', char: 'な', romaji: 'na', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma freira orando ajoelhada diante da cruz.', exampleWord: 'なつ', exampleReading: 'natsu', exampleMeaningPt: 'Verão' },
  { id: 'h_ni', char: 'に', romaji: 'ni', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Agulha e linha costurando.', exampleWord: 'にほん', exampleReading: 'nihon', exampleMeaningPt: 'Japão' },
  { id: 'h_nu', char: 'ぬ', romaji: 'nu', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Macarrão noodles enrolado no hashi com laço.', exampleWord: 'ぬま', exampleReading: 'numa', exampleMeaningPt: 'Pântano' },
  { id: 'h_ne', char: 'ね', romaji: 'ne', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um gatinho ("neko") com o rabinho enrolado.', exampleWord: 'ねこ', exampleReading: 'neko', exampleMeaningPt: 'Gato' },
  { id: 'h_no', char: 'の', romaji: 'no', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Placa circular de proibido ("NO").', exampleWord: 'のみもの', exampleReading: 'nomimono', exampleMeaningPt: 'Bebida' },

  // Ha-line
  { id: 'h_ha', char: 'は', romaji: 'ha', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Homem em pé rindo "Ha Ha Ha".', exampleWord: 'はな', exampleReading: 'hana', exampleMeaningPt: 'Flor / Nariz' },
  { id: 'h_hi', char: 'ひ', romaji: 'hi', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um grande sorriso dizendo "Hi!".', exampleWord: 'ひと', exampleReading: 'hito', exampleMeaningPt: 'Pessoa' },
  { id: 'h_fu', char: 'ふ', romaji: 'fu', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Monte Fuji com nuvens ao redor.', exampleWord: 'ふゆ', exampleReading: 'fuyu', exampleMeaningPt: 'Inverno' },
  { id: 'h_he', char: 'へ', romaji: 'he', type: 'hiragana', category: 'gojuon', mnemonicPt: 'A ponta de uma montanha subindo e descendo.', exampleWord: 'へや', exampleReading: 'heya', exampleMeaningPt: 'Quarto / Sala' },
  { id: 'h_ho', char: 'ほ', romaji: 'ho', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Papai Noel com seu chapéu dizendo "Ho Ho Ho".', exampleWord: 'ほん', exampleReading: 'hon', exampleMeaningPt: 'Livro' },

  // Ma-line
  { id: 'h_ma', char: 'ま', romaji: 'ma', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma máscara com duas tiras de amarração.', exampleWord: 'まち', exampleReading: 'machi', exampleMeaningPt: 'Cidade / Bairro' },
  { id: 'h_mi', char: 'み', romaji: 'mi', type: 'hiragana', category: 'gojuon', mnemonicPt: 'O número 21 desenhado com fluidez.', exampleWord: 'みず', exampleReading: 'mizu', exampleMeaningPt: 'Água' },
  { id: 'h_mu', char: 'む', romaji: 'mu', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Vaca pastando e fazendo "Muuu".', exampleWord: 'むし', exampleReading: 'mushi', exampleMeaningPt: 'Inseto' },
  { id: 'h_me', char: 'め', romaji: 'me', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um olho estilizado ("me" em japonês é olho).', exampleWord: 'め', exampleReading: 'me', exampleMeaningPt: 'Olho' },
  { id: 'h_mo', char: 'も', romaji: 'mo', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um anzol pescando mais minhocas ("more").', exampleWord: 'もり', exampleReading: 'mori', exampleMeaningPt: 'Floresta' },

  // Ya-line
  { id: 'h_ya', char: 'や', romaji: 'ya', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um iaque peludo com chifres compridos.', exampleWord: 'やま', exampleReading: 'yama', exampleMeaningPt: 'Montanha' },
  { id: 'h_yu', char: 'ゆ', romaji: 'yu', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um peixe dourado nadando graciosamente.', exampleWord: 'ゆき', exampleReading: 'yuki', exampleMeaningPt: 'Neve' },
  { id: 'h_yo', char: 'よ', romaji: 'yo', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um ioiô pendurado na corda.', exampleWord: 'よる', exampleReading: 'yoru', exampleMeaningPt: 'Noite' },

  // Ra-line
  { id: 'h_ra', char: 'ら', romaji: 'ra', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um camelo com corcova ("rá").', exampleWord: 'らいしゅう', exampleReading: 'raishuu', exampleMeaningPt: 'Próxima semana' },
  { id: 'h_ri', char: 'り', romaji: 'ri', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Fitas de seda esvoaçantes ("ribbon").', exampleWord: 'りんご', exampleReading: 'ringo', exampleMeaningPt: 'Maçã' },
  { id: 'h_ru', char: 'る', romaji: 'ru', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Número 3 segurando uma moeda de um rublo.', exampleWord: 'るす', exampleReading: 'rusu', exampleMeaningPt: 'Ausência de casa' },
  { id: 'h_re', char: 'れ', romaji: 're', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Uma pessoa correndo ("relay race").', exampleWord: 'れんしゅう', exampleReading: 'renshuu', exampleMeaningPt: 'Treino / Prática' },
  { id: 'h_ro', char: 'ろ', romaji: 'ro', type: 'hiragana', category: 'gojuon', mnemonicPt: 'O número 3 aberto (sem o laço do ru).', exampleWord: 'ろうそく', exampleReading: 'rousoku', exampleMeaningPt: 'Vela' },

  // Wa, Wo, N
  { id: 'h_wa', char: 'わ', romaji: 'wa', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Um cisne branco com pescoço curvado.', exampleWord: 'わたし', exampleReading: 'watashi', exampleMeaningPt: 'Eu' },
  { id: 'h_wo', char: 'を', romaji: 'wo (o)', type: 'hiragana', category: 'gojuon', mnemonicPt: 'Pessoa saltando comemorando "Wohoo!" (partícula de objeto).', exampleWord: '本をよむ', exampleReading: 'hon o yomu', exampleMeaningPt: 'Ler o livro' },
  { id: 'h_n', char: 'ん', romaji: 'n', type: 'hiragana', category: 'gojuon', mnemonicPt: 'A letra minúscula "n" escrita em cursiva.', exampleWord: 'おんがく', exampleReading: 'ongaku', exampleMeaningPt: 'Música' },

  // Dakuon (Ga, Za, Da, Ba)
  { id: 'h_ga', char: 'が', romaji: 'ga', type: 'hiragana', category: 'dakuon', mnemonicPt: 'か com dakuten (aspas)', exampleWord: 'がっこう', exampleReading: 'gakkou', exampleMeaningPt: 'Escola' },
  { id: 'h_gi', char: 'ぎ', romaji: 'gi', type: 'hiragana', category: 'dakuon', mnemonicPt: 'き com dakuten', exampleWord: 'ぎんこう', exampleReading: 'ginkou', exampleMeaningPt: 'Banco' },
  { id: 'h_gu', char: 'ぐ', romaji: 'gu', type: 'hiragana', category: 'dakuon', mnemonicPt: 'く com dakuten', exampleWord: 'ぐあい', exampleReading: 'guai', exampleMeaningPt: 'Condição / Saúde' },
  { id: 'h_ge', char: 'げ', romaji: 'ge', type: 'hiragana', category: 'dakuon', mnemonicPt: 'け com dakuten', exampleWord: 'げんき', exampleReading: 'genki', exampleMeaningPt: 'Bem / Saudável' },
  { id: 'h_go', char: 'ご', romaji: 'go', type: 'hiragana', category: 'dakuon', mnemonicPt: 'こ com dakuten', exampleWord: 'ごはん', exampleReading: 'gohan', exampleMeaningPt: 'Arroz / Refeição' },

  { id: 'h_za', char: 'ざ', romaji: 'za', type: 'hiragana', category: 'dakuon', mnemonicPt: 'さ com dakuten', exampleWord: 'ざっし', exampleReading: 'zasshi', exampleMeaningPt: 'Revista' },
  { id: 'h_ji', char: 'じ', romaji: 'ji', type: 'hiragana', category: 'dakuon', mnemonicPt: 'し com dakuten', exampleWord: 'じかん', exampleReading: 'jikan', exampleMeaningPt: 'Tempo / Hora' },
  { id: 'h_zu', char: 'ず', romaji: 'zu', type: 'hiragana', category: 'dakuon', mnemonicPt: 'す com dakuten', exampleWord: 'ずっと', exampleReading: 'zutto', exampleMeaningPt: 'Todo o tempo' },
  { id: 'h_ze', char: 'ぜ', romaji: 'ze', type: 'hiragana', category: 'dakuon', mnemonicPt: 'せ com dakuten', exampleWord: 'ぜんぶ', exampleReading: 'zenbu', exampleMeaningPt: 'Tudo / Total' },
  { id: 'h_zo', char: 'ぞ', romaji: 'zo', type: 'hiragana', category: 'dakuon', mnemonicPt: 'そ com dakuten', exampleWord: 'ぞう', exampleReading: 'zou', exampleMeaningPt: 'Elefante' },

  { id: 'h_da', char: 'だ', romaji: 'da', type: 'hiragana', category: 'dakuon', mnemonicPt: 'た com dakuten', exampleWord: 'だいがく', exampleReading: 'daigaku', exampleMeaningPt: 'Universidade' },
  { id: 'h_ba', char: 'ば', romaji: 'ba', type: 'hiragana', category: 'dakuon', mnemonicPt: 'は com dakuten', exampleWord: 'ばしょ', exampleReading: 'basho', exampleMeaningPt: 'Lugar' },
  { id: 'h_bi', char: 'び', romaji: 'bi', type: 'hiragana', category: 'dakuon', mnemonicPt: 'ひ com dakuten', exampleWord: 'びょういん', exampleReading: 'byouin', exampleMeaningPt: 'Hospital' },
  { id: 'h_bu', char: 'ぶ', romaji: 'bu', type: 'hiragana', category: 'dakuon', mnemonicPt: 'ふ com dakuten', exampleWord: 'ぶんか', exampleReading: 'bunka', exampleMeaningPt: 'Cultura' },
  { id: 'h_be', char: 'べ', romaji: 'be', type: 'hiragana', category: 'dakuon', mnemonicPt: 'へ com dakuten', exampleWord: 'べんきょう', exampleReading: 'benkyou', exampleMeaningPt: 'Estudo' },
  { id: 'h_bo', char: 'ぼ', romaji: 'bo', type: 'hiragana', category: 'dakuon', mnemonicPt: 'ほ com dakuten', exampleWord: 'ぼうし', exampleReading: 'boushi', exampleMeaningPt: 'Chapéu' },

  // Handakuon (Pa, Pi, Pu, Pe, Po)
  { id: 'h_pa', char: 'ぱ', romaji: 'pa', type: 'hiragana', category: 'handakuon', mnemonicPt: 'は com handakuten (círculo)', exampleWord: 'パン', exampleReading: 'pan', exampleMeaningPt: 'Pão' },
  { id: 'h_pi', char: 'ぴ', romaji: 'pi', type: 'hiragana', category: 'handakuon', mnemonicPt: 'ひ com handakuten', exampleWord: 'ぴかぴか', exampleReading: 'pikapika', exampleMeaningPt: 'Brilhante' },
  { id: 'h_pu', char: 'ぷ', romaji: 'pu', type: 'hiragana', category: 'handakuon', mnemonicPt: 'ふ com handakuten', exampleWord: 'ぷるぷる', exampleReading: 'purupuru', exampleMeaningPt: 'Gelatinoso / Tremendo' },
  { id: 'h_pe', char: 'ぺ', romaji: 'pe', type: 'hiragana', category: 'handakuon', mnemonicPt: 'へ com handakuten', exampleWord: 'ぺらぺら', exampleReading: 'perapera', exampleMeaningPt: 'Fluente em idioma' },
  { id: 'h_po', char: 'ぽ', romaji: 'po', type: 'hiragana', category: 'handakuon', mnemonicPt: 'ほ com handakuten', exampleWord: 'ぽかぽか', exampleReading: 'pokapoka', exampleMeaningPt: 'Aconchegante / Quentinho' },

  // Yoon (Combos)
  { id: 'h_kya', char: 'きゃ', romaji: 'kya', type: 'hiragana', category: 'yoon', mnemonicPt: 'ki + ya pequeno', exampleWord: 'きゃく', exampleReading: 'kyaku', exampleMeaningPt: 'Cliente / Hóspede' },
  { id: 'h_kyu', char: 'きゅ', romaji: 'kyu', type: 'hiragana', category: 'yoon', mnemonicPt: 'ki + yu pequeno', exampleWord: 'きゅう', exampleReading: 'kyuu', exampleMeaningPt: 'Nove' },
  { id: 'h_kyo', char: 'きょ', romaji: 'kyo', type: 'hiragana', category: 'yoon', mnemonicPt: 'ki + yo pequeno', exampleWord: 'きょう', exampleReading: 'kyou', exampleMeaningPt: 'Hoje' },
  { id: 'h_sha', char: 'しゃ', romaji: 'sha', type: 'hiragana', category: 'yoon', mnemonicPt: 'shi + ya pequeno', exampleWord: 'しゃしん', exampleReading: 'shashin', exampleMeaningPt: 'Fotografia' },
  { id: 'h_shu', char: 'しゅ', romaji: 'shu', type: 'hiragana', category: 'yoon', mnemonicPt: 'shi + yu pequeno', exampleWord: 'しゅくだい', exampleReading: 'shukudai', exampleMeaningPt: 'Lição de casa' },
  { id: 'h_sho', char: 'しょ', romaji: 'sho', type: 'hiragana', category: 'yoon', mnemonicPt: 'shi + yo pequeno', exampleWord: 'しょくどう', exampleReading: 'shokudou', exampleMeaningPt: 'Refeitório' },
  { id: 'h_cha', char: 'ちゃ', romaji: 'cha', type: 'hiragana', category: 'yoon', mnemonicPt: 'chi + ya pequeno', exampleWord: 'お茶', exampleReading: 'ocha', exampleMeaningPt: 'Chá verde' },
  { id: 'h_chu', char: 'ちゅ', romaji: 'chu', type: 'hiragana', category: 'yoon', mnemonicPt: 'chi + yu pequeno', exampleWord: 'ちゅうごく', exampleReading: 'chuugoku', exampleMeaningPt: 'China' },
  { id: 'h_cho', char: 'ちょ', romaji: 'cho', type: 'hiragana', category: 'yoon', mnemonicPt: 'chi + yo pequeno', exampleWord: 'ちょっと', exampleReading: 'chotto', exampleMeaningPt: 'Um pouco' },
  { id: 'h_rya', char: 'りゃ', romaji: 'rya', type: 'hiragana', category: 'yoon', mnemonicPt: 'ri + ya pequeno', exampleWord: 'りゃく', exampleReading: 'ryaku', exampleMeaningPt: 'Abreviação' },
  { id: 'h_ryu', char: 'りゅ', romaji: 'ryu', type: 'hiragana', category: 'yoon', mnemonicPt: 'ri + yu pequeno', exampleWord: 'りゅうがく', exampleReading: 'ryuugaku', exampleMeaningPt: 'Intercâmbio estudantil' },
  { id: 'h_ryo', char: 'りょ', romaji: 'ryo', type: 'hiragana', category: 'yoon', mnemonicPt: 'ri + yo pequeno', exampleWord: 'りょこう', exampleReading: 'ryokou', exampleMeaningPt: 'Viagem' },
];

export const KATAKANA_DATA: KanaItem[] = [
  // A-line
  { id: 'k_a', char: 'ア', romaji: 'a', type: 'katakana', category: 'gojuon', mnemonicPt: 'Parece o topo de uma pirâmide afiada.', exampleWord: 'アイス', exampleReading: 'aisu', exampleMeaningPt: 'Sorvete / Gelo' },
  { id: 'k_i', char: 'イ', romaji: 'i', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma pessoa em pé com braço estendido.', exampleWord: 'インド', exampleReading: 'indo', exampleMeaningPt: 'Índia' },
  { id: 'k_u', char: 'ウ', romaji: 'u', type: 'katakana', category: 'gojuon', mnemonicPt: 'Parece um teto com uma antena.', exampleWord: 'ウール', exampleReading: 'uuru', exampleMeaningPt: 'Lã' },
  { id: 'k_e', char: 'エ', romaji: 'e', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma viga de aço em formato I / E.', exampleWord: 'エレベーター', exampleReading: 'erebeetaa', exampleMeaningPt: 'Elevador' },
  { id: 'k_o', char: 'オ', romaji: 'o', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um cantor de ópera com braços abertos.', exampleWord: 'オレンジ', exampleReading: 'orenji', exampleMeaningPt: 'Laranja' },

  // Ka-line
  { id: 'k_ka', char: 'カ', romaji: 'ka', type: 'katakana', category: 'gojuon', mnemonicPt: 'Igual ao hiragana か mas reto e angular.', exampleWord: 'カメラ', exampleReading: 'kamera', exampleMeaningPt: 'Câmera' },
  { id: 'k_ki', char: 'キ', romaji: 'ki', type: 'katakana', category: 'gojuon', mnemonicPt: 'A parte superior de uma chave.', exampleWord: 'キッチン', exampleReading: 'kicchin', exampleMeaningPt: 'Cozinha' },
  { id: 'k_ku', char: 'ク', romaji: 'ku', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um cozinheiro ("cook") de perfil.', exampleWord: 'クラス', exampleReading: 'kurasu', exampleMeaningPt: 'Classe / Turma' },
  { id: 'k_ke', char: 'ケ', romaji: 'ke', type: 'katakana', category: 'gojuon', mnemonicPt: 'A letra K com os traços retos.', exampleWord: 'ケーキ', exampleReading: 'keeki', exampleMeaningPt: 'Bolo' },
  { id: 'k_ko', char: 'コ', romaji: 'ko', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois cantos formando um retângulo aberto.', exampleWord: 'コーヒー', exampleReading: 'koohii', exampleMeaningPt: 'Café' },

  // Sa-line
  { id: 'k_sa', char: 'サ', romaji: 'sa', type: 'katakana', category: 'gojuon', mnemonicPt: 'Três espadas cravadas.', exampleWord: 'サンドイッチ', exampleReading: 'sandoicchi', exampleMeaningPt: 'Sanduíche' },
  { id: 'k_shi', char: 'シ', romaji: 'shi', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um rosto piscando sorridente de baixo para cima.', exampleWord: 'シャツ', exampleReading: 'shatsu', exampleMeaningPt: 'Camisa' },
  { id: 'k_su', char: 'ス', romaji: 'su', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um homem esquiando ("ski").', exampleWord: 'スーパー', exampleReading: 'suupaa', exampleMeaningPt: 'Supermercado' },
  { id: 'k_se', char: 'セ', romaji: 'se', type: 'katakana', category: 'gojuon', mnemonicPt: 'Similar ao hiragana せ estilizado.', exampleWord: 'セーター', exampleReading: 'seetaa', exampleMeaningPt: 'Suéter' },
  { id: 'k_so', char: 'ソ', romaji: 'so', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois traços apontando de cima para baixo.', exampleWord: 'ソファ', exampleReading: 'sofa', exampleMeaningPt: 'Sofá' },

  // Ta-line
  { id: 'k_ta', char: 'タ', romaji: 'ta', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma pipa voando no céu.', exampleWord: 'タクシー', exampleReading: 'takushii', exampleMeaningPt: 'Táxi' },
  { id: 'k_chi', char: 'チ', romaji: 'chi', type: 'katakana', category: 'gojuon', mnemonicPt: 'Parece o número 5 ou um cheer.', exampleWord: 'チーズ', exampleReading: 'chiizu', exampleMeaningPt: 'Queijo' },
  { id: 'k_tsu', char: 'ツ', romaji: 'tsu', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois olhos olhando de cima para baixo.', exampleWord: 'ツアー', exampleReading: 'tsuaa', exampleMeaningPt: 'Excursão / Tour' },
  { id: 'k_te', char: 'テ', romaji: 'te', type: 'katakana', category: 'gojuon', mnemonicPt: 'Poste de televisão ("TV") antigo.', exampleWord: 'テレビ', exampleReading: 'terebi', exampleMeaningPt: 'Televisão' },
  { id: 'k_to', char: 'ト', romaji: 'to', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um totem sagrado ou poste reto com galho.', exampleWord: 'トイレ', exampleReading: 'toire', exampleMeaningPt: 'Banheiro' },

  // Na-line
  { id: 'k_na', char: 'ナ', romaji: 'na', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma espada ninja ou cruz.', exampleWord: 'ナイフ', exampleReading: 'naifu', exampleMeaningPt: 'Faca' },
  { id: 'k_ni', char: 'ニ', romaji: 'ni', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois traços horizontais (o número 2 二).', exampleWord: 'ニュース', exampleReading: 'nyuusu', exampleMeaningPt: 'Notícias' },
  { id: 'k_nu', char: 'ヌ', romaji: 'nu', type: 'katakana', category: 'gojuon', mnemonicPt: 'Palitos de comer hashi.', exampleWord: 'ヌードル', exampleReading: 'nuudoru', exampleMeaningPt: 'Noodle / Macarrão' },
  { id: 'k_ne', char: 'ネ', romaji: 'ne', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um atleta cruzando a fita ("net").', exampleWord: 'ネクタイ', exampleReading: 'nekutai', exampleMeaningPt: 'Gravata' },
  { id: 'k_no', char: 'ノ', romaji: 'no', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma linha diagonal simples descendo.', exampleWord: 'ノート', exampleReading: 'nooto', exampleMeaningPt: 'Caderno' },

  // Ha-line
  { id: 'k_ha', char: 'ハ', romaji: 'ha', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma cabana ou telhado.', exampleWord: 'ハンバーガー', exampleReading: 'hanbaagaa', exampleMeaningPt: 'Hambúrguer' },
  { id: 'k_hi', char: 'ヒ', romaji: 'hi', type: 'katakana', category: 'gojuon', mnemonicPt: 'Pessoa dando um chute alto.', exampleWord: 'ヒーロー', exampleReading: 'hiiroo', exampleMeaningPt: 'Herói' },
  { id: 'k_fu', char: 'フ', romaji: 'fu', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma bandeira tremulando no vento.', exampleWord: 'フォーク', exampleReading: 'fooku', exampleMeaningPt: 'Garfo' },
  { id: 'k_he', char: 'ヘ', romaji: 'he', type: 'katakana', category: 'gojuon', mnemonicPt: 'Igual ao hiragana へ.', exampleWord: 'ヘリコプター', exampleReading: 'herikoputaa', exampleMeaningPt: 'Helicóptero' },
  { id: 'k_ho', char: 'ホ', romaji: 'ho', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma cruz com dois braços abertos.', exampleWord: 'ホテル', exampleReading: 'hoteru', exampleMeaningPt: 'Hotel' },

  // Ma-line
  { id: 'k_ma', char: 'マ', romaji: 'ma', type: 'katakana', category: 'gojuon', mnemonicPt: 'Taça de Martini com azeitona.', exampleWord: 'マスク', exampleReading: 'masuku', exampleMeaningPt: 'Máscara' },
  { id: 'k_mi', char: 'ミ', romaji: 'mi', type: 'katakana', category: 'gojuon', mnemonicPt: 'Três notas musicais ou traços.', exampleWord: 'ミルク', exampleReading: 'miruku', exampleMeaningPt: 'Leite' },
  { id: 'k_mu', char: 'ム', romaji: 'mu', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um triângulo muscular.', exampleWord: 'ミュージアム', exampleReading: 'myuujiamu', exampleMeaningPt: 'Museu' },
  { id: 'k_me', char: 'メ', romaji: 'me', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um "X" ligeiramente torto.', exampleWord: 'メニュー', exampleReading: 'menyuu', exampleMeaningPt: 'Menu / Cardápio' },
  { id: 'k_mo', char: 'モ', romaji: 'mo', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois traços e uma perna reta.', exampleWord: 'モノレール', exampleReading: 'monoreeru', exampleMeaningPt: 'Monotrilho' },

  // Ya, Yu, Yo
  { id: 'k_ya', char: 'ヤ', romaji: 'ya', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um iate navegando.', exampleWord: 'ヤシ', exampleReading: 'yashi', exampleMeaningPt: 'Palmeira' },
  { id: 'k_yu', char: 'ユ', romaji: 'yu', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma caixa aberta ou letra U.', exampleWord: 'ユーモア', exampleReading: 'yuumoa', exampleMeaningPt: 'Humor' },
  { id: 'k_yo', char: 'ヨ', romaji: 'yo', type: 'katakana', category: 'gojuon', mnemonicPt: 'A letra E virada para a esquerda.', exampleWord: 'ヨーグルト', exampleReading: 'yooguruto', exampleMeaningPt: 'Iogurte' },

  // Ra-line
  { id: 'k_ra', char: 'ラ', romaji: 'ra', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um farol com feixe de luz.', exampleWord: 'ラジオ', exampleReading: 'rajio', exampleMeaningPt: 'Rádio' },
  { id: 'k_ri', char: 'リ', romaji: 'ri', type: 'katakana', category: 'gojuon', mnemonicPt: 'Dois traços verticais.', exampleWord: 'リモコン', exampleReading: 'rimokon', exampleMeaningPt: 'Controle remoto' },
  { id: 'k_ru', char: 'ル', romaji: 'ru', type: 'katakana', category: 'gojuon', mnemonicPt: 'Duas pernas correndo.', exampleWord: 'ルール', exampleReading: 'ruuru', exampleMeaningPt: 'Regra' },
  { id: 'k_re', char: 'レ', romaji: 're', type: 'katakana', category: 'gojuon', mnemonicPt: 'Um ângulo reto em subida.', exampleWord: 'レストラン', exampleReading: 'resutoran', exampleMeaningPt: 'Restaurante' },
  { id: 'k_ro', char: 'ロ', romaji: 'ro', type: 'katakana', category: 'gojuon', mnemonicPt: 'Uma boca ou caixa quadrada ("robot").', exampleWord: 'ロボット', exampleReading: 'robotto', exampleMeaningPt: 'Robô' },

  // Wa, Wo, N
  { id: 'k_wa', char: 'ワ', romaji: 'wa', type: 'katakana', category: 'gojuon', mnemonicPt: 'Taça de vinho ("wine").', exampleWord: 'ワイン', exampleReading: 'wain', exampleMeaningPt: 'Vinho' },
  { id: 'k_wo', char: 'ヲ', romaji: 'wo', type: 'katakana', category: 'gojuon', mnemonicPt: 'Raro em katakana, usado em certas marcas.', exampleWord: 'ヲタク', exampleReading: 'wotaku', exampleMeaningPt: 'Otaku' },
  { id: 'k_n', char: 'ン', romaji: 'n', type: 'katakana', category: 'gojuon', mnemonicPt: 'Traço de baixo para cima com ponto.', exampleWord: 'パン', exampleReading: 'pan', exampleMeaningPt: 'Pão' },
];
