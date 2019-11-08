// рисуем поле
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;
let score = 0;

//рисуем рамку
const drawBorder = () => {

  ctx.fillStyle = 'Gray';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

//выводим счет игры
const drawScore = () => {
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.font = '20px Courier';
  ctx.fillStyle = 'Black';
  ctx.fillText(`Score: ${score}` , blockSize, blockSize);

};

const gameOver = () => {
  clearInterval(intervalId);
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = '60px Courier';
  ctx.fillStyle = 'Black';
  ctx.fillText(`Gave Over` , width / 2, height / 2);
};

//конструктор для блоков
let Block = (col, row) => {
  this.col = col;
  this.row = row;
};

// метод для отрисовки блока на заданных координатах - строка/стоблец
Block.prototype.drawSquare = (color) => {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);

};


//метод для проверки столкновения с другим блоком
Block.prototype.equal = (otherBlock) => {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

//создаем массив для хранения сегментов тела змеи и конструктор для ее создания
let Snake = () => {
  this.segments = [
    new Block(7, 5),
    new Block(6, 5),
    new Block(5, 5)
  ];

  this.direction = 'right';
  this.nextDirection = 'right';
};

// метод для отрисовки сегментов тела змеи
Snake.prototype.draw = () => {
  for (let i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare('blue');
  }
};

// метод для добавления нового сегмента змеи - головы и удаления последнего сегмента
Snake.prototype.move = () => {
  let head = this.segments[0]; //существующая голова змеи
  let newHead; // новая голова змеи

  this.direction = this.nextDirection;

  if (this.direction === 'right') {
    newHead = head.col === widthInBlocks ? new Block(1, head.row) : new Block(head.col + 1, head.row);
  } else if (this.direction === 'down') {
    newHead = head.row === heightInBlocks ? new Block(head.col, 1) : new Block(head.col, head.row + 1);
  } else if (this.direction === 'left') {
    newHead = head.col === 0 ? new Block(widthInBlocks - 1, head.row) : new Block(head.col - 1, head.row);
  } else if (this.direction === 'up') {
    newHead = head.row === 0 ? new Block(head.col, heightInBlocks - 1) : new Block(head.col, head.row - 1);
  }

  if (this.checkCollision(newHead)) { // проверяем не врезалась ли змея в препятствие
    gameOver();
    return;
  }

  this.segments.unshift(newHead);  // добавляем новую голову в начало массива сегментов тела

 if (newHead.equal(apple.position)) {  // проверяем не заняли ли голова змеи ту же позицию, что и корм
    score++;
    apple.move();  // перемещаем корм на новую позицию
  } else {
    this.segments.pop();  // если корм не съеден, удаляем последний сегмент тела
  }
};

Snake.prototype.checkCollision = (head) => {

  let selfCollision = false;

  for (let i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }
  let wallCollision = false; //проверяем на столкновение с кирпичиком

  for (let j = 0; j < walls.length; j++) {
    if (head.equal(walls[j].position)) {
      wallCollision = true;
    }
  }
  return wallCollision || selfCollision;
};



Snake.prototype.setDirection = (newDirection) => {
  if (this.direction === 'up' && newDirection === 'down') { // проверка на недопустимое направление
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

let Apple = () => {
  this.position = new Block(10, 10);
};

Apple.prototype.draw = () => {
  this.position.drawSquare('LimeGreen');
};


Apple.prototype.move = () => {
  let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1; // рандомные ячейки кроме рамки
  let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

let Wall = function Wall() {
  this.position = new Block(20, 20);
  let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1; // рандомные ячейки кроме рамки
  let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

Wall.prototype.draw = function () {
  this.position.drawSquare('Red');
};

let snake = new Snake();
let apple = new Apple();

let walls = [];

let timerID = setInterval(function(){

  walls.push(new Wall());

}, 5000);

var intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  walls.forEach(function(item) {item.draw();});

  drawBorder();
}, 100);


let directions = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

const changeDirection = (e) => {
  console.log(e.keyCode);
  var newDirection = directions[e.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
}

const refreshGame = () => {
  location.reload();
}

addEventListener('keydown', changeDirection);