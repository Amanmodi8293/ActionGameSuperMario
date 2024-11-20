setInterval(() => {
    boy = document.querySelector(".boy");
    container = document.querySelector(".containeranimay");
    gameover = document.querySelector(".gameover");
    highscore = document.querySelector(".highscore");
    fly = document.querySelector(".fly");
    bg = document.querySelector(".container");
    road = document.querySelector(".road");


    dragon = document.querySelector(".dragon");
    dragon1 = document.querySelector(".dragon1");
    dragon2 = document.querySelector(".dragon2");
    dragon3 = document.querySelector(".dragon3");
    dragon4 = document.querySelector(".dragon4");
    dragon5 = document.querySelector(".dragon5");
    dragon6 = document.querySelector(".dragon6");
    dragon7 = document.querySelector(".dragon7");
    dragon8 = document.querySelector(".dragon8");
    dragon9 = document.querySelector(".dragon9");
    dragon10 = document.querySelector(".dragon10");
    dragon11 = document.querySelector(".dragon11");
    dragon12 = document.querySelector(".dragon12");
    dragon13 = document.querySelector(".dragon13");
    dragon14 = document.querySelector(".dragon14");

    fly = document.querySelector(".fly");
    fly1 = document.querySelector(".fly1");
    fly2 = document.querySelector(".fly2");
    fly3 = document.querySelector(".fly3");
    fly4 = document.querySelector(".fly4");
    fly5 = document.querySelector(".fly5");
    fly6 = document.querySelector(".fly6");
    fly7 = document.querySelector(".fly7");
    fly8 = document.querySelector(".fly8");
    fly9 = document.querySelector(".fly9");
    fly10 = document.querySelector(".fly10");
    fly11 = document.querySelector(".fly11");
    fly12 = document.querySelector(".fly12");
    fly13 = document.querySelector(".fly13");
    fly14 = document.querySelector(".fly14");

    cactus = document.querySelector(".cactus");
    cactus1 = document.querySelector(".cactus1");
    cactus2 = document.querySelector(".cactus2");
    cactus3 = document.querySelector(".cactus3");
    cactus4 = document.querySelector(".cactus4");
    cactus5 = document.querySelector(".cactus5");
    cactus6 = document.querySelector(".cactus6");
    cactus7 = document.querySelector(".cactus7");
    cactus8 = document.querySelector(".cactus8");
    cactus9 = document.querySelector(".cactus9");
    cactus10 = document.querySelector(".cactus10");
    cactus11 = document.querySelector(".cactus11");
    cactus12 = document.querySelector(".cactus12");
    cactus13 = document.querySelector(".cactus13");
    cactus14 = document.querySelector(".cactus14");
    
    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    offsetX = Math.abs(bx - dx)
    offsetY = Math.abs(by - dy)
    aa(offsetX, offsetY);

    dx1 = parseInt(window.getComputedStyle(dragon1, null).getPropertyValue('left'));
    dy1 = parseInt(window.getComputedStyle(dragon1, null).getPropertyValue('top'));
    offsetX1 = Math.abs(bx - dx1)
    offsetY1 = Math.abs(by - dy1)
    aa(offsetX1, offsetY1);

    dx2 = parseInt(window.getComputedStyle(dragon2, null).getPropertyValue('left'));
    dy2 = parseInt(window.getComputedStyle(dragon2, null).getPropertyValue('top'));
    offsetX2 = Math.abs(bx - dx2)
    offsetY2 = Math.abs(by - dy2)
    aa(offsetX2, offsetY2);

    dx3 = parseInt(window.getComputedStyle(dragon3, null).getPropertyValue('left'));
    dy3 = parseInt(window.getComputedStyle(dragon3, null).getPropertyValue('top'));
    offsetX3 = Math.abs(bx - dx3)
    offsetY3 = Math.abs(by - dy3)
    aa(offsetX3, offsetY3);

    dx4 = parseInt(window.getComputedStyle(dragon4, null).getPropertyValue('left'));
    dy4 = parseInt(window.getComputedStyle(dragon4, null).getPropertyValue('top'));
    offsetX4 = Math.abs(bx - dx4)
    offsetY4 = Math.abs(by - dy4)
    aa(offsetX4, offsetY4);

    dx5 = parseInt(window.getComputedStyle(dragon5, null).getPropertyValue('left'));
    dy5 = parseInt(window.getComputedStyle(dragon5, null).getPropertyValue('top'));
    offsetX5 = Math.abs(bx - dx5)
    offsetY5 = Math.abs(by - dy5)
    aa(offsetX5, offsetY1);

    dx6 = parseInt(window.getComputedStyle(dragon6, null).getPropertyValue('left'));
    dy6 = parseInt(window.getComputedStyle(dragon6, null).getPropertyValue('top'));
    offsetX6 = Math.abs(bx - dx6)
    offsetY6 = Math.abs(by - dy6)
    aa(offsetX6, offsetY6);

    dx7 = parseInt(window.getComputedStyle(dragon7, null).getPropertyValue('left'));
    dy7 = parseInt(window.getComputedStyle(dragon7, null).getPropertyValue('top'));
    offsetX7 = Math.abs(bx - dx7)
    offsetY7 = Math.abs(by - dy7)
    aa(offsetX7, offsetY7);

    dx8 = parseInt(window.getComputedStyle(dragon8, null).getPropertyValue('left'));
    dy8 = parseInt(window.getComputedStyle(dragon8, null).getPropertyValue('top'));
    offsetX8 = Math.abs(bx - dx8)
    offsetY8 = Math.abs(by - dy8)
    aa(offsetX8, offsetY8);

    dx9 = parseInt(window.getComputedStyle(dragon9, null).getPropertyValue('left'));
    dy9 = parseInt(window.getComputedStyle(dragon9, null).getPropertyValue('top'));
    offsetX9 = Math.abs(bx - dx9)
    offsetY9 = Math.abs(by - dy9)
    aa(offsetX9, offsetY9);

    dx10 = parseInt(window.getComputedStyle(dragon10, null).getPropertyValue('left'));
    dy10 = parseInt(window.getComputedStyle(dragon10, null).getPropertyValue('top'));
    offsetX10 = Math.abs(bx - dx10)
    offsetY10 = Math.abs(by - dy10)
    aa(offsetX10, offsetY10);

    dx11 = parseInt(window.getComputedStyle(dragon11, null).getPropertyValue('left'));
    dy11 = parseInt(window.getComputedStyle(dragon11, null).getPropertyValue('top'));
    offsetX11 = Math.abs(bx - dx11)
    offsetY11 = Math.abs(by - dy11)
    aa(offsetX11, offsetY11);

    dx12 = parseInt(window.getComputedStyle(dragon12, null).getPropertyValue('left'));
    dy12 = parseInt(window.getComputedStyle(dragon12, null).getPropertyValue('top'));
    offsetX12 = Math.abs(bx - dx12)
    offsetY12 = Math.abs(by - dy12)
    aa(offsetX12, offsetY12);

    dx13 = parseInt(window.getComputedStyle(dragon13, null).getPropertyValue('left'));
    dy13 = parseInt(window.getComputedStyle(dragon13, null).getPropertyValue('top'));
    offsetX13 = Math.abs(bx - dx13)
    offsetY13 = Math.abs(by - dy13)
    aa(offsetX13, offsetY13);

    dx14 = parseInt(window.getComputedStyle(dragon14, null).getPropertyValue('left'));
    dy14 = parseInt(window.getComputedStyle(dragon14, null).getPropertyValue('top'));
    offsetX14 = Math.abs(bx - dx14)
    offsetY14 = Math.abs(by - dy14)
    aa(offsetX14, offsetY14);


    dx = parseInt(window.getComputedStyle(fly, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(fly, null).getPropertyValue('top'));
    offsetX = Math.abs(bx - dx)
    offsetY = Math.abs(by - dy)
    fl(offsetX, offsetY);

    dx1 = parseInt(window.getComputedStyle(fly1, null).getPropertyValue('left'));
    dy1 = parseInt(window.getComputedStyle(fly1, null).getPropertyValue('top'));
    offsetX1 = Math.abs(bx - dx1)
    offsetY1 = Math.abs(by - dy1)
    fl(offsetX1, offsetY1);

    dx2 = parseInt(window.getComputedStyle(fly2, null).getPropertyValue('left'));
    dy2 = parseInt(window.getComputedStyle(fly2, null).getPropertyValue('top'));
    offsetX2 = Math.abs(bx - dx2)
    offsetY2 = Math.abs(by - dy2)
    fl(offsetX2, offsetY2);

    dx3 = parseInt(window.getComputedStyle(fly3, null).getPropertyValue('left'));
    dy3 = parseInt(window.getComputedStyle(fly3, null).getPropertyValue('top'));
    offsetX3 = Math.abs(bx - dx3)
    offsetY3 = Math.abs(by - dy3)
    fl(offsetX3, offsetY3);

    dx4 = parseInt(window.getComputedStyle(fly4, null).getPropertyValue('left'));
    dy4 = parseInt(window.getComputedStyle(fly4, null).getPropertyValue('top'));
    offsetX4 = Math.abs(bx - dx4)
    offsetY4 = Math.abs(by - dy4)
    fl(offsetX4, offsetY4);

    dx5 = parseInt(window.getComputedStyle(fly5, null).getPropertyValue('left'));
    dy5 = parseInt(window.getComputedStyle(fly5, null).getPropertyValue('top'));
    offsetX5 = Math.abs(bx - dx5)
    offsetY5 = Math.abs(by - dy5)
    fl(offsetX5, offsetY5);

    dx6 = parseInt(window.getComputedStyle(fly6, null).getPropertyValue('left'));
    dy6 = parseInt(window.getComputedStyle(fly6, null).getPropertyValue('top'));
    offsetX6 = Math.abs(bx - dx6)
    offsetY6 = Math.abs(by - dy6)
    fl(offsetX6, offsetY6);

    dx7 = parseInt(window.getComputedStyle(fly7, null).getPropertyValue('left'));
    dy7 = parseInt(window.getComputedStyle(fly7, null).getPropertyValue('top'));
    offsetX7 = Math.abs(bx - dx7)
    offsetY7 = Math.abs(by - dy7)
    fl(offsetX7, offsetY7);

    dx8 = parseInt(window.getComputedStyle(fly8, null).getPropertyValue('left'));
    dy8 = parseInt(window.getComputedStyle(fly8, null).getPropertyValue('top'));
    offsetX8 = Math.abs(bx - dx8)
    offsetY8 = Math.abs(by - dy8)
    fl(offsetX8, offsetY8);

    dx9 = parseInt(window.getComputedStyle(fly9, null).getPropertyValue('left'));
    dy9 = parseInt(window.getComputedStyle(fly9, null).getPropertyValue('top'));
    offsetX9 = Math.abs(bx - dx9)
    offsetY9 = Math.abs(by - dy9)
    fl(offsetX9, offsetY9);

    dx10 = parseInt(window.getComputedStyle(fly10, null).getPropertyValue('left'));
    dy10 = parseInt(window.getComputedStyle(fly10, null).getPropertyValue('top'));
    offsetX10 = Math.abs(bx - dx10)
    offsetY10 = Math.abs(by - dy10)
    fl(offsetX10, offsetY10);

    dx11 = parseInt(window.getComputedStyle(fly11, null).getPropertyValue('left'));
    dy11 = parseInt(window.getComputedStyle(fly11, null).getPropertyValue('top'));
    offsetX11 = Math.abs(bx - dx11)
    offsetY11 = Math.abs(by - dy11)
    fl(offsetX11, offsetY11);

    dx12 = parseInt(window.getComputedStyle(fly12, null).getPropertyValue('left'));
    dy12 = parseInt(window.getComputedStyle(fly12, null).getPropertyValue('top'));
    offsetX12 = Math.abs(bx - dx12)
    offsetY12 = Math.abs(by - dy12)
    fl(offsetX12, offsetY12);

    dx13 = parseInt(window.getComputedStyle(fly13, null).getPropertyValue('left'));
    dy13 = parseInt(window.getComputedStyle(fly13, null).getPropertyValue('top'));
    offsetX13 = Math.abs(bx - dx13)
    offsetY13 = Math.abs(by - dy13)
    fl(offsetX13, offsetY13);

    dx14 = parseInt(window.getComputedStyle(fly14, null).getPropertyValue('left'));
    dy14 = parseInt(window.getComputedStyle(fly14, null).getPropertyValue('top'));
    offsetX14 = Math.abs(bx - dx14)
    offsetY14 = Math.abs(by - dy14)
    fl(offsetX14, offsetY14);


    dx = parseInt(window.getComputedStyle(cactus, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(cactus, null).getPropertyValue('top'));
    offsetX = Math.abs(bx - dx)
    offsetY = Math.abs(by - dy)
    cac(offsetX, offsetY);

    dx1 = parseInt(window.getComputedStyle(cactus1, null).getPropertyValue('left'));
    dy1 = parseInt(window.getComputedStyle(cactus1, null).getPropertyValue('top'));
    offsetX1 = Math.abs(bx - dx1)
    offsetY1 = Math.abs(by - dy1)
    cac(offsetX1, offsetY1);

    dx2 = parseInt(window.getComputedStyle(cactus2, null).getPropertyValue('left'));
    dy2 = parseInt(window.getComputedStyle(cactus2, null).getPropertyValue('top'));
    offsetX2 = Math.abs(bx - dx2)
    offsetY2 = Math.abs(by - dy2)
    cac(offsetX2, offsetY2);

    dx3 = parseInt(window.getComputedStyle(cactus3, null).getPropertyValue('left'));
    dy3 = parseInt(window.getComputedStyle(cactus3, null).getPropertyValue('top'));
    offsetX3 = Math.abs(bx - dx3)
    offsetY3 = Math.abs(by - dy3)
    cac(offsetX3, offsetY3);

    dx4 = parseInt(window.getComputedStyle(cactus4, null).getPropertyValue('left'));
    dy4 = parseInt(window.getComputedStyle(cactus4, null).getPropertyValue('top'));
    offsetX4 = Math.abs(bx - dx4)
    offsetY4 = Math.abs(by - dy4)
    cac(offsetX4, offsetY4);

    dx5 = parseInt(window.getComputedStyle(cactus5, null).getPropertyValue('left'));
    dy5 = parseInt(window.getComputedStyle(cactus5, null).getPropertyValue('top'));
    offsetX5 = Math.abs(bx - dx5)
    offsetY5 = Math.abs(by - dy5)
    cac(offsetX5, offsetY1);

    dx6 = parseInt(window.getComputedStyle(cactus6, null).getPropertyValue('left'));
    dy6 = parseInt(window.getComputedStyle(cactus6, null).getPropertyValue('top'));
    offsetX6 = Math.abs(bx - dx6)
    offsetY6 = Math.abs(by - dy6)
    cac(offsetX6, offsetY6);

    dx7 = parseInt(window.getComputedStyle(cactus7, null).getPropertyValue('left'));
    dy7 = parseInt(window.getComputedStyle(cactus7, null).getPropertyValue('top'));
    offsetX7 = Math.abs(bx - dx7)
    offsetY7 = Math.abs(by - dy7)
    cac(offsetX7, offsetY7);

    dx8 = parseInt(window.getComputedStyle(cactus8, null).getPropertyValue('left'));
    dy8 = parseInt(window.getComputedStyle(cactus8, null).getPropertyValue('top'));
    offsetX8 = Math.abs(bx - dx8)
    offsetY8 = Math.abs(by - dy8)
    cac(offsetX8, offsetY8);

    dx9 = parseInt(window.getComputedStyle(cactus9, null).getPropertyValue('left'));
    dy9 = parseInt(window.getComputedStyle(cactus9, null).getPropertyValue('top'));
    offsetX9 = Math.abs(bx - dx9)
    offsetY9 = Math.abs(by - dy9)
    cac(offsetX9, offsetY9);

    dx10 = parseInt(window.getComputedStyle(cactus10, null).getPropertyValue('left'));
    dy10 = parseInt(window.getComputedStyle(cactus10, null).getPropertyValue('top'));
    offsetX10 = Math.abs(bx - dx10)
    offsetY10 = Math.abs(by - dy10)
    cac(offsetX10, offsetY10);

    dx11 = parseInt(window.getComputedStyle(cactus11, null).getPropertyValue('left'));
    dy11 = parseInt(window.getComputedStyle(cactus11, null).getPropertyValue('top'));
    offsetX11 = Math.abs(bx - dx11)
    offsetY11 = Math.abs(by - dy11)
    cac(offsetX11, offsetY11);

    dx12 = parseInt(window.getComputedStyle(cactus12, null).getPropertyValue('left'));
    dy12 = parseInt(window.getComputedStyle(cactus12, null).getPropertyValue('top'));
    offsetX12 = Math.abs(bx - dx12)
    offsetY12 = Math.abs(by - dy12)
    cac(offsetX12, offsetY12);

    dx13 = parseInt(window.getComputedStyle(cactus13, null).getPropertyValue('left'));
    dy13 = parseInt(window.getComputedStyle(cactus13, null).getPropertyValue('top'));
    offsetX13 = Math.abs(bx - dx13)
    offsetY13 = Math.abs(by - dy13)
    cac(offsetX13, offsetY13);
    
    dx14 = parseInt(window.getComputedStyle(cactus14, null).getPropertyValue('left'));
    dy14 = parseInt(window.getComputedStyle(cactus14, null).getPropertyValue('top'));
    offsetX14 = Math.abs(bx - dx14)
    offsetY14 = Math.abs(by - dy14)
    loop(offsetX14, offsetY14);
    
    
     function cac(offsetX, offsetY) {
        if (offsetX < 200 && offsetY < 400) {
            document.getElementById("boy1").classList.remove("runningstart");
            document.getElementById("boy1").classList.add("beforestart");
            bg.classList.remove('background-animation');
            boy.classList.remove('container-boy');
            container.classList.remove('container-animay');
            road.classList.remove('road-animation');
            gameover.style.visibility = 'visible';
            highscore.style.visibility = 'visible';
            backgroundmusic.pause();
            crash.play();
            gameovermusic.play();
        }
        else if (offsetX < 50 && cross) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
        }
    }
    
    function fl(offsetX, offsetY) {
        if (offsetX < 200 && offsetY < 600) {
            document.getElementById("boy1").classList.remove("runningstart");
            document.getElementById("boy1").classList.add("beforestart");
            bg.classList.remove('background-animation');
            boy.classList.remove('container-boy');
            container.classList.remove('container-animay');
            road.classList.remove('road-animation');
            gameover.style.visibility = 'visible';
            highscore.style.visibility = 'visible';
            backgroundmusic.pause();
            crash.play();
            gameovermusic.play();
        }
        else if (offsetX < 50 && cross) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
        }
    }
    
    function aa(offsetX, offsetY) {
        if (offsetX < 200 && offsetY < 510) {
            document.getElementById("boy1").classList.remove("runningstart");
            document.getElementById("boy1").classList.add("beforestart");
            bg.classList.remove('background-animation');
            road.classList.remove('road-animation');
            boy.classList.remove('container-boy');
            container.classList.remove('container-animay');
            gameover.style.visibility = 'visible';
            highscore.style.visibility = 'visible';
            backgroundmusic.pause();
            crash.play();
            gameovermusic.play();
        }
        else if (offsetX < 50 && cross) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
        }
    }
    

    function loop(offsetX, offsetY) {
        if (offsetX < 200 && offsetY < 200) {
            bg.classList.remove('background-animation');
            road.classList.remove('road-animation');
            boy.classList.remove('container-boy');
            container.classList.remove('container-animay');
            gameover.style.visibility = 'visible';
            highscore.style.visibility = 'visible';
            backgroundmusic.pause();
            crash.play();
            gameovermusic.play();
        }
        else if (offsetX < 200 && offsetY < 600) {
            document.getElementById("boy1").classList.remove("runningstart");
            document.getElementById("boy1").classList.add("beforestart");
            bg.classList.remove('background-animation');
            road.classList.remove('road-animation');
            boy.classList.remove('container-boy');
            container.classList.remove('container-animay');
            setTimeout(() => {
                bg.classList.add('background-animation');
                road.classList.add('road-animation');
                boy.classList.add('container-boy');
                container.classList.add('container-animay');
            }, 0);

            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
        }
    }
        
}, 10);