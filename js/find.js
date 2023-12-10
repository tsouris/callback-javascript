const numbers = [5, 6, 7, 8, 9];

const number = numbers.find((number) => number === 10);
console.log(number);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, poisints: 48, online: true },
];

const playerId = players.find((player) => player.id === "player-3");
console.log(playerId);
