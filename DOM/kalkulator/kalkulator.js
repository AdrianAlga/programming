layar = document.querySelector(".hasil h4");
angka = document.getElementsByClassName("angka");
operator = document.getElementsByClassName("operator");

var a = "";
var b = "";
var operatorSign = "";

function angkaHandler(e) {
  if (operatorSign === "") {
    a += e.value;
    layar.innerHTML = a;
  } else {
    b += e.value;
    layar.innerHTML = b;
  }
}

function operatorHandler(e) {
  operatorSign = e.value;
  layar.innerHTML = "";
}


function kalkulator(a, input2, b) {
  let output;
  if (input2 == "+") {
    output = a + b;
  } else if (input2 == "-") {
    output = a - b;
  } else if (input2 == "*") {
    output = a * b;
  } else if (input2 == "/") {
    output = a / b;
  }
  return output;
}

function calculate() {
  let output2 = kalkulator(parseInt(a), operatorSign, parseInt(b));
  a = "";
  b = "";
  operatorSign = "";
  layar.innerHTML = output2;
}
// console.info(inputan[14])
