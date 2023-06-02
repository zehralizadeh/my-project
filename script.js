const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){

            display.innerText = '';
            

        } else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);

        }else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ''), 2000);

    }else{
        display.innerText += item.id;
    }
    
}
})

const toggle = document.getElementById('toggleDark');
const themeBtn = document.querySelector(".theme");
const calculator = document.querySelector(".calculator");
let isDark = true;
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        toggleDark.style.background = 'white';
        toggleDark.style.color = 'black';
        toggleDark.style.transition = '0.5s';
        calculator.classList.toggle("dark");
        themeBtn.classList.toggle("active");
    }else{
        toggleDark.style.background = 'black';
        toggleDark.style.color = 'white';
        toggleDark.style.transition = '0.5s';   
  calculator.classList.toggle("dark");
  themeBtn.classList.toggle("active");
  isDark = !isDark;

}

});


