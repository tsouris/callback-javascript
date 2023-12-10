const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter((number) => number < 10 || number > 20);
console.log(filteredNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const onlinePlayers = players.filter(({online}) => online);
console.log(onlinePlayers);

const offlinePlayers = players.filter(({online}) => !online);
console.log(offlinePlayers);

const highPlaytimePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
console.log(highPlaytimePlayers);