var table = document.createElement('table');
var table_td = document.createElement('td');
var line = [];
var room = [];
var turn = 'X'
var result = document.createElement('div');

var checkRoom = function(e){
    var eventLine = line.indexOf(e.target.parentNode);
    var eventRoom = room[eventLine].indexOf(e.target);

    if(room[eventLine][eventRoom].textContent !== ""){ //칸이 이미 채워져 있는가?
        console.log('빈칸이 아닙니다.');
        
    }else{
        console.log('빈칸입니다.');
        
        room[eventLine][eventRoom].textContent = turn;
        //세칸 다 채워졌나?
        console.log('줄', eventLine);
        var bingo = false;
        //가로줄 검사
        if(
            room[eventLine][0].textContent === turn && 
            room[eventLine][1].textContent === turn && 
            room[eventLine][2].textContent === turn
        ){
            console.log('가로 빙고!');
            bingo = true;
        }
        //세로줄 검사
        if(
            room[0][eventRoom].textContent === turn && 
            room[1][eventRoom].textContent === turn && 
            room[2][eventRoom].textContent === turn
        ){
            console.log('세로 빙고!');
            bingo = true;
        }

        //대각선 검사 (좌 -> 우)
        if(eventLine === eventRoom){
            if(
                room[0][0].textContent === turn &&
                room[1][1].textContent === turn &&
                room[2][2].textContent === turn
            ){
                bingo = true;
            }
        }
        //대각선 검사 (우 -> 좌)
        if(eventLine + eventRoom === 2){
            if(
                room[0][2].textContent === turn &&
                room[1][1].textContent === turn &&
                room[2][0].textContent === turn
            ){
                bingo = true;
            }
        }

        //다찼으면
        if(bingo){
            result.textContent = turn + '님이 승리!';
            
            //초기화
            turn = 'X';
            room.forEach(function(줄){
                줄.forEach(function(칸){
                    칸.textContent = '';
                })
            })
        }else{
            if(turn === 'X'){
                turn = 'O';
            }else{
                turn = 'X';
            }
        }

    }


}
for(var i = 0; i<3; i+=1 ){
    var table_tr = document.createElement('tr');
    line.push(table_tr);
    room.push([]);
    table.append(table_tr);
    for(var j = 0; j<3; j+=1){
        var table_td = document.createElement('td');
        table_td.addEventListener('click', checkRoom);
        room[i].push(table_td);
        table_tr.append(table_td);
    }
}
console.log(line, room);

document.querySelector('.container').append(table);
document.querySelector('.container').append(result);