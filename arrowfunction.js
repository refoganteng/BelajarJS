const pangkat = (x) => { //function pangkat(x)
     return x * x;
};

const pangkat2 = (x,y) => {
     return Math.pow(x,y);
};

//implisit return - jika 1 baris perintah - ganti kurawal dengan kurung biasa
const random = () => (
     Math.floor(Math.random() * 1000)
);

const add = (a, b) => a + b; //lebih sederhana lagi boss!

//some & every >>>> boolean
const kataKata = ['saya', 'kamu', 'saya'];
const word = kataKata.every(kata => {
  return kata.length === 4;
});
console.log(word);

const passGrade = [80, 85, 79, 90, 93, 77];
const isGraduate = passGrade.every((score) => score >= 75);
console.log(isGraduate);

const animes = [
    { title: "Naruto", year: 2002, rating: 90 },
    { title: "Attack on Titan", year: 2013, rating: 99 },
    { title: "Demon Slayer", year: 2019, rating: 98 }
];

const isAnimeNew = animes.some((kartun) => kartun.year > 2013);
console.log(isAnimeNew);

//reduce
const subTotal = [1,2,3,4,5,6,7];
const total = subTotal.reduce((curent, single) => {
     return curent + single;
});
console.log(total); //sama aja 1+...+7

const bestAnime = animes.reduce((bestAnime, currentAnime) => {
     console.log(bestAnime, currentAnime);
     if (currentAnime.rating > bestAnime.rating) {
          return currentAnime;
     }
     return bestAnime;
});
console.log(bestAnime);

//this GLOBAL
const person = {
     firstName: 'Revo',
     lastName: 'Nando',
     fullName: function() { //jangan pake arrow, ke global nanti
          return `${this.firstName} ${this.lastName}`;
     },
};
console.log(person.fullName());