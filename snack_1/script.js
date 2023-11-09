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
const { name, weight } = theLighter;
console.log(`La bici con peso minore è ${name} e pesa ${weight}`);
/* bicycles.forEach((bike) => {
  const { weight } = bike;
  console.log(weight);
  console.log(isLess(weight));
}); */

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
