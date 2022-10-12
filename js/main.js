'use strict';
console.log('laikas.js');

/*   
6 - 12 = rytas 
13 - 18 = diena
19 - 23 = vakaras
24 - 5 = naktis
 
*/

let laikas = 24;

if (laikas >= 6 && laikas <= 12) {
  console.log('labas rytas');
} else if (laikas >= 13 && laikas <= 18) {
  console.log('laba diena');
} else if (laikas >= 19 && laikas < 24) {
    console.log('labas vakaras');
}else if (laikas >= 0 && laikas <= 5 || laikas ===24) {
  console.log('labos nakties');
}





// DIENOS BANDYMAI

let dienadienis = +(Math.random()*10*0.6+1).toFixed(0)
console.log(dienadienis);

switch(dienadienis){
case 1:
    console.log("pirmadienis");
    break;
case 2:
    console.log("antradienis");
    break;
case 3:
    console.log("treciadienis");
    break;
case 4:
    console.log("ketvirtadienis");
    break;
case 5:
    console.log("penktadienis");
    break;
case 6:
    console.log("sestadienis");
    break;
case 7:
    console.log("sekmadienis");
    break;
default:
    console.log("Iviko klaida");

}


// 