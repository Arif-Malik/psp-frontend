jQuery(document).ready(function() {


//Compare Popup
  $(".thumbnail.product-tile .hover-details .custom-checkbox label").click(function() {
    //$(".compare-section").show();

    var compareBoxHTML = "";
    var compareBoxImg = "";
    var compareBoxHead = "";
    var compareBoxTxt = "";
    var thisChk = $(this);
    var filterCount = "";

    if(!$(this).hasClass("filter-checked")) {
      //alert("asdas");
      compareBoxImg = thisChk.parents(".product-tile").find(".prod-img-tile").attr("src");
      compareBoxHead = thisChk.parents(".product-tile").find(".caption h3").text();
      compareBoxTxt = thisChk.parents(".product-tile").find(".caption p").text();
      compareBoxHTML = '<div class="col-sm-4"><div class="compare-prd-box clearfix"><span class="cross-prd"></span><div class="compare-prd-img"><img class="center-block" src="'+compareBoxImg+'" alt=""></div><div class="compare-prd-txt"><h6>'+compareBoxHead+'</h6><p>'+compareBoxTxt+'</p></div></div></div>'
      thisChk.parents(".product-tile").parent().addClass("filter-compare-col");
      filterCount = $(".product-categories-grid").find(".filter-compare-col").length;
      //alert(filterCount);
      if(filterCount == 4) {
        $('.modalErrors').modal();
      }
      else if(filterCount == 3) {
        
        $(".col-compare-prd-box-empty").remove();
        $(".compare-boxs-landing").append(compareBoxHTML);
      }
      else if(filterCount == 2) {
        $(".col-compare-prd-box-empty:first").remove();
        $(".compare-boxs-landing .col-compare-prd-box-empty").before(compareBoxHTML);
      }
      else {
        $(".compare-boxs-landing .col-compare-prd-box-empty:first").before(compareBoxHTML);
      }
      $(".compare-section").show();
      
    }
  });
  //Remove Compare

  // Slider Product-tile products-tile-slider
  $('.products-tile-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    nextArrow: ".tile-arrow-next",
    prevArrow: ".tile-arrow-prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
//news-tiles-slider
$('.news-tiles-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    nextArrow: ".news-tile-arrow-next",
    prevArrow: ".news-tile-arrow-prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
  // if ($(window).width() < 767) {
  //   $('.news-tiles-slider').unslick();
  // }

  var emptyDivHTML = '<div class="col-sm-4 col-compare-prd-box-empty"><div class="compare-prd-box-empty clearfix"></div></div>'
  var removeProdFun = function() {

  }
  $(document).on("click", ".cross-prd",function() {
    //alert("asd");
    $(this).parent().parent().remove();
    $(".compare-boxs-landing").append(emptyDivHTML);
  });

  //Dog Finder Questuions
  $(".qus-btns .btn-next").click(function() {
    if($(this).hasClass("link-disable")) {
      alert("please Select your option");
    }
    else {
      $(this).parents(".qus-box").hide();
      $(this).parents(".qus-box").next().fadeIn();
    }
    
  });
  $(".qus-btns .btn-back").click(function() {
    $(this).parents(".qus-box").hide();
    $(this).parents(".qus-box").prev().fadeIn();
    
  });

  $(".qus-options-list li label").click(function(){
    $(this).addClass("optionActive");
    $(this).parents(".qus-box").find(".btn-next").removeClass("link-disable");
  });
  //END Food Finder Script
  //Load Contents on scroll
  $(window).scroll(function(){
    var footerTop = $(".main-footer").offset().top;
    //alert(newsLetterTop);
    var timeout;
    footerTop = footerTop - 600
		if ($(this).scrollTop() > footerTop) {
      clearTimeout(timeout);  
      timeout = setTimeout(function() {
          // do your stuff
          //alert("asd");
      }, 1000);
		//	$('.news-chk').show();
      //$('.news-chk-1').show();
      
		} 
    // else {
		// 	$('.scrollToTop').fadeOut();
		// }
	});
  $(".get-start-btn").click(function() {
    $(".qus-sections > div.qus-box:first").show();
  });
//WOW Scroll
// var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null // optional scroll container selector, otherwise use window
//   }
// );
// wow.init();
  var filterAccordion = document.getElementsByClassName("filter-accordion");
  // Get the modal
  var productModal = document.getElementById('product-zoom-modal');
  //var productZoom = document.getElementById('zoom-btn');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var Modernizr = window.Modernizr;
  var query = Modernizr.mq('(max-width: 767px)');

  // var url = GMaps.staticMapURL({
  //     size: [610, 300],
  //     lat: -12.043333,
  //     lng: -77.028333,
  //     markers: [
  //         {lat: -12.043333, lng: -77.028333}
  //     ]
  // });

  // $('<img/>').attr('src', url)
  //     .appendTo('#map');


  /*Header Search Bar*/
  $(".search-icon").click(function() {
    $("#desktop-search").toggle('fast');
    $(".body-overlay").toggle('fast');

  });

  /*Mobile Header Search Bar*/
  $(".mobile-search-icon").click(function() {
    $("#mobile-search").toggle('fast');
    $(".body-overlay").toggle('fast');
  });

  /*Initiate tooltip*/

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /*Initiate menu instance*/
  $(function() {
    $('#dl-menu').dlmenu();
  });

  /*Modal  window*/
  $('#zoom-btn').click(function() {
    var active_li = document.getElementsByClassName("flex-active-slide")[0].firstChild.nextSibling;
    productModal.style.display = "block";
    modalImg.src = active_li.getAttribute("src");
  });
  // Get the modal element that closes the modal

  $('#product-zoom-modal').click(function() {
    productModal.style.display = "none";
  });

  // When the user clicks on <span> (x), close the modal
  //Mobile Carousel
  $('.psp-photos-slider-mobile').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false
  });

  /*Carousel*/
  $('.my-psp-photos').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false
  });


  /*
   * Stars rating configuration
   */

  $(".stars-home").rating({
    displayOnly: true,
    hoverOnClear: false
  });

  /*Slider*/
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    slideshow: false,
    animationLoop: false
  });
  $(".flex-disabled").click(function(e) {
    e.preventDefault();

    //var target;
    //if (watchedEvent === "" || watchedEvent === event.type) {
    //    target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
    //    slider.flexAnimate(target, slider.vars.pauseOnAction);
    //            slider.flexAnimate(target, slider.vars.pauseOnAction);
    //        if (!$(this).hasClass(namespace + 'disabled')) {
    //            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
    //        }
    //}
  });
  /*Show/Hide Password*/
  $(".show-pwd").mousedown(function() {
    $("#password").attr('type', 'text');
    $("#change-pass").attr('type', 'text');
  }).mouseup(function() {
    $("#password").attr('type', 'password');
    $("#change-pass").attr('type', 'password');
  }).mouseout(function() {
    $("#password").attr('type', 'password');
    $("#change-pass").attr('type', 'password');
  });

  //    Show Password of Confirm Password Field
  $(".show-pwd-re").mousedown(function() {
    $("#RePassword").attr('type', 'text');
  }).mouseup(function() {
    $("#RePassword").attr('type', 'password');
  }).mouseout(function() {
    $("#RePassword").attr('type', 'password');
  });

  $(".show-pwd").bind('touchstart', function() {
    $("#password").attr('type', 'text');
    $("#change-pass").attr('type', 'text');
  }).bind('touchend', function() {
    $("#password").attr('type', 'password');
    $("#change-pass").attr('type', 'password');
  });

  $(".show-pwd-re").bind('touchstart', function() {
    $("#RePassword").attr('type', 'text');
  }).bind('touchend', function() {
    $("#RePassword").attr('type', 'password');
  });
  /*
   *bootstrap carousel
   **/
  $('.carousel').carousel({
    interval: 5000
  });

  /*product carousel*/
  $('.prod-carousel').carousel();


  $('#accordion').on('show.bs.collapse', function() {
    $('#accordion .in').collapse('hide');
  });


  /*Filters Accordion toggle*/
  for (var i = 0; i < filterAccordion.length; i++) {
    filterAccordion[i].onclick = function() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("collapse");
    }
  }

  /*Filter checkbox transformation*/
  $(".filter-input-checkbox").change(function() {
    if ($(this).is(":checked")) {
      $(this).next().addClass("filter-checked");
    } else {
      $(this).next().removeClass("filter-checked");
    }
  });
  //
  //$("#notifyMe").change(function(event){
  //    if (this.checked){
  //        $('.notifyMe').css(" background-color","#00af41");
  //    } else {
  //        alert("You have elected to turn off checkout history.");
  //    }
  //});

  /*
   * Editable breadcrum
   */

  $("#sub-ul li").click(function() {
    var currentoption = "<li>" + $("#selected-location").text() + "</li>";
    $("#selected-location").text($(this).text());
    $("#sub-ul").addClass("selected");
    setInterval(function() { $("#sub-ul").removeClass("selected"); }, 2000);
    //$(currentoption).appendTo( "#sub-ul" );
  });

  /*
   * show/hide more record
   */

  $("#viewmorerecord").click(function() {
    $("#hideonload").show();
    $("#viewmorerecord").hide();
  });

  $("#viewlessrecord").click(function() {
    $("#hideonload").hide();
    $("#viewmorerecord").show();
  });



  /*
   * Apply toggle on window load
   */
  function applyToggle() {
    if (query) {
      $('.accordion-list').addClass('collapse');
      $('.toggle-footer').addClass('accordion-toggle');
      $(".set-toggle").attr("data-toggle", "collapse");
      $(".panel-heading").addClass("collapsed");
      $('.tab-pane').removeClass('active');
      $('#save-btn').hide();
      $('.account-sidebar> li').click(function() {
        $('.account-sidebar').hide();
        $('#save-btn').show();
        $('.account-header').hide();
      });


    } else {
      $('.accordion-list').removeClass('collapse');
      $('.toggle-footer').removeClass('accordion-toggle');
      $(".set-toggle").attr("data-toggle", "");
      $(".panel-heading").removeClass("collapsed");


      $(".product-tile").mouseenter(function() {
        $carousel = $(this).children(".prod-carousel");
        $carousel.toggle();
        img = $(this).find(".prod-img-tile");
        img.toggle();
      }).mouseleave(function() {
        $carousel = $(this).children(".prod-carousel");
        $carousel.toggle();
        img = $(this).find(".prod-img-tile");
        img.toggle();
      });
    }
  }

  applyToggle();

  // Header search suggested field

  var searchsuggested = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      'Redford Naturals in Dog Food',
      'Redford Naturals in Cat Food',
      'Redford Naturals in Category'
    ]
  });

  searchsuggested.initialize();



  $('.searchsuggested').typeahead({
    hint: true,
    highlight: true
  }, {
    source: searchsuggested
  });


  $(".searchsuggested").focusin(function() {
    $('.clear-text').show();
  });

  /* Social Slider store locator */

  $('.social-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  /* datepicker support for all browsers */

  $(function() {
    $("#datepicker").datepicker();
  });

  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    headerheight = $('header').height();
    breadcrum = $('#breadcrumb').height();
    scrollheight=headerheight + breadcrum + 70;
    if(scrollTop>scrollheight){
      $('.sl-map').addClass("sl-map-fixed");
    }
    if(scrollTop<scrollheight){
      $('.sl-map').removeClass("sl-map-fixed");
    }
    
  });

  // $(function() {
  //   headerheight = $('header').height();
  //   breadcrum = $('#breadcrumb').height();
  //   scrollheight=headerheight + breadcrum + 70;
  //   scrollTop = $(window).scrollTop();
  //   alert (scrollTop);
  //   if (window.scrollheight()>scrollheight){

  //     alert (scrollheight);
  //   }
  // });

  $('.clear-text').click(function() {
    $('.searchsuggested').typeahead('val', ' ');
    $('.clear-text').hide();
  });

  // Social Image Slider

  $("#social-slider").owlCarousel({
    autoPlay: 3000,
    pagination: false,
    navigation: true,
    items: 6,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [979, 4],
    itemsTablet: [768, 3],
    itemsMobile: [479, 3]
  });

  var width = 0;

  $('.breadcrumb-bar a.child').each(function() {
    width += $(this).outerWidth(true);
  });

  if (screen.width > 768) {
    $('.editable-breadcrum').css({ "margin-left": width + 0, "width": "auto" });
    var width = 0;
  } else {
    $('.editable-breadcrum').css({ "margin-left": 0, "width": "auto" });
    var width = 0;
  }

  (function($) {
    $(".sl-store").click(function() {
      $(".sl-store").removeClass("active");
      $(this).toggleClass("active");
    });
  })(jQuery);

  // social icons hide/show mobile
  $(".show-social-mob").click(function() {
    $(".detail-social").toggleClass("show-icons");
  });
  
});
