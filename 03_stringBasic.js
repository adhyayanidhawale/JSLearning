function stringBasics(){
console.log('======step1======');
console.log(`my dream company is "persistent"`);

}

  stringBasics()  

  console.log(`======step2======`);
  var myhobby1 ='reading';
  var myhobby2 = 'Singing';
  var myhobby3 = 'listeningmusic';
  console.log(`my first hobby is =>`, myhobby1 ,`, my second hobby is =>`, myhobby2, `, my third hobby is => `, myhobby3);
  var result = myhobby1 + myhobby2 + myhobby3 ;
  var lengthresult=result.length;
  console.log(`sum of total number of charectar is ${result.length}`);


  console.log(`========STRINGHANDSON=======`);

console.log(`=====step1=====`);

  function stringHandsOn() {
    var greet='     Hey you are doing good , keep it up    ';
  console.log(`Hey you are doing good , keep it up`);

console.log(`=====step2=====`);

  var lengthgreet= greet.length;
    console.log(`total number of charectors is ${greet.length}`);

    console.log(`======step3======`);
var result= greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 

console.log(`=======step4=======`);
var resultTrim = greet.trim();
var trimLength = resultTrim.length; 
var Spaces = greet.length - trimLength;
console.log(` Remove extra Spaces is : ${Spaces} `);

console.log(`=======step5======`);
var greet = 'Heyyouaredoinggoodkeepitup';
console.log(`first charector after trim ${greet.charAt(0)}`);
console.log(`Last charector after trim ${greet.charAt(25)}`);

console.log(`=========step6========`);
var greet = `hey you are doing good, keep it up`;
var result = greet.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`================`);
var result = greet.indexOf('good');
console.log(`Index of sub string 'good' is : ${result}`);


 console.log(`=================`);
 var result = greet.slice(22);
console.log(`Slice from index 22 is : ${result}`);


console.log(`=============`);
var result = greet.includes('up');
console.log(`weather the string end with 'up'= Result is ${result}`);


console.log(`=============`);

var result = greet.includes('hey');
console.log(`weather the string starts with word 'hey'= Result is ${result}`);




   
  }
  
 stringHandsOn()
 




