// step2

function make_red() {
  document.body.style.backgroundColor = "red";
}

// step3
let makeBlue = document.getElementById("makeBlue");

makeBlue.onclick = colorChange;


function colorChange() {
  document.body.style.backgroundColor = "blue";
};
