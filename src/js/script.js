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
    });
    if (document.querySelector(".preview__play")) {
        const playVideo= document.querySelector(".preview__play"),
              preview =document.querySelector(".preview__img"),
              videoText=document.querySelector(".video__text"),
              vidBG =document.querySelector(".video__bg"),
              videoWrap=document.querySelector(".video__player"),
              video =document.querySelector(".video__wrap iframe");
    
        playVideo.addEventListener ("click",() => {
            playVideo.style.display= "none";
            preview.style.display= "none";
            videoText.style.display= "none";
            video.style.display= "block";
            video.style.marginTop= "-50rem";
            video.style.position= "relative";
            video.style.zIndex= "100";
            vidBG.style.zIndex= "0";
            videoWrap.style.minHeight= "50rem";
        });
    }

    const swiperReviews = new Swiper('.reviews__slider', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView:1
            },
            768: {
                slidesPerView:3
            }
        },
        navigation: {
            nextEl: '.reviews__arrow-next',
            prevEl: '.reviews__arrow-prev',
          }, 
        pagination: {
            el:'.reviews__pagination',
            clickable: true,
        }     
    });

    const swiperExample = new Swiper('.example__slider', {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView:1
            },
            768: {
                slidesPerView:4
            },
            578: {
                slidesPerView:2
            }
        },
        navigation: {
            nextEl: '.example__arrow-next',
            prevEl: '.example__arrow-prev',
          }, 
         
    });
    if (document.querySelectorAll(".question__item")) {
        let accardion=document.querySelector(".question__accordion"),
            tab=document.querySelectorAll(".question__item"),
            answer= document.querySelectorAll(".question__answer");
        
        accardion.addEventListener("click", (e) => {   
            const target= e.target.closest(".question__item"); 
            if(target) {
                tab.forEach((item,i) => {
                    if (item===target) {
                        answer[i].classList.add("active");
                        tab[i].classList.add('active-accardion');
                    } else {
                        answer[i].classList.remove("active");
                        tab[i].classList.remove('active-accardion')
                    }
                })
            }
        })
    }
    if (document.querySelector(".button-outline")) {
        const buttonOpenModal = document.querySelectorAll(".button-outline"),
              modalOverlay = document.querySelector(".modal__overlay"),
              body = document.querySelector("body"), 
              modalThanks = document.querySelector(".modal__thanks"),
              modalCheck = document.querySelector(".modal__check"), 
              modalCloseThanks = document.querySelector("#close-thanks"), 
              modalCloseCheck = document.querySelector("#close-check"), 
              modalThanksOpen = document.querySelector(".modal__form-button");
    
                buttonOpenModal.forEach (item => {
                    item.addEventListener("click", () => {
                        modalOverlay.classList.add("modal__active");
                        modalCheck.classList.add("modal__active");
                        body.classList.add("noscroll");
                    });
                });
            modalCloseCheck.addEventListener('click',() => {
                modalOverlay.classList.remove("modal__active");
                modalCheck.classList.remove("modal__active");
                body.classList.remove("noscroll");
            });
            
            modalThanksOpen.addEventListener("click", () => {
                modalOverlay.classList.add("modal__active");
                modalCheck.classList.remove("modal__active");
                modalThanks.classList.add("modal__active");
            });

            modalCloseThanks.addEventListener("click", () => {
                modalOverlay.classList.remove("modal__active");
                body.classList.remove("modal__active");
                modalThanks.classList.remove("modal__active");
            })

              

            // modalOverlay.addEventListener("click", () => {
                
            //     modalThanks.classList.remove('modal__active');
            //     modalCheck.classList.remove("modal__active");
            //     modalOverlay.classList.remove("modal__active"); 
            // })

            

            window.addEventListener('keyup', (e) => {
                if (e.key === 'Escape') {
                    modalThanks.classList.remove('modal__active');
                    modalCheck.classList.remove("modal__active");
                    modalOverlay.classList.remove("modal__active");
                }
                
            });
    }    
    
             



})

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        modalThanks.classList.remove('modal__active');
        modalCheck.classList.remove("modal__active");
        modalOverlay.classList.remove("modal__active");
    }
    
});