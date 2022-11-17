//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size,message){
if(size ==="Large"){
    console.log("This is a "+ size + " sized shirt with the following print: " +message )
}else if(size==="Medium"){console.log("This is a "+ size + " sized shirt with the following print: " +message)
}else console.log("This is a Small sized shirt with the following message: " + message)
}
make_shirt("Large","IloveJS!")
make_shirt("Medium","IloveJS!")
make_shirt("Small","Programming is life!")

function MyLoveLife(name1,name2){
    if(name1==="Saniya"){
    console.log("She is the girl of my dreams. May Allah help us to get together!")
    } else {console.log("If its not Saniya then there shouldnt be anyone else")}
}
MyLoveLife("Saniya","Rapunzel")
