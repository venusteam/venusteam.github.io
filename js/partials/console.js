(function() {
  var tabs = $('#console-nav-tabs').find('.console-nav-tab');
  var contents = $('#console-nav-contents').find('.console-nav-content');
  tabs.on("click mouseover" ,function() {
    var index = $(this).index();
    tabs.removeClass('console-nav-tab-active')
        .eq(index)
        .addClass('console-nav-tab-active');
    contents.removeClass('console-nav-content-active')
            .eq(index)
            .addClass('console-nav-content-active');
  })
})()
