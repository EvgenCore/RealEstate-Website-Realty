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