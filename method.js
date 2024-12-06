const aritmatika = {
     perkalian: function (x,y) {
          return x * y;
     },
     pembagian: function (x,y) {
          return x / y;
     },
     pangkat: function (x) {
          return x * x;
     }
}
console.log(`ini hasil perkalian = ${aritmatika.perkalian(10,3)}`);
console.log(`ini hasil pemabagian = ${aritmatika.pembagian(10,2)}`);
console.log(`ini hasil pangkat = ${aritmatika.pangkat(10)}`);
//-------------------------------
phi = 22/7;
const lingkaran = {
     keliling: function(r) {
          return 2 * phi * r;
     },
     luas: function(r) {
          return phi * Math.pow(r,2);
     }
}
console.log(`Keliling lingkaran = ${lingkaran.keliling(7)}`);
console.log(`Luas lingkaran = ${lingkaran.luas(7)}`);

//belajar this--------------------
const saya = {
     nama: 'Revo Nando',
     hobi: 'Mancing keributan',
     kenalan: function(salam) {
          return `${salam}.... Saya ${this.nama}. Hobi saya ${this.hobi}`;
     }
}
console.log(saya.kenalan("Assalamu'alaikum"));
console.log(saya.kenalan("Salam sejahtera"));

// beLajar TRY amd CATCH -----------------
try {
     saya.kenalan('Syalom');
} catch {
     console.log('Error! Saya siapa?')
}
console.log('Setelah try n catch-------')

function teriak(pesan) { //coba masukkan data number
     try {
          console.log(pesan.toUpperCase());
     } catch(error) {
          console.log(error);
          console.log('Masukkan data string pada argument teriak()');
     }
}
console.log(teriak(23424));
