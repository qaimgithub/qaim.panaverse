// //25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
 let alien_color = "green"
 if (alien_color === "green") { console.log("You have earned 5 points")}
 alien_color ="Yellow"
 if (alien_color === "green") { console.log("You have earned 5 points")} //does not print.

//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
 let alien_color1 =prompt("What is the color of the alien you just shot?")
 if (alien_color1==="Green") {console.log("You have earned yourself 05 points")} else {console.log("you have earned 10 points")}

 //27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color2 =prompt("what is the color of the alien you have just shot?")
if (alien_color2 ==="Green"){console.log("You have earned 05 points")}
else if (alien_color2 ==="Yellow"){ console.log("You have earned 10 points")}
else if (alien_color2 ==="Red"){console.log("You have earned 15 points")}
else {console.log("You did not shoot an alien")};