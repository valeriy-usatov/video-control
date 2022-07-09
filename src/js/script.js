window.addEventListener("DOMContentLoaded",() => {

    let arrowTel = document.querySelector(".header__arrow"),
        arrowTelephone =document.querySelector(".header__arrow-one"),
        arrowtelephoneHidden =document.querySelector(".header__arrow-two"),
        telephoneHeader =document.querySelector(".header__number-two");

    arrowTel.addEventListener("click", (e) => {
        const target =e.target.closest(".header__arrow-one");
        const targetTwo =e.target.closest(".header__arrow-two");

        if (target) {
            telephoneHeader.style.display= "block";
            arrowTelephone.style.display= "none";
            arrowtelephoneHidden.style.display= "block";
        }
        if (targetTwo) {
            telephoneHeader.style.display= "none";
            arrowTelephone.style.display= "block";
            arrowtelephoneHidden.style.display= "none";
        }
    });   
    const swiperHero = new Swiper('.hero__slider', {
        // Optional parameters
        
        loop: true,
        spaceBetween:30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
      
        // If we need pagination
        pagination: {
          el: '.hero__pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.hero__arrow-next',
          prevEl: '.hero__arrow-prev',
        },
      
        // And if we need scrollbar
       
    });
    const swiperBrands = new Swiper('.brands__slider', {
        // Optional parameters
        
        loop: true,
        spaceBetween:30,
        breakpoints: {
            320: {
                slidesPerView:2
            },
            768: {
                slidesPerView:4
            }
        },
        navigation: {
          nextEl: '.brands__arrow-next',
          prevEl: '.brands__arrow-prev',
        },
      
        // And if we need scrollbar
       
    });
    
})