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
let sec1Flexbox = document.querySelectorAll('.Observer');
let bgFlexbox = document.querySelectorAll('.bg_flex');
let sector1Background = document.querySelector('.sector1_background');
let sector1Background2 = document.querySelector('.sector1_background2');


observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);
//
// observer.observe(sec1Flexbox[0]);
// observer.observe(sec1Flexbox[1]);
// observer.observe(sec1Flexbox[2]);
// observer.observe(bgFlexbox[0]);
// observer.observe(bgFlexbox[2]);
//
// observer.observe(sector1Background);
// observer.observe(sector1Background2);





// SECTOR 01 Overview 타이핑 구현
// new TypeIt(".flex1", {
//     lifeLike: false,
//     speed: 40,
//     strings: '미취학 아동 시절 <br> 올바른 식습관 형성은 <br> 매우 중요하다는 사실, 알고 계셨나요?'
// }).go();



window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    const header = document.querySelector('header');
    const navLogo = document.getElementById('nav_logo_white');
    const navMenu = document.querySelectorAll('.nav_menu button');
    console.log(scrollTop); //Dev Only

    if(scrollTop > 10) {
        header.classList.add('active');
        navLogo.innerHTML = '<a href="./index.html\"><img src="./sources/nav_logo.png" alt="nav_logo" height="35"></a>';
        navMenu.forEach((item) => {
            item.style.color = 'rgba(0, 0, 0, .7)';
        })
    }
    else if (scrollTop < 10) {
        header.classList.remove('active');
        navLogo.innerHTML = '<a href="./index.html\"><img src="./sources/nav_logo_white.png" alt="nav_logo" height="35"></a>';
        navMenu.forEach((item) => {
            item.style.color = 'rgba(255, 255, 255, .85)';
        })
    };

})

