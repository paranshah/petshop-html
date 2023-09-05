// banner slider area start

$('.banner-silider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  prevArrow: '.next-arrow',
  nextArrow: '.prev-arrow',
});

//   banner slider area end

// category slider area start

$('.cate-slider-inner').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '.Cnext-arrow',
  nextArrow: '.Cprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

//   category slider area end

// selling slider area start

$('.selling-item-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.Snext-arrow',
  nextArrow: '.Sprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        slidesToShow: 1,
        centerPadding: '0',
      }
    },
  ]
});

//   selling slider area end

// proudct slider area start

$('.pitmes-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.Pfnext-arrow',
  nextArrow: '.Pfprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        slidesToShow: 1,
        centerPadding: '0',
      }
    },
  ]
});

//   proudct slider area end

// blog slider area start

$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.bnext-arrow',
  nextArrow: '.bprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        slidesToShow: 1,
        centerPadding: '0',
      }
    },
  ]
});

//   blog slider area end
// back to top area start
$('.bttb').click(function () {
  $('html, body').animate({
    scrollTop: 0,
  }, 500);
});

$(window).scroll(function () {
  var ccc = $(this).scrollTop();

  if (ccc > 200) {
    $('.bttb').fadeIn();
  } else {
    $('.bttb').fadeOut();

  }
});

//=============== Shop page area start==================

  $('#shoplist').on('click', function(){
    $('.shop-item').css({'display':'none'});
  });

  $('#rmvshoplist').on('click', function(){
    $('.shop-item').css({'display':'block'});
  });
  
  $('#shoplist').on('click', function(){
    $('.shop-item-wrapper').css({'display':'block'});
  });


  $('#rmvshoplist').on('click', function(){
    $('.shop-item-wrapper').css({'display':'none'});
  });

//=============== Shop page area end==================

//=============== features page area start==================

  $('#featureslist').on('click', function(){
    $('.features-item').css({'display':'none'});
  });

  $('#rmvfeatureslist').on('click', function(){
    $('.features-item').css({'display':'block'});
  });
  
  $('#featureslist').on('click', function(){
    $('.features-item-wrapper').css({'display':'block'});
  });


  $('#rmvfeatureslist').on('click', function(){
    $('.shop-item-wrapper').css({'display':'none'});
  });

//=============== Shop page area end==================

//=============== partner page area end==================

// partner slider area start

$('.brand-silder').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.fbnext-arrow',
  nextArrow: '.fbprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

//   partner slider area end

// artcicle slider area start

$('.article-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '.artnext-arrow',
  nextArrow: '.artprev-arrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

//   artcicle slider area end

//=============== partner page area end==================



// ================ Register customer area start =====================
$('.reg-cust-show').on('click', function(){
  $('.reg-cust-modal').css({'top': '0'})
});

$('.reg-cust-hide').on('click', function(){
  $('.reg-cust-modal').css({'top': '-1000%'})
});

$('.reg-cust-show').on('click', function(){
  $('.log-cust-inner').css({'display': 'none'})
});

$('.log-cust-show').on('click', function(){
  $('.log-cust-inner').css({'display': 'block'})
});

$('.log-cust-show').on('click', function(){
  $('.reg-cust-inner').css({'display': 'none'})
});

$('.log-cust-hide').on('click', function(){
  $('.log-cust-inner').css({'display': 'none'})
});

$('.log-cust-hide').on('click', function(){
  $('.reg-cust-inner').css({'display': 'block'})
});

$('.log-frm-show').on('click', function(){
  $('.reg-cust-modal').css({'top': '0'})
});

$('.log-frm-show').on('click', function(){
  $('.reg-cust-inner').css({'display': 'none'})
});

$('.login-cust-hide').on('click', function(){
  $('.reg-cust-modal').css({'top': '-1000%'})
});

$('.login-cust-hide').on('click', function(){
  $('.log-cust-inner').css({'display': 'none'})
});

$('.login-cust-hide').on('click', function(){
  $('.reg-cust-inner').css({'display': 'block'})
});
$('.log-frm-show').on('click', function(){
  $('.log-cust-inner').css({'display': 'block'})
});

$('.log-frm-show').on('click', function(){
  $('.reg-cust-inner').css({'display': 'none'})
});
// ================ Register customer area end =====================

// ================ mobile navpage area start =====================

$('.mobile-nav-show').on('click', function(){
  $('.mobile-navpage').css({'left': '0'})
});

$('.mobile-nav-hide').on('click', function(){
  $('.mobile-navpage').css({'left': '-200%'})
});

// $('.res-shop-cart-show').on('click', function(){
//   $('.res-cart-item').addClass('show')
// });

// $('.rcart_hide').on('click', function(){
//   $('.res-cart-item').removeClass('show')
// });



$('.res-shop-cart-show').on('click', function(){
  $('.res-cart-item').addClass('show');
});

$('.rcart_hide').on('click', function(){
  $('.res-cart-item').removeClass('show')
});

$('.ms-drop-show').on('click', function(){
  $('.mobile-dropdown-item').addClass('active');
});

$('.dropdown-icon-up').on('click', function(){
  $('.mobile-dropdown-item').removeClass('active');
});

$('.mf-drop-show').on('click', function(){
  $('.mobile-dropdown-item-feature').addClass('active');
});

$('.mf-drop-hide').on('click', function(){
  $('.mobile-dropdown-item-feature').removeClass('active');
});


// ================ mobile navpage area end =====================


// ================ responsive shoppage area start =====================
$('.lshop-area-show').on('click', function(){
  $('.res-shop-area-left').css({'left': '0'})
});

$('.lshop-area-rmv').on('click', function(){
  $('.res-shop-area-left').css({'left': '-200%'})
});
// ================ responsive shoppage area end =====================

// ================ responsive feature page area start =====================
$('.lfeat-area-show').on('click', function(){
  $('.res-feature-area-left').css({'left': '0'})
});

$('.lfeat-area-rmv').on('click', function(){
  $('.res-feature-area-left').css({'left': '-200%'})
});
// ================ responsive feature page area end =====================
