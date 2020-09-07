const honorifics = [
  "kyun",
  "kun",
  "san",
  "hime",
  "chan",
  "koi",
  "dono",
  "senpai",
  "sama",
];

module.exports = {
  randomize: () => honorifics[Math.floor(Math.random() * honorifics.length)],
};
