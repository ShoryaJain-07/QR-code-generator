const input=document.querySelector(".input_text");
const image=document.querySelector(".qr");
const err=document.querySelector(".error");

function generate(){
    console.log(input.value);
    if(input.value=="")
    {
        err.innerHTML='field required !!';
        image.src=``;
        return;
    }
    else{
        err.innerHTML=``;
        image.src=`https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&amp;size=100x100`;
    }
}