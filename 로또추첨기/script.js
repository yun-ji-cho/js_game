//Array(45)  이 형태로 빈 배열을 만들 수 있다.
// var 후보군 = Array(45);
// var 필 = 후보군.fill(); //.fill()로 빈 배열을 값으로 채울 수 있다.
// console.log(필); 

//억지로 만드는 방법
// 필.forEach(function(요소, 인덱스){
//     // console.log(요소, 인덱스 + 1);
//     필[인덱스] = 인덱스 + 1;
// });
// console.log(필); 
//empty 의 특징은 반복문이 사용 불가하다.
// 후보군.forEach(function(요소){
//     console.log(요소);
// });

//1:1 매칭 : map
var 후보군 = Array(45)
    .fill()
    .map(function(요소, 인덱스){
    return 인덱스 + 1;
    });
console.log(후보군);

var 셔플 = [];

// 내가 몇번 반복문을 써야 할지 모를 때 : while
while (후보군.length > 0){
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0];
    셔플.push(이동값);
}

console.log(셔플);

var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플
    .slice(0,6)
    .sort(function(p,c){
        return p - c;
    });
// 7

//sort(function(p,c){return p - c;} 작은 숫자부터 정렬
console.log('당첨숫자들', 당첨숫자들, '보너스숫자', 보너스) ;

var 결과창 = document.querySelector('.resultView');
function 공색칠하기(숫자, 결과창){
    var 공 = document.createElement('div');
    var 배경색;
    if(숫자 <= 10){
        배경색 = 'red';
    }else if(숫자 <=20){
        배경색 = 'orange';
    }else if(숫자 <=30){
        배경색 = 'yellow';
    }else if(숫자 <=40){
        배경색 = 'blue';
    }else{
        배경색 = 'green';
    }
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    // 공.style.border = '1px solid black';
    공.style.borderRadius = '50%';
    공.style.width = '50px';
    공.style.height = '50px';
    공.style.textAlign = 'center';
    공.style.lineHeight = '50px';
    공.style.marginRight = '10px'
    공.style.backgroundColor = 배경색;
    공.className = '공클래스'+ 숫자;

    결과창.append(공);
}

//for문 안에 비동기 함수가 들어있는 경우 클로저 문제가 발생한다.
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[0], 결과창);
},1000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[1], 결과창);
},2000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[2], 결과창);
},3000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[3], 결과창);
},4000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[4], 결과창);
},5000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    공색칠하기(당첨숫자들[5], 결과창);
},6000);
setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
    var 보너스칸 = document.getElementsByClassName('bonus')[0];
    공색칠하기(보너스, 보너스칸);
},7000);

// for(var i = 0 ; i < 당첨숫자들.length; i += 1){
//     setTimeout(function 비동기콜백함수(){ //안 나오는 이유는 closer
//         var 공 = document.createElement('div');
//         공.textContent = 당첨숫자들[i];
//         결과창.append(공);
//     },1000);
// }

// var 보너스칸 = document.getElementsByClassName('bonus')[0];
// var 보너스공 = document.createElement('div');
// 보너스공.textContent = 보너스;
// 보너스칸.appendChild(보너스공);


