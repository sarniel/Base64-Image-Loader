// devicePixelRatio returns the ratio of the resulotions in physical pixel.
// Retina = 2
// none = 1

var pixelRatio = window.devicePixelRatio;
var src;
var windowWidth = $(window).width();

function screenPixelRatio()
{
	if (pixelRatio >= 2) {
		console.log('retina');
	} else {
		console.log('normal');
	}
}

function loadImages() {
    $("img.lazy-me").each(function() {
        if (pixelRatio > 1) {
            src = $(this).attr("data-src-2x");
        } else {
            src = $(this).attr("data-src");
        }
        $(this).attr("src", src);
    });
}

$(document).ready(function() {
	screenPixelRatio();
	loadImages();
});