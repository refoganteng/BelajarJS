function lemparDadu() {
    console.log(Math.floor(Math.random() * 6) + 1);
}
function ngaji() {
    console.log("Bismillah....");
    console.log("Alhamdulillah....");
}
lemparDadu();
ngaji();

function sapa(nama) {
    console.log(`Halo, ${nama}! Apa kabar?`);
}
sapa('Revo');

function jumlahkan(a,b) {
    const total = a+b;
    return total;
}

let hasil = jumlahkan(9,18);
console.log(hasil);

let linux = "RedHat";
function easyunix() {
    let linux = "Debian";
    console.log(linux);
}
easyunix();

let tinggi = 8;
if (tinggi > 5) {
    let lebar = 10;
    console.log(lebar);
}
console.log(tinggi); //bukan lebar

for (let index = 0; index < 10; index++) {
    const indexnum = index;
    console.log(indexnum);
}
// console.log(indexnum);

function lamarkerja() {
    const jabatan = 'Programmer';
    function orangdalam() {
        let kenalan = `orang dalam bisa masukkan ${jabatan}`;
        console.log(kenalan);
    }
    orangdalam();
}