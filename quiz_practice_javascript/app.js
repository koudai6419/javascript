const quiz = [
  {
    question: 'Q1:ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーＤＳ'
    ],
    correct: 'ニンテンドーＤＳ'
  }, {
    question: 'Q2:ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーＤＳ'
    ],
    correct: 'ニンテンドーＤＳ'
  }, {
    question: 'Q3:ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーＤＳ'
    ],
    correct: 'ニンテンドーＤＳ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }
  // 次の問題へ遷移
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了! あなたは' + score + '/' + quizLength + '正解です');
  }
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
