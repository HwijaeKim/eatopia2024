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

// 여러 클래스들을 한 번에 모아서 처리
const classesToObserve = [
    '.sectorTitle',
    '.sectorTitleYellow',
    '.sec1_Observer',
    '.sec2_Observer',
    '.sec3_Observer',
    '.sec4_Observer',
    '.sec5_Observer',
    '.sec6_Observer',
    '.sec7_Observer',
    '.sec8_Observer',
    '.sec9_Observer',
    '.sec10_Observer',
    '.sec11_Observer',
    '.sec12_Observer',
    '.sec13_Observer',
    '.sec14_Observer',
    '.sec15_Observer'
];

classesToObserve.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => observer.observe(element));
});





document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 링크 이동을 막습니다.

        const targetId = this.getAttribute('href'); // href 속성에서 ID를 가져옵니다.
        const targetSection = document.querySelector(targetId); // 해당 섹션을 선택합니다.

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // 부드럽게 스크롤합니다.
                block: 'start' // 섹션의 상단으로 스크롤합니다.
            });
        }
    });
});








window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    const header = document.querySelector('header');
    const navLogo = document.getElementById('nav_logo_white');
    const navMenu = document.querySelectorAll('.nav_menu a');
    console.log(scrollTop); //Dev Only

    // if(scrollTop > 10) {
    //     header.classList.add('active');
    //     // navLogo.innerHTML = '<a href="./index.html\"><img src="./sources/nav_logo2.svg" alt="nav_logo" height="30"></a>';
    //     navMenu.forEach((item) => {
    //         // item.style.color = 'rgba(0, 0, 0, .7)';
    //     })
    // }
    // else if (scrollTop < 10) {
    //     header.classList.remove('active');
    //     // navLogo.innerHTML = '<a href="./index.html\"><img src="./sources/nav_logo2_white.svg" alt="nav_logo" height="30"></a>';
    //     navMenu.forEach((item) => {
    //         // item.style.color = 'rgba(255, 255, 255, .85)';
    //     })
    // };

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



const slider = document.getElementById('sector7');
let isMouseDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    scrollLeft = slider.scrollLeft;
    startX = e.pageX - slider.offsetLeft;
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
});