(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  console.log('----mySwiper---', mySwiper);
})()

