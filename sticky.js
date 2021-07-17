function headerSize() {
  var $headerHeight = $('div#shopify-section-header').outerHeight();
  $('#PageContainer').css('padding-top', $headerHeight);
}

$(window).on("load", headerSize);
$(window).on("resize", $.debounce(500, headerSize));

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  if (scroll >= 1) {
    $('.site-header').css('top', '0');
  } else {
    $('.site-header').css('top', 'initial');
  }
});