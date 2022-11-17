//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const Pizza = ["Bold Fold","Gypsy Euro","GodspellBeefLoad"]
for(i=0;i<Pizza.length;i++){
    console.log("I like my pizza in "+ Pizza[i] + " flavour" )
}
console.log("Pizzas are usually made in round flat bread seasoned with spices and meat. Different types of cheese are used to flavour the pizza. The most famous kind of meat and cheese choise for a pizza is chedder cheeze and processed meat i.e pepperonis")