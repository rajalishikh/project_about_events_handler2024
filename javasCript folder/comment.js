document.getElementById('Comment_button').addEventListener('click',function(){
    

    // bring the input section of comment box 
    let comment_box= document.getElementById('text_area')
    let comment_box_value=comment_box.value;
    

    // bring the output section of comment box 
    let comment_output=document.getElementById('comment_output_section')
    let y=document.createElement('p')
    y.innerText=comment_box_value;
    comment_output.appendChild(y)

    // clear the box 

    comment_box.value=''

   
    

    





})