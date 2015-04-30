$(document).ready(function() {
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");

    menuToggle.on('click', function(e) {
        e.preventDefault();
        $('#js-navigation-menu').slideToggle(function(){
            if($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
            }
        });
    });

});
function expandIt(){
    var expanderTrigger = document.getElementById("js-expander-trigger");
    var expanderContent = document.getElementById("js-expander-content");

    $('#js-expander-trigger').click(function(){
        $(this).toggleClass("expander-hidden");
    });
}

