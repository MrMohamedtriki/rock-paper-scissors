const container=document.querySelector('.divi');
const my_title=document.createElement('h1');
my_title.classList.add('one');
my_title.textContent='Game of rock paper scissor';
container.appendChild(my_title);
//hena hatina kelmit game of rock paper scissor todhor 


const my_scoree_div=document.createElement('div');
my_scoree_div.classList.add('div_score');
const my_h1=document.createElement('h1');
my_h1.textContent='My score :';
my_h1.classList.add('h1_score');
my_h1.id="h1_score";
const my_h2=document.createElement('h2')
my_h2.classList.add('my_chose');
my_h2.id = 'my_chose';
my_h2.textContent='You Chose  :';
my_scoree_div.appendChild(my_h2);
my_scoree_div.appendChild(my_h1);
document.querySelector('.div_score').appendChild(my_scoree_div);
//const parentElement = document.querySelector('.div_score');
//parentElement.appendChild(my_scoree_div);
const tiess=document.createElement('div');
tiess.classList.add('t_ties');
const my_h1_ties=document.createElement('h1');
my_h1_ties.textContent='Ties : 0';
my_h1_ties.classList.add('tieson');
my_h1_ties.id="tieson";
tiess.appendChild(my_h1_ties);
document.querySelector('.t_ties').appendChild(tiess);


//hedi 7atat my score tdhor
// zedna sora lola 
const imgRock = document.createElement('img');
imgRock.src = 'images/rock_1faa8.png';
imgRock.classList.add('pimg');
imgRock.id = 'rock';
my_scoree_div.appendChild(imgRock)


// el sora thaniya
const imgScroll = document.createElement('img');
imgScroll.src = 'images/scroll_1f4dc.png';
imgScroll.classList.add('pimg');
imgScroll.id = 'Paper';
my_scoree_div.appendChild(imgScroll)


// el thaltha
const imgScissors = document.createElement('img');
imgScissors.src = 'images/black-scissors_2702.png';
imgScissors.classList.add('pimg');
imgScissors.id = 'scissors';
my_scoree_div.appendChild(imgScissors)




const computerscore_div=document.createElement('div');
computerscore_div.classList.add('computer_score');
const comp_h1=document.createElement('h1');
comp_h1.textContent='Computer score :';
comp_h1.classList.add('h1_score');
comp_h1.id="h1_score_comp";
computerscore_div.appendChild(comp_h1);
const comp_h2=document.createElement('h2')
comp_h2.textContent='The Computer Choose:';
comp_h2.id="comp_choice";
my_scoree_div.appendChild(comp_h2);
document.querySelector('.computer_score').appendChild(computerscore_div);
//hedom daharna computer score 
const imgRock1 = document.createElement('img');
imgRock1.src = 'images/rock_1faa8.png';
//imgRock1.classList.add('pimg');
computerscore_div.appendChild(imgRock1)

// el sora thaniya
const imgScroll1 = document.createElement('img');
imgScroll1.src = 'images/scroll_1f4dc.png';
//imgScroll1.classList.add('pimg');
computerscore_div.appendChild(imgScroll1)


// el thaltha
const imgScissors1 = document.createElement('img');
imgScissors1.src = 'images/black-scissors_2702.png';
//imgScissors1.classList.add('pimg');
computerscore_div.appendChild(imgScissors1)

function restart_game() {
    window.location.reload();
}
function playWinSound() {
  const winSound = document.getElementById("winSound");
  if (winSound) {
      winSound.play();
  }
}

function playLoseSound() {
  const loseSound = document.getElementById("loseSound");
  if (loseSound) {
      loseSound.play();
  }
}

function start_game() {
  //tl3b 7ata lin trb7 5 marat 
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => {
      img.addEventListener('click', (e) => {
          //console.log(e)
          const playerChoice = img.id;
          if (playerChoice) {
              console.log("You chose: " + playerChoice);
              //document.getElementById('my_chose')=playerChoice;
              document.getElementById('my_chose').textContent = "You Choose: " + playerChoice;
              //playRound(playerChoice);
              //computerSelect();
              verifWin(playerChoice);

          }
      });
  });
  

}
function getComputerChoice(){
  const randomNum=Math.floor(Math.random() *3 +1);
  //floor tn7i el fasil 
  //Math.random() random men 0 lel 0.9999999999999 mithal 2.9999 t7tha 2
  //alert("random number is "+randomNum);
  return randomNum;
}
// function computerSelect() {
  

  
  
// return computerChoice;


//}
let scoreme=0;
let scorecomputer=0;
let tied=0;


function verifWin(playerChoice){
  const computerChoice = getComputerChoice();
  if (computerChoice===1){
    document.getElementById('comp_choice').textContent = "The Computer Choose: " + "rock";
    

  }
  if (computerChoice===2){
    document.getElementById('comp_choice').textContent = "The Computer Choose: " + "paper";
    


  }
  if (computerChoice===3){
    document.getElementById('comp_choice').textContent = "The Computer Choose: " + "scissors";
    


  }

  // alert("computer choice howa "+computerChoice);
  // alert("player choice howa "+playerChoice);

  if (computerChoice===1){
    //alert("computer choise is rock");
    if(playerChoice==="rock"){
        //alert("tied !");
        tied=tied+1;
        
        

    }
    if(playerChoice==="Paper"){
        //alert("You win ! Paper beats Rock");
        //document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
        scoreme=scoreme+1;

    }
    if(playerChoice==="scissors"){
        //alert("You Lose! Rock  beats scissor");
        //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
        scorecomputer=scorecomputer+1;
    }
}
if(computerChoice===2){
    //alert("computer chose is paper");
    if(playerChoice==="rock"){
        //alert("You lose ! Paper beats Rock");
        //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
        scorecomputer=scorecomputer+1;
    }
    if(playerChoice==="Paper"){
        //alert("tied !");
        tied=tied+1;
        

    }
    if(playerChoice==="scissors"){
        //alert('You win ! scissor  beats paper ');
       // document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
       scoreme=scoreme+1;
    }

}
if(computerChoice===3){
    //alert("computer chose is scissor");
    if(playerChoice==="rock"){
        //alert("You win ! Rock beats scissor");
        //document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
        scoreme=scoreme+1;
    }
    if(playerChoice==="Paper"){
        //alert("You lose ! scissor beats paper");
        //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
        scorecomputer=scorecomputer+1;

    }
    if(playerChoice==="scissors"){
        //alert('tied ! ');
        tied=tied+1;
        
    }
}

document.getElementById("h1_score").textContent="My score :"+scoreme;
document.getElementById("h1_score_comp").textContent="Computer score :"+scorecomputer;
document.getElementById("tieson").textContent="Ties : "+tied;




if (scoreme===5) {
  const winnerMessage = document.querySelector('.winner-message');
  winnerMessage.style.display = 'block';
  playWinSound();
  setTimeout(function () {
  winnerMessage.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
  scoreme = 0;
  scorecomputer = 0;
  tied = 0;
} 
if (scorecomputer===5) {
const loserMessage = document.querySelector('.loser-message');
loserMessage.style.display = 'block';
playLoseSound();
setTimeout(function () {
loserMessage.style.display = 'none';
}, 3000); // 3000 milliseconds = 3 seconds
scoreme = 0;
scorecomputer = 0;
tied = 0;


}
}






 
start_game();


    
  
