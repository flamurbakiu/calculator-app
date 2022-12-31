let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        
        console.log(value);
        
        if(value) {
            screen.value += value;
        }
    })
})

equal.addEventListener('click', function(e) {
    console.log(screen.value);
    if (screen.value === '') {
        screen.value = '';
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', function(e) {
    screen.value = ''
})
