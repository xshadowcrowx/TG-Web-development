
/* ******************************************************************** */
//   QUIZ GAME
/* ******************************************************************** */

/* Plan:

  1. generate two random values under 100. (value1, value 2)
  2. randomize the operator to compute value1 and value2. (arithmetic)
  3. calculate product of `value1 (operator) value 2` and store in correctAnswer variable.
  4. generate 4 values within a limited range of `$(correctAnswer)` then store in array.
  5. Set array indexes: if answer wrong index = wrongAnswer, if answer correct index = correctAnswer.

  6. Render game UI to DOM. (JS)
  7. on user input compare input === correctAnswer.
  8. if answer correct set game status to "won", and highlight answer green.
  9. if answer wrong set game status to "lost", and highlight answer in red, as well as correct answer green.
  10. Game ends, next game. (or previous game if applicable.)

  ------------------

  extra:
  0. add a counter to show points!
  1. add a timer for extra stress
  2. add animations for true & false user input
  3. add sounds to make the game more immersive
  4. add music for the ultimate immersive experience

*/

function game() {

  // 1. Generate random values
  let value1 = Math.floor(Math.random() * 99)+1;
  let value2 = Math.floor(Math.random() * 99)+1;

  // 2. Generate random operator
  const operator = ['+', '-'];
  let opIndex = getRandomInt(2);

  function getRandomInt(max) { // function to get random operator from array
    return Math.floor(Math.random() * max);
  }

    //* Debug progress...
    console.log(value1);
    console.log(value2);
    console.log(opIndex);
    console.log(operator[opIndex]);
  
  // 3. Calculate product
  const correctAnswer = value1 + value2;

  // 4. Generate 4 random values within range of correctAnswer
  function getRandomAnswer(min, max) {
  //  let min = correctAnswer-12;
  //  let max = correctAnswer+12;

    console.log(min);
    console.log(max);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  //* Debug progress
  console.log(correctAnswer)

}

game();


/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(2,40));
/* test 

*/
let operator = '*'
let numbs = 3

console.log(operator)

map = (['1', '2', '3'], x => operator (numbs))

console.log(Map)

