const sliders = document.querySelectorAll('.slider__list');
const nav__arrows = document.querySelectorAll('.slider__arrow');

//navigation via arrows
nav__arrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        let direction = arrow.getAttribute('data-direction')
        sliders.forEach(slider => {
            if(arrow.getAttribute('data-slider') === slider.getAttribute('data-slider')){
                let distance = slider.children[0].clientWidth + parseInt(window.getComputedStyle(slider).gap.replace('px', ""))
                if(direction == "prev"){
                    slider.scrollLeft = slider.scrollLeft - distance
                } else {
                    slider.scrollLeft = slider.scrollLeft + distance
                }
            }
        })
    })
})

//nav by scroll
//thanks to https://codepen.io/kellyex/pen/KKwwdYg?editors=0010
let moving = false;
let startX, moveX, scrollX;

sliders.forEach(slider => {
    slider.addEventListener('mousedown', e => {
        moving = true;
        startX = e.pageX - slider.offsetLeft;
        slider.style.cursor = "grab";
    });

    slider.addEventListener('mouseup', e => {
        moving = false;
        slider.style.cursor = "initial";
    })

    slider.addEventListener('mouseleave', e => {
        moving = false;
        slider.style.cursor = "initial";
    })

    slider.addEventListener('mousemove', e => {
        if(moving){
            e.preventDefault();
            moveX = e.pageX - slider.offsetLeft;
            scrollX = moveX - startX;
            slider.scrollLeft =  slider.scrollLeft - scrollX;
        }
    })
})