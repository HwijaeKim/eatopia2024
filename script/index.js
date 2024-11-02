//index.html에 선언된 스크립트


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
const sectorTitleY = document.querySelectorAll('.sectorTitleYellow');
const sec1Observer = document.querySelectorAll('.sec1_Observer');
const sec2Observer = document.querySelectorAll('.sec2_Observer');
const sec3Observer = document.querySelectorAll('.sec3_Observer');
const sec4Observer = document.querySelectorAll('.sec4_Observer');
const sec5Observer = document.querySelectorAll('.sec5_Observer');
const sec6Observer = document.querySelectorAll('.sec6_Observer');




observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);
observer.observe(sectorTitle[2]);
observer.observe(sectorTitle[3]);
observer.observe(sectorTitle[4]);
observer.observe(sectorTitle[5]);
observer.observe(sectorTitle[6]);
observer.observe(sectorTitle[7]);
observer.observe(sectorTitle[8]);

observer.observe(sectorTitleY[0]);

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
observer.observe(sec2Observer[9]);


observer.observe(sec3Observer[0]);
observer.observe(sec3Observer[1]);
observer.observe(sec3Observer[2]);
observer.observe(sec3Observer[3]);
observer.observe(sec3Observer[4]);
observer.observe(sec3Observer[5]);
observer.observe(sec3Observer[6]);
observer.observe(sec3Observer[7]);
observer.observe(sec3Observer[8]);
observer.observe(sec3Observer[9]);
observer.observe(sec3Observer[10]);
observer.observe(sec3Observer[11]);

observer.observe(sec4Observer[0]);
observer.observe(sec4Observer[1]);
observer.observe(sec4Observer[2]);
observer.observe(sec4Observer[3]);
observer.observe(sec4Observer[4]);
observer.observe(sec4Observer[5]);
observer.observe(sec4Observer[6]);


observer.observe(sec5Observer[0]);
observer.observe(sec5Observer[1]);
observer.observe(sec5Observer[2]);
observer.observe(sec5Observer[3]);

observer.observe(sec6Observer[0]);
observer.observe(sec6Observer[1]);
observer.observe(sec6Observer[2]);
observer.observe(sec6Observer[3]);
observer.observe(sec6Observer[4]);
observer.observe(sec6Observer[5]);
observer.observe(sec6Observer[6]);
observer.observe(sec6Observer[7]);
observer.observe(sec6Observer[8]);
observer.observe(sec6Observer[9]);
observer.observe(sec6Observer[10]);
observer.observe(sec6Observer[11]);
observer.observe(sec6Observer[12]);
observer.observe(sec6Observer[13]);
observer.observe(sec6Observer[14]);
observer.observe(sec6Observer[15]);
observer.observe(sec6Observer[16]);
observer.observe(sec6Observer[17]);














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



new TypeIt("#search_bar p", {
    strings: "이제는 현실이 된 착용형 디바이스의 시대",
    // ... other options
    cursor: false,
    waitUntilVisible: true
  }).go();







// SECTOR 02 카드 구현
VanillaTilt.init(document.querySelectorAll('.sec2Flex'), {
    max: 6,
    speed: 500,
    scale: 1.05,
    transition: true
    // glare: true
})

VanillaTilt.init(document.querySelectorAll('.sec4Flex.one'), {
    max: 6,
    speed: 500,
    scale: 1.05,
    transition: true
    // glare: true
})






// 캐릭터 슬라이드
const charSlide = document.querySelector('.scroll-container');
let slideBtn = document.querySelectorAll('.btn_slide button');
// let previousBtn = document.querySelector('.previousBtn');

slideBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if(event.target.classList.contains('next')) {
            charSlide.classList.add('active');
        }
        else if(event.target.classList.contains('previous')) {
            charSlide.classList.remove('active');
        }
    })
})