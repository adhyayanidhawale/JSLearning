console.log(`======implicit conversion to string=======`);
var result = `3`+2;
console.log(`result is======>` , result );
console.log(`"2" is converted in to string`);
console.log(`-------------------------------------------`);

var result = `3`+ true;
console.log(`result is======>` , result );
console.log(`"true" is converted in to string`);
console.log(`-------------------------------------------`);

var result = `3`+ undefined;
console.log(`result is======>` , result );
console.log(`"undefined" is converted in to string`);

console.log(`-------------------------------------------`);

var result = `3`+ null;
console.log(`result is======>` , result );
console.log(`"null" is converted in to string`);

console.log(`---------------Implicit boolean conversion to number----------------`);
var result = '4'- true;
console.log(`result is ====>`, result);
console.log(`true is converted to number which is 1`);
console.log(`-------------------------------------------`);


var result = 4 + true;
console.log(`result is ====>`, result);
console.log(`true is converted to number which is 1`);
console.log(`-------------------------------------------`);


var result = 4 + false;
console.log(`result is ====>`, result);
console.log(`false is converted to number which is 0`);
console.log(`-------------------------------------------`);

console.log(`-------------Implicit string conversion to number-------------------`);
var result= `4`-`2`;
console.log(`result is =====>`, result);
console.log(`result is 2 beacause string is converted to number`);
console.log(`-------------------------------------------`);

var result= `4`-`2`;
console.log(`result is =====>`, result);
console.log(`result is 2 beacause string is converted to number`);
console.log(`-------------------------------------------`);

var result= `4`-2;
console.log(`result is =====>`, result);
console.log(`result is 2 beacause string(4) is converted to number`);
console.log(`-------------------------------------------`);


var result= `4`* 2;
console.log(`result is =====>`, result);
console.log(`result is 2 beacause string(4) is converted to number`);
console.log(`-------------------------------------------`);

var result= `4`/ 2;
console.log(`result is =====>`, result);
console.log(`result is 2 beacause string(4) is converted to number`);
console.log(`-------------------------------------------`);

var result = 0 ==' ';
console.log(`result is 0 ==' '  =====>`, result);
console.log(`result is true beacause 0 is number and ' ' this space is string so string is converted into number that is 0 `);
console.log(`-------------------------------------------`);

 var result = 0 =='0';
console.log(`result is 0=='0' =====>`, result);
console.log(`result is true beacause 0 is number and '0' this  is string so string is converted into number that is 0 `);
console.log(`-------------------------------------------`);


var result = 0 == false;
console.log(`result is 0=='false' =====>`, result);
console.log(`result is true beacause 0 is number and false this  is boolean  and false value is 0 `);

console.log(`-------------------------------------------`);

var result = 0 == false;
console.log(`result is 0=='false' =====>`, result);
console.log(`result is true beacause 0 is number and false this  is boolean  and false value is 0 `);

console.log(`-------------------------------------------`);
var result = null== undefined;
console.log(`result is null==undefined =====>`, result);
console.log(`result is true beacause are falsy value ,both datatype is diffrent `);

console.log(`-------------------------------------------`);


var result = 1 == [1];
console.log(`result is 1==[1] =====>`, result);
console.log(`As 1 is compare to array , its convert into primitive value `);

console.log(`-------------------------------------------`);

var result = 1 == true;
console.log(`result is 1==true =====>`, result);
console.log(`in boolean true is eauivalent to 1  `);

console.log(`-------------------------------------------`);

var result = 1 =='1';
console.log(`result is 1=='1'=====>`, result);
console.log(`here '1'  is string , string convert in to number that is 1 `);


