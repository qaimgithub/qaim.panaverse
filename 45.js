//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function BuyCar(Make,Model,keyword,Feature="automatic"){
return Car={
        Make,
        Model,
        keyword,
        Feature
    }
}
console.log(BuyCar("Honda","Civic",["Metallic Blue","Turbo Charged",]))
//using *Keyword* we can add unlimited arguements in the form of an array to a function.



