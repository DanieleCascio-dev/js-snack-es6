//Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bicycles = [
  {
    name: "Bike 1",
    weight: 50,
  },
  {
    name: "Bike 2",
    weight: 30,
  },
  {
    name: "Bike 3",
    weight: 35,
  },
];

/* const [bike1, bike2, bike3] = bicycles; */
const theLighter = isLess(bicycles[0], bicycles[1], bicycles[2]);
// const { name, weight } = theLighter;
// console.log(`La bici con peso minore è ${name} e pesa ${weight}`);

let lessWeight = bicycles[0].weight;

bicycles.forEach((bike) => {
  if (bike.weight < lessWeight) {
    lessWeight = bike;
  }
});
console.log(lessWeight);
const { name, weight } = lessWeight;
console.log(`La bici ${name} pesa ${weight} ed è la più leggera`);
const resultElem = document.querySelector(".result");
resultElem.innerHTML = `La bici ${name} pesa ${weight}kg ed è la più leggera`;

/* FUNCTION */
function isLess(a, b, c) {
  if (b.weight < a.weight && c.weight < b.weight) {
    return c;
  } else if (b.weight < a.weight && b.weight < c.weight) {
    return b;
  } else {
    return a;
  }
}
