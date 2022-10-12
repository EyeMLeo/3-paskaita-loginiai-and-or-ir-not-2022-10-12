'use strict';
console.log('laikas.js');

/*   
6 - 12 = rytas 
13 - 18 = diena
19 - 23 = vakaras
24 - 5 = naktis
 
*/

let laikas = 0;

if (laikas >= 6 && laikas <= 12) {
  console.log('labas rytas');
} else if (laikas >= 13 && laikas <= 18) {
  console.log('laba diena');
} else if (laikas >= 19 && laikas <= 23) {
    console.log('labas vakaras');
}else if (laikas >= 0 && laikas <= 5) {
  console.log('labos nakties');
}