//index.html에 선언된 스크립트

// let element = document.getElementById("element");


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // 애니메이션 시작
        } else {
            entry.target.classList.remove('active'); // 애니메이션 제거로 깜빡임 방지
        }
    });
}, {
    // threshold: .5
});

const sectorTitle = document.querySelectorAll('.sectorTitle');
const sec1Observer = document.querySelectorAll('.sec1_Observer');
const sec2Observer = document.querySelectorAll('.sec2_Observer');
const sec3Observer = document.querySelectorAll('.sec3_Observer');
const sec4Observer = document.querySelectorAll('.sec4_Observer');
const sec5Observer = document.querySelectorAll('.sec5_Observer');
const sec6Observer = document.querySelectorAll('.sec6_Observer');
const sec8Observer = document.querySelectorAll('.sec8_Observer');


observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);

observer.observe(sec1Observer[0]);
observer.observe(sec1Observer[1]);
observer.observe(sec1Observer[2]);

observer.observe(sec2Observer[0]);
observer.observe(sec2Observer[1]);
observer.observe(sec2Observer[2]);
observer.observe(sec2Observer[3]);
observer.observe(sec2Observer[4]);
observer.observe(sec2Observer[5]);
observer.observe(sec2Observer[6]);
observer.observe(sec2Observer[7]);
observer.observe(sec2Observer[8]);

observer.observe(sec3Observer[0]);
observer.observe(sec3Observer[1]);
observer.observe(sec3Observer[2]);
observer.observe(sec3Observer[3]);

observer.observe(sec4Observer[0]);
observer.observe(sec4Observer[1]);
observer.observe(sec4Observer[2]);
observer.observe(sec4Observer[3]);
observer.observe(sec4Observer[4]);
observer.observe(sec4Observer[5]);
observer.observe(sec4Observer[6]);
observer.observe(sec4Observer[7]);
observer.observe(sec4Observer[8]);

observer.observe(sec5Observer[0]);
observer.observe(sec5Observer[1]);
observer.observe(sec5Observer[2]);
observer.observe(sec5Observer[3]);
observer.observe(sec5Observer[4]);
observer.observe(sec5Observer[5]);
observer.observe(sec5Observer[6]);
observer.observe(sec5Observer[7]);
observer.observe(sec5Observer[8]);
observer.observe(sec5Observer[9]);
observer.observe(sec5Observer[10]);
observer.observe(sec5Observer[11]);

observer.observe(sec6Observer[0]);
observer.observe(sec6Observer[1]);
observer.observe(sec6Observer[2]);
observer.observe(sec6Observer[3]);
observer.observe(sec6Observer[4]);
observer.observe(sec6Observer[5]);
observer.observe(sec6Observer[6]);

observer.observe(sec8Observer[0]);








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