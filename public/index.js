const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');

bars.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})