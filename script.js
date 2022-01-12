let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let general = document.querySelector("#general");
let barX = 0;
let ballY = 0;
let ballX = 0;

let ballTop = -2; 
let ballLeft = 2; 

ball.style.top = 600/2 + 'px';
ball.style.left = (700/2) - (50/2) + 'px';

function pxAdd(numb){
    return numb + 'px';
}

function gameLoop(){
    // topun qiymetleri
    ball.style.top = pxAdd(parseInt(ball.style.top) + ballTop);
    ball.style.left = pxAdd(parseInt(ball.style.left) + ballLeft);
    
    // top ust ve alt hisseye deyse, X uzre geri qayidsin
    if(parseInt(ball.style.top) <= 0 || parseInt(ball.style.top) + 50 >=600){
        ballTop *= -1;
    }

    // top sag ve sol hisseye deyse, Y uzre geri qayidsin
    if(parseInt(ball.style.left) <= 0  || parseInt(ball.style.top)  >= 700){
        ballLeft *= -1;
    }else if(parseInt(ball.style.left) + 50 >= 700  && parseInt(ball.style.top) >= 0){
        ballLeft *= -1;     
    }
}

setInterval(gameLoop, 10);



onkeydown = barMove;

function barMove(e){
    if(e.keyCode == "39"){
        if(barX<0 || barX<600){
            barX += 25
        }
    }

    if(e.keyCode == "37"){
        if(barX>0){
            barX-=25;
        }
    }

    bar.style.left = barX + "px";

}




