////////////////   Dead Man's Land  ////////////////


// column arrays that go vertically on the board
// var col0 = [null, null, null, null, null, null];
// var col1 = [null, null, null, null, null, null];
// var col2 = [null, null, null, null, null, null];
// var col3 = [null, null, null, null, null, null];
// var col4 = [null, null, null, null, null, null];
// var col5 = [null, null, null, null, null, null];
// var col6 = [null, null, null, null, null, null];
//array that holds the column arrays
// var board = [col0, col1, col2, col3, col4, col5, col6 ];
//arrays for horizontal combos
// var h0 = [col0[0], col1[0], col2[0], col3[0], col4[0], col5[0], col6[0]];
// var h1 = [col0[1], col1[1], col2[1], col3[1], col4[1], col5[1], col6[1]];
// var h2 = [col0[2], col1[2], col2[2], col3[2], col4[2], col5[2], col6[2]];
// var h3 = [col0[3], col1[3], col2[3], col3[3], col4[3], col5[3], col6[3]];
// var h4 = [col0[4], col1[4], col2[4], col3[4], col4[4], col5[4], col6[4]];
// var h5 = [col0[5], col1[5], col2[5], col3[5], col4[5], col5[5], col6[5]];
// var h6 = [col0[6], col1[6], col2[6], col3[6], col4[6], col5[6], col6[6]];
// var hgrid = [col0, col1, col2, col3, col4, col5, col6, h0, h1, h2, h3, h4, h5, h6];

// // arrays for DIAGONAL left to right combos
// var d0 = [col0[2], col1[3], col2[4], col3[5]];
// var d1 = [col0[1], col1[2], col2[3], col3[4]];
// var d2 = [col1[2], col2[3], col3[4], col4[5]];
// var d3 = [col0[0], col1[1], col2[2], col3[3]];
// var d4 = [col1[1], col2[2], col3[3], col4[4]];
// var d5 = [col2[2], col3[3], col4[5], col5[5]];
// var d6 = [col1[0], col2[1], col3[2], col4[3]];
// var d7 = [col2[1], col3[2], col4[3], col5[4]];
// var d8 = [col3[2], col4[3], col5[4], col6[5]];
// var d9 = [col2[0], col3[1], col4[2], col5[3]];
// var d10 = [col3[1], col4[2], col5[3], col6[4]];
// var d11 = [col3[0], col4[1], col5[2], col6[3]];
// var diag1 = [col0, col1, col2, col3, col4, col5, col6, d0, d1, d2, d3, d4, d5, d6];
// // arrays for DIAGONAL right to left combos
// var dr0 = [col0[3], col1[2], col2[1], col3[0]];
// var dr1 = [col0[4], col1[3], col2[2], col3[1]];
// var dr2 = [col1[3], col2[2], col3[1], col4[0]];
// var dr3 = [col0[5], col1[4], col2[3], col3[2]];
// var dr4 = [col1[4], col2[3], col3[2], col4[1]];
// var dr5 = [col2[3], col3[2], col4[1], col5[0]];
// var dr6 = [col1[5], col2[4], col3[3], col4[2]];
// var dr7 = [col2[4], col3[3], col4[2], col5[1]];
// var dr8 = [col3[3], col4[2], col5[1], col6[0]];
// var dr9 = [col2[5], col3[4], col4[3], col5[2]];
// var dr10 = [col3[4], col4[5], col5[2], col6[1]];
// var dr11 = [col3[5], col4[4], col5[3], col6[2]];
// var diag2 = [col0, col1, col2, col3, col4, col5, col6, dr0, dr1, dr2, dr3, dr4, dr5, dr6];

// // diagonal1 win combinations
// var getD1Winner = function(diag1) {
//   for (var i = 0; i < diag1.length; i++) {
//     if (diag1[i].join('').indexOf('0000') > -1) {
//       console.log("zero wins");
//       alert("Player 2 WINS!");
//       resetGame();
//     } else if (diag1[i].join('').indexOf('1111') > -1) {
//       console.log("one wins");
//       alert("Player 1 WINS!");
//       resetGame();
//     }
//   }
// };
// // diagonal2 win combinations
// var getD2Winner = function(diag2) {
//   for (var i = 0; i < diag2.length; i++) {
//     if (diag2[i].join('').indexOf('0000') > -1) {
//       console.log("zero wins");
//       alert("Player 2 WINS!");
//       resetGame(board);
//     } else if (diag2[i].join('').indexOf('1111') > -1) {
//       console.log("one wins");
//       alert("Player 1 WINS!");
//       resetGame(board);
//     }
//   }
// };

// //trying to reset, working progress //clears the array and the board on screen.
// var clearTheBoard = function() {
//   //gathers the ids of every cell in the board.
//   var arr = [];
//   for (var i = 0; i < board[i].length; i++) {
//     for (var j = 0; j < 7; j++) {
//       arr.push(i.toString() + "-" + j.toString());
//     }
//   }
//   // goes through all of the cells and sets background color to white.
//   arr.map(function(x) {
//     if (document.getElementById(x) !== null) {
//       document.getElementById(x).style.backgroundColor = 'white';
//     }
//   });

// document.getElementById(diag1).style.backgroundColor = 'red';

//   //clears the board array
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length ; j++) {
//       board[i][j] = null;
//     }
//   }
//   turn = 0; // reset to first player!
//   // console.log(board);
// }

  // // IIFE (a function that executes immediately)
  // // pass all your columns as arguments and loop through each item and set it to null
  // (function() {
  //   for (var i = 0; i < array.length; i++) {
  //     for (var j = 0; j < array[i].length; j++) {
  //       array[i][j] = null;
  //     }
  //   }
  // })();

//checks for vertical wins
// var getVerWinner = function(board) {
//   for (var i = 0; i < board.length; i++) {
//     if (board[i].join('').indexOf('0000') > -1) {
//       console.log("zero wins");
//       window.alert("Player 2 WINS!");
//       createBoard();
//     } else if (board[i].join('').indexOf('1111') > -1) {
//       console.log("one wins");
//       window.alert("Player 1 WINS!");
//       createBoard();
//     }
//   }
// };
    // if (hgrid[i].join('').indexOf('0000') > -1) {
    //   // console.log("zero wins");
    //   // alert("Player 2 WINS!");
    //   // resetGame();
    // } else if (hgrid[i].join('').indexOf('1111') > -1) {
    //   console.log("one wins");
    //   alert("Player 1 WINS!");
    //   resetGame();
    // }
