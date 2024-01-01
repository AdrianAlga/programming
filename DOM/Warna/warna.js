const textHeader = document.getElementsByTagName("h1")[0];
const tombol = document.getElementsByTagName("button")[0];
const tombolHapus = document.getElementsByTagName("button")[1];
const halamanBody = document.body;

tombol.addEventListener("click", function () {
  halamanBody.classList.add("warna");
});

tombolHapus.addEventListener("click", function () {
  halamanBody.classList.remove("warna");
});

// mengubah warna menjadi random
const tmblAcak = document.createElement("button");
const textTmblAcak = document.createTextNode("Tombol Acak");
tmblAcak.appendChild(textTmblAcak);
tmblAcak.setAttribute("type", "button");
tmblAcak.setAttribute("id", "tRandom");
halamanBody.appendChild(tmblAcak);

const tombolAcakWarna = document.getElementById("tRandom");
tombolAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  halamanBody.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
