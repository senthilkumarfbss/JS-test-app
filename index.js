const div = document.querySelector('.container')
const btn = document.querySelector('button')
console.log('div',div);
console.log('btn',btn);

function clickHandler(e) {
    if(div.classList.contains('active')){
        div.classList.remove('active')
    }else{
        div.classList.add('active')
    }
}

btn.addEventListener('click',clickHandler)