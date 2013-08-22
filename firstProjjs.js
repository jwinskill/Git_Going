/* These are some examples of the projects I've been working on for the last few months.

Game - Dragon Slayer: This is essentially a game that flips a coin to see if you've hit a dragon.
If the dragon is hit, then a random number between 1 and 5 damage is done to it.
I did this as a project at codecademy.com, but chose to add an additional "critical hit" feature:
20% of the time, when you hit the dragon you will score a critical hit and do an additional 3 damage. */

var dragonQuest = function () {
    
//Declaring Variables
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
var criticalHit = Math.floor(Math.random() * 10 + 1);
    
//Begin While Loop Function
while (slaying) {
    if (youHit) {
        confirm ("You hit the dragon! You did " + damageThisRound + " damage to the dragon.");
        totalDamage += damageThisRound;
        if (criticalHit >= 9) {
            confirm ("critical hit! 3 Extra damage!");
            totalDamage += 3;
        }
//Dragon's life total is 7
        if (totalDamage >= 7) {
            confirm("Congratulations, the dragon has been destroyed!.");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
    }
   } else {
        confirm ("You failed to hit the dragon and were quickly cooked and eaten.");
        slaying = false;
    }
};
}

/*Game - Rock Paper Scissors --in this game you as a user are prompted to play rock paper scissors. When prompted,
choose from among those three options. The computer will then choose rock, paper, or scissors at random, and confirm
back the results.*/

var roshambo = function() {
var userChoice = prompt("Do you choose rock, paper or scissors?").toUpperCase();
//We use Math.random() as a base for the computer's choice:
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "ROCK";
} else if(computerChoice <= 0.67) {
	computerChoice = "PAPER";
} else {
	computerChoice = "SCISSORS";
}
//User choice is then compared to the computer choice, and the result is displayed in a confirm box
var compare = function(choice1, choice2){
    if (choice1 === choice2){
        confirm ("The result is a tie!");
        return;
    }
    if (choice1 === "ROCK"){
        if (choice2 === "SCISSORS"){
            confirm ("Rock wins");
            return;
        } else {
         confirm("Paper wins");
         return;
        }
    }
    if (choice1 === "PAPER"){
        if (choice2 === "ROCK"){
            confirm ("Paper wins");
            return;
        } else {
            confirm("Scissors wins");
            return;
        }
    }
    if (choice1 === "SCISSORS"){
        if (choice2 === "ROCK"){
            confirm ("Rock wins");
            return;
        } else {
            confirm ("Scissors wins");
            return;
        }
    }
};
compare(userChoice, computerChoice);
}

//Finally we have a simple choose-your-own adventure style game I designed to illustrate switches in Javascript.

var adventureTime = function() {
    var user = prompt("Can I ask you something?").toUpperCase();

//begin switch statement
switch(user){
//Initial response: 'Yes'	
    case 'YES':
        var seattle = prompt("Ok, here we go! Do you think Seattle is a great place to live?").toUpperCase();
        var coffee = prompt("Do you like Coffee?").toUpperCase();
        if(seattle === "YES" && coffee === "YES"){
            confirm ("You sure picked the right spot to live!");
        } else if(seattle === "YES" || coffee ==="YES"){
            confirm ("Well, if you're into coding then you'll have to have java in Seattle sometime.");
        } else {
            confirm ("You may want to get on the next plane to a place far from here.");
        }
        break;
//Initial response: 'No'
    case 'NO':
        var pink = prompt("I'll ask you one anyway. It'll be fun! Do you like pink?").toUpperCase();
        var purple = prompt("Do you like purple?").toUpperCase();
        if(pink==="YES"&&purple==="YES"){
            confirm ("let's have a tea party!");
        } else if(pink==="YES"||purple==="YES"){
            confirm ("Ok, we can be friends...I guess.");
        } else {
            confirm ("Ew. What do you even like?");
        }
        break;
//Initial response 'Maybe'
    case 'MAYBE':
        var coy1 = prompt("Do you have to be so coy with me?").toUpperCase();
        switch(coy1){
            case'YES':
                confirm ("fine, I guess you do.");
                break;
            case'NO':
                confirm ("aw, a true satarist you are.");
                break;
            case'MAYBE':
                confirm ("I see what you did there.");
                break;
            default:
                confirm ("I thought you were clever, but you're just teasing.");
        }
        break;
 //If a user's initial response is anything other than 'Yes', 'No', or 'Maybe'       
    default:
        var anyThing = prompt("Disregard answer, receive question. What is the answer to the ultimate question of life, the universe, and everything?");
        if(anyThing === "42"){
            confirm("you are the chosen one!");
        } else {
            confirm("Sadly, you are incorrect.");
        }
}
}
