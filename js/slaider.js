let offset = 0;
const sliderLine = document.querySelector('.slider-line')
const slider = document.querySelector('.slider');

slider.addEventListener('click',function(){
    offset += 1222;
    if (offset >= sliderLine.offsetWidth){
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})