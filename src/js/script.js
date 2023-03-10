    function makeActiveDot(){
        dots.forEach(dot=>dot.style.opacity='.5');
        dots[slideIndex-1].style.opacity='1';
    }
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    const slides = document.querySelectorAll('.destinations__slide'),
          slider=document.querySelector('.destinations__slider'),
          prev = document.querySelector('.destinations__slider-prev'),
          next =document.querySelector('.destinations__slider-next'),
          slidesWrapper = document.querySelector('.destinations__slider-wrapper'),
          slidesField = document.querySelector('.destinations__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width=100*slides.length + "%";
    slidesField.style.display='flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow='hidden';
    
    slides.forEach(slide=>{
        slide.style.width=width;
    });
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText=`
    position: absolute;
    right: 0;
    bottom: -5px;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicators);

    for(let i =0;i<slides.length;i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to',i+1);
        dot.style.cssText=`
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 15px;
            height: 15px;
            border-radius:100%;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #F2785C;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if(i===0){
            dot.style.opacity=1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click',()=>{
        if(offset==deleteNotDigits(width)*(slides.length-1)){ 
            offset=0;
        }else{
            offset+=deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        if(slideIndex===slides.length){
            slideIndex=1;
        }else{
            slideIndex++;
        }
        makeActiveDot();
    });

    prev.addEventListener('click',()=>{
        if(offset==0){ 
            offset=deleteNotDigits(width)*(slides.length-1);
        }else{
            offset-=deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        if(slideIndex===1){
            slideIndex=slides.length;
        }else{
            slideIndex--;
        }
        makeActiveDot();
    });
    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex=slideTo;
            offset=+deleteNotDigits(width)*(slideTo-1);
            slidesField.style.transform = `translateX(-${offset}px)`;


            makeActiveDot();
        });
    });
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.nav'),
        menuItem = document.querySelectorAll('.nav__link'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('nav_active');
            })
        })
    })