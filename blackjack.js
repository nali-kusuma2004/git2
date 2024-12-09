
let card = [];     // push() pop() shift() unshift() 
let sum=0;
let hasbj= false;
let isAlive=false;
let msg= " ";

let play= {
  name :"per",
  chips :sum,
  sayhello: function ()
  {
    console.log("hello")
  }
}


play.sayhello();
let playel=document.getElementById("pl");

msg_el=document.getElementById("msg-card");
console.log(msg_el);
//let sumel=document.getElementById("sumcard");

let sumel=document.querySelector("#sumcard");
console.log(sumel);

let card_el=document.querySelector("#card");


function renderGame()
{
  card_el.textContent="Cards: "+" ";
  for(let count=0; count<card.length;count+=1)
  {
  card_el.textContent+=card[count]+" ";
}
    sumel.textContent="Sum:"+sum;

if(sum === 21)
{
   msg="wohoo ! you got blackjack"
   hasbj=true;
}
else if(sum< 21)
{
  msg="do you want to draw a new card"; 
}
else
{
msg ="you are out of game"
isAlive=false;
}
msg_el.textContent=msg;
play.chips=sum;
playel.textContent=play.name+" :$"+play["chips"]; // ojects can be read in . notation and bracket notation 
} 

function startGame()
{
  isAlive=true;
  let firstcard=getRandomcard();
let secondcard=getRandomcard();
sum=firstcard+secondcard;
card=[firstcard,secondcard]
  renderGame();
  
}

function getRandomcard()
{
  let random1=Math.floor(Math.random()*13)+1;// 1 -- 13
 if(random1==1)
 {
  return 11;
 }
 else if(random1 === 11 || random1 === 12 || random1=== 13)
 {
  return 10;
 }
 else
 {
  return random1;
}
}
function newcard()
{
  if(isAlive === true && hasbj==false )
  {
  console.log("drawing a new card ")
  let card1 = getRandomcard();
  sum=sum+card1;
  card.push(card1)
  renderGame();
  
  }
}

