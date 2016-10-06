jQuery(document).ready(function() {

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

  $('.clear-text').click(function() {
    $('.searchsuggested').typeahead('val', ' ');
    $('.clear-text').hide();
  });

  // Social Image Slider

  $("#social-slider").owlCarousel({
    autoPlay: 3000,
    pagination: false,
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

  //alert (width);
  //$('body').css('width', width + 250);

});
