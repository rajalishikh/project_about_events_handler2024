document.getElementById('delete_input').addEventListener('keyup',function(event){
    let remove_default=document.getElementById('Hide_text')
    if(event.target.value === 'delete'){
        
        remove_default.removeAttribute('disabled')
    }
    else{
        remove_default.setAttribute('disabled')
    }
})

document.getElementById('Hide_text').addEventListener('click',function(){
    console.log('raj')
    let hide_h1=document.getElementById('Heading_js')
    console.log(hide_h1.innerText)
    hide_h1.style.display='none'

    // second program 



})


