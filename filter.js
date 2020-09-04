const numbers = [0, 100];

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const moreThan37 = numbers.filter((item, index, array) => {
  return item > 37;
});

const notMoreThan37 = numbers.filter((item, index, array) => {
  return item < 37;
});

const position1 = numbers.filter((index) => {
  return index > 0;
});

// item aqui recebe user ou seja tbm poderia ser feito com:
/* 
    const premiumUsers = users.filter((user) => {
        return user.premium;
    });
*/
const premiumUsers = users.filter((item) => {
  return item.premium;
});

console.log(moreThan37);
console.log(notMoreThan37);
console.log(position1);
console.log(premiumUsers);

const palavras = ["guilherme", "isabeli", "daniel"];

const moreWords = palavras.filter((item) => {
  return item.length >= 8;
});

console.log(moreWords);
