$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        effect : 'coverflow',
        slidesPerView: 1.5,
        centeredSlides: true,
        initialSlide :1,


        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        }

    })
});