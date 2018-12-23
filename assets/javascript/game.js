$(document).ready(function(){
    //find a random number to start the game 
var minNumber = 19;
var maxNumber = 120;
var randomNumber = randomNumberFromRange(minNumber, maxNumber);
// create a variable to each ID figure

var scoreresult =0;
var wins=0;
var losses=0;
var winCondition= false;
var lossesCondition= true;


//FUNCTIONS

function start(){
    randomNumber = randomNumberFromRange(minNumber, maxNumber);
    scoreresult=0;
    var diamond = randomNumberFromRange(1, 12);
    var rombo = randomNumberFromRange(1, 12);
    var circle = randomNumberFromRange(1, 12);
    var rubi = randomNumberFromRange(1, 12);
    $("#choosenumber").text(randomNumber);
    $("#totalscore").text(0);
    $("#diamond").on("click", diamondFunction);
    $("#rombo").on("click",romboFunction);
    $("#circle").on("click", circleFunction);
    $("#rubi").on("click", rubiFunction);

}
function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function diamondFunction (){
scoreresult = scoreresult + diamond;
    $("#totalscore").text(scoreresult);
    comparePoint();


}

function romboFunction (){
    scoreresult = scoreresult + rombo;
    $("#totalscore").text(scoreresult);
    comparePoint();
    

}

function circleFunction(){
    scoreresult = scoreresult + circle;
    $("#totalscore").text(scoreresult);
    comparePoint();

}

function rubiFunction(){
    scoreresult = scoreresult + rubi;
    $("#totalscore").text(scoreresult);
    comparePoint();

}


function comparePoint(){
    if (scoreresult == randomNumber){
        wins ++;
        winCondition = true;
        lossesCondition = false;
        $("#win").text(wins);
        $("#diamond").off()
        $("#rombo").off()
        $("#circle").off()
        $("#rubi").off()
    }
    else if (scoreresult > randomNumber){
        losses ++;
        $("#losses").text(losses);
        $("#win").text(wins);
        $("#diamond").off()
        $("#rombo").off()
        $("#circle").off()
        $("#rubi").off()
 }
    
}

 


// This code will run as soon as the page loads
    $("#start").on("click", start);
    // $("#diamond").on("click", diamondFunction);
    // $("#rombo").on("click",romboFunction);
    // $("#circle").on("click", circleFunction);
    // $("#rubi").on("click", rubiFunction);
    
    
 //this code allows to click on each ID figure and find a random number between 1-12
diamond = randomNumberFromRange(1, 12);
console.log(diamond);
rombo = randomNumberFromRange(1, 12);
console.log(rombo);
circle = randomNumberFromRange(1, 12);
console.log(circle);
rubi = randomNumberFromRange(1, 12);
console.log(rubi);
// collect variable figure information to the variable score result

//if random number equals to figureRandomNumber add one point to win
//if figureRandomNumber is greater than random number then add one point to loose
//restart the game once a point has been added to the win/loose varialble


// show the random number in the ID called "choosenumber"
// show the figureRandomNumber on the ID "totalscore"
// show win/loose point in "wins" "looses" ID

}); 

