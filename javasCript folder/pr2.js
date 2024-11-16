document.getElementById("submit").addEventListener('click',function(){
    let text_input=document.getElementById('text_area').value

    let review=document.getElementById('div_container')
    let create=document.createElement('p')
    create.innerText=text_input;
    review.appendChild(create)
    document.getElementById('text_area').value=''
    
    
})