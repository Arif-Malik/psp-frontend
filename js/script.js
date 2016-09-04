jQuery(document).ready(function () {

    var filterAccordion = document.getElementsByClassName("filter-accordion");
    // Get the modal
    var productModal = document.getElementById('product-zoom-modal');
    //var productZoom = document.getElementById('zoom-btn');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");


    /*Modal  window*/

    $('#zoom-btn').click(function() {
        var active_li=document.getElementsByClassName("flex-active-slide")[0].firstChild.nextSibling;
        productModal.style.display = "block";
        modalImg.src = active_li.getAttribute("src");
    });
    // Get the modal element that closes the modal

    $('#product-zoom-modal').click(function(){
        productModal.style.display = "none";
    });

    // When the user clicks on <span> (x), close the modal

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
        slideshow: false
    });

    /*Toggle drop-down menu*/

    //$(".yamm-fw").hover(
    //    function() {
    //        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
    //        $(this).toggleClass('open');
    //    },
    //    function() {
    //        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
    //        $(this).toggleClass('open');
    //    }
    //);


    /*
     *bootstrap carousel
     **/
    $('.carousel').carousel({
        interval: 3000
    });


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
    /*
     * Apply toggle on window load
     */
    function applyToggle() {
        var width = $(window).width();
        if ((width < 768)) {
            $('.accordion-list').addClass('collapse');
            $('.toggle-footer').addClass('accordion-toggle');
            $(".set-toggle").attr("data-toggle", "collapse");
            //$("#carousel-img").attr("src","images/PSP_02_mobile.png");

        } else {
            $('.accordion-list').removeClass('collapse');
            $('.toggle-footer').removeClass('accordion-toggle');
            $(".set-toggle").attr("data-toggle", "");
            //$("#carousel-img").attr("src","images/PSP_02.png");
        }
    }

    applyToggle();
});
