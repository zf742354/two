$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        effect : 'coverflow',
        slidesPerView: 1.5,
        centeredSlides: true,
        initialSlide :1,


        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination'
        }

    })
});