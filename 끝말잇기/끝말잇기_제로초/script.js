var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초';
document.body.append(단어);
var 폼  =  document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(이벤트){ // 콜백함수
    이벤트.preventDefault();
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){
        결과창.textContent ='딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    }else{
        결과창.textContent ='땡';
        입력창.value = '';
        입력창.focus();
    }
});

//form 은 기본적으로 enter를 치면 다른 페이지로 넘어 가게 되어있다. 서브밋을 하면 다른페이지로 가거나 새로고침 되는 것이 기본 동작이다.
//기본 동작을 바꾸고 싶을 때는 이벤트.preventDefault();