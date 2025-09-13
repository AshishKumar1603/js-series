const score = 400 // js define that 400 is num but we also expilicitly define 400 as num..

const balance = new Number(100)
console.log(balance); // Here we explpicitly define 100 is num..

//change the num to string..

console.log(balance.toString())// we use toString to change num in string..

//we also find the length by using .length..

console.log(balance.toString().length)

console.log(balance.toFixed(2));// it use to fixed the no. upto any digit..

//---toPrecision----

const othernumber = 123.8966

console.log(othernumber.toPrecision(3));// it use to roundoff the value or digit upto what place we want..

//--toLocale the num..----

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))// it give the output 10,00,000

//******** Maths *************

console.log(Math);
console.log(Math.abs(-4));// abs means absolute value..
console.log(Math.round(4.3));// it round of the value..
console.log(Math.ceil(4.2));// it choose the top value.. like here it choose 5..
console.log(Math.floor(4.9));// it choose lower value , like here it choose 4 instead of 5..
console.log(Math.sqrt(4));

console.log(Math.random());// it always give value between 0 to 1..
console.log((Math.random()*10)+1);// now it give value b/w 1 to 10.. we adding 1 to get the value b/w 1 to 10.
                                  // here we add 1 to avoide 0 case..

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random()*(max - min + 1)) + min); // we use max -min to get the range and add1 to avoide o case


