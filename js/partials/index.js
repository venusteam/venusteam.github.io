(function() {
  var wrapper = $('#product-wrapper');
  var menus = wrapper.find('.product-menu-li');
  var content = wrapper.find('.product-list');

  menus.on('click mouseover', function() {
    var index = $(this).index();
    menus.removeClass('product-menu-li-active')
          .eq(index).addClass('product-menu-li-active');
    content.removeClass('product-list-active')
            .eq(index)
            .addClass('product-list-active')
  })
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 4000,//5秒切换一次
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})()
