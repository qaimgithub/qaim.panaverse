//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size,message){
     size = prompt("please enter the size of the shirt")
     message = prompt("Please enter a quote or message that you'd like to see on ur shirt")
    console.log("the size of your shirt will be "+size+ " and will have the following msg " + message )
}
make_shirt();
