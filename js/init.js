new WOW().init();
		var backstyle3 = document.querySelector("#backstyle3");
    var backstyle1 = document.querySelector("#backstyle1");
    var backstyle2 = document.querySelector("#backstyle2");
 
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }
 
    window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
    var xScrollPosition;
    var yScrollPosition;
 
    function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
 
        setTranslate(0, yScrollPosition * -0.2, backstyle3);
        setTranslate(0, yScrollPosition * -4.5, backstyle1);
        setTranslate(0, yScrollPosition * .5, backstyle2);
 
        requestAnimationFrame(scrollLoop);
    }