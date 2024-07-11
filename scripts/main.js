function burgerMenu() {
    const burger = document.querySelector('#burger');
    const burgerTop = document.querySelector('#burgerTop');
    const burgerMid = document.querySelector('#burgerMid');
    const burgerBot = document.querySelector('#burgerBot');
    const navMobile =document.querySelector('#navMobile');
    const body = document.querySelector('#body');

    /* mobile nav bar links */
    const burgerNavHome = document.querySelector('#burgerNavHome');
    const burgerNavAbout = document.querySelector('#burgerNavAbout');
    const burgerNavProject = document.querySelector('#burgerNavProject');
    const burgerNavContact = document.querySelector('#burgerNavContact');


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
        
        /* burger menu nav - click event that redirect to HEADER section */
        burgerNavHome.addEventListener("click", ()=>{
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';

            burgerMid.style.opacity = '1'

            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';

            navMobile.style.display = 'none'
            body.style.overflow = 'visible'
        })

        /* burger menu nav - click event that redirect to ABOUT section */
        burgerNavAbout.addEventListener("click", ()=>{
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';

            burgerMid.style.opacity = '1'

            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';

            navMobile.style.display = 'none'
            body.style.overflow = 'visible'
        })

        /* burger menu nav - click event that redirect to PROJECTS section */
        burgerNavProject.addEventListener("click", ()=>{
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';

            burgerMid.style.opacity = '1'

            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';
            
            navMobile.style.display = 'none'
            body.style.overflow = 'visible'
        })

        /* burger menu nav - click event that redirect to CONTACT section */
        burgerNavContact.addEventListener("click", ()=>{
            burgerTop.style.transform = 'none';
            burgerTop.style.top= '0';

            burgerMid.style.opacity = '1'

            burgerBot.style.transform = 'none';
            burgerBot.style.top= 'unset';
            
            navMobile.style.display = 'none'
            body.style.overflow = 'visible'
        })

        
    })


    /* event that turns of burger menu when your window is more than 768px */
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


/* PROJECTS SWIPER */
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

/* FEEDBACK SWIPER */
const swiper2 = new Swiper('.swiper2', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 200,
    autoplay: {
        delay: 3000,
    },

})



/* CONTACT SECTION FORM - PHONE INPUT RULES */
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function() {
        let input = phoneInput.value.replace(/\D/g, '');
        let formattedInput = '';

        if (input.length > 0) {
            formattedInput += '(' + input.substring(0, 3);
        }
        if (input.length >= 4) {
            formattedInput += ') ' + input.substring(3, 6);
        }
        if (input.length >= 7) {
            formattedInput += '-' + input.substring(6, 10);
        }

        phoneInput.value = formattedInput;
    });
});

/* CONTACT SECTION FORM - EMAIL INPUT RULES */
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('blur', function() {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity("Please enter a valid email address.");
        } else {
            emailInput.setCustomValidity("");
        }
    });
}); 


/* Animate On Scroll Library */
AOS.init({
    once: true,
});