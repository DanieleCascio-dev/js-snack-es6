// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
  {
    name: "Milan",
    falli: 0,
    punti: 0,
  },
  {
    name: "juve",
    falli: 0,
    punti: 0,
  },
  {
    name: "Inter",
    falli: 0,
    punti: 0,
  },
];

footballTeams.forEach((team) => {
  team.falli = Math.floor(Math.random() * 100) + 1;
  team.punti = Math.floor(Math.random() * 100) + 1;
});

const newTeams = footballTeams.map((team) => {
  const { name, falli } = team;
  return {
    name,
    falli,
  };
});
console.log(newTeams);

// console.log(footballTeams);
// footballTeams.forEach((team) => {
//   const { name, falli } = team;
//   newTeams.push(name, falli);
//   console.log(newTeams);
// });

/* const { name, falli } = footballTeams[0];
console.log(name, falli); */

/* Function */
