// ======= DOM Section ======= //

// -- mengambil id -- //
const judul = document.getElementById("judul"); // element
judul.style.color = "red"; // menambah atribute style
judul.style.backgroundColor = "yellow"; // menambah atribute style
judul.innerHTML = "Hello"; // mengubah isi HTML

// -- mengambil tag HTML -- //
const paragraf = document.getElementsByTagName("p"); //HTML Collection

paragraf[0].style.color = "red"; // dieksekusi mirip seperti array dengan memanggil indexnya

for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].style.backgroundColor = "#999";
}

// -- mengambil Class -- //
const prgf1 = document.getElementsByClassName("p1")[0]; //HTML Collection

prgf1.style.color = "orange";

// -- mengambil menggunakan selector -- //
const prgf4 = document.querySelector("#b p"); // element
prgf4.style.color = "green";

const list = document.querySelector("#b li:nth-child(2)"); // mengambil child tertentu
list.style.backgroundColor = "#4444";

const listAll = document.querySelectorAll("#b li"); // nodeList
for (let i = 0; i < listAll.length; i++) {
  listAll[i].innerHTML = "gussion";
}

// mengubah node root (memperkecil scope)
const paraf = document.getElementById("b");
const p4 = paraf.getElementsByTagName("p");
p4[0].style.color = "yellow";
