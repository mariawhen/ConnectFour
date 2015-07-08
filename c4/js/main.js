console.log('activate framework!');

var col0 = [null, null, null, null, null, null];
var col1 = [null, null, null, null, null, null];
var col2 = [null, null, null, null, null, null];
var col3 = [null, null, null, null, null, null];
var col4 = [null, null, null, null, null, null];
var col5 = [null, null, null, null, null, null];
var col6 = [null, null, null, null, null, null];

var board = [col0, col1, col2, col3, col4, col5, col6];

var turn = 0;

var squares = document.getElementsByClassName("top");


var addPiece = function(columnClicked) {
  for (var i = board[columnClicked].length - 1; i >= 0; i--) {
    if (board[columnClicked][i] === null) {
      board[columnClicked][i] = turn;
      var column = columnClicked;
      var row = i;
      changeColor(column, row);
      console.log(row);
      console.log(column);
      break;
    }
  }
};

var changeColor = function(column, row) {

  var id = row.toString() + "-" + column.toString();
  console.log(document.getElementById(id));
  if (turn === 1) {
    document.getElementById(id).style.backgroundColor = '#355873';
  } else {
    document.getElementById(id).style.backgroundColor = '#7E95A6';
  }
};

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    var columnClicked = this.id;
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    addPiece(columnClicked);
    getWinner(board);

  })
}
var getWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      declareWinner();
    }
  }
};

var declareWinner = function (){
  alert("Player 2 WINS!");
};

// labels coordinates on board
function labelMyShit() {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        var id = i.toString() + "-" + j.toString();
        document.getElementById(id).innerHTML = id;
        document.getElementById(id).style.textAlign = 'center';
      }
    }
  }
  //   Dead Man's Land
  // labelMyShit();
  // document.getElementById('row2').childNodes[1].style.backgroundColor = 'red'
