function stars() {
    let e = document.createElement("div");
    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.setAttribute("class", "star");
    document.body.appendChild(e);

    e.style.left = Math.random() * +innerWidth + "px";
    e.style.fontSize = 12 + size + "px";
    e.style.animationDuration = 4 + duration + "s";

    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function () {
    stars();
}, 100);
