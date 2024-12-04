// console.log("sebelum pembanding");
// if (1 + 1 === 2) {
//     console.log("dalam pembanding");
// }
// console.log("setelah pembanding");

let angka = Math.random();
console.log(angka);

if (angka >= 0.5) {
  console.log("Angka lebih besar sama dengan 0.5");
}

if (angka <= 0.5) {
  console.log("Angka lebih kecil sama dengan 0.5");
}

let age = 8;
if (age === 18) {
  console.log("Boleh.... Boleh Masuk");
} else if (age === 15) {
  console.log("Perlu dibimbing ortu ya.");
} else if (age === 8) {
  console.log("Udah pergi ke dokter gigi?");
}

const iniHari = "Senin";

if (iniHari === "Senin") {
  console.log("Selamat kerja dengan tersiksa kawan");
} else if (iniHari === "Sabtu") {
  console.log("Semoga jangan cepat berlalu");
}

// const nilai = prompt("Isikan nilai : ");
// console.log("Nilai yang kamu input adalah " + nilai);

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else {
//   console.log("A");
// }

// const password = prompt("Buat Passwordmu : ");

//password harus 6 karakter
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password VALID");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Minimal 6 karkter bro");
// }

// let umur = prompt('berapa usiamu');
// let gender = 'male';

// if (gender === 'male' && umur >= 19) {
//   console.log("BOLEH KERJA JADI KULI BANGUNAN!")
// } else {
//   console.log("Di rumah aja nonton TV ya")
// }

// const role = prompt('masukkan role kamu');

// if (role === 'admin' || role === 'spv') { 
//   console.log('Silahkan akses bro');
// } else {
//   console.log('Gak boleh akses bro, maap')
// }

let hari = prompt('isi hari ke'); // Misalnya hari ini adalah hari ke-3

switch (hari) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
        break;
    default:
        console.log("Input hari tidak valid");
}

// array
let warna = ['hijau', 'kuning', 'biru', 'kelabu'];
