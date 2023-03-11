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

  if (i % 3 === 0 && i % 5 === 0) {
    x = "fizzBuzz";
    console.log(i, x);

    // per i multipli di 3 stampi “Fizz” al posto del numero
  } else if (i % 3 === 0) {
    x = "Fizz";

    console.log(i, x);

    // per i multipli di 5 stampi “Buzz”
  } else if (i % 5 === 0) {
    x = "Buzz";

    console.log(i, x);
  } else {
    console.log(i);
  }
  divElement.innerHTML += `<div class="square d-flex align-items-center justify-content-center m-3"> ${x} </div>`;
}
