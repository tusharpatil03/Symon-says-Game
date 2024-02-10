gameSeq = [];
userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let score = 0;

let p = document.querySelector("p");
let scoreP = document.querySelector("#score");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
    };
    started = true;
    levelup();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 150);
};

function levelup(){
    userSeq = [];
    level++;
    p.innerText = `level ${level}`;

    score = level - 1;
    scoreP.innerHTML = `<b>score: </b> ${score}`;

    let randInd = Math.floor(Math.random()*4);
    let randcol = btns[randInd];
    gameSeq.push(randcol);

    let randBtn = document.querySelector(`.${randcol}`);
    gameFlash(randBtn);
};

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
            
        }
    }else{
        p.innerHTML = `Game over! Press any key to start game. your score was <b>${level}</b>`;
        scoreP.innerText = "";
        reset();
    };
};

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
}