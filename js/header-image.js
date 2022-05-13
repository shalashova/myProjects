let plane = document.querySelector('.header__image_wrap');
let i = 0,
    counts = 70;
let red = 245;
let green = 232;

function f() {
    let circle = document.createElement('div');
    circle.classList.add("circle");
    circle.style = `background-color:rgb(${red--}, ${green--}, 255)`;
    plane.appendChild(circle);
    i++;
    if (i < counts) {
        setTimeout(f, 70);
    } else {
        document.querySelector('.header__name ').style = 'border-bottom: 6px solid #AFA2FF; transition: border-bottom 0.7s ease 0s;';
    }
};
f();