var randomnumber1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomnumber1+".png" // taking dice1.png to dice6.png;

var randomimagesource="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

// part 1 ends
//part2 initates


var randomnumber2=Math.floor(Math.random()*6)+1;

var random2diceimage="dice"+randomnumber2+".png";

var random2imagesource="images/"+random2diceimage;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",random2imagesource);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 Won ❤️😍💪"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").textContent="Player 2 Won💖✌️"
}
else{
    document.querySelector("h1").textContent=" Draw ! 😂"
}