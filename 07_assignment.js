console.log('====step1====');
function show() {
    console.log('Life is good');
    console.log('Enjoy our life');
}
show();
console.log('====step2=====');
var firstName ;  
var lastName;
var collegeName;
function personalDetails(firstName , lastName ,collegeName) {
    console.log( 'firstname is Adhyayani');
    console.log('lastname is Dhawale');
    console.log('college name is Agnihotri college wardha');
  
}
personalDetails(firstName , lastName ,collegeName);

console.log('=====step3=====');


function swapValues(arg1 , arg2) 
{

    console.log('before swaap=> arg1' , arg1 , 'arg2', arg2 );
    var temp = arg1;
    arg1= arg2;
    arg2=temp;

    console.log('after swap  => arg1' , arg1 , 'arg2', arg2,);

   
}
var arg1='anushka';

var arg2='virat';
swapValues(arg1 ,arg2);

var arg1=1000;
var arg2=2000;
swapValues(arg1,arg2);

console.log(`======step4======`);
function addThreevalue(value1,value2,value3) {
    console.log("values are" , value1 , value2 , value3 );
    var result= value1+value2+value3;
    return result;

    
}
var result=addThreevalue(10.23,600,40);
console.log(`addition is`,addThreevalue(10.23,600,40) );

var result=addThreevalue('Hello','Good','Morning');
console.log(`addition is `, addThreevalue('Hello','Good','Morning'));


console.log('======Assignment2======');
function bankDetails(bankname,accountnum,location,pincode) {
    console.log(`Bankname=`, bankname, `Accountnumber=`,accountnum,`Location=`,location,`Pincode`,pincode);

    
}
bankDetails('CITIBANK' , 34567891011 ,'PUNE' ,433201);
bankDetails('AXISBANK' , 34567823011 ,'MUMBAI' ,445201);
bankDetails('HDFCBANK' , 34677891011 ,'PUNE' ,444201);
