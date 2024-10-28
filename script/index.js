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
let sec1Observer = document.querySelectorAll('.sec1_Observer');
let sec2Observer = document.querySelectorAll('.sec2_Observer');


observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);

observer.observe(sec1Observer[0]);
observer.observe(sec1Observer[1]);

observer.observe(sec2Observer[0]);
observer.observe(sec2Observer[1]);
observer.observe(sec2Observer[2]);
observer.observe(sec2Observer[3]);
observer.observe(sec2Observer[4]);
observer.observe(sec2Observer[5]);
observer.observe(sec2Observer[6]);
observer.observe(sec2Observer[7]);
observer.observe(sec2Observer[8]);








// SECTOR 01 Overview 타이핑 구현
document.addEventListener('DOMContentLoaded', () => {
    let text = "일부 가정에게 치명적 스트레스가 되는<br>아이와의 식사전쟁,";
    let typingContainer = document.querySelector('.flex1 p');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 35);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});



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

    const mainImg = document.querySelector('.vidControl');
    if(scrollTop > 1800) {
        mainImg.style.display = 'none';
    }
    else if(scrollTop < 1100) {
        mainImg.style.display = 'block';
    }

})





// SECTOR 02 카드 구현
VanillaTilt.init(document.querySelectorAll('.sec2Flex'), {
    max: 6,
    speed: 500,
    scale: 1.05,
    transition: true
    // glare: true
})
