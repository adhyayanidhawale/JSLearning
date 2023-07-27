console.log(`============step1=========`);
var func = function (gradScore , hscScore , sscScore ,candidateName) {
    var result = (gradScore>=70 || hscScore >=80 ||sscScore>=90)?"congrats you are eligible for TCS interview  " : "unfortunately you are not eligible for interview "
    console.log(result+candidateName);
}
func(80,86,90,"adhyayani");
func(70,65,55 , "radha");
func(60,79,88, "ira");











console.log(`========step2=========`);
function maleMarriageeligibilty(gender , age , boyname) {
    var result = ( male= gender && age>=21 ) ?  " = hey you are eligible for marriage": " = you are not eligible for marriage"
    console.log(boyname + result);
   
    return boyname;
}
maleMarriageeligibilty("male",21 , "billgates");
maleMarriageeligibilty("male",17 , "stivejobs");

console.log(`==========step3=========`);
function femaleMarriageEligibilty(gender,age,girlname) {
    result = (female=gender && age>=18) ? " = hey you are eligible for marriage": " = you are not eligible for marriage"
    console.log(girlname+result);
    return girlname;
    
}

femaleMarriageEligibilty("female",16 , "jenifer");
femaleMarriageEligibilty("female",24 , "melindagates");