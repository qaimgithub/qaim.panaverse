//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following
let Name1 = "Qaim"
console.log(Name1 === "Qaim")
console.log(Name1=="Qaim")
console.log(Name1==="qaim") //lower case not equal to Title case, result false
console.log(Name1!=="qaim") // verified by using not equals.

let percentage = 90
console.log(percentage === 90) // true
console.log(percentage > 90) // false
console.log(percentage >= 90 ) //true
console.log(percentage < 100) //true
console.log(percentage <= 90 ) //true
console.log(percentage>=90 && percentage <= 100) //true
console.log(percentage>=85 && percentage < 90) //false becase one condition is failing 
console.log(percentage>=85 || percentage < 90) //true becase one condition is failing and its an OR comparison
const Array1 = ["Qaim","Ahmed","Farooq"]
console.log(Array.isArray(Array1)) // true. Its an array
const name2 = "Qaimm"
console.log(Array.isArray(name2)) // false because its not an array.