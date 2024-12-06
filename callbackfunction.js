//forEach x Array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
angka.forEach(function (n) {
  console.log(n * n);
}); //nutup kurungnya di sini

angka.forEach(function (x) {
  if (x % 2 === 0) {
    console.log(`angka ${x} habis dibagi 2 gaesss...`);
  } else {
    console.log(`angka ${x} GAK HABIS dibagi 2 gaes...`);
  }
});

const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2013,
  },
  {
    title: "One Piece",
    rating: 100,
    year: 2016,
  },
  {
    title: "Anya Geraldine",
    rating: 98,
    year: 2012,
  },
  {
    title: "Naruto",
    rating: 91,
    year: 2010,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - ${anime.rating}/100`);
});

//map x Array
const expression = ["lol", "rofl", "omg", "ttyl"];
const capsExpression = expression.map(function (exprs) {
  return exprs.toUpperCase();
});
console.log(expression);
console.log(capsExpression);

const angkaa = [1, 2, 3, 4, 5, 6, 7];
const angkaaDouble = angkaa.map(function (num) {
  return num * 2;
});
console.log(angkaa);
console.log(angkaaDouble);

const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
console.log(animeList);

//setTimeout & setInterval
console.log('Hallo...');
setTimeout(() => {
     console.log("Masih di sana ngga?");
}, 3000);

// const interval = setInterval(() => {
//      console.log(Math.random());
// }, 3000);


//filter
const nomer = [1,2,3,4,5,6,7,8,9];
const ganjil = nomer.filter(n => {
     return n % 2 === 1;
});
console.log(ganjil);

const animeBagus = animes.filter(animes => animes.rating > 94);
console.log(animeBagus);
const animeBaru = animes.filter(animes => animes.year > 2015).map(animenew => animenew.title);
console.log(animeBaru);

//filter LALU mapping
const judulAnimeBagus = animeBagus.map(anime => anime.title);
console.log(judulAnimeBagus);