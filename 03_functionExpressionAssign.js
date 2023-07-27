console.log(`========sstep1=======`);

var pow = function(a,b){
    console.log(`square of number is ${a ** b}` );

}
pow(5 , 2);
pow(6 , 2);
pow(25 , 2);
pow(100 , 2);
pow(67.89 , 2);
pow(59 , 2);

console.log(`========step2========`);
console.log(`type of square variable is => ${typeof pow}`);

console.log(`========step3========`);
var area = function (length, width) {
    console.log(`area of rectangle is ${length * width}`);

}
area( 917,499);

console.log(`========step4========`);
var swapData = function(string1,string2){
    console.log(`Before Swap : Value 1 = ${string1}, Value 2 = ${string2} `);
    let a = string1;
    let b = string2;
    temp = string1;
    a=b;
    b=temp;
    console.log(` After Swap : Value 1 = ${a}, Value 2 = ${b} `);
}
swapData("Mahi","Raina");
swapData(55,77);

console.log(`========step5========`);
var stringFunc = function(string){
    console.log(`  Total numbers characters in string are : ${string.length}`)
    var charat = string.charAt(7);
    console.log(`  Character at index 7 is :${charat}`);
    var charat = string.charAt(12);
    console.log(`  Character at index 12 is :${charat}`);
     var lastchar =string.charAt(string.length-1);
     console.log(`  Last character of string is :${lastchar}`)
     var lastchar =string.charAt(string.length-3);
     console.log(`  Third Last character of string is :${lastchar}`);
     var result = string.split(" ");
     console.log(`  The number of Words in string are :${result.length}`);
     var sq = result.length*result.length;
     console.log(`  The square of number of words are : ${sq}`);

     
    
    

    

}
stringFunc("JS the most popular language of internet");