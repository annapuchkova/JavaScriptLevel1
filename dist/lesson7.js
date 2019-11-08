'use strict';

// рисуем поле
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
var score = 0;

//рисуем рамку
var drawBorder = function drawBorder() {

  ctx.fillStyle = 'Gray';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

//выводим счет игры
var drawScore = function drawScore() {
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.font = '20px Courier';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ' + score, blockSize, blockSize);
};

var gameOver = function gameOver() {
  clearInterval(intervalId);
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = '60px Courier';
  ctx.fillStyle = 'Black';
  ctx.fillText('Gave Over', width / 2, height / 2);
};

//конструктор для блоков
var Block = function Block(col, row) {
  this.col = col;
  this.row = row;
};

// метод для отрисовки блока на заданных координатах - строка/стоблец
Block.prototype.drawSquare = function (color) {
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

//метод для проверки столкновения с другим блоком
Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

//создаем массив для хранения сегментов тела змеи и конструктор для ее создания
var Snake = function Snake() {
  this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
  this.direction = 'right';
  this.nextDirection = 'right';
};

// метод для отрисовки сегментов тела змеи
Snake.prototype.draw = function () {
  for (var i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare('blue');
  }
};

// метод для добавления нового сегмента змеи - головы и удаления последнего сегмента
Snake.prototype.move = function () {
  var head = this.segments[0]; //существующая голова змеи
  var newHead = void 0; // новая голова змеи

  this.direction = this.nextDirection;

  if (this.direction === 'right') {
    newHead = head.col === widthInBlocks - 2 ? new Block(1, head.row) : new Block(head.col + 1, head.row);
  } else if (this.direction === 'down') {
    newHead = head.row === heightInBlocks -2 ? new Block(head.col, 1) : new Block(head.col, head.row + 1);
  } else if (this.direction === 'left') {
    newHead = head.col === 1 ? new Block(widthInBlocks - 2, head.row) : new Block(head.col - 1, head.row);
  } else if (this.direction === 'up') {
    newHead = head.row === 1 ? new Block(head.col, heightInBlocks - 2) : new Block(head.col, head.row - 1);
  }

  if (this.checkCollision(newHead)) {
    // проверяем не врезалась ли змея в препятствие
    gameOver();
    return;
  }

  this.segments.unshift(newHead); // добавляем новую голову в начало массива сегментов тела

  if (newHead.equal(apple.position)) {
    // проверяем не заняли ли голова змеи ту же позицию, что и корм
    score++;
    apple.move(); // перемещаем корм на новую позицию
  } else {
    this.segments.pop(); // если корм не съеден, удаляем последний сегмент тела
  }
};

Snake.prototype.checkCollision = function (head) {

  var selfCollision = false;  // проверяем на столкновение со своим хвостом
  for (var i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }
  var wallCollision = false; //проверяем на столкновение с кирпичиком
  for (var j = 0; j < walls.length; j++) {
    if (head.equal(walls[j].position)) {
      wallCollision = true;
    }
  }

  return selfCollision || wallCollision;
};

Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === 'up' && newDirection === 'down') {
    // проверка на недопустимое направление
    return;
  } else if (this.direction === 'right' && newDirection === 'left') {
    return;
  } else if (this.direction === 'down' && newDirection === 'up') {
    return;
  } else if (this.direction === 'left' && newDirection === 'right') {
    return;
  }

  this.nextDirection = newDirection;
};

var Apple = function Apple() {
  this.position = new Block(10, 10);
};

Apple.prototype.draw = function () {
  this.position.drawSquare('LimeGreen');
};

Apple.prototype.move = function () {
  var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1; // рандомные ячейки кроме рамки
  var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

var Wall = function Wall() {
  this.position = new Block(20, 20);
  var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1; // рандомные ячейки кроме рамки
  var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

Wall.prototype.draw = function () {
  this.position.drawSquare('Red');
};


var snake = new Snake();
var apple = new Apple();
var walls = [];

var timerID = setInterval(function(){  // рисуем припятствие каждые 5 сек

  walls.push(new Wall());

}, 10000);

var directions = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

function changeDirection(e) {
  console.log(e.keyCode);
  var newDirection = directions[e.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
}

var intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  walls.forEach(function(item) {item.draw();});

  drawBorder();
}, 100);

  function refreshGame() {
    location.reload();
  }
  
addEventListener('keydown', changeDirection);
addEventListener('click', refreshGame);

