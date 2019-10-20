function openDrawerMenu() {
    var x = document.getElementById("main-nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}