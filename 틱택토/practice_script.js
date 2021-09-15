var body = document.body;
var table = document.createElement('table');
var line = [];
var room = [];


for(var j = 0; j <3; j++){
  var tr = document.createElement('tr');
  line.push(tr);
  room.push([]);
  table.append(tr);
  for(var i = 0; i<3; i++){
    var td = document.createElement('td');
    td
    tr.append(td);
    room[i].push(td);
    // line[j].push(td);
  }
}
console.log(line);
body.append(table);





