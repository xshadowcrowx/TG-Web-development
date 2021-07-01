// loop codecademy

let resultaat = 0

for (let a = 1; a < 1000; a += 3) {
  //console.log(a);
  document.getElementById("multiples3").innerHTML = `${a}`
    if(a%3===0 || a%5===0) {
      resultaat += a;
    }
  console.log(resultaat)
};

/*
function loadResult(a, b) {  
  for (let a = 1; a < 1000; a += 3) {
    //console.log(a);
    document.getElementById("multiples3").innerHTML = `${a}`
    sumA =+ a;
    console.log(a)
  };

  for (let b = 1; b < 1000; b += 5) {
    //console.log(b);
    document.getElementById("multiples5").innerHTML = `${b}`
    sumB =+ b;
  };

  return resultaat = a, b;
  
}*/
// console.log(resultaat);



/*

// Oplossing van Kim Sing
let sum = 0
for(let i=1; i<1000; i++) {
  //console.log(i);
  if(i%3===0 || i%5===0) {
    sum += i;
  }
}
console.log(sum);

*/