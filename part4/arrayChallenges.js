/* 1. Decelare an array named 'taeflavors' that contains the strings "green tea", "black tea", 
"oolong tea".
   acces the first element of the array and store it in a variableb named 'firstea'. */

   let teaflavors = ["green tea", "black tea", "oolong tea"]

   const firstTea = teaflavors[1]

   //console.log(firstTea);

   /* 2=>  Declare an array named 'cities containing "London", "Tokyo", "Paris", and "New York", 
   Access the third element in the array and store it in a variable named 'favoriteCity. */

let cities = ["London", "Tokyo", "Paris", "New York"]

const favoriteCity = cities[2]
//console.log(favoriteCity)
/*
3=>  You have an array named teaTypes containing "herbal tea", "white tea", 
and "masala chai"`. Change the second element of the array to "jasmine tea". */

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
//console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited containing "Mumbai" and "Sydney".
 Add "Berlin" to the array using the push` method. */



/*
5. You have an array named teatrders with "chai", "iced tea", "matcha", and "earl grey".
Remove the last element of the array using the pop method and store it in a variable named 'lastOrder.
*/

let teatrders= ["chai","icetea", "matcha","earl grey"]
 let lastOrder= teatrders.pop();
//  console.log(teatrders);



/*
6. You have an array named 'popularTeas containing "green tea", "oolong tea", and "chai".
Create a soft copy of this array named softCopy Teas.*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopy=popularTeas;
popularTeas.pop();// if we change here soft copy also get changes..
//console.log(popularTeas);
//console.log(softCopy);


/*
7. You have an array named topCities containing "Berlin", "Singapore", and "New York".
Create a hard copy of this array named hardCopyCities.
*/


let topCities = ["Berlin", "Singapore","New York"]
 let hardCopyCities = [...topCities]// three dot is used to create hard copy
// let hardCopyCities = topCities.slice();// another way
topCities.pop();
// console.log(hardCopyCities);

/*
 8. You have two arrays: europeanCities containing "Paris" and "Rome", and asianCities "Tokyo" and "Bangkok". containing Merge these two arrays into a new array named worldCities. */

 let europeanCities = ["Paris","Rome,"]
 let asianCities = ["Tokyo","Bangkok"]
// let worldCities = europeanCities + asianCities;
let worldCities = europeanCities.concat(asianCities);
//console.log(worldCities);


 /*
 9. You have an array named teaMenu containing "masala chai", "oolong tea", "green tea", and "earl grey". Find the length of the array and store it in a variable named 'menuLength.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea","earl grey"]
let menuLength = teaMenu.length;
//console.log(menuLength);

/*
10. You have an array named 'cityBucketList containing "Kyoto", "London", "Cape Town", and "Vancouver". Check if "London" is in the array and store the result in a variable named 'isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London");
//console.log(isLondonInList);

