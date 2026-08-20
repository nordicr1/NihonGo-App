import { JLPTLevel } from '../types';

export interface ConversationItem {
  id: string;
  jlpt: JLPTLevel;
  topic: 'Verbos' | 'Adjetivos' | 'Substantivos' | 'Partículas' | 'Frases Úteis' | 'Situações Cotidianas';
  jp: string;
  reading: string;
  romaji: string;
  meaningPt: string;
  explanationPt: string;
}

export const CONVERSATION_DATA: ConversationItem[] = [
  // N5 Examples
  {
    id: 'conv_n5_1',
    jlpt: 'N5',
    topic: 'Frases Úteis',
    jp: 'ありがとうございます。',
    reading: 'ありがとうございます。',
    romaji: 'Arigatou gozaimasu.',
    meaningPt: 'Muito obrigado.',
    explanationPt: 'Expressão padrão de agradecimento formal.'
  },
  {
    id: 'conv_n5_2',
    jlpt: 'N5',
    topic: 'Partículas',
    jp: '私は学生です。',
    reading: 'わたし は がくせい です。',
    romaji: 'Watashi wa gakusei desu.',
    meaningPt: 'Eu sou estudante.',
    explanationPt: 'A partícula は (wa) indica o tópico da frase (Eu).'
  },
  {
    id: 'conv_n5_3',
    jlpt: 'N5',
    topic: 'Verbos',
    jp: '毎日りんごを食べます。',
    reading: 'まいにち りんご を たべます。',
    romaji: 'Mainichi ringo o tabemasu.',
    meaningPt: 'Todos os dias eu como maçã.',
    explanationPt: 'Uso do verbo 食べます (tabemasu - comer) com a partícula de objeto を (o).'
  },
  {
    id: 'conv_n5_4',
    jlpt: 'N5',
    topic: 'Adjetivos',
    jp: 'この本は面白いです。',
    reading: 'この ほん は おもしろい です。',
    romaji: 'Kono hon wa omoshiroi desu.',
    meaningPt: 'Este livro é interessante.',
    explanationPt: 'Adjetivo い (omoshiroi) descrevendo um substantivo.'
  },

  // N4 Examples
  {
    id: 'conv_n4_1',
    jlpt: 'N4',
    topic: 'Verbos',
    jp: '日本へ行ったことがあります。',
    reading: 'にほん へ いった こと が あります。',
    romaji: 'Nihon e itta koto ga arimasu.',
    meaningPt: 'Eu já fui ao Japão.',
    explanationPt: 'Gramática たことがある (ter a experiência de fazer algo).'
  },
  {
    id: 'conv_n4_2',
    jlpt: 'N4',
    topic: 'Situações Cotidianas',
    jp: '窓を開けてもいいですか。',
    reading: 'まど を あけて も いい です か。',
    romaji: 'Mado o akete mo ii desu ka.',
    meaningPt: 'Posso abrir a janela?',
    explanationPt: 'Uso de てもいいですか para pedir permissão.'
  },

  // N3 Examples
  {
    id: 'conv_n3_1',
    jlpt: 'N3',
    topic: 'Verbos',
    jp: '雨が降っているので、試合は中止になった。',
    reading: 'あめ が ふっている ので、しあい は ちゅうし に なった。',
    romaji: 'Ame ga futte iru node, shiai wa chuushi ni natta.',
    meaningPt: 'Como está chovendo, a partida foi cancelada.',
    explanationPt: 'Uso de ので para indicar causa/razão de forma objetiva.'
  },

  // N2 Examples
  {
    id: 'conv_n2_1',
    jlpt: 'N2',
    topic: 'Situações Cotidianas',
    jp: '会議の最中に、携帯電話が鳴ってしまった。',
    reading: 'かいぎ の さいちゅう に、けいたいでんわ が なって しまった。',
    romaji: 'Kaigi no saichuu ni, keitaidenwa ga natte shimatta.',
    meaningPt: 'Bem no meio da reunião, o celular tocou.',
    explanationPt: 'Gramática 最中 (saichuu): "bem no meio de algo".'
  },

  // N1 Examples
  {
    id: 'conv_n1_1',
    jlpt: 'N1',
    topic: 'Verbos',
    jp: '彼の努力には感心させられるものがある。',
    reading: 'かれ の どりょく に は かんしん させられる もの が ある。',
    romaji: 'Kare no doryoku ni wa kanshin saserareru mono ga aru.',
    meaningPt: 'Há algo no esforço dele que me faz admirá-lo profundamente.',
    explanationPt: 'Estrutura causal passiva indicando que uma emoção é forçada a surgir.'
  }
];
