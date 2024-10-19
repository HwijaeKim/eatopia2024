//index.html에 선언된 스크립트

// let element = document.getElementById("element");


let observer = new IntersectionObserver((event) => {
    event.forEach((ani) => {
        if(ani.isIntersecting) {
            ani.target.classList.add('active');
        }
        else {
            ani.target.classList.remove('active');
        }
    })
});

let sectorTitle = document.querySelectorAll('.sectorTitle');
let sec1Flexbox = document.querySelectorAll('.sec1_Observer');


observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);

observer.observe(sec1Flexbox[0]);
observer.observe(sec1Flexbox[1]);
observer.observe(sec1Flexbox[2]);




// SECTOR 01 Overview 타이핑 구현
new TypeIt(".flex1", {
    lifeLike: false,
    speed: 40,
    strings: '일부 가정에게 치명적 스트레스가 되는 <br> 아이와의 식사전쟁,'
}).go();