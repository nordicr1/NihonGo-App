import fs from 'fs';

let content = fs.readFileSync('./src/data/jlptN5TestData.ts', 'utf8');

const additionalQuestions = `  {
    id: 1001,
    type: 'sentence_builder',
    question: 'Nós fomos ao Japão ano passado.',
    options: ['去年', '日本へ', '私たち', 'は', '行きました'],
    correctAnswer: -1,
    correctSentence: '私たちは去年日本へ行きました',
    translation: 'Nós fomos ao Japão ano passado.',
    explanation: 'A ordem natural é Tópico (私たちは) + Tempo (去年) + Destino (日本へ) + Verbo (行きました).'
  },
  {
    id: 1002,
    type: 'sentence_builder',
    question: 'Eu bebo café todos os dias de manhã.',
    options: ['コーヒー', '毎日', 'を', '朝', '飲みます'],
    correctAnswer: -1,
    correctSentence: '毎日朝コーヒーを飲みます',
    translation: 'Eu bebo café todos os dias de manhã.',
    explanation: 'A ordem é Tempo (毎日朝) + Objeto (コーヒーを) + Verbo (飲みます).'
  },
`;

content = content.replace('export const JLPT_N5_TEST: JLPTQuestion[] = [', 'export const JLPT_N5_TEST: JLPTQuestion[] = [\n' + additionalQuestions);

fs.writeFileSync('./src/data/jlptN5TestData.ts', content, 'utf8');
