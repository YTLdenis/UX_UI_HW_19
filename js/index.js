$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


for (var i = 0; i < 6; i++) {
    document.querySelectorAll("a")[i].addEventListener("click", function () {
        
        var audio = new Audio("sound/click.mp3");
        audio.play();
        
    });
}