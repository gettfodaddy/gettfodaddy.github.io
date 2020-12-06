if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = [ "-/d", "-/da", "-/dar", "-/dark", "-/darkn", "-/darkn3", "-/darkn3s", "-/darkn3s.", "-/darkn3s.x", "-/darkn3s.xyz", "-/darkn3s.xyz", "-/darkn3s.xyz", "-/darkn3s.xyz", "-/darkn3s.xyz", "-/darkn3s.xyz", "-/darkn3s.xy", "-/darkn3s.x", "-/darkn3s.", "-/darkn3s", "-/darkn3", "-/darkn", "-/dark", "-/dar", "-/da", "-/d", "-/d","-/", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
