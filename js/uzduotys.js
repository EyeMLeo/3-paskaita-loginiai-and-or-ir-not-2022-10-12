'use strict';
console.log('uzduotys.js');



let members = -5
let memberstype;

 switch(members){
 case 1:
    memberstype="solo";
    break;
 case 2:
    memberstype="duetas";
    break;
 case 3:
    memberstype="trio";
    break;
 case 4:
    memberstype="kvartetas";
    break;
default:
if (members >=5) {
    memberstype="didele grupe";
} else {
    memberstype="ivyko klaida";
}


 }

 console.log(memberstype);