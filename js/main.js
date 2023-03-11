/*
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*  STRUMENTI
- let / const
- for cycle
- % division reminder
- console.log   */

//******************************************************************************************************************************************/
const divElement = document.querySelector(".container");
console.log(divElement);

// Scrivi un programma che stampi in console i numeri da 1 a 100(ciclo for)
for (let i = 1; i <= 100; i++) {
  let x = i;
  const square = document.createElement("div");
  square.classList.add(
    "square",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "m-3"
  );
  if (i % 3 === 0 && i % 5 === 0) {
    x = "fizzBuzz";
    square.classList.add("bg_fizzbuzz");
    console.log(i, x);
    square.innerHTML = "fizzbuzz";

    // per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (i % 3 === 0) {
    x = "Fizz";
    square.classList.add("bg_fizz");
    console.log(i, x);
    square.innerHTML = "fizz";

    // per i multipli di 5 stampi “Buzz”
  } else if (i % 5 === 0) {
    x = "Buzz";
    square.classList.add("bg_buzz");
    console.log(i, x);
    square.innerHTML = "buzz";
  } else {
    square.classList.add("bg_number");
    console.log(i, x);
    square.innerHTML = i;
  }

  divElement.append(square);
  // per i numeri multipli di 3 che di 5 stampi “FizzBuzz”.
}
