const display = document.querySelector('.calculator .textview');
document.querySelectorAll('.calculator .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

function insert(num) {
    document.form.textview.value = document.form.textview.value+num; 
}

function equal() {
    const exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    const exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
