function burgerMenu() {
    const burger = document.querySelector('#burger');
    const burgerTop = document.querySelector('#burgerTop');
    const burgerMid = document.querySelector('#burgerMid');
    const burgerBot = document.querySelector('#burgerBot');
    const navMobile =document.querySelector('#navMobile');
    const body = document.querySelector('#body');


    let burgerVariable = 0

    burger.addEventListener("click", ()=>{
        if(burgerVariable === 0){
            burgerVariable = 1
        } else if(burgerVariable === 1){
            burgerVariable = 0
        }

        if(burgerVariable === 1){
            burgerTop.style.transform = 'rotate(45deg)';
            burgerTop.style.top= '50%';
    
            burgerMid.style.opacity = '0'
    
            burgerBot.style.transform = 'rotate(-45deg)';
            burgerBot.style.top= '50%';

            navMobile.style.display = 'flex'
            body.style.overflow = 'hidden'

        } else if(burgerVariable === 0){
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';

            burgerMid.style.opacity = '1'

            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';

            navMobile.style.display = 'none'
            body.style.overflow = 'visible'
        }
    })

    window.addEventListener('resize', ()=>{
        if ( window.innerWidth > 768){
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';
    
            burgerMid.style.opacity = '1'
    
            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';

            navMobile.style.display = 'none'
            body.style.overflow = 'visible'

        }
    })

}

burgerMenu()

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 80,
    slidesPerView: 1,
    loop: true,


    autoplay: {
        delay: 2000,
    },
    breakpoints:{
        1170:{
            slidesPerView: 3,
        },
        850:{
            slidesPerView: 2,
            spaceBetween: 50,
        },
        450:{
            slidesPerView: 1,
            spaceBetween: 200,
        }


    }


});

const swiper2 = new Swiper('.swiper2', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})