
const hamburger = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      menuLinks = document.querySelectorAll('.menu__link'),
      anchors = document.querySelectorAll('a[href*="#"]');


function menuInteraction(trigger, status){
        trigger.addEventListener('click', () => {
            if(status === 'active'){
                menu.classList.add('menu_active');
            }else{
                menu.classList.remove('menu_active');
            }
        });

}


menuInteraction(hamburger, 'active');
menuInteraction(closeBtn);

menuLinks.forEach(link => {
    menuInteraction(link);
});


anchors.forEach((anchor)=>{
    anchor.addEventListener('click', (e)=>{
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    });
});