jQuery(document).ready(function () {

    var filterAccordion = document.getElementsByClassName("filter-accordion");

    /*
     * Stars rating configuration
     */
    $(".stars-home").rating({
        displayOnly: true,
        hoverOnClear: false
    });

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
