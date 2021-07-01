/*Maak een functie die 2 datums als input meekrijgt en het verschil tussen de eerste en de tweede datum in dagen teruggeeft.
Voorbeeld:*/

const date1 = new Date("June 14, 2019 11:13:00");
const date2 = new Date("June 20, 2019 14:05:47");

console.log(date2 - date1 / (1000 * 60 * 60 * 24) + ' milliseconds')

/* ------------------------------------------------ */

// Calculate Days
function calcDays(startDate, endDate) {
  const calc = startDate.getTime() - endDate.getTime();
  days = calc / (1000 * 3600 * 24);
  return days;
}

console.log(Math.round(calcDays(date2, date1)) + ' days');

// Calculate Weeks
function calcWeeks(startDate, endDate) {
  const calc = startDate.getTime() - endDate.getTime();
  weeks = calc / (1000 * 3600 * 24 * 7);
  return weeks;
}

console.log(Math.round(calcWeeks(date2, date1)) + ' weeks');




let d1 = new Date('June 20, 2019');
let d2 = new Date('June 14, 2019');

function maand(startDate, endDate) {
        let time = startDate.getTime() - endDate.getTime()
        return new Date(time).getDate()
}
//console.log(typeof d2)

console.log(maand(d1, d2));


/* ------------------------------------------------ */

// Advanced calculate
/*function calcDays(startDate, endDate) {
  const calc = startDate.getTime() - endDate.getTime();
  days = calc / (1000 * 3600 * 24);
  return days;
}*/

/* ------------------------------------------------ */



/*

getDays(
  new Date(“June 14, 2019”);
  new Date(“June 20, 2019");
) // ➞ 6
getDays(
  new Date(“December 29, 2018”);
  new Date(“January 1, 2019");
) // ➞ 3

// Dates may not all be in the same month/year.

getDays(
  new Date(“July 20, 2019”);
  new Date(“July 30, 2019");
) // ➞ 10

*/