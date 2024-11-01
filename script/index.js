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
const sec1Observer = document.querySelectorAll('.sec1_Observer');
// const sec2Observer = document.querySelectorAll('.sec2_Observer');
const sec3Observer = document.querySelectorAll('.sec3_Observer');
const sec4Observer = document.querySelectorAll('.sec4_Observer');




observer.observe(sectorTitle[0]);
observer.observe(sectorTitle[1]);
observer.observe(sectorTitle[2]);
observer.observe(sectorTitle[3]);
observer.observe(sectorTitle[4]);
observer.observe(sectorTitle[5]);
observer.observe(sectorTitle[6]);
observer.observe(sectorTitle[7]);

observer.observe(sec1Observer[0]);
observer.observe(sec1Observer[1]);
observer.observe(sec1Observer[2]);

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
// observer.observe(sec4Observer[4]);













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



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            new TypeIt(".search_bar p", {
                strings: "이제는 현실이 된 착용형 디바이스의 시대",
                // ... other options
              }).go();

                    // 관찰 해제
              observer.unobserve(entry.target);
        } else {
            entry.target.innerHTML = "";
        }
    });
}, {
    threshold: 1
});

observer2.observe(document.querySelector('.search_bar p'));




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