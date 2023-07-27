
console.log(`============assignment1===============`);
console.log(`===========step1===========`);
function squareWordLength(string) {
  console.log(string + ` : lenth of given word is = ${string.length}`); 
  var square = string.length * string.length;
 console.log(`square of given word is = ${square}`);
}
squareWordLength(`Javascript`);
squareWordLength(`Google chrome`);
squareWordLength(`Developer Smart`);

console.log(`========step2========`);

var stringfunc = function (){
   
var string=`I am react devloper`;
console.log(`the length of given string is ${string.length}`);
var result = string.split(" ");

console.log(`the total number of word is ${result.length} `);
var div=string.length/result.length;
console.log(`divsion of total word and  total charector of string  is ${div}`);
var mult = result.length*string.length;
console.log(`the multiplication of word and charector is ${mult}`);
}
stringfunc();


console.log(`==============Assignment 2============`);
function greaternum(a,b) {
var result =  (a > b)  ? a : b;
console.log( `greater number from these two number is ${result}`);

}
greaternum(10 , -10);
greaternum(800,899);

console.log(`========step2========`);
var isEvenorOddnum = function (num) {
var result=num%2==0 ? "even : true ": " odd : false";
var number = "num"
console.log( num  + ` = given number is ${result} `);
console.log();
return isEvenorOddnum;

  
}

isEvenorOddnum(29);
isEvenorOddnum(44);
isEvenorOddnum(0);
isEvenorOddnum(101);

console.log(`============step3===========`);
var wordLength = function(a) {

  console.log(a + `: Dlength of given word is ${a.length}`);
  var result = a.length;
  var results = result%2== 0 ? `given word is even` : `given word is odd`
  console.log(results);
  return results



}
wordLength( "javascript");
wordLength ("developer");
wordLength ("google")

