//28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = prompt("What is your age?")
if (age < 2) {console.log("You identify as a baby")}
else if (age >= 2 && age < 4) {console.log("You identify as a Toddler")}
else if (age >=4 && age < 13) console.log("You identify as a Kid")
else if (age >=13 && age < 20) console.log("You identify as a Teenager")
else if (age >=20 && age < 65) console.log("You identify as an Adult")
else if (age >=65) console.log("You identify as an Elder")