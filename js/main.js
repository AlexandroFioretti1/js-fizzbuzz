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
for (let i = 1; i < 101; i++) {
  const squareEl =
    (divElement.innerHTML += `<div class="square d-flex align-items-center justify-content-center m-3"> ${i} </div>`);

  // per i numeri multipli di 3 che di 5 stampi “FizzBuzz”.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    // per i multipli di 3 stampi “Fizz” al posto del numero
    squareEl.innerHTML = "FizzBuzz";
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // per i multipli di 5 stampi “Buzz”
  } else if (i % 5 === 0) {
    console.log("Buzz");
    // per mostrare i numeri da 1 a 100
  } else {
    console.log(i);
  }
}
