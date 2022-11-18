 // 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const items =["Onion","iceberg","tomatoe","mushroom"]
function sandwich(...items){
    console.log(" your sandwhich will contain the following items: " + items.join(", "))
}
sandwich(...items,"olive")
sandwich(...items,"chicken")
sandwich(...items,"kbab")
