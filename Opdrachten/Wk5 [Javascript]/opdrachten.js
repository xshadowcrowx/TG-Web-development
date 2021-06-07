// --------------------------- //
//    Javascript Excercises    //
// --------------------------- //


// Hoofdstuk 1
console.log('-----------------------------')
console.log('Hoofdstuk 1')
console.log('-----------------------------')

/*
// Opdracht 1 
let letOefening1a = "Let Tekst"
let letOefening1a = "Let Tekst Twee!"
console.log(letOefening1a)
*/ console.log('(Commented out) Uncaught SyntaxError: Identifier "letOefening1a" has already been declared.')



// Opdracht 2
let letOefening1b = "Let Tekst"
console.log(letOefening1b)

letoefening1b = "Let Tekst Twee!"
console.log (letoefening1b)



/*
//Opdracht 3
const constOefening1c = "Const Tekst"
console.log(constOefening1c)

constOefening1c = "Const Tekst Twee!"
console.log(constOefening1c)
*/ console.log('(Commented out) Uncaught TypeError: Assignment to constant variable.')



// opdracht 4
varOefening = "Var Tekst";
console.log(varOefening)

var varOefening = "Var Tekst Twee!";
console.log(varOefening);

var varOefening = "Var Tekst Drie!";
console.log(varOefening);




// Hoofdstuk 2
console.log('-----------------------------')
console.log('Hoofdstuk 2')
console.log('-----------------------------')

// opdracht 1
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen."

/* A */ let splitPhrase = someKittens.split('!')
        console.log(splitPhrase[0]+'!')
        console.log(splitPhrase[1])

/* B */ console.log(someKittens.toUpperCase())

/* C */ console.log(someKittens.indexOf("kittens"))
        console.log(someKittens.lastIndexOf("kittens"))

/* D */ console.log(splitPhrase[0].charAt("kittens"))
        console.log(splitPhrase[1].charAt("kittens"))

/* NOTE */ console.log("Ik snap opdracht 1 niet helemaal... :( ")

// opdracht 2

/* A */ console.log(someKittens.substr(12, 9) + "   (substr test1)")
/* B */ console.log(someKittens.slice(4, 9) + "   (slice test1)")
/* C */ console.log(someKittens.substr(-16, -60) + "   (substr test2)")
/* D */ console.log(someKittens.slice(-34, -19) + "   (slice test2)")

// opdracht 3

let kittenSplit = someKittens.split(' ');
console.log(kittenSplit[0])
console.log(kittenSplit[1])
console.log(kittenSplit[2])
console.log(kittenSplit[3])
console.log(kittenSplit[4])
console.log(kittenSplit[5])
console.log(kittenSplit[6])
console.log(kittenSplit[7])
console.log(kittenSplit[8])
console.log(kittenSplit[9])
console.log(kittenSplit[10])
console.log(kittenSplit[11])
console.log(kittenSplit[12])
console.log(kittenSplit[13])
console.log(kittenSplit[14])



// Hoofdstuk 3
console.log('-----------------------------')
console.log('Hoofdstuk 3')
console.log('-----------------------------')

// opdracht 1

/* A */ // answer in HTML.
/* B */ // answer in HTML.

let x = 4
let y = 8
/* C */ if (x == 4 && y == 8) {console.log("Result!")}
/* D */ if (x == 4 || y == 8) {console.log("Result!")}
/* E */ if (y == 8 || x == 4) {console.log("Good Result!")} else {console.log("Bad Result!")}
/* F */ if (y == 8 ?? x == 4) {console.log("Good Result!")} else {console.log("Bad Result!")}


let z = 41

/*
if (z >= 5 && z <= 10) {console.log("Within range: ( >=5 && <= 10 )")} 
else if (z > 10 && z <=20) {console.log("Within range: ( >=10 && <= 20 )")} 
else {console.log("Out of expected range")}
*/

/* G */ if (z > 5 && z < 10) {console.log("Within range: ( >=5 && <= 10 )")} 
/* H */ else if (z >= 11 && z <= 20) {console.log("Within range: ( >=11 && <= 20 )")}
/* I */ else if (z == 21 || z == 23) {console.log("Twenty one or Twenty three")}
/* J */ else if (z < 35 || z > 40 && z < 45) {console.log("Less than 35 or between 40 and 45")}
        else {console.log("unknown range")}
/* K */ // answer in HTML


// opdracht 2

/* A, B */ let a = 20

if (a == 3) {console.log("a equals 3")}
else if (a > 4) {console.log("a is larger than 4")}
else if (a > 11) {console.log("a is larger than 11")}
else if (a < 3) {console.log("a is smaller than 3")}
else {console.log("a has a value out of range...")}

/* C */ let maandCheck = 0
var maand = [
        "Januari",
        "Februari",
        "Maart",
        "April  (The best month!!)",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "October",
        "November",
        "December",
]

if (maandCheck >= 0 && maandCheck <= 11) {console.log(maand[maandCheck])}
else (console.log("Not a valid month..."))

/* D */
maandCheck = 4
switch (maandCheck) {
        case 1:
                month = "January";
                break;
        case 2:
                month = "February";
                break;
        case 3:
                month = "March";
                break;
        case 4:
                month = "April (The best month!!)";
                break;
        case 5:
                month = "May";
                break;
        case 6:
                month = "June";
                break;
        case 7:
                month = "July";
                break;
        case 8:
                month = "August";
                break;
        case 9:
                month = "September";
                break;
        case 10:
                month = "October";
                break;
        case 11:
                month = "November";
                break;
        case 12:
                month = "December";
                break;

        default:
                month = ("Invalid month.")
                break;
}
console.log(month)

/* E */ let number = 3
let results = number <= 4 && number >= 0 ? "2" : "5";
console.log(`${results}`)



// Hoofdstuk 4
console.log('-----------------------------')
console.log('Hoofdstuk 4')
console.log('-----------------------------')

// opdracht 1


/* A */ function helloBtn1(_onclick) {
                console.log("Hello World")
                document.getElementById("btnResult1").innerHTML = " &nbsp; Check the Console!";
        }

/* B */ function helloInput1(_val) {
                let inputVar = document.getElementById("input1").value;
                console.log(inputVar)
        }

/*C,D */ function paramCon1(_myParameter) {
        console.count
        console.log("Logging... " + _myParameter + " to console...")
        document.getElementById("paramConResult").innerHTML = " &nbsp; Logs undefined to console, because function parameters aren't declared yet."
        return _myParameter
}
        console.log("Times triggered: " + paramCon1 + "times")


console.log(' ')
console.log('--------')
console.log('-----------------------------')

