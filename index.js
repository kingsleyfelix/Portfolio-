const menulinkEl = document.querySelectorAll(".menu-link")
const check = document.querySelector("#check")
const checkbtn = document.querySelector(".checkbtn")
menulinkEl.forEach((link)=>{
    link.addEventListener("click", ()=>{
        checkbtn.click()
   })
})



// Works Swiper

const swiper = new Swiper('.swiper',{
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})



// Animations

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        const animation = entry.target.querySelector(".animation")
        const animation2 = entry.target.querySelector(".animation2")
        const animation3 = entry.target.querySelector(".animation3")

        if(entry.isIntersecting){
            animation.classList.add("animate");
            animation2.classList.add("animate");
            animation3.classList.add("animate2");
        }else{
            
            animation.classList.remove("animate");
            animation2.classList.remove("animate");
            animation3.classList.remove("animate2");
        }
    })
})


observer.observe(document.querySelector('.top-nav'));
observer.observe(document.querySelector('.works-section'));
observer.observe(document.querySelector('.skills-section'));
observer.observe(document.querySelector('.wrapper3'));
observer.observe(document.querySelector('.cont2'));
observer.observe(document.querySelector('.cont3-container'));
observer.observe(document.querySelector('.wrapper2'));
observer.observe(document.querySelector('.menu2'));
observer.observe(document.querySelector('.info'));
observer.observe(document.querySelector('.wrapper'));
observer.observe(document.querySelector('.cont1'));
observer.observe(document.querySelector('.contact'));
observer.observe(document.querySelector('.works-section'));
observer.observe(document.querySelector('.skills-section'));