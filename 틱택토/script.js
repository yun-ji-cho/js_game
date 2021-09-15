// var table = document.createElement('table');
// var table_td = document.createElement('td');
// var line = [];
// var room = [];

// var checkRoom = function(e){
//     console.log(e.target);
//     console.log(e.target.parentNode);

//     var eventLine = line.indexOf(e.target.parentNode);
//     console.log(eventLine);
//     var eventRoom = room[eventLine].indexOf(e.target);
//     console.log(eventRoom);
// }
// for(var i = 0; i<3; i+=1 ){
//     var table_tr = document.createElement('tr');
//     line.push(table_tr);
//     room.push([]);
//     table.append(table_tr);
//     for(var j = 0; j<3; j+=1){
//         var table_td = document.createElement('td');
//         table_td.addEventListener('click', checkRoom);
//         room[i].push(table_td);
//         table_tr.append(table_td);
//     }
// }
// console.log(line, room);

// document.querySelector('.container').append(table);


var $div = document.getElementsByTagName('div'); //HTMLCollection
var $div3 = document.getElementsByClassName('container'); //HTMLCollection

var $div1 = document.querySelector('div');  //태그자체를 불러옴
var $div4 = document.getElementById('container'); //태그자체를 불러옴

var $div2 = document.querySelectorAll('div'); //NodeList [div#container.container]
var container = document.querySelector('.container');
function userAgentCheckIE(){
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
        container.classList.add('ie');
    }
}

userAgentCheckIE();