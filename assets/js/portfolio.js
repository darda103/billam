(function ($) {
    'use strict';
    $(document).ready(function(){
        //==========portfolio active button===========
        $('.btn-box').on( 'click', '.control-btn', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
        //==========portfolio data filter===========
            var containerEl = document.querySelector('.items');
            var mixer = mixitup(containerEl);
        //==========portfolio image popup / magnific popup===========
        $('.popup').magnificPopup({
            type:'image'
        });
    });
}(jQuery));