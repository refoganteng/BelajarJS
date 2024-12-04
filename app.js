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

const password = prompt("Buat Passwordmu : ");

//password harus 6 karakter
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password VALID");
  } else {
    console.log("Password tidak boleh ada spasi");
  }
} else {
  console.log("Minimal 6 karkter bro");
}
