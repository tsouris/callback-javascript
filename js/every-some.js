const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, poisints: 48, online: true },
];

//   every
// const isAllOnline = players.every((player) => player.online);
// console.log(isAllOnline);

// some
const isAllOnline = players.some((player) => player.online);
console.log(isAllOnline);

const hardCorePlayers = players.some((player) => player.timePlayed > 400);
console.log(hardCorePlayers);