//canva= cссылка на канвас ,
// spead1 скорость по x,spead2 = скорость по y
// functionTheEnd колбек, срабатывает при концовке игры
let baall =(canva,spead1,spead2, functionTheEnd = false)=>{
        //создание холста
    let canvas = canva
    let ctx = canvas.getContext("2d");
    //мяч 
    let Ball = {
        x: canvas.width/2,
        y: canvas.height-20,
        radius: 10,
        xSpeed:spead1,
        ySpeed:spead2,
    }
    //ракетка
    let Paddle={
        width: 100,
        x:0,
        height: 10,
        // нажата ли кнопка
        rightPressed: false,
        leftPressed: false,
    }
    Paddle.x = (canvas.width-Paddle.width)/2
    // count очков
    let score = 0;
    // кирпичи
    let Brick={
        columnCount:5,
        rowCount:3,
        height:20,
        width:75,
        padding:10,
        offsetTop:30,
        offsetLeft: 30,
    }
    // cощдание массива кирпичей  ======= colunn- столб row-ряд
    let bricks = [];
    for(let column=0; column < Brick.columnCount; column++) {
        bricks[column] = [];
        for(let row=0; row<Brick.rowCount; row++) {
            bricks[column][row] = { x: 0, y: 0 , status:1};
        }
    }
    // отрисовка уже имеющегося массива кирпичей и присвоение им координат
    function drawBricks() {
        for(let  colunn=0; colunn<Brick.columnCount; colunn++) {
            for(let  row=0; row<Brick.rowCount; row++) {
                if(bricks[colunn][row].status === 1) {
                var brickX = (colunn*(Brick.width+Brick.padding))+Brick.offsetLeft;
                var brickY = (row*(Brick.height+Brick.padding))+Brick.offsetTop;
                bricks[colunn][row].x = brickX;
                bricks[colunn][row].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, Brick.width, Brick.height);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
                }
            }
        }
    }



    // основная функция отрисовки
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        collisionDetection();
        drawPaddle();
        drawScore();
        drawBall();
        Ball.x += Ball.xSpeed;
        Ball.y += Ball.ySpeed;
        if(Ball.x + Ball.xSpeed > canvas.width-Ball.radius || Ball.x + Ball.xSpeed < Ball.radius) {
            Ball.xSpeed = -Ball.xSpeed;
        }
        if(Ball.y + Ball.ySpeed < Ball.radius) {
            Ball.ySpeed = -Ball.ySpeed;
        } else if(Ball.y + Ball.ySpeed > canvas.height-Ball.radius) {
            if(Ball.x > Paddle.x && Ball.x < Paddle.x + Paddle.width) {
                Ball.ySpeed = -Ball.ySpeed;
            }
            else {
                if(functionTheEnd){
                    functionTheEnd()
                }
                alert("GAME OVER");
                clearInterval(interval)
            }
        }
        if(Paddle.rightPressed) {
            Paddle.x += 7;
        }
        else if(Paddle.leftPressed) {
            Paddle.x -= 7;
        }
    }



    // отрисовка счета
    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
    }

    //отрисовка меча 
    function drawBall() {
        ctx.beginPath();
        ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    //отрисовка ракетки
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(Paddle.x, canvas.height-Paddle.height, Paddle.width, Paddle.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    // обнаружение сталкновения
    function collisionDetection() {
        for(let colunn=0; colunn<Brick.columnCount; colunn++) {
            for(let row=0; row<Brick.rowCount; row++) {
                // b-каждый кирпич
                let b = bricks[colunn][row];
                // проверка если кирпич активен то убрать его изменив статус
                if(b.status === 1) {
                    if(Ball.x > b.x && Ball.x < b.x+Brick.width && Ball.y > b.y && Ball.y < b.y+Brick.height) {
                        Ball.ySpeed = -Ball.ySpeed;
                        b.status = 0;
                        score++;
                        if(score === Brick.columnCount*Brick.rowCount) {
                            // если функция передана то запускаем
                            if(functionTheEnd){
                                functionTheEnd()
                            }
                            alert("YOU WIN, CONGRATULATIONS!");
                            // document.location.reload();
                        }
                    }
                }
            }
        }
    }
    //реагирование клавишь
    function keyDownHandler(e) {
        if(e.keyCode === 39) {
            Paddle.rightPressed = true;
        }
        else if(e.keyCode === 37) {
            Paddle.leftPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode === 39) {
            Paddle.rightPressed = false;
        }
        else if(e.keyCode === 37) {
            Paddle.leftPressed = false;
        }
    }
    //слежение за мышкой
    function mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft-Paddle.width/2;
        if(relativeX > 0 && relativeX < canvas.width-Paddle.width) {
            Paddle.x = relativeX ;
        }
    }
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);







    let interval = setInterval(draw, 10);
}


export default baall