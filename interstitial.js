//jQuery function to open interstital website for giving notice about trusted and non-trusted websites. 

;
(function ($) {
    $(document).ready(function () {

        //clicking on link opens up interstitial website
        $('a').click(function (e) {

            //fetch link and assign it to a variable            
            var URL = $(this).prop("href");
            var domain = $(this).prop("host");

            //prevent default action of opening link in new tab(before waiting for interstitial website to open)
            e.preventDefault();

            //replace "current domain name" in paragraph with actual domain name
            var str = $('#notice_trusted').text();
            var newstr = str.replace('domain name', domain);
            $('#notice_trusted').html(newstr);

            //open interstitial website
            $('.interstitial').bPopup();
            $('.continue').click(function () {

                //open current link in new tab
                window.open(URL, '_blank');
                $('.interstitial').bPopup().close();

                //avoid opening multiple tabs
                history.go();
            });

            //close interstital website and return to current page
            $('.cancel').click(function () {
                $('.interstitial').bPopup().close();
            });
        });
    });
})(jQuery);