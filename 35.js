//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animals = ["Dog","Cat","Hamster"]
for(i=0;i<animals.length;i++){
    console.log(animals[i])
}
for(i=0;i<animals.length;i++){
    if(i===0){
        console.log(animals[0]+" is the most loyal pet one can have")
    } else if(i===1){
        console.log(animals[1]+" is the best indoor pet")
    }else {
        console.log(animals[2]+ " is good for research purposes if you are mad scientist")
    }
}
console.log("All of these animals have fur.")
