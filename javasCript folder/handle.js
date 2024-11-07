console.log('raj')

function change_name(){
    let change_text= document.getElementById('Change_22')
    change_text.innerText='Changing by on click function '
}

// step 2 

document.getElementById('addeventListner').addEventListener('click',function(){

    let change_text_addEventListener=document.getElementById("Change_22")
    change_text_addEventListener.innerText='change by addEventListener '
})