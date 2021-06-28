var body = document.body;
var chooseNumber = [];

function randomNumberMaker(){
    var numberlist = [1,2,3,4,5,6,7,8,9];
    for(var i = 0; i<4; i = i+1){
        // var choiceNum = numberlist.pop();
        //push : 마지막에 추가 , pop : 마지막 것 뽑기 , unshift : 처음에 추가, shift : 처음것 뽑기
        var choiceNum = numberlist.splice(Math.floor(Math.random() * (9 - i)),1)[0]; //배열로 뻡히는 것을 원하는 것이 아니라 숫자로 뽑기 위해 '[0]'으로 배열의 첫번째 것 선택
        //뽑고나서 갯수를 조절해줘야 함 : (9 - i)
        chooseNumber.push(choiceNum);
    }

    console.log(chooseNumber);
}

randomNumberMaker();



var result = document.createElement('h1');
body.append(result);
result.textContent = '야구게임 해볼까요?';
var form  = document.createElement('form');
var input = document.createElement('input');
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '확인';
body.append(form);

form.append(input);
form.append(button);

var chance = document.createElement('p');
var chanceNum = document.createElement('span');
var countWrong = 0;
chance.textContent = '남은 횟수 : ';
chanceNum.textContent = 10;
chance.append(chanceNum);
body.append(chance);


form.addEventListener('submit', function (e){
    e.preventDefault();
    if(chooseNumber.join('') === input.value){
        result.textContent = '홈런!!';
        chooseNumber = [];
        randomNumberMaker();
        input.value='';
        input.focus();
    }else{
        var resultArray = input.value.split('');
        var strike = 0;
        var ball = 0;
        for(var i = 0; i <4; i = i+1){
            if(+resultArray[i] === chooseNumber[i]){  //같은자리인지 확인
                strike++;
            }else if(chooseNumber.indexOf(+resultArray[i]) > -1) { //배열.indexOf(값) : 값의 위치를 알 수 있다. 없으면 -1
                ball++; //여기는 무조건 같은 자리가 않은 것 : ball
            }
        }
        if(countWrong >= 10){
            alert('기회가 끝났습니다. YOU LOSE!!!');
            result.textContent = '정답은' + ;
        }else{
            result.textContent = strike +'스트라이크 ' + ball+'볼';
            input.focus();
            countWrong++;
            chanceNum.textContent = 10 - countWrong;
        }
    }

    
    // console.log(input.value);
    // if(input.value === )
});