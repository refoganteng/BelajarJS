// // console.log("sebelum pembanding");
// // if (1 + 1 === 2) {
// //     console.log("dalam pembanding");
// // }
// // console.log("setelah pembanding");

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Angka lebih besar sama dengan 0.5");
// }

// if (angka <= 0.5) {
//   console.log("Angka lebih kecil sama dengan 0.5");
// }

// let age = 8;
// if (age === 18) {
//   console.log("Boleh.... Boleh Masuk");
// } else if (age === 15) {
//   console.log("Perlu dibimbing ortu ya.");
// } else if (age === 8) {
//   console.log("Udah pergi ke dokter gigi?");
// }

// const iniHari = "Senin";

// if (iniHari === "Senin") {
//   console.log("Selamat kerja dengan tersiksa kawan");
// } else if (iniHari === "Sabtu") {
//   console.log("Semoga jangan cepat berlalu");
// }

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

// // password harus 6 karakter
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

// let hari = prompt('isi hari ke'); // Misalnya hari ini adalah hari ke-3

// switch (hari) {
//     case 1:
//         console.log("Senin");
//         break;
//     case 2:
//         console.log("Selasa");
//         break;
//     case 3:
//         console.log("Rabu");
//         break;
//     case 4:
//         console.log("Kamis");
//         break;
//     case 5:
//         console.log("Jumat");
//         break;
//     case 6:
//         console.log("Sabtu");
//         break;
//     case 7:
//         console.log("Minggu");
//         break;
//     default:
//         console.log("Input hari tidak valid");
// }

// // array
// let warna = ['hijau', 'kuning', 'biru', 'kelabu'];

// //object


// //looping for

// for (let i = 0; i <= 20; i++) {
//   console.log('Menuliskan angka '+i);
// }


const animals = ['cat', 'deer', 'hog', 'anjing', 'babi'];

for (let i = 0; i <animals.length; i++) {
  console.log('hewan ke-',i,' adalah '+ animals[i]);
}

let asu = animals[3];
for (let i = 0; i <= 5; i++) {
  console.log("Luaran ke-",i);
  for (let j = 0; j < asu.length; j++) {
    console.log('     Dalaman: ', asu[j]);
  }
}

let pilihan = 'abcd'
for (let i = 1; i <= 10; i++) {
  console.log(`${i}. Soal nomor ${i}`);
  for (let j = 0; j < pilihan.length; j++) {
    console.log(`      ${pilihan[j]}. Pilihan jawaban`);
  }
}

const studentrow = [
  ['olivia', 'liam', 'noah'],
  ['amelia', 'oliver', 'ava'],
  ['sopia', 'mateo', 'isabela']
];

for (let i = 0; i < studentrow.length; i++) {
  const row = studentrow[i];
  console.log(`seat row #${i+1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(`     ${row[j]}`);
  }
}
 // loop with WHILE
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

// const passwordadmin = 'Pass123';
// let guess = prompt('enter your password');
// while (guess !== passwordadmin) {
//   guess = prompt("enter your password");
// }
// alert('congrats! kamu benar-benar admin');

// let input = prompt('hey, say something!');
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop') break;
// }

// alert('oke gue stop');

// let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// while (!maximum || maximum <= 0) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal yang valid!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(`Target Number (debug): ${targetNum}`);

// let guess = parseInt(prompt("Masukkan tebakan pertama kamu!"));
// let attempt = 1;
// const maxAttempts = 5;

// while (guess !== targetNum && attempt < maxAttempts) {
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Terlalu tinggi! Coba lagi broo!"));
//   } else if (guess < targetNum) {
//     guess = parseInt(prompt("Terlalu rendah! Coba lagi broo!"));
//   }

//   if (!guess) {
//     alert("Masukkan tebakan berupa angka, ya!");
//   }

//   attempt++;
// }

// if (guess === targetNum) {
//   alert(`NAH BENER!! Tebakan kamu tepat setelah ${attempt} kali mencoba!`);
// } else {
//   alert(
//     `Wah, kamu sudah mencoba ${maxAttempts} kali dan belum berhasil. Jawabannya adalah ${targetNum}.`
//   );
// }


const fruits = ['apel', 'mangga', 'lemon', 'mengkudu'];
for (let fruit of fruits) {
  console.log(`Buah ${fruit}`);
}

const studentsScore = {
  oliv: 20,
  revo: 31,
  naomi: 45,
  mateo: 90,
  kara: 83,
};

for (let student in studentsScore) {
  console.log(`${student} memiliki nilai ${studentsScore[student]}`);
}