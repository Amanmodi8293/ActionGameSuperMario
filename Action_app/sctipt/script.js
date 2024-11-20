let score = 0;
let highscore = 0;
let cross = true;
let highscoreval;
const crash = new Audio("../audio/crash.mp3")
const jump = new Audio("../audio/jump.mp3")
const backgroundmusic = new Audio("../audio/background.mpeg")
const gameovermusic = new Audio("../audio/gameover.mp3")
const slide = new Audio("../audio/slide.mpeg")
const home = new Audio("../audio/home.mpeg")
const fullscreen = document.getElementById("container");
let key = [];
function openfullscreen() {
    if (fullscreen.requestFullscreen) {
        fullscreen.requestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function level() {
    home.pause();
    document.getElementById("gameenter").classList.add("none")
    document.getElementById("beforegamestarts").classList.remove("none")
    setTimeout(() => {
        document.getElementById("beforegamestarts").classList.add("none")
        document.getElementById("maincontainer").classList.remove("none")
    }, 5000);

    document.getElementById("boy1").classList.remove("beforestart");
    document.getElementById("boy1").classList.add("runningstart");
    openfullscreen();
    score = 0;
    updateScore(score);
    gameovermusic.pause();
    backgroundmusic.play();
    gameover.style.visibility = 'hidden';
    highscore.style.visibility = 'hidden';
    bg.classList.add('background-animation');
    road.classList.add('road-animation')
    boy.classList.add('container-boy');
    container.classList.add('container-animay');
}

function homepage(){
    document.getElementById("end").classList.add("none")
    document.getElementById("home").classList.remove("none")
}

function Enter(){
    backgroundmusic.pause();
    document.getElementById("home").classList.add("none")
    document.getElementById("gameenter").classList.remove("none")
    document.getElementById("swipemode").classList.add("swipe")
    document.getElementById("name").classList.add("swipen")
    document.getElementById("animey").classList.add("swipea")
    setTimeout(() => {
        slide.play();
    }, 500);
    setTimeout(() => {
        home.currentTime = 100;
        home.play();
    }, 1500);
}

function quitgame(){
        Enter();
}

function playagain(){
        level();
}

document.onkeydown = function (e) {
  
    console.log("Key code is ", e.keyCode)
    if (e.keyCode == 38) {
        backgroundmusic.play();
        jump.play();
        document.getElementById("boy1").classList.add("boy-jump");
        document.getElementById("boy1").classList.add("jump");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("boy-jump");
            document.getElementById("boy1").classList.remove("jump");
        }, 400);
    }
    else if (e.keyCode == 13) {
        Enter();
    }
    else if (e.keyCode == 40) {
        backgroundmusic.play();
        jump.play();
        document.getElementById("boy1").classList.add("boy-sit");
        document.getElementById("boy1").classList.add("sit");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("boy-sit");
            document.getElementById("boy1").classList.remove("sit");
        }, 300);
    }
    else if (e.keyCode == 83) {
        document.getElementById("bulet").classList.remove("flybullet");
        document.getElementById("bulet").classList.remove("fly-bullet");
        document.getElementById("bulet").classList.remove("rightbullet");
        document.getElementById("bulet").classList.remove("right-bullet");
        document.getElementById("boy1").classList.add("dragonfire");
        document.getElementById("bulet").classList.add("dragonbullet");
        document.getElementById("bulet").classList.add("dragon-bullet");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("dragonfire");
        }, 300);
        setTimeout(() => {
            document.getElementById("bulet").classList.remove("dragonbullet");
            document.getElementById("bulet").classList.remove("dragon-bullet");
        }, 500);
    }
    else if (e.keyCode == 87) {
        document.getElementById("bulet").classList.remove("dragonbullet");
        document.getElementById("bulet").classList.remove("dragon-bullet");
        document.getElementById("bulet").classList.remove("rightbullet");
        document.getElementById("bulet").classList.remove("right-bullet");
        document.getElementById("boy1").classList.add("flyfire");
        document.getElementById("bulet").classList.add("flybullet");
        document.getElementById("bulet").classList.add("fly-bullet");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("flyfire");
        }, 300);
        setTimeout(() => {
            document.getElementById("bulet").classList.remove("flybullet");
            document.getElementById("bulet").classList.remove("fly-bullet");
        }, 500);
    }
    else if (e.keyCode == 65) {
        document.getElementById("boy1").classList.add("none");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("none");
        }, 300);
    }
    else if (e.keyCode == 68) {
        document.getElementById("bulet").classList.remove("flybullet");
        document.getElementById("bulet").classList.remove("fly-bullet");
        document.getElementById("bulet").classList.remove("dragonbullet");
        document.getElementById("bulet").classList.remove("dragon-bullet");
        document.getElementById("boy1").classList.add("rightfire");
        document.getElementById("bulet").classList.add("rightbullet");
        document.getElementById("bulet").classList.add("right-bullet");
        setTimeout(() => {
            document.getElementById("boy1").classList.remove("rightfire");
        }, 300);
        setTimeout(() => {
            document.getElementById("bulet").classList.remove("rightbullet");
            document.getElementById("bulet").classList.remove("right-bullet");
        }, 500);
    }
}

function updateScore(score) {
    scoreCount.innerHTML = "Your score: " + score;
    scorec.innerHTML = "Your score: " + score;
    if (score > highscoreval) {
        highscoreval = score;
        localStorage.setItem("Highscore", JSON.stringify(highscoreval));
        high.innerHTML = "High Score: " + highscoreval;
    }
}


let Highscore = localStorage.getItem("Highscore");
if (Highscore === null) {
    highscoreval = 0;
    localStorage.setItem("Highscore", JSON.stringify(highscoreval));
} else {
    highscoreval = JSON.parse(Highscore);
    high.innerHTML = "High Score: " + Highscore;
    highsc.innerHTML = "High Score: " + Highscore;
}

