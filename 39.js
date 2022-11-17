//39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city,country){
    return (city+", "+country)
};
var pair1 = city_country("karachi","Pakistan");
var pair2 =city_country("Hyderabad","Pakistan");
var pair3 = city_country("Islamabad","Pakistan");
console.log(pair1);
console.log(pair2);
console.log(pair3);