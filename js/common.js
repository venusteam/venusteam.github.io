"use strict";

$(document).ready(function() {
  $('.book').click(function(){
    $(this).toggleClass('focus');
  })
  $('.nav-item.has-children').click(function() {
    $(this).children('.toggle').toggleClass('toggle-active');
    var currentDepth = parseInt($(this).attr('class').match(/depth(\d{1})/)[1]);
    var next = $(this).next('.nav-item');
    while(next[0] && !next.hasClass('depth' + currentDepth)){
      next.toggleClass('hidden');
      next = next.next('.nav-item');
    }
  })

  $('.toggle').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('toggle-active');
    var currentDepth = parseInt($(this).parent().attr('class').match(/depth(\d{1})/)[1]);
    var next = $(this).parent().next('.nav-item');
    while(next[0] && !next.hasClass('depth' + currentDepth)){
      next.toggleClass('hidden');
      next = next.next('.nav-item');
    }
  })
  var currentMenu = $('.catalog .current');
  var currentRootPath = currentMenu.attr('data-rootPath');
  $('[data-rootPath="'+currentRootPath+'"]').removeClass('hidden');
  $('[data-currentPath="'+currentRootPath+'"]').children('.toggle').toggleClass('toggle-active');


  $('a').each(function(i, a){
    var $a = $(a);
    if ($a.attr('href') && $a.attr('href').match(/^#.*/) && $a.hasClass('anchor')){
      $a.attr('href', location.origin + location.pathname + $a.attr('href'));
    }
  });

  $('.navbar').click(function(){
    $('.nav-section').toggleClass('active');
  })

  $('#title-liebiao-icon').on('click', function(e) {
    e.stopPropagation();
    var content = $(this).siblings('.docs-map').eq(0);
    content.toggleClass('docs-map-active');
    $(document).one('click', function() {
      content.removeClass('docs-map-active');
    })
  })

});
