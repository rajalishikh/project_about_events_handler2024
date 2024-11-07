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

// step5
let Make_orange=document.getElementById('OrangeMake')
Make_orange.addEventListener('click',function change(){
    document.body.style.backgroundColor='orange'
})

// step5

document.getElementById('Make_pink').addEventListener('click',function(){
    document.body.style.backgroundColor='pink'
})
