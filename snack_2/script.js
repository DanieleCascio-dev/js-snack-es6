// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
  {
    name: "Milan",
    falli: Math.floor(Math.random() * 100) + 1,
    punti: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "juve",
    falli: Math.floor(Math.random() * 100) + 1,
    punti: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Inter",
    falli: Math.floor(Math.random() * 100) + 1,
    punti: Math.floor(Math.random() * 100) + 1,
  },
];

console.log(footballTeams);
footballTeams.forEach((team) => {
  const { name, falli } = team;
  console.log(name, falli);
});

/* const { name, falli } = footballTeams[0];
console.log(name, falli); */
