const numbers = [1, 2, 3];

// accumulator recebe o retorno da execução e acumula ele progressivamente
// 0 é o valor inicial, uma boa pratica declara-lo dentro do reduce
// o valor inicial deve ser do mesmo tipo do retorno desejado na função
const sumAllNumbersOfArray = numbers.reduce(
  (accumulator, item, index, array) => {
    return (accumulator += item);
  },
  0
);

console.log(sumAllNumbersOfArray);

const phaseScores = [
  { name: "Vinicius Costa", score: 337 },
  { name: "Roger Melo", score: 43 },
  { name: "Alfredo Braga", score: 234 },
  { name: "Pedro H. Silva", score: 261 },
  { name: "Ana Paula Rocha", score: 491 },
  { name: "Vinicius Costa", score: 167 },
  { name: "Roger Melo", score: 137 },
  { name: "Alfredo Braga", score: 135 },
  { name: "Ana Paula Rocha", score: 359 },
  { name: "Pedro H. Silva", score: 133 },
];

// item aqui recebe pasheScore ou seja tbm poderia ser feito com:
/*
    const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === "Roger Melo") {
        accumulator += phaseScore.score;
    }

    return accumulator;
    }, 0);
 */
const rogerScore = phaseScores.reduce((accumulator, item) => {
  if (item.name === "Roger Melo") {
    accumulator += item.score;
  }

  return accumulator;
}, 0);

console.log(rogerScore);

const palavras = ["guilherme", "isabeli", "daniel"];

const biggestName = palavras.reduce((accumulator, item) => {
  if (item.length > accumulator.length) {
    return item;
  }

  return accumulator;
}, "");

console.log(biggestName);
