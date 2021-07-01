/* spacer */ console.log("------------------------------")
/* spacer */ console.log("-------- Excercise 1 ---------")
/* spacer */ console.log("------------------------------")

// Excercise 1
for (let line = "#"; line.length <= 6; line += "#") {
  console.log(line)
}

/* spacer */ console.log("------------------------------")
/* spacer */ console.log("-------- Excercise 2 ---------")
/* spacer */ console.log("------------------------------")

// Excercise 2
for (let numbers = 1; numbers < 101; numbers++) {
  
  let calc = "";
  if (numbers % 3 == 0) calc += "Fizz";
  if (numbers % 5 == 0) calc += "Buzz";
  console.log(calc || numbers)
}

/* spacer */ console.log("------------------------------")
/* spacer */ console.log("-------- Excercise 3 ---------")
/* spacer */ console.log("------------------------------")

// Excercise 3
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

/* spacer */ console.log("------------------------------")
/* spacer */ console.log("-------- Excercise 4 ---------")
/* spacer */ console.log("------------------------------")

// Excercise 4



const fruits = ["Apple", "Banana", "Orange", "Mango", "Avocado"];
for (x of fruits)
console.log(x)