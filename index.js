var randomNumber1= Math.ceil(Math.random()*6);

var randomDiceImage="dice"+randomNumber1+".png";

var update="images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",update);


var randomNumber2= Math.ceil(Math.random()*6);

var updateImage="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",updateImage);

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML="🗽PLAYER 1 WINS"

else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML="PLAYER 2 WINS🗽"

else
document.querySelector("h1").innerHTML="DRAW ❎"
