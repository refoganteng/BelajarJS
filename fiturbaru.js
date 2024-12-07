// default value
function acakDadu(sisi=6) { //pake = di parameyer
    return Math.floor(Math.random() * sisi) + 1;
};

function sapa(nama = 'Fulan', msg = 'Marhaba') {
    console.log(`${msg}, ${nama}`);
};

//spread operator ...
const angka = [1,20,3,4,5,4,6,3,-4];
console.log(...angka);
console.log(Math.max(...angka));
console.log(Math.min(...angka));

//spread operator (merger array)
const nomer = [1,2,3,4];
const nomer2 = [1,2,3,100];
const nama = ['Revo', 'Nando', 'Arum'];
const campuran =  [...nomer, ...nomer2, ...nama];
console.log(...campuran);

//spread operator (merger object)
const user ={
    nama: 'Jon',
    email: 'jon@gmail.com',
};

const credential = {
    token: 'dednaj249284nde',
    nohp: '08761523781'
}
const userbaru = {...user, id: 123, password: 'lubukpenyamum', ...credential};
console.log(user);
console.log(userbaru);

//rest parameter (males bikin parameter banyak)
const sumAll = (...nums) => {
    return nums.reduce((total, el) => total + el);
};

const name = ['Revo', 'Nando', 'Arum', 'Rezqy', 'Aningrum'];
const pemenang = (gold, silver, bronze, ...sisa) => {
    console.log(`Medali gold diraih oleh ${gold}`);
    console.log(`Medali silver diraih ${silver}`);
    console.log(`Medali bronze diraih ${bronze}`);
    console.log(`Yang gak menang: ${sisa.join(', ')}`); // Join the remaining names with a comma
};
console.log(pemenang(...name));

//destructing (bongkar array)
const peserta = ['batman', 'superman', 'lady', 'joko', 'anwar'];
const [satu, dua, tiga, ...sisa] = peserta;
console.log(satu);
console.log(dua);
console.log(tiga);
console.log(sisa.join(' dan '));

//destructing (bongkar object)
const pengguna = {
    jeneng: 'Nando',
    surel: 'mael@yahoo.com',
    role: 'adminjudol'
};
const {jeneng: asmi, surel, role} = pengguna;
console.log(asmi);
console.log(surel);
console.log(role);

//destructing (bongkar object dalam function)
const pengguna_role = ({jeneng: asmi, role}) => {
    return `${asmi} sebagai ${role}`
};
console.log(pengguna_role(pengguna));

