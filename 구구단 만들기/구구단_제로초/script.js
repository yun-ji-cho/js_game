//문제
var randomNumber1 = Math.ceil(Math.random()*9);
var randomNumber2 = Math.ceil(Math.random()*9);
var result = randomNumber1 * randomNumber2;
var numberEl = document.createElement('div');
numberEl.textContent = randomNumber1 + ' 곱하기 ' + randomNumber2 + '는?';
document.body.append(numberEl);

//답 넣는 곳
var answerForm = document.createElement('form');
document.body.append(answerForm);

var answerInput = document.createElement('input');
// answerInput.type = 'number'; //속성은 바로 요소 뒤에 .으로 연결할 수 있음
var answerButton = document.createElement('button');
// answerButton.type = 'submit'
answerButton.textContent = '확인';

answerForm.append(answerInput);
answerForm.append(answerButton);

//결과 확인
var resultAnswer = document.createElement('p');
document.body.append(resultAnswer);


//답 입력시
answerForm.addEventListener('submit', function(e){
  e.preventDefault();
  if(result === +answerInput.value){
    resultAnswer.textContent = '딩동댕';
    randomNumber1 = Math.ceil(Math.random()*9);
    randomNumber2 = Math.ceil(Math.random()*9);
    result = randomNumber1 * randomNumber2;
    numberEl.textContent = randomNumber1 + ' 곱하기 ' + randomNumber2 + '는?';
    answerInput.value='';
    answerInput.focus();
  }else{
    resultAnswer.textContent = '다시 생각해보세요';
    answerInput.value='';
    answerInput.focus();
  }
});







