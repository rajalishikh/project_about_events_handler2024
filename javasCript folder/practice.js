document.getElementById('comment_button').addEventListener('click',function(){
   let text_input=document.getElementById('text_input')
   let text_input_value=text_input.value;

//    add in comment 
let comment_section=document.getElementById('comment section');
let create_p=document.createElement('p')
console.log(create_p)
create_p.innerHTML= text_input_value
comment_section.appendChild(create_p)

text_input.value='';
   
});
