
window.onbeforeunload = function () {  //принудительный скрол
    window.scrollTo(0,0);
  };

var position = 0; //начальная позиция
const slidesShow = 1; //кол-во элем в блоке
const slidesScroll = 1; //кол-во элем скрол(ширина)

//находим элементы
const container = document.querySelector('.slider-case');
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item'); //все элементы
const itemsCount = items.length; //кол-во элементов

const btnPrev = document.querySelectorAll('.btn-1998');
const btnNext = document.querySelectorAll('.btn-2016');

const itemWidth = container.clientWidth / slidesShow; //ширина каждого элем
const movePosition =  slidesScroll * itemWidth; 
console.log(items.length);

items.forEach (function(item) {  //определяем ширину блока
    item.style.minWidth = `${itemWidth}px`;
});


btnNext.forEach(function(item){
    item.addEventListener('click', function(){
        const right = itemsCount - (Math.abs(position) + slidesShow * itemWidth) / itemWidth;
        position -= right <= slidesScroll ? movePosition : right * itemWidth;
        // position -= movePosition; //вправо 
        setPosition();
        checkBtn();
    }); 
});


btnPrev.forEach(function(item){
    item.addEventListener('click', function() {
        const left = Math.abs(position) / itemWidth;
        position += left >= slidesScroll ? movePosition : left * itemWidth;
        // position -= movePosition; //влево
        setPosition();
        checkBtn();
    });
});


const setPosition = function() {
    slider.style.transform = `translate(${position}px)`;
};
setPosition();

const checkBtn = function() { //проверка
    btnNext.disabled = position <= - (itemsCount - slidesShow) * itemWidth;
    btnPrev.disabled = position === 0;
};
checkBtn();



window.addEventListener('scroll', function() {  // изменение цвета по координате
    const one = document.querySelectorAll('.oneDot');
    const oneimg = document.querySelector('.one-img');
    const two = document.querySelectorAll('.twoDot');
    const three = document.querySelectorAll('.threeDot');
    let rect = oneimg.getBoundingClientRect(); // возращаем размеры и позиции
    console.log(rect);
    if (rect.top <= 0 && rect.top >= -300) { //используем top (тк Y не работает в сафари)
        one[0].style.backgroundColor = 'orange';
    } else if (rect.top <= -390 && rect.top > -1100){
        two[0].style.backgroundColor = 'orange';
    } else if (rect.top <= -1200) {
        three[0].style.backgroundColor = 'orange';
    } else {
        one[0].style.backgroundColor = 'white';
        two[0].style.backgroundColor = 'white';
        three[0].style.backgroundColor = 'white';
    }
});


// window.onscroll = function





