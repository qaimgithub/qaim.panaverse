//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// This is a BMI CALCULATOR that promts the user to input height and weight returning BMI value.
let height = prompt("what is your height, in pounds?")
let weight = prompt("what is your weight?")
let heightincm = height * 2.54
let heightinm = heightincm / 100
let weightinkg = weight / 2.2046
let heightsqr = (heightinm * heightinm)
let BMI = weightinkg / heightsqr
console.log(BMI)
let sentence = " Your body mass index is " + BMI
console.log(sentence)

// this is Miles to Km Converter that allows the user to convert Miles to Kilometers
let Miles = prompt("Please enter value in miles")
let MilestoKilometers = 1.60934
let Kilometers = Miles * MilestoKilometers
console.log(Kilometers, "Km")
let sentence = Miles +  " Miles is equal to " + Kilometers +" Kilometers "
console.log(sentence)