//alert("hello world");

let scoreme=0;
let scorecomputer=0;

//let answer=prompt("what is you choise 1 for  rock or 2 for paper or 3 for scissor ");
function getComputerChoice(){
    const randomNum=Math.floor(Math.random() *3 +1);
    //floor tn7i el fasil 
    //Math.random() random men 0 lel 0.9999999999999 mithal 2.9999 t7tha 2
    //alert("random number is "+randomNum);
    return randomNum;
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

function playRound() {
        const playerSelection=prompt("what is you choise 1 for  rock or 2 for paper or 3 for scissor ");
        const ComputerChoice=getComputerChoice();
        
        if (ComputerChoice===1){
            alert("computer choise is rock");
            if(playerSelection==="1"){
                alert("tied !");
                

            }
            if(playerSelection==="2"){
                alert("You win ! Paper beats Rock");
                //document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
                scoreme=scoreme+1;
    
            }
            if(playerSelection==="3"){
                alert("You Lose! Rock  beats scissor");
                //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
                scorecomputer=scorecomputer+1;
            }
        }
        if(ComputerChoice===2){
            alert("computer chose is paper");
            if(playerSelection==="1"){
                alert("You lose ! Paper beats Rock");
                //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
                scorecomputer=scorecomputer+1;
            }
            if(playerSelection==="2"){
                alert("tied !");
                
    
            }
            if(playerSelection==="3"){
                alert('You win ! scissor  beats paper ');
               // document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
               scoreme=scoreme+1;
            }
    
        }
        if(ComputerChoice===3){
            alert("computer chose is scissor");
            if(playerSelection==="1"){
                alert("You win ! Rock beats scissor");
                //document.getElementById("demo1").innerHTML=(document.getElementById("demo1").value)+1;
                scoreme=scoreme+1;
            }
            if(playerSelection==="2"){
                alert("You lose ! scissor beats paper");
                //document.getElementById("demo2").innerHTML=(document.getElementById("demo2").value)+1;
                scorecomputer=scorecomputer+1;
    
            }
            if(playerSelection==="3"){
                alert('tied ! ');
                
            }
        }
        //alert("mon score dans la premiere tour est "+ scoreme);
        //alert("computer score dans la premiere tour est "+ scorecomputer);
        return scoreme;
        return scorecomputer;
    }
    function game(){
        
        //alert("le valeur inisiale de demo 1 est "+document.getElementById("demo1").value);
        for(let i=0;i<5;i++){
            playRound();
        }
        //alert("value de demo1 "+document.getElementById("demo1").value);
        //alert("value de demo2 est "+document.getElementById("demo2").value);
        if(document.getElementById("demo1").value > document.getElementById("demo2").value){
            alert("YOU WIn !!!!!");
            playWinSound();
            

        }
        if(document.getElementById("demo1").value < document.getElementById("demo2").value){
            alert("YOU LOSE !!!!!");
            playLoseSound();
            

        }
        if(document.getElementById("demo1").value === document.getElementById("demo2").value){
            alert("!!! tied !!!");
        }
        //alert("mon score est "+scoreme);
        //alert("le score de machinne est "+scorecomputer);
        document.getElementById("demo1").innerHTML="My score is :"+scoreme;
        document.getElementById("demo2").innerHTML="Computer score is :"+scorecomputer;

    }


    
  
