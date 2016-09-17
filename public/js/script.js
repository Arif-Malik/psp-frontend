jQuery(document).ready(function () {

    var filterAccordion = document.getElementsByClassName("filter-accordion");
    // Get the modal
    var productModal = document.getElementById('product-zoom-modal');
    //var productZoom = document.getElementById('zoom-btn');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    /*Header Search Bar*/
    $(".search-icon").click(function () {
        $(".nav-search").toggle('fast');
    });

    /*Initiate menu instance*/
    $(function () {
        $('#dl-menu').dlmenu();
    });

    /*Modal  window*/
    $('#zoom-btn').click(function () {
        var active_li = document.getElementsByClassName("flex-active-slide")[0].firstChild.nextSibling;
        productModal.style.display = "block";
        modalImg.src = active_li.getAttribute("src");
    });
    // Get the modal element that closes the modal

    $('#product-zoom-modal').click(function () {
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
    $(".flex-disabled").click(function (e) {
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
    $(".show-pwd").mousedown(function () {
        $("#password").attr('type', 'text');
    }).mouseup(function () {
        $("#password").attr('type', 'password');
    }).mouseout(function () {
        $("#password").attr('type', 'password');
    });

    //    Show Password of Confirm Password Field
    $(".show-pwd-re").mousedown(function () {
        $("#RePassword").attr('type', 'text');
    }).mouseup(function () {
        $("#RePassword").attr('type', 'password');
    }).mouseout(function () {
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


    $('#accordion').on('show.bs.collapse', function () {
        $('#accordion .in').collapse('hide');
    });


    /*Filters Accordion toggle*/
    for (var i = 0; i < filterAccordion.length; i++) {
        filterAccordion[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("collapse");
        }
    }

    /*Filter checkbox transformation*/
    $(".filter-input-checkbox").change(function () {
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
     * Apply toggle on window load
     */
    function applyToggle() {
        var width = $(window).width();
        if ((width < 768)) {
            $('.accordion-list').addClass('collapse');
            $('.toggle-footer').addClass('accordion-toggle');
            $(".set-toggle").attr("data-toggle", "collapse");
        } else {
            $('.accordion-list').removeClass('collapse');
            $('.toggle-footer').removeClass('accordion-toggle');
            $(".set-toggle").attr("data-toggle", "");

            $(".product-tile").mouseenter(function () {
                $carousel = $(this).children(".prod-carousel");
                $carousel.toggle();
                img = $(this).find(".prod-img-tile");
                img.toggle();
            }).mouseleave(function () {
                $carousel = $(this).children(".prod-carousel");
                $carousel.toggle();
                img = $(this).find(".prod-img-tile");
                img.toggle();
            });
        }
    }

    applyToggle();
});

