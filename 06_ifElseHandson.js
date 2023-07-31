console.log(`-----------question1--------`);
function EvenOdd(num) {
    if (num%2==0){
    console.log(`The number ${num} is even` );
    }
    else{
        console.log(`The number ${num} is odd`);
    } 
}
EvenOdd (45);
EvenOdd (70);
EvenOdd (67);
EvenOdd (98);

console.log(`---------question2---------`);
function voteEligibility(age) {

    if (age>130||age<=0 || isNaN(age)) {
        console.log(`your age ${age} is invalid`); }
       else
         
    if(age>=18) {
       
     console.log(`your age is ${age} and you are eligible for vote` );
    }
    
    else {
        console.log(`your age is ${age} and you are not eligble for vote`);
   
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);
voteEligibility(-20);
voteEligibility(undefined);
voteEligibility(null);

console.log(`---------question 3----------`);
var string = "javaScript-ES6"
if (string.length>10) {
    console.log(`Given word ${string} length is ${string.length} and is more than 10 charector` );
} else {
    console.log(`ignore`);
}

console.log(`---------question4-------`);

function Java(string){
   if (string="java") {
    console.log(`Given ${string} stated with word java`);
   }
    else {
        console.log(`Given ${string} is not started with java`);
    
   }
}
Java("javaSript");

console.log(`---------asssignment2-------`);

function gradeCalculation(mark) {
    if (mark>=90 && mark<=100 ) {
        console.log(`funtastic marks ${mark},your grade is A++`);
        
    }
     else if 
        (mark>=75 && mark<90) {
            console.log(`excellent mark ${mark} your grade is A`);
            
        } 
        else if (mark>=50 && mark<75) {
            console.log(`good marks ${mark} your grade is B`);
                
            } 
            else if(mark>=35 && mark<50)
            {
                console.log(`mark is ${mark} your grade is c , you are pass but need an improvement`);
            }
           
            if(mark<=0 || mark>100){
                console.log(`please provide the valid marks`);
            }
            
            
            
        }
        gradeCalculation (98);
        gradeCalculation (80);
        gradeCalculation (90);
        gradeCalculation (0);
        gradeCalculation (35);
        gradeCalculation (-7);
       
        gradeCalculation (29);
        gradeCalculation (64);
        gradeCalculation (110);
        gradeCalculation(49);
        gradeCalculation (150);

        gradeCalculation ("eighty");
        gradeCalculation (undefined);
        gradeCalculation (null);

    


