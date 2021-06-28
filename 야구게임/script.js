var body = document.body;
var chooseNumber = [];
var result = document.createElement('h1');
var chance = document.createElement('p');
var chanceNum = document.createElement('span');
var countWrong = 0;
var form  = document.createElement('form');
var input = document.createElement('input');
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '확인';

body.append(result);
body.append(form);
form.append(input);
form.append(button);

function randomNumberMaker(){
    var numberlist = [1,2,3,4,5,6,7,8,9];
    chooseNumber = [];
    for(var i = 0; i<4; i = i+1){
        // var choiceNum = numberlist.pop();
        //push : 마지막에 추가 , pop : 마지막 것 뽑기 , unshift : 처음에 추가, shift : 처음것 뽑기
        var choiceNum = numberlist.splice(Math.floor(Math.random() * (9 - i)),1)[0]; //배열로 뻡히는 것을 원하는 것이 아니라 숫자로 뽑기 위해 '[0]'으로 배열의 첫번째 것 선택
        //뽑고나서 갯수를 조절해줘야 함 : (9 - i)
        chooseNumber.push(choiceNum);
    }
    result.textContent = '야구게임 해볼까요??';
    input.value = '';
    chanceNum.textContent = 10;
    countWrong = 0;
    console.log(chooseNumber);
}

chance.textContent = '남은 기회 : ';
chanceNum.textContent = 10;
chance.append(chanceNum);
body.append(chance);

//재도전 버튼 만들기
var replayBtn = document.createElement('button');
replayBtn.textContent = '재도전';
replayBtn.className = 'replay';
body.append(replayBtn);

replayBtn.addEventListener('click', function(){
    randomNumberMaker();
    record.innerHTML ='';
});

//이력 남기기
var recordTitle = document.createElement('h3');
recordTitle.textContent = 'history';
body.append(recordTitle);

var record = document.createElement('ul');
body.append(record);

//함수 실행
randomNumberMaker();


form.addEventListener('submit', function (e){
    e.preventDefault();
    if(countWrong >= 10){  //기회를 모두 소진했을 때
        alert('기회가 끝났습니다. YOU LOSE!!!');
        result.textContent = '정답은' + chooseNumber.join('') + '입니다.';
        replayBtn.classList.add('on');
        
    }else{ //기회가 남았을 때
        if(chooseNumber.join('') === input.value){
            result.textContent = '홈런!!';
            setTimeout(function(){
                randomNumberMaker();
            },1000);
        }else{
            if(input.value.length < 4 ){ //3자리 이하를 입력했을 경우
                alert('4자리를 입력해주세요');
                input.value = '';   
                return false;
            }
            var resultArray = input.value.split('');
            var strike = 0;
            var ball = 0;
            for(var i = 0; i <4; i = i+1){
                var chk = 0;
                var value = resultArray[i];
                for(var j = 0; j < resultArray.length; j++) { //사용자가 중복된 숫자를 입력했을 경우
                    if(resultArray[j].indexOf(value) != -1) chk++;
                }
                if(chk > 1) {
                    alert("'" + value + "'" + "는 중복된 값입니다. 4자리 모두 중복되지 않은 수여야 합니다.");
                    input.value='';
                    return false;
                }else if(+resultArray[i] === chooseNumber[i]){ //같은자리인지 확인
                    strike++;
                }else if(chooseNumber.indexOf(+resultArray[i]) > -1){ ////배열.indexOf(값) : 값의 위치를 알 수 있다. 없으면 -1
                    ball++; //여기는 무조건 같은 자리가 않은 것 : ball
                }
            }
            result.textContent = strike +'스트라이크 ' + ball+'볼';
            input.focus();
            countWrong++;
            chanceNum.textContent = 10 - countWrong;
            var recordList = document.createElement('li');
            recordList.textContent = input.value + ' : ' + result.textContent;
            record.append(recordList);
            input.value = '';    
        }
    }
});