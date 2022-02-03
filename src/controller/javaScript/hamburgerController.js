function hamburgerController() {
    var checkBox = document.getElementById("tog");
    var navigation = document.getElementById("navigation");
    var overlay = document.getElementById("ovr");

    if (checkBox.checked == true){
        navigation.style.visibility = "visible";
        overlay.style.visibility = "visible";
    } else {
        navigation.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
    }
  }


//Funktioniert nicht wie gedacht :(
//Soll eigentlich, sobald der Hamburger-Button verschwindet
//die Navigation auf 'visible' und den Overlay auf 'hidden' setzen.
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var menuWrap = document.getElementById("wrap");
        if (menuWrap.style.visibility !== "visible") {
            var navigation = document.getElementById("navigation");
            var overlay = document.getElementById("ovr");
            navigation.style.visibility = "visible";
            overlay.style.visibility = "hidden";
        }
    });
});

observer.observe(document.getElementById("wrap"), {
    attributes: true,
    attributeFilter: ['style']
});