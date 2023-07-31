


 
function marriageEligibilty(gender,age) {
    
 switch (gender,age) {
        case 17:
            console.log(`your gender is ${gender} and age is ${age} so you are not eligible for marriage`);
            break;
        case 25:
            console.log(` your gender is ${gender} and age is ${age} so you are eligible`);
       break;
       case 28:
            console.log(` your gender is ${gender} and age is ${age} so you are eligible`);
       break;
       case 16:
            console.log(` your gender is ${gender} and age is ${age} so you not are eligible`);
       break;
       case 41:
            console.log(` your gender is ${gender} enter valid input`);
       break;
       case 35:
            console.log(` your gender is ${gender} enter valid input`);
       break;
        default:
            console.log(`${gender, age}- other`);
            break;
    }

}
marriageEligibilty("male" , 17);
marriageEligibilty("male" , 25);
marriageEligibilty("female",28);
marriageEligibilty("female" , 16);
marriageEligibilty("other" , 35);
marriageEligibilty("other" , 42);