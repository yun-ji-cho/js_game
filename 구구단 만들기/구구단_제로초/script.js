//문제
var randomNumber1 = Math.ceil(Math.random()*9);
var randomNumber2 = Math.ceil(Math.random()*9);
var numberEl = document.createElement('div');
numberEl.textContent = randomNumber1 + ' 곱하기 ' + randomNumber2 + '는?';
document.body.append(numberEl);

//답
var answerForm = document.createElement('form');
document.body.append(answerForm);

var answerInput = document.createElement('input');
var answerButton = document.createElement('button');
answerButton.textContent = '확인';

answerForm.append(answerInput);
answerForm.append(answerButton);

// if(){

// }else{

// }







