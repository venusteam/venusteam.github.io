(function() {
  var wrapper = $('#btn-wrapper') ;
  var oBtn = $('#btn-console');
  var content = $('#console-content');
  var contentHeight = wrapper.find('.console-content-wrapper').eq(0).innerHeight();
  var linkTag = content.find('a.link');
  oBtn.hover(function(e) {
    e.preventDefault();
    content.css({
      "opacity": "1",
      "height": contentHeight
    })
  }, function(e) {
    content.css({
      "opacity": "0",
      "height": 0
    })
  })
  // content.on('mouseover', function(e) {
  //   e.stopPropagation();
  //   content.css({
  //     "opacity": "1",
  //     "height": contentHeight
  //   })
  // })
  // content.on('mouseleave', function(e) {
  //   e.stopPropagation();
  //   content.css({
  //     "opacity": "0",
  //     "height": 0
  //   })
  // })
  linkTag.hover(function(e) {
    e.preventDefault();
    content.css({
      "overflow": "visible"
    })
  }, function(e) {
    content.css({
      "overflow": "hidden"
    })
  })
})()
