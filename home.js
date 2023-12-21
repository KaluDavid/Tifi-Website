function video() {
    var video = document.querySelector('video');
    if (video.pause) {
        video.play();
    }else {
        video.pause();
    }
}

// hamburger menu
function hamburgerMenu() {
    var x = document.getElementById("visible");
    if (x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block"
    }
}