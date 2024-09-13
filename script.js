let gameseq=[];
let userseq=[];
let buttons=["yellow","red","purple","green"];
let started=0;
let level=0;
let body=document.querySelector("body");
let h2=document.querySelector("h3");
let start=document.querySelector(".start");
start.addEventListener("click",function()
{
    if(started==false)
    {
        console.log("game is startec");
        started=true;
        levelup();
    }
});
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);
};
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
};
function levelup() {
    userseq=[];
  level++;
  h2.innerText = `level ${level}`;
  let randomindex = Math.floor(Math.random() * 4);
  let randomcolor = buttons[randomindex];
  let randombtn = document.querySelector(`.${randomcolor}`);

  console.log(randomcolor)
  console.log(randomindex)
 console.log(randombtn);
 gameseq.push(randomcolor);
  btnflash(randombtn);
}
function checkAns(idx) {
  // let idx=index;
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    } } 
  else {
    
    h2.innerHTML = `your Score: ${level} <br> game over `;
    body.classList.add("body");
    setTimeout(function(){
        body.classList.remove("body");
    },250);
    reset();
  }
}

function btnpress(){
    let btn=this;

    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}