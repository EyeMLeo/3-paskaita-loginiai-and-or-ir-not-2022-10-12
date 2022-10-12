'use strict';
console.log('terenary.js');

// sukurti kintamji isStudent (boolean), sukurti kintamaji Name - irasom varda. sukurti town ir irasysim miesta. 
let nameA = "Petras";
let town = "Vilnius";
let isStudent = true;
// norim sugeneruoti sakini kintamajame sentence. 
// <vardas> gyvena <miestas> ir studijuoja/ ir dirba






// if (isStudent===true) {
//     console.log(`${sentence}studijuoja`);
// } else {
//     console.log(`${sentence}dirba`);
// }

// terenary
let studijuojaArbaDirba;

isStudent ? studijuojaArbaDirba="studijuoja":  studijuojaArbaDirba="dirba";

let sentence =`${nameA} gyvena ${town} ir  ${studijuojaArbaDirba}`;
    console.log(sentence)



// let sentence =`${nameA} gyvena ${town} ir ${sentenceAdd}`;
// James gyvena London ir studijuoja
// Mike gyvena Kaunas ir dirba

let loggedin = true;
let loggedYesOrNo;

loggedin ? loggedYesOrNo="" : loggedYesOrNo="not "


let message = `You are currently ${loggedYesOrNo}logged in to the System`;

// let message = 'You are currently (not) logged in to the System';

// has context menu

console.log(message)
