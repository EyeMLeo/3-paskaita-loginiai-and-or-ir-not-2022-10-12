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

let number2=27;
let numberRemain=(number2/2) % 1;
 console.log(numberRemain);

 if (numberRemain===0) {
    console.log("lyginis skaicius");
 } else{
    console.log("nelyginis skaicius");
 }




// Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

let nameLong = "as"
console.log(`${nameLong.length} nameLong.length`)

if (nameLong.length>=5) {
    console.log("Ilgas vardas");
    
}else{
    console.log("trumpas vardas");
}


// Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

let clientAge=5;

let legalAge=18;

if (clientAge>=legalAge) {
    console.log("can drive");
} else{
    console.log("not allowed to drive");

}


// Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.
let phone = "nokia".toLowerCase();
console.log(phone);


// phone==="iphone" ? console.log("apple vartotojas"): console.log("kitas vartotojas")

let isIphoneUser;
if ( phone ==="iphone"|| phone ==="android"||phone ==="samsung"||phone ==="nokia"||phone ==="siemens") {
    isIphoneUser = true;
} else {
    isIphoneUser = false;
}
console.log(`is phone user ${isIphoneUser}`);

// let isIphoneUser= true;


// Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else (arba switch), kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce.

let car="asd"


if (car==="VW" ||car==="Audi"|| car==="Bentley" || car==="Bugatti"|| car==="Lamborghini"|| car==="Porsche") {
    console.log("brand'as priklauso VW Group");
}else if (car==="BMW"|| car==="Mini"|| car==="Rolls-Royce") {
    console.log("brand'as priklauso BMW Group");
} else {
    console.log("nepriklauso nei bmw nei vw");
}
