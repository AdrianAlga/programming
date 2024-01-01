function kubus(param1, param2) {
  let kubus1 = param1 * param1 * param1;
  let kubus2 = param2 * param2 * param2;

  const hasil = kubus1 + kubus2;
  return hasil;
}

const hasil = kubus;
console.info(hasil(8, 3));

// argumen function
function penjumlahan(a, b) {
  return a + b;
}

function perkalian(a, b) {
  return a * b;
}

const hasilKali = perkalian(penjumlahan(2, 3), penjumlahan(5, 5));

console.info(hasilKali);

// arguments
function inputan() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.info(inputan(2, 3, 4, 20, 1, 20));

// global & local scope

// global scope
var a = 1;
function tes() {
  // local scope
  a = 5;
}
tes();

console.info(a);

// rekursif
function rekursif(el) {
  // debugger;
  if (el === 0) return 1;
  return el * rekursif(el - 1);
}

console.info(rekursif(5));
