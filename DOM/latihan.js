const hlmnBody = document.getElementsByTagName("body")[0];
const tombol = document.getElementsByTagName("button")[0];

function ubahBg() {
  hlmnBody.classList.toggle("darkMode");

  if (tombol.value == "on") {
    tombol.innerHTML = "ON";
    tombol.setAttribute("value", "of");
    tombol.style.backgroundColor = "blue";
  } else if (tombol.value == "of") {
    tombol.innerHTML = "OF";
    tombol.setAttribute("value", "on");
    tombol.removeAttribute("style");
  }
}

// tombol.onclick = ubahBg;
tombol.addEventListener("click", ubahBg);

// Tombol Tambah Data
const tmblTambah = document.getElementById("addData");
const kelompok2 = document.querySelector("#b ul");

tmblTambah.addEventListener("click", function () {
  const jumlahUl = document.querySelectorAll("#b li");
  const listBaru = document.createElement("li");

  let urutan = 0;
  for (let i = 1; i <= jumlahUl.length + 1; i++) {
    urutan = i;
  }
  const text_li = document.createTextNode(`Item Baru ${urutan}`);

  const btnhapus = document.createElement("button");
  const text_hapus = document.createTextNode("Hapus");
  btnhapus.appendChild(text_hapus);

  btnhapus.setAttribute("onclick", "tombolHapus(this)");

  listBaru.appendChild(text_li);
  listBaru.appendChild(btnhapus);
  kelompok2.appendChild(listBaru);
});

// tombol hapus
function tombolHapus(e) {
  const parenLi = e.parentNode;
  parenLi.remove();
}
