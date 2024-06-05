const clock=document.querySelector('#clock')
const pate=document.querySelector('#date');

setInterval(function(){
    let date=new Date();
    pate.innerHTML=date.toLocaleDateString();
    clock.innerHTML=date.toLocaleTimeString();
    },1000);


