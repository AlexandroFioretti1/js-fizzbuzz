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
x = 0;

// Scrivi un programma che stampi in console i numeri da 1 a 100(ciclo for)
for (let i = 1; i <= 100; i++) {
  x = i;
  const square = document.createElement("div");
  square.classList.add(
    "square",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "m-3"
  );

  if (i % 3 === 0 && i % 5 === 0) {
    x = "fizzbuzz";
    square.classList.add("bg_fizzbuzz");
    square.innerHTML = x;

    // per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (i % 3 === 0) {
    x = "fizz";
    square.classList.add("bg_fizz");
    square.innerHTML = x;

    // per i multipli di 5 stampi “Buzz”
  } else if (i % 5 === 0) {
    x = "buzz";
    square.classList.add("bg_buzz");
    square.innerHTML = x;
   
  } else {
    square.classList.add("bg_number");
    square.innerHTML = x;
  }


  divElement.append(square);

  console.log(x);
  // per i numeri multipli di 3 che di 5 stampi “FizzBuzz”.
}
