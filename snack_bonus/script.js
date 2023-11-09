// Snack Bonus
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// es:
// const numbersArray = [23, 14, 6, 8, 10];
// const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]

const numbersArray = [21, 14, 3, 78, 10, 90, 3, 2];

const result = getSubArray(numbersArray, 0, 2);
console.log(result);
/* FUNCTION */

function getSubArray(numbersArray, a, b) {
  const newArray = [];
  if (a > b) {
    return console.log("a deve essere minore di b");
  }

  numbersArray.forEach((num, index) => {
    /*  if (index === a) {
      newArray.push(num);
    } */
    if (index >= a && index <= b) {
      newArray.push(num);
    }
    /* if (index === b) {
      newArray.push(num);
    } */
  });
  return newArray;

  /* const newNumbersArray = numbersArray.filter((curNum, index) => {
    index === a || (a < index && index < b) || index === b;
  });
  return newNumbersArray; */
}
