'use strict';

var abc = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
var numbers = ['', '1', '2', '3', '4', '5', '6', '7', '8', ''];

var figuresBlack = ['', { name: 'blackRook1', img: '&#9820;' }, { name: 'blackKnight1', img: '&#9822;' }, { name: 'blackBishop2', img: '&#9821;' }, { name: 'blackQueen', img: '&#9819;' }, { name: 'blackKing', img: '&#9818;' }, { name: 'lackBishop2', img: '&#9821;' }, { name: 'blackKnight2', img: '&#9822;' }, { name: 'blackRook2', img: '&#9820;' }, '', { name: 'blackPawn', img: '&#9823;' }];
var figuresWhite = ['', { name: 'whiteRook1', img: '&#9814;' }, { name: 'whiteKnight1', img: '&#9816;' }, { name: 'whiteBishop2', img: '&#9815;' }, { name: 'whiteQueen', img: '&#9813;' }, { name: 'whiteKing', img: '&#9812;' }, { name: 'whiteBishop2', img: '&#9815;' }, { name: 'whiteKnight2', img: '&#9816;' }, { name: 'whiteRook2', img: '&#9814;' }, '', { name: 'whitePawn', img: '&#9817;' }];

var getChess = function getChess() {

    var board = document.createElement("div");
    board.className = "board";
    wrapper.appendChild(board);
    var table = document.createElement("table");
    table.className = "table_board";
    for (var i = 9; i >= 0; i--) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            td.id = abc[j] + '' + i;
            if (i == 0 || j == 0 || i == 9 || j == 9) {
                td.className = "aside";
            } else {
                td.className = i % 2 == j % 2 ? "white" : "black";
            }

            var div = void 0;
            if (j == 0 || j == 9) {
                switch (j) {
                    case 0:
                        div = document.createElement('div');
                        div.className = "noRotate";
                        div.innerHTML = numbers[i];
                        td.append(div);
                        break;
                    case 9:
                        div = document.createElement('div');
                        div.className = "rotate";
                        div.innerHTML = numbers[i];
                        td.append(div);
                        break;
                }
            } else {

                switch (i) {
                    case 7:
                        div = document.createElement('div');
                        div.className = "figure";
                        div.innerHTML = figuresBlack[10].img;
                        div.id = figuresBlack[10].name + j;
                        td.append(div);
                        break;
                    case 2:
                        div = document.createElement('div');
                        div.className = "figure";
                        div.innerHTML = figuresWhite[10].img;
                        div.id = figuresWhite[10].name + j;
                        td.append(div);
                        break;
                    case 0:
                        div = document.createElement('div');
                        div.className = "noRotate";
                        div.innerHTML = abc[j];
                        td.append(div);
                        break;
                    case 9:
                        div = document.createElement('div');
                        div.className = "rotate";
                        div.innerHTML = abc[j];
                        td.append(div);
                        break;
                    case 1:
                        div = document.createElement('div');
                        div.className = "figure";
                        div.innerHTML = figuresWhite[j].img;
                        div.id = figuresWhite[j].name;
                        td.append(div);
                        break;
                    case 8:
                        div = document.createElement('div');
                        div.className = "figure";
                        div.innerHTML = figuresBlack[j].img;
                        div.id = figuresBlack[j].name;
                        td.append(div);
                        break;
                    default:
                        td.innerHTML = '';
                }
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    board.appendChild(table);
};