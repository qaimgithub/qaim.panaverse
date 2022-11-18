//2.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 let uppercasename = name.toUpperCase();
 console.log(uppercasename);
 let lowercasename = name.toLowerCase();
 console.log(lowercasename);
 let titlecasename = lowercasename.charAt(0).toUpperCase().concat(lowercasename.slice(1))
 console.log(titlecasename)
var name= "qaim raza";
console.log(`${name.charAt(0).toUpperCase()}${name.slice(1)}`+ name.charAt(5).toUpperCase());
