window.onload = function(){
    // test script for darkligh switch
    let btnSwitch = document.querySelector("#switch__DarkLight");
    let btnContainer = document.querySelector("#cont");

    let btn = document.querySelector('#dropdownBtn');
    let dropdowm = document.querySelector('#dropdown_box');
    let chev = document.querySelector('#arrow');

    let btn2 = document.querySelector('#dropdownBtn2');
    let dropdowm2 = document.querySelector('#dropdown_box2');
    let chev2 = document.querySelector('#arrow2');

    let btn3 = document.querySelector('#dropdownBtn3');
    let dropdowm3 = document.querySelector('#dropdown_box3');
    let chev3 = document.querySelector('#arrow3');

    let btn4 = document.querySelector('#dropdownBtn4');
    let dropdowm4 = document.querySelector('#dropdown_box4');
    let chev4 = document.querySelector('#arrow4');

    let btn5 = document.querySelector('#dropdownBtn5');
    let dropdowm5 = document.querySelector('#dropdown_box5');
    let chev5 = document.querySelector('#arrow5');

    btn.onclick = function(){
        dropdowm.classList.toggle('down');
        chev.classList.toggle('up');
    }

    btn2.onclick = function(){
        dropdowm2.classList.toggle('down');
        chev2.classList.toggle('up');
    }

    btn3.onclick = function(){
        dropdowm3.classList.toggle('down');
        chev3.classList.toggle('up');
    }

    btn4.onclick = function(){
        dropdowm4.classList.toggle('down');
        chev4.classList.toggle('up');
    }

    btn5.onclick = function(){
        dropdowm5.classList.toggle('down');
        chev5.classList.toggle('up');
    }


    // test onclick function for darklight switch
    btnSwitch.onclick = function(){ 
        btnContainer.classList.toggle('todark');
    }
}